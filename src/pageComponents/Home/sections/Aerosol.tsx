'use client'

import { Button } from '@heroui/react'
import { motion } from 'motion/react'
import { FC } from 'react'

import {
  AEROSOL_BURNER_URL,
  AEROSOL_URL,
  BURNER_CTA_UTM_CAMPAIGN,
  UTM_SOURCE,
} from '../../../constants'
import { RODAI_APP_URL } from '../../../env'
import { buildReferralUrl } from '../../../utils/urls'

export const AerosolSection: FC = () => {
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
            What&apos;s Aerosol?
          </h2>
          <div className="w-32 h-1 bg-[#3c1154] mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10"
          >
            <p className="text-xl text-[#3c1154] leading-relaxed mb-6 font-medium">
              Aerosol is a software company building consumer-facing products
              for the Solana ecosystem. Our focus is on creating practical tools
              that solve real problems for users while aligning incentives with
              the communities and projects they support.
            </p>
            <p className="text-xl text-[#3c1154] leading-relaxed font-medium">
              We&apos;ve already launched{' '}
              <a
                href={buildReferralUrl(AEROSOL_BURNER_URL, {
                  utm_source: UTM_SOURCE,
                  utm_medium: 'website',
                  utm_campaign: 'aerosol_section_burn_claim',
                })}
                target="_blank"
                className="text-[#3c1154] hover:text-[#5a1a7a] font-black underline decoration-2 underline-offset-4"
                rel="noreferrer"
              >
                Burn & Claim
              </a>
              , a production-grade application that helps users reclaim SOL by
              cleaning up their wallets. The product is actively used by
              thousands of wallets and has processed hundreds of thousands of
              transactions to date. Beyond Burn & Claim, we are developing
              additional products that extend this model of utility, community
              participation, and sustainable revenue within the Solana
              ecosystem.
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <a
            href={buildReferralUrl(AEROSOL_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'aerosol_section_cta',
            })}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="bg-[#3c1154] hover:bg-[#5a1a7a] text-white font-black px-10 py-6 text-lg"
              as="div"
            >
              Learn More about Aerosol
            </Button>
          </a>
          <a
            href={buildReferralUrl(AEROSOL_BURNER_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: BURNER_CTA_UTM_CAMPAIGN,
              utm_content: 'aerosol_section_cta',
              source: UTM_SOURCE,
              ref: RODAI_APP_URL,
            })}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="bg-white hover:bg-white/90 text-[#3c1154] font-black px-10 py-6 text-lg"
              as="div"
            >
              Cleanup your wallet with Burn & Claim
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
