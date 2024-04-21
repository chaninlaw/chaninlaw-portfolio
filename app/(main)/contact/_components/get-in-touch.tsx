import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export const GetInTouch = () => {
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
          <form className='space-y-4 text-left'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Enter your name' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' placeholder='Enter your email' type='email' />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='message'>Message</Label>
              <Textarea className='min-h-[150px]' id='message' placeholder='Enter your message' />
            </div>
            <Button className='w-full' type='submit'>
              Send Message
            </Button>
          </form>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <div className='space-y-2'>
              <div className='font-medium'>John Doe</div>
              <div className='text-gray-500 dark:text-gray-400'>
                <a className='hover:underline' href='#'>
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Link className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50' href='#'>
                <TwitterLogoIcon className='h-6 w-6' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50' href='#'>
                <LinkedInLogoIcon className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
              <Link className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50' href='#'>
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
