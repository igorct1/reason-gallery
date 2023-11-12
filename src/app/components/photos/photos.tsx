import { api } from '../../data/lib/unsplash'
import { PhotosGrid } from './photos-grid'

interface PhotosListProps {
  user?: string
}

export async function PhotosList({ user }: PhotosListProps) {
  let url = await api('/photos')

  if (user) {
    url = await api(`/users/${user}/photos`)
  }

  const photos = await url.json()

  return <PhotosGrid photos={photos} />
}
