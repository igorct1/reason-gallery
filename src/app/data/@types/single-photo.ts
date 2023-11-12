export interface SinglePhoto {
  alt_description: string
  views: number
  downloads: number
  created_at: Date

  location: {
    name: string
  }

  exif: {
    name: string
  }

  urls: {
    full: string
    regular: string
  }

  links: {
    download: string
  }

  likes: number

  user: {
    username: string
    name: string
    first_name: string
    last_name: string

    profile_image: {
      medium: string
    }
  }
}
