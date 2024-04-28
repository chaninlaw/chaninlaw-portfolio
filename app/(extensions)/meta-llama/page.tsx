'use client'

import {} from 'react-dom'
import Link from 'next/link'
import { useChat } from 'ai/react'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import { Chat, ChatHeader, ChatInput, ChatMessages } from './_components/Chat'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

import { cn } from '@/lib/utils'
import { FaMeta } from 'react-icons/fa6'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

export default function MetaLlamaChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({ api: 'api/meta-llama' })
  const isEmpty = messages.length === 0

  return (
    <Chat>
      <ChatHeader>
        <div className='flex items-center space-x-2 group'>
          <Avatar className='h-8 w-8'>
            <AvatarImage
              className='object-contain bg-white'
              src='https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png'
            />
            <AvatarFallback>HF</AvatarFallback>
          </Avatar>
          <Link className='flex items-center space-x-1' href='https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct'>
            <span className='select-none upp group-hover:underline'>Hugging Face</span>
            <ArrowTopRightIcon className='group-hover:-translate-y-1 transition-all' />
          </Link>
        </div>
      </ChatHeader>
      <ChatMessages>
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
                  <article
                    className='prose prose-stone dark:prose-invert prose-sm sm:prose-base prose-pre:rounded-md prose-p:whitespace-pre-wrap prose-p:break-words w-full flex-1 leading-6 prose-p:leading-7 prose-pre:bg-[#292524] max-w-full'
                    dangerouslySetInnerHTML={{
                      __html: new Marked(
                        markedHighlight({
                          langPrefix: 'hljs language-',
                          highlight(code, lang, info) {
                            const language = hljs.getLanguage(lang) ? lang : 'plaintext'
                            return hljs.highlight(code, { language }).value
                          }
                        })
                      ).parse(m.content)
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
      </ChatMessages>

      <ChatInput handleInputChange={handleInputChange} handleSubmit={handleSubmit} input={input} isLoading={isLoading} />
    </Chat>
  )
}
