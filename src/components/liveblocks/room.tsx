'use client'
import { RoomProvider } from '@/../liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { VscLoading } from 'react-icons/vsc'

export function Room({ children }: { children: React.ReactNode }) {
  return (
    <RoomProvider id={'my-room'} initialPresence={{ cursor: null }}>
      <ClientSideSuspense
        fallback={
          <div className='my-1 flex flex-1 items-center justify-start space-x-1 px-1 py-0 text-[10px] font-bold uppercase tracking-wide transition-all [&[data-state=open]>svg]:-rotate-90'>
            <ChevronDownIcon className='h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200' />
            Online <VscLoading className='animate-spin' />
          </div>
        }
      >
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  )
}
