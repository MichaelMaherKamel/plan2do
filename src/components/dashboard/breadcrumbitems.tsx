'use client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

// Define types for the sidebar structure
interface SidebarItem {
  label: string
  icon: string
  parent: string | null
}

interface SidebarStructure {
  [path: string]: SidebarItem
}

// Define the sidebar structure for breadcrumb mapping
const sidebarStructure: SidebarStructure = {
  '/dashboard': {
    label: 'Dashboard',
    icon: 'Home',
    parent: null,
  },
  // Plans section
  '/dashboard/plans': {
    label: 'My Plans',
    icon: 'ClipboardList',
    parent: '/dashboard',
  },
  '/dashboard/plans/create': {
    label: 'Create Plan',
    icon: 'PlusCircle',
    parent: '/dashboard/plans',
  },
  '/dashboard/plans/models': {
    label: 'Models',
    icon: 'Copy',
    parent: '/dashboard/plans',
  },
  '/dashboard/plans/shared': {
    label: 'Shared Plans',
    icon: 'Share2',
    parent: '/dashboard/plans',
  },

  // Calendar section
  '/dashboard/calendar': {
    label: 'Calendar',
    icon: 'Calendar',
    parent: '/dashboard',
  },
  '/dashboard/calendar/day': {
    label: 'Day View',
    icon: 'CalendarDays',
    parent: '/dashboard/calendar',
  },
  '/dashboard/calendar/week': {
    label: 'Week View',
    icon: 'CalendarRange',
    parent: '/dashboard/calendar',
  },
  '/dashboard/calendar/month': {
    label: 'Month View',
    icon: 'CalendarDays',
    parent: '/dashboard/calendar',
  },

  // Automation section
  '/dashboard/automation': {
    label: 'Automation',
    icon: 'Zap',
    parent: '/dashboard',
  },
  '/dashboard/automation/emails': {
    label: 'Email Automations',
    icon: 'Mail',
    parent: '/dashboard/automation',
  },
  '/dashboard/automation/messages': {
    label: 'Message Automations',
    icon: 'MessageSquare',
    parent: '/dashboard/automation',
  },
  '/dashboard/automation/workflows': {
    label: 'Workflows',
    icon: 'GitBranch',
    parent: '/dashboard/automation',
  },

  // Integrations section
  '/dashboard/integrations': {
    label: 'Integrations',
    icon: 'Link',
    parent: '/dashboard',
  },
  '/dashboard/integrations/google': {
    label: 'Google Services',
    icon: 'Mail',
    parent: '/dashboard/integrations',
  },
  '/dashboard/integrations/microsoft': {
    label: 'Microsoft Services',
    icon: 'Calendar',
    parent: '/dashboard/integrations',
  },
  '/dashboard/integrations/messaging': {
    label: 'Messaging Services',
    icon: 'MessageCircle',
    parent: '/dashboard/integrations',
  },

  // Analytics section
  '/dashboard/analytics': {
    label: 'Analytics',
    icon: 'BarChart2',
    parent: '/dashboard',
  },
  '/dashboard/analytics/productivity': {
    label: 'Productivity',
    icon: 'TrendingUp',
    parent: '/dashboard/analytics',
  },
  '/dashboard/analytics/completion': {
    label: 'Plan Completion',
    icon: 'CheckCircle',
    parent: '/dashboard/analytics',
  },

  // Settings & Help
  '/dashboard/settings': {
    label: 'Settings',
    icon: 'Settings',
    parent: '/dashboard',
  },
  '/dashboard/help': {
    label: 'Help & Support',
    icon: 'HelpCircle',
    parent: '/dashboard',
  },
}

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function BreadcrumbItems() {
  const pathname = usePathname()

  // Generate breadcrumbs based on current path
  const breadcrumbs = useMemo(() => {
    const items: BreadcrumbItem[] = []

    // Always add Dashboard as the first item
    items.push({ label: 'Dashboard', href: '/dashboard' })

    // If we're just at the dashboard route, make it a non-link
    if (pathname === '/dashboard') {
      return [{ label: 'Dashboard', href: '#' }]
    }

    // Build breadcrumb chain by walking up the parent hierarchy
    let currentPath = pathname
    const breadcrumbChain: BreadcrumbItem[] = []

    while (currentPath && currentPath !== '/dashboard') {
      const currentPage = sidebarStructure[currentPath]

      if (currentPage) {
        // Add current page to the beginning of the chain
        breadcrumbChain.unshift({
          label: currentPage.label,
          href: currentPath === pathname ? '#' : currentPath,
        })

        // Move up to parent
        currentPath = currentPage.parent || ''
      } else {
        // Handle paths that aren't in our structure
        const segments = pathname.split('/')
        const lastSegment = segments[segments.length - 1]

        if (lastSegment) {
          breadcrumbChain.unshift({
            label: lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1),
            href: '#',
          })
        }

        // Break out of the loop
        break
      }
    }

    // Add all items from the breadcrumb chain to our items array
    items.push(...breadcrumbChain)

    return items
  }, [pathname])

  return (
    <>
      {breadcrumbs.map((item, index) => (
        <div key={`${item.label}-${index}`} className='flex items-center'>
          {index > 0 && <ChevronRight className='h-4 w-4 text-muted-foreground mx-1' />}
          {item.href && item.href !== '#' ? (
            <Link href={item.href} className='text-muted-foreground hover:text-primary transition-colors'>
              {item.label}
            </Link>
          ) : (
            <span className='text-foreground'>{item.label}</span>
          )}
        </div>
      ))}
    </>
  )
}
