import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'

import DOMPurify from 'dompurify'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

import { cn } from '@/lib/utils'
import { FaMeta } from 'react-icons/fa6'
import { VscLoading } from 'react-icons/vsc'
import { Message } from 'ai/react'

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
      <div className='flex items-center bg-background backdrop-blur shadow justify-center py-3 pl-3 pr-2'>
        <div className={cn('text-sm text-foreground bg-background py-2 px-4 rounded-full border border-border', className)}>{children}</div>
      </div>
    </div>
  )
}

export function ChatMessages({ messages, isLoading }: { messages: Message[]; isLoading: boolean }) {
  const isEmpty = React.useMemo(() => messages.length === 0, [messages])
  const scrollerRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (scrollerRef.current) {
      const timer = setTimeout(() => scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: 'smooth' }), 100)
      return () => clearTimeout(timer)
    }
  })

  return (
    <div ref={scrollerRef} className='flex-1 min-w-0 overflow-auto touch-auto will-change-scroll overscroll-y-auto scroll-smooth'>
      <div className='h-full w-full relative'>
        <div className='h-full divide-y divide-border pb-12'>
          {isEmpty && (
            <div className='h-full flex flex-col justify-center items-center'>
              <span className='h-12 w-12 mb-4 border-2 border-muted-foreground rounded-full flex justify-center items-center'>
                <FaMeta className='h-8 w-8' />
              </span>
              How can I help you today?
            </div>
          )}

          {!isEmpty &&
            messages.map((m) => (
              <div key={m.id} className={cn('px-3 @md:py-4 py-2.5 group transition-opacity', { 'bg-zinc-100 dark:bg-zinc-900': m.role === 'user' })}>
                <div className='flex items-start max-w-2xl mx-auto space-x-3'>
                  <Avatar className='h-8 w-8'>
                    <AvatarImage
                      className='object-contain bg-white'
                      src={
                        m.role === 'user'
                          ? 'https://liveblocks.io/avatars/avatar-29.png'
                          : 'https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png'
                      }
                    />
                    <AvatarFallback>{m.role === 'user' ? 'You' : 'AI'}</AvatarFallback>
                  </Avatar>
                  <div className='w-full min-w-0 text-sm sm:text-base'>
                    <div
                      className='prose prose-stone dark:prose-invert prose-sm sm:prose-base prose-pre:rounded-md prose-p:whitespace-pre-wrap prose-p:break-words w-full flex-1 leading-6 prose-p:leading-7 prose-pre:bg-[#292524] max-w-full'
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          new Marked(
                            markedHighlight({
                              langPrefix: 'hljs language-',
                              highlight(code, lang, info) {
                                const language = hljs.getLanguage(lang) ? lang : 'plaintext'
                                return hljs.highlight(code, { language }).value
                              }
                            })
                          )
                            .parse(m.content)
                            .toString()
                        )
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          {isLoading && (
            <div className={'px-3 @md:py-4 py-2.5 group transition-opacity'}>
              <div className='flex items-center max-w-2xl mx-auto space-x-3'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage className='object-contain bg-white' src={'https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png'} />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className='w-full min-w-0 text-sm sm:text-base'>
                  <VscLoading className='animate-spin' />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function ChatInput({
  onInputChange,
  onSubmit,
  input,
  isLoading
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
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
      <div className='p-3 pr-2.5 text-foreground bg-background backdrop-blur border-t border-border'>
        <form ref={formRef} className='md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl' onSubmit={onSubmit}>
          <div className='relative flex h-full max-w-full flex-1 flex-col'>
            <div className='absolute bottom-full left-0 right-0'>{/*  */}</div>
            <div className='flex w-full items-center'>
              <div className='relative w-full rounded-xl overflow-hidden flex items-center border border-border'>
                <Textarea
                  dir='auto'
                  rows={1}
                  className='w-full m-0 p-5 resize-none border-0 bg-secondary focus:ring-0 focus-visible:ring-0'
                  placeholder='Ask me anything...'
                  value={input}
                  onChange={onInputChange}
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
