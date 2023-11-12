import { PhotosGrid } from '@/app/components/photos/photos-grid'
import { api } from '@/app/data/lib/unsplash'

async function getSearchedPhotos(query: string) {
  const photos = await api(`/search/photos?query=${query}`)
  const data = await photos.json()

  return data
}

export interface SearchProps {
  params: {
    q: string
  }
}

export default async function Search({ params }: SearchProps) {
  const photos = await getSearchedPhotos(params.q)
  const query = params.q.replace(/%20/g, ' ')

  return (
    <div className="mx-auto max-w-[1440px] ">
      <div className="py-6">
        <h2 className="text-6xl font-semibold">{query}</h2>
        <p className="pt-2 text-sm">
          Dive into a vast gallery of breathtaking, authentic photographs
          <br />
          created by skilled photographers from around the world.
        </p>
        <p className="pt-4 text-sm">
          Results:{' '}
          <span className="text-semibold text-xl">
            {photos.total.toLocaleString('pt-BR')}
          </span>
        </p>
      </div>
      <div className="h-[1px] w-full bg-zinc-700 " />

      <div className="py-6">
        <PhotosGrid photos={photos.results} />
      </div>
    </div>
  )
}
