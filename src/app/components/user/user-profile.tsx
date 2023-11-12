'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IUserProfile } from '../../data/@types/user'
import { useRouter } from 'next/navigation'

export interface UserProfileProps {
  user: IUserProfile
  size?: string
}

export function UserProfile({ user, size }: UserProfileProps) {
  const router = useRouter()

  function goToUserPage() {
    router.push(`/users/${user.username}`)
  }

  return (
    <Link
      href={`/user/${user.username}`}
      className="flex items-center gap-2"
      onClick={goToUserPage}
    >
      <Image
        src={user.profile_image.medium}
        alt=""
        className={`${
          size === 'medium' ? 'h-12 w-12' : 'h-10 w-10'
        } rounded-full`}
        width={1000}
        height={1000}
      />

      <div>
        <h2 className="font-semibold text-zinc-200 hover:text-zinc-50">
          {user.first_name}
        </h2>
        <p className="text-xs text-zinc-400 hover:text-zinc-500">
          @{user.username}
        </p>
      </div>
    </Link>
  )
}
