'use client'

import type { Session, User } from 'lucia'

import { EditorContextProvider } from '@/components/editor'
import { NavigationBlockerProvider } from '@/components/navigation-block'
import { SessionProvider } from '@/components/session-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ProgressBarProvider } from 'react-transition-progress'
import { Toaster as Sooner } from 'sonner'

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
