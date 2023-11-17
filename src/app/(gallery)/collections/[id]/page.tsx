import { CollectionPhotos } from '@/app/components/collections/collection-photos'
import { Title } from '@/app/components/shared/title'
import { getCollection } from '@/app/data/api/get-collection'
import Image from 'next/image'
import Link from 'next/link'

interface CollectionsProps {
  params: {
    id: string
  }
}

export default async function Collections({ params }: CollectionsProps) {
  const collection = await getCollection(params.id)

  return (
    <div className="mx-auto max-w-[1440px] py-8 px-4  lg:py-14 lg:space-y-14">
      <div className="flex flex-col gap-6">
        <Title title={collection.title} />
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
      <div className="space-y-4 mt-4">
        <p>{collection.total_photos} photos</p>
        <CollectionPhotos collectionId={collection.id} />
      </div>
    </div>
  )
}
