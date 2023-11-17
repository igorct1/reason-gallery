import { Collection } from '@/app/data/@types/collections'
import Image from 'next/image'
import Link from 'next/link'

export interface CollectionProps {
  collection: Collection
}

export function CollectionCard({ collection }: CollectionProps) {
  if (collection.preview_photos === null) {
    return null
  }
  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-md border border-transparent shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-zinc-800 transition-all duration-300 hover:border-zinc-700">
      <Link
        href={`/collections/${collection.id}`}
        className="overflow-hiddenbrightness-90 grid h-[270px] cursor-pointer grid-cols-3 grid-rows-2 gap-2 hover:brightness-100"
      >
        {collection.preview_photos[0].urls.full && (
          <Image
            alt=""
            src={collection.preview_photos[0].urls.full}
            width={500}
            height={500}
            className="col-span-2 row-span-2 h-full w-full object-cover"
            placeholder={'blur'}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cOJEPQAHsQLhzPEfMgAAAABJRU5ErkJggg=="
          />
        )}
        {collection.preview_photos[1].urls.full && (
          <Image
            alt=""
            src={collection.preview_photos[1].urls.full}
            width={500}
            height={500}
            className="h-full object-cover"
            placeholder={'blur'}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cOJEPQAHsQLhzPEfMgAAAABJRU5ErkJggg=="
          />
        )}
        {collection.preview_photos[2].urls.full && (
          <Image
            alt=""
            src={collection.preview_photos[2].urls.full}
            width={500}
            height={500}
            className="h-full object-cover"
            placeholder={'blur'}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cOJEPQAHsQLhzPEfMgAAAABJRU5ErkJggg=="
          />
        )}
      </Link>
      <div className="px-4 pt-6 ">
        <strong className="text-2xl">{collection.title}</strong>
        <div className="flex flex-col gap-2 py-2">
          <p className="text-zinc-400">{collection.total_photos} Photos </p>
          <span>
            Created by{' '}
            <Link
              href={`/users/${collection.user.username}`}
              className="text-zinc-200 underline hover:text-zinc-50"
            >
              {collection.user.username}
            </Link>
          </span>
        </div>
      </div>

      <ul className="px-4 pb-6">
        <div className="flex flex-wrap gap-2">
          {collection.tags.map((tag) => {
            return (
              <Link
                href={`/search/${tag.title}`}
                key={tag.title}
                className="rounded-md  border border-zinc-700 px-1.5 py-1 text-sm transition duration-300 hover:bg-zinc-700"
              >
                {tag.title}
              </Link>
            )
          })}
        </div>
      </ul>
    </div>
  )
}
