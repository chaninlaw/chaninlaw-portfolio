'use client'

import { useEditor } from '.'
import { EditorSidebarExplorer } from '@/components/editor/sidebar-items/editor-sidebar-explorer'
import { EditorSidebarSearch } from '@/components/editor/sidebar-items/editor-sidebar-search'
import { EditorSidebarSource } from '@/components/editor/sidebar-items/editor-sidebar-source'
import { EditorSidebarDebug } from '@/components/editor/sidebar-items/editor-sidebar-debug'
import { EditorSidebarExtensions } from '@/components/editor/sidebar-items/editor-sidebar-extensions'

export function EditorSidebar() {
  const { currentSidebar } = useEditor()
  let content: JSX.Element | undefined
  switch (currentSidebar) {
    case 'explorer':
      content = <EditorSidebarExplorer />
      break
    case 'search':
      content = <EditorSidebarSearch />
      break
    case 'source':
      content = <EditorSidebarSource />
      break
    case 'debug':
      content = <EditorSidebarDebug />
      break
    case 'extensions':
      content = <EditorSidebarExtensions />
      break
    default:
      content = <EditorSidebarExplorer />
      break
  }

  return (
    <div className='w-full h-full min-w-40 overflow-x-hidden bg-secondary dark:bg-background border-l border-border text-[10px] tracking-wide flex flex-col justify-between'>
      {content}
    </div>
  )
}
