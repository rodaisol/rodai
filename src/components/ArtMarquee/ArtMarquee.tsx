import { Card, Image } from '@nextui-org/react'
import { motion, useAnimationFrame } from 'framer-motion'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

import { getRandomizedMedia } from './mediaConfig'

export const MotionCard = motion(Card)

const mediaList = getRandomizedMedia()

export const ArtMarquee = () => {
  const [tilts, setTilts] = useState(mediaList.map(() => ({ rotate: 0, y: 0 })))

  useAnimationFrame((time) => {
    setTilts(
      mediaList.map((_, index) => ({
        y: Math.sin(time / 2000 + index * 0.5) * 5,
        rotate: Math.sin(time / 1500 + index * 0.7) * 2,
      }))
    )
  })

  return (
    <Marquee
      speed={100}
      gradient={false}
      pauseOnHover
      pauseOnClick
      className="p-5"
    >
      {mediaList.map((media, index) => (
        <motion.div
          key={index}
          animate={tilts[index]}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 20,
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="mx-4"
        >
          <MotionCard
            className="border-none max-w-[200px] sm:max-w-[300px]"
            radius="lg"
            whileHover={{ scale: 1.1 }}
            shadow="none"
            style={{
              aspectRatio: media.aspectRatio,
              width: media.width,
              overflow: 'hidden',
            }}
          >
            {media.type === 'image' ? (
              <Image
                src={media.src}
                alt={`Art media ${index + 1}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            )}
          </MotionCard>
        </motion.div>
      ))}
    </Marquee>
  )
}
