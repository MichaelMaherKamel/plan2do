import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PLAN2DO - AI-Powered Task & Calendar Management',
  description:
    'PLAN2Do AI intelligently connects your tasks, plans, and calendar to create seamless workflows that adapt to your life.',
  themeColor: '#aa55ff',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark scroll-smooth overflow-x-hidden'>
      <body className={`${inter.className} antialiased overflow-x-hidden max-w-full`}>
        <Header />
        <div className='relative overflow-hidden w-full'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
