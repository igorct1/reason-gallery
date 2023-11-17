'use client'
import { getTopics } from '@/app/data/api/get-topics'
import { useCallback, useEffect, useState } from 'react'
import { TopicsCard } from './topics-card'
import { Topic } from '@/app/data/@types/topics'

export function TopicsList() {
  const [topics, setTopics] = useState<Topic[]>([])

  const call = useCallback(async () => {
    const topics = await getTopics(1)

    setTopics(topics)
  }, [])

  useEffect(() => {
    call()
  }, [call])

  return (
    <div className="grid grid-cols-1 gap-14 py-20 md:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => {
        return <TopicsCard key={topic.title} topic={topic} />
      })}
    </div>
  )
}
