import { Link } from '@/components/link'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import React from 'react'

import { InfiniteMovingCards } from './infinite-moving-cards'

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-auto md:grid-cols-3', className)}>{children}</div>
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  tags,
  links
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode[]
  tags?: string[]
  links?: { title: string; href: string }[]
}) => {
  return (
    <div
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-foreground/50 bg-secondary p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}
    >
      {header && header?.length > 1 ? (
        <InfiniteMovingCards items={header} direction='right' speed='slow' />
      ) : (
        <div className='flex items-center justify-center'>{header}</div>
      )}
      <div className='transition duration-200 group-hover/bento:translate-x-2'>
        {tags?.map((tag) => (
          <Badge className='mx-1 select-none bg-card' key={tag} variant={'outline'}>
            {tag}
          </Badge>
        ))}
        <div className='mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200'>{title}</div>
        <div className='font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>{description}</div>
        <ul className='mt-2 flex flex-wrap space-x-2'>
          {links?.map((link) => (
            <li key={link.href} className='text-sm'>
              <Link href={link.href} target='_blank'>
                <button className='group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900'>
                  <span className='absolute inset-0 overflow-hidden rounded-full'>
                    <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                  </span>
                  <div className='relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10'>
                    <span>{link.title}</span>
                    <svg fill='none' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M10.75 8.75L14.25 12L10.75 15.25'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                      />
                    </svg>
                  </div>
                  <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
