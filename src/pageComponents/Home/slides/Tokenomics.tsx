'use client'

import { ResponsivePie } from '@nivo/pie'

const pieData = [
  { id: 'Liquidity Pool', value: 80, color: '#3B82F6' },
  { id: 'Team', value: 15, color: '#F97316' },
  { id: 'DAO', value: 2, color: '#10B981' },
  { id: 'Airdrops', value: 3, color: '#E879F9' },
]

export const TokenomicsSlide = () => {
  return (
    <section
      id="tokenomics"
      className="flex flex-col items-center justify-center w-full h-full p-8"
    >
      <h2 className="text-xl lg:text-2xl font-bold mb-2">Total Supply</h2>
      <p className="text-3xl lg:text-5xl font-extrabold text-orange-400 mb-6">
        69.42 Trillion
      </p>

      <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] max-w-[800px]">
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#FFFFFF',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#fff',
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </section>
  )
}
