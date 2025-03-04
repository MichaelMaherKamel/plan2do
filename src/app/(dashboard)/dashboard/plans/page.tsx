import React from 'react'
import {
  ListTodo,
  Plus,
  ChevronRight,
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  AlertCircle,
  MoreHorizontal,
  Star,
  Users,
  Tag,
  Inbox,
  Folder,
  Filter,
} from 'lucide-react'

// TypeScript interfaces
interface PlanCardProps {
  title: string
  description: string
  progress: number
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  tasks: number
  completed: number
  members: number
  tags: string[]
}

interface PlanItemProps {
  title: string
  subtitle: string
  progress: number
  dueDate: string
  tasksCount: number
  completedCount: number
}

interface SharedPlanItemProps {
  title: string
  subtitle: string
  owner: string
  dueDate: string
  tasksCount: number
  completedCount: number
  memberCount: number
}

interface CategoryCardProps {
  name: string
  icon: React.ReactNode
  count: number | null
  color: string
}

const PlansPage = () => {
  return (
    <div className='w-full space-y-6'>
      {/* Header with title and action button */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>My Plans</h1>
        <button className='flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'>
          <Plus className='w-4 h-4' />
          <span>Create Plan</span>
        </button>
      </div>

      {/* Plans filter tabs */}
      <div className='flex space-x-2 pb-2 border-b border-border'>
        <button className='px-3 py-1.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground'>
          All Plans
        </button>
        <button className='px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-background/80'>Personal</button>
        <button className='px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-background/80'>Work</button>
        <button className='px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-background/80'>Shared</button>
      </div>

      {/* Priority Plans */}
      <div className='glass-card rounded-xl p-6 border border-amber-500/20'>
        <h2 className='text-lg font-bold mb-4 flex items-center gap-2 text-amber-500'>
          <Star className='w-5 h-5' />
          Priority Plans
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <PlanCard
            title='Product Launch'
            description='Coordinate marketing and PR activities'
            progress={75}
            dueDate='Tomorrow'
            priority='high'
            tasks={12}
            completed={9}
            members={3}
            tags={['Work', 'Marketing']}
          />
          <PlanCard
            title='Team Meeting Prep'
            description='Prepare presentation and agenda items'
            progress={45}
            dueDate='Today'
            priority='high'
            tasks={5}
            completed={2}
            members={1}
            tags={['Work', 'Meetings']}
          />
          <PlanCard
            title='Weekly Shopping'
            description='Get groceries and household items'
            progress={20}
            dueDate='Saturday'
            priority='medium'
            tasks={8}
            completed={2}
            members={2}
            tags={['Personal', 'Errands']}
          />
        </div>
      </div>

      {/* My Recent Plans */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Active Plans */}
        <div className='glass-card rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300'>
          <h2 className='text-lg font-bold mb-4 flex items-center gap-2 text-indigo-500'>
            <ListTodo className='w-5 h-5' />
            Active Plans
          </h2>

          <div className='space-y-4'>
            <PlanItem
              title='Home Renovation Ideas'
              subtitle='Collect inspirations and quotes'
              progress={30}
              dueDate='Next week'
              tasksCount={7}
              completedCount={2}
            />
            <PlanItem
              title='Q1 Report'
              subtitle='Prepare quarterly analysis'
              progress={65}
              dueDate='3 days'
              tasksCount={9}
              completedCount={6}
            />
            <PlanItem
              title='Vacation Planning'
              subtitle='Book flights and accommodations'
              progress={45}
              dueDate='2 weeks'
              tasksCount={12}
              completedCount={5}
            />
            <PlanItem
              title='Learning Plan'
              subtitle='Complete React course modules'
              progress={20}
              dueDate='1 month'
              tasksCount={8}
              completedCount={2}
            />
          </div>

          <button className='mt-4 flex items-center text-sm text-indigo-500 hover:underline'>
            View all active plans
            <ChevronRight className='w-4 h-4 ml-1' />
          </button>
        </div>

        {/* Shared Plans */}
        <div className='glass-card rounded-xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300'>
          <h2 className='text-lg font-bold mb-4 flex items-center gap-2 text-violet-500'>
            <Users className='w-5 h-5' />
            Shared With Me
          </h2>

          <div className='space-y-4'>
            <SharedPlanItem
              title='Team Offsite'
              subtitle='Plan team building activities'
              owner='Sarah K.'
              dueDate='Mar 15'
              tasksCount={12}
              completedCount={5}
              memberCount={6}
            />
            <SharedPlanItem
              title='Client Presentation'
              subtitle='Finalize slides and demos'
              owner='Michael T.'
              dueDate='Mar 12'
              tasksCount={7}
              completedCount={4}
              memberCount={3}
            />
            <SharedPlanItem
              title='Project Roadmap'
              subtitle='Define Q2 milestones'
              owner='David L.'
              dueDate='Mar 22'
              tasksCount={14}
              completedCount={2}
              memberCount={5}
            />
          </div>

          <button className='mt-4 flex items-center text-sm text-violet-500 hover:underline'>
            View all shared plans
            <ChevronRight className='w-4 h-4 ml-1' />
          </button>
        </div>
      </div>

      {/* Plan Categories */}
      <div className='glass-card rounded-xl p-6 border border-primary/20'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-bold flex items-center gap-2'>
            <Folder className='w-5 h-5 text-primary' />
            Plan Categories
          </h2>
          <button className='flex items-center gap-1 text-sm text-muted-foreground'>
            <Filter className='w-4 h-4' />
            Filter
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <CategoryCard
            name='Work'
            icon={<Inbox className='w-4 h-4 text-blue-500' />}
            count={8}
            color='border-blue-500/20 bg-blue-500/5'
          />
          <CategoryCard
            name='Personal'
            icon={<Star className='w-4 h-4 text-amber-500' />}
            count={6}
            color='border-amber-500/20 bg-amber-500/5'
          />
          <CategoryCard
            name='Health'
            icon={<AlertCircle className='w-4 h-4 text-emerald-500' />}
            count={3}
            color='border-emerald-500/20 bg-emerald-500/5'
          />
          <CategoryCard
            name='Education'
            icon={<Inbox className='w-4 h-4 text-violet-500' />}
            count={5}
            color='border-violet-500/20 bg-violet-500/5'
          />
          <CategoryCard
            name='Travel'
            icon={<Inbox className='w-4 h-4 text-rose-500' />}
            count={2}
            color='border-rose-500/20 bg-rose-500/5'
          />
          <CategoryCard
            name='Events'
            icon={<CalendarIcon className='w-4 h-4 text-cyan-500' />}
            count={4}
            color='border-cyan-500/20 bg-cyan-500/5'
          />
          <CategoryCard
            name='Projects'
            icon={<Inbox className='w-4 h-4 text-orange-500' />}
            count={7}
            color='border-orange-500/20 bg-orange-500/5'
          />
          <CategoryCard
            name='+ Create New'
            icon={<Plus className='w-4 h-4 text-muted-foreground' />}
            count={null}
            color='border-border bg-background/50'
          />
        </div>
      </div>

      {/* Recently Completed */}
      <div className='glass-card rounded-xl p-6 border border-emerald-500/20'>
        <h2 className='text-lg font-bold mb-4 flex items-center gap-2 text-emerald-500'>
          <CheckCircle2 className='w-5 h-5' />
          Recently Completed
        </h2>

        <div className='space-y-4'>
          <div className='flex items-center p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20'>
            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center'>
              <CheckCircle2 className='h-5 w-5 text-emerald-500' />
            </div>
            <div className='ml-4 flex-1'>
              <h3 className='font-medium'>Website Content Review</h3>
              <p className='text-sm text-muted-foreground'>Completed on March 1, 2025</p>
            </div>
            <div className='ml-4 flex-shrink-0'>
              <span className='text-sm font-medium text-muted-foreground'>8 tasks completed</span>
            </div>
          </div>

          <div className='flex items-center p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20'>
            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center'>
              <CheckCircle2 className='h-5 w-5 text-emerald-500' />
            </div>
            <div className='ml-4 flex-1'>
              <h3 className='font-medium'>Monthly Budget Review</h3>
              <p className='text-sm text-muted-foreground'>Completed on February 28, 2025</p>
            </div>
            <div className='ml-4 flex-shrink-0'>
              <span className='text-sm font-medium text-muted-foreground'>5 tasks completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Plan Card Component
const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  progress,
  dueDate,
  priority,
  tasks,
  completed,
  members,
  tags,
}) => {
  const getPriorityColor = (priority: 'high' | 'medium' | 'low'): string => {
    switch (priority) {
      case 'high':
        return 'text-red-500'
      case 'medium':
        return 'text-amber-500'
      case 'low':
        return 'text-emerald-500'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <div className='rounded-lg border border-border p-4 hover:bg-background/50 transition-all hover:border-primary/40'>
      <div className='flex justify-between items-start mb-3'>
        <h3 className='font-medium'>{title}</h3>
        <span className={`text-xs ${getPriorityColor(priority)} flex items-center`}>
          <AlertCircle className='w-3 h-3 mr-1' />
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </span>
      </div>

      <p className='text-sm text-muted-foreground mb-4'>{description}</p>

      <div className='mt-3 mb-2'>
        <div className='flex justify-between text-xs mb-1'>
          <span className='font-medium'>
            {completed}/{tasks} tasks completed
          </span>
          <span className='font-bold'>{progress}%</span>
        </div>
        <div className='h-2 w-full bg-background rounded-full overflow-hidden'>
          <div className='h-full rounded-full bg-primary' style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center gap-2'>
          <div className='flex -space-x-2'>
            {Array(members)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'
                >
                  {['JD', 'AK', 'TM'][i]}
                </div>
              ))}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-muted-foreground flex items-center'>
            <Clock className='w-3 h-3 mr-1' />
            {dueDate}
          </span>
          <button className='text-muted-foreground hover:text-primary'>
            <MoreHorizontal className='h-4 w-4' />
          </button>
        </div>
      </div>

      <div className='mt-3 flex items-center gap-2'>
        {tags.map((tag, index) => (
          <span key={index} className='text-xs bg-background/80 border border-border px-2 py-0.5 rounded-full'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

// Plan Item Component
const PlanItem: React.FC<PlanItemProps> = ({ title, subtitle, progress, dueDate, tasksCount, completedCount }) => {
  return (
    <div className='flex items-center p-3 rounded-lg hover:bg-background/50 transition-colors border border-border/60'>
      <div className='flex-1'>
        <h3 className='font-medium'>{title}</h3>
        <p className='text-sm text-muted-foreground'>{subtitle}</p>
      </div>

      <div className='flex items-center gap-3'>
        <div className='w-16 h-16 relative flex items-center justify-center'>
          <svg className='w-full h-full' viewBox='0 0 36 36'>
            <path
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
              fill='none'
              stroke='#E2E8F0'
              strokeWidth='3'
              strokeDasharray='100, 100'
            />
            <path
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
              fill='none'
              stroke='currentColor'
              strokeWidth='3'
              className='text-primary'
              strokeDasharray={`${progress}, 100`}
              strokeLinecap='round'
            />
            <text x='18' y='20.5' textAnchor='middle' className='text-xs font-medium fill-foreground'>
              {progress}%
            </text>
          </svg>
        </div>

        <div className='text-right'>
          <div className='text-xs font-medium text-muted-foreground'>
            {completedCount}/{tasksCount} tasks
          </div>
          <div className='text-xs text-muted-foreground mt-1'>Due {dueDate}</div>
        </div>
      </div>
    </div>
  )
}

// Shared Plan Item Component
const SharedPlanItem: React.FC<SharedPlanItemProps> = ({
  title,
  subtitle,
  owner,
  dueDate,
  tasksCount,
  completedCount,
  memberCount,
}) => {
  return (
    <div className='flex items-center p-3 rounded-lg hover:bg-background/50 transition-colors border border-border/60'>
      <div className='flex-shrink-0 h-10 w-10 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center'>
        <Users className='h-5 w-5 text-violet-500' />
      </div>
      <div className='ml-3 flex-1'>
        <h3 className='font-medium'>{title}</h3>
        <div className='flex text-xs text-muted-foreground'>
          <span>From: {owner}</span>
          <span className='mx-2'>•</span>
          <span>
            {completedCount}/{tasksCount} tasks
          </span>
        </div>
      </div>
      <div className='ml-3 flex flex-col items-end'>
        <div className='flex'>
          <div className='flex -space-x-2'>
            {Array(Math.min(3, memberCount))
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'
                >
                  {['JD', 'AK', 'TM'][i]}
                </div>
              ))}
            {memberCount > 3 && (
              <div className='h-6 w-6 rounded-full bg-background border border-border flex items-center justify-center text-xs'>
                +{memberCount - 3}
              </div>
            )}
          </div>
        </div>
        <span className='text-xs text-muted-foreground mt-1 flex items-center'>
          <Clock className='w-3 h-3 mr-1' />
          Due {dueDate}
        </span>
      </div>
    </div>
  )
}

// Category Card Component
const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon, count, color }) => {
  return (
    <div
      className={`rounded-lg ${color} border p-4 flex flex-col items-center justify-center h-24 hover:border-primary/40 transition-colors cursor-pointer`}
    >
      <div className='flex items-center justify-center h-8 w-8 rounded-full bg-background/50 mb-2'>{icon}</div>
      <h3 className='font-medium text-sm'>{name}</h3>
      {count !== null && <p className='text-xs text-muted-foreground'>{count} plans</p>}
    </div>
  )
}

export default PlansPage
