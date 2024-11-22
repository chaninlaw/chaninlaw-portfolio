import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

import { Navbar } from '@/components/navbar'
import { EditorFooter } from '@/components/editor/editor-footer'
import { EditorNavHead } from '@/components/editor/editor-nav-head'
import { EditorNavSide } from '@/components/editor/editor-nav-side'
import { EditorContent } from '@/components/editor/editor-content'
import { EditorSidebar } from '@/components/editor/editor-sidebar'
import { EditorTabs } from '@/components/editor/editor-tabs'

import { Providers } from './providers'
import { validateRequest } from '@/auth'
import { headers } from 'next/headers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: {
    default: "Chanin' portfolio",
    template: "%s | Chanin' portfolio"
  },
  description: 'My website about me'
}

export const viewport: Viewport = {
  colorScheme: 'dark light'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const sessions = await validateRequest()
  const header = await headers()
  const isMobile = header.get('user-agent')?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-dvh overscroll-none bg-background font-sans antialiased', fontSans.variable)}>
        <Navbar className='hidden lg:block' />
        <Providers sessions={sessions}>
          <div className='h-full'>
            <div className='border-2 border-border rounded-xl flex flex-col w-full h-full'>
              <EditorNavHead />
              <div className='flex h-full'>
                <EditorNavSide />
                <ResizablePanelGroup direction='horizontal' className='h-full'>
                  <ResizablePanel defaultSize={isMobile ? 0 : 15}>
                    <div className='w-full h-full min-w-40 overflow-x-hidden bg-secondary dark:bg-background border-l border-border text-[10px] tracking-wide flex flex-col justify-between'>
                      <EditorSidebar />
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={isMobile ? 100 : 85}>
                    <EditorTabs />
                    <EditorContent>{children}</EditorContent>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
              <EditorFooter />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
