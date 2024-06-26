'use client'
import * as React from 'react'
import { Link } from '@/components/link'
import { useFormState } from 'react-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SubmitButton } from '@/components/button/submit-button'

import { sendEmail } from '../_actions'
import { toast } from 'sonner'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export const GetInTouch = () => {
  const [formState, formAction] = useFormState(sendEmail, { success: null })
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (!formRef.current) return
    if (formState.message && formState.success === false) {
      toast.error(formState.message)
    } else if (formState.message && formState.success === true) {
      toast.success(formState.message)
      formRef.current.reset()
    }
  }, [formState])

  return (
    <section className='w-full bg-transparent dark:bg-transparent py-12 md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='max-w-3xl mx-auto space-y-6 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Get in Touch</h2>
            <p className='text-gray-500 dark:text-gray-400 text-lg'>
              Have a question or want to work together? Fill out the form below or reach out through my social channels.
            </p>
          </div>
          <form ref={formRef} action={formAction} className='space-y-4 text-left'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' name='name' placeholder='Enter your name' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' placeholder='Enter your email' type='email' required />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='message'>Message</Label>
              <Textarea className='min-h-[150px]' id='message' name='message' placeholder='Enter your message' required />
            </div>
            <p className='sr-only' aria-live='polite' role='status'>
              {formState.message}
            </p>
            <SubmitButton className='w-full'>Send Message</SubmitButton>
          </form>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <div className='space-y-2'>
              <div className='font-medium'>Chanin Lawlertrattana</div>
              <div className='text-gray-500 dark:text-gray-400'>
                <a className='hover:underline' href='#' onClick={() => toast.info('Try calling me 🤷‍♂️')}>
                  +66 (635) 032-466
                </a>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Link
                className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                target='_blank
              '
                href='https://linkedin.com/in/chaninlaw'
              >
                <LinkedInLogoIcon className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
              <Link
                className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                target='_blank'
                href='https://github.com/chaninlaw'
              >
                <GitHubLogoIcon className='h-6 w-6' />
                <span className='sr-only'>GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
