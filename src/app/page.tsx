import { Boxes } from '@/components/ui/background-boxes'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MotionDiv } from '@/components/ui/motion-div'
import { Lexend } from 'next/font/google'
import Image from 'next/image'

const lexend = Lexend({ weight: ['500'], subsets: ['latin'], display: 'swap' })

export default function Home() {
  return (
    <section className='h-full'>
      <div className='relative flex h-full w-full flex-col overflow-hidden rounded-lg dark:bg-stone-900'>
        <div className='pointer-events-none absolute inset-0 z-20 h-full w-full bg-secondary [mask-image:radial-gradient(transparent,white)] dark:bg-background' />
        <Boxes />
        <MotionDiv
          className='container flex h-full flex-col items-center space-y-10 py-14'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        >
          <div className='relative z-20 flex'>
            <BackgroundGradient containerClassName='rounded-full'>
              <Image
                className='h-80 w-80 select-none rounded-full object-none object-[90%_60%]'
                src={'/profile.jpg'}
                width={300}
                height={300}
                alt='profile image'
                placeholder='blur'
                blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0MmD6AwACogFyY0zWRwAAAABJRU5ErkJggg=='
                priority
              />
            </BackgroundGradient>
          </div>
          <div className='relative z-20 flex flex-col items-center'>
            <h1 className='relative z-20 select-none text-xl text-foreground dark:text-white md:text-6xl' style={lexend.style}>
              Hi, I am <span className='tracking-normal'>Chanin</span>
            </h1>
            <p className='mt-2 uppercase text-neutral-400 dark:text-neutral-300'>Frontend Developer</p>
            <div className='mt-4 max-w-lg text-center' />
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
