'use client'
import * as React from 'react'

import { DEAULT_TABS_LIST, DEFAULT_TABS, SidebarValue, type TabsListValue } from './constants'

interface EditorContextValue {
  tabLists: typeof DEAULT_TABS_LIST
  setTabLists: React.Dispatch<React.SetStateAction<typeof DEAULT_TABS_LIST>>
  currentTab: TabsListValue
  setCurrentTab: React.Dispatch<React.SetStateAction<TabsListValue>>
  currentSidebar: SidebarValue
  setCurrentSidebar: React.Dispatch<React.SetStateAction<SidebarValue>>
}
const EditorContext = React.createContext<EditorContextValue | undefined>(undefined)

export const EditorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabLists, setTabLists] = React.useState<typeof DEAULT_TABS_LIST>(DEFAULT_TABS as unknown as typeof DEAULT_TABS_LIST)
  const [currentTab, setCurrentTab] = React.useState<TabsListValue>('/')
  const [currentSidebar, setCurrentSidebar] = React.useState<SidebarValue>('explorer')

  return (
    <EditorContext.Provider value={{ tabLists, setTabLists, currentTab, setCurrentTab, currentSidebar, setCurrentSidebar }}>
      {children}
    </EditorContext.Provider>
  )
}

export const useEditor = () => {
  const context = React.useContext(EditorContext)
  if (!context) throw new Error('useEditor must be used within <Editor />')
  return context
}
