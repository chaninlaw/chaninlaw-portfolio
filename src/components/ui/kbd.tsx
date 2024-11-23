export const Kbd = ({ children }: { children?: React.ReactNode }) => {
  return (
    <span className='flex h-6 w-6 items-center justify-center rounded-md shadow-md dark:bg-stone-800 dark:text-stone-500'>
      <kbd className='font-sans tracking-widest'>{children}</kbd>
    </span>
  )
}
