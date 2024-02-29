import { useMemo } from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { ImageFallback } from '../ui/ImageFallback'

export function Projects() {
	const items = useMemo(
		() => [
			{
				title: 'Ninjsbook',
				description:
					'The JS playground with Markdown editor. I using ReactJS and npm package.',
				header: (
					<ImageFallback
						className='object-contain'
						src={'/projects/Vite-React-TS.png'}
						alt='The JS playground with Markdown editor'
						width={300}
						height={172.5}
					/>
				),
				tags: ['Vite', 'React', 'TypeScript', 'npm package'],
				links: [
					{
						title: 'Live demo',
						href: 'https://chaninlaw.github.io/js-playground/',
					},
					{ title: 'npm', href: 'https://www.npmjs.com/package/ninjsbook' },
				],
			},
			{
				title: 'Pricing component with toggle',
				description:
					'This is a solution to the Pricing component with toggle challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
				header: (
					<ImageFallback
						className='object-contain'
						src={'/projects/Frontend-Mentor-Pricing-Component-with-toggle.png'}
						alt='Pricing Component with toggle'
						width={300}
						height={172.5}
					/>
				),
				tags: ['CSS', 'HTML'],
				links: [
					{
						title: 'Live demo',
						href: 'https://chaninlaw.github.io/FM_pricing-component-with-toggle/',
					},
				],
			},
			{
				title: "Nin's portfolio",
				description: 'My First portfolio with ReactJS.',
				header: (
					<ImageFallback
						className='object-contain'
						src={'/projects/Nin-s-Portfolio.png'}
						alt='my first portfolio with react'
						width={300}
						height={172.5}
					/>
				),
				tags: ['React', 'Tailwindcss', 'HTML'],
				links: [
					{
						title: 'Live demo',
						href: 'https://chaninlaw.github.io/portfolio/',
					},
				],
			},
			{
				title: 'Space tourism website',
				description:
					'This is a solution to the Space tourism website challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
				header: (
					<div className='flex'>
						<ImageFallback
							className='object-contain'
							src={'/projects/Frontend-Mentor-Space-tourism-website.png'}
							alt='Space tourism website'
							width={300}
							height={172.5}
						/>
						<ImageFallback
							className='object-contain'
							src={'/projects/Frontend-Mentor-Space-tourism-website (1).png'}
							alt='Space tourism website page 2'
							width={300}
							height={172.5}
						/>
						<ImageFallback
							className='object-contain'
							src={'/projects/Frontend-Mentor-Space-tourism-website (2).png'}
							alt='Space tourism website page 3'
							width={300}
							height={172.5}
						/>
						<ImageFallback
							className='object-contain'
							src={'/projects/Frontend-Mentor-Space-tourism-website (3).png'}
							alt='Space tourism website page 4'
							width={300}
							height={200}
						/>
					</div>
				),
				tags: ['React', 'Tailwindcss', 'HTML'],
				links: [
					{
						title: 'Live demo',
						href: 'https://chaninlaw.github.io/FM_space-tourism-website/',
					},
				],
			},
			{
				title: 'Shortly URL shortening',
				description:
					'This is a solution to the Shortly URL shortening API Challenge challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
				header: (
					<ImageFallback
						className='object-contain'
						src={'/projects/Shortly-URL-shortening.png'}
						alt='Shortly URL shortening'
						width={300}
						height={200}
					/>
				),
				tags: ['React', 'Typescript', 'Tailwindcss', 'HTML'],
				links: [
					{
						title: 'Live demo',
						href: 'https://url-shortening-page-pink.vercel.app/',
					},
				],
			},
			{
				title: 'The Simon game',
				description: 'Create a simon game with pure javascript and css.',
				header: (
					<ImageFallback
						className='object-contain'
						src={'/projects/Simon.png'}
						alt='Simon game'
						width={300}
						height={200}
					/>
				),
				tags: ['Javascript', 'CSS', 'HTML'],
				links: [
					{
						title: 'Live demo',
						href: 'https://chaninlaw.github.io/Simon-game/',
					},
				],
			},
			{
				title: 'Todos app | Ultimate Task Management Solution.',
				description:
					'Todos app with NextJS, Next auth, Tailwindcss, and Next UI.',
				header: (
					<div className='flex'>
						<ImageFallback
							className='object-contain'
							src={'/projects/Todos-App-Ultimate-Task-Management-Solution.png'}
							alt='Todos app'
							width={300}
							height={200}
						/>
						<ImageFallback
							className='object-contain'
							src={'/projects/Dashboard-Todos-App.png'}
							alt='Dashboard of Todos app'
							width={300}
							height={172.5}
						/>
					</div>
				),
				tags: ['NextJS', 'Next auth', 'Tailwindcss', 'Next UI'],
				links: [
					{
						title: 'Live demo',
						href: 'https://todo-next-app-theta.vercel.app/',
					},
				],
			},
		],
		[]
	)
	return (
		<div className='h-full w-full py-4 dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]'>
			<BentoGrid className='max-w-4xl mx-auto'>
				{items.map((item, i) => (
					<BentoGridItem
						key={`bento-grid=${i}`}
						{...item}
						className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
					/>
				))}
			</BentoGrid>
		</div>
	)
}
