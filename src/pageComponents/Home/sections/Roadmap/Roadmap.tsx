'use client'

import { Tooltip } from '@heroui/react'
import { DateTime } from 'luxon'
import { AnimatePresence, motion } from 'motion/react'
import { FC, useState } from 'react'

import { ProiconsCheckboxChecked } from '@/icons/ProiconsCheckboxChecked'
import { ProiconsCheckboxUnchecked } from '@/icons/ProiconsCheckboxUnchecked'

import { roadmapData } from './roadmapData'

export const RoadmapSection: FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(1)

  const handleTabClick = (index: number) => {
    if (index !== activePhaseIndex) {
      setActivePhaseIndex(index)
    }
  }

  return (
    <div className="w-full py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6">
            Roadmap
          </h2>
          <div className="w-32 h-1 bg-[#3c1154] mx-auto"></div>
        </motion.div>

        {/* Phase Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-4 mb-12"
        >
          {roadmapData.map((phase, index) => (
            <motion.button
              key={phase.name}
              onClick={() => handleTabClick(index)}
              className={`px-8 py-4 rounded-xl font-black text-lg transition-all ${
                index === activePhaseIndex
                  ? 'bg-[#3c1154] text-white'
                  : 'bg-white/30 backdrop-blur-sm text-[#3c1154] hover:bg-white/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Phase {index + 1}
            </motion.button>
          ))}
        </motion.div>

        {/* Roadmap Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhaseIndex}
            className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <motion.h3
              className="font-black text-3xl mb-6 text-center text-[#3c1154]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {roadmapData[activePhaseIndex].name}
            </motion.h3>

            <motion.ul
              className="list-none m-0 p-0 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
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
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: itemIndex * 0.05 + 0.3,
                      duration: 0.3,
                    }}
                  >
                    {item.completedDate ? (
                      <div className="w-6 h-6 shrink-0 translate-y-[0.5px] [&_svg]:w-full [&_svg]:h-full [&_rect]:fill-[#3c1154] [&_rect]:stroke-[#3c1154]">
                        <ProiconsCheckboxChecked />
                      </div>
                    ) : (
                      <div className="w-6 h-6 shrink-0 translate-y-[0.5px] [&_svg]:w-full [&_svg]:h-full [&_rect]:stroke-[#3c1154]">
                        <ProiconsCheckboxUnchecked />
                      </div>
                    )}
                    <span className="flex items-center flex-1">
                      {item.completedDate ? (
                        <Tooltip
                          content={tooltipContent}
                          showArrow
                          placement="right-start"
                          classNames={{
                            content: 'bg-[#3c1154] text-white',
                          }}
                        >
                          <span className="cursor-pointer transition-colors text-[#3c1154] font-bold">
                            {item.task}
                          </span>
                        </Tooltip>
                      ) : (
                        <span className="transition-colors text-[#3c1154] font-bold">
                          {item.task}
                        </span>
                      )}
                    </span>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
