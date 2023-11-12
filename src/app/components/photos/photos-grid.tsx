'use client'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { Photo } from './photo'
import { IPhoto } from '@/app/data/@types/photo'

interface PhotosGridProps {
  photos: IPhoto[]
}

export function PhotosGrid({ photos }: PhotosGridProps) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="40px">
        {photos.map((photo) => {
          return <Photo photo={photo} key={photo.id} />
        })}
      </Masonry>
    </ResponsiveMasonry>
  )
}
