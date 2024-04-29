import Link from 'next/link'
import { slug } from 'github-slugger'
import { Badge } from './ui/badge'

interface TagProps {
  tag: string
  current?: boolean
  count?: number
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    // <Link href={`/tags/${slug(tag)}`}>
    <Badge className='no-underline rounded-md select-none' variant={current ? 'default' : 'secondary'}>
      {tag} {count ? `(${count})` : null}
    </Badge>
    // </Link>
  )
}
