import { IPhoto } from '../@types/photo'
import { api } from './unsplash'

export async function getSearchedPhotos(
  query: string,
  page: number,
): Promise<IPhoto> {
  const response = await api(
    `/search/photos?query=${query}?per_page=10&page=${page}`,
  )
  const photos = await response.json()

  return photos
}
