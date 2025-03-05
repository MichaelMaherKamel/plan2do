'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter,
  Bell,
  Users,
  Share2,
  Link,
  Layers,
  Clock,
} from 'lucide-react'
import CalendarGrid, { getEventIcon } from '@/components/dashboard/Calendar'

// Add CSS for horizontal scrollbar hiding
const styles = `
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`

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
  const [calendarHeight, setCalendarHeight] = useState<number>(0)
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  // Calculate available height for the calendar
  useEffect(() => {
    const calculateHeight = () => {
      if (!mainContainerRef.current || !headerRef.current) return

      // Get viewport height
      const viewportHeight = window.innerHeight

      // Get header height + some padding
      const headerHeight = headerRef.current.getBoundingClientRect().height

      // Reserve space for the footer content (roughly 20% of viewport)
      const footerSpace = viewportHeight * 0.2

      // Calculate available height
      const availableHeight = viewportHeight - headerHeight - footerSpace - 40 // 40px for padding and margins

      // Set a minimum height
      const finalHeight = Math.max(300, availableHeight)

      setCalendarHeight(finalHeight)
    }

    // Initial calculation
    calculateHeight()

    // Recalculate on window resize
    window.addEventListener('resize', calculateHeight)

    return () => {
      window.removeEventListener('resize', calculateHeight)
    }
  }, [])

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

  // Handle day click
  const handleDayClick = (day: CalendarDay): void => {
    console.log('Day clicked:', day)
    // You can use this to show a modal with the day's events or for event creation
  }

  // Day names for the header
  const dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div ref={mainContainerRef} className='w-full h-full flex flex-col'>
      {/* Add style for scrollbar hiding */}
      <style>{styles}</style>
      {/* Calendar Header Section */}
      <div ref={headerRef} className='flex flex-col space-y-3'>
        {/* Top Bar - Title and Actions */}
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <h1 className='text-xl md:text-2xl font-bold flex items-center gap-2'>
            <CalendarIcon className='w-5 h-5 md:w-6 md:h-6 text-primary' />
            Calendar
          </h1>

          <div className='flex gap-1 md:gap-2 ml-auto'>
            <button className='flex items-center gap-1 px-2 py-1.5 md:px-3 rounded-lg border border-border bg-background/60 hover:bg-background/80 text-xs md:text-sm'>
              <Filter className='w-3 h-3 md:w-4 md:h-4' />
              <span className='hidden sm:inline'>Filter</span>
            </button>

            <button className='flex items-center gap-1 px-2 py-1.5 md:px-3 rounded-lg border border-border bg-background/60 hover:bg-background/80 text-xs md:text-sm'>
              <Share2 className='w-3 h-3 md:w-4 md:h-4' />
              <span className='hidden sm:inline'>Share</span>
            </button>

            <button className='flex items-center gap-1 px-2 py-1.5 md:px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs md:text-sm'>
              <Plus className='w-3 h-3 md:w-4 md:h-4' />
              <span>New Event</span>
            </button>
          </div>
        </div>

        {/* Second Row - View Selector and Month Navigation */}
        <div className='flex flex-wrap justify-between items-center gap-3'>
          {/* View Selector */}
          <div className='flex items-center bg-background/60 rounded-lg border border-border'>
            <button
              className={`px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium rounded-l-lg ${
                view === 'month' ? 'bg-primary text-primary-foreground' : 'hover:bg-background/80'
              }`}
              onClick={() => setView('month')}
            >
              Month
            </button>
            <button
              className={`px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium ${
                view === 'week' ? 'bg-primary text-primary-foreground' : 'hover:bg-background/80'
              }`}
              onClick={() => setView('week')}
            >
              Week
            </button>
            <button
              className={`px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium rounded-r-lg ${
                view === 'day' ? 'bg-primary text-primary-foreground' : 'hover:bg-background/80'
              }`}
              onClick={() => setView('day')}
            >
              Day
            </button>
          </div>

          {/* Month Navigation */}
          <div className='flex items-center gap-2'>
            <button
              onClick={goToPreviousMonth}
              className='h-7 w-7 md:h-8 md:w-8 flex items-center justify-center rounded-full hover:bg-background/60'
            >
              <ChevronLeft className='w-4 h-4 md:w-5 md:h-5' />
            </button>

            <h2 className='text-base md:text-xl font-semibold'>
              {currentMonth.toLocaleString('default', {
                month: 'long',
                year: window.innerWidth < 640 ? '2-digit' : 'numeric',
              })}
            </h2>

            <button
              onClick={goToNextMonth}
              className='h-7 w-7 md:h-8 md:w-8 flex items-center justify-center rounded-full hover:bg-background/60'
            >
              <ChevronRight className='w-4 h-4 md:w-5 md:h-5' />
            </button>

            <button
              onClick={goToToday}
              className='px-2 py-1 text-xs md:text-sm rounded-md border border-border hover:bg-background/60 ml-1'
            >
              Today
            </button>
          </div>
        </div>

        {/* Calendar Integrations - Scrollable on mobile */}
        <div className='flex overflow-x-auto pb-1 gap-1 md:gap-2 md:flex-wrap scrollbar-hide'>
          <div className='flex items-center whitespace-nowrap px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10'>
            <div className='h-2 w-2 md:h-3 md:w-3 rounded-full bg-blue-500 mr-1 md:mr-2'></div>
            <span className='text-xs md:text-sm'>Google Cal</span>
          </div>
          <div className='flex items-center whitespace-nowrap px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-green-500/30 bg-green-500/10'>
            <div className='h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500 mr-1 md:mr-2'></div>
            <span className='text-xs md:text-sm'>WhatsApp</span>
          </div>
          <div className='flex items-center whitespace-nowrap px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10'>
            <div className='h-2 w-2 md:h-3 md:w-3 rounded-full bg-blue-500 mr-1 md:mr-2'></div>
            <span className='text-xs md:text-sm'>Telegram</span>
          </div>
          <div className='flex items-center whitespace-nowrap px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10'>
            <div className='h-2 w-2 md:h-3 md:w-3 rounded-full bg-blue-500 mr-1 md:mr-2'></div>
            <span className='text-xs md:text-sm'>Outlook</span>
          </div>
          <button className='flex items-center whitespace-nowrap px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-dashed border-border'>
            <Plus className='w-2 h-2 md:w-3 md:h-3 mr-1' />
            <span className='text-xs md:text-sm'>Add</span>
          </button>
        </div>
      </div>

      {/* Calendar Grid - Setting explicit height */}
      <div className='mt-2 mb-4 flex-1' style={{ height: `${calendarHeight}px` }}>
        <CalendarGrid calendarDays={calendarDays} dayNames={dayNames} onDayClick={handleDayClick} />
      </div>

      {/* Bottom Section - Today's events and reminders */}
      <div ref={footerRef} className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-auto'>
        {/* Today's Events */}
        <div className='glass-card rounded-xl p-4 border border-primary/20'>
          <h2 className='text-base font-bold mb-2 flex items-center gap-2'>
            <Clock className='w-4 h-4 text-primary' />
            Today's Events
          </h2>

          <div className='space-y-2 max-h-48 overflow-y-auto'>
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
                    className={`flex items-center p-2 rounded-lg border border-border/60 hover:bg-background/50 transition-colors`}
                  >
                    <div className={`h-8 w-8 rounded-full ${event.color} flex items-center justify-center text-white`}>
                      {getEventIcon(event.type)}
                    </div>

                    <div className='ml-3 flex-1'>
                      <h3 className='font-medium text-sm'>{event.title}</h3>
                      <div className='flex items-center text-xs text-muted-foreground'>
                        <Clock className='w-3 h-3 mr-1' />
                        {formatTime(event.date)}
                      </div>
                    </div>

                    <div className='ml-4 flex-shrink-0'>
                      {event.participants > 0 && (
                        <div className='flex items-center text-xs'>
                          <Users className='w-3 h-3 mr-1' />
                          <span>{event.participants}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
            ) : (
              <div className='text-center py-4 text-muted-foreground'>
                <p className='text-sm'>No events scheduled for today</p>
                <button className='mt-2 flex items-center gap-1 mx-auto text-xs text-primary'>
                  <Plus className='w-3 h-3' />
                  <span>Add Event</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Reminders */}
        <div className='glass-card rounded-xl p-4 border border-primary/20'>
          <h2 className='text-base font-bold mb-2 flex items-center gap-2'>
            <Bell className='w-4 h-4 text-primary' />
            Upcoming Reminders
          </h2>

          <div className='space-y-2 max-h-48 overflow-y-auto'>
            {events
              .filter((event) => new Date(event.date) >= new Date())
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 4)
              .map((event) => (
                <div
                  key={event.id}
                  className='flex items-center p-2 rounded-lg border border-border/60 hover:bg-background/50 transition-colors'
                >
                  <div className={`h-2 w-2 rounded-full ${event.color} mr-3`}></div>

                  <div className='flex-1'>
                    <h3 className='font-medium text-sm'>{event.title}</h3>
                    <div className='flex items-center text-xs text-muted-foreground'>
                      <CalendarIcon className='w-3 h-3 mr-1' />
                      {event.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </div>
                  </div>

                  <div>
                    <button className='text-xs px-2 py-0.5 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors'>
                      Remind
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage
