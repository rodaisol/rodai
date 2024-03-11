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
          RODAI is more than a meme coin; it’s a vision in progress on the
          Solana blockchain, nurtured by an experienced development team. We are
          dedicated to transforming RODAI into a utility token, aiming to
          provide real-world applications and value in the near future.
          Currently embraced for its community, innovation, and educational
          value, RODAI is on a strategic path toward becoming a token with
          tangible benefits and utilities for its holders. This journey
          underscores our commitment to not just entertainment but also
          practical utility within the cryptocurrency space.
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
