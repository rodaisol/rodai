'use client'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'

import {
  AboutSection,
  CommunitySection,
  FAQSection,
  HowToBuySection,
  RoadmapSection,
  RodKitSection,
  TokenomicsSection,
  WhyInvest,
} from './sections'

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col gap-4 md:gap-16 lg:gap-24">
          <Hero />
          <AboutSection />
          <TokenomicsSection />
          <RoadmapSection />
          <WhyInvest />
          <CommunitySection />
          <HowToBuySection />
          <RodKitSection />
          <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
