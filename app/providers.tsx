import { validateRequest } from '@/auth'
import { EditorContextProvider } from '@/components/editor'
import { SessionProvider } from '@/components/session-provider'
import { ThemeProvider } from '@/components/theme-provider'

export async function Providers({ children }: { children: React.ReactNode }) {
  const sessions = await validateRequest()
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SessionProvider value={sessions}>
        <EditorContextProvider>{children}</EditorContextProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
