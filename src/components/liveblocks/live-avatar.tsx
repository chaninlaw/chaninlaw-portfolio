'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useLiveOthers, useLiveSelf } from '@/hooks/use-live-blocks'
import { useMemo } from 'react'

export const LiveAvatar = () => {
  const others = useLiveOthers()
  const currentUser = useLiveSelf()
  const hasMoreUsers = useMemo(() => others.length > 3, [others.length])

  return (
    <Accordion type='single' collapsible defaultValue='item-3'>
      <AccordionItem value='item-3' className='border-0'>
        <AccordionTrigger className='my-1 flex justify-start space-x-1 font-bold uppercase'>Online ({others.length})</AccordionTrigger>
        <AccordionContent>
          <div className='ml-8 flex items-center space-x-1'>
            <div>There are {others.length} other user(s) online</div>
          </div>
          <div className='flex pl-3'>
            {others.slice(0, 3).map(({ connectionId, info }) => {
              return (
                <Avatar key={connectionId}>
                  <AvatarImage src={info?.avatar} alt='other useravatar' />
                  <AvatarFallback>{info?.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
              )
            })}

            {hasMoreUsers && (
              <Avatar className=''>
                <AvatarFallback>+{others.length - 3}</AvatarFallback>
              </Avatar>
            )}

            {currentUser && (
              <div className='relative ml-8 first:ml-0'>
                <Avatar>
                  <AvatarImage src={currentUser.info?.avatar} alt='your avatar' />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
