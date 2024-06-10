import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Geologica } from 'next/font/google'

import AppProviders from './providers'

import './globals.css'

const font = Geologica({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'RODAI - The hardest and evergrowing ROD of Solana',
  description:
    'The mighty, long and powerful RODAI token. Only possible on Solana.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16587738152"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/js/gtag.js" />
      </head>
      <body className={font.className}>
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
