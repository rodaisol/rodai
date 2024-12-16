'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { Tooltip } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { DateTime } from 'luxon'
import Image from 'next/image'
import { FC, useState } from 'react'

import { SlideProps } from '../../../../types'

import { roadmapData } from './roadmapData'

export const RoadmapSlide: FC<SlideProps> = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0)

  const handleTabClick = (index: number) => {
    if (index !== activePhaseIndex) {
      setActivePhaseIndex(index)
    }
  }

  const getBackgroundStyle = (completedTasks: number, totalTasks: number) => {
    const completionRate = (completedTasks / totalTasks) * 100
    return {
      backgroundImage: `linear-gradient(to top, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.5) ${completionRate}%, transparent ${completionRate}%)`,
    }
  }

  return (
    <section
      id="roadmap"
      className="px-4 py-8 md:px-8 md:py-8 flex flex-col gap-2 w-full h-full mt-32 text-white items-center"
    >
      <div className="flex gap-8 mb-6">
        {roadmapData.map((phase, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`text-lg md:text-xl font-bold px-6 py-2 rounded-lg transition ${
              index === activePhaseIndex
                ? 'underline underline-offset-8 decoration-4 decoration-indigo-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {`Phase ${index + 1}`}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePhaseIndex}
          className="border-2 rounded-lg p-6 max-w-md w-full"
          style={getBackgroundStyle(
            roadmapData[activePhaseIndex].items.filter(
              (item) => item.completedDate
            ).length,
            roadmapData[activePhaseIndex].items.length
          )}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 800,
              damping: 40,
              duration: 0.5,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: -50,
          }}
        >
          <h3 className="font-bold text-lg md:text-xl mb-4 text-center">
            {roadmapData[activePhaseIndex].name}
          </h3>

          <ul className="list-none m-0 p-0">
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
                <li
                  key={itemIndex}
                  className={`flex items-center gap-2 mb-2 ${
                    !item.completedDate ? 'opacity-50' : ''
                  }`}
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
                          <strong className="cursor-pointer text-[#fcd425]">
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
                </li>
              )
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
