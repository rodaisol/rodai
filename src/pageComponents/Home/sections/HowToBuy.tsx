'use client'

import { PlayIcon } from '@heroicons/react/20/solid'
import { Button } from '@heroui/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { FC } from 'react'

import { HOW_TO_BUY_YOUTUBE_URL, JUPITER_BUY_URL } from '../../../constants'

const steps = [
  {
    number: '1',
    title: 'Get a Solana Wallet',
    description:
      'Download Phantom, Solflare, or Backpack wallet app on your device.',
    links: [
      {
        name: 'Phantom',
        url: 'https://phantom.com',
        icon: '/img/wallets/Phantom-Icon_Circle.svg',
      },
      {
        name: 'Solflare',
        url: 'https://solflare.com',
        icon: '/img/wallets/Solflare-Icon_Square_Yellow.webp',
      },
      {
        name: 'Backpack',
        url: 'https://www.backpack.app',
        icon: '/img/wallets/Backpack_Standalone_Icon_Red.webp',
      },
    ],
  },
  {
    number: '2',
    title: 'Add SOL to Your Wallet',
    description:
      "Purchase SOL from an exchange and send it to your wallet address, or use your wallet's on-ramping feature if available.",
  },
  {
    number: '3',
    title: 'Swap SOL for RODAI',
    description: 'Use your wallet swap interface to swap SOL for RODAI.',
  },
]

export const HowToBuySection: FC = () => {
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
            How to Buy
          </h2>
          <div className="w-32 h-1 bg-[#3c1154] mx-auto"></div>
        </motion.div>

        {/* Step-by-Step Guide */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border-4 border-white/30 p-6 sm:p-8 shadow-xl"
            >
              <div className="flex gap-6 items-start">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#3c1154] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#3c1154] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-black/80 font-medium mb-4">
                    {step.description}
                  </p>

                  {/* Wallet Links for Step 1 */}
                  {step.links && (
                    <div className="flex flex-col sm:flex-row gap-3">
                      {step.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-[#3c1154] hover:bg-[#5a1a7a] rounded-lg border-2 border-transparent hover:border-white/20 transition-colors text-white font-bold text-sm sm:text-base"
                        >
                          {link.icon && (
                            <div
                              className={
                                link.name === 'Solflare'
                                  ? 'w-7 h-7 rounded-full bg-[#FFEF46] p-1 flex items-center justify-center'
                                  : link.name === 'Backpack'
                                    ? 'w-7 h-7 rounded-full bg-black p-1 flex items-center justify-center'
                                    : ''
                              }
                            >
                              <Image
                                src={link.icon}
                                alt={`${link.name} icon`}
                                width={28}
                                height={28}
                                className={
                                  link.name === 'Solflare'
                                    ? 'w-5 h-5 object-contain'
                                    : link.name === 'Backpack'
                                      ? 'w-5 h-5 object-contain'
                                      : 'w-7 h-7 object-contain'
                                }
                              />
                            </div>
                          )}
                          Get {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
        >
          <a
            href={JUPITER_BUY_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              className="w-full bg-[#3c1154] hover:bg-[#5a1a7a] text-white font-black px-10 py-6 text-lg border-2 border-transparent hover:border-white/20 transition-all shadow-lg"
              as="div"
            >
              Buy RODAI Now
            </Button>
          </a>
          <a
            href={HOW_TO_BUY_YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              className="w-full bg-[#3c1154] hover:bg-[#5a1a7a] text-white font-black px-10 py-6 text-lg border-2 border-transparent hover:border-white/20 transition-all"
              as="div"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Watch Tutorial
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
