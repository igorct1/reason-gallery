import { Topic } from '../@types/topics'
import { api } from './unsplash'

export async function getTopics(page: number) {
  const response = await api(`/topics?per_page=20&page=${page}`)
  const topics: Topic[] = await response.json()

  return topics
}
