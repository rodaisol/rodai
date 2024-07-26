'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { CookieConsentBanner } from '../components/CookieConsentBanner'

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
      >
        <CookieConsentBanner />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
