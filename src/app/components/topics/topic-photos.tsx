'use client'
import { getTopicPhotos } from '@/app/data/api/get-topic-photos'
import { useCallback, useEffect, useState } from 'react'
import { PhotosGrid } from '../photos/photos-grid'
import { Topic } from '@/app/data/@types/topics'
import { api } from '@/app/data/api/unsplash'
import { Title } from '../shared/title'

export function TopicPhotosList({ topicId }: { topicId: string }) {
  const [topic, setTopic] = useState<Topic>({} as Topic)
  const [photos, setPhotos] = useState([])

  const call = useCallback(async () => {
    const photos = await getTopicPhotos(topicId)
    const topic = await api(`/topics/${topicId}`)
    const json = await topic.json()

    setTopic(json)
    setPhotos(photos)
  }, [topicId])

  useEffect(() => {
    call()
  }, [call])

  return (
    <div className="py-14 space-y-14">
      <Title title={topic.title} text={topic.description} />
      <PhotosGrid photos={photos} />
    </div>
  )
}
