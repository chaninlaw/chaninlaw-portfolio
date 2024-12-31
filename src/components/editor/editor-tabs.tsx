'use client'
import { useEditor } from '@/components/editor'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, startTransition, useCallback } from 'react'
import { BsX } from 'react-icons/bs'
import { useProgress } from 'react-transition-progress'

import { type TabsListValue } from './constants'

export function EditorTabs() {
  const { tabLists, setTabLists, currentTab, setCurrentTab } = useEditor()
  const startProgress = useProgress()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setCurrentTab(pathname as TabsListValue)
  }, [pathname, setCurrentTab])

  const onDeleteTab = useCallback(
    (value: TabsListValue) => {
      setTabLists((prev) => prev.filter((tab) => tab.value !== value))
    },
    [setTabLists]
  )

  return (
    <Tabs value={currentTab} onValueChange={(e) => setCurrentTab(e as TabsListValue)}>
      <TabsList className='hidden-scrollbar flex w-full justify-start overflow-x-scroll whitespace-nowrap rounded-none border border-border bg-background p-0'>
        {tabLists.map((tab) => (
          <TabsTrigger
            className='group flex h-full w-fit space-x-1 rounded-none border-t border-border bg-secondary focus-visible:ring-0 data-[state=active]:rounded-none data-[state=active]:border-b data-[state=active]:border-t data-[state=active]:border-b-transparent data-[state=active]:border-t-blue-400 data-[state=active]:bg-background dark:bg-background dark:data-[state=active]:bg-stone-900'
            key={tab.value}
            value={tab.value}
            onMouseEnter={() => router.prefetch(tab.value)}
            onClick={() => {
              startTransition(() => {
                startProgress()
                router.push(tab.value)
              })
            }}
          >
            <span aria-hidden='true'>{tab.icon}</span>
            <span>{tab.name}</span>
            <BsX
              className='opacity-0 hover:rounded-md hover:bg-white/5 group-hover:opacity-100'
              aria-label='close tab'
              onClick={onDeleteTab.bind(null, tab.value)}
            />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
