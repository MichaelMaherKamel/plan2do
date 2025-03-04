import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'

export async function middleware(request: NextRequest) {
  console.log(`Middleware running for: ${request.nextUrl.pathname}`)

  try {
    // Get the session using the auth() function (for logging purposes only)
    const session = await auth()
    console.log('Session status:', session ? 'exists' : 'not found')

    // Always allow request to proceed regardless of authentication status
    return NextResponse.next()
  } catch (error) {
    console.error('Authentication error in middleware:', error)
    // On error, still allow the request to proceed
    return NextResponse.next()
  }
}

// Empty matcher configuration means middleware won't run on any routes
export const config = {
  matcher: [],
}
