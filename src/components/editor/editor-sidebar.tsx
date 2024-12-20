'use client'
import { useEditor } from '@/components/editor'
import { EditorSidebarDebug } from '@/components/editor/sidebar-items/editor-sidebar-debug'
import { EditorSidebarExplorer } from '@/components/editor/sidebar-items/editor-sidebar-explorer'
import { EditorSidebarExtensions } from '@/components/editor/sidebar-items/editor-sidebar-extensions'
import { EditorSidebarSearch } from '@/components/editor/sidebar-items/editor-sidebar-search'
import { EditorSidebarSource } from '@/components/editor/sidebar-items/editor-sidebar-source'
import { useCallback, useEffect, useMemo, type JSX } from 'react'

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
    <div className='flex h-full w-full min-w-40 flex-col justify-between overflow-x-hidden border-l border-border bg-secondary text-[10px] tracking-wide dark:bg-background'>
      {sidebar}
    </div>
  )
}
