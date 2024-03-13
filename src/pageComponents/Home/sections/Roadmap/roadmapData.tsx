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
        completedDate: new Date(2024, 1, 1),
        major: true,
      },
      { task: 'Reach 500 token holders', completedDate: new Date(2024, 1, 28) },
    ],
  },
  {
    phase: 'Phase 2 - Community Growth',
    items: [
      {
        task: 'Get listed on CoinMarketCap',
        completedDate: new Date(2024, 1, 6),
        major: true,
      },
      {
        task: 'Get listed on CoinGecko',
        completedDate: new Date(2024, 2, 12),
        major: true,
      },
      {
        task: 'Get added to the Jupiter Strict List',
        major: true,
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
        completedDate: new Date(2024, 2, 11),
        major: true,
      },
      {
        task: 'Reach 5 million market cap',
        completedDate: new Date(2024, 2, 12),
        major: true,
      },
      {
        task: 'Reach 10 million market cap',
        major: true,
      },
      { task: 'Reach 3,000 token holders', major: true },
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
        task: <span>Launch RODKit&#8482;</span>,
      },
    ],
  },
]
