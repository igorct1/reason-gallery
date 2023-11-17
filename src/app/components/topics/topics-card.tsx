import { Topic } from '@/app/data/@types/topics'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export interface TopicsCardProps {
  topic: Topic
}

export function TopicsCard({ topic }: TopicsCardProps) {
  const data = format(new Date(topic.updated_at), 'MM/dd/yyyy')
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/topics/${topic.id}`)}
      className="relative cursor-pointer overflow-hidden rounded-md border border-transparent shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-zinc-800 transition-all duration-300 hover:border-zinc-700"
    >
      <div className="relative">
        <Image
          src={topic.cover_photo.urls.full}
          alt=""
          width={400}
          height={400}
          className="h-[120px] w-full object-cover"
        />
        <span className="absolute right-8 top-5 flex items-center gap-2 rounded-md bg-green-400 px-2 py-1">
          <div className="h-2 w-2 rounded-full bg-green-600 text-sm" />
          Open
        </span>
      </div>
      <div className="px-8 pb-10 pt-12">
        <Image
          src={topic.owners[0].profile_image.large}
          alt=""
          width={60}
          height={60}
          className="absolute top-[86px] rounded-full"
        />
        <h2 className="text-2xl">{topic.title}</h2>

        <span>
          By{' '}
          <Link
            href={`/users/${topic.owners[0].username}`}
            className="text-zinc-400 underline hover:text-zinc-50"
          >
            {topic.owners[0].username}
          </Link>
        </span>

        <div className="py-4">
          <p className="line-clamp-3 text-sm leading-6 text-zinc-400">
            {topic.description}
          </p>
        </div>
        <div className="space-y-2 text-sm text-zinc-200">
          <p>Updated at {data}</p>

          <p>Photos {topic.total_photos.toLocaleString('pt-BR')}</p>
        </div>
      </div>
    </div>
  )
}
