'use client'

import { motion } from 'motion/react'
import { FC } from 'react'

import { BurnerIconAnimated } from '../../../components/BurnerIconAnimated'
import {
  AEROSOL_BURNER_URL,
  BURNER_CTA_UTM_CAMPAIGN,
  UTM_SOURCE,
} from '../../../constants'
import { RODAI_APP_URL } from '../../../env'
import { buildReferralUrl } from '../../../utils/urls'

export const TopBanner: FC = () => {
  return (
    <div className="w-full sm:flex sm:justify-center sm:px-4 mb-6">
      <motion.a
        href={buildReferralUrl(AEROSOL_BURNER_URL, {
          utm_source: UTM_SOURCE,
          utm_medium: 'link',
          utm_campaign: BURNER_CTA_UTM_CAMPAIGN,
          utm_content: 'cta_banner',
          source: UTM_SOURCE,
          ref: RODAI_APP_URL,
        })}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full sm:w-auto sm:inline-block"
      >
        <motion.div
          className="bg-white rounded-none sm:rounded-xl sm:max-w-xl px-3 py-3 hover:bg-white/90 transition-all group flex items-center justify-center gap-2 shadow-lg overflow-hidden"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="relative h-full min-w-16 w-16 -top-1">
            <BurnerIconAnimated size="sm" className="absolute -top-8 -left-1" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#3c1154] relative -left-4 top-0.5">
            Cleanup your wallet and claim SOL using our utility
          </span>
        </motion.div>
      </motion.a>
    </div>
  )
}
