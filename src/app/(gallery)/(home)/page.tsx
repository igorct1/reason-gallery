import { PhotosList } from '@/app/components/photos/photos-list'
import { Hero } from '@/app/components/shared/hero'

export default async function Home() {
  return (
    <div>
      <Hero />

      <main className="mx-auto max-w-[1440px] px-4 py-8">
        <PhotosList />
      </main>
    </div>
  )
}
