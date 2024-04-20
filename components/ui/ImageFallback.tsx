'use client'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface ImageFallbackProps extends ImageProps {}
export function ImageFallback({ src, ...rest }: ImageFallbackProps) {
  const [error, setError] = useState(false)

  if (error) return <Skeleton>{rest.alt}</Skeleton>

  return (
    <Image
      {...rest}
      src={src}
      alt={rest.alt}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setError(true)
        }
      }}
      onError={() => setError(true)}
    />
  )
}

const Skeleton = ({ children }: { children: React.ReactNode }) => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
    <span className='sr-only'>{children}</span>
  </div>
)
