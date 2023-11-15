import { api } from './unsplash'

export async function getUserLikes(user: string, page: number) {
  const response = await api(`/users/${user}/likes?per_page=15&page=${page}`)
  const photos = await response.json()

  return photos
}
