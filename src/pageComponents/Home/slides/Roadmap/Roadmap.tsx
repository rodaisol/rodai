'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { Tooltip } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { DateTime } from 'luxon'
import Image from 'next/image'
import { FC, useState } from 'react'

import { SlideProps } from '../../../../types'

import { roadmapData } from './roadmapData'

export const RoadmapSlide: FC<SlideProps> = ({ visibilityRatio }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0)

  const handleTabClick = (index: number) => {
    if (index !== activePhaseIndex) {
      setActivePhaseIndex(index)
    }
  }

  const getBackgroundStyle = (completedTasks: number, totalTasks: number) => {
    const completionRate = (completedTasks / totalTasks) * 100
    return {
      backgroundImage: `linear-gradient(to top, #2980b9 0%, #3498db ${completionRate}%, transparent ${completionRate}%)`,
    }
  }

  return (
    <section
      id="roadmap"
      className="px-4 py-8 md:px-8 md:py-8 flex flex-col gap-2 w-full h-full text-white items-center"
    >
      <div className="flex gap-8 mb-6">
        {roadmapData.map((phase, index) => (
          <motion.button
            key={phase.name}
            onClick={() => handleTabClick(index)}
            className={`text-lg md:text-xl font-bold px-6 py-2 rounded-lg transition transform ${
              index === activePhaseIndex
                ? 'underline decoration-4 decoration-yellow-400 underline-offset-8 text-white scale-105'
                : 'hover:text-white scale-100 opacity-70'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {`Phase ${index + 1}`}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePhaseIndex}
          className="border-2 rounded-lg p-6 pt-0 max-w-md w-full"
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 50,
          }}
          animate={{
            opacity: visibilityRatio,
            scale: 1,
            y: 0,
            backgroundImage: getBackgroundStyle(
              roadmapData[activePhaseIndex].items.filter(
                (item) => item.completedDate
              ).length,
              roadmapData[activePhaseIndex].items.length
            ).backgroundImage,
            transition: {
              opacity: { duration: 0.3 },
              backgroundImage: { duration: 1, ease: 'easeInOut' },
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: -50,
            transition: {
              type: 'spring',
              stiffness: 800,
              damping: 40,
              duration: 0.5,
            },
          }}
        >
          <motion.h3
            className="font-bold text-lg md:text-xl mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: visibilityRatio,
              y: visibilityRatio * 20,
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {roadmapData[activePhaseIndex].name}
          </motion.h3>

          <motion.ul
            className="list-none m-0 p-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: visibilityRatio,
            }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            {roadmapData[activePhaseIndex].items.map((item, itemIndex) => {
              const formattedDate = item.completedDate
                ? DateTime.fromJSDate(item.completedDate).toFormat(
                    'LLL dd, yyyy'
                  )
                : ''
              const tooltipContent = item.completedDate
                ? `Completed on ${formattedDate}`
                : ''

              return (
                <motion.li
                  key={itemIndex}
                  className={`flex items-center gap-2 mb-2 ${
                    !item.completedDate ? 'opacity-50' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: visibilityRatio,
                    y: visibilityRatio * 20,
                  }}
                  transition={{
                    delay: itemIndex * 0.2 + 0.5,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  {item.completedDate ? (
                    <CheckIcon className="w-6 h-6" />
                  ) : (
                    <div className="w-6 h-6"></div>
                  )}
                  <span className="flex items-center">
                    {item.completedDate && item.major ? (
                      <>
                        <Tooltip
                          content="Major milestone"
                          showArrow
                          placement="top"
                        >
                          <div className="animate-major-milestone-icon-levitate mr-2 cursor-pointer">
                            <Image
                              src="/img/icons/milestone.svg"
                              alt="Milestone"
                              width={20}
                              height={20}
                            />
                          </div>
                        </Tooltip>
                        <Tooltip
                          content={tooltipContent}
                          showArrow
                          placement="right-start"
                        >
                          <strong className="cursor-pointer text-yellow-400">
                            {item.task}
                          </strong>
                        </Tooltip>
                      </>
                    ) : (
                      <>
                        {item.completedDate ? (
                          <Tooltip
                            content={tooltipContent}
                            showArrow
                            placement="right-start"
                          >
                            <span className="cursor-pointer">{item.task}</span>
                          </Tooltip>
                        ) : (
                          <span>{item.task}</span>
                        )}
                      </>
                    )}
                  </span>
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
