'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEditor } from '.'
import { BsX } from 'react-icons/bs'
import { type TabsListValue } from './items'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function EditorTabs() {
  const { tabLists, setTabLists, currentTab, setCurrentTab } = useEditor()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setCurrentTab(pathname as TabsListValue)
  }, [pathname, setCurrentTab])

  const onDeleteTab = (value: TabsListValue) => {
    setTabLists((prev) => prev.filter((tab) => tab.value !== value))
  }
  return (
    <Tabs value={currentTab} onValueChange={(e) => setCurrentTab(e as TabsListValue)}>
      <TabsList className='p-0 flex justify-start w-full border border-border rounded-none bg-background'>
        {tabLists.map((tab) => (
          <TabsTrigger
            className='w-fit h-full flex space-x-1 group data-[state=active]:bg-stone-900 data-[state=active]:border-t data-[state=active]:border-b data-[state=active]:border-t-blue-400 data-[state=active]:border-b-transparent'
            key={tab.value}
            value={tab.value}
            onClick={() => router.push(tab.value)}
          >
            <span>{tab.icon}</span>
            <span>{tab.name}</span>
            <BsX
              className='opacity-0 group-hover:opacity-100 hover:rounded-md hover:bg-white/5'
              onClick={onDeleteTab.bind(null, tab.value)}
            />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
