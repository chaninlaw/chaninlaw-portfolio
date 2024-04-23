import { VscBell, VscCheckAll, VscError, VscHistory, VscRemote, VscSourceControl, VscSync, VscWarning } from 'react-icons/vsc'
import Visitors from '@/components/visitors'
import { Timer } from '@/components/timer'

export function EditorFooter() {
  return (
    <div className='h-6 flex justify-between items-center'>
      <ul className='h-full border-t border-border flex items-center space-x-4'>
        <li className='h-full w-10 rounded-bl-xl bg-blue-600/80 border-r border-border flex justify-center items-center'>
          <VscRemote className='text-white' />
        </li>
        <li className='flex justify-center items-center'>
          <VscSourceControl className='text-sm' />
        </li>
        <li className='flex justify-center items-center'>
          <small>main*</small>
        </li>
        <li className='hidden sm:flex'>
          <VscSync />
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
