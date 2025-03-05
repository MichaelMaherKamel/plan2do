'use client'

import React from 'react'
import { Repeat, Clock, Users, CalendarIcon, AlertCircle } from 'lucide-react'

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

interface CalendarGridProps {
  calendarDays: CalendarDay[]
  dayNames: string[]
  onDayClick?: (day: CalendarDay) => void
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ calendarDays, dayNames, onDayClick }) => {
  return (
    <div className='glass-card rounded-xl border border-primary/20 overflow-hidden h-full flex flex-col'>
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

      {/* Calendar days - using flex-1 to fill available space */}
      <div className='grid grid-cols-7 flex-1' style={{ gridTemplateRows: 'repeat(6, minmax(0, 1fr))' }}>
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`p-1 border-b border-r border-border relative ${
              !day.isCurrentMonth ? 'bg-background/30 text-muted-foreground' : ''
            } ${
              day.date.getDate() === new Date().getDate() &&
              day.date.getMonth() === new Date().getMonth() &&
              day.date.getFullYear() === new Date().getFullYear()
                ? 'bg-primary/5'
                : ''
            } hover:bg-background/50 cursor-pointer transition-colors`}
            onClick={() => onDayClick && onDayClick(day)}
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

            <div className='mt-1 space-y-1 overflow-hidden'>
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
  )
}

// Get appropriate icon based on event type
export const getEventIcon = (type: 'meeting' | 'appointment' | 'deadline' | 'event'): React.ReactNode => {
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

export default CalendarGrid
