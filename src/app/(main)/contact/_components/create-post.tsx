'use client'

import { ClientSubmitButton } from '@/components/button/client-submit-button'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormField, FormLabel, FormItem, FormMessage, FormControl } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { createPost } from '../_actions'
import { createPostSchema } from '../_actions/validation'

export const CreatePost = ({ authorId }: { authorId: string }) => {
  const [open, setOpen] = React.useState(false)

  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      content: '',
      authorId
    }
  })

  const handleSubmit = async (data: z.infer<typeof createPostSchema>) => {
    const { success } = await createPost(data)
    if (!success) {
      return
    } else {
      form.reset()
    }
    setOpen(false)
  }

  const handleOpen = (open: boolean) => {
    console.log('open', open)
    if (!open) {
      form.reset()
    }
    setOpen(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <Button className='flex items-center justify-center gap-1'>
          <PlusCircledIcon />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className='border-white/25 sm:max-w-[425px]'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <DialogHeader>
              <DialogTitle>Create a new post</DialogTitle>
              <DialogDescription>Share your thoughts and engage with the community.</DialogDescription>
            </DialogHeader>

            <FormField
              control={form.control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='mb-2' htmlFor='content'>
                    Type below:{' '}
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} className='min-h-[100px]' placeholder='Write your post content here...' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className='mt-2'>
              <ClientSubmitButton loading={form.formState.isSubmitting}>Create Post</ClientSubmitButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
