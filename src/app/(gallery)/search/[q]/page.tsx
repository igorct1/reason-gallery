import { SearchList } from '@/app/components/search/search-list'
import { getSearchedPhotos } from '@/app/data/api/get-searched-photos'

export interface SearchProps {
  params: {
    q: string
  }
}

export default async function Search({ params }: SearchProps) {
  const photos = await getSearchedPhotos(params.q, 2)
  const query = params.q.replace(/%20/g, ' ')

  return (
    <div className="mx-auto max-w-[1440px] px-4">
      <div className="py-6">
        <h2 className="text-6xl font-semibold">{query}</h2>
        <p className="pt-2 text-sm">
          Dive into a vast gallery of breathtaking, authentic photographs
          <br />
          created by skilled photographers from around the world.
        </p>
        <p className="text-bold pt-4 text-sm">
          Results :{' '}
          <span className="text-semibold text-xl">
            {photos.total.toLocaleString('pt-BR')}
          </span>
        </p>
      </div>
      <div className="h-[1px] w-full bg-zinc-700 " />

      <div className="py-6">
        <SearchList q={query} />
      </div>
    </div>
  )
}
