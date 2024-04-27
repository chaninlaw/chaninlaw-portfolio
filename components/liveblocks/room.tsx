'use client'
import * as React from 'react'

import { RoomProvider } from '@/liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'
import { VscLoading } from 'react-icons/vsc'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export function Room({ children }: { children: React.ReactNode }) {
  return (
    <RoomProvider id={'my-room'} initialPresence={{ cursor: null }}>
      <ClientSideSuspense
        fallback={
          <div className='flex flex-1 items-center justify-start px-1 py-0 text-[10px] tracking-wide transition-all [&[data-state=open]>svg]:-rotate-90 font-bold uppercase space-x-1 my-1'>
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
