import { ReactNode } from 'react'
import { Header } from '../components/shared/header'

interface HomeLayout {
  children: ReactNode
  modal: ReactNode
}

export default function HomeLayout({ children, modal }: HomeLayout) {
  return (
    <div className="mx-auto min-h-screen w-full">
      <Header />

      {children}
      {modal}
    </div>
  )
}
