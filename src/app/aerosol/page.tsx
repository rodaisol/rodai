import { Metadata } from 'next'

import { AerosolRoadmapPage } from '../../pageComponents/AerosolRoadmap'

export const metadata: Metadata = {
  title: 'RODAI - Introducing Aerosol',
  description:
    'Aerosol, enabling anyone to launch community projects on Solana.',
}

export default function Home() {
  return <AerosolRoadmapPage />
}
