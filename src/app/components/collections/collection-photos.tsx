'use client'
import { useEffect, useState } from 'react'

import { IPhoto } from '@/app/data/@types/photo'
import { Photo } from '../photos/photo'
import { getCollectionPhotos } from '@/app/data/api/get-collection-photos'

interface CollectionPhotosProps {
  collectionId: string
}

export function CollectionPhotos({ collectionId }: CollectionPhotosProps) {
  const [photos, setPhotos] = useState<IPhoto[]>([])
  const [page, setPage] = useState<number>(1)
  const infinite = true

  const map = new Map()

  photos.forEach((item) => {
    map.set(item.id, item)
  })

  const filteredCollectionPhotos = Array.from(map.values())

  useEffect(() => {
    async function call() {
      const images = await getCollectionPhotos(collectionId, page)
      setPhotos((state) => [...state, ...images])
    }
    call()
  }, [page, collectionId])

  useEffect(() => {
    let wait = false

    function infiniteScroll() {
      const scroll = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight

      if (infinite) {
        if (scroll > height * 0.8 && !wait) {
          setPage((prev) => prev + 1)
          wait = true

          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    const events = ['wheel', 'scroll']
    events.forEach((event) => {
      window.addEventListener(event, infiniteScroll)
    })

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, infiniteScroll)
      })
    }
  }, [infinite])

  return (
    <div className="grid grid-cols-1 gap-10  py-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredCollectionPhotos.map((photo) => {
        return <Photo key={photo.id} photo={photo} />
      })}
    </div>
  )
}
