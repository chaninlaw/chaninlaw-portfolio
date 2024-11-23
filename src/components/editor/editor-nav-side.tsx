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
      icon: <VscFiles className='h-6 w-6' />,
      content: 'Explorer',
      shortcut: '⇧⌘E',
      badge: 0,
      onClick: () => setCurrentSidebar('explorer')
    },
    {
      key: 'search',
      icon: <VscSearch className='h-6 w-6' />,
      content: 'Search',
      shortcut: '⇧⌘F',
      badge: 0,
      onClick: () => setCurrentSidebar('search')
    },
    {
      key: 'source',
      icon: <VscSourceControl className='h-6 w-6' />,
      content: 'Source Control',
      shortcut: '⇧⌘G',
      badge: 0,
      onClick: () => setCurrentSidebar('source')
    },
    {
      key: 'debug',
      icon: <VscDebugAlt className='h-6 w-6' />,
      content: 'Run and Debug',
      shortcut: '⇧⌘D',
      badge: 0,
      onClick: () => setCurrentSidebar('debug')
    },
    {
      key: 'extensions',
      icon: <VscExtensions className='h-6 w-6' />,
      content: 'Extensions',
      shortcut: '⇧⌘X',
      badge: 1,
      onClick: () => setCurrentSidebar('extensions')
    }
  ]

  return (
    <div className='h-full'>
      <div className='flex w-12 flex-col items-center text-foreground/70 dark:text-white/60'>
        {items.map((item) => (
          <Tooltip key={item.key} delayDuration={0}>
            <TooltipTrigger
              className={cn('relative flex w-full justify-center py-3 hover:text-black dark:hover:text-white', {
                'border-l-2 border-blue-500/90 text-black dark:text-white': currentSidebar === item.key
              })}
              aria-label={item.key}
              aria-selected={currentSidebar === item.key}
              onClick={item.onClick}
            >
              {item.icon}
              {item.badge > 0 && (
                <span
                  aria-hidden
                  className='absolute bottom-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[8px] font-black text-white'
                >
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </TooltipTrigger>
            <TooltipContent className='border border-muted-foreground bg-background text-primary shadow-xl' side='right' align='center'>
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
