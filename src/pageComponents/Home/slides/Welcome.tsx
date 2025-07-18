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
import { SwipeIndicator } from '../../../components/SwipeIndicator'
import { AEROSOL_URL } from '../../../constants'
import { SlideProps } from '../../../types'

export const WelcomeSlide: FC<SlideProps> = ({ isActive }) => {
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

  return (
    <section
      className="w-full h-full flex flex-col lg:flex-row gap-8 justify-start items-center p-4 py-12 lg:p-8 mx-auto"
      onMouseMove={handleMouseMove}
    >
      <div className="flex gap-8 justify-center items-center w-full">
        {/* RODAI Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.8,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className="w-[120px] sm:w-[160px] md:w-[220px] lg:w-[280px] xl:w-[340px]"
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

        {/* Aerosol Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.8,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className="w-[100px] sm:w-[160px] md:w-[200px] lg:w-[260px] xl:w-[320px]"
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
                src="/img/aerosol/logo-icon.png"
                alt="Aerosol logo"
                width={500}
                height={500}
                className="w-full"
                draggable={false}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Text and Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 50,
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
          The deflationary meme token of{' '}
          <a href={AEROSOL_URL} target="_blank" className="text-yellow-300 ">
            Aerosol
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
        <div className="md:hidden mt-8">
          <SwipeIndicator label="Swipe to learn more" />
        </div>
      </motion.div>
    </section>
  )
}
