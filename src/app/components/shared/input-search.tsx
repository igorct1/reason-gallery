'use client'

import { Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputSearchProps {
  variant?: string
}

export function InputSearch({ variant }: InputSearchProps) {
  const [query, setQuery] = useState('')

  const router = useRouter()

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push(`/search/${query}`)
  }

  return (
    <>
      {variant === 'hero' ? (
        <form
          onSubmit={handleSearch}
          className={twMerge(
            'border-transaprent flex w-full items-center justify-between rounded-md border border-transparent',
            'bg-zinc-900 pl-4 transition-all duration-300  focus-within:border-zinc-700 hover:border-zinc-700 ',
          )}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-600"
            placeholder="Search millions of high quality images"
          />
          {query && (
            <X
              onClick={() => setQuery('')}
              className="h-5 w-5 cursor-pointer text-zinc-400 hover:text-zinc-50"
            />
          )}
          <button
            type="submit"
            className="rounded-md px-4 py-4 text-zinc-50 transition-all duration-300 hover:bg-zinc-900"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleSearch}
          className={twMerge(
            ' flex w-full items-center justify-between rounded-full border border-transparent',
            ' bg-zinc-900 pl-4  transition-all duration-300 focus-within:border-zinc-700 hover:border-zinc-700 ',
          )}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className=" w-full bg-transparent text-sm  outline-none placeholder:text-zinc-600"
            placeholder="Search high-resolution images"
          />
          {query && (
            <X
              onClick={() => setQuery('')}
              className="mx-2 h-5 w-5 cursor-pointer text-zinc-400 hover:text-zinc-50"
            />
          )}
          <button
            type="submit"
            className=" rounded-full px-4 py-2.5 hover:bg-zinc-500"
          >
            <Search className="h-4 w-4 text-zinc-50" />
          </button>
        </form>
      )}
    </>
  )
}
