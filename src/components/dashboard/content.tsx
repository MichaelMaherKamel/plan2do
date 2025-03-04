import { Calendar, CreditCard, Wallet } from 'lucide-react'
import List01 from './list-01'
import List02 from './list-02'
import List03 from './list-03'

export default function Content() {
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='glass-card rounded-xl p-6 flex flex-col border border-primary/20 hover:glow hover:border-primary/40 transition-all duration-300'>
          <h2 className='text-lg font-bold text-foreground mb-4 text-left flex items-center gap-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
              <Wallet className='w-4 h-4 text-primary' />
            </div>
            Accounts
          </h2>
          <div className='flex-1'>
            <List01 className='h-full' />
          </div>
        </div>

        <div className='glass-card rounded-xl p-6 flex flex-col border border-primary/20 hover:glow hover:border-primary/40 transition-all duration-300'>
          <h2 className='text-lg font-bold text-foreground mb-4 text-left flex items-center gap-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
              <CreditCard className='w-4 h-4 text-primary' />
            </div>
            Recent Transactions
          </h2>
          <div className='flex-1'>
            <List02 className='h-full' />
          </div>
        </div>
      </div>

      <div className='glass-card rounded-xl p-6 flex flex-col items-start justify-start border border-primary/20 hover:glow hover:border-primary/40 transition-all duration-300'>
        <h2 className='text-lg font-bold text-foreground mb-4 text-left flex items-center gap-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
            <Calendar className='w-4 h-4 text-primary' />
          </div>
          Upcoming Events
        </h2>
        <List03 />
      </div>
    </div>
  )
}
