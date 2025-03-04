import { Calendar, CheckCircle, Bell, Clock, ListTodo, Share2, Users, Star } from 'lucide-react'
import List01 from './list-01'
import List02 from './list-02'
import List03 from './list-03'

export default function Content() {
  return (
    <div className='space-y-6'>
      {/* Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='glass-card rounded-xl p-4 border border-indigo-500/20 hover:glow hover:border-indigo-500/40 transition-all duration-300 bg-gradient-to-br from-indigo-500/5 to-indigo-500/10'>
          <div className='flex items-start justify-between'>
            <h3 className='text-sm font-medium text-muted-foreground'>Active Tasks</h3>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/30'>
              <ListTodo className='w-4 h-4 text-indigo-500' />
            </div>
          </div>
          <p className='mt-2 text-2xl font-bold'>12</p>
          <div className='mt-2 flex items-center text-xs'>
            <span className='text-indigo-500 font-medium'>4 due today</span>
            <span className='ml-1 text-muted-foreground'>· 8 upcoming</span>
          </div>
        </div>

        <div className='glass-card rounded-xl p-4 border border-emerald-500/20 hover:glow hover:border-emerald-500/40 transition-all duration-300 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10'>
          <div className='flex items-start justify-between'>
            <h3 className='text-sm font-medium text-muted-foreground'>Completed</h3>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30'>
              <CheckCircle className='w-4 h-4 text-emerald-500' />
            </div>
          </div>
          <p className='mt-2 text-2xl font-bold'>27</p>
          <div className='mt-2 flex items-center text-xs'>
            <span className='text-emerald-500 font-medium'>5 today</span>
            <span className='ml-1 text-muted-foreground'>· 85% completion rate</span>
          </div>
        </div>

        <div className='glass-card rounded-xl p-4 border border-violet-500/20 hover:glow hover:border-violet-500/40 transition-all duration-300 bg-gradient-to-br from-violet-500/5 to-violet-500/10'>
          <div className='flex items-start justify-between'>
            <h3 className='text-sm font-medium text-muted-foreground'>Shared Plans</h3>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/30'>
              <Users className='w-4 h-4 text-violet-500' />
            </div>
          </div>
          <p className='mt-2 text-2xl font-bold'>5</p>
          <div className='mt-2 flex items-center text-xs'>
            <span className='text-violet-500 font-medium'>3 active collaborators</span>
          </div>
        </div>

        <div className='glass-card rounded-xl p-4 border border-amber-500/20 hover:glow hover:border-amber-500/40 transition-all duration-300 bg-gradient-to-br from-amber-500/5 to-amber-500/10'>
          <div className='flex items-start justify-between'>
            <h3 className='text-sm font-medium text-muted-foreground'>Upcoming Events</h3>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30'>
              <Bell className='w-4 h-4 text-amber-500' />
            </div>
          </div>
          <p className='mt-2 text-2xl font-bold'>8</p>
          <div className='mt-2 flex items-center text-xs'>
            <span className='text-amber-500 font-medium'>2 reminders</span>
            <span className='ml-1 text-muted-foreground'>· 3 calendar events</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Today's Tasks */}
        <div className='glass-card rounded-xl p-6 flex flex-col border border-primary/20 hover:glow hover:border-primary/40 transition-all duration-300'>
          <h2 className='text-lg font-bold text-foreground mb-4 text-left flex items-center gap-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
              <Clock className='w-4 h-4 text-primary' />
            </div>
            Today's Tasks
          </h2>
          <div className='flex-1'>
            <List01 className='h-full' />
          </div>
        </div>

        {/* My Projects */}
        <div className='glass-card rounded-xl p-6 flex flex-col border border-primary/20 hover:glow hover:border-primary/40 transition-all duration-300'>
          <h2 className='text-lg font-bold text-foreground mb-4 text-left flex items-center gap-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
              <Star className='w-4 h-4 text-primary' />
            </div>
            My Projects
          </h2>
          <div className='flex-1'>
            {/* This would be your projects list component */}
            <div className='space-y-3'>
              <div className='flex items-center justify-between p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='h-8 w-8 rounded-lg bg-indigo-500/20 flex items-center justify-center'>
                    <div className='h-2 w-2 rounded-full bg-indigo-500'></div>
                  </div>
                  <div>
                    <h4 className='font-medium'>Website Redesign</h4>
                    <p className='text-xs text-muted-foreground'>7 tasks · 2 completed</p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center -space-x-2'>
                    <div className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'>
                      JD
                    </div>
                    <div className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'>
                      AL
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center'>
                    <div className='h-2 w-2 rounded-full bg-emerald-500'></div>
                  </div>
                  <div>
                    <h4 className='font-medium'>Product Launch</h4>
                    <p className='text-xs text-muted-foreground'>12 tasks · 8 completed</p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center -space-x-2'>
                    <div className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'>
                      JD
                    </div>
                    <div className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'>
                      TS
                    </div>
                    <div className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'>
                      +2
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='h-8 w-8 rounded-lg bg-amber-500/20 flex items-center justify-center'>
                    <div className='h-2 w-2 rounded-full bg-amber-500'></div>
                  </div>
                  <div>
                    <h4 className='font-medium'>Team Retreat</h4>
                    <p className='text-xs text-muted-foreground'>5 tasks · 1 completed</p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center -space-x-2'>
                    <div className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'>
                      You
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connected Apps */}
        <div className='glass-card rounded-xl p-6 flex flex-col border border-primary/20 hover:glow hover:border-primary/40 transition-all duration-300'>
          <h2 className='text-lg font-bold text-foreground mb-4 text-left flex items-center gap-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
              <Share2 className='w-4 h-4 text-primary' />
            </div>
            Connected Apps
          </h2>
          <div className='flex-1'>
            <div className='space-y-3'>
              <div className='flex items-center justify-between p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M6 16.5V13.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12 16.5V10.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M18 16.5V7.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-medium'>Google Calendar</h4>
                    <p className='text-xs text-muted-foreground'>Last synced 10 minutes ago</p>
                  </div>
                </div>
                <div className='flex items-center text-xs text-emerald-500 font-medium bg-emerald-500/10 px-2 py-1 rounded'>
                  Connected
                </div>
              </div>

              <div className='flex items-center justify-between p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='h-10 w-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M22 6L12 13L2 6'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-medium'>WhatsApp</h4>
                    <p className='text-xs text-muted-foreground'>Last synced 25 minutes ago</p>
                  </div>
                </div>
                <div className='flex items-center text-xs text-emerald-500 font-medium bg-emerald-500/10 px-2 py-1 rounded'>
                  Connected
                </div>
              </div>

              <div className='flex items-center justify-between p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M10 14L14 9'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-medium'>Telegram</h4>
                    <p className='text-xs text-muted-foreground'>Last synced 1 hour ago</p>
                  </div>
                </div>
                <div className='flex items-center text-xs text-emerald-500 font-medium bg-emerald-500/10 px-2 py-1 rounded'>
                  Connected
                </div>
              </div>

              <div className='flex items-center justify-between p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'>
                <div className='flex items-center gap-3'>
                  <div className='h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-medium'>Outlook</h4>
                    <p className='text-xs text-muted-foreground'>Not connected</p>
                  </div>
                </div>
                <div className='flex items-center text-xs text-blue-500 font-medium'>Connect</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
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
