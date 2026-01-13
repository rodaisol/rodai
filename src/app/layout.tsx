import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import { PRELOAD_IMAGES, SEO_DESCRIPTION, X_HANDLE } from '../constants'
import { RODAI_APP_URL } from '../env'

import { Edgisp, SourceSansPro } from './fonts'
import AppProviders from './providers'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(RODAI_APP_URL),
  title: 'RODAI - The Official AI Meme Token of Aerosol',
  description: SEO_DESCRIPTION,
  keywords: [
    'RODAI',
    'Aerosol',
    'AI meme',
    'first AI meme',
    'first AI meme token Solana',
    'Solana meme token',
    'AI memetility',
    'deflationary token',
    'Solana token',
    'crypto meme',
    'meme coin',
    'Solana blockchain',
    'Solana ecosystem',
    'Burn & Claim',
    'Burn and Claim',
    'Rodcinerator',
    'defi',
    'Web3',
    'blockchain',
    'crypto',
    'Solana DeFi',
  ],
  authors: [{ name: 'Aerosol' }],
  creator: 'Aerosol',
  publisher: 'Aerosol',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: RODAI_APP_URL,
    siteName: 'RODAI',
    title: 'RODAI - The Official AI Meme Token of Aerosol',
    description: SEO_DESCRIPTION,
    images: [
      {
        url: '/img/seo/rodai_link_preview.webp',
        width: 1200,
        height: 630,
        alt: 'RODAI - Official AI meme token of Aerosol',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: X_HANDLE,
    creator: X_HANDLE,
    title: 'RODAI - The Official AI Meme Token of Aerosol',
    description: SEO_DESCRIPTION,
    images: [
      {
        url: '/img/seo/rodai_link_preview.webp',
        alt: 'RODAI - Official AI meme token of Aerosol',
      },
    ],
  },
  verification: {
    // Add verification codes if available
  },
  alternates: {
    canonical: RODAI_APP_URL,
  },
  other: {
    'apple-mobile-web-app-title': 'RODAI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-MWPZNRZT" />
        {PRELOAD_IMAGES.map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </head>
      <body className={`${SourceSansPro.className} ${Edgisp.variable}`}>
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
