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
    const settings = await query('SELECT key, value FROM seo_settings')
    const formatted = settings.reduce((acc: any, curr: any) => {
      acc[curr.key] = curr.value
      return acc
    }, {})

    return NextResponse.json(formatted)
  } catch (error) {
    console.error('Failed to fetch SEO settings:', error)
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
    const { key, value } = data

    if (!key) {
      return NextResponse.json({ error: 'Key is required' }, { status: 400 })
    }

    await query(
      `INSERT INTO seo_settings (key, value, updated_at) 
       VALUES ($1, $2, CURRENT_TIMESTAMP)
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = CURRENT_TIMESTAMP`,
      [key, JSON.stringify(value)]
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to save SEO setting:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}