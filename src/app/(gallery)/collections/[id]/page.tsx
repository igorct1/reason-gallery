import { PhotosGrid } from '@/app/components/photos/photos-grid'
import { getCollectionPhotos } from '@/app/data/api/get-collections-photos'
import Image from 'next/image'
import Link from 'next/link'

interface CollectionsProps {
  params: {
    id: string
  }
}

export default async function Collections({ params }: CollectionsProps) {
  const { collection, photos } = await getCollectionPhotos(params.id, 1)

  return (
    <div className="mx-auto max-w-[1440px] space-y-10 px-4 py-8 md:space-y-20">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl">{collection.title}</h2>

        <Link
          href={`/user/${collection.user.username}`}
          className="flex items-center gap-2"
        >
          <Image
            src={collection.user.profile_image.large}
            alt=""
            width={100}
            height={100}
            className="h-10 w-10 rounded-full"
          />
          <p>{collection.user.name}</p>
        </Link>
      </div>
      <div className="space-y-4">
        <p>{collection.total_photos} photos</p>
        <PhotosGrid photos={photos} />
      </div>
    </div>
  )
}
