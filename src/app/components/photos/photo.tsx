import { IPhoto } from '@/app/data/@types/photo'
import { Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { UserProfile } from '../user/user-profile'

type Photo = {
  photo: IPhoto
}

export function Photo({ photo }: Photo) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-md"
      key={photo.urls.full}
    >
      <Link
        href={`/photos/${photo.id}`}
        className=" overflow-hidden rounded-md hover:cursor-zoom-in group-hover:brightness-[0.4]"
      >
        <Image
          quality={70}
          src={photo.urls.full}
          alt=""
          width={1000}
          height={1000}
          placeholder={'blur'}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cOJEPQAHsQLhzPEfMgAAAABJRU5ErkJggg=="
        />
      </Link>

      <div className="bottom-0 mt-auto flex w-full  justify-between py-4  md:absolute md:hidden md:p-4 md:group-hover:flex">
        <UserProfile user={photo.user} />
        <Link
          href={`${photo.links.download}&force=true`}
          download
          className="flex items-center gap-2 rounded-md border border-transparent bg-zinc-800 px-2 py-1.5 text-zinc-200 transition duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-50"
        >
          <Download />
        </Link>
      </div>
    </div>
  )
}
