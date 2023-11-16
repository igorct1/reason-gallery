import { UserCollectionList } from '../collections/user-collections-list'

export function Collections({ user }: { user: string }) {
  return <UserCollectionList user={user} />
}
