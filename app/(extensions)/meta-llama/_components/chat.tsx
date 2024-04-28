import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { VscLoading } from 'react-icons/vsc'
import { cn } from '@/lib/utils'

export function Chat({ children }: { children?: React.ReactNode }) {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full overflow-hidden'>
        <div className='h-full flex flex-col flex-no-wrap overflow-y-auto'>{children}</div>
      </div>
    </div>
  )
}

export function ChatHeader({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 min-w-0 min-h-0'>
      <div className='flex items-center bg-secondary backdrop-blur shadow justify-center py-3 pl-3 pr-2'>
        <div className={cn('text-sm text-foreground bg-background py-2 px-4 rounded-full border border-border', className)}>{children}</div>
      </div>
    </div>
  )
}

export function ChatMessages({ children }: { children?: React.ReactNode }) {
  return (
    <div className='flex-1 min-w-0'>
      <div className='scrolling-touch scrolling-gpu h-full w-full relative overflow-auto overscroll-y-auto'>
        <div className='h-full divide-y divide-border pb-12'>{children}</div>
      </div>
    </div>
  )
}

export function ChatInput({
  handleInputChange,
  handleSubmit,
  input,
  isLoading
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  input: string
  isLoading?: boolean
}) {
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      formRef.current?.requestSubmit()
    }
  }

  return (
    <div className='sticky bottom-0 flex-shrink-0 min-w-0 min-h-0'>
      <div className='p-3 pr-2.5 text-foreground bg-secondary backdrop-blur border-t border-border'>
        <form ref={formRef} className='md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl' onSubmit={handleSubmit}>
          <div className='relative flex h-full max-w-full flex-1 flex-col'>
            <div className='absolute bottom-full left-0 right-0'>{/*  */}</div>
            <div className='flex w-full items-center'>
              <div className='relative w-full rounded-xl overflow-hidden flex items-center border border-border'>
                <Textarea
                  dir='auto'
                  rows={1}
                  className='w-full m-0 p-5 resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent'
                  placeholder='Ask me anything...'
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeydown}
                />
                <Button className='absolute right-2 rounded-xl' variant='outline' type='submit' disabled={!input || isLoading}>
                  {isLoading ? <VscLoading className='animate-spin' /> : <span className='select-none font-sans tracking-widest'>⌘↵</span>}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
