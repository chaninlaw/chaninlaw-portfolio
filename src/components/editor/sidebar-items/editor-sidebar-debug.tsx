'use client'
import { SubmitButton } from '@/components/button/submit-button'
import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import * as React from 'react'

export function EditorSidebarDebug() {
  const [message, setMessage] = React.useState('')
  const formRef = React.useRef<HTMLFormElement>(null)

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center px-2 py-1.5'>
          <p className='uppercase'>Run and Debug</p>
          <ModeToggle>
            <Button variant='ghost' aria-label='Toggle theme' className='h-5 w-5 p-0'>
              <DotsHorizontalIcon />
            </Button>
          </ModeToggle>
        </div>

        <div className='flex flex-col items-start gap-8 px-4'>
          <form
            ref={formRef}
            action={() => {
              formRef.current?.reset()
              setMessage('I recieved your report. Thank you!')
            }}
            className='grid w-full items-start gap-6'
          >
            <div className='grid gap-6 mt-3'>
              <Label htmlFor='role'>Bug Type</Label>
              <Select defaultValue='crash'>
                <SelectTrigger>
                  <SelectValue placeholder='Select a type of bugs.' />
                </SelectTrigger>
                <SelectContent className='capitalize'>
                  <SelectItem value='crash'>crash</SelectItem>
                  <SelectItem value='regression'>regression</SelectItem>
                  <SelectItem value='security'>security</SelectItem>
                  <SelectItem value='cleanup'>cleanup</SelectItem>
                  <SelectItem value='polish'>polish</SelectItem>
                  <SelectItem value='performance'>performance</SelectItem>
                  <SelectItem value='usability'>usability</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='content'>Content</Label>
              <Textarea id='content' placeholder='Describe the bug...' className='min-h-[9.5rem]' />
            </div>
            {message && <p className='text-sm text-green-500'>{message}</p>}
            <SubmitButton className='w-full'>Send Report</SubmitButton>
          </form>
        </div>
      </div>
    </>
  )
}
