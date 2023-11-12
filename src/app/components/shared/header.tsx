import { Menu } from 'lucide-react'
import Link from 'next/link'

import { InputSearch } from './input-search'

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1980px] items-center gap-8 p-4">
      <div className="group flex flex-1 items-center gap-4 ">
        <Link href="/" className=" text-2xl font-semibold ">
          reason.
        </Link>
        <InputSearch />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-8">
          <button className="rounded-md p-2.5 text-zinc-200 transition duration-300 hover:bg-zinc-800 hover:text-zinc-50">
            Collections
          </button>
          <div className="h-4 w-[1px] bg-zinc-400" />
          <button className="rounded-md p-2.5 text-zinc-200 duration-300 hover:bg-zinc-800 hover:text-zinc-50">
            Topics
          </button>
        </div>
        <Menu className="cursor-pointer text-zinc-200 hover:text-zinc-50" />
      </div>
    </header>
  )
}