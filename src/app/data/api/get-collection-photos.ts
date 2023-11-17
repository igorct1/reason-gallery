import { api } from './unsplash'

export async function getCollectionPhotos(id: string, page: number) {
  const response = await api(
    `/collections/${id}/photos?per_page=15&page=${page}`,
  )
  const collectionPhotos = await response.json()

  return collectionPhotos
}
