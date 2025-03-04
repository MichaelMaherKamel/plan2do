import React from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import { auth } from '@/auth'

const inter = Inter({ subsets: ['latin'] })

interface MainLayoutProps {
  children: React.ReactNode
}

const LobbyLayout = async ({ children }: MainLayoutProps) => {
  const session = await auth()

  return (
    <div className='dark scroll-smooth overflow-x-hidden'>
      <div className={`${inter.className} antialiased overflow-x-hidden`}>
        <Header session={session} />
        <main className='overflow-hidden w-full'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default LobbyLayout
