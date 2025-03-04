'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Session } from 'next-auth'

export default function MobileMenuToggle({ session }: { session: Session | null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event: MouseEvent) => {
      // Only close if menu is open and click is outside both menu and menu button
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    // Function to handle Escape key press
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscKey)

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [mobileMenuOpen]) // Re-run effect when mobileMenuOpen changes

  return (
    <>
      <button
        ref={menuButtonRef}
        className='md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen ? <X className='h-6 w-6 ' /> : <Menu className='h-6 w-6' />}
      </button>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out absolute top-16 left-0 right-0 z-50 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {/* Base layer with high opacity to ensure visibility on all devices */}
        <div className='container mx-auto px-4 pt-4 pb-4 space-y-4 rounded-b-xl border-x border-b border-primary/10 bg-background/95 backdrop-blur-xl shadow-lg'>
          {/* Add an overlay div for browsers that don't support backdrop-filter */}
          <div className='absolute inset-0 bg-background/90 -z-10 rounded-b-xl'></div>
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
          {session ? (
            <Button
              asChild
              className='w-full mt-4 glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300'
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href='/dashboard'>Dashboard</Link>
            </Button>
          ) : (
            <Button
              asChild
              className='w-full mt-4 glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300'
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href='/login'>Login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
