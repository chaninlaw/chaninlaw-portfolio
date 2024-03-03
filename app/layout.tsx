import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { EditorExplorer } from '@/components/editor/editor-explorer'
import { EditorFooter } from '@/components/editor/editor-footer'
import { EditorNavHead } from '@/components/editor/editor-nav-head'
import { EditorNavSide } from '@/components/editor/editor-nav-side'
import {
	ResizablePanelGroup,
	ResizablePanel,
	ResizableHandle,
} from '@/components/ui/resizable'
import { EditorContextProvider } from '@/components/editor'
import { EditorTabs } from '@/components/editor/editor-tabs'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: "Chanin' portfolio",
	description: 'My website about me',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<EditorContextProvider>
						<div className='h-full'>
							<div className='border-2 border-border rounded-xl flex flex-col w-full h-full'>
								<EditorNavHead />
								<div className='flex h-full'>
									<EditorNavSide />
									<ResizablePanelGroup
										direction='horizontal'
										className='h-full'
									>
										<ResizablePanel defaultSize={15}>
											<EditorExplorer />
										</ResizablePanel>
										<ResizableHandle />
										<ResizablePanel defaultSize={85}>
											<EditorTabs />
											<main className='h-[calc(100vh-128px)] overflow-y-scroll'>
												{children}
											</main>
										</ResizablePanel>
									</ResizablePanelGroup>
								</div>
								<EditorFooter />
							</div>
						</div>
					</EditorContextProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
