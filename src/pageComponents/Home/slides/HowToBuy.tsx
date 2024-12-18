'use client'

import { PlayIcon } from '@heroicons/react/20/solid'
import { motion } from 'motion/react'
import React from 'react'

import { Button } from '../../../components/Button'
import { BuyDropdown } from '../../../components/BuyDropdown'
import { HOW_TO_BUY_YOUTUBE_URL } from '../../../constants'
import { SlideProps } from '../../../types'

export const HowToBuySlide = ({ isActive }: SlideProps) => {
  return (
    <section
      id="how-to-buy"
      className="w-full h-full overflow-hidden py-8 flex flex-col gap-8 items-center justify-start"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : -50,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
        className="px-8 max-w-4xl text-2xl md:text-3xl text-center"
      >
        <p className="leading-relaxed mt-6">
          To buy RODAI, get the{' '}
          <span className="font-bold text-yellow-400">Phantom</span> or{' '}
          <span className="font-bold text-yellow-400">Solflare</span> wallet app
          and use a decentralized exchange such as{' '}
          <span className="font-bold text-yellow-400">Jupiter</span> or{' '}
          <span className="font-bold text-yellow-400">Raydium</span> to swap
          your existing tokens for RODAI.
        </p>
        <p className="leading-relaxed mt-6">
          RODAI is also listed on centralized exchanges like{' '}
          <span className="font-bold text-yellow-400">MEXC</span> and{' '}
          <span className="font-bold text-yellow-400">SolCex</span>, where it
          can be bought directly.
        </p>
        <p className="leading-relaxed mt-6">
          We have prepared a step-by-step video guide to help you through the
          process.
        </p>
      </motion.div>

      <motion.div
        style={{
          y: isActive ? (1 - 1) * 200 : (1 - 0) * 200,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
        className="w-full flex justify-center items-center mt-8"
      >
        <div className="flex justify-center gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 50,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 30,
              delay: 0.2,
            }}
          >
            <BuyDropdown />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 50,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 30,
              delay: 0.4,
            }}
          >
            <a href={HOW_TO_BUY_YOUTUBE_URL} target="_blank">
              <Button
                variant="shadow"
                color="secondary"
                className="border-white"
              >
                <PlayIcon className="w-6 h-6 mr-2" />
                Watch Tutorial
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
