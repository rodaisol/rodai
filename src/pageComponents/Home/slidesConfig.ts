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
    background: "bg-[url('/img/backgrounds/main.svg')]",
  },
  {
    id: 'rodai',
    label: "What's RODAI?",
    Component: RodaiSlide,
    background: "bg-[url('/img/backgrounds/meshing-around.svg')]",
  },
  {
    id: 'aerosol',
    label: "What's Aerosol?",
    Component: AerosolSlide,
    background: "bg-[url('/img/backgrounds/roaming-perspective.svg')]",
  },
  {
    id: 'rodai-overview',
    label: 'Token Overview',
    Component: TokenOverviewSlide,
    background: "bg-[url('/img/backgrounds/clouds.svg')]",
  },
  {
    id: 'tokenomics',
    label: 'Tokenomics',
    Component: TokenomicsSlide,
    background: "bg-[url('/img/backgrounds/tokenomics-bg.svg')]",
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    Component: RoadmapSlide,
    background: "bg-[url('/img/backgrounds/wobbling-particles.svg')]",
  },
  {
    id: 'how-to-buy',
    label: 'How to Buy',
    Component: HowToBuySlide,
    background: "bg-[url('/img/backgrounds/blackmagic-triangles.svg')]",
  },
  {
    id: 'team',
    label: 'Team',
    Component: TeamSlide,
    background: "bg-[url('/img/backgrounds/pulsing-ripples.svg')]",
  },
]
