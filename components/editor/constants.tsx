import { FaReact } from 'react-icons/fa'
import { VscBrowser, VscFilePdf } from 'react-icons/vsc'

export type SidebarValue = 'explorer' | 'search' | 'source' | 'debug' | 'extensions'

export type TabsListValue = '/' | '/blogs' | '/skills' | '/projects' | '/contact' | '/resume'

type TabsLists = {
  name: string
  value: TabsListValue
  icon: React.ReactNode
  downloadable?: string
}[]

export const DEFAULT_TABS = [
  {
    name: 'Preview',
    value: '/',
    icon: <VscBrowser />
  },
  {
    name: 'blogs.tsx',
    value: '/blogs',
    icon: <FaReact className='text-xs text-blue-400' />
  },
  {
    name: 'skills.tsx',
    value: '/skills',
    icon: <FaReact className='text-xs text-blue-400' />
  },
  {
    name: 'projects.tsx',
    value: '/projects',
    icon: <FaReact className='text-xs text-blue-400' />
  },
  {
    name: 'contact.tsx',
    value: '/contact',
    icon: <FaReact className='text-xs text-blue-400' />
  }
]

export const DEAULT_TABS_LIST: TabsLists = [
  {
    name: 'Preview',
    value: '/',
    icon: <VscBrowser />
  },
  {
    name: 'blogs.tsx',
    value: '/blogs',
    icon: <FaReact className='text-xs text-blue-400' />
  },
  {
    name: 'skills.tsx',
    value: '/skills',
    icon: <FaReact className='text-xs text-blue-400' />
  },
  {
    name: 'projects.tsx',
    value: '/projects',
    icon: <FaReact className='text-xs text-blue-400' />
  },
  {
    name: 'contact.tsx',
    value: '/contact',
    icon: <FaReact className='text-xs text-blue-400' />
  },
  {
    name: 'resume.pdf',
    value: '/resume',
    icon: <VscFilePdf />,
    downloadable: '/Resume_Chanin.pdf'
  }
]
