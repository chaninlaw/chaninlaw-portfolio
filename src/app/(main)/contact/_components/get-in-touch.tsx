'use client'
import { SubmitButton } from '@/components/button/submit-button'
import { Link } from '@/components/link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { toast } from 'sonner'

import { sendEmail } from '../_actions'

export const GetInTouch = () => {
  const [formState, formAction] = React.useActionState(sendEmail, { success: null })
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
    <section className='w-full bg-transparent py-12 dark:bg-transparent md:py-24'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-3xl space-y-6 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Get in Touch</h2>
            <p className='text-lg text-gray-500 dark:text-gray-400'>
              Have a question or want to work together? Fill out the form below or reach out through my social channels.
            </p>
          </div>
          <form ref={formRef} action={formAction} className='space-y-4 text-left'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
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
          <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
            <div className='space-y-2'>
              <Link className='font-medium' href={'mailto:chaninlawlert@gmail.com?subject=Get in Touch'}>
                <span className='sr-only'>Email</span>
                <span className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>chaninlaw@gmail.com</span>
              </Link>
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
