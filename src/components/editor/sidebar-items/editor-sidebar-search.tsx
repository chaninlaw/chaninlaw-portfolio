import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { CiSearch } from 'react-icons/ci'

export function EditorSidebarSearch() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between px-2 py-1.5'>
          <p className='uppercase'>Search</p>
          <ModeToggle>
            <Button variant='ghost' aria-label='Toggle theme' className='h-5 w-5 p-0'>
              <DotsHorizontalIcon />
            </Button>
          </ModeToggle>
        </div>

        <div className='flex flex-col items-start gap-8 px-4'>
          <div className='relative w-full flex-1 bg-border'>
            <CiSearch className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input className='flex-1 pl-8' type='search' placeholder='Search...' />
          </div>
        </div>
      </div>
    </>
  )
}
