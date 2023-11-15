'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
export interface TabItemProps {
  value: string
  title: string
  itemCount: number
  isSelected?: boolean
  icon: ReactNode
}

export function TabItem({
  title,
  value,
  icon,
  itemCount,
  isSelected = false,
}: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative pb-4 text-sm font-medium text-zinc-500 transition
    duration-300 hover:text-zinc-50 data-[state=active]:text-zinc-50"
    >
      <span className="text-semibold flex items-center gap-2.5">
        {icon}
        {title}
        <span>{itemCount}</span>
      </span>
      {isSelected && (
        <motion.div
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-zinc-200"
          layoutId="activeTab"
        />
      )}
    </Tabs.Trigger>
  )
}
