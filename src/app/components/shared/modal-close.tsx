'use client'
import { X } from 'lucide-react'
import Link from 'next/link'

export function ModalClose() {
  function handleHardRefresh() {
    location.href = '/'
  }

  return (
    <Link href="/">
      <X
        className="absolute left-2 top-2 md:left-10"
        onClick={handleHardRefresh}
      />
    </Link>
  )
}
