import { Collection } from '@/app/data/@types/collections'
import Image from 'next/image'
import Link from 'next/link'

export interface CollectionProps {
  collection: Collection
}

export function CollectionCard({ collection }: CollectionProps) {
  return (
    <div className="flex max-w-[420px] flex-col gap-4">
      <Link
        href={`/collections/${collection.id}`}
        className=" grid h-[270px] max-w-[420px] cursor-pointer grid-cols-3 grid-rows-2 gap-2 overflow-hidden rounded-lg brightness-90 hover:brightness-100"
      >
        <Image
          alt=""
          src={collection.preview_photos[0].urls.full}
          width={500}
          height={500}
          className="col-span-2 row-span-2 h-full w-full object-cover"
          placeholder={'blur'}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cOJEPQAHsQLhzPEfMgAAAABJRU5ErkJggg=="
        />
        <Image
          alt=""
          src={collection.preview_photos[1].urls.full}
          width={500}
          height={500}
          className="h-full object-cover"
          placeholder={'blur'}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cOJEPQAHsQLhzPEfMgAAAABJRU5ErkJggg=="
        />
        <Image
          alt=""
          src={collection.preview_photos[2].urls.full}
          width={500}
          height={500}
          className="h-full object-cover"
          placeholder={'blur'}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cOJEPQAHsQLhzPEfMgAAAABJRU5ErkJggg=="
        />
      </Link>
      <div>
        <strong>{collection.title}</strong>
        <div>
          {collection.total_photos} - Created by{' '}
          <span className="underline">NEOM</span>
        </div>
      </div>

      <ul>
        <div className="mt-4 flex flex-wrap gap-2">
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
