import { IPhoto } from './photo'

export interface Collection {
  id: string
  featured: boolean
  description: string
  title: string
  total_photos: number
  cover_photo: IPhoto

  preview_photos: IPhoto[]
  tags: {
    title: string
  }[]
}
