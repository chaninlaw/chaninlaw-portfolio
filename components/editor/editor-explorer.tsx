'use client'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { FaReact } from 'react-icons/fa'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { useEditor } from '.'
import { DEAULT_TABS_LIST, type TabsListValue } from '@/lib/constants'
import { useRouter } from 'next/navigation'

export function EditorExplorer() {
	const { tabLists, setTabLists, setCurrentTab } = useEditor()
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
		<div className='w-full h-full min-w-40 overflow-x-hidden border-l border-border text-[10px] tracking-wide flex flex-col justify-between'>
			<div className='flex flex-col'>
				<div className='flex justify-between items-center p-2'>
					<p className='uppercase'>Expolorer</p>
					<DotsHorizontalIcon />
				</div>

				<Accordion type='single' collapsible defaultValue={'item-1'}>
					<AccordionItem value='item-1' className='border-0'>
						<AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1'>
							Open Editors
						</AccordionTrigger>
						<AccordionContent>
							{tabLists.map((tab) => (
								<div
									key={tab.value}
									className='ml-8 flex items-center space-x-1 cursor-pointer'
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
						<AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1'>
							Chanin
						</AccordionTrigger>
						<AccordionContent>
							{DEAULT_TABS_LIST.map((tab) => (
								<div
									key={tab.value}
									className='ml-8 flex items-center space-x-1 cursor-pointer'
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
						<AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1'>
							Outline
						</AccordionTrigger>
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
						<AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1'>
							Timeline
						</AccordionTrigger>
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
