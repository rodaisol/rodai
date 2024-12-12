import { Card, Image } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'
import Marquee from 'react-fast-marquee'

// Media configuration with width, unique tilt, and float animations
export const artMedia = [
  {
    src: '/img/rod/wallstreet_rod.png',
    type: 'image',
    aspectRatio: '4 / 3',
    width: 300,
    animation: { rotate: [0, 3, -3, 0], y: [0, -10, 5, 0] },
  },
  {
    src: '/img/rod/wallstreet_rod.png',
    type: 'image',
    aspectRatio: '1 / 1',
    width: 250,
    animation: { rotate: [-2, 2, -1, 2], y: [0, 8, -5, 0] },
  },
  {
    src: '/img/rod/wallstreet_rod.png',
    type: 'video',
    aspectRatio: '16 / 9',
    width: 350,
    animation: { rotate: [0, 1, -1, 0], y: [0, -5, 3, 0] },
  },
  {
    src: '/img/rod/wallstreet_rod.png',
    type: 'image',
    aspectRatio: '3 / 2',
    width: 280,
    animation: { rotate: [1, -1, 2, -2], y: [0, 7, -7, 0] },
  },
]

export const MotionCard = motion.create(Card)

export const ArtMarquee = () => {
  return (
    <Marquee
      speed={70}
      gradient={false}
      pauseOnHover
      pauseOnClick
      className="p-5"
    >
      {artMedia.map((media, index) => (
        <MotionCard
          key={index}
          className="border-none mx-4"
          radius="lg"
          whileHover={{ scale: 1.05 }}
          animate={media.animation}
          shadow="none"
          transition={{
            duration: 6 + index, // Unique timing per media
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            aspectRatio: media.aspectRatio,
            width: media.width || 300, // Fallback width
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
      ))}
    </Marquee>
  )
}
