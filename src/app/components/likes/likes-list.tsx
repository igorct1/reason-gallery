'use client'

import { IPhoto } from '@/app/data/@types/photo'
import { useEffect, useState } from 'react'
import { PhotosGrid } from '../photos/photos-grid'
import { getUserLikes } from '@/app/data/api/get-user-likes'

export interface LikesListProps {
  user: string
}

export function LikesList({ user }: LikesListProps) {
  const [photos, setPhotos] = useState<IPhoto[]>([])
  const [page, setPage] = useState<number>(1)
  const [infinite, setInfinite] = useState(true)

  const map = new Map()

  photos.forEach((item) => {
    map.set(item.id, item)
  })

  const filteredImages = Array.from(map.values())

  useEffect(() => {
    async function call() {
      const photos = await getUserLikes(user, page)
      setPhotos((state) => [...state, ...photos])
    }

    call()
  }, [page, user])

  useEffect(() => {
    let wait = false

    function infiniteScroll() {
      const scroll = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight

      if (infinite) {
        if (scroll > height * 0.9 && !wait) {
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
    <div className="mx-auto max-w-[1440px] py-8">
      <PhotosGrid photos={filteredImages} />
    </div>
  )
}
