import { LikesList } from '../likes/likes-list'

export interface LikesProps {
  user: string
}

export function Likes({ user }: LikesProps) {
  return <LikesList user={user} />
}
