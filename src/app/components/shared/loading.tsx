export default function Loading({ style }: { style?: string }) {
  return (
    <div className={`flex w-full items-center justify-center py-10 ${style}`}>
      <div className="aspect-square w-8 animate-spin rounded-full border-2 border-t-transparent" />
    </div>
  )
}
