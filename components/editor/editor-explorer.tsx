'use client'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { FaReact } from 'react-icons/fa'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useEditor } from '.'
import { DEAULT_TABS_LIST, type TabsListValue } from './items'
import { useRouter } from 'next/navigation'
import { ModeToggle } from '../theme-toggle'
import { cn } from '@/lib/utils'

export function EditorExplorer() {
  const { tabLists, setTabLists, setCurrentTab, currentTab } = useEditor()
  const router = useRouter()

  const onClickOpenEditors = (value: TabsListValue) => {
    setCurrentTab(value)
    router.push(value)
  }

  const onClickAddTab = (tab: (typeof DEAULT_TABS_LIST)[number]) => {
    if (tab.downloadable) {
      return window.open(tab.downloadable, '_blank')
    }
    if (!tabLists.some((t) => t.value === tab.value)) {
      setTabLists((prev) => [...prev, tab])
    }
    setCurrentTab(tab.value)
    router.push(tab.value)
  }

  return (
    <div className='w-full h-full min-w-40 overflow-x-hidden bg-secondary dark:bg-background border-l border-border text-[10px] tracking-wide flex flex-col justify-between'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center p-2'>
          <p className='uppercase'>Expolorer</p>
          <ModeToggle>
            <DotsHorizontalIcon />
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
                  className={cn('pl-8 flex items-center space-x-1 cursor-pointer', { 'bg-sky-100 dark:bg-sky-100/20': tab.value === currentTab })}
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
                  className={cn('pl-8 flex items-center space-x-1 cursor-pointer', { 'bg-sky-100 dark:bg-sky-100/20': tab.value === currentTab })}
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
        <Accordion type='single' collapsible>
          <AccordionItem value='item-3' className='border-0'>
            <AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1'>Outline</AccordionTrigger>
            <AccordionContent>
              <div className='ml-8 flex items-center space-x-1'>
                <FaReact className='text-xs text-blue-400' />
                <span>index.tsx</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type='single' collapsible>
          <AccordionItem value='item-4' className='border-0'>
            <AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1'>Timeline</AccordionTrigger>
            <AccordionContent>
              <div className='ml-8 flex items-center space-x-1'>
                <FaReact className='text-xs text-blue-400' />
                <span>index.tsx</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
