import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Lalezar as Font } from 'next/font/google'

import { PRELOAD_IMAGES, SEO_DESCRIPTION, X_HANDLE } from '../constants'

import AppProviders from './providers'

import './globals.css'

const font = Font({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'RODAI - The Official AI Meme Token of the Aerosol Platform',
  description: SEO_DESCRIPTION,
  keywords: [
    'RODAI',
    'Aerosol',
    'AI',
    'AI meme',
    'memetility',
    'utility',
    'Solana meme token',
    'crypto meme',
    'blockchain',
    'crypto collectibles',
    'Web3',
    'Aerosol platform',
    'crypto innovation',
    'Solana blockchain',
    'Solana ecosystem',
  ],
  openGraph: {
    title: 'RODAI - The Official AI Meme Token of the Aerosol Platform',
    description: SEO_DESCRIPTION,
    url: 'https://www.rodai.meme',
    type: 'website',
    images: [
      {
        url: '/img/seo/rodai_og_image.jpeg',
        width: 1200,
        height: 630,
        alt: 'RODAI Token Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RODAI - The Official AI Meme Token of Aerosol',
    description: SEO_DESCRIPTION,
    site: X_HANDLE,
    creator: X_HANDLE,
    images: ['/img/seo/rodai_summary_large_image.jpeg'],
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
      <body className={font.className}>
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
