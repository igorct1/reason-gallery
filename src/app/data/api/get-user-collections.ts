import { api } from './unsplash'

export async function getUserCollections(user: string, page: number) {
  const response = await api(
    `/users/${user}/collections?per_page=15&page=${page}`,
  )
  const photos = await response.json()

  return photos
}
