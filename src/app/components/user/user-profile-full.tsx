import { CheckCircle, Mail, MapPin, MoreHorizontal } from 'lucide-react'
import { IUser } from '../../data/@types/user'
import Image from 'next/image'
import Link from 'next/link'

export interface UserProfileFullProps {
  user: IUser
}

export function UserProfileFull({ user }: UserProfileFullProps) {
  return (
    <div className="mx-4 flex max-w-[800px] flex-col items-start gap-10 py-16 md:flex-row lg:mx-auto">
      <div className="px-4">
        <Image
          src={user.profile_image.large}
          alt=""
          width={300}
          height={300}
          quality={100}
          className="h-full min-h-[120px] w-full min-w-[120px] rounded-full"
        />
      </div>
      <div>
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-4xl">{user.name}</h2>
          <div className="flex items-center gap-2">
            {user.for_hire && (
              <button className="rounded-md bg-zinc-700 px-3 py-1.5 hover:bg-zinc-800">
                Hire
              </button>
            )}
            <button className="rounded-md border border-zinc-700 px-3 py-1.5">
              <Mail className="w-4" />
            </button>
            <button className="rounded-md border border-zinc-700 px-3 py-1.5">
              <MoreHorizontal className="w-4" />
            </button>
          </div>
        </div>
        <div>
          <p className="py-6">{user.bio}</p>
          <ul className="flex flex-col gap-2 text-sm">
            {user.for_hire && (
              <li className="flex items-center gap-2 text-zinc-400">
                <CheckCircle className="w-4" />
                Available for hire
              </li>
            )}
            {user.location && (
              <li className="flex items-center gap-2">
                <MapPin className="w-4" />
                {user.location}
              </li>
            )}
          </ul>
        </div>
        <div className="flex flex-col  py-4">
          <h3>Interests</h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {user.tags.custom.map((tag) => {
              return (
                <Link
                  href={`/search/${tag.title}`}
                  key={tag.title}
                  className="rounded-md bg-zinc-700 px-2.5 py-1.5 transition duration-300 hover:bg-zinc-800"
                >
                  {tag.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
