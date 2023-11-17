'use client'
import { useEffect, useState } from 'react'
import { PhotosGrid } from './photos-grid'
import { IPhoto } from '@/app/data/@types/photo'
import { getPhotos } from '@/app/data/api/get-photos'

export function PhotosList() {
  const [photos, setPhotos] = useState<IPhoto[]>([])
  const [page, setPage] = useState<number>(1)
  const infinite = true
  const map = new Map()

  photos.forEach((item) => {
    map.set(item.id, item)
  })
  const filteredImages = Array.from(map.values())

  useEffect(() => {
    async function call() {
      const photos = await getPhotos(page)
      setPhotos((state) => [...state, ...photos])
    }
    call()
  }, [page])

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
    <>
      <PhotosGrid photos={filteredImages} />
    </>
  )
}
