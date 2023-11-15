import { SettingsTabs } from '@/app/components/settings-tabs/tabs'
import { UserProfileFull } from '@/app/components/user/user-profile-full'
import { getUserInfo } from '@/app/data/api/get-user-info'

export interface UserProps {
  params: {
    username: string
  }
}

export default async function User({ params }: UserProps) {
  const user = await getUserInfo(params.username)

  return (
    <div>
      <UserProfileFull user={user} />
      <SettingsTabs user={user} />
    </div>
  )
}
