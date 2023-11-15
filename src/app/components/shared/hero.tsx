import Link from 'next/link'
import { InputSearch } from './input-search'

export async function Hero() {
  const trandings = ['mountain', 'technology', 'city', 'forest']

  return (
    <div className="bg-hero bg-cover bg-fixed bg-center bg-no-repeat px-4 py-44">
      <div className="mx-auto flex h-full  w-full max-w-[800px] flex-col gap-2 ">
        <h1 className="text-6xl font-semibold">reason</h1>
        <p>
          The internet’s source for visuals. <br />
          Powered by creators everywhere.
        </p>

        <InputSearch variant="hero" />

        <div className="flex gap-2">
          <strong>Trending: </strong>

          <ul className="flex gap-2">
            {trandings.map((item) => {
              return (
                <Link href={`/search/${item}`} key={item} className="underline">
                  {item}
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
