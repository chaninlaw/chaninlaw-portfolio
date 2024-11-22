import '@/styles/mdx.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

import { posts } from '#site/content'
import { MDX } from '@/components/mdx-components'
import { notFound } from 'next/navigation'
import { Tag } from '@/components/tag'
import { paths } from '@/lib/paths'

interface PostPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams(params: { slug: string[] }) {
  const slugs = params.slug?.join('/')
  const post = posts.find((post) => post.slugAsParams === slugs)

  return post
}

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  const params = await props.params
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', post.title)

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `${paths.api.og}?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${paths.api.og}?${ogSearchParams.toString()}`]
    }
  }
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage(props: PostPageProps) {
  const params = await props.params
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
      <h1 className='mb-2'>{post.title}</h1>
      <div className='flex gap-2 mb-2'>{post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}</div>
      {post.description ? <p className='text-xl mt-0 text-muted-foreground'>{post.description}</p> : null}
      <hr className='my-4' />
      <MDX content={post.body} />
    </article>
  )
}
