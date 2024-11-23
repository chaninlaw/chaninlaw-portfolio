'use client'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'
import { CalendarIcon, EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'
import * as React from 'react'

export const EditorKeyboardCapture: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const handleKeyDown = (event: KeyboardEvent) => {
    const shortcutKey = event.key === 'k' && (event.metaKey || event.ctrlKey) ? event.key : null
    if (shortcutKey) {
      event.preventDefault()
      setOpen(true)
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {open && (
        <p className='text-xs'>
          (<kbd className='font-sans tracking-widest'>⌘K</kbd>) was pressed. Waiting for second key of chord...
        </p>
      )}
      <CommandDialog open={open} onOpenChange={setOpen} className='!rounded-xl border-border shadow-lg'>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <CalendarIcon className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className='mr-2 h-4 w-4' />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <PersonIcon className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className='mr-2 h-4 w-4' />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
