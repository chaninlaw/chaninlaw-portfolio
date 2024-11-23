'use client'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { VscDebugAlt, VscExtensions, VscFiles, VscSearch, VscSourceControl } from 'react-icons/vsc'

import { useEditor } from '.'

export function EditorNavSide() {
  const { currentSidebar, setCurrentSidebar } = useEditor()

  const items = [
    {
      key: 'explorer',
      icon: <VscFiles className='w-6 h-6' />,
      content: 'Explorer',
      shortcut: '⇧⌘E',
      badge: 0,
      onClick: () => setCurrentSidebar('explorer')
    },
    {
      key: 'search',
      icon: <VscSearch className='w-6 h-6' />,
      content: 'Search',
      shortcut: '⇧⌘F',
      badge: 0,
      onClick: () => setCurrentSidebar('search')
    },
    {
      key: 'source',
      icon: <VscSourceControl className='w-6 h-6' />,
      content: 'Source Control',
      shortcut: '⇧⌘G',
      badge: 0,
      onClick: () => setCurrentSidebar('source')
    },
    {
      key: 'debug',
      icon: <VscDebugAlt className='w-6 h-6' />,
      content: 'Run and Debug',
      shortcut: '⇧⌘D',
      badge: 0,
      onClick: () => setCurrentSidebar('debug')
    },
    {
      key: 'extensions',
      icon: <VscExtensions className='w-6 h-6' />,
      content: 'Extensions',
      shortcut: '⇧⌘X',
      badge: 1,
      onClick: () => setCurrentSidebar('extensions')
    }
  ]

  return (
    <div className='h-full'>
      <div className='w-12 flex flex-col items-center text-foreground/70 dark:text-white/60'>
        {items.map((item) => (
          <Tooltip key={item.key} delayDuration={0}>
            <TooltipTrigger
              className={cn('w-full relative py-3 flex justify-center hover:text-black dark:hover:text-white', {
                'text-black dark:text-white border-l-2 border-blue-500/90': currentSidebar === item.key
              })}
              aria-label={item.key}
              aria-selected={currentSidebar === item.key}
              onClick={item.onClick}
            >
              {item.icon}
              {item.badge > 0 && (
                <span
                  aria-hidden
                  className='absolute right-2 bottom-2 h-4 w-4 flex justify-center items-center font-black text-white text-[8px] rounded-full bg-blue-600'
                >
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </TooltipTrigger>
            <TooltipContent className='bg-background text-primary border border-muted-foreground shadow-xl' side='right' align='center'>
              <small className='text-xs text-black/75 dark:text-white/75'>
                {item.content} (<kbd className='font-sans tracking-widest'>{item.shortcut}</kbd>)
              </small>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
