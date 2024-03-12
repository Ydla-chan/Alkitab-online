import type { Metadata } from 'next'
import { Roboto } from "next/font/google"
import classNames from 'classnames'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'

export const fontSans = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '400'
})


export const metadata: Metadata = {
  title: 'Bible',
  icons: {
    // shortcut: "/logo.svg",
  },
  description: 'Aplikasi Alkitab',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cn = classNames
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased p-8",
          fontSans.variable
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}