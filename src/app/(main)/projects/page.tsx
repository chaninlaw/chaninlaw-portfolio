import dashboardTodosApp from '@/../public/projects/Dashboard-Todos-App.png'
import pricingComponent from '@/../public/projects/Frontend-Mentor-Pricing-Component-with-toggle.png'
import spaceTourismWebsite from '@/../public/projects/Frontend-Mentor-Space-tourism-website.png'
import spaceTourismWebsite1 from '@/../public/projects/Frontend-Mentor-Space-tourism-website (1).png'
import spaceTourismWebsite2 from '@/../public/projects/Frontend-Mentor-Space-tourism-website (2).png'
import spaceTourismWebsite3 from '@/../public/projects/Frontend-Mentor-Space-tourism-website (3).png'
import ninsPortfolio from '@/../public/projects/Nin-s-Portfolio.png'
import shortlyURLShortening from '@/../public/projects/Shortly-URL-shortening.png'
import simonGame from '@/../public/projects/Simon.png'
import todosApp from '@/../public/projects/Todos-App-Ultimate-Task-Management-Solution.png'
import markdownEditor from '@/../public/projects/Vite-React-TS.png'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'List of all my projects and their links'
}

export const dynamic = 'force-static'

export default function ProjectsPage() {
  return (
    <div className='bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]'>
      <BentoGrid className='container mx-auto h-full max-w-6xl py-4'>
        {items.map((item, i) => (
          <BentoGridItem key={`bento-grid=${i}`} {...item} className={i === 3 || i === 6 ? 'md:col-span-2' : ''} />
        ))}
      </BentoGrid>
    </div>
  )
}

const items = [
  {
    title: 'Ninjsbook',
    description: 'The JS playground with Markdown editor. I using ReactJS and npm package.',
    header: [
      <Image
        key={0}
        priority
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={markdownEditor}
        alt='The JS playground with Markdown editor'
        width={300}
        height={172.5}
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
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={pricingComponent}
        alt='Pricing Component with toggle'
        width={300}
        height={172.5}
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
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={ninsPortfolio}
        alt='my first portfolio with react'
        width={300}
        height={172.5}
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
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={spaceTourismWebsite}
        alt='Space tourism website'
        width={300}
        height={172.5}
      />,
      <Image
        key={5}
        priority
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={spaceTourismWebsite1}
        alt='Space tourism website page 2'
        width={300}
        height={172.5}
      />,
      <Image
        key={6}
        priority
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={spaceTourismWebsite2}
        alt='Space tourism website page 3'
        width={300}
        height={172.5}
      />,
      <Image
        key={7}
        priority
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={spaceTourismWebsite3}
        alt='Space tourism website page 4'
        width={300}
        height={172.5}
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
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={shortlyURLShortening}
        alt='Shortly URL shortening'
        width={300}
        height={172.5}
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
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={simonGame}
        alt='Simon game'
        width={300}
        height={172.5}
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
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={todosApp}
        alt='Todos app'
        width={300}
        height={172.5}
      />,
      <Image
        key={11}
        priority
        placeholder='blur'
        className='aspect-[300/172.5] h-auto w-auto object-contain'
        src={dashboardTodosApp}
        alt='Dashboard of Todos app'
        width={300}
        height={172.5}
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
