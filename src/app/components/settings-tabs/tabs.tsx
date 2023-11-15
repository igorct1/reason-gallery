'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './tab-item'
import { Folder, Heart, ImageIcon } from 'lucide-react'
import { PhotosList } from '../photos/photos-list'
import { Collections } from '../shared/collections'
import { Likes } from '../shared/likes'
import { IUser } from '@/app/data/@types/user'

export interface SettingsTabsProps {
  user: IUser
  likes?: string
  collections?: string
}

export function SettingsTabs({ user }: SettingsTabsProps) {
  const [currentTab, setCurrentTab] = useState('photos')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <div className="mt-6 w-full border-b border-zinc-700">
        <Tabs.List className="flex justify-between gap-4 px-2.5 md:justify-normal md:gap-10">
          <TabItem
            title="Photos"
            value="photos"
            itemCount={user.total_photos}
            isSelected={currentTab === 'photos'}
            icon={<ImageIcon className="h-4 w-4" />}
          />
          <TabItem
            title="Likes"
            value="likes"
            itemCount={user.total_likes}
            isSelected={currentTab === 'likes'}
            icon={<Heart className="h-4 w-4" />}
          />
          <TabItem
            title="Collections"
            value="collections"
            itemCount={user.total_collections}
            isSelected={currentTab === 'collections'}
            icon={<Folder className="h-4 w-4" />}
          />
        </Tabs.List>
      </div>

      <Tabs.Content value="photos">
        <div className="mx-auto max-w-[1440px] px-4 py-8">
          {user.total_photos > 0 ? (
            <PhotosList user={user.username} />
          ) : (
            <span className="flex justify-center">
              There`s no photos to be showed.
            </span>
          )}
        </div>
      </Tabs.Content>
      <Tabs.Content value="likes">
        {user.total_likes > 0 ? (
          <Likes user={user.username} />
        ) : (
          <span className="flex justify-center py-4">
            There`s no likes to be showed.
          </span>
        )}
      </Tabs.Content>
      <Tabs.Content value="collections">
        {user.total_collections > 0 ? (
          <Collections user={user.username} />
        ) : (
          <span className="flex justify-center py-4">
            There`s no collections to be showed.
          </span>
        )}
      </Tabs.Content>
    </Tabs.Root>
  )
}
