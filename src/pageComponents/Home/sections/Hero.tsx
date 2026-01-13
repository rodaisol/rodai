'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { Button } from '@heroui/react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { FC, useState } from 'react'

import { RODAI_MINT_ADDRESS } from '../../../app/contants'
import { SocialLinks } from '../../../components/SocialLinks'
import { AEROSOL_URL, JUPITER_BUY_URL, UTM_SOURCE } from '../../../constants'
import { buildReferralUrl } from '../../../utils/urls'

export const HeroSection: FC = () => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(RODAI_MINT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center text-center w-full">
        {/* Compelling Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 max-w-4xl leading-tight drop-shadow-lg"
        >
          The{' '}
          <span className="text-[#3DDAD8] drop-shadow-md">First AI Meme</span>{' '}
          Token on Solana
        </motion.h1>

        {/* Value Proposition Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0 drop-shadow-md">
            One of Solana&apos;s most trusted tokens.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#3c1154] drop-shadow-sm">
            Launched January 13, 2024.
          </p>
        </motion.div>

        {/* Stacked Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="-mt-2 mb-6"
        >
          <Image
            src="/img/logo/rodai-logo-stacked-transparent-bg.png"
            alt="RODAI"
            width={400}
            height={400}
            className="w-56 h-auto sm:w-72 sm:h-auto lg:w-80 lg:h-auto"
            priority
            draggable={false}
          />
        </motion.div>

        {/* Social Proof Metrics & Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-4 mb-6 w-full"
        >
          {/* Social Proof Metrics */}
          <div className="flex flex-row w-full items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col items-center bg-[#78569E]/60 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl">
              <div className="text-2xl sm:text-4xl font-black text-white mb-1 drop-shadow-md">
                #1
              </div>
              <div className="text-xs sm:text-base text-white font-medium">
                First AI Meme
              </div>
            </div>
            <div className="flex flex-col items-center bg-[#78569E]/60 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl">
              <div className="text-2xl sm:text-4xl font-black text-white mb-1 drop-shadow-md">
                30+
              </div>
              <div className="text-xs sm:text-base text-white font-medium">
                Years Locked
              </div>
            </div>
            <div className="flex flex-col items-center bg-[#78569E]/60 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl">
              <div className="text-2xl sm:text-4xl font-black text-white mb-1 drop-shadow-md">
                $8M
              </div>
              <div className="text-xs sm:text-base text-white font-medium">
                All Time High
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="flex flex-row w-full items-center justify-center px-4 sm:px-0">
            <div className="flex items-center gap-2 bg-[#78569E]/60 px-3 py-2 rounded-2xl w-full sm:w-auto sm:max-w-md">
              <span className="text-white font-mono text-xs sm:text-sm flex-1 min-w-0 truncate">
                {RODAI_MINT_ADDRESS}
              </span>
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-xs font-medium whitespace-nowrap flex-shrink-0"
                title="Copy address"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-1.5"
                    >
                      <CheckIcon className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="clipboard"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-1.5"
                    >
                      <DocumentDuplicateIcon className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons - Unified Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-3 mb-8 w-full max-w-md mx-auto"
        >
          {/* Primary CTA - Buy Now */}
          <a
            href={JUPITER_BUY_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <Button
              className="w-full bg-[#3DDAD8] hover:bg-[#2AC8C6] text-[#3c1154] font-black py-6 text-base border-2 border-transparent hover:border-white/20 transition-all shadow-lg"
              as="div"
            >
              Buy Now
            </Button>
          </a>

          {/* Secondary CTAs */}
          <div className="flex gap-3">
            <a
              target="_blank"
              href="https://t.me/rodaisol"
              rel="noreferrer"
              className="flex-1"
            >
              <Button
                className="w-full bg-white hover:bg-white/90 text-[#3c1154] font-bold py-6 text-base border-2 border-transparent hover:border-white/20 transition-all"
                as="div"
              >
                Join Community
              </Button>
            </a>
            <a
              href="https://dexscreener.com/solana/CzWqL4M1CzQiw45djF1xdrWHQmuJbJoZPY38ezKGb6q8"
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button
                className="w-full bg-[#78569E]/60 hover:bg-[#78569E]/80 text-white font-bold py-6 text-base border-2 border-transparent transition-all"
                as="div"
              >
                Chart
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Aerosol Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col items-center mb-6"
        >
          <p className="text-white text-lg sm:text-xl font-bold mb-3 text-center">
            The official meme token of
          </p>
          <a
            href={buildReferralUrl(AEROSOL_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'hero_aerosol_link',
            })}
            target="_blank"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
            rel="noreferrer"
          >
            <Image
              src="/img/aerosol/logo-horizontal-dark.png"
              alt="Aerosol"
              width={150}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              draggable={false}
            />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col items-center mb-6"
        >
          <p className="text-white text-lg sm:text-xl font-medium mb-4 text-center">
            Follow us!
          </p>
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  )
}
