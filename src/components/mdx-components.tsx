import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'

import { Monaco } from './monaco'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  Monaco
}

interface MdxProps {
  content: string
}

export function MDX({ content }: MdxProps) {
  const Component = useMDXComponent(content)
  return <Component components={components} />
}
