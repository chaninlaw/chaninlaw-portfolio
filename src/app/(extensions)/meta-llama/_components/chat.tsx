import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Message } from 'ai/react'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import * as React from 'react'
import { FaMeta } from 'react-icons/fa6'
import { VscLoading } from 'react-icons/vsc'

export function Chat({ children }: { children?: React.ReactNode }) {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full overflow-hidden'>
        <div className='flex-no-wrap flex h-full flex-col overflow-y-auto'>{children}</div>
      </div>
    </div>
  )
}

export function ChatHeader({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className='sticky top-0 z-10 min-h-0 min-w-0 flex-shrink-0'>
      <div className='flex items-center justify-center bg-background py-3 pl-3 pr-2 shadow backdrop-blur'>
        <div className={cn('rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground', className)}>{children}</div>
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
    <div ref={scrollerRef} className='min-w-0 flex-1 touch-auto overflow-auto overscroll-y-auto scroll-smooth will-change-scroll'>
      <div className='relative h-full w-full'>
        <div className='h-full divide-y divide-border pb-12'>
          {isEmpty && (
            <div className='flex h-full flex-col items-center justify-center'>
              <span className='mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-muted-foreground'>
                <FaMeta className='h-8 w-8' />
              </span>
              How can I help you today?
            </div>
          )}

          {!isEmpty &&
            messages.map((m) => (
              <div key={m.id} className={cn('@md:py-4 group px-3 py-2.5 transition-opacity', { 'bg-zinc-100 dark:bg-zinc-900': m.role === 'user' })}>
                <div className='mx-auto flex max-w-2xl items-start space-x-3'>
                  <Avatar className='h-8 w-8'>
                    <AvatarImage
                      className='bg-white object-contain'
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
                      className='prose prose-sm prose-stone w-full max-w-full flex-1 leading-6 dark:prose-invert sm:prose-base prose-p:whitespace-pre-wrap prose-p:break-words prose-p:leading-7 prose-pre:rounded-md prose-pre:bg-[#292524]'
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
            <div className={'@md:py-4 group px-3 py-2.5 transition-opacity'}>
              <div className='mx-auto flex max-w-2xl items-center space-x-3'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage className='bg-white object-contain' src={'https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png'} />
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
    <div className='sticky bottom-0 min-h-0 min-w-0 flex-shrink-0'>
      <div className='border-t border-border bg-background p-3 pr-2.5 text-foreground backdrop-blur'>
        <form ref={formRef} className='md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl' onSubmit={onSubmit}>
          <div className='relative flex h-full max-w-full flex-1 flex-col'>
            <div className='absolute bottom-full left-0 right-0'>{/*  */}</div>
            <div className='flex w-full items-center'>
              <div className='relative flex w-full items-center overflow-hidden rounded-xl border border-border'>
                <Textarea
                  dir='auto'
                  rows={1}
                  className='m-0 w-full resize-none border-0 bg-secondary p-5 focus:ring-0 focus-visible:ring-0'
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
