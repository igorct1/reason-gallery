import { PhotosList } from '@/app/components/photos/photos-list'
import { Button } from '@/app/components/shared/button'
import { UserProfile } from '@/app/components/user/user-profile'
import { SinglePhoto } from '@/app/data/@types/single-photo'
import { api } from '@/app/data/lib/unsplash'
import {
  BookCheck,
  Camera,
  ChevronDown,
  MapPin,
  ShieldCheck,
} from 'lucide-react'

import Image from 'next/image'

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

  return (
    <div className="px-4">
      <div className="flex flex-col gap-8">
        {/* image profile */}
        <div className="flex items-center justify-between py-4 ">
          <div className="flex items-center gap-4">
            <UserProfile user={photo.user} size="medium" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="bg-zinc-700/75 hover:bg-zinc-700 hover:text-50 px-6 py-2.5">
              Download
              <ChevronDown />
            </Button>
          </div>
        </div>

        {/* image */}
        <div className="mx-auto">
          <Image
            src={photo.urls.regular}
            width={600}
            height={600}
            alt={photo.alt_description}
            className="max-h-[720px] max-w-[600px]"
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
            <p className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              Greece
            </p>
            <p className="flex items-center gap-2 text-sm">
              <BookCheck className="h-4 w-4" />
              Published 1 day ago
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Camera className="h-4 w-4" />
              NIKON CORPORATION, NIKON D3300
            </p>
            <p className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4" />
              Free to use under the Unsplash License
            </p>
          </div>
        </div>
      </div>

      {/* user photo list */}
      <div className="mx-auto max-w-[1440px] py-8">
        <PhotosList user={photo.user.username} />
      </div>
    </div>
  )
}
