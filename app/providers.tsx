import { validateRequest } from '@/auth'

import { ThemeProvider } from '@/components/theme-provider'
import { EditorContextProvider } from '@/components/editor'
import { SessionProvider } from '@/components/session-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster as Sooner } from 'sonner'
import { Toaster } from '@/components/ui/toaster'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export async function Providers({ children }: { children: React.ReactNode }) {
  const sessions = await validateRequest()
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SessionProvider value={sessions}>
        <TooltipProvider>
          <EditorContextProvider>{children}</EditorContextProvider>
        </TooltipProvider>
      </SessionProvider>
      <Toaster />
      <Sooner />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}
