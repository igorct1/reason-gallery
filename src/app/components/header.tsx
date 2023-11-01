import { Menu, Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center gap-8 p-4">
      <div className="group flex flex-1 items-center gap-4 ">
        <h1 className=" text-2xl font-semibold ">reason.</h1>
        <form
          className={twMerge(
            ' flex w-full items-center justify-between rounded-full border border-transparent',
            ' bg-zinc-900 pl-4  transition-all duration-300 focus-within:border-zinc-600 hover:border-zinc-600 ',
          )}
        >
          <input
            type="text"
            className=" w-full bg-transparent text-sm  outline-none placeholder:text-zinc-600"
            placeholder="Search high-resolution images"
          />
          <button
            type="submit"
            className=" rounded-full px-4 py-2.5 hover:bg-zinc-500"
          >
            <Search className="h-4 w-4 text-zinc-50" />
          </button>
        </form>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <button className="hover:text-zinc-200">Collections</button>
          <button className="hover:text-zinc-200">Topics</button>
        </div>
        <Menu />
      </div>
    </header>
  )
}
