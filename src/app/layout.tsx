import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PLAN2DO - AI-Powered Task & Calendar Management',
  description:
    'PLAN2Do AI intelligently connects your tasks, plans, and calendar to create seamless workflows that adapt to your life.',
}

// Add themeColor to the viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#aa55ff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark scroll-smooth overflow-x-hidden'>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <SessionProvider>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
