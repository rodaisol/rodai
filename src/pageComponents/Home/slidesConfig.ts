import {
  AboutSection,
  AerosolSection,
  CommunitySection,
  FAQSection,
  HowToBuySection,
  RoadmapSection,
  TeamSection,
  TokenomicsSection,
  WelcomeSlide,
  WhyInvest,
} from './slides'

export const slides = [
  {
    id: 'hero',
    label: 'Welcome',
    Component: WelcomeSlide,
    background: 'linear-gradient(to bottom right, #60a5fa, #34d399)',
  },
  {
    id: 'about',
    label: "What's RODAI",
    Component: AboutSection,
    background: 'linear-gradient(to bottom right, #a78bfa, #f472b6)',
  },
  {
    id: 'tokenomics',
    label: 'Tokenomics',
    Component: TokenomicsSection,
    background: 'linear-gradient(to bottom right, #f87171, #facc15)',
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    Component: RoadmapSection,
    background: 'linear-gradient(to bottom right, #6366f1, #a78bfa)',
  },
  {
    id: 'why-invest',
    label: 'Why Invest',
    Component: WhyInvest,
    background: 'linear-gradient(to bottom right, #14b8a6, #22d3ee)',
  },
  {
    id: 'community',
    label: 'Community',
    Component: CommunitySection,
    background: 'linear-gradient(to bottom right, #fb923c, #f87171)',
  },
  {
    id: 'how-to-buy',
    label: 'How to Buy',
    Component: HowToBuySection,
    background: 'linear-gradient(to bottom right, #fbbf24, #f59e0b)',
  },
  {
    id: 'aerosol',
    label: 'Aerosol',
    Component: AerosolSection,
    background: 'linear-gradient(to bottom right, #84cc16, #10b981)',
  },
  {
    id: 'team',
    label: 'Team',
    Component: TeamSection,
    background: 'linear-gradient(to bottom right, #0ea5e9, #6366f1)',
  },
  {
    id: 'faq',
    label: 'FAQ',
    Component: FAQSection,
    background: 'linear-gradient(to bottom right, #f43f5e, #f472b6)',
  },
]
