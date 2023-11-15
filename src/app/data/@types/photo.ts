export interface IPhoto {
  alt_description: string
  description: string
  id: string
  results: IPhoto[]
  total: number
  urls: {
    full: string
    small: string
  }

  user: {
    first_name: string
    username: string

    profile_image: {
      medium: string
    }
  }
}
