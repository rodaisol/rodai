'use client'

import { motion } from 'motion/react'
import { FC } from 'react'

import { overviewData } from './overviewData'

export const TokenOverviewSection: FC = () => {
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
            Token Overview
          </h2>
          <div className="w-32 h-1 bg-[#3DDAD8] mx-auto"></div>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewData.map((item, index) => {
            const colors = [
              'bg-[#3DDAD8] text-black',
              'bg-[#f97b55] text-white',
              'bg-[#3c1154] text-white',
            ]
            const colorClass = colors[index % colors.length]

            return (
              <motion.div
                key={index}
                className={`${colorClass} p-8 rounded-2xl border-4 border-white/20 hover:border-white transition-all`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{item.icon}</span>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                </div>
                <ul className="space-y-3 font-medium">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-2">
                      <span className="mt-1 font-black">•</span>
                      <span className="flex-1">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
