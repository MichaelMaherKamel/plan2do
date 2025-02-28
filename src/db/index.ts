import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// Initialize the connection
const sql = postgres(process.env.DATABASE_URL!)
export const db = drizzle(sql)
