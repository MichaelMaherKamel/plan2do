import { cn } from '@/lib/utils'
import {
  Calendar,
  Users,
  FileText,
  type LucideIcon,
  Clock,
  ArrowRight,
  CheckCircle2,
  Timer,
  AlertCircle,
  PiggyBank,
  TrendingUp,
  CreditCard,
} from 'lucide-react'
import React from 'react'

interface ListItem {
  id: string
  title: string
  subtitle: string
  icon: LucideIcon
  iconStyle: string
  date: string
  time?: string
  amount?: string
  status: 'pending' | 'in-progress' | 'completed'
  progress?: number
}

interface List03Props {
  items?: ListItem[]
  className?: string
}

const statusConfig = {
  pending: {
    icon: Timer,
    class: 'text-amber-500',
    bg: 'bg-amber-500/10 border-amber-500/30',
  },
  'in-progress': {
    icon: AlertCircle,
    class: 'text-blue-500',
    bg: 'bg-blue-500/10 border-blue-500/30',
  },
  completed: {
    icon: CheckCircle2,
    class: 'text-emerald-500',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
  },
}

const ITEMS: ListItem[] = [
  {
    id: '1',
    title: 'Emergency Fund',
    subtitle: '3 months of expenses saved',
    icon: PiggyBank,
    iconStyle: 'savings',
    date: 'Target: Dec 2024',
    amount: '$15,000',
    status: 'in-progress',
    progress: 65,
  },
  {
    id: '2',
    title: 'Stock Portfolio',
    subtitle: 'Tech sector investment plan',
    icon: TrendingUp,
    iconStyle: 'investment',
    date: 'Target: Jun 2024',
    amount: '$50,000',
    status: 'pending',
    progress: 30,
  },
  {
    id: '3',
    title: 'Debt Repayment',
    subtitle: 'Student loan payoff plan',
    icon: CreditCard,
    iconStyle: 'debt',
    date: 'Target: Mar 2025',
    amount: '$25,000',
    status: 'in-progress',
    progress: 45,
  },
]

export default function List03({ items = ITEMS, className }: List03Props) {
  return (
    <div className={cn('w-full overflow-x-auto scrollbar-none', className)}>
      <div className='flex gap-4 min-w-full p-1'>
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              'flex flex-col',
              'w-[280px] shrink-0',
              'glass-card',
              'rounded-xl',
              'border border-primary/20',
              'hover:border-primary/40 hover:glow',
              'transition-all duration-300',
              'shadow-sm backdrop-blur-xl'
            )}
          >
            <div className='p-4 space-y-3'>
              <div className='flex items-start justify-between'>
                <div className='p-2 rounded-lg bg-primary/10 border border-primary/30'>
                  <item.icon className='w-4 h-4 text-primary' />
                </div>
                <div
                  className={cn(
                    'px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 border',
                    statusConfig[item.status].bg,
                    statusConfig[item.status].class
                  )}
                >
                  {React.createElement(statusConfig[item.status].icon, { className: 'w-3.5 h-3.5' })}
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </div>
              </div>

              <div>
                <h3 className='text-sm font-medium text-foreground mb-1'>{item.title}</h3>
                <p className='text-xs text-muted-foreground line-clamp-2'>{item.subtitle}</p>
              </div>

              {typeof item.progress === 'number' && (
                <div className='space-y-1.5'>
                  <div className='flex items-center justify-between text-xs'>
                    <span className='text-muted-foreground'>Progress</span>
                    <span className='text-foreground'>{item.progress}%</span>
                  </div>
                  <div className='h-1.5 bg-primary/10 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-primary rounded-full'
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {item.amount && (
                <div className='flex items-center gap-1.5'>
                  <span className='text-sm font-medium text-foreground'>{item.amount}</span>
                  <span className='text-xs text-muted-foreground'>target</span>
                </div>
              )}

              <div className='flex items-center text-xs text-muted-foreground'>
                <Calendar className='w-3.5 h-3.5 mr-1.5' />
                <span>{item.date}</span>
              </div>
            </div>

            <div className='mt-auto border-t border-primary/20'>
              <button
                className={cn(
                  'w-full flex items-center justify-center gap-2',
                  'py-2.5 px-3',
                  'text-xs font-medium',
                  'text-muted-foreground',
                  'hover:text-primary hover:bg-primary/10',
                  'transition-colors duration-200'
                )}
              >
                View Details
                <ArrowRight className='w-3.5 h-3.5' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
