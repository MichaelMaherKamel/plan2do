import { DefaultSession } from 'next-auth'
import { type User as DBUser } from '@/lib/db/schema'

declare module 'next-auth' {
  interface Session {
    user: {
      role: DBUser['role']
    } & DefaultSession['user']
  }

  // Make sure this matches the structure expected by version 0.38.0
  interface User {
    role?: DBUser['role'] // Make role optional with ?
  }
}
