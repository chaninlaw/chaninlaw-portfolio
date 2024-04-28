import Link from 'next/link'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { FaMeta } from 'react-icons/fa6'
import { TbDiscountCheckFilled } from 'react-icons/tb'

export function EditorSidebarExtensions() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center px-2 py-1.5'>
          <p className='uppercase'>Extensions</p>
          <ModeToggle>
            <Button variant='ghost' className='h-5 w-5 p-0'>
              <DotsHorizontalIcon />
            </Button>
          </ModeToggle>
        </div>

        <Accordion type='single' defaultValue='item-1' collapsible>
          <AccordionItem value='item-1' className='border-0'>
            <AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1 pt-1 border-t dark:border-secondary'>
              Installed
            </AccordionTrigger>
            <AccordionContent>
              <Link href={'/meta-llama'}>
                <Alert className='border-none rounded-none hover:bg-slate-300/20 dark:hover:bg-zinc-100/10'>
                  <FaMeta className='h-4 w-4' />
                  <AlertTitle className='text-sm'>Meta-Llama-3-8B-Instruct</AlertTitle>
                  <AlertDescription className='text-xs text-nowrap'>
                    Meta developed and released the Meta Llama 3 family of large language models (LLMs)
                  </AlertDescription>
                  <AlertDescription className='text-xs flex items-center'>
                    <TbDiscountCheckFilled />
                    meta-llama
                  </AlertDescription>
                </Alert>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Accordion type='single' defaultValue='item-1' collapsible>
        <AccordionItem value='item-1' className='border-0'>
          <AccordionTrigger className='font-bold uppercase flex justify-start space-x-1 my-1 pt-1 border-t dark:border-secondary'>
            Recommended
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
