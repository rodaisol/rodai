'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { cn } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PaginationOptions, Swiper as SwiperType } from 'swiper/types'

import { AudioPlayer } from '../../components/AudioPlayer'
import { RODAI_TRACKS } from '../../constants'

import { slides } from './slidesConfig'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './styles.css'

export const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperType | undefined>()

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

  const pagination: PaginationOptions = {
    clickable: true,
  }

  return (
    <div
      className={cn(
        'relative h-dvh w-screen overflow-hidden',
        activeSlide.background,
        'bg-center bg-fixed bg-no-repeat bg-cover pb-0 overflow-hidden'
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
              const isActive = i === activeIndex
              let positionX = '0vw'
              const positionY = i === activeIndex ? '1rem' : '-1rem'

              if (i < activeIndex - 1) positionX = '-150vw'
              if (i === activeIndex - 1) positionX = '-50vw'
              if (isActive) positionX = '0vw'
              if (i === activeIndex + 1) positionX = '50vw'
              if (i > activeIndex + 1) positionX = '150vw'

              return (
                <motion.div
                  key={section.id}
                  className="absolute font-bold text-white whitespace-nowrap cursor-pointer"
                  initial={{ x: '-150vw' }}
                  animate={{
                    x: positionX,
                    y: positionY,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                    duration: 0.8,
                  }}
                  onClick={() => swiper?.slideTo(i)}
                >
                  <span
                    className={cn('max-w-3xl', {
                      'text-3xl': !isActive,
                      'md:text-4xl': !isActive,
                      'lg:text-5xl': !isActive,
                      'text-4xl': isActive,
                      'md:text-5xl': isActive,
                      'lg:text-6xl': isActive,
                    })}
                  >
                    {section.label}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <Swiper
          navigation={true}
          pagination={pagination}
          modules={[Navigation, Pagination]}
          onSwiper={setSwiper}
          onSlideChange={(s) => handleSlideChange(s.activeIndex)}
          simulateTouch={false}
          className="flex-1 flex h-full w-full overflow-auto snap-x snap-mandatory scroll-smooth"
        >
          {slides.map((slide, index) => {
            const isActive = activeIndex === index
            const SlideComponent = slide.Component

            return (
              <SwiperSlide key={slide.id}>
                <div className="w-full h-full overflow-auto">
                  <SlideComponent isActive={isActive} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <AudioPlayer tracks={RODAI_TRACKS} />
      </div>
    </div>
  )
}
