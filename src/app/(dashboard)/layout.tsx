// src/app/(dashboard)/layout.tsx
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  // Authentication check
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className='dark scroll-smooth'>
      <div className={`${inter.className} antialiased min-h-screen`}>
        <div className='flex h-screen overflow-hidden bg-background'>
          <Sidebar />
          <div className='flex flex-1 flex-col w-full relative'>
            <header className='h-16 border-b border-primary/20 bg-background fixed top-0 left-0 right-0 z-40 lg:left-64'>
              <TopNav session={session} />
            </header>
            <main className='flex-1 overflow-auto p-6 pt-4 pb-20 mt-16'>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}
