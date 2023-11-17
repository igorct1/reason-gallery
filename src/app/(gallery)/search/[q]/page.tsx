import { SearchList } from '@/app/components/search/search-list'
import { Title } from '@/app/components/shared/title'
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
      <div className="py-8 lg:py-14">
        <Title
          title={query}
          text="Dive into a vast gallery of breathtaking, authentic photographs
          created by skilled photographers from around the world."
        />

        <p className="text-semibold text-xl mt-4">
          {photos.total.toLocaleString('pt-BR')}{' '}
          <span className="text-sm">photos...</span>
        </p>
      </div>
      <div className="h-[1px] w-full bg-zinc-700 " />

      <div className="py-6">
        <SearchList q={query} />
      </div>
    </div>
  )
}
