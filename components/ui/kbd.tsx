export const Kbd = ({ children }: { children?: React.ReactNode }) => {
  return (
    <span className='h-6 w-6 flex justify-center items-center text-stone-500 bg-stone-800 rounded-md'>
      <kbd className='font-sans tracking-widest'>{children}</kbd>
    </span>
  )
}
