'use client'

import { motion } from 'framer-motion'

import { Button } from '../../../components/Button'
import {
  AEROSOL_URL,
  TOLY_COMPRESSION_RECOGNITION_POST,
} from '../../../constants'
import { SlideProps } from '../../../types'

export const AerosolSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      id="aerosol"
      className="w-full h-full overflow-hidden py-8 flex flex-col gap-8 items-center justify-start"
    >
      <div className="px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : -50,
          }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 25,
          }}
          className="max-w-4xl text-xl md:text-2xl lg:text-3xl"
        >
          <p className="leading-relaxed">
            Aerosol is a platform that empowers Solana communities with a wide
            range of utilities. It features an AI-powered launchpad, a fully
            featured marketplace, and a burner tool that allows users to reclaim
            their <span className="text-yellow-300">$SOL</span> by cleaning up
            their wallets.
          </p>
          <p className="leading-relaxed mt-6">
            Aerosol has gained a lot of traction since its launch, with
            thousands of weekly users. It has even{' '}
            <a
              href={TOLY_COMPRESSION_RECOGNITION_POST}
              target="_blank"
              className="underline decoration-yellow-300 decoration-[6px] underline-offset-8"
            >
              earned recognition
            </a>{' '}
            from Toly, the co-founder of Solana, for delivering token
            compression features as quickly as possible.
          </p>
        </motion.div>

        <div className="flex gap-3 mt-8 w-full justify-center">
          <a href="/aerosol" target="_blank">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 50,
              }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 30,
                delay: 0.2,
              }}
            >
              <Button variant="bordered" className="border-white text-white">
                See Aerosol Roadmap
              </Button>
            </motion.div>
          </a>

          <a href={AEROSOL_URL} target="_blank">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 50,
              }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 30,
                delay: 0.4,
              }}
            >
              <Button className="flex bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 shadow-lg">
                Go to Aerosol
              </Button>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  )
}
