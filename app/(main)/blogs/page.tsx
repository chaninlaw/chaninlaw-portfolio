import { Metadata } from 'next'
import { Link } from '@/components/link'
import { Caladea } from 'next/font/google'
import { Separator } from '@/components/ui/separator'

import { posts } from '#site/content'
import { cn, dateFormatter } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { CalendarIcon } from '@radix-ui/react-icons'
import { paths } from '@/lib/paths'

const calsans = Caladea({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'List of all my blogs and their links'
}

export default function AboutPage() {
  return (
    <section className='h-full container dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] mb-2'>
      <div className='h-full max-w-4xl mx-auto antialiased py-4 relative'>
        <div className=''>
          <h2 className='text-3xl mb-1 md:mb-2 sm:text-5xl md:text-6xl lg:text-7xl font-black text-center tracking-wide'>Latest Posts</h2>
          <Separator />
        </div>
        {posts.map((post) => (
          <div key={post.slug}>
            <article className='prose prose-sm dark:prose-invert max-w-full my-6'>
              <Link href={paths.blog(post.slugAsParams)}>
                <h2 className={cn('text-xl', calsans.className)}>{post.title}</h2>
              </Link>
              {post.description && <p className='text-sm m-0'>{post.description}</p>}
              <div className='flex justify-between items-center'>
                <dl className='m-0'>
                  <dt className='sr-only'>Published On</dt>
                  <dd className='p-0 text-xs sm:text-sm font-medium flex items-center gap-1'>
                    <CalendarIcon className='h-4 w-4' />
                    <time dateTime={post.date}>{dateFormatter(post.date)}</time>
                  </dd>
                </dl>
                <Link href={paths.blog(post.slugAsParams)} className={cn('no-underline', buttonVariants({ variant: 'link' }), 'py-0')}>
                  Read more →
                </Link>
              </div>
            </article>
            <Separator />
          </div>
        ))}
      </div>
    </section>
  )
}
