'use client'

import { Snippet } from '@nextui-org/react'
import { motion, useAnimationFrame } from 'framer-motion'
import Image from 'next/image'
import { FC, MouseEventHandler, useState } from 'react'

import { RODAI_MINT_ADDRESS } from '../../../app/contants'
import { Button } from '../../../components/Button'
import { BuyDropdown } from '../../../components/BuyDropdown'
import { ChartSelector } from '../../../components/ChartSelector'
import { SocialLinks } from '../../../components/SocialLinks'
import { AEROSOL_URL } from '../../../constants'
import { SlideProps } from '../../../types'

export const WelcomeSlide: FC<SlideProps> = ({
  direction,
  visibilityRatio,
}) => {
  const [rodPosition, setRodPosition] = useState({ x: 0, y: 0 })
  const [aerosolPosition, setAerosolPosition] = useState({ x: 0, y: 0 })

  const [levitationRod, setLevitationRod] = useState({ x: 0, y: 0, rotate: 0 })
  const [levitationAerosol, setLevitationAerosol] = useState({
    x: 0,
    y: 0,
    rotate: 0,
  })

  const handleMouseMove: MouseEventHandler = (e) => {
    const xOffset = (e.clientX / window.innerWidth - 0.5) * 20
    const yOffset = (e.clientY / window.innerHeight - 0.5) * 20

    setRodPosition((prev) => ({
      x: prev.x + (xOffset - prev.x) * 0.1,
      y: prev.y + (yOffset - prev.y) * 0.1,
    }))

    setAerosolPosition((prev) => ({
      x: prev.x + (-xOffset - prev.x) * 0.1,
      y: prev.y + (-yOffset - prev.y) * 0.1,
    }))
  }

  useAnimationFrame((time) => {
    setLevitationRod({
      x: Math.sin(time / 1000) * 5,
      y: Math.cos(time / 800) * 5,
      rotate: Math.sin(time / 1500) * 3,
    })

    setLevitationAerosol({
      x: Math.sin(time / 1200) * 7,
      y: Math.cos(time / 900) * 7,
      rotate: Math.cos(time / 1800) * 5,
    })
  })

  const getImageAnimation = (offset: number) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: visibilityRatio,
      scale: visibilityRatio * 0.7 + 0.5,
      x:
        direction === 'right'
          ? -offset * (1 - visibilityRatio)
          : offset * (1 - visibilityRatio),
    },
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  })

  return (
    <section
      className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center p-4 lg:p-8 max-w-screen-xl mx-auto"
      onMouseMove={handleMouseMove}
    >
      <div className="flex gap-8 justify-center items-center w-full">
        <motion.div
          initial="initial"
          animate="animate"
          variants={getImageAnimation(150)}
          className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[280px] xl:w-[340px]"
        >
          <motion.div
            style={{
              x: rodPosition.x + levitationRod.x,
              y: rodPosition.y + levitationRod.y,
              rotate: levitationRod.rotate,
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 15,
            }}
          >
            <Image
              src="/img/rod/hero-rod.png"
              alt="RODAI logo"
              width={600}
              height={600}
              className="w-full rounded-full border-4 bg-[#fbc063] border-white"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={getImageAnimation(150)}
          className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[260px] xl:w-[320px]"
        >
          <motion.div
            style={{
              x: aerosolPosition.x + levitationAerosol.x,
              y: aerosolPosition.y + levitationAerosol.y,
              rotate: levitationAerosol.rotate,
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 15,
            }}
          >
            <a href={AEROSOL_URL} target="_blank">
              <Image
                src="/img/aerosol/aerosol-logo.png"
                alt="Aerosol logo"
                width={500}
                height={500}
                className="w-full"
                draggable={false}
              />
            </a>{' '}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: visibilityRatio,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
        className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">Meet</h2>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold">
          ROD<span className="text-yellow-300">AI</span>
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl leading-10">
          The deflationary meme token of the{' '}
          <a
            href={AEROSOL_URL}
            target="_blank"
            className="underline decoration-yellow-300 decoration-[8px] underline-offset-8"
          >
            Aerosol platform
          </a>
          {'.'}
        </p>
        <div className="text-xl italic px-3 mt-2">
          Launched on January 13th, 2024
        </div>
        <div className="w-full overflow-hidden mt-2 px-8 sm:px-0">
          <Snippet
            id="token-address-snippet"
            size="md"
            hideSymbol
            className="w-full max-w-[500px]"
          >
            {RODAI_MINT_ADDRESS}
          </Snippet>
        </div>
        <div className="flex flex-col gap-4 mt-6 lg:mt-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <BuyDropdown />
            <a target="_blank" href="https://t.me/rodaisol">
              <Button color="primary" className="text-white">
                Join Us
              </Button>
            </a>
            <ChartSelector />
          </div>
          <SocialLinks className="justify-center lg:justify-start" />
        </div>
        <p className="text-2xl sm:text-3xl lg:text-4xl mt-8">
          Buy a memecoin,{' '}
          <span className="underline decoration-yellow-300 decoration-[8px] underline-offset-8">
            own a company.
          </span>
        </p>
      </motion.div>
    </section>
  )
}
