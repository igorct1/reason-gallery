import { api } from './unsplash'

export async function getUserPhotos(user: string, page: number) {
  const response = await api(`/users/${user}/photos?per_page=15&page=${page}`)
  const photos = await response.json()

  return photos
}
