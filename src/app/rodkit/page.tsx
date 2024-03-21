import { Metadata } from 'next'

import { RodKitRoadmapPage } from '../../pageComponents/RodKitRoadmap'

export const metadata: Metadata = {
  title: 'RODAI - Introducing RODKit',
  description:
    'The RODKit, enabling anyone to launch community projects on Solana.',
}

export default function Home() {
  return <RodKitRoadmapPage />
}
