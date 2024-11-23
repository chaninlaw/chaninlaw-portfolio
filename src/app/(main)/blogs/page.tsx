import { Link } from '@/components/link'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { paths } from '@/lib/paths'
import { cn, dateFormatter } from '@/lib/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { posts } from '#site/content'
import { Metadata } from 'next'
import { Caladea } from 'next/font/google'

const calsans = Caladea({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'List of all my blogs and their links'
}

export default function AboutPage() {
  return (
    <section className='mb-2 bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]'>
      <div className='container relative mx-auto h-full max-w-4xl py-4 antialiased'>
        <div className=''>
          <h2 className='mb-1 text-center text-3xl font-black tracking-wide sm:text-5xl md:mb-2 md:text-6xl lg:text-7xl'>Latest Posts</h2>
          <Separator />
        </div>
        {posts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post) => (
            <div key={post.slug}>
              <article className='prose prose-sm my-6 max-w-full dark:prose-invert'>
                <Link href={paths.blog(post.slugAsParams)}>
                  <h2 className={cn('text-xl', calsans.className)}>{post.title}</h2>
                </Link>
                {post.description && <p className='m-0 text-sm'>{post.description}</p>}
                <div className='flex items-center justify-between'>
                  <dl className='m-0'>
                    <dt className='sr-only'>Published On</dt>
                    <dd className='flex items-center gap-1 p-0 text-xs font-medium sm:text-sm'>
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
