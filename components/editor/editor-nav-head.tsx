'use client'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { VscLayout, VscLayoutPanel, VscLayoutSidebarLeft, VscLayoutSidebarRightOff, VscSearch } from 'react-icons/vsc'
export function EditorNavHead() {
  return (
    <div aria-hidden='true' className='border-b border-border flex justify-between'>
      <ul className='flex items-center p-2 space-x-2 '>
        <li className='w-3 h-3 rounded-full bg-red-500'></li>
        <li className='w-3 h-3 rounded-full bg-yellow-500'></li>
        <li className='w-3 h-3 rounded-full bg-green-500'></li>
      </ul>
      <ul className='flex items-center space-x-2'>
        <li className='hidden sm:block'>
          <ArrowLeftIcon className='text-stone-500' />
        </li>
        <li className='hidden sm:block'>
          <ArrowRightIcon className='text-stone-500' />
        </li>
        <li>
          <div className='h-full p-1 m-1 w-[200px] sm:w-[300px] rounded-lg border border-stone-500 bg-secondary dark:bg-white/5 flex justify-center items-center space-x-1'>
            <VscSearch className='text-foreground text-sm' />
            <span className='text-xs'>Chanin</span>
          </div>
        </li>
      </ul>
      <ul className='flex items-center p-2 space-x-2 dark:text-white/60'>
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
