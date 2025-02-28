import { auth } from '../auth'
import Image from 'next/image'

export default async function UserAvatar() {
  const session = await auth()
  if (!session?.user) return null

  // Add a fallback image path
  const imageSrc = session.user.image || '/default-avatar.png'

  return (
    <div>
      <Image src={imageSrc} alt='User Avatar' width={40} height={40} />
    </div>
  )
}
