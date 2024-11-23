'use client'

// import { Metadata } from 'next'
import { Link } from '@/components/link'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { useChat } from 'ai/react'

import { Chat, ChatHeader, ChatInput, ChatMessages } from './_components/chat'

// export const metadata: Metadata = {
//   title: 'Meta Llama Chat',
//   description: 'Meta Llama Chat connect with Hugging Face inference API.'
// }

export default function MetaLlamaChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({ api: 'api/meta-llama' })

  return (
    <Chat>
      <ChatHeader>
        <div className='group flex items-center space-x-2'>
          <Avatar className='h-8 w-8'>
            <AvatarImage className='object-contain' src='https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png' />
            <AvatarFallback>HF</AvatarFallback>
          </Avatar>
          <Link className='flex items-center space-x-1' href='https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct' target='_blank'>
            <span className='upp select-none group-hover:underline'>Hugging Face</span>
            <ArrowTopRightIcon className='transition-all group-hover:-translate-y-1' />
          </Link>
        </div>
      </ChatHeader>
      <ChatMessages messages={messages} isLoading={isLoading} />

      <ChatInput input={input} onInputChange={handleInputChange} onSubmit={handleSubmit} isLoading={isLoading} />
    </Chat>
  )
}
