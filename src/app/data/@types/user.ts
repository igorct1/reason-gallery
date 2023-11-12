import { IPhoto } from './photo'

export interface IUser {
  first_name: string
  last_name: string
  name: string
  username: string
  bio: string

  profile_image: {
    medium: string
    large: string
  }

  total_collections: number
  total_likes: number
  total_photos: number
  location: string
  for_hire: boolean

  photos: IPhoto[]
  tags: {
    custom: {
      title: string
    }[]
  }
}

export interface IUserProfile {
  first_name: string
  username: string

  profile_image: {
    medium: string
  }
}
