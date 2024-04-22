import { VscDebugAlt, VscExtensions, VscFiles, VscSearch, VscSourceControl } from 'react-icons/vsc'

export function EditorNavSide() {
  return (
    <div className='h-full w-12'>
      <ul className='flex flex-col items-center py-3 space-y-6 text-foreground/70 dark:text-white/60'>
        <li>
          <VscFiles className='w-6 h-6' />
        </li>
        <li>
          <VscSearch className='w-6 h-6' />
        </li>
        <li>
          <VscSourceControl className='w-6 h-6' />
        </li>
        <li>
          <VscDebugAlt className='w-6 h-6' />
        </li>
        <li>
          <VscExtensions className='w-6 h-6' />
        </li>
      </ul>
    </div>
  )
}
