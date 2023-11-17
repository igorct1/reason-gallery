export interface TitleProps {
  title: string
  text?: string
}

export function Title({ title, text }: TitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-semibold md:text-6xl">{title}</h2>
      <p className="max-w-[460px] text-sm text-zinc-200">{text}</p>
    </div>
  )
}
