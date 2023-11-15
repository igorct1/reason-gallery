'use client'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { PhotosList } from '../photos/photos-list'
import { FileImage, Folder, Heart } from 'lucide-react'
import { useState } from 'react'

export function Tabs() {
  const [currentTab, setCurrentTab] = useState('photos')

  return (
    <TabsPrimitive.Root value={currentTab} onValueChange={setCurrentTab}>
      <TabsPrimitive.List
        className="flex w-full gap-6 border-b border-zinc-400 pb-3"
        defaultValue="tab1"
      >
        <TabsPrimitive.Trigger asChild value="tab1" className="">
          <p className="flex cursor-pointer items-center  gap-2 text-zinc-400 hover:text-zinc-50">
            <FileImage className="h-4 w-4" />
            Photos
          </p>
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger asChild value="tab1" className="">
          <p className="flex cursor-pointer items-center gap-2 text-zinc-400 hover:text-zinc-50">
            <Heart className="h-4 w-4" />
            Likes
          </p>
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger asChild value="tab1" className="">
          <p className="flex cursor-pointer items-center  gap-2 text-zinc-400 hover:text-zinc-50">
            <Folder className="h-4 w-4" />
            Collections
          </p>
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>
      <TabsPrimitive.Content value="tab1">
        <PhotosList />
      </TabsPrimitive.Content>
      <TabsPrimitive.Content value="tab2">
        <div>b</div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  )
}
