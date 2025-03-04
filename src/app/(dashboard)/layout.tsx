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
      <div className={`${inter.className} antialiased`}>
        <div className='flex h-screen bg-background'>
          <Sidebar />
          <div className='w-full flex flex-1 flex-col'>
            <header className='h-16 border-b border-primary/20 bg-background'>
              <TopNav session={session} />
            </header>
            <main className='flex-1 overflow-auto p-6'>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}
