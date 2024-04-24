import { EditorContextProvider } from '@/components/editor'
import { ThemeProvider } from '@/components/theme-provider'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <EditorContextProvider>{children}</EditorContextProvider>
    </ThemeProvider>
  )
}
