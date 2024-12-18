'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { cn } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { slides } from './slidesConfig'

import 'swiper/css'
import 'swiper/css/navigation'

export const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeIndex, setActiveIndex] = useState(0)

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({
      x: -(clientX / window.innerWidth - 0.5) * 30,
      y: -(clientY / window.innerHeight - 0.5) * 30,
    })
  }

  useEffect(() => {
    sendGAEvent('event', 'conversion', {
      send_to: 'AW-16587738152/Y02ZCI71prgZEKiY0-U9',
    })

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSlideChange = (newIndex: number) => {
    setActiveIndex(newIndex)
  }

  const activeSlide = slides[activeIndex]

  return (
    <div
      className={cn(
        'relative h-dvh w-screen overflow-hidden transition-all duration-1000 ease-out',
        activeSlide.background
      )}
    >
      <div className="w-full h-full flex flex-col">
        <div className="relative h-[100px]">
          <motion.div
            className="absolute top-10 w-full flex justify-center items-center pointer-events-auto"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 25,
              duration: 0.8,
            }}
          >
            {slides.map((section, i) => {
              let positionX = '0vw'
              const positionY = i === activeIndex ? '1rem' : '0'

              if (i < activeIndex - 1) positionX = '-150vw'
              if (i === activeIndex - 1) positionX = '-50vw'
              if (i === activeIndex) positionX = '0vw'
              if (i === activeIndex + 1) positionX = '50vw'
              if (i > activeIndex + 1) positionX = '150vw'

              return (
                <motion.div
                  key={section.id}
                  className="absolute font-bold text-white whitespace-nowrap cursor-pointer"
                  initial={{ x: '-150vw' }} // Off-screen to the left initially
                  animate={{
                    x: positionX,
                    y: positionY,
                    opacity: i === activeIndex ? 1 : 0.4,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                    duration: 0.8,
                  }}
                  onClick={() => handleSlideChange(activeIndex)}
                >
                  <span className="text-4xl md:text-5xl lg:text-6xl max-w-3xl">
                    {section.label}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            style={{
              scaleX: activeIndex / slides.length,
              transformOrigin: 'left center',
            }}
          />
        </div>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
          className="flex-1 flex h-full w-full overflow-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {slides.map((slide, index) => {
            const isActive = activeIndex === index
            const SlideComponent = slide.Component

            return (
              <SwiperSlide key={slide.id}>
                <SlideComponent isActive={isActive} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
