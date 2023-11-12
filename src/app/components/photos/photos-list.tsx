'use client'

import { useCallback, useEffect, useState } from 'react'
import { api } from '../../data/lib/unsplash'
import { PhotosGrid } from './photos-grid'

interface PhotosListProps {
  user?: string
}

export function PhotosList({ user }: PhotosListProps) {
  const [photos, setPhotos] = useState([])

  const endpoint = user ? `/users/${user}/photos` : '/photos'

  const getPhotos = useCallback(async () => {
    const response = await api(endpoint)
    const photos = await response.json()

    setPhotos(photos)
  }, [endpoint])

  useEffect(() => {
    getPhotos()
  }, [getPhotos])

  return <PhotosGrid photos={photos} />
}
