import { SinglePhoto } from './single-photo'
import { IUser } from './user'

export interface Topic {
  title: string
  id: string
  cover_photo: SinglePhoto
  owners: IUser[]
  total_photos: number
  updated_at: string
  description: string
}
