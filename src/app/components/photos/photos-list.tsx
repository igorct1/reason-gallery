import { api } from '../../data/lib/unsplash'
import { PhotosGrid } from './photos-grid'

interface PhotosListProps {
  user?: string
}

const getPhotos = async (endpoint: string) => {
  const response = await api(endpoint)

  const photos = await response.json()

  return photos
}

export async function PhotosList({ user }: PhotosListProps) {
  const endpoint = user ? `/users/${user}/photos` : '/photos'

  const data = await getPhotos(endpoint)
  return <PhotosGrid photos={data} />
}
