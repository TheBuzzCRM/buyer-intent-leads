import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret'
const JWT_EXPIRY = '7d' // 7 days

export interface UserPayload {
  id: string
  email: string
  role: 'admin' | 'user'
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export function generateToken(payload: UserPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY })
}

export function verifyToken(token: string): UserPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as UserPayload
  } catch (err) {
    console.error('JWT verification failed:', err)
    return null
  }
}

export function extractTokenFromHeader(authHeader: string | null): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null
  return authHeader.substring(7)
}

export async function authenticateUser(email: string, password: string): Promise<{ token: string; user: UserPayload } | null> {
  // This will be replaced with actual DB lookup
  // For now, mock check against env vars
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH // Not set yet
  if (email === adminEmail && password === process.env.ADMIN_PASSWORD) {
    // In real scenario, we'd compare hash
    const userPayload: UserPayload = { id: '1', email, role: 'admin' }
    const token = generateToken(userPayload)
    return { token, user: userPayload }
  }
  return null
}