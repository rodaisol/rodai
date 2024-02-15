'use client'

import { BuyDropdown } from '../../../components/BuyDropdown'

export const HowToBuySection = () => {
  return (
    <section
      id="how-to-buy"
      className="px-4 py-8 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8"
    >
      <div className="flex flex-col gap-4 md:gap-8 md:flex-1">
        <h2 className="text-5xl md:text-6xl lg:text-7xl">How to buy RODAI</h2>
        <p className="text-base md:text-lg">
          To buy RODAI, get the Phantom wallet app and then use a decentralized
          exchange such as Jupiter or Raydium to swap your existing tokens for
          RODAI.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <BuyDropdown variant="bordered" className="border-white text-white" />
        </div>
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <img
          src="/img/rod/buy_rod.png"
          className="max-w-full h-auto"
          alt="How to buy RODAI"
        />
      </div>
    </section>
  )
}
