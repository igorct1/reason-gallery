import { api } from './unsplash'

export async function getPhotos(page: number) {
  const response = await api(`/photos?per_page=15&page=${page}`)
  const photos = await response.json()

  return photos
}
