import { Metadata } from 'next'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'List of all my projects and their links'
}

export default function ProjectsPage() {
  const items = [
    {
      title: 'Ninjsbook',
      description: 'The JS playground with Markdown editor. I using ReactJS and npm package.',
      header: [
        <Image
          key={0}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Vite-React-TS.png'}
          alt='The JS playground with Markdown editor'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Vite-React-TS.png'
        />
      ],
      tags: ['Vite', 'React', 'TypeScript', 'npm package'],
      links: [
        {
          title: 'Live demo',
          href: 'https://chaninlaw.github.io/js-playground/'
        },
        { title: 'npm', href: 'https://www.npmjs.com/package/ninjsbook' }
      ]
    },
    {
      title: 'Pricing component with toggle',
      description:
        'This is a solution to the Pricing component with toggle challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
      header: [
        <Image
          key={2}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Frontend-Mentor-Pricing-Component-with-toggle.png'}
          alt='Pricing Component with toggle'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Frontend-Mentor-Pricing-Component-with-toggle.png'
        />
      ],
      tags: ['CSS', 'HTML'],
      links: [
        {
          title: 'Live demo',
          href: 'https://chaninlaw.github.io/FM_pricing-component-with-toggle/'
        }
      ]
    },
    {
      title: "Nin's portfolio",
      description: 'My First portfolio with ReactJS.',
      header: [
        <Image
          key={3}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Nin-s-Portfolio.png'}
          alt='my first portfolio with react'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Nin-s-Portfolio.png'
        />
      ],
      tags: ['React', 'Tailwindcss', 'HTML'],
      links: [
        {
          title: 'Live demo',
          href: 'https://chaninlaw.github.io/portfolio/'
        }
      ]
    },
    {
      title: 'Space tourism website',
      description:
        'This is a solution to the Space tourism website challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
      header: [
        <Image
          key={4}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Frontend-Mentor-Space-tourism-website.png'}
          alt='Space tourism website'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Frontend-Mentor-Space-tourism-website.png'
        />,
        <Image
          key={5}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Frontend-Mentor-Space-tourism-website (1).png'}
          alt='Space tourism website page 2'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Frontend-Mentor-Space-tourism-website (1).png'
        />,
        <Image
          key={6}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Frontend-Mentor-Space-tourism-website (2).png'}
          alt='Space tourism website page 3'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Frontend-Mentor-Space-tourism-website (2).png'
        />,
        <Image
          key={7}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Frontend-Mentor-Space-tourism-website (3).png'}
          alt='Space tourism website page 4'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Frontend-Mentor-Space-tourism-website (3).png'
        />
      ],
      tags: ['React', 'Tailwindcss', 'HTML'],
      links: [
        {
          title: 'Live demo',
          href: 'https://chaninlaw.github.io/FM_space-tourism-website/'
        }
      ]
    },
    {
      title: 'Shortly URL shortening',
      description:
        'This is a solution to the Shortly URL shortening API Challenge challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
      header: [
        <Image
          key={8}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Shortly-URL-shortening.png'}
          alt='Shortly URL shortening'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Shortly-URL-shortening.png'
        />
      ],
      tags: ['React', 'Typescript', 'Tailwindcss', 'HTML'],
      links: [
        {
          title: 'Live demo',
          href: 'https://url-shortening-page-pink.vercel.app/'
        }
      ]
    },
    {
      title: 'The Simon game',
      description: 'Create a simon game with pure javascript and css.',
      header: [
        <Image
          key={9}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Simon.png'}
          alt='Simon game'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Simon.png'
        />
      ],
      tags: ['Javascript', 'CSS', 'HTML'],
      links: [
        {
          title: 'Live demo',
          href: 'https://chaninlaw.github.io/Simon-game/'
        }
      ]
    },
    {
      title: 'Todos app | Ultimate Task Management Solution.',
      description: 'Todos app with NextJS, Next auth, Tailwindcss, and Next UI.',
      header: [
        <Image
          key={10}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Todos-App-Ultimate-Task-Management-Solution.png'}
          alt='Todos app'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Todos-App-Ultimate-Task-Management-Solution.png'
        />,
        <Image
          key={11}
          priority
          className='w-auto h-auto aspect-[300/172.5] object-contain'
          src={'/projects/Dashboard-Todos-App.png'}
          alt='Dashboard of Todos app'
          width={300}
          height={172.5}
          placeholder='blur'
          blurDataURL='/projects/Dashboard-Todos-App.png'
        />
      ],
      tags: ['NextJS', 'Next auth', 'Tailwindcss', 'Next UI'],
      links: [
        {
          title: 'Live demo',
          href: 'https://todo-next-app-theta.vercel.app/'
        }
      ]
    }
  ]

  return (
    <div className='container dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]'>
      <BentoGrid className='h-full py-4 max-w-6xl mx-auto'>
        {items.map((item, i) => (
          <BentoGridItem key={`bento-grid=${i}`} {...item} className={i === 3 || i === 6 ? 'md:col-span-2' : ''} />
        ))}
      </BentoGrid>
    </div>
  )
}
