'use client'

import { useCallback, useEffect, useMemo } from 'react'
import { useEditor } from '@/components/editor'
import { EditorSidebarExplorer } from '@/components/editor/sidebar-items/editor-sidebar-explorer'
import { EditorSidebarSearch } from '@/components/editor/sidebar-items/editor-sidebar-search'
import { EditorSidebarSource } from '@/components/editor/sidebar-items/editor-sidebar-source'
import { EditorSidebarDebug } from '@/components/editor/sidebar-items/editor-sidebar-debug'
import { EditorSidebarExtensions } from '@/components/editor/sidebar-items/editor-sidebar-extensions'

export function EditorSidebar() {
  const { currentSidebar, setCurrentSidebar } = useEditor()

  const down = useCallback(
    (e: KeyboardEvent) => {
      const shortcutKey = e.shiftKey && (e.metaKey || e.ctrlKey) ? e.key : null
      switch (shortcutKey) {
        case 'e':
          setCurrentSidebar('explorer')
          break
        case 'f':
          setCurrentSidebar('search')
          break
        case 'g':
          setCurrentSidebar('source')
          break
        case 'd':
          setCurrentSidebar('debug')
          break
        case 'x':
          setCurrentSidebar('extensions')
          break
        default:
          break
      }
    },
    [setCurrentSidebar]
  )

  useEffect(() => {
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [down])

  const sidebar: JSX.Element = useMemo(
    () =>
      ({
        explorer: <EditorSidebarExplorer />,
        search: <EditorSidebarSearch />,
        source: <EditorSidebarSource />,
        debug: <EditorSidebarDebug />,
        extensions: <EditorSidebarExtensions />
      })[currentSidebar] || <EditorSidebarExplorer />,
    [currentSidebar]
  )

  return (
    <div className='w-full h-full min-w-40 overflow-x-hidden bg-secondary dark:bg-background border-l border-border text-[10px] tracking-wide flex flex-col justify-between'>
      {sidebar}
    </div>
  )
}
