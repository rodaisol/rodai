'use client'

export const WhyInvest = () => {
  return (
    <section
      id="why-invest"
      className="px-4 py-8 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8"
    >
      <div className="md:flex-1 flex justify-center items-center">
        <img
          src="/img/rod/wallstreet_rod.png"
          className="max-w-full h-auto"
          alt="The Rod to Rule Them All"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-8 md:flex-1">
        <h2 className="text-4xl md:text-5xl lg:text-7xl">
          Why invest in the ROD?
        </h2>
        <p className="text-md md:text-lg">
          RODAI isn’t just any meme coin—it’s a meme-making powerhouse, bringing
          a unique and evolving vision to the Solana blockchain. Crafted by a
          team of seasoned developers, our aim stretches beyond individual
          benefits, focusing on enriching the entire Solana ecosystem. By
          launching the RODKit, a premier community token platform, we’re
          setting the stage for unparalleled meme creation and sharing, offering
          utilities and advantages that reverberate across the whole network.
        </p>
        <p className="text-md md:text-lg mt-4">
          At the heart of our vision lies the RODKit, a groundbreaking platform
          currently under development, aimed at broadening access beyond just
          RODAI holders to include users of SOL and stablecoins. Designed as an
          all-encompassing toolkit, RODKit aims to streamline the creation and
          nurturing of community tokens on the Solana blockchain. This
          initiative represents a crucial step towards unleashing RODAI’s
          utility and cultivating an expansive ecosystem. Anticipating the
          launch of RODKit provides a glimpse into an ecosystem poised to
          revolutionize community engagement and token functionality on Solana.
          RODKit positions RODAI as more than just a token; it’s a beacon of
          innovation, inclusivity, and community empowerment.
        </p>
      </div>
    </section>
  )
}
