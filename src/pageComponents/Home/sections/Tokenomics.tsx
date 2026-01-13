'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { motion } from 'motion/react'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import { RODAI_MINT_ADDRESS } from '../../../app/contants'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const distributionData = [
  { title: 'Liquidity', value: 80, color: '#f97b55' },
  { title: 'DAO', value: 2, color: '#3c1154' },
  { title: 'Team', value: 15, color: '#9D6FC7' },
  { title: 'Airdrops', value: 3, color: '#FFFFFF' },
]

const treemapSeries = [
  {
    data: distributionData.map((item) => ({
      x: item.title,
      y: item.value,
    })),
  },
]

const treemapOptions = {
  legend: {
    show: false,
  },
  chart: {
    type: 'treemap' as const,
    toolbar: {
      show: false,
    },
  },
  colors: distributionData.map((item) => item.color),
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false,
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      colors: [
        function (opts: {
          dataPointIndex: number
          w: {
            globals: {
              colors: string[]
            }
          }
        }) {
          // Get the background color for this data point
          const bgColor = opts.w.globals.colors[opts.dataPointIndex]
          // Return purple for white background (#FFFFFF), white for others
          return bgColor === '#FFFFFF' ? '#3c1154' : '#fff'
        },
      ],
    },
    formatter: (
      value: number,
      opts: {
        seriesIndex: number
        dataPointIndex: number
        w: {
          config: {
            series: Array<{
              data: Array<{ x: string; y: number }>
            }>
          }
        }
      }
    ) => {
      // Access the x (title) and y (value) from the data point
      const dataPoint =
        opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
      const title = dataPoint?.x ?? ''
      const percentage = dataPoint?.y ?? value
      return `${title}\n${percentage}%`
    },
  },
  tooltip: {
    theme: 'dark',
    style: {
      fontSize: '14px',
      fontFamily: 'sans-serif',
      color: '#fff',
    },
    fillSeriesColor: false,
    y: {
      formatter: (value: number) => `${value}%`,
    },
  },
}

export const TokenomicsSection: FC = () => {
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
            Tokenomics
          </h2>
          <div className="w-32 h-1 bg-[#3c1154] mx-auto"></div>
        </motion.div>

        {/* Cards Grid - Side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Max Supply and Distribution Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#60E7E5] p-8 rounded-2xl flex flex-col"
          >
            {/* Max Supply Section */}
            <div className="flex flex-col mb-8">
              <p className="text-sm font-bold text-[#3c1154] uppercase tracking-wider mb-4">
                Max Supply
              </p>
              <p className="text-4xl sm:text-5xl font-black text-[#3c1154] mb-4 font-edgisp">
                69.42 Trillion
              </p>
              <p className="text-sm text-[#3c1154] font-medium mb-6">
                Fixed supply with no mint authority. Liquidity pool locked for
                30 years.
              </p>
              <a
                href={`https://solscan.io/token/${RODAI_MINT_ADDRESS}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-white/90 rounded-lg transition-colors text-sm font-medium text-[#3c1154]"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#3c1154]" />
                Check Current Supply on Solscan
              </a>
            </div>

            {/* Distribution Legend */}
            <div className="mt-auto">
              <p className="text-sm font-black text-[#3c1154] uppercase tracking-wider mb-6">
                Distribution
              </p>
              <div className="space-y-4">
                {distributionData.map((datum, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        style={{ backgroundColor: datum.color }}
                        className="w-6 h-6 rounded-full border-2 border-white"
                      />
                      <span className="text-base font-bold text-[#3c1154]">
                        {datum.title}
                      </span>
                    </div>
                    <span className="text-lg font-black text-[#3c1154]">
                      {datum.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Treemap Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#60E7E5] p-8 rounded-2xl"
          >
            <p className="text-sm font-black text-[#3c1154] uppercase tracking-wider mb-6">
              Allocation Visualization
            </p>
            <div className="w-full">
              <ReactApexChart
                options={treemapOptions}
                series={treemapSeries}
                type="treemap"
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
