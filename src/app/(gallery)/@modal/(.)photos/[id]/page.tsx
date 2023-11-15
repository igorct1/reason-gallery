import { PhotosList } from '@/app/components/photos/photos-list'

import Modal from '@/app/components/shared/modal'
import { ModalClose } from '@/app/components/shared/modal-close'
import { UserProfile } from '@/app/components/user/user-profile'
import { SinglePhoto } from '@/app/data/@types/single-photo'
import { api } from '@/app/data/api/unsplash'
import { formatDate } from '@/app/data/utils/formatDate'

import {
  BookCheck,
  Camera,
  ChevronDown,
  MapPin,
  ShieldCheck,
} from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

interface PhotoModalProps {
  params: {
    id: string
  }
}

async function getPhotoModalInfo(id: string): Promise<SinglePhoto> {
  const response = await api(`photos/${id}`)
  const photo = await response.json()

  return photo
}

export default async function PhotoModal({ params }: PhotoModalProps) {
  const photo = await getPhotoModalInfo(params.id)
  const data = new Date(photo.created_at)
  const formattedDate = formatDate(data)

  return (
    <Modal>
      <div className="flex flex-col gap-8">
        <ModalClose />

        {/* image profile */}
        <div className="sticky top-0  flex items-center justify-between bg-zinc-900 py-4">
          <div className="flex items-center gap-4">
            <UserProfile user={photo.user} size="medium" />
          </div>
          <div className=" flex h-10 items-center gap-4 rounded-md bg-zinc-700">
            <Link
              href={`${photo.links.download}&force=true`}
              className="px-4"
              download
            >
              Download
            </Link>
            <button className="h-full w-full rounded-br-md rounded-tr-md bg-zinc-800 px-2">
              <ChevronDown />
            </button>
          </div>
        </div>

        {/* image */}
        <div className="mx-auto">
          <Image
            src={photo.urls.regular}
            width={600}
            height={600}
            alt={photo.alt_description}
            className="max-h-[720px] w-full max-w-[600px]"
            quality={100}
          />
        </div>

        {/* image info */}
        <div className="flex flex-col gap-16">
          <div className="flex gap-20">
            <div>
              <strong className="text-sm font-semibold">Views</strong>
              <p className="text-lg text-zinc-400">
                {photo.views.toLocaleString('pt-BR')}
              </p>
            </div>
            <div>
              <strong className="text-sm font-semibold ">Downloads</strong>
              <p className="text-lg text-zinc-400">
                {photo.downloads.toLocaleString('pt-BR')}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-zinc-400">
            {photo.location.name && (
              <p className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                {photo.location.name}
              </p>
            )}
            {photo.created_at && (
              <p className="flex items-center gap-2 text-sm">
                <BookCheck className="h-4 w-4" />
                {formattedDate}
              </p>
            )}
            {photo.exif.name && (
              <p className="flex items-center gap-2 text-sm">
                <Camera className="h-4 w-4" />
                {photo.exif.name}
              </p>
            )}
            <p className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4" />
              Free to use under the
              <span className="underline">Unsplash License</span>
            </p>
          </div>
        </div>
      </div>

      {/* user photo list */}
      <div className="py-8">
        <PhotosList />
      </div>
    </Modal>
  )
}
