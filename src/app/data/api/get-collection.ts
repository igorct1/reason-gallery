import { Collection } from '../@types/collections'
import { api } from './unsplash'

export async function getCollection(id: string) {
  const collectionResponse = await api(`/collections/${id}`)
  const collection: Collection = await collectionResponse.json()

  return collection
}
