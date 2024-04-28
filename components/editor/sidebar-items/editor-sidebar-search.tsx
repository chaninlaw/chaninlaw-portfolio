import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

export function EditorSidebarSearch() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center px-2 py-1.5'>
          <p className='uppercase'>Search</p>
          <ModeToggle>
            <Button variant='ghost' className='h-5 w-5 p-0'>
              <DotsHorizontalIcon />
            </Button>
          </ModeToggle>
        </div>
      </div>
    </>
  )
}
