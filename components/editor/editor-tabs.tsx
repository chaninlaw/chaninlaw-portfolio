'use client'
import { useEffect, startTransition, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useProgress } from 'react-transition-progress'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEditor } from '@/components/editor'

import { type TabsListValue } from './constants'
import { BsX } from 'react-icons/bs'

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
      <TabsList className='p-0 flex justify-start w-full border border-border rounded-none bg-background overflow-x-scroll whitespace-nowrap hidden-scrollbar'>
        {tabLists.map((tab) => (
          <TabsTrigger
            className='w-fit h-full flex space-x-1 rounded-b-none group bg-secondary dark:bg-background data-[state=active]:bg-background dark:data-[state=active]:bg-stone-900 data-[state=active]:border-t data-[state=active]:border-b data-[state=active]:border-t-blue-400 data-[state=active]:border-b-transparent focus-visible:ring-0'
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
              className='opacity-0 group-hover:opacity-100 hover:rounded-md hover:bg-white/5'
              aria-label='close tab'
              onClick={onDeleteTab.bind(null, tab.value)}
            />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
