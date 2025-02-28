'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b border-primary/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30'>
      <div className='container mx-auto flex h-16 items-center justify-between'>
        {/* Logo */}
        <div className='flex gap-2 items-center text-xl font-bold'>
          <div className='relative'>
            <Sparkles className='h-6 w-6 text-primary' />
            <span className='absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-ping'></span>
          </div>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70'>PLAN2DO AI</span>
        </div>

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

        {/* Login Button - desktop only */}
        <div className='hidden md:block'>
          <Button
            size='sm'
            className='glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300'
          >
            Login
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className='md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className='h-6 w-6 text-primary' /> : <Menu className='h-6 w-6 text-primary' />}
        </button>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <div className='container mx-auto px-4 space-y-4 glass-card rounded-xl border border-primary/10 pb-4'>
          <Link
            href='#features'
            className='block py-2 text-base font-medium text-foreground hover:text-primary transition-colors'
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href='#how-it-works'
            className='block py-2 text-base font-medium text-foreground hover:text-primary transition-colors'
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href='#pricing'
            className='block py-2 text-base font-medium text-foreground hover:text-primary transition-colors'
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href='#faq'
            className='block py-2 text-base font-medium text-foreground hover:text-primary transition-colors'
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Button
            className='w-full mt-4 glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300'
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
