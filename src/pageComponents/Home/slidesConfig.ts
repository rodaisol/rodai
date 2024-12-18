import { Slide } from '../../types'

import {
  AerosolSlide,
  HowToBuySlide,
  RoadmapSlide,
  RodaiSlide,
  TeamSlide,
  TokenOverviewSlide,
  TokenomicsSlide,
  WelcomeSlide,
} from './slides'

export const slides: Slide[] = [
  {
    id: 'hero',
    label: 'Welcome',
    Component: WelcomeSlide,
    background: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  },
  {
    id: 'rodai',
    label: "What's RODAI?",
    Component: RodaiSlide,
    background: 'bg-gradient-to-r from-indigo-600 to-blue-500',
  },
  {
    id: 'aerosol',
    label: "What's Aerosol?",
    Component: AerosolSlide,
    background: 'bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-500',
  },
  {
    id: 'rodai-overview',
    label: 'Token Overview',
    Component: TokenOverviewSlide,
    background: 'bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600',
  },
  {
    id: 'tokenomics',
    label: 'Tokenomics',
    Component: TokenomicsSlide,
    background:
      'bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500',
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    Component: RoadmapSlide,
    background: 'bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700',
  },
  {
    id: 'how-to-buy',
    label: 'How to Buy',
    Component: HowToBuySlide,
    background: 'bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600',
  },
  {
    id: 'team',
    label: 'Team',
    Component: TeamSlide,
    background: 'bg-gradient-to-r from-red-600 to-pink-400',
  },
]
