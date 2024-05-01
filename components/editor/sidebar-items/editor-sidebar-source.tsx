import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ModeToggle } from '@/components/theme-toggle'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export function EditorSidebarSource() {
  const items = [
    {
      id: 'UC-50500d01-1110-490e-a02c-efe06c4b1456',
      name: 'The Complete 2023 Web Development Bootcamp',
      url: 'https://ude.my/UC-50500d01-1110-490e-a02c-efe06c4b1456',
      instructors: ['Dr. Angela Yu'],
      date: 'March 8, 2023',
      length: '65.5 total hours'
    },
    {
      id: 'UC-3c8935e9-2c42-4782-9028-98f1b6131db1',
      name: 'The HTML & CSS Bootcamp 2023 Edition',
      url: 'https://ude.my/UC-3c8935e9-2c42-4782-9028-98f1b6131db1',
      instructors: ['Colt Steele'],
      date: 'March 9, 2023',
      length: '37 total hours'
    },
    {
      id: 'UC-b49fba56-66ab-4036-b6f6-67e017f5fe26',
      name: 'The Git & Github Bootcamp',
      url: 'https://ude.my/UC-b49fba56-66ab-4036-b6f6-67e017f5fe26',
      instructors: ['Colt Steele'],
      date: 'April 21, 2023',
      length: '17 total hours'
    },
    {
      id: 'UC-774916c7-9968-456d-b2f7-276860f03dc5',
      name: 'Modern React with Redux 2023 Update]',
      url: 'https://ude.my/UC-774916c7-9968-456d-b2f7-276860f03dc5',
      instructors: ['Stephen Grider'],
      date: 'March 24, 2023',
      length: '37.5 total hours'
    },
    {
      id: 'UC-3d139556-b0b1-492c-a64c-5c3217029200',
      name: "Microfrontends with React: A Complete Developer's Guide",
      url: 'https://ude.my/UC-3d139556-b0b1-492c-a64c-5c3217029200',
      instructors: ['Stephen Grider'],
      date: 'May 23, 2023',
      length: '9 total hours'
    },
    {
      id: 'UC-8a2d1075-53d8-4113-9aea-4f1f351369e5',
      name: 'React and Typescript: Build a Portfolio Project',
      url: 'https://ude.my/UC-8a2d1075-53d8-4113-9aea-4f1f351369e5',
      instructors: ['Stephen Grider'],
      date: 'Aug. 30, 2023',
      length: '29.5 total hours'
    },
    {
      id: 'UC-bc4a3b2c-61b1-421e-a5af-2df76af3d8f0',
      name: "Typescript: The Complete Developer's Guide",
      url: 'https://ude.my/UC-bc4a3b2c-61b1-421e-a5af-2df76af3d8f0',
      instructors: ['Stephen Grider'],
      date: 'Nov. 15, 2023',
      length: '27.5 total hours'
    },
    {
      id: 'UC-2c666dcc-3d02-4cf3-a9d0-3172fac13a2d',
      name: "SQL and PostgreSQL: Complete Developer's Guide",
      url: 'https://ude.my/UC-2c666dcc-3d02-4cf3-a9d0-3172fac13a2d',
      instructors: ['Stephen Grider'],
      date: 'May 25, 2023',
      length: '22 total hours'
    },
    {
      id: 'UC-dee34f9c-6972-4443-842e-7950a3eb0a3e',
      name: "Next JS: The Complete Developer's Guide",
      url: 'https://ude.my/UC-dee34f9c-6972-4443-842e-7950a3eb0a3e',
      instructors: ['Stephen Grider'],
      date: 'Dec. 7, 2023',
      length: '15.5 total hours'
    }
  ]

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center px-2 py-1.5'>
          <p className='uppercase'>Certification</p>
          <ModeToggle>
            <Button variant='ghost' className='h-5 w-5 p-0'>
              <DotsHorizontalIcon />
            </Button>
          </ModeToggle>
        </div>

        <Accordion type='single' defaultValue='item-1' collapsible>
          <AccordionItem value='item-1' className='border-0'>
            <AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1 pt-1 border-t dark:border-secondary'>
              Udemy
            </AccordionTrigger>
            <AccordionContent>
              <ul className='text-nowrap space-y-1'>
                {items.map((item) => (
                  <Link key={item.id} href={item.url} target='_blank'>
                    <li className='pl-8 flex flex-col space-x-1 cursor-pointer hover:bg-slate-300/20 dark:hover:bg-zinc-100/10'>
                      <p className='font-medium text-sm text-ellipsis'>{item.name}</p>
                      <p>Instructors: {item.instructors[0]}</p>
                      <p className='text-xs text-muted-foreground'>{item.date}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
