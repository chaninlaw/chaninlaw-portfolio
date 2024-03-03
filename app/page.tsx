import { Boxes } from '@/components/ui/background-boxes'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { MotionDiv } from '@/components/ui/motion-div'
import Image from 'next/image'

export default function Home() {
	return (
		<section className='h-full'>
			<div className='h-full relative w-full overflow-hidden bg-stone-900 flex flex-col rounded-lg'>
				<div className='absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
				<Boxes />
				<MotionDiv
					className='container py-14 space-y-10 flex flex-col items-center h-full'
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					<div className='flex relative z-20'>
						<BackgroundGradient containerClassName='rounded-full'>
							<Image
								className='object-none w-80 h-80 rounded-full object-bottom select-none'
								src={'/IMG_0402.jpg'}
								width={300}
								height={300}
								alt='profile image'
								priority
							/>
						</BackgroundGradient>
					</div>
					<div className='flex flex-col items-center relative z-20'>
						<h1 className='md:text-6xl text-xl text-white relative z-20 font-serif select-none'>
							Hi, I&apos;m Chanin
						</h1>
						<p className='mt-2 text-neutral-300 uppercase'>
							Frontend Developer
						</p>
						<div className='mt-4 max-w-lg text-center'>
							<p>
								&ldquo;Passionately crafting user interfaces, continuously
								evolving skills for myself and others, on an endless journey
								toward frontend development mastery.&rdquo;
							</p>
						</div>
					</div>
				</MotionDiv>
			</div>
		</section>
	)
}
