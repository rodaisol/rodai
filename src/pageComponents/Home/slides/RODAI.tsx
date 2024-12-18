'use client'

import { ScrollShadow } from '@nextui-org/react'
import { motion } from 'framer-motion'

import { ArtMarquee } from '../../../components/ArtMarquee'
import { AEROSOL_URL } from '../../../constants'
import { SlideProps } from '../../../types'

export const RodaiSlide = ({ visibilityRatio }: SlideProps) => {
  return (
    <section
      id="about"
      className="w-full h-full overflow-hidden py-8 flex flex-col gap-4 items-center justify-start"
    >
      <div className="px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: visibilityRatio,
            y: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          className="max-w-4xl text-2xl md:text-3xl text-center"
        >
          <p className="leading-relaxed">
            <span className="text-yellow-300">$RODAI</span> is the AI meme token
            of the{' '}
            <a href={AEROSOL_URL} target="_blank" className="text-yellow-300">
              Aerosol platform
            </a>
            .
          </p>
          <p className="leading-relaxed mt-6">
            It is a <span className="text-yellow-300">deflationary</span> token
            that is burned with each transaction done within Aerosol.
          </p>
          <p className="leading-relaxed mt-6">
            $RODAI is also the{' '}
            <span className="text-yellow-300">first AI meme token</span> of
            Solana.
          </p>
        </motion.div>
      </div>
      <motion.div
        style={{
          y: (1 - visibilityRatio) * 200,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
        className="w-full flex justify-center items-center"
      >
        <ScrollShadow orientation="horizontal">
          <ArtMarquee />
        </ScrollShadow>
      </motion.div>
    </section>
  )
}
