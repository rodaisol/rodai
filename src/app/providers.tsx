'use client'

import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { CookieConsentBanner } from '../components/CookieConsentBanner'

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
      >
        <CookieConsentBanner />
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}
