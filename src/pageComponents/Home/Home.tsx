'use client'

import { AudioPlayer } from '../../components/AudioPlayer'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { RODAI_TRACKS } from '../../constants'

import {
  AerosolSection,
  FAQSection,
  HeroSection,
  HowToBuySection,
  RoadmapSection,
  RodaiSection,
  TeamSection,
  TokenDetailsSection,
  TokenomicsSection,
  TopBanner,
} from './sections'

export const HomePage = () => {
  return (
    <div className="min-h-screen text-white w-full overflow-x-hidden">
      <Header />

      <main className="relative">
        {/* Hero Section - Purple Background with Top Banner */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center pt-0 pb-20 overflow-hidden bg-[#3c1154]"
        >
          <div className="w-full pt-0 sm:pt-4">
            <TopBanner />
          </div>
          <HeroSection />
        </section>

        {/* What's RODAI & Token Details Section - Blue Background */}
        <section id="rodai" className="relative bg-[#3DDAD8]">
          <RodaiSection />
          <TokenDetailsSection />
        </section>

        {/* What's Aerosol Section - Orange Background */}
        <section id="aerosol" className="relative bg-[#F06943]">
          <AerosolSection />
        </section>

        {/* Tokenomics Section - Blue Background */}
        <section id="tokenomics" className="relative bg-[#3DDAD8]">
          <TokenomicsSection />
        </section>

        {/* Roadmap Section - Orange Background */}
        <section id="roadmap" className="relative bg-[#F06943]">
          <RoadmapSection />
        </section>

        {/* How to Buy Section - Orange Background */}
        <section id="how-to-buy" className="relative bg-[#F06943]">
          <HowToBuySection />
        </section>

        {/* Team Section - Blue Background */}
        <section id="team" className="relative bg-[#3DDAD8]">
          <TeamSection />
        </section>

        {/* FAQ Section - Purple Background */}
        <section id="faq" className="relative bg-[#3c1154]">
          <FAQSection />
        </section>
      </main>

      <Footer />

      {/* Audio Player - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-10">
        <AudioPlayer tracks={RODAI_TRACKS} />
      </div>
    </div>
  )
}
