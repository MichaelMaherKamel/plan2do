'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Session } from 'next-auth'

export default function AuthButtons({ session }: { session: Session | null }) {
  if (session) {
    return (
      <Button
        asChild
        size='sm'
        className='glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300'
      >
        <Link href='/dashboard'>Dashboard</Link>
      </Button>
    )
  }

  return (
    <Button
      asChild
      size='sm'
      className='glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300'
    >
      <Link href='/login'>Login</Link>
    </Button>
  )
}
