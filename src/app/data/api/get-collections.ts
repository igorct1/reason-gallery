import { Collection } from '../@types/collections'
import { api } from './unsplash'

export async function getCollections(page: number) {
  const response = await api(`/collections?per_page=15&page=${page}`)
  const collections: Collection[] = await response.json()

  return collections
}
