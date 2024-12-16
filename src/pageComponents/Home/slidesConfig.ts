import { Slide } from '../../types'

import {
  AerosolSlide,
  HowToBuySlide,
  RoadmapSlide,
  RodaiSlide,
  TeamSlide,
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
    background: 'bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500',
  },
  {
    id: 'how-to-buy',
    label: 'How to Buy',
    Component: HowToBuySlide,
    background: 'bg-gradient-to-r from-blue-500 via-blue-400 to-sky-400',
  },
  {
    id: 'team',
    label: 'Team',
    Component: TeamSlide,
    background: 'bg-gradient-to-r from-red-600 to-pink-400',
  },
]
