import { db } from '@/db'
import NextAuth from 'next-auth'
import { eq } from 'drizzle-orm'
import { users } from '@/db/schema'
import Google from 'next-auth/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: 'database' },
  providers: [Google],
  callbacks: {
    async session({ session }) {
      // Make sure session.user.id exists before querying
      if (!session.user?.id) {
        console.log('No user ID in session, returning basic session')
        return session
      }

      try {
        const [user] = await db.select().from(users).where(eq(users.id, session.user.id))

        if (user?.role) {
          session.user.role = user.role
        } else {
          // Update user role to 'user'
          await db.update(users).set({ role: 'user' }).where(eq(users.id, session.user.id))
          session.user.role = 'user' // Use the new value, not the old user.role
        }
      } catch (error) {
        console.error('Error fetching user role:', error)
        // Still return the session with a default role to prevent auth failures
        session.user.role = 'user'
      }

      return session
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/auth/error',
  },
  secret: process.env.AUTH_SECRET,
})
