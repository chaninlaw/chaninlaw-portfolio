'use client'
import { SyncStatus } from '@/components/sync-status'
import { Timer } from '@/components/timer'
import Visitors from '@/components/visitors'
import { VscBell, VscCheckAll, VscError, VscHistory, VscRemote, VscSourceControl, VscWarning } from 'react-icons/vsc'

import { EditorKeyboardCapture } from './editor-keyboard-capture'

export function EditorFooter() {
  return (
    <div className='flex h-6 items-center justify-between border-t border-border'>
      <ul className='flex h-full items-center space-x-4 border-t border-border'>
        <li className='flex h-full w-10 items-center justify-center rounded-bl-xl border-r border-border bg-blue-500/90'>
          <VscRemote className='text-white' />
        </li>
        <li className='hidden items-center justify-center space-x-1 sm:flex'>
          <VscSourceControl className='text-sm' />
          <small>main*</small>
          <SyncStatus />
        </li>

        <li className='hidden items-center justify-center space-x-1 sm:flex'>
          <VscError />
          <small>0</small>
          <VscWarning />
          <small>0</small>
        </li>
        <li className='flex items-center justify-center space-x-1 pr-2'>
          <Visitors />
        </li>
        <li className='flex items-center justify-center space-x-1'>
          <VscHistory />
          <Timer />
        </li>
        <li className='hidden items-center justify-center space-x-1 sm:flex'>
          <EditorKeyboardCapture />
        </li>
      </ul>
      <ul className='flex h-7 items-center space-x-4 border-t border-border px-2'>
        <li className='hidden items-center justify-center sm:flex'>
          <small>made with 🤍</small>
        </li>
        <li className='hidden items-center justify-center md:flex'>
          <small>{'{ }'} Typescript JSX</small>
        </li>
        <li className='hidden items-center justify-center md:flex'>
          <VscCheckAll />
          <small>Prettier</small>
        </li>
        <li className='hidden items-center justify-center sm:flex'>
          <VscBell />
        </li>
      </ul>
    </div>
  )
}
