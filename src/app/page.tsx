import { Button, Link } from '@nextui-org/react'

import { ParticlesComponent } from '../components/Particles'
import { getRandomExpansion } from '../expansions'

export default function Home() {
  return (
    <>
      <ParticlesComponent />
      <div className="flex flex-col min-h-screen relative z-10 p-8">
        <main className="flex flex-col flex-col items-center justify-center">
          <Button
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC&outputSymbol=RODAI"
            as={Link}
            size="lg"
            className="hidden absolute top-4 right-4 bg-gradient-to-l from-[#9945FF] to-[#14F195] text-white shadow-lg"
          >
            <div className="flex items-center">
              <img
                draggable={false}
                src="/raydium.png"
                alt="solscan"
                className="w-12"
              />
              <span>Buy Now</span>
            </div>
          </Button>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col gap-2 justify-center items-center">
              <img
                src="/logo.png"
                alt="logo"
                className="w-64 animate-levitate"
                draggable="false"
              />
              <h1 className="text-6xl font-bold text-center">
                ROD.<span className="text-orange-300">AI</span>
              </h1>
              <p className="text-orange-300">COMING SOON</p>
              <p className="hidden text-orange-300">{getRandomExpansion()}</p>
            </div>

            <div className="hidden border-none bg-white/10 max-w-[610px] rounded-lg p-4">
              <div className="flex flex-col gap-4 items-center justify-center text-center">
                <div className="text-5xl">Tokenomics</div>
                <div>
                  <Link
                    href="https://rugcheck.xyz/tokens/GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC"
                    target="_blank"
                    className="text-xl text-pink-500"
                  >
                    😱 Worried about a rug pull?
                  </Link>
                </div>
                <div>
                  <div className="tokenomics-label">Total Supply:</div>
                  <div className="tokenomics-value">69.42 T RODAI</div>
                </div>
                <div>
                  <div className="tokenomics-label">Max Supply:</div>
                  <div className="tokenomics-value">69.42 T RODAI</div>
                </div>
                <div>
                  <div className="tokenomics-label">Circulating Supply:</div>
                  <div className="tokenomics-value">NONE YET</div>
                </div>
                <div className="text-large">
                  Every token has been allocated to the Liquidity Pool (LP), and
                  all associated LP tokens have been burned 🔥, guaranteeing
                  equity and safety. This project is{' '}
                  <em className="underline">wholly owned by the community</em>,
                  functioning in a decentralized manner with no governing
                  central authority.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://solscan.io/token/GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC"
                target="_blank"
              >
                <img
                  draggable={false}
                  src="/solscan.webp"
                  alt="solscan"
                  className="w-12"
                />
              </Link>

              <Link href="https://discord.gg/9yDQJKUK" target="_blank">
                <img
                  draggable={false}
                  src="/discord.png"
                  alt="discord"
                  className="w-12"
                />
              </Link>

              <Link href="https://twitter.com/RodAISol" target="_blank">
                <img
                  draggable={false}
                  src="/x.png"
                  alt="twitter"
                  className="w-12"
                />
              </Link>
            </div>
          </div>
        </main>
        <footer className="flex flex-col gap-4 items-center justify-center mt-8">
          <div className="text-tiny text-center">
            ROD.AI IS A MEME COIN ON THE SOLANA BLOCKCHAIN. THIS IS NOT
            INVESTMENT ADVICE. THE COIN IS FOR ENTERTAINMENT AND EDUCATIONAL
            PURPOSES ONLY. THE FOUNDERS ARE NOT LIABLE FOR ANY LOSSES OR
            DAMAGES. THE MARKET IS VOLATILE; INVEST AT YOUR OWN RISK. NO
            GUARANTEES OF PROFIT OR VALUE RETENTION. RESEARCH THOROUGHLY BEFORE
            INVESTING. BY BUYING, YOU ACKNOWLEDGE THE RISKS INVOLVED. FOUNDERS
            HAVE NO OBLIGATION TO UPDATE INFORMATION. LAWS VARY BY JURISDICTION;
            COMPLY WITH LOCAL REGULATIONS. THIS DISCLAIMER IS SUBJECT TO CHANGES
            WITHOUT NOTICE.
          </div>

          <div className="text-tiny">
            Copyright {new Date().getFullYear()} | ROD.AI
          </div>
        </footer>
      </div>
    </>
  )
}
