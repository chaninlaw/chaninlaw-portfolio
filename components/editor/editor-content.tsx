'use client'
import { ProgressBar } from 'react-transition-progress'

export function EditorContent({ children }: { children: React.ReactNode }) {
  return (
    <main role='tabpanel' className='relative h-[calc(100vh-100px)] lg:h-[calc(100vh-128px)] overflow-y-auto'>
      <ProgressBar className='absolute top-0 z-30 h-1 shadow-lg shadow-sky-500/20 bg-blue-400' />
      {children}
    </main>
  )
}
