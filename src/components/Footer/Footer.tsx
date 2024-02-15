export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center mt-8 px-4 py-8">
      <div className="text-base text-center">
        RODAI is more than a meme coin; it’s a vision in progress on the Solana
        blockchain, nurtured by an experienced development team. We are
        dedicated to transforming RODAI into a utility token, aiming to provide
        real-world applications and value in the near future. Currently embraced
        for its community, innovation, and educational value, RODAI is on a
        strategic path toward becoming a token with tangible benefits and
        utilities for its holders. This journey underscores our commitment to
        not just entertainment but also practical utility within the
        cryptocurrency space.
      </div>

      <div className="text-tiny">
        Copyright © {new Date().getFullYear()} | RODAI
      </div>
    </footer>
  )
}
