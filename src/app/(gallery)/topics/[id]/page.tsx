import { TopicPhotosList } from '@/app/components/topics/topic-photos'

export interface TopicProps {
  params: {
    id: string
  }
}

export default function Topic({ params }: TopicProps) {
  return (
    <div className="mx-auto max-w-[1440px] px-4">
      <TopicPhotosList topicId={params.id} />
    </div>
  )
}
