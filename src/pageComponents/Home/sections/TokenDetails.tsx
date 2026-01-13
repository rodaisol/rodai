'use client'

import { ArrowTopRightOnSquareIcon, CheckIcon } from '@heroicons/react/20/solid'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'motion/react'
import { FC, useState } from 'react'

import { RODAI_MINT_ADDRESS } from '../../../app/contants'

const SOLSCAN_URL = `https://solscan.io/token/${RODAI_MINT_ADDRESS}`
const ORB_URL = `https://orbmarkets.io/token/${RODAI_MINT_ADDRESS}`

export const TokenDetailsSection: FC = () => {
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
    <div className="w-full pb-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Token Details
          </h2>
          <div className="w-32 h-1 bg-[#3c1154] mx-auto"></div>
        </motion.div>

        {/* Token Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#60E7E5] rounded-2xl p-6 sm:p-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-[#3c1154] px-5 py-3 rounded-xl border-2 border-[#3c1154]/50 shadow-lg">
                <CheckIcon className="w-6 h-6 text-white" />
                <span className="text-base font-black text-white">
                  Fixed Supply
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#3c1154] px-5 py-3 rounded-xl border-2 border-[#3c1154]/50 shadow-lg">
                <CheckIcon className="w-6 h-6 text-white" />
                <span className="text-base font-black text-white">
                  Liquidity Locked
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#3c1154] px-5 py-3 rounded-xl border-2 border-[#3c1154]/50 shadow-lg">
                <CheckIcon className="w-6 h-6 text-white" />
                <span className="text-base font-black text-white">
                  No Mint Authority
                </span>
              </div>
            </div>

            {/* Contract Address Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-black text-[#3c1154]">
                  Contract Address
                </h3>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#3c1154] hover:bg-[#5a1a7a] rounded-lg border-2 border-transparent hover:border-white/20 transition-colors text-sm font-medium text-white min-w-[120px]"
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
                        className="flex items-center gap-2"
                      >
                        <CheckIcon className="w-4 h-4 text-white" />
                        <span>Copied</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="clipboard"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <DocumentDuplicateIcon className="w-4 h-4 text-white" />
                        <span>Copy</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <div className="w-full bg-white rounded-lg px-4 py-3">
                <span className="text-sm sm:text-base text-[#3c1154] block truncate font-medium">
                  {RODAI_MINT_ADDRESS}
                </span>
              </div>

              {/* Explorer Links */}
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <a
                  href={SOLSCAN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#3c1154] hover:bg-[#5a1a7a] rounded-lg transition-colors text-sm font-medium text-white"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
                  View on Solscan
                </a>
                <a
                  href={ORB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#3c1154] hover:bg-[#5a1a7a] rounded-lg transition-colors text-sm font-medium text-white"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
                  View on Orb
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
