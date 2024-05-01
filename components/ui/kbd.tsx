export const Kbd = ({ children }: { children?: React.ReactNode }) => {
  return (
    <span className='h-6 w-6 flex justify-center items-center dark:text-stone-500 dark:bg-stone-800 rounded-md shadow-md'>
      <kbd className='font-sans tracking-widest'>{children}</kbd>
    </span>
  )
}
