'use client'
import { VscBell, VscCheckAll, VscError, VscHistory, VscRemote, VscSourceControl, VscWarning } from 'react-icons/vsc'
import Visitors from '@/components/visitors'
import { Timer } from '@/components/timer'
import { SyncStatus } from '@/components/sync-status'
import { EditorKeyboardCapture } from './editor-keyboard-capture'

export function EditorFooter() {
  return (
    <div className='h-6 flex justify-between items-center border-t border-border'>
      <ul className='h-full border-t border-border flex items-center space-x-4'>
        <li className='h-full w-10 rounded-bl-xl bg-blue-500/90 border-r border-border flex justify-center items-center'>
          <VscRemote className='text-white' />
        </li>
        <li className='hidden sm:flex justify-center items-center space-x-1'>
          <VscSourceControl className='text-sm' />
          <small>main*</small>
          <SyncStatus />
        </li>

        <li className='hidden sm:flex justify-center items-center space-x-1'>
          <VscError />
          <small>0</small>
          <VscWarning />
          <small>0</small>
        </li>
        <li className='flex justify-center items-center space-x-1 pr-2'>
          <Visitors />
        </li>
        <li className='flex justify-center items-center space-x-1'>
          <VscHistory />
          <Timer />
        </li>
        <li className='hidden sm:flex justify-center items-center space-x-1'>
          <EditorKeyboardCapture />
        </li>
      </ul>
      <ul className='h-7 border-t border-border flex items-center space-x-4 px-2'>
        <li className='hidden sm:flex justify-center items-center'>
          <small>made with 🤍</small>
        </li>
        <li className='hidden md:flex justify-center items-center'>
          <small>{'{ }'} Typescript JSX</small>
        </li>
        <li className='hidden md:flex justify-center items-center '>
          <VscCheckAll />
          <small>Prettier</small>
        </li>
        <li className='hidden sm:flex justify-center items-center'>
          <VscBell />
        </li>
      </ul>
    </div>
  )
}
