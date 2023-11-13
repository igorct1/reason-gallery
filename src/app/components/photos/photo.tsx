import { IPhoto } from '@/app/data/@types/photo'
import { Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { UserProfile } from '../user/user-profile'
import { Button } from '../shared/button'

type Photo = {
  photo: IPhoto
}

export function Photo({ photo }: Photo) {
  function hidePageOverflow() {
    const document = window.document.documentElement
    document.style.overflow = 'hidden'
  }

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-md"
      key={photo.urls.full}
    >
      <Link
        onClick={hidePageOverflow}
        href={`/photos/${photo.id}`}
        className=" hover:cursor-zoom-in group-hover:brightness-[0.4]"
      >
        <Image
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
        <Button variant="bg-zinc-800 hover:bg-zinc-900 hover:border-zinc-700">
          <Download />
        </Button>
      </div>
    </div>
  )
}
