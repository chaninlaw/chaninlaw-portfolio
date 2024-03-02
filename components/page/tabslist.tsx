import { About } from '@/components/page/about'
import { Landing } from '@/components/page/landing'
import { FaReact } from 'react-icons/fa'
import { VscBrowser, VscFilePdf } from 'react-icons/vsc'
import { Skills } from './skills'
import { Projects } from './projects'
import { Contact } from './contact'

export const DEFAULT_TABS = [
	{
		name: 'Preview',
		value: 'preview',
		icon: <VscBrowser />,
		content: <Landing />,
	},
	{
		name: 'about.tsx',
		value: 'about',
		icon: <FaReact className='text-xs text-blue-400' />,
		content: <About />,
	},
	{
		name: 'skills.tsx',
		value: 'skills',
		icon: <FaReact className='text-xs text-blue-400' />,
		content: <Skills />,
	},
	{
		name: 'projects.tsx',
		value: 'projects',
		icon: <FaReact className='text-xs text-blue-400' />,
		content: <Projects />,
	},
	{
		name: 'contact.tsx',
		value: 'contact',
		icon: <FaReact className='text-xs text-blue-400' />,
		content: <Contact />,
	},
]

export type TabsListValue =
	| 'preview'
	| 'about'
	| 'skills'
	| 'projects'
	| 'contact'
	| 'resume'

type TabsLists = {
	name: string
	value: TabsListValue
	icon: React.ReactNode
	content?: React.ReactNode
	downloadable?: string
}[]
export const DEAULT_TABS_LIST: TabsLists = [
	{
		name: 'Preview',
		value: 'preview',
		icon: <VscBrowser />,
		content: <Landing />,
	},
	{
		name: 'about.tsx',
		value: 'about',
		icon: <FaReact className='text-xs text-blue-400' />,
		content: <About />,
	},
	{
		name: 'skills.tsx',
		value: 'skills',
		icon: <FaReact className='text-xs text-blue-400' />,
		content: <Skills />,
	},
	{
		name: 'projects.tsx',
		value: 'projects',
		icon: <FaReact className='text-xs text-blue-400' />,
		content: <Projects />,
	},
	{
		name: 'contact.tsx',
		value: 'contact',
		icon: <FaReact className='text-xs text-blue-400' />,
		content: <Contact />,
	},
	{
		name: 'resume.pdf',
		value: 'resume',
		icon: <VscFilePdf />,
		downloadable: '/Resume_Chanin.pdf',
	},
]
