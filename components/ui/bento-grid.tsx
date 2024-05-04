import { cn } from '@/lib/utils'
import { InfiniteMovingCards } from './infinite-moving-cards'
import { Badge } from '@/components/ui/badge'
import { Link } from '@/components/link'
import React from 'react'

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn('grid md:auto-rows-auto grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ', className)}>{children}</div>
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
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-secondary border border-foreground/50 justify-between flex flex-col space-y-4',
        className
      )}
    >
      {header && header?.length > 1 ? (
        <InfiniteMovingCards items={header} direction='right' speed='slow' />
      ) : (
        <div className='flex justify-center items-center'>{header}</div>
      )}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        {tags?.map((tag) => (
          <Badge className='mx-1 select-none bg-card' key={tag} variant={'outline'}>
            {tag}
          </Badge>
        ))}
        <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>{title}</div>
        <div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>{description}</div>
        <ul className='flex flex-wrap mt-2 space-x-2'>
          {links?.map((link) => (
            <li key={link.href} className='text-sm'>
              <Link href={link.href} target='_blank'>
                <button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block'>
                  <span className='absolute inset-0 overflow-hidden rounded-full'>
                    <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                  </span>
                  <div className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 '>
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
