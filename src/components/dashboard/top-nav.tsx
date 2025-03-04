import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import Profile01 from './profile-01'
import { Session } from 'next-auth'
import BreadcrumbItems from './breadcrumbitems'

export default async function TopNav({ session }: { session: Session }) {
  // Extract user info from session
  const userImage =
    session.user?.image ||
    'https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png'

  return (
    <nav className='px-3 sm:px-6 flex items-center justify-between bg-background/60 backdrop-blur-xl h-full'>
      <div className='font-medium text-sm hidden sm:flex items-center space-x-1 truncate max-w-[300px] ml-8 lg:ml-0'>
        <BreadcrumbItems />
      </div>
      <div className='flex items-center gap-2 sm:gap-4 ml-auto'>
        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none'>
            <Image
              src={userImage}
              alt={`${session.user?.name || 'User'} avatar`}
              width={28}
              height={28}
              className='rounded-full ring-2 ring-primary/30 sm:w-8 sm:h-8 cursor-pointer'
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            sideOffset={8}
            className='w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg'
          >
            <Profile01 session={session} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
