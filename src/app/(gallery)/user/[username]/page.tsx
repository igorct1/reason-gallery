import { PhotosList } from '@/app/components/photos/photos-list'
import { UserProfileFull } from '@/app/components/user/user-profile-full'
import { api } from '@/app/data/lib/unsplash'

export interface UserProps {
  params: {
    username: string
  }
}

async function getUserPhotos(username: string) {
  const user = await api(`/users/${username}`)
  const response = await user.json()

  return response
}

export default async function User({ params }: UserProps) {
  const user = await getUserPhotos(params.username)

  return (
    <div>
      <UserProfileFull user={user} />
      <div className="h-[1px] w-full bg-zinc-700" />
      <div className="mx-auto max-w-[1440px] px-4 py-8">
        <PhotosList user={user.username} />
      </div>
    </div>
  )
}
