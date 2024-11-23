'use client'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { VscLayout, VscLayoutPanel, VscLayoutSidebarLeft, VscLayoutSidebarRightOff, VscSearch } from 'react-icons/vsc'
export function EditorNavHead() {
  return (
    <div aria-hidden='true' className='flex justify-between border-b border-border'>
      <ul className='flex items-center space-x-2 p-2'>
        <li className='h-3 w-3 rounded-full bg-red-500'></li>
        <li className='h-3 w-3 rounded-full bg-yellow-500'></li>
        <li className='h-3 w-3 rounded-full bg-green-500'></li>
      </ul>
      <ul className='flex items-center space-x-2'>
        <li className='hidden sm:block'>
          <ArrowLeftIcon className='text-stone-500' />
        </li>
        <li className='hidden sm:block'>
          <ArrowRightIcon className='text-stone-500' />
        </li>
        <li>
          <div className='m-1 flex h-full w-[200px] items-center justify-center space-x-1 rounded-sm border border-stone-500 bg-secondary p-1 dark:bg-white/5 sm:w-[300px]'>
            <VscSearch className='text-sm text-foreground' />
            <span className='text-xs'>Chanin</span>
          </div>
        </li>
      </ul>
      <ul className='flex items-center space-x-2 p-2 dark:text-white/60'>
        <li className='hidden sm:block'>
          <VscLayoutSidebarLeft />
        </li>
        <li className='hidden sm:block'>
          <VscLayoutPanel />
        </li>
        <li className='hidden sm:block'>
          <VscLayoutSidebarRightOff />
        </li>
        <li className='hidden sm:block'>
          <VscLayout />
        </li>
      </ul>
    </div>
  )
}
