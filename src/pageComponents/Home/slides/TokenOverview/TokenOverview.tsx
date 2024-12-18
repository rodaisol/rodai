'use client'

import { cn } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'

import { SlideProps } from '../../../../types'

import { overviewData } from './overviewData'

export const TokenOverviewSlide = ({ isActive }: SlideProps) => {
  return (
    <div
      className={cn(
        'token-overview',
        isActive ? 'opacity-100' : 'opacity-0',
        'transition-opacity duration-800 ease-in-out',
        'p-8'
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {overviewData.map((item, index) => (
          <motion.div
            key={index}
            className={cn(
              'bg-gray-100',
              'p-6 rounded-3xl shadow-lg text-black'
            )}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
            </div>
            <div className="space-y-4 text-left text-lg">
              <ul className="list-disc pl-6">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
