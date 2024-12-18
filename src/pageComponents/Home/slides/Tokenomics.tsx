'use client'

import { ResponsivePie } from '@nivo/pie'
import { motion } from 'framer-motion'

import { SlideProps } from '../../../types'

const pieData = [
  { id: 'Liquidity', value: 80, color: '#0096FF' },
  { id: 'Team', value: 15, color: '#F97316' },
  { id: 'DAO', value: 2, color: '#10B981' },
  { id: 'Airdrops', value: 3, color: '#E879F9' },
]

export const TokenomicsSlide = ({ isActive }: SlideProps) => {
  return (
    <section
      id="tokenomics"
      className="flex flex-col items-center justify-start w-full h-full p-8 pt-0"
    >
      <motion.h2
        className="text-xl lg:text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 40 : -50,
        }}
        exit={{
          opacity: 0,
          y: 50,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 25,
        }}
      >
        Total Supply
      </motion.h2>

      <motion.p
        className="text-3xl lg:text-5xl font-extrabold text-yellow-300 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 20 : -50,
        }}
        exit={{
          opacity: 0,
          y: 50,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 25,
          delay: 0.3,
        }}
      >
        69.42 Trillion
      </motion.p>

      <motion.div
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:flex lg:justify-start gap-6 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : -50,
        }}
        exit={{
          opacity: 0,
          y: 50,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 25,
          delay: 0.7,
        }}
      >
        {pieData.map((datum, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              style={{ backgroundColor: datum.color }}
              className="w-6 h-6 rounded-full"
            ></div>
            <span className="text-lg">
              {datum.id}: {datum.value}%
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="mt-4 w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] max-w-[800px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : -50,
        }}
        exit={{
          opacity: 0,
          y: 50,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
          delay: 0.5,
        }}
      >
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 16, bottom: 40, left: 16 }}
          innerRadius={0.6}
          padAngle={1}
          cornerRadius={4}
          activeOuterRadiusOffset={10}
          borderWidth={2}
          borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
          colors={{ datum: 'data.color' }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#FFFFFF"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={5}
          arcLabelsTextColor="#FFFFFF"
          arcLabel={({ data }) => `${data.value}%`}
          tooltip={({ datum }) => (
            <div
              style={{
                padding: '6px 12px',
                color: '#FFFFFF',
                background: datum.color,
                borderRadius: '4px',
              }}
            >
              {datum.id}: {datum.value}%
            </div>
          )}
        />
      </motion.div>
    </section>
  )
}
