import Link from 'next/link'
import { ReactNode } from 'react'

interface RoadmapItem {
  task: ReactNode
  completedDate?: Date
  major?: boolean
}

interface RoadmapPhase {
  phase: string
  items: RoadmapItem[]
}

export const roadmapData: RoadmapPhase[] = [
  {
    phase: 'Phase 1 - Setup & Launch',
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
    phase: 'Phase 2 - Community Growth',
    items: [
      {
        task: 'Get listed on CoinMarketCap',
        major: true,
        completedDate: new Date(2024, 1, 6),
      },
      {
        task: 'Get MC and CS verified by CoinMarketCap',
        major: true,
      },
      {
        task: 'Get listed on CoinGecko',
        major: true,
        completedDate: new Date(2024, 2, 12),
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
        completedDate: new Date(2024, 2, 11),
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
    phase: 'Phase 3 - Utility 🚀',
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
      },
      {
        task: <Link href="/rodkit-roadmap">Launch RODKit&#8482;</Link>,
      },
    ],
  },
]
