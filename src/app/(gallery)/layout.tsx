import { Header } from '@/app/components/header'
import { ReactNode } from 'react'

interface HomeLayout {
  children: ReactNode
}

export default function HomeLayout({ children }: HomeLayout) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1440px] px-4">
      <Header />
      {children}
    </div>
  )
}
