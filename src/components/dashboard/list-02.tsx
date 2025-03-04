import { cn } from '@/lib/utils'
import {
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  ShoppingCart,
  CreditCard,
  type LucideIcon,
  ArrowRight,
} from 'lucide-react'

interface Transaction {
  id: string
  title: string
  amount: string
  type: 'incoming' | 'outgoing'
  category: string
  icon: LucideIcon
  timestamp: string
  status: 'completed' | 'pending' | 'failed'
}

interface List02Props {
  transactions?: Transaction[]
  className?: string
}

const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Apple Store Purchase',
    amount: '$999.00',
    type: 'outgoing',
    category: 'shopping',
    icon: ShoppingCart,
    timestamp: 'Today, 2:45 PM',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Salary Deposit',
    amount: '$4,500.00',
    type: 'incoming',
    category: 'transport',
    icon: Wallet,
    timestamp: 'Today, 9:00 AM',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Netflix Subscription',
    amount: '$15.99',
    type: 'outgoing',
    category: 'entertainment',
    icon: CreditCard,
    timestamp: 'Yesterday',
    status: 'pending',
  },
  {
    id: '4',
    title: 'Apple Store Purchase',
    amount: '$999.00',
    type: 'outgoing',
    category: 'shopping',
    icon: ShoppingCart,
    timestamp: 'Today, 2:45 PM',
    status: 'completed',
  },
  {
    id: '5',
    title: 'Supabase Subscription',
    amount: '$15.99',
    type: 'outgoing',
    category: 'entertainment',
    icon: CreditCard,
    timestamp: 'Yesterday',
    status: 'pending',
  },
  {
    id: '6',
    title: 'Vercel Subscription',
    amount: '$15.99',
    type: 'outgoing',
    category: 'entertainment',
    icon: CreditCard,
    timestamp: 'Yesterday',
    status: 'pending',
  },
]

export default function List02({ transactions = TRANSACTIONS, className }: List02Props) {
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
      <div className='p-4'>
        <div className='flex items-center justify-between mb-3'>
          <h2 className='text-sm font-semibold text-foreground'>
            Recent Activity
            <span className='text-xs font-normal text-muted-foreground ml-1'>(23 transactions)</span>
          </h2>
          <span className='text-xs text-muted-foreground'>This Month</span>
        </div>

        <div className='space-y-1'>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={cn(
                'group flex items-center gap-3',
                'p-2 rounded-lg',
                'hover:bg-primary/10',
                'transition-all duration-200'
              )}
            >
              <div className={cn('p-2 rounded-lg', 'bg-background/50', 'border border-primary/20')}>
                <transaction.icon className='w-4 h-4 text-primary' />
              </div>

              <div className='flex-1 flex items-center justify-between min-w-0'>
                <div className='space-y-0.5'>
                  <h3 className='text-xs font-medium text-foreground'>{transaction.title}</h3>
                  <p className='text-[11px] text-muted-foreground'>{transaction.timestamp}</p>
                </div>

                <div className='flex items-center gap-1.5 pl-3'>
                  <span
                    className={cn(
                      'text-xs font-medium',
                      transaction.type === 'incoming' ? 'text-emerald-500' : 'text-red-500'
                    )}
                  >
                    {transaction.type === 'incoming' ? '+' : '-'}
                    {transaction.amount}
                  </span>
                  {transaction.type === 'incoming' ? (
                    <ArrowDownLeft className='w-3.5 h-3.5 text-emerald-500' />
                  ) : (
                    <ArrowUpRight className='w-3.5 h-3.5 text-red-500' />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='p-2 border-t border-primary/20'>
        <button
          type='button'
          className={cn(
            'w-full flex items-center justify-center gap-2',
            'py-2 px-3 rounded-lg',
            'text-xs font-medium',
            'bg-gradient-to-r from-primary to-primary/80',
            'text-primary-foreground',
            'hover:from-primary/90 hover:to-primary/70',
            'shadow-sm hover:shadow glow',
            'transform transition-all duration-200',
            'hover:-translate-y-0.5',
            'active:translate-y-0',
            'focus:outline-none focus:ring-2',
            'focus:ring-primary/50 focus:ring-offset-2'
          )}
        >
          <span>View All Transactions</span>
          <ArrowRight className='w-3.5 h-3.5' />
        </button>
      </div>
    </div>
  )
}
