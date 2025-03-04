import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full border-t border-primary/20 bg-background/80 backdrop-blur-sm z-50 relative'>
      {/* <div className='container mx-auto flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:justify-between'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 items-center text-xl font-bold'>
            <CalendarDays className='h-6 w-6 text-primary' />
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70'>
              PLAN2DO AI
            </span>
          </div>
          <p className='text-sm text-muted-foreground'>
            Intelligent task management and calendar automation powered by AI.
          </p>
        </div>
        <div className='flex flex-col gap-2 lg:flex-row lg:gap-8'>
          <div className='space-y-2'>
            <h4 className='font-medium'>Product</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Features
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Integrations
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4 className='font-medium'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h4 className='font-medium'>Resources</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Support
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className='border-t border-primary/10 bg-background/30'>
        <div className='container mx-auto flex flex-row gap-2 items-center justify-between px-4 py-6'>
          <p className='text-xs text-muted-foreground'>
            &copy; {new Date().getFullYear()} PLAN2DO AI. All rights reserved.
          </p>
          <div className='flex gap-4'>
            {/* <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
              <span className='sr-only'>Twitter</span>
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
                <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
              </svg>
            </Link> */}

            {/* <Link href='#' className='text-muted-foreground hover:text-primary transition-colors'>
              <span className='sr-only'>GitHub</span>
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
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                <path d='M9 18c-4.51 2-5-2-7-2'></path>
              </svg>
            </Link> */}
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
      </div>
    </footer>
  )
}
