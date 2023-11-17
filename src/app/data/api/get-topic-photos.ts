import { api } from './unsplash'

export async function getTopicPhotos(topicId: string) {
  const response = await api(`/topics/${topicId}/photos`)
  const topicPhotos = await response.json()

  return topicPhotos
}
