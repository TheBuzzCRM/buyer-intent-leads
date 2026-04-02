import { NextResponse } from 'next/server'
import { query, queryOne } from '@/lib/neon'
import { verifyToken, extractTokenFromHeader } from '@/lib/auth'
import { cookies, headers } from 'next/headers'

async function getAuthUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value || 
                extractTokenFromHeader((await headers()).get('authorization'))
  
  if (!token) return null
  return verifyToken(token)
}

export async function GET() {
  const user = await getAuthUser()
  if (!user || user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const scripts = await query('SELECT * FROM embed_scripts ORDER BY created_at DESC')
    return NextResponse.json(scripts)
  } catch (error) {
    console.error('Failed to fetch embed scripts:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const user = await getAuthUser()
  if (!user || user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()
    const { name, script, location, enabled } = data

    if (!name || !script || !location) {
      return NextResponse.json({ error: 'Name, script, and location are required' }, { status: 400 })
    }

    const result = await queryOne(
      `INSERT INTO embed_scripts (name, script, location, enabled, updated_at) 
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
       RETURNING *`,
      [name, script, location, enabled ?? true]
    )

    return NextResponse.json(result)
  } catch (error) {
    console.error('Failed to create embed script:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const user = await getAuthUser()
  if (!user || user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    await query('DELETE FROM embed_scripts WHERE id = $1', [id])
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete embed script:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}