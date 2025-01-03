'use client'

import { motion } from 'motion/react'
import React from 'react'

import {
  BRIAN_PHANTOM_RECOGNITION_POST,
  PHANTOM_EMBEDDED_WALLET_COLLAB_POST,
  TOLY_COMPRESSION_RECOGNITION_POST,
} from '../../../constants'
import type { SlideProps } from '../../../types'

export const RecognitionSlide: React.FC<SlideProps> = ({ isActive }) => {
  const recognitions = [
    {
      url: TOLY_COMPRESSION_RECOGNITION_POST,
      img: '/img/recognition/toly-recognition-post.png',
      caption:
        'Recognition from Anatoly Yakovenko, co-founder of Solana for delivering ZK compression to our burner.',
    },
    {
      url: PHANTOM_EMBEDDED_WALLET_COLLAB_POST,
      img: '/img/recognition/phantom-collaboration-post.png',
      caption: 'Collaboration with Phantom on their Embedded Wallet feature.',
    },
    {
      url: BRIAN_PHANTOM_RECOGNITION_POST,
      img: '/img/recognition/brain-phantom-recognition-post.png',
      caption: 'Compliment from Brian Friel from the Phantom team.',
    },
  ]

  return (
    <section
      id="recognition"
      className="w-full h-full py-8 flex flex-col gap-6 items-center justify-start"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : -30,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="px-8 max-w-4xl text-2xl md:text-3xl text-center"
      >
        <p className="leading-relaxed mt-6">
          Below you can see recognition we have received within the Solana
          ecosystem.
        </p>
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 30,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {recognitions.map((rec, index) => (
          <motion.a
            key={index}
            href={rec.url}
            target="_blank"
            className="flex flex-col items-center text-center group transition-transform rounded-lg shadow-lg overflow-hidden bg-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 40,
            }}
            whileHover={{
              scale: 1.12,
              rotate: 2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 14,
            }}
          >
            <motion.div
              className="px-4 py-2 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 20,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18,
                delay: 0.05 * index,
              }}
            >
              <p className="text-base font-medium text-gray-800 leading-snug">
                {rec.caption}
              </p>
            </motion.div>

            <img
              src={rec.img}
              alt={rec.caption}
              className="rounded-b-lg w-full"
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
