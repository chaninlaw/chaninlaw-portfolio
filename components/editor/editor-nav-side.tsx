'use client'
import { useEditor } from '.'
import { VscDebugAlt, VscExtensions, VscFiles, VscSearch, VscSourceControl } from 'react-icons/vsc'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export function EditorNavSide() {
  const { currentSidebar, setCurrentSidebar } = useEditor()

  const items = [
    {
      key: 'explorer',
      icon: <VscFiles className='w-6 h-6' />,
      content: 'Explorer',
      shortcut: '⇧⌘E',
      onClick: () => setCurrentSidebar('explorer')
    },
    {
      key: 'search',
      icon: <VscSearch className='w-6 h-6' />,
      content: 'Search',
      shortcut: '⇧⌘F',
      onClick: () => setCurrentSidebar('search')
    },
    {
      key: 'source',
      icon: <VscSourceControl className='w-6 h-6' />,
      content: 'Source Control',
      shortcut: '⇧⌘G',
      onClick: () => setCurrentSidebar('source')
    },
    {
      key: 'debug',
      icon: <VscDebugAlt className='w-6 h-6' />,
      content: 'Run and Debug',
      shortcut: '⇧⌘D',
      onClick: () => setCurrentSidebar('debug')
    },
    {
      key: 'extensions',
      icon: <VscExtensions className='w-6 h-6' />,
      content: 'Extensions',
      shortcut: '⇧⌘X',
      onClick: () => setCurrentSidebar('extensions')
    }
  ]

  return (
    <div className='h-full'>
      <ul className='w-12 flex flex-col items-center text-foreground/70 dark:text-white/60'>
        {items.map((item) => (
          <li key={item.key} className='w-full'>
            <Tooltip delayDuration={0}>
              <TooltipTrigger
                className={cn('w-full py-3 flex justify-center hover:text-black dark:hover:text-white', {
                  'text-black dark:text-white border-l-2 border-blue-500/90': currentSidebar === item.key
                })}
                onClick={item.onClick}
              >
                {item.icon}
              </TooltipTrigger>
              <TooltipContent className='bg-background text-primary border border-muted-foreground shadow-xl' side='right' align='center'>
                <small className='text-xs text-black/75 dark:text-white/75'>
                  {item.content} (<kbd className='font-sans tracking-widest'>{item.shortcut}</kbd>)
                </small>
              </TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  )
}
