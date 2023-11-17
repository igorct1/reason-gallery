'use client'
import { useEffect, useState } from 'react'
import { Collection } from '@/app/data/@types/collections'
import { getCollections } from '@/app/data/api/get-collections'
import { CollectionCard } from './collections-card'
import Link from 'next/link'
import { Title } from '../shared/title'

export function CollectionList() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [page, setPage] = useState<number>(1)
  const infinite = true
  const map = new Map()

  collections.forEach((item) => {
    map.set(item.id, item)
  })

  const filteredCollections = Array.from(map.values())

  useEffect(() => {
    async function call() {
      const photos = await getCollections(page)
      setCollections((state) => [...state, ...photos])
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
    <section className="mx-auto max-w-[1440px] px-4 py-8 lg:py-14">
      <Title title="Collections" />
      <p className="py-4 leading-6 pb-8">
        Explore the world through collections of beautiful photos free to use
        under the <br />
        <Link
          href="https://unsplash.com/license"
          className="underline"
          target="_blank"
        >
          Unsplash License.
        </Link>
      </p>
      <div className="grid grid-cols-1 gap-10  py-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCollections.map((collection) => {
          return <CollectionCard key={collection.id} collection={collection} />
        })}
      </div>
    </section>
  )
}
