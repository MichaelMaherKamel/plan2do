import { LogOut, MoveUpRight, Settings, CreditCard, FileText } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Session } from 'next-auth'
import { signOut } from '@/auth'

interface MenuItem {
  label: string
  value?: string
  href: string
  icon?: React.ReactNode
  external?: boolean
}

interface Profile01Props {
  session: Session
  subscription?: string
}

export default function Profile01({ session, subscription = 'Free Trial' }: Profile01Props) {
  const { name, email } = session.user || {}
  const userName = name || 'User'
  const userRole = email || ''

  const menuItems: MenuItem[] = [
    {
      label: 'Subscription',
      value: subscription,
      href: '#',
      icon: <CreditCard className='w-4 h-4' />,
      external: false,
    },
    {
      label: 'Settings',
      href: '#',
      icon: <Settings className='w-4 h-4' />,
    },
  ]

  return (
    <div className='w-full max-w-sm mx-auto'>
      <div className='relative overflow-hidden rounded-2xl border border-primary/20 glass-card'>
        <div className='relative px-6 pt-6 pb-6'>
          <div className='mb-6'>
            {/* Profile Info - removed image, keeping only name and email */}
            <div className='flex-1'>
              <h2 className='text-xl font-semibold text-foreground'>{userName}</h2>
              <p className='text-muted-foreground'>{userRole}</p>
            </div>
          </div>
          <div className='h-px bg-primary/20 my-6' />
          <div className='space-y-2'>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'flex items-center justify-between p-2',
                  'hover:bg-primary/10 rounded-lg transition-colors duration-200'
                )}
              >
                <div className='flex items-center gap-2'>
                  <div className='text-primary'>{item.icon}</div>
                  <span className='text-sm font-medium text-foreground'>{item.label}</span>
                </div>
                <div className='flex items-center'>
                  {item.value && <span className='text-sm text-muted-foreground mr-2'>{item.value}</span>}
                  {item.external && <MoveUpRight className='w-4 h-4 text-primary' />}
                </div>
              </Link>
            ))}
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  )
}

function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button
        type='submit'
        className={cn(
          'w-full flex items-center justify-start p-2 gap-2',
          'hover:bg-primary/10 rounded-lg transition-colors duration-200',
          'text-sm font-medium text-foreground text-left'
        )}
      >
        <LogOut className='w-4 h-4 text-primary' />
        <span>Sign Out</span>
      </button>
    </form>
  )
}
