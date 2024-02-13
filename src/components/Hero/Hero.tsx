'use client'

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

import { BuyDropdown } from '../BuyDropdown'
import { ChartSelector } from '../ChartSelector'
import { SocialLinks } from '../SocialLinks'

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center p-4 md:p-8"
    >
      <Image
        src="/img/rod/hero-rod.png"
        alt="logo"
        width={700}
        height={700}
        className="w-3/4 md:w-1/2 xl:w-[700px] animate-levitate z-10"
        draggable={false}
      />
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">Meet</h2>
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold">
          ROD<span className="text-orange-300">AI</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl">
          The hardest and evergrowing ROD of Solana
        </p>
        <div className="flex flex-col gap-4 mt-4 md:mt-8">
          <div className="flex flex-wrap gap-2">
            <BuyDropdown />
            <Button
              as={Link}
              variant="bordered"
              className="border-white"
              size="lg"
              target="_blank"
              href="https://t.me/rodaisol"
            >
              Join Us
            </Button>
            <ChartSelector />
          </div>
          <SocialLinks className="justify-center md:justify-center" />
        </div>
      </div>
    </section>
  )
}
