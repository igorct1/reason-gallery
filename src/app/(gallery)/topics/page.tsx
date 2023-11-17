import { Title } from '@/app/components/shared/title'
import { TopicsList } from '@/app/components/topics/topics-list'

export default function Topics() {
  return (
    <section className="mx-auto max-w-[1440px] py-14">
      <Title
        title="Topics"
        text="Uncover a treasure trove of genuine, high-quality photographs created by skilled photographers from every corner of the globe."
      />
      <TopicsList />
    </section>
  )
}
