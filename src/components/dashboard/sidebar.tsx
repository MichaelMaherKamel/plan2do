'use client'

import {
  BarChart2,
  Calendar,
  ClipboardList,
  Zap,
  Link as LinkIcon,
  Settings,
  HelpCircle,
  Menu,
  CalendarDays,
  Home,
  PlusCircle,
  Copy,
  Share2,
  Mail,
  MessageSquare,
  GitBranch,
  TrendingUp,
  CheckCircle,
  MessageCircle,
} from 'lucide-react'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  function handleNavigation() {
    setIsMobileMenuOpen(false)
  }

  function NavItem({ href, icon: Icon, children }: { href: string; icon: any; children: React.ReactNode }) {
    // Only highlight the exact matching route, not parent routes
    const isActive = pathname === href

    return (
      <Link
        href={href}
        onClick={handleNavigation}
        className={cn(
          'flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200',
          isActive
            ? 'text-primary bg-primary/10 font-medium shadow-sm'
            : 'text-muted-foreground hover:text-primary hover:bg-primary/10',
          'backdrop-blur-sm'
        )}
      >
        <Icon className={cn('h-4 w-4 mr-3 flex-shrink-0', isActive && 'text-primary')} />
        {children}
      </Link>
    )
  }

  return (
    <>
      <button
        type='button'
        className='lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-background/60 backdrop-blur-sm border border-primary/20 shadow-md'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className='h-5 w-5 text-primary' />
      </button>
      <nav
        className={cn(
          'fixed inset-y-0 left-0 z-[70] w-64 bg-sidebar transform transition-transform duration-200 ease-in-out',
          'lg:translate-x-0 lg:static lg:w-64 border-r border-sidebar-border',
          'backdrop-blur-xl',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='h-full flex flex-col'>
          <Link
            href='/dashboard'
            rel='noopener noreferrer'
            className='h-16 px-6 flex items-center border-b border-sidebar-border'
          >
            <div className='flex items-center gap-3'>
              <CalendarDays className='h-6 w-6 text-primary' />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 font-bold'>
                PLAN2DO AI
              </span>
            </div>
          </Link>

          <div className='flex-1 overflow-y-auto py-4 px-4'>
            <div className='space-y-6'>
              <div>
                <div className='px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60'>
                  Main
                </div>
                <div className='space-y-1'>
                  <NavItem href='/dashboard' icon={Home}>
                    Dashboard
                  </NavItem>
                  <NavItem href='/dashboard/plans' icon={ClipboardList}>
                    My Plans
                  </NavItem>
                  <NavItem href='/dashboard/calendar' icon={Calendar}>
                    Calendar
                  </NavItem>
                </div>
              </div>

              <div>
                <div className='px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60'>
                  Planning Tools
                </div>
                <div className='space-y-1'>
                  <NavItem href='/dashboard/plans/create' icon={PlusCircle}>
                    Create Plan
                  </NavItem>
                  <NavItem href='/dashboard/plans/models' icon={Copy}>
                    Models
                  </NavItem>
                  <NavItem href='/dashboard/plans/shared' icon={Share2}>
                    Shared Plans
                  </NavItem>
                </div>
              </div>

              <div>
                <div className='px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60'>
                  Automation
                </div>
                <div className='space-y-1'>
                  <NavItem href='/dashboard/automation' icon={Zap}>
                    All Automations
                  </NavItem>
                  <NavItem href='/dashboard/automation/emails' icon={Mail}>
                    Email Automations
                  </NavItem>
                  <NavItem href='/dashboard/automation/messages' icon={MessageSquare}>
                    Message Automations
                  </NavItem>
                  <NavItem href='/dashboard/automation/workflows' icon={GitBranch}>
                    Workflows
                  </NavItem>
                </div>
              </div>

              <div>
                <div className='px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60'>
                  Integrations
                </div>
                <div className='space-y-1'>
                  <NavItem href='/dashboard/integrations' icon={LinkIcon}>
                    All Integrations
                  </NavItem>
                  <NavItem href='/dashboard/integrations/google' icon={Mail}>
                    Google Services
                  </NavItem>
                  <NavItem href='/dashboard/integrations/messaging' icon={MessageCircle}>
                    Messaging Services
                  </NavItem>
                </div>
              </div>

              <div>
                <div className='px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60'>
                  Insights
                </div>
                <div className='space-y-1'>
                  <NavItem href='/dashboard/analytics' icon={BarChart2}>
                    Analytics
                  </NavItem>
                  <NavItem href='/dashboard/analytics/productivity' icon={TrendingUp}>
                    Productivity
                  </NavItem>
                  <NavItem href='/dashboard/analytics/completion' icon={CheckCircle}>
                    Plan Completion
                  </NavItem>
                </div>
              </div>
            </div>
          </div>

          <div className='px-4 py-4 border-t border-sidebar-border'>
            <div className='space-y-1'>
              <NavItem href='/dashboard/settings' icon={Settings}>
                Settings
              </NavItem>
              <NavItem href='/dashboard/help' icon={HelpCircle}>
                Help & Support
              </NavItem>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden backdrop-blur-sm'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
