import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'

import { validateRequest } from '@/auth'
import { EditorContent } from '@/components/editor/editor-content'
import { EditorFooter } from '@/components/editor/editor-footer'
import { EditorNavHead } from '@/components/editor/editor-nav-head'
import { EditorNavSide } from '@/components/editor/editor-nav-side'
import { EditorSidebar } from '@/components/editor/editor-sidebar'
import { EditorTabs } from '@/components/editor/editor-tabs'
import { Navbar } from '@/components/navbar'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import { headers } from 'next/headers'

import { Providers } from './providers'

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
            <div className='flex h-full w-full flex-col rounded-xl border-2 border-border'>
              <EditorNavHead />
              <div className='flex h-full'>
                <EditorNavSide />
                <ResizablePanelGroup direction='horizontal' className='h-full'>
                  <ResizablePanel defaultSize={isMobile ? 0 : 15}>
                    <div className='flex h-full w-full min-w-40 flex-col justify-between overflow-x-hidden border-l border-border bg-secondary text-[10px] tracking-wide dark:bg-background'>
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
