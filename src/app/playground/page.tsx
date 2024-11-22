import { Metadata } from 'next'
import { Monaco } from '@/components/monaco'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Hidden place for my code snippets and experiments.'
}

export default function PlaygroundPage() {
  return <Monaco />
}
