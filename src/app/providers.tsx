'use client'

import type { Session, User } from 'lucia'
import { ThemeProvider } from '@/components/theme-provider'
import { EditorContextProvider } from '@/components/editor'
import { SessionProvider } from '@/components/session-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster as Sooner } from 'sonner'
import { Toaster } from '@/components/ui/toaster'
import { ProgressBarProvider } from 'react-transition-progress'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NavigationBlockerProvider } from '@/components/navigation-block'

export function Providers({
  children,
  sessions
}: {
  children: React.ReactNode
  sessions: {
    user: User | null
    session: Session | null
  }
}) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <ProgressBarProvider>
        <NavigationBlockerProvider>
          <SessionProvider value={sessions}>
            <TooltipProvider>
              <EditorContextProvider>{children}</EditorContextProvider>
            </TooltipProvider>
          </SessionProvider>
          <Toaster />
          <Sooner />
          <Analytics />
          <SpeedInsights />
        </NavigationBlockerProvider>
      </ProgressBarProvider>
    </ThemeProvider>
  )
}
