import { LoginForm } from '@/components/auth/login-form'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  // Check if user is already authenticated
  const session = await auth()

  // If session exists, redirect to dashboard
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      {/* Custom Header - centered on mobile, left on desktop */}
      <header className='w-full border-b border-primary/10 bg-background/60 backdrop-blur-xl p-4'>
        <div className='container mx-auto flex justify-center lg:justify-start'>
          <Link href='/' className='group flex gap-2 items-center text-xl font-bold'>
            <div className='flex items-center gap-2'>
              <CalendarDays className='h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors' />
              <span className='bg-clip-text text-muted-foreground group-hover:text-primary transition-colors'>
                PLAN2DO AI
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-grow flex items-center justify-center p-4 relative'>
        {/* Background effects */}
        <div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90'></div>

        {/* Grid background that fills the entire section */}
        <div className='absolute inset-0 overflow-hidden'>
          <svg
            className='absolute top-0 left-0 w-full h-full opacity-10'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            <defs>
              <linearGradient id='gridFade' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stopColor='currentColor' stopOpacity='1' />
                <stop offset='85%' stopColor='currentColor' stopOpacity='1' />
                <stop offset='100%' stopColor='currentColor' stopOpacity='0' />
              </linearGradient>
            </defs>

            <path d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='url(#gridFade)' strokeWidth='0.8'></path>

            {/* Horizontal lines with fade gradient */}
            {[...Array(30)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1='0'
                y1={i * 3.33}
                x2='100'
                y2={i * 3.33}
                stroke='url(#gridFade)'
                strokeWidth='0.4'
              />
            ))}

            {/* Vertical lines with fade gradient */}
            {[...Array(30)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 3.33}
                y1='0'
                x2={i * 3.33}
                y2='100'
                stroke='url(#gridFade)'
                strokeWidth='0.4'
              />
            ))}
          </svg>
        </div>

        {/* Animated SVG pattern */}
        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
          <svg className='absolute top-0 left-0 w-full h-full opacity-10' preserveAspectRatio='none'>
            <defs>
              <pattern id='animatedGrid' width='30' height='30' patternUnits='userSpaceOnUse'>
                <path
                  d='M 30 0 L 0 0 0 30'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='0.5'
                  strokeDasharray='30,30'
                  strokeDashoffset='0'
                >
                  <animate attributeName='stroke-dashoffset' from='0' to='20' dur='3s' repeatCount='indefinite' />
                </path>
              </pattern>
            </defs>

            <rect width='100%' height='100%' fill='url(#animatedGrid)' />
          </svg>
        </div>

        {/* Glow effect */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl pointer-events-none'></div>

        {/* Animated particles */}
        <div
          className='absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-primary/60 blur-sm'
          style={{ animation: 'particle1 20s infinite ease-in-out' }}
        ></div>

        <div
          className='absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-primary/50 blur-sm'
          style={{ animation: 'particle2 18s infinite ease-in-out' }}
        ></div>

        <div
          className='absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-primary/40 blur-sm'
          style={{ animation: 'particle3 22s infinite ease-in-out' }}
        ></div>

        <div
          className='absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/70 blur-sm'
          style={{ animation: 'particle4 15s infinite ease-in-out' }}
        ></div>

        {/* Main content - responsive widths */}
        <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-10'>
          <LoginForm />
        </div>
      </main>

      {/* Custom Footer - simplified */}
      <footer className='w-full border-t border-primary/20 bg-background/80 backdrop-blur-sm'>
        <div className='container mx-auto flex flex-row gap-2 items-center justify-between px-4 py-4'>
          <p className='text-xs text-muted-foreground'>
            &copy; {new Date().getFullYear()} PLAN2DO AI. All rights reserved.
          </p>

          <div className='flex gap-4'>
            <Link
              href='https://michaelmaher-portfolio.vercel.app/'
              target='_blank'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <span className='sr-only'>Developer</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 256 256'
                fill='none'
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                  d='m80 96 40 32-40 32m56 0h40'
                />

                <rect
                  width='192'
                  height='160'
                  x='32'
                  y='48'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16.97'
                  rx='8.5'
                />
              </svg>
            </Link>

            <Link
              href='https://www.linkedin.com/in/michael-maher-216b13108/'
              target='_blank'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <span className='sr-only'>LinkedIn</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-4 w-4'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>

                <rect width='4' height='12' x='2' y='9'></rect>

                <circle cx='4' cy='4' r='2'></circle>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
