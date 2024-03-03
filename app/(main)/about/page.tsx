import { Caladea } from 'next/font/google'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const calsans = Caladea({ subsets: ['latin'], weight: ['400', '700'] })

export default function AboutPage() {
	return (
		<section className='dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]'>
			<div className='h-full max-w-4xl mx-auto antialiased py-4 relative '>
				{dummyContent.map((item, index) => (
					<div key={`content-${index}`} className='mb-10'>
						<h2 className='bg-transparent text-white rounded-full text-sm w-fit px-4 py-1 mb-4'>
							{item.badge}
						</h2>

						<p className={cn(calsans.className, 'text-xl mb-4')}>
							{item.title}
						</p>

						<div className='text-sm  prose prose-sm dark:prose-invert'>
							{item?.image && (
								<Image
									src={item.image}
									alt='blog thumbnail'
									height='1000'
									width='1000'
									className='rounded-lg mb-10 object-cover'
								/>
							)}
							{item.description}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

const dummyContent = [
	{
		title: 'Lorem Ipsum Dolor Sit Amet',
		description: (
			<>
				<p>
					Sit duis est minim proident non nisi velit non consectetur. Esse
					adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
					Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
					incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
					fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
					nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
					occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
					officia sint labore. Tempor consectetur excepteur ut fugiat veniam
					commodo et labore dolore commodo pariatur.
				</p>
				<p>
					Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
					veniam in commodo id reprehenderit adipisicing. Proident duis
					exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
				</p>
				<p>
					Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
					reprehenderit deserunt amet laborum consequat adipisicing officia qui
					irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
					Amet culpa officia aliquip deserunt veniam deserunt officia
					adipisicing aliquip proident officia sunt.
				</p>
			</>
		),
		badge: 'React',
		image: '/dummy/felix-lam-J7fxkhtOqt0-unsplash.jpg',
	},
	{
		title: 'Lorem Ipsum Dolor Sit Amet',
		description: (
			<>
				<p>
					Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
					deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
					non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
					sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
					velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
					commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
				</p>
				<p>
					In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
					veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
					reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
					cillum ut mollit.
				</p>
			</>
		),
		badge: 'Changelog',
		image: '/dummy/paul-skorupskas-7KLa-xLbSXA-unsplash.jpg',
	},
	{
		title: 'Lorem Ipsum Dolor Sit Amet',
		description: (
			<>
				<p>
					Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
					deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
					non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
					sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
					velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
					commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
				</p>
			</>
		),
		badge: 'Launch Week',
		image: '/dummy/simon-berger-twukN12EN7c-unsplash.jpg',
	},
]
