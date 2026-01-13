'use client'

import {
  BoltIcon,
  ChartBarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@heroui/react'
import { motion } from 'motion/react'
import { FC } from 'react'

import {
  AEROSOL_BURNER_URL,
  AEROSOL_URL,
  CMC_URL,
  COINGECKO_URL,
  JUPITER_BUY_URL,
  UTM_SOURCE,
} from '../../../constants'
import { buildReferralUrl } from '../../../utils/urls'

export const RodaiSection: FC = () => {
  return (
    <div className="w-full py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6">
            What&apos;s RODAI?
          </h2>
          <div className="w-32 h-1 bg-[#3c1154] mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-[#3c1154] max-w-3xl mx-auto font-bold">
            The official deflationary meme token of{' '}
            <a
              href={buildReferralUrl(AEROSOL_URL, {
                utm_source: UTM_SOURCE,
                utm_medium: 'website',
                utm_campaign: 'rodai_section_intro',
              })}
              target="_blank"
              className="text-[#3c1154] hover:text-[#5a1a7a] font-bold underline decoration-2 underline-offset-4 transition-colors"
              rel="noreferrer"
            >
              Aerosol
            </a>
            , one of the best builders in the Solana ecosystem.
          </p>
        </motion.div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* First AI Meme Token Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#60E7E5] p-8 rounded-2xl text-[#3c1154]"
          >
            <div className="w-16 h-16 bg-[#f97b55] rounded-full flex items-center justify-center mb-6">
              <SparklesIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4 font-edgisp text-[#3c1154]">
              First AI Meme Token
            </h3>
            <p className="text-lg leading-relaxed font-medium mb-4 text-[#3c1154]">
              $RODAI launched January 13, 2024 as the first AI meme token on
              Solana. We pioneered the category by{' '}
              <span className="font-black text-[#3c1154]">
                combining AI innovation with meme culture
              </span>{' '}
              on the fastest blockchain in crypto.
            </p>
            <div className="pt-4">
              <p className="text-sm font-bold uppercase tracking-wider text-[#3c1154]/70">
                A PIECE OF SOLANA HISTORY
              </p>
            </div>
          </motion.div>

          {/* Built on Real Fundamentals Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#60E7E5] p-8 rounded-2xl text-[#3c1154]"
          >
            <div className="w-16 h-16 bg-[#f97b55] rounded-full flex items-center justify-center mb-6">
              <ChartBarIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4 font-edgisp text-[#3c1154]">
              Built on Real Fundamentals
            </h3>
            <p className="text-lg leading-relaxed font-medium mb-4 text-[#3c1154]">
              RODAI is tied to{' '}
              <a
                href={buildReferralUrl(AEROSOL_URL, {
                  utm_source: UTM_SOURCE,
                  utm_medium: 'website',
                  utm_campaign: 'rodai_section_fundamentals',
                })}
                target="_blank"
                className="font-black text-[#3c1154] underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                rel="noreferrer"
              >
                Aerosol&apos;s
              </a>{' '}
              builder success. As the team builds products and grows revenue,
              they reinvest in RODAI.{' '}
              <a
                href={buildReferralUrl(AEROSOL_BURNER_URL, {
                  utm_source: UTM_SOURCE,
                  utm_medium: 'website',
                  utm_campaign: 'rodai_section_burn_claim',
                })}
                target="_blank"
                className="font-black text-[#3c1154] underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                rel="noreferrer"
              >
                Burn & Claim
              </a>{' '}
              already processes thousands of transactions monthly, and more
              products are launching soon.
            </p>
            <div className="pt-4">
              <p className="text-sm font-bold uppercase tracking-wider text-[#3c1154]/70">
                Backed by Builder Success
              </p>
            </div>
          </motion.div>

          {/* Trusted and Discoverable Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#60E7E5] p-8 rounded-2xl text-[#3c1154]"
          >
            <div className="w-16 h-16 bg-[#f97b55] rounded-full flex items-center justify-center mb-6">
              <BoltIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4 font-edgisp text-[#3c1154]">
              Trusted and Discoverable
            </h3>
            <p className="text-lg leading-relaxed font-medium mb-4 text-[#3c1154]">
              RODAI is listed and trusted on all major platforms, including{' '}
              <a
                href={buildReferralUrl(CMC_URL, {
                  utm_source: UTM_SOURCE,
                  utm_medium: 'website',
                  utm_campaign: 'rodai_section_cmc',
                })}
                target="_blank"
                className="font-black text-[#3c1154] underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                rel="noreferrer"
              >
                CoinMarketCap
              </a>{' '}
              and{' '}
              <a
                href={buildReferralUrl(COINGECKO_URL, {
                  utm_source: UTM_SOURCE,
                  utm_medium: 'website',
                  utm_campaign: 'rodai_section_coingecko',
                })}
                target="_blank"
                className="font-black text-[#3c1154] underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                rel="noreferrer"
              >
                CoinGecko
              </a>
              . We&apos;re categorized under the coveted{' '}
              <span className="font-black text-[#3c1154]">AI MEME</span> section
              on both platforms, establishing RODAI as a recognized leader in
              the AI meme token category.
            </p>
            <div className="pt-4">
              <p className="text-sm font-bold uppercase tracking-wider text-[#3c1154]/70">
                Highly Discoverable
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-[#60E7E5] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-black text-[#3c1154] mb-4 font-edgisp">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-[#3c1154] mb-6 font-medium">
              Join thousands of holders who got in early on the first AI meme
              token on Solana. Back the Aerosol team and buy RODAI now.
            </p>
            <a href={JUPITER_BUY_URL} target="_blank" rel="noreferrer">
              <Button
                className="bg-[#3c1154] hover:bg-[#5a1a7a] text-white font-bold px-10 py-6 text-lg transition-all"
                as="div"
              >
                Buy RODAI Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
