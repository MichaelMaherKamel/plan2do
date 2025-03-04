'use client'

import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  // Placeholder for actual theme toggle functionality
  // Would typically use a theme context or similar
  const [isDark, setIsDark] = useState(true)

  return (
    <button
      type='button'
      className='relative p-1.5 sm:p-2 hover:bg-primary/10 rounded-full transition-colors'
      onClick={() => setIsDark(!isDark)}
    >
      <Sun className='h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90' />
      <Moon className='absolute h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-primary transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
      <span className='sr-only'>Toggle theme</span>
    </button>
  )
}
