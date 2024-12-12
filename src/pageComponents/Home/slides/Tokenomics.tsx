import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { Snippet } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const tokenAddress = 'GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC'

export const TokenomicsSection = () => {
  return (
    <section
      id="tokenomics"
      className="px-4 py-8 md:px-8 md:py-8 flex flex-col gap-4 md:gap-8 w-full"
    >
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full">
        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center w-full">
          <div className="text-lg font-semibold">Symbol:</div>
          <div className="flex gap-2 items-center">
            <div className="text-base">RODAI</div>
            <div className="inline-flex gap-2 items-center">
              <div className="w-6 md:w-8">
                <Link
                  href="https://solscan.io/token/GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC"
                  target="_blank"
                >
                  <img
                    draggable={false}
                    src="/img/explorers/solscan.webp"
                    alt="solscan"
                    className="w-full"
                  />
                </Link>
              </div>
              <div className="w-6 md:w-8">
                <Link
                  href="https://solana.fm/address/GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC"
                  target="_blank"
                >
                  <img
                    draggable={false}
                    src="/img/explorers/solanafm.svg"
                    alt="solanafm"
                    className="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg p-2 md:p-4 flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-lg font-semibold">Token Address:</div>
          <div className="flex items-center justify-between w-full">
            <Snippet
              id="token-address-snippet"
              size="lg"
              hideSymbol
              className="text-base w-full"
            >
              {tokenAddress}
            </Snippet>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between w-full">
        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center w-full">
          <div className="text-lg font-semibold">Total Supply:</div>
          <div className="text-base">69.42 Trillion</div>
        </div>

        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center w-full">
          <div className="text-lg font-semibold">Tax:</div>
          <div className="text-base">0/0</div>
        </div>

        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center w-full">
          <div className="text-lg font-semibold">Mint Authority:</div>
          <a
            href="https://solana.fm/tx/58PnHQgTaigkjtjYBxBAP6i3JfXZgKvnTu7uA4suyJKikjKCxobq9N7VTfWW6VTnsXpDSGx12zCjZGa7Qi8EysB5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end text-base"
          >
            Revoked <ArrowTopRightOnSquareIcon className="ml-2 w-6 h-6" />
          </a>
        </div>

        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center w-full">
          <div className="text-lg font-semibold">LP:</div>
          <a
            href="https://rugcheck.xyz/tokens/GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end text-base"
          >
            Fully Locked <ArrowTopRightOnSquareIcon className="ml-2 w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 w-full">
        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center">
          <div className="text-base">
            All tokens were allocated to the Liquidity Pool immediately after
            minting.
          </div>
        </div>
        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center">
          <div className="text-base">
            The team bought back and maintains about 20% of the total supply.
          </div>
        </div>
        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center">
          <a
            href="https://solana.fm/tx/5dEoGkfu8GFYBMT5kG8kqrnku8GuD5tZ7wvX3vTR7eN6XSGBYWqVQU4foJXxPd5T3rCYUwUWpAbrDki1EUccwMGG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full text-base"
          >
            1 trillion tokens were donated to the community account{' '}
            <ArrowTopRightOnSquareIcon className="ml-2 w-6 h-6" />
          </a>
        </div>
        <div className="border-2 rounded-lg p-2 md:p-4 flex justify-between items-center">
          <div className="text-base">
            1 trillion tokens were given out by the team as part of initial
            airdrops.
          </div>
        </div>
      </div>
    </section>
  )
}
