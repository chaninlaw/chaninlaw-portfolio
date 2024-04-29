'use client'

// import { Metadata } from 'next'
import Link from 'next/link'
import { useChat } from 'ai/react'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import { Chat, ChatHeader, ChatInput, ChatMessages } from './_components/chat'

import { ArrowTopRightIcon } from '@radix-ui/react-icons'

// export const metadata: Metadata = {
//   title: 'Meta Llama Chat',
//   description: 'Meta Llama Chat connect with Hugging Face inference API.'
// }

export default function MetaLlamaChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({ api: 'api/meta-llama' })

  return (
    <Chat>
      <ChatHeader>
        <div className='flex items-center space-x-2 group'>
          <Avatar className='h-8 w-8'>
            <AvatarImage className='object-contain' src='https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png' />
            <AvatarFallback>HF</AvatarFallback>
          </Avatar>
          <Link className='flex items-center space-x-1' href='https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct' target='_blank'>
            <span className='select-none upp group-hover:underline'>Hugging Face</span>
            <ArrowTopRightIcon className='group-hover:-translate-y-1 transition-all' />
          </Link>
        </div>
      </ChatHeader>
      <ChatMessages messages={messages} isLoading={isLoading} />

      <ChatInput input={input} onInputChange={handleInputChange} onSubmit={handleSubmit} isLoading={isLoading} />
    </Chat>
  )
}
