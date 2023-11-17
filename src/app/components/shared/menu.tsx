'use client'
import * as Dialog from '@radix-ui/react-dialog'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
} from 'lucide-react'
import Link from 'next/link'
export function Menu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <MenuIcon />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="animate-slideIn absolute right-4 top-20  flex  flex-col overflow-hidden rounded-md bg-zinc-800">
          <ul className="flex flex-col">
            <Link
              href="/collections"
              className="p-4 text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50"
            >
              Collections
            </Link>
            <Link
              href="/topics"
              className="p-4 text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50"
            >
              Topics
            </Link>
            <Link
              href="/about"
              className="p-4 text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50"
            >
              About
            </Link>
          </ul>
          <div className="flex justify-between gap-6 p-4">
            <Link
              target="_blank"
              href="https://github.com/igorct1"
              className="rounded-md border border-zinc-700 px-2.5 py-1.5 text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <GithubIcon className="w-4" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/igor-tozetti1/"
              className="rounded-md border border-zinc-700 px-2.5 py-1.5 text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <LinkedinIcon className="w-4" />
            </Link>
            <Link
              target="_blank"
              href="/"
              className="rounded-md border border-zinc-700 px-2.5 py-1.5 text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <InstagramIcon className="w-4" />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/igorct_1"
              className="rounded-md border border-zinc-700 px-2.5 py-1.5 text-zinc-200 transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <TwitterIcon className="w-4" />
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
