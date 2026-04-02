import { neon } from '@neondatabase/serverless'

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is missing')
}

// Create a database connection
export const sql = neon(process.env.DATABASE_URL)

// Helper for transactional queries (if needed)
export async function query<T = any>(text: string, params?: any[]): Promise<T[]> {
  return sql(text, params) as Promise<T[]>
}

// Helper for single row
export async function queryOne<T = any>(text: string, params?: any[]): Promise<T | null> {
  const rows = await sql(text, params)
  return rows[0] || null
}