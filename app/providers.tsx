import { validateRequest } from '@/auth'

import { ThemeProvider } from '@/components/theme-provider'
import { EditorContextProvider } from '@/components/editor'
import { SessionProvider } from '@/components/session-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

export async function Providers({ children }: { children: React.ReactNode }) {
  const sessions = await validateRequest()
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SessionProvider value={sessions}>
        <TooltipProvider>
          <EditorContextProvider>{children}</EditorContextProvider>
        </TooltipProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
