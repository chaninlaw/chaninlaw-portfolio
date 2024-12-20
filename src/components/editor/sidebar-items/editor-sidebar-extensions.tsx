import { Link } from '@/components/link'
import { ModeToggle } from '@/components/theme-toggle'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { paths } from '@/lib/paths'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { FaMeta } from 'react-icons/fa6'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'

export function EditorSidebarExtensions() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between px-2 py-1.5'>
          <p className='uppercase'>Extensions</p>
          <ModeToggle>
            <Button variant='ghost' aria-label='Toggle theme' className='h-5 w-5 p-0'>
              <DotsHorizontalIcon />
            </Button>
          </ModeToggle>
        </div>

        <Accordion type='single' defaultValue='item-1' collapsible>
          <AccordionItem value='item-1' className='border-0'>
            <AccordionTrigger className='my-1 flex justify-start space-x-1 border-t pt-1 font-bold uppercase dark:border-secondary'>
              Installed
            </AccordionTrigger>
            <AccordionContent>
              <Link href={paths.extensions.metaLlama}>
                <Alert className='flex space-x-2 rounded-none border-none hover:bg-slate-300/20 dark:hover:bg-zinc-100/10'>
                  <FaMeta className='h-5 w-5' />
                  <div className='text-nowrap text-sm'>
                    <AlertTitle>Meta-Llama-3-8B-Instruct</AlertTitle>
                    <AlertDescription className='text-xs text-muted-foreground'>
                      Meta developed and released the Meta Llama 3 family of large language models (LLMs)
                    </AlertDescription>
                    <AlertDescription className='flex items-center gap-1 text-xs'>
                      <TbRosetteDiscountCheckFilled />
                      meta
                    </AlertDescription>
                  </div>
                </Alert>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Accordion type='single' defaultValue='item-1' collapsible>
        <AccordionItem value='item-1' className='border-0'>
          <AccordionTrigger className='my-1 flex justify-start space-x-1 border-t pt-1 font-bold uppercase dark:border-secondary'>
            Recommended
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
