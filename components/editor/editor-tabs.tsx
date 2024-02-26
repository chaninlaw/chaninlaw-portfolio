import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEditor } from '.'
import { BsX } from 'react-icons/bs'
import { type TabsListValue } from '@/components/page/tabslist'

export function EditorTabs() {
	const { tabLists, setTabLists, currentTab, setCurrentTab } = useEditor()
	const onDeleteTab = (value: TabsListValue) => {
		setTabLists((prev) => prev.filter((tab) => tab.value !== value))
	}

	return (
		<Tabs
			value={currentTab}
			onValueChange={(e) => setCurrentTab(e as TabsListValue)}
		>
			<TabsList className='p-0 flex justify-start w-full border border-border rounded-none bg-background'>
				{tabLists.map((tab) => (
					<TabsTrigger
						className='w-fit h-full flex space-x-1 group'
						key={tab.value}
						value={tab.value}
					>
						<span>{tab.icon}</span>
						<span>{tab.name}</span>
						<BsX
							className='opacity-0 group-hover:opacity-100 hover:rounded-md hover:bg-white/5'
							onClick={onDeleteTab.bind(null, tab.value)}
						/>
					</TabsTrigger>
				))}
			</TabsList>
			{tabLists.map((tab) => (
				<TabsContent
					className='m-0 h-[calc(100vh-124px)] overflow-y-scroll scroll-smooth'
					key={tab.value}
					value={tab.value}
				>
					{tab.content}
				</TabsContent>
			))}
		</Tabs>
	)
}
