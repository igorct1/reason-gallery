import { Collection } from '../@types/collections'
import { api } from './unsplash'

export async function getCollectionPhotos(id: string, page: number) {
  const collectionResponse = await api(`/collections/${id}`)
  const collection: Collection = await collectionResponse.json()

  const response = await api(
    `/collections/${id}/photos?per_page=15&page=${page}`,
  )
  const photos = await response.json()

  return {
    collection,
    photos,
  }
}
