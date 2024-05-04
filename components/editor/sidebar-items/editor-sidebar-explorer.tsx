'use client'
import { useCallback, startTransition } from 'react'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useEditor } from '@/components/editor'
import { DEAULT_TABS_LIST, type TabsListValue } from '@/components/editor/constants'
import { useRouter } from 'next/navigation'
import { ModeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { LiveAvatar } from '@/components/liveblocks/live-avatar'
import { Room } from '@/components/liveblocks/room'
import { Button } from '@/components/ui/button'
import { useProgress } from 'react-transition-progress'

export function EditorSidebarExplorer() {
  const { tabLists, setTabLists, setCurrentTab, currentTab } = useEditor()
  const router = useRouter()
  const startProgress = useProgress()

  const onClickOpenEditors = useCallback(
    (value: TabsListValue) => {
      setCurrentTab(value)
      startTransition(() => {
        startProgress()
        router.push(value)
      })
    },
    [setCurrentTab, startProgress, router]
  )

  const onClickAddTab = useCallback(
    (tab: (typeof DEAULT_TABS_LIST)[number]) => {
      if (tab.downloadable) {
        return window.open(tab.downloadable, '_blank')
      }
      if (!tabLists.some((t) => t.value === tab.value)) {
        setTabLists((prev) => [...prev, tab])
      }
      setCurrentTab(tab.value)
      startTransition(() => {
        startProgress()
        router.push(tab.value)
      })
    },
    [router, setCurrentTab, setTabLists, startProgress, tabLists]
  )

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center px-2 py-1.5'>
          <p className='uppercase'>Expolorer</p>
          <ModeToggle>
            <Button variant='ghost' aria-label='Toggle theme' className='h-5 w-5 p-0'>
              <DotsHorizontalIcon />
            </Button>
          </ModeToggle>
        </div>

        <Accordion type='single' collapsible>
          <AccordionItem value='item-1' className='border-0'>
            <AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1 pt-1 border-t dark:border-secondary'>
              Open Editors
            </AccordionTrigger>
            <AccordionContent>
              {tabLists.map((tab) => (
                <div
                  key={tab.value}
                  className={cn('pl-8 flex items-center space-x-1 cursor-pointer hover:bg-slate-300/20 dark:hover:bg-zinc-100/10', {
                    'bg-sky-100 dark:bg-sky-100/20': tab.value === currentTab
                  })}
                  onMouseEnter={() => router.prefetch(tab.value)}
                  onClick={onClickOpenEditors.bind(null, tab.value)}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type='single' collapsible defaultValue={'item-1'}>
          <AccordionItem value='item-1' className='border-0'>
            <AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1 pt-1 border-t dark:border-secondary'>
              Chanin
            </AccordionTrigger>
            <AccordionContent>
              {DEAULT_TABS_LIST.map((tab) => (
                <div
                  key={tab.value}
                  className={cn('pl-8 flex items-center space-x-1 cursor-pointer hover:bg-slate-300/20 dark:hover:bg-zinc-100/10', {
                    'bg-sky-100 dark:bg-sky-100/20': tab.value === currentTab
                  })}
                  onMouseEnter={() => router.prefetch(tab.value)}
                  onClick={onClickAddTab.bind(null, tab)}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className='flex flex-col'>
        <Room>
          <LiveAvatar />
        </Room>

        <Accordion type='single' collapsible>
          <AccordionItem value='item-4' className='border-0'>
            <AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1'>Timeline</AccordionTrigger>
            <AccordionContent>
              <div className='ml-8 flex items-center space-x-1'>Nice to meet you.</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
