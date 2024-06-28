'use client'

import { useEffect } from 'react'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'

import {
  AboutSection,
  AerosolSection,
  CommunitySection,
  FAQSection,
  HowToBuySection,
  RoadmapSection,
  TeamSection,
  TokenomicsSection,
  WhyInvest,
} from './sections'

export const HomePage = () => {
  useEffect(() => {
    console.log('gtag', window.gtag)
  }, [])
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
          <AerosolSection />
          <TeamSection />
          <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
