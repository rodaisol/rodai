import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface RoadmapItem {
  task: ReactNode
  completedDate?: Date
  major?: boolean
}

interface RoadmapPhase {
  name: string
  items: RoadmapItem[]
}

export const roadmapData: RoadmapPhase[] = [
  {
    name: 'Setup & Launch',
    items: [
      { task: 'Create website', completedDate: new Date(2024, 0, 10) },
      {
        task: 'Create Social Media accounts',
        completedDate: new Date(2024, 0, 10),
      },
      { task: 'Mint token', completedDate: new Date(2024, 0, 10) },
      { task: 'Revoke mint authority', completedDate: new Date(2024, 0, 11) },
      { task: 'Create OpenBook Market', completedDate: new Date(2024, 0, 13) },
      { task: 'Create Liquidity Pool', completedDate: new Date(2024, 0, 13) },
      { task: 'Lock liquidity', completedDate: new Date(2024, 0, 13) },
      {
        task: 'Reach 3,000 social media followers',
        completedDate: new Date(2024, 1, 2),
      },
      {
        task: 'Reach 100k market cap',
        major: true,
        completedDate: new Date(2024, 1, 1),
      },
      { task: 'Reach 500 token holders', completedDate: new Date(2024, 1, 28) },
    ],
  },
  {
    name: 'Community Growth',
    items: [
      {
        task: 'Get listed on CoinMarketCap',
        major: true,
        completedDate: new Date(2024, 1, 6),
      },
      {
        task: 'Get MC and CS verified by CoinMarketCap',
        major: true,
        completedDate: new Date(2024, 3, 26),
      },
      {
        task: 'Get listed on CoinGecko',
        major: true,
        completedDate: new Date(2024, 2, 12),
      },
      {
        task: 'Get MC and CS verified by CoinGecko',
        major: true,
        completedDate: new Date(2024, 3, 13),
      },
      {
        task: 'Get added to the Jupiter Strict List',
        major: true,
        completedDate: new Date(2024, 2, 14),
      },
      {
        task: 'Establish solid partnerships with KOLs',
      },
      {
        task: 'Reach 10,000 social media followers',
        major: true,
      },
      {
        task: 'Reach 1 million market cap',
        major: true,
        completedDate: new Date(2024, 2, 9),
      },
      {
        task: 'Reach 5 million market cap',
        major: true,
        completedDate: new Date(2024, 2, 12),
      },
      {
        task: 'Reach 10 million market cap',
        major: true,
      },
      {
        task: 'Reach 3,000 token holders',
        major: true,
        completedDate: new Date(2024, 2, 13),
      },
    ],
  },
  {
    name: 'Utility 🚀',
    items: [
      {
        task: 'Reach 50,000 social media followers',
        major: true,
      },
      {
        task: 'Reach 25 million market cap',
        major: true,
      },
      {
        task: 'Reach 50 million market cap',
        major: true,
      },
      { task: 'Reach 10,000 token holders', major: true },
      {
        task: 'Get listed on centralized exchanges',
        major: true,
        completedDate: new Date(2024, 2, 30),
      },
      {
        task: 'Start burning $RODAI periodically',
        major: true,
        completedDate: new Date(2024, 7, 26),
      },
      {
        major: true,
        completedDate: new Date(2024, 5, 4),
        task: (
          <Link href="/aerosol" target="blank" className="flex">
            <div className="flex items-center w-full">
              <div className="flex items-center">
                <Image
                  src="/img/aerosol/logo-horizontal-dark.png"
                  alt="Aerosol logo"
                  width={108}
                  height={27}
                />
              </div>
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </div>
          </Link>
        ),
      },
    ],
  },
]
