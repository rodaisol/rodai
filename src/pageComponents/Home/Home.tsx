'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { MEXC_BUY_URL } from '../../constants'

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
      <div className="text-xl md:text-2xl flex justify-center items-center p-4 bg-green-500">
        <Link
          href={MEXC_BUY_URL}
          target="_blank"
          className="flex flex-nowrap gap-2 justify-center items-center"
        >
          <div>Now Available on</div>
          <div>
            <Image
              src="/img/exchanges/mexc-with-label.svg"
              alt="Logo"
              width={128}
              height={128}
              draggable={false}
            />
          </div>
        </Link>
      </div>
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
