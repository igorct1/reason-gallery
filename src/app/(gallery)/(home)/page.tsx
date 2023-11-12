import { PhotosList } from '@/app/components/photos/photos'
import { Hero } from '@/app/components/shared/hero'

export default function Home() {
  return (
    <div>
      <Hero />

      <main className="mx-auto max-w-[1440px] px-4 py-8">
        <PhotosList />
      </main>
    </div>
  )
}
