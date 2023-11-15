import { CollectionList } from '../collections/collections-list'

export function Collections({ user }: { user: string }) {
  return <CollectionList user={user} />
}
