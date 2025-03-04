'use client'

import React, { useState } from 'react'
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter,
  ListFilter,
  Tag,
  Clock,
  Bell,
  CheckCircle2,
  Users,
  Repeat,
  Share2,
  Link,
  Layers,
  AlertCircle,
} from 'lucide-react'

interface Event {
  id: number
  title: string
  date: Date
  endDate: Date
  type: 'meeting' | 'appointment' | 'deadline' | 'event'
  category: string
  color: string
  participants: number
  location: string | null
  isRecurring: boolean
}

interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  events: Event[]
}

interface ServiceCardProps {
  name: string
  icon: React.ReactNode
  status: 'Connected' | 'Connect'
  events: number | null
  color: string
}

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [view, setView] = useState<'month' | 'week' | 'day'>('month')

  // This would normally come from your data store
  const events: Event[] = [
    {
      id: 1,
      title: 'Team Standup',
      date: new Date(2025, 2, 5, 9, 0),
      endDate: new Date(2025, 2, 5, 9, 30),
      type: 'meeting',
      category: 'Work',
      color: 'bg-blue-500',
      participants: 5,
      location: 'Google Meet',
      isRecurring: true,
    },
    {
      id: 2,
      title: 'Dentist Appointment',
      date: new Date(2025, 2, 12, 14, 0),
      endDate: new Date(2025, 2, 12, 15, 0),
      type: 'appointment',
      category: 'Personal',
      color: 'bg-amber-500',
      participants: 1,
      location: 'Downtown Dental',
      isRecurring: false,
    },
    {
      id: 3,
      title: 'Project Deadline',
      date: new Date(2025, 2, 15, 17, 0),
      endDate: new Date(2025, 2, 15, 17, 0),
      type: 'deadline',
      category: 'Work',
      color: 'bg-red-500',
      participants: 3,
      location: null,
      isRecurring: false,
    },
    {
      id: 4,
      title: "Sarah's Birthday",
      date: new Date(2025, 2, 20),
      endDate: new Date(2025, 2, 20),
      type: 'event',
      category: 'Personal',
      color: 'bg-violet-500',
      participants: 0,
      location: null,
      isRecurring: true,
    },
    {
      id: 5,
      title: 'Gym Session',
      date: new Date(2025, 2, 22, 18, 0),
      endDate: new Date(2025, 2, 22, 19, 30),
      type: 'event',
      category: 'Health',
      color: 'bg-emerald-500',
      participants: 1,
      location: 'FitLife Gym',
      isRecurring: true,
    },
    {
      id: 6,
      title: 'Client Presentation',
      date: new Date(2025, 2, 30, 11, 0),
      endDate: new Date(2025, 2, 30, 12, 30),
      type: 'meeting',
      category: 'Work',
      color: 'bg-cyan-500',
      participants: 7,
      location: 'Conference Room A',
      isRecurring: false,
    },
  ]

  // Generate month days
  const generateCalendarDays = (): CalendarDay[] => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)

    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay()

    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek

    // Calculate total days to display (previous month days + current month days)
    const totalDays = daysFromPrevMonth + lastDay.getDate()

    // Calculate rows needed (7 days per row)
    const rows = Math.ceil(totalDays / 7)

    // Calculate total cells in the calendar
    const totalCells = rows * 7

    // Days array
    const days = []

    // Previous month days
    const prevMonth = new Date(year, month, 0)
    const prevMonthLastDay = prevMonth.getDate()

    for (let i = 0; i < daysFromPrevMonth; i++) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - daysFromPrevMonth + i + 1),
        isCurrentMonth: false,
        events: events.filter((event) => {
          const eventDate = new Date(event.date)
          return (
            eventDate.getDate() === prevMonthLastDay - daysFromPrevMonth + i + 1 &&
            eventDate.getMonth() === month - 1 &&
            eventDate.getFullYear() === year
          )
        }),
      })
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
        events: events.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate.getDate() === i && eventDate.getMonth() === month && eventDate.getFullYear() === year
        }),
      })
    }

    // Next month days
    const remainingCells = totalCells - days.length
    for (let i = 1; i <= remainingCells; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        events: events.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate.getDate() === i && eventDate.getMonth() === month + 1 && eventDate.getFullYear() === year
        }),
      })
    }

    return days
  }

  const calendarDays: CalendarDay[] = generateCalendarDays()

  // Navigation functions
  const goToPreviousMonth = (): void => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const goToNextMonth = (): void => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const goToToday = (): void => {
    setCurrentMonth(new Date())
  }

  // Function to format time
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  }

  // Day names for the header
  const dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className='w-full space-y-6'>
      {/* Calendar Header */}
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <div className='flex items-center gap-4'>
          <h1 className='text-2xl font-bold flex items-center gap-2'>
            <CalendarIcon className='w-6 h-6 text-primary' />
            Calendar
          </h1>

          <div className='flex items-center bg-background/60 rounded-lg border border-border'>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-l-lg ${
                view === 'month' ? 'bg-primary text-primary-foreground' : 'hover:bg-background/80'
              }`}
              onClick={() => setView('month')}
            >
              Month
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium ${
                view === 'week' ? 'bg-primary text-primary-foreground' : 'hover:bg-background/80'
              }`}
              onClick={() => setView('week')}
            >
              Week
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-r-lg ${
                view === 'day' ? 'bg-primary text-primary-foreground' : 'hover:bg-background/80'
              }`}
              onClick={() => setView('day')}
            >
              Day
            </button>
          </div>
        </div>

        <div className='flex gap-2'>
          <button className='flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-background/60 hover:bg-background/80 text-sm'>
            <Filter className='w-4 h-4' />
            <span>Filter</span>
          </button>

          <button className='flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-background/60 hover:bg-background/80 text-sm'>
            <Share2 className='w-4 h-4' />
            <span>Share</span>
          </button>

          <button className='flex items-center gap-2 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm'>
            <Plus className='w-4 h-4' />
            <span>New Event</span>
          </button>
        </div>
      </div>

      {/* Calendar Integrations */}
      <div className='flex flex-wrap gap-2'>
        <div className='flex items-center px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10'>
          <div className='h-3 w-3 rounded-full bg-blue-500 mr-2'></div>
          <span className='text-sm'>Google Calendar</span>
        </div>
        <div className='flex items-center px-3 py-1.5 rounded-lg border border-green-500/30 bg-green-500/10'>
          <div className='h-3 w-3 rounded-full bg-green-500 mr-2'></div>
          <span className='text-sm'>WhatsApp Events</span>
        </div>
        <div className='flex items-center px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10'>
          <div className='h-3 w-3 rounded-full bg-blue-500 mr-2'></div>
          <span className='text-sm'>Telegram Reminders</span>
        </div>
        <div className='flex items-center px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10'>
          <div className='h-3 w-3 rounded-full bg-blue-500 mr-2'></div>
          <span className='text-sm'>Outlook Calendar</span>
        </div>
        <button className='flex items-center px-3 py-1.5 rounded-lg border border-dashed border-border'>
          <Plus className='w-3 h-3 mr-1' />
          <span className='text-sm'>Add Integration</span>
        </button>
      </div>

      {/* Month Navigation */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <button
            onClick={goToPreviousMonth}
            className='h-8 w-8 flex items-center justify-center rounded-full hover:bg-background/60'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>

          <h2 className='text-xl font-semibold'>
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>

          <button
            onClick={goToNextMonth}
            className='h-8 w-8 flex items-center justify-center rounded-full hover:bg-background/60'
          >
            <ChevronRight className='w-5 h-5' />
          </button>
        </div>

        <button
          onClick={goToToday}
          className='px-3 py-1 text-sm rounded-md border border-border hover:bg-background/60'
        >
          Today
        </button>
      </div>

      {/* Calendar Grid */}
      <div className='glass-card rounded-xl border border-primary/20 overflow-hidden'>
        {/* Day headers */}
        <div className='grid grid-cols-7 bg-background/50 border-b border-border'>
          {dayNames.map((day, index) => (
            <div
              key={index}
              className={`py-2 text-center text-sm font-medium ${index === 0 || index === 6 ? 'text-primary/80' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className='grid grid-cols-7 auto-rows-fr'>
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`min-h-[120px] p-1 border-b border-r border-border relative ${
                !day.isCurrentMonth ? 'bg-background/30 text-muted-foreground' : ''
              } ${
                day.date.getDate() === new Date().getDate() &&
                day.date.getMonth() === new Date().getMonth() &&
                day.date.getFullYear() === new Date().getFullYear()
                  ? 'bg-primary/5'
                  : ''
              } hover:bg-background/50 cursor-pointer transition-colors`}
            >
              <div className='flex justify-between items-start p-1'>
                <span
                  className={`text-sm font-medium h-6 w-6 flex items-center justify-center rounded-full ${
                    day.date.getDate() === new Date().getDate() &&
                    day.date.getMonth() === new Date().getMonth() &&
                    day.date.getFullYear() === new Date().getFullYear()
                      ? 'bg-primary text-primary-foreground'
                      : ''
                  }`}
                >
                  {day.date.getDate()}
                </span>

                {day.events.length > 0 && (
                  <span className='text-xs bg-primary/10 text-primary px-1.5 rounded-full'>{day.events.length}</span>
                )}
              </div>

              <div className='mt-1 space-y-1'>
                {day.events.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className={`px-2 py-1 rounded text-xs font-medium text-white flex items-center gap-1 ${event.color}`}
                  >
                    {event.isRecurring && <Repeat className='w-3 h-3 opacity-80' />}
                    <span className='truncate'>{event.title}</span>
                  </div>
                ))}

                {day.events.length > 3 && (
                  <div className='text-xs text-center text-muted-foreground'>+ {day.events.length - 3} more</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Today's Events */}
        <div className='glass-card rounded-xl p-6 border border-primary/20'>
          <h2 className='text-lg font-bold mb-4 flex items-center gap-2'>
            <Clock className='w-5 h-5 text-primary' />
            Today's Events
          </h2>

          <div className='space-y-3'>
            {events.filter((event) => {
              const today = new Date()
              const eventDate = new Date(event.date)
              return (
                eventDate.getDate() === today.getDate() &&
                eventDate.getMonth() === today.getMonth() &&
                eventDate.getFullYear() === today.getFullYear()
              )
            }).length > 0 ? (
              events
                .filter((event) => {
                  const today = new Date()
                  const eventDate = new Date(event.date)
                  return (
                    eventDate.getDate() === today.getDate() &&
                    eventDate.getMonth() === today.getMonth() &&
                    eventDate.getFullYear() === today.getFullYear()
                  )
                })
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event) => (
                  <div
                    key={event.id}
                    className={`flex items-center p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors`}
                  >
                    <div
                      className={`h-10 w-10 rounded-full ${event.color} flex items-center justify-center text-white`}
                    >
                      {getEventIcon(event.type)}
                    </div>

                    <div className='ml-3 flex-1'>
                      <h3 className='font-medium'>{event.title}</h3>
                      <div className='flex items-center text-sm text-muted-foreground'>
                        <Clock className='w-3 h-3 mr-1' />
                        {formatTime(event.date)} - {formatTime(event.endDate)}
                        {event.location && (
                          <>
                            <span className='mx-2'>•</span>
                            <span>{event.location}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className='ml-4 flex-shrink-0'>
                      {event.participants > 0 && (
                        <div className='flex items-center text-sm'>
                          <Users className='w-4 h-4 mr-1' />
                          <span>{event.participants}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
            ) : (
              <div className='text-center py-8 text-muted-foreground'>
                <p>No events scheduled for today</p>
                <button className='mt-2 flex items-center gap-1 mx-auto text-sm text-primary'>
                  <Plus className='w-3 h-3' />
                  <span>Add Event</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Reminders */}
        <div className='glass-card rounded-xl p-6 border border-primary/20'>
          <h2 className='text-lg font-bold mb-4 flex items-center gap-2'>
            <Bell className='w-5 h-5 text-primary' />
            Upcoming Reminders
          </h2>

          <div className='space-y-3'>
            {events
              .filter((event) => new Date(event.date) >= new Date())
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 5)
              .map((event) => (
                <div
                  key={event.id}
                  className='flex items-center p-3 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'
                >
                  <div className={`h-2 w-2 rounded-full ${event.color} mr-3`}></div>

                  <div className='flex-1'>
                    <h3 className='font-medium'>{event.title}</h3>
                    <div className='flex items-center text-xs text-muted-foreground'>
                      <CalendarIcon className='w-3 h-3 mr-1' />
                      {event.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      <span className='mx-1'>•</span>
                      <Clock className='w-3 h-3 mr-1' />
                      {formatTime(event.date)}
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <button className='text-xs px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors'>
                      Remind
                    </button>
                    {event.isRecurring && (
                      <div className='text-muted-foreground'>
                        <Repeat className='w-4 h-4' />
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Connected Calendar Services */}
      <div className='glass-card rounded-xl p-6 border border-primary/20'>
        <h2 className='text-lg font-bold mb-4 flex items-center gap-2'>
          <Link className='w-5 h-5 text-primary' />
          Connected Services
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <ServiceCard
            name='Google Calendar'
            icon={
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path d='M8 2V6' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path
                  d='M16 2V6'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2 10H22'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
            status='Connected'
            events={24}
            color='text-blue-500 bg-blue-500/10'
          />
          <ServiceCard
            name='WhatsApp'
            icon={
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M17.5 12H15M9 12H6.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
                <path
                  d='M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
                <path
                  d='M21 10V14C21 16.7614 21 18.1421 20.0711 19.0711C19.1421 20 17.7614 20 15 20H9C6.23858 20 4.85786 20 3.92893 19.0711C3 18.1421 3 16.7614 3 14V10C3 7.23858 3 5.85786 3.92893 4.92893C4.85786 4 6.23858 4 9 4H15C17.7614 4 19.1421 4 20.0711 4.92893C21 5.85786 21 7.23858 21 10Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>
            }
            status='Connected'
            events={8}
            color='text-green-500 bg-green-500/10'
          />
          <ServiceCard
            name='Telegram'
            icon={
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15 10L11 14L9 12'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3 19L7.44505 14.5635C8.67538 13.3391 10.6046 13.3391 11.8349 14.5635V14.5635C13.0653 15.7878 14.9945 15.7878 16.2248 14.5635L21 9.78835'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M13 7V7C13 5.89543 13.8954 5 15 5H17C18.1046 5 19 5.89543 19 7V7'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
            status='Connected'
            events={12}
            color='text-blue-500 bg-blue-500/10'
          />
          <ServiceCard
            name='Outlook'
            icon={
              <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M2 8L8.5 12L2 16V8Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M6 17H15C16.6569 17 18 15.6569 18 14V10C18 8.34315 16.6569 7 15 7H6'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
                <path d='M22 12H18' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
              </svg>
            }
            status='Connect'
            events={null}
            color='text-blue-500 bg-background/70'
          />
        </div>
      </div>
    </div>
  )
}

// Get appropriate icon based on event type
const getEventIcon = (type: 'meeting' | 'appointment' | 'deadline' | 'event'): React.ReactNode => {
  switch (type) {
    case 'meeting':
      return <Users className='w-5 h-5' />
    case 'appointment':
      return <Clock className='w-5 h-5' />
    case 'deadline':
      return <AlertCircle className='w-5 h-5' />
    case 'event':
    default:
      return <CalendarIcon className='w-5 h-5' />
  }
}

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ name, icon, status, events, color }) => {
  return (
    <div
      className={`rounded-lg border ${
        status === 'Connected' ? 'border-primary/30' : 'border-border'
      } p-4 flex flex-col`}
    >
      <div className='flex items-center justify-between mb-3'>
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${color}`}>{icon}</div>
        <div
          className={`text-xs font-medium px-2 py-0.5 rounded ${
            status === 'Connected'
              ? 'bg-emerald-500/10 text-emerald-500'
              : 'bg-background text-primary cursor-pointer hover:bg-primary/10'
          }`}
        >
          {status}
        </div>
      </div>
      <h3 className='font-medium'>{name}</h3>
      {events !== null ? (
        <div className='flex items-center mt-2 text-sm text-muted-foreground'>
          <Layers className='w-3 h-3 mr-1' />
          <span>{events} events synced</span>
        </div>
      ) : (
        <div className='mt-2 text-sm text-muted-foreground'>Click to connect</div>
      )}
    </div>
  )
}

export default CalendarPage
