'use client'
import { ProgressBar } from 'react-transition-progress'

export function EditorContent({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative h-[calc(100vh-100px)] overflow-y-auto lg:h-[calc(100vh-128px)]'>
      <ProgressBar className='absolute top-0 z-30 h-1 bg-blue-400 shadow-lg shadow-sky-500/20' />
      {children}
    </main>
  )
}
