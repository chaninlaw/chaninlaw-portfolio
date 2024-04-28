import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import { MotionDiv } from '@/components/ui/motion-div'

const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['500'] })

const BackgroundGradient = dynamic(() => import('@/components/ui/background-gradient').then((mod) => mod.BackgroundGradient), { ssr: false })
const Boxes = dynamic(() => import('@/components/ui/background-boxes').then((mod) => mod.Boxes), { ssr: false })

export default function Home() {
  return (
    <section className='h-full'>
      <div className='h-full relative w-full overflow-hidden dark:bg-stone-900 flex flex-col rounded-lg'>
        <div className='absolute inset-0 w-full h-full bg-secondary dark:bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
        <Boxes />
        <MotionDiv
          className='container py-14 space-y-10 flex flex-col items-center h-full'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        >
          <div className='flex relative z-20'>
            <BackgroundGradient containerClassName='rounded-full'>
              <Image
                className='object-none w-80 h-80 rounded-full object-bottom select-none'
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
          <div className='flex flex-col items-center relative z-20'>
            <h1 className='md:text-6xl text-xl text-foreground dark:text-white relative z-20 select-none' style={dancingScript.style}>
              Hi, I am Chanin
            </h1>
            <p className='mt-2 text-neutral-400 dark:text-neutral-300 uppercase'>Frontend Developer</p>
            <div className='mt-4 max-w-lg text-center'>
              <p>
                &ldquo;Passionately crafting user interfaces, continuously evolving skills for myself and others, on an endless journey toward
                frontend development mastery.&rdquo;
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
