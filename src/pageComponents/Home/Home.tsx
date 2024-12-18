'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { cn } from '@nextui-org/react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { slides } from './slidesConfig'

export const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({
      x: -(clientX / window.innerWidth - 0.5) * 30,
      y: -(clientY / window.innerHeight - 0.5) * 30,
    })
  }

  const handleTabClick = (index: number) => {
    scrollContainerRef.current?.scrollTo({
      left: index * window.innerWidth,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    sendGAEvent('event', 'conversion', {
      send_to: 'AW-16587738152/Y02ZCI71prgZEKiY0-U9',
    })

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const { scrollXProgress } = useScroll({ container: scrollContainerRef })
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const intersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    const updatedRatios = entries.map((entry) => ({
      index: slides.findIndex((slide) => slide.id === entry.target.id),
      isActive: entry.isIntersecting,
    }))

    const activeSlide = updatedRatios.find((entry) => entry.isActive)
    if (activeSlide) {
      setActiveIndex(activeSlide.index)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserverCallback, {
      root: scrollContainerRef.current,
      threshold: 0.5,
    })

    slides.forEach((slide) => {
      const element = document.getElementById(slide.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const activeSlide = slides[activeIndex]

  return (
    <div
      className={cn(
        'relative h-dvh w-screen overflow-hidden transition-all duration-1000 ease-out',
        activeSlide.background
      )}
    >
      <div className="w-full h-full flex flex-col">
        {/* Header section */}
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
                  initial={{ x: '150vw' }}
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
                  onClick={() => handleTabClick(i)}
                >
                  <span className="text-4xl md:text-5xl lg:text-6xl max-w-3xl">
                    {section.label}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            style={{
              scaleX,
              transformOrigin: 'left center',
            }}
          />
        </div>

        {/* Main Body */}
        <div
          ref={scrollContainerRef}
          className="flex-1 flex h-full w-full overflow-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {slides.map((slide, index) => {
            const isActive = activeIndex === index
            const SlideComponent = slide.Component

            return (
              <div
                key={slide.id}
                id={slide.id}
                className={cn(
                  'snap-start w-screen flex-shrink-0 flex justify-center items-center'
                )}
              >
                <SlideComponent isActive={isActive} />
              </div>
            )
          })}
        </div>

        <div className="md:hidden">
          {/* Left Arrow Button */}
          <div className="absolute top-0 left-0 w-[10%] h-full bg-transparent cursor-pointer">
            <motion.div
              className="h-full w-full bg-transparent"
              onClick={() => handleTabClick(activeIndex - 1)}
            />
          </div>

          {/* Right Arrow Button */}
          <div className="absolute top-0 right-0 w-[10%] h-full bg-transparent cursor-pointer">
            <motion.div
              className="h-full w-full bg-transparent"
              onClick={() => handleTabClick(activeIndex + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
