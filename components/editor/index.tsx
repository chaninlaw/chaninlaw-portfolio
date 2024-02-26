'use client'
import React from 'react'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { EditorContent } from './editor-content'
import { EditorExplorer } from './editor-explorer'
import { EditorNavHead } from './editor-nav-head'
import { EditorNavSide } from './editor-nav-side'
import { EditorFooter } from './editor-footer'
import {
	type TabsListValue,
	DEAULT_TABS_LIST,
	DEFAULT_TABS,
} from '@/components/page/tabslist'

export function Editor() {
	return (
		<EditorContextProvider>
			<div className='h-full'>
				<div className='border-2 border-border rounded-xl flex flex-col w-full h-full'>
					<EditorNavHead />
					<div className='flex h-full'>
						<EditorNavSide />
						<ResizablePanelGroup direction='horizontal' className='h-full'>
							<ResizablePanel defaultSize={15}>
								<EditorExplorer />
							</ResizablePanel>
							<ResizableHandle />
							<ResizablePanel defaultSize={85}>
								<EditorContent />
							</ResizablePanel>
						</ResizablePanelGroup>
					</div>
					<EditorFooter />
				</div>
			</div>
		</EditorContextProvider>
	)
}
interface EditorContextValue {
	tabLists: typeof DEAULT_TABS_LIST
	setTabLists: React.Dispatch<React.SetStateAction<typeof DEAULT_TABS_LIST>>
	currentTab: TabsListValue
	setCurrentTab: React.Dispatch<React.SetStateAction<TabsListValue>>
}
const EditorContext = React.createContext<EditorContextValue | undefined>(
	undefined
)

const EditorContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [tabLists, setTabLists] = React.useState<typeof DEAULT_TABS_LIST>(
		DEFAULT_TABS as unknown as typeof DEAULT_TABS_LIST
	)
	const [currentTab, setCurrentTab] = React.useState<TabsListValue>('preview')

	return (
		<EditorContext.Provider
			value={{ tabLists, setTabLists, currentTab, setCurrentTab }}
		>
			{children}
		</EditorContext.Provider>
	)
}

export const useEditor = () => {
	const context = React.useContext(EditorContext)
	if (!context) throw new Error('useEditor must be used within <Editor />')
	return context
}
