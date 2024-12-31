'use client'
import { Link } from '@/components/link'
import { Kbd } from '@/components/ui/kbd'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import React, { useEffect } from 'react'
import { TbError404 } from 'react-icons/tb'

export default function NotFound() {
  const { toast } = useToast()

  useEffect(() => {
    toast({
      title: 'Oops, not found.',
      description: 'This is not the page you are looking for.',
      duration: 10 * 1_000,
      action: (
        <Link href='..'>
          <ToastAction altText='Go to home'>Back</ToastAction>
        </Link>
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='h-full w-full bg-white dark:bg-background'>
      <div className='container max-w-sm space-y-10 py-24'>
        <TbError404 className='h-80 w-80 fill-border dark:fill-secondary' />
        <div className='grid grid-cols-3'>
          <div className='col-span-2 space-y-4 text-end text-stone-500'>
            <p>Show all commands</p>
            <p>Go to File</p>
            <p>Find in file</p>
            <p>Toggle Fullscreen</p>
            <p>Show setting</p>
          </div>

          <div className='col-span-1 space-y-4'>
            <pre className='flex justify-end gap-2 text-sm'>
              <Kbd>⇧</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>P</Kbd>
            </pre>
            <pre className='flex justify-end gap-2 text-sm'>
              <Kbd>⌘</Kbd>
              <Kbd>P</Kbd>
            </pre>
            <pre className='flex justify-end gap-2 text-sm'>
              <Kbd>⇧</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>F</Kbd>
            </pre>
            <pre className='flex justify-end gap-2 text-sm'>
              <Kbd>^</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>F</Kbd>
            </pre>
            <pre className='flex justify-end gap-2 text-sm'>
              <Kbd>⌘</Kbd>
              <Kbd>,</Kbd>
            </pre>
          </div>
        </div>
      </div>
    </main>
  )
}
