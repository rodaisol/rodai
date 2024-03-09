import { ReactNode } from 'react'

interface RoadmapItem {
  task: ReactNode
  completed: boolean
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
      { task: 'Create website', completed: true },
      { task: 'Create Social Media accounts', completed: true },
      { task: 'Mint token', completed: true },
      { task: 'Revoke mint authority', completed: true },
      { task: 'Create OpenBook Market', completed: true },
      { task: 'Create Liquidity Pool', completed: true },
      { task: 'Lock liquidity', completed: true },
      { task: 'Reach 3,000 social media followers', completed: true },
      { task: 'Reach 100k market cap', completed: true, major: true },
      { task: 'Reach 500 token holders', completed: true },
    ],
  },
  {
    phase: 'Phase 2 - Community Growth',
    items: [
      { task: 'Get listed on CoinMarketCap', completed: true, major: true },
      { task: 'Get listed on CoinGecko', completed: false, major: true },
      {
        task: 'Get added to the Jupiter Strict List',
        completed: false,
        major: true,
      },
      {
        task: 'Establish solid partnerships with KOLs',
        completed: false,
      },
      {
        task: 'Reach 10,000 social media followers',
        completed: false,
        major: true,
      },
      {
        task: 'Reach 1 million market cap',
        completed: true,
        major: true,
      },
      { task: 'Reach 3,000 token holders', completed: false, major: true },
    ],
  },
  {
    phase: 'Phase 3 - Utility 🚀',
    items: [
      {
        task: 'Reach 50,000 social media followers',
        completed: false,
        major: true,
      },
      { task: 'Reach 50 million market cap', completed: false, major: true },
      { task: 'Reach 10,000 token holders', completed: false, major: true },
      {
        task: 'Get listed on centralized exchanges',
        completed: false,
        major: true,
      },
      {
        task: <span>Launch RODKit&#8482;</span>,
        completed: false,
      },
    ],
  },
]
