import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { Session } from 'next-auth'
import AuthButtons from '@/components/auth/AuthButton'
import MobileMenuToggle from '@/components/site/MobileMenuToggle'

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 w-full border-b border-primary/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30'>
      <div className='w-full px-4 md:px-6 flex h-16 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='group flex gap-2 items-center text-xl font-bold'>
          <div className='flex items-center gap-2'>
            <CalendarDays className='h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors' />
            <span className='bg-clip-text text-muted-foreground group-hover:text-primary transition-colors'>
              PLAN2DO AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - centered on large screens */}
        <nav className='hidden md:flex items-center justify-center space-x-6 flex-1'>
          <Link
            href='#features'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
          >
            Features
          </Link>
          <Link
            href='#how-it-works'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
          >
            How It Works
          </Link>
          <Link
            href='#pricing'
            className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
          >
            Pricing
          </Link>
          <Link href='#faq' className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
            FAQ
          </Link>
        </nav>

        {/* Auth Button - desktop only */}
        <div className='hidden md:block'>
          <AuthButtons session={session} />
        </div>

        {/* Mobile menu button */}
        <MobileMenuToggle session={session} />
      </div>
    </header>
  )
}
