import { NextResponse } from 'next/server'
import { sql, queryOne } from '@/lib/neon'
import { comparePassword, generateToken } from '@/lib/auth'
import { serialize } from 'cookie'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    // Find user in database
    const user = await queryOne(
      'SELECT id, email, password_hash, role FROM users WHERE email = $1',
      [email]
    )

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, user.password_hash)
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Generate JWT
    const payload = { id: user.id, email: user.email, role: user.role }
    const token = generateToken(payload)

    // Set cookie
    const cookie = serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, email: user.email, role: user.role }
    })

    response.headers.set('Set-Cookie', cookie)
    return response

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}