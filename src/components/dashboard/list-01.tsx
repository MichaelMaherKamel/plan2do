import { cn } from '@/lib/utils'
import {
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  SendHorizontal,
  QrCode,
  type LucideIcon,
  Plus,
  ArrowRight,
  CreditCard,
} from 'lucide-react'

interface AccountItem {
  id: string
  title: string
  description?: string
  balance: string
  type: 'savings' | 'checking' | 'investment' | 'debt'
}

interface List01Props {
  totalBalance?: string
  accounts?: AccountItem[]
  className?: string
}

const ACCOUNTS: AccountItem[] = [
  {
    id: '1',
    title: 'Main Savings',
    description: 'Personal savings',
    balance: '$8,459.45',
    type: 'savings',
  },
  {
    id: '2',
    title: 'Checking Account',
    description: 'Daily expenses',
    balance: '$2,850.00',
    type: 'checking',
  },
  {
    id: '3',
    title: 'Investment Portfolio',
    description: 'Stock & ETFs',
    balance: '$15,230.80',
    type: 'investment',
  },
  {
    id: '4',
    title: 'Credit Card',
    description: 'Pending charges',
    balance: '$1,200.00',
    type: 'debt',
  },
  {
    id: '5',
    title: 'Savings Account',
    description: 'Emergency fund',
    balance: '$3,000.00',
    type: 'savings',
  },
]

export default function List01({ totalBalance = '$26,540.25', accounts = ACCOUNTS, className }: List01Props) {
  return (
    <div
      className={cn(
        'w-full max-w-xl mx-auto',
        'glass',
        'border border-primary/20',
        'rounded-xl shadow-sm backdrop-blur-xl',
        className
      )}
    >
      {/* Total Balance Section */}
      <div className='p-4 border-b border-primary/20'>
        <p className='text-xs text-muted-foreground'>Total Balance</p>
        <h1 className='text-2xl font-semibold text-foreground'>{totalBalance}</h1>
      </div>

      {/* Accounts List */}
      <div className='p-3'>
        <div className='flex items-center justify-between mb-2'>
          <h2 className='text-xs font-medium text-foreground'>Your Accounts</h2>
        </div>

        <div className='space-y-1'>
          {accounts.map((account) => (
            <div
              key={account.id}
              className={cn(
                'group flex items-center justify-between',
                'p-2 rounded-lg',
                'hover:bg-primary/10',
                'transition-all duration-200'
              )}
            >
              <div className='flex items-center gap-2'>
                <div
                  className={cn('p-1.5 rounded-lg', {
                    'bg-emerald-100/10 dark:bg-emerald-900/20 border border-emerald-500/30': account.type === 'savings',
                    'bg-blue-100/10 dark:bg-blue-900/20 border border-blue-500/30': account.type === 'checking',
                    'bg-purple-100/10 dark:bg-purple-900/20 border border-purple-500/30': account.type === 'investment',
                    'bg-red-100/10 dark:bg-red-900/20 border border-red-500/30': account.type === 'debt',
                  })}
                >
                  {account.type === 'savings' && <Wallet className='w-3.5 h-3.5 text-emerald-500' />}
                  {account.type === 'checking' && <QrCode className='w-3.5 h-3.5 text-blue-500' />}
                  {account.type === 'investment' && <ArrowUpRight className='w-3.5 h-3.5 text-purple-500' />}
                  {account.type === 'debt' && <CreditCard className='w-3.5 h-3.5 text-red-500' />}
                </div>
                <div>
                  <h3 className='text-xs font-medium text-foreground'>{account.title}</h3>
                  {account.description && <p className='text-[11px] text-muted-foreground'>{account.description}</p>}
                </div>
              </div>

              <div className='text-right'>
                <span className='text-xs font-medium text-foreground'>{account.balance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated footer with four buttons */}
      <div className='p-2 border-t border-primary/20'>
        <div className='grid grid-cols-4 gap-2'>
          <button
            type='button'
            className={cn(
              'flex items-center justify-center gap-2',
              'py-2 px-3 rounded-lg',
              'text-xs font-medium',
              'bg-primary text-primary-foreground',
              'hover:bg-primary/90',
              'shadow-sm hover:shadow glow',
              'transition-all duration-200'
            )}
          >
            <Plus className='w-3.5 h-3.5' />
            <span>Add</span>
          </button>
          <button
            type='button'
            className={cn(
              'flex items-center justify-center gap-2',
              'py-2 px-3 rounded-lg',
              'text-xs font-medium',
              'bg-primary/10 text-primary',
              'hover:bg-primary/20',
              'border border-primary/30',
              'shadow-sm hover:shadow',
              'transition-all duration-200'
            )}
          >
            <SendHorizontal className='w-3.5 h-3.5' />
            <span>Send</span>
          </button>
          <button
            type='button'
            className={cn(
              'flex items-center justify-center gap-2',
              'py-2 px-3 rounded-lg',
              'text-xs font-medium',
              'bg-primary/10 text-primary',
              'hover:bg-primary/20',
              'border border-primary/30',
              'shadow-sm hover:shadow',
              'transition-all duration-200'
            )}
          >
            <ArrowDownLeft className='w-3.5 h-3.5' />
            <span>Top-up</span>
          </button>
          <button
            type='button'
            className={cn(
              'flex items-center justify-center gap-2',
              'py-2 px-3 rounded-lg',
              'text-xs font-medium',
              'bg-primary/10 text-primary',
              'hover:bg-primary/20',
              'border border-primary/30',
              'shadow-sm hover:shadow',
              'transition-all duration-200'
            )}
          >
            <ArrowRight className='w-3.5 h-3.5' />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  )
}
