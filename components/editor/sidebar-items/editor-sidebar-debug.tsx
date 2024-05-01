'use client'
import * as React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { ModeToggle } from '@/components/theme-toggle'
import { SubmitButton } from '@/components/button/submit-button'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'

export function EditorSidebarDebug() {
  const [message, setMessage] = React.useState('')
  const formRef = React.useRef<HTMLFormElement>(null)

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center px-2 py-1.5'>
          <p className='uppercase'>Run and Debug</p>
          <ModeToggle>
            <Button variant='ghost' className='h-5 w-5 p-0'>
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
            <fieldset className='grid gap-6 rounded-lg border border-stone-400 p-4'>
              <legend className='-ml-1 px-1 text-sm font-medium'>Report Bug</legend>
              <div className='grid gap-3'>
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
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}
