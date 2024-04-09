export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center mt-8 px-4 py-8">
      <div className="text-base text-center">
        RODAI isn’t just any meme coin—it’s a meme-making powerhouse, bringing a
        unique and evolving vision to the Solana blockchain. Crafted by a team
        of seasoned developers, our aim stretches beyond individual benefits,
        focusing on enriching the entire Solana ecosystem. By launching Aerosol,
        a premier community token platform, we’re setting the stage for
        unparalleled meme creation and sharing, offering utilities and
        advantages that reverberate across the whole network.
      </div>

      <div className="text-tiny">
        Copyright © {new Date().getFullYear()} | RODAI
      </div>
    </footer>
  )
}
