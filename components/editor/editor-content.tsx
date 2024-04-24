export function EditorContent({ children }: { children: React.ReactNode }) {
  return <main className='h-[calc(100vh-100px)] lg:h-[calc(100vh-128px)] overflow-y-scroll'>{children}</main>
}
