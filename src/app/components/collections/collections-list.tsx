'use client'

import { Collection } from '@/app/data/@types/collections'
import { getUserCollections } from '@/app/data/api/get-user-collections'
import { useCallback, useEffect, useState } from 'react'
import { CollectionCard } from './collections-card'

export interface CollectionListProps {
  user: string
}

export function CollectionList({ user }: CollectionListProps) {
  const [collections, setCollections] = useState<Collection[]>([])

  const getCollections = useCallback(async () => {
    const collections = await getUserCollections(user, 1)
    setCollections(collections)
  }, [user])

  useEffect(() => {
    getCollections()
  }, [getCollections])

  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 py-8 text-sm md:grid-cols-2 lg:grid-cols-3">
      {collections.map((collection) => {
        return <CollectionCard key={collection.id} collection={collection} />
      })}
    </div>
  )
}
