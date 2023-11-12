import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
}

export function Button({ children, variant }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center gap-2 rounded-md border border-transparent px-2 py-1.5 text-zinc-200 transition duration-300 hover:text-zinc-50',
        variant,
      )}
    >
      {children}
    </button>
  )
}
