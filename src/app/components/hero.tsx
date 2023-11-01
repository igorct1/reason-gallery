import { Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export async function Hero() {
  return (
    <div className="bg-hero bg-cover bg-fixed bg-center bg-no-repeat px-4 py-36">
      <div className="mx-auto flex h-full  w-full max-w-[800px] flex-col gap-2 ">
        <h1 className="text-6xl font-semibold">reason</h1>
        <p>
          The internet’s source for visuals. <br />
          Powered by creators everywhere.
        </p>

        <form
          className={twMerge(
            'border-transaprent flex w-full items-center justify-between rounded-md border border-transparent',
            'bg-zinc-900 pl-4 transition-all duration-300  focus-within:border-zinc-400 hover:border-zinc-400 hover:bg-zinc-800',
          )}
        >
          <input
            type="text"
            className="w-full bg-transparent text-sm  outline-none placeholder:text-zinc-600"
            placeholder="Search millions of high quality images"
          />
          <button
            type="submit"
            className="rounded-md px-4 py-4 text-zinc-50 transition-all duration-300 hover:bg-zinc-900"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>

        <div className="flex gap-2">
          <strong>Trending: </strong>

          <ul className="flex gap-2">
            <a href="#" className="underline">
              mountain
            </a>
            <a href="#" className="underline">
              technology
            </a>
            <a href="#" className="underline">
              city
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}
