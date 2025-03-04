import type React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={`${inter.className} antialiased min-h-screen overflow-hidden`}>{children}</div>
}
