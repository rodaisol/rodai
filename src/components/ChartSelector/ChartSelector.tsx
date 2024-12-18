import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from '@nextui-org/react'
import Image from 'next/image' // Import Image from next/image
import React from 'react'

import { Button } from '../Button'

const chartLinks = [
  {
    key: 'dextools',
    label: 'DEX Tools',
    href: 'https://www.dextools.io/app/en/solana/pair-explorer/CzWqL4M1CzQiw45djF1xdrWHQmuJbJoZPY38ezKGb6q8',
    icon: '/img/charts/dextools.png',
    className: 'w-8',
  },
  {
    key: 'dexscreener',
    label: 'DEX Screener',
    href: 'https://dexscreener.com/solana/CzWqL4M1CzQiw45djF1xdrWHQmuJbJoZPY38ezKGb6q8',
    icon: '/img/charts/dexscreener.webp',
    className: 'w-8 rounded-full',
  },
  {
    key: 'birdeye',
    label: 'Birdeye',
    href: 'https://birdeye.so/token/GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC',
    icon: '/img/charts/birdeye.png',
    className: 'w-8',
  },
  {
    key: 'geckoterminal',
    label: 'Gecko Terminal',
    href: 'https://www.geckoterminal.com/solana/pools/CzWqL4M1CzQiw45djF1xdrWHQmuJbJoZPY38ezKGb6q8',
    icon: '/img/charts/geckoterminal.png',
    className: 'w-8',
  },
  {
    key: 'coinmarketcap',
    label: 'CoinMarketCap',
    href: 'https://coinmarketcap.com/currencies/rod-ai',
    icon: '/img/charts/coinmarketcap.png',
    className: 'w-8 rounded-full',
  },
  {
    key: 'coingecko',
    label: 'CoinGecko',
    href: 'https://www.coingecko.com/en/coins/rod-ai',
    icon: '/img/charts/coingecko.png',
    className: 'w-8 rounded-full',
  },
]

chartLinks.sort((a, b) => a.label.localeCompare(b.label))

export const ChartSelector = () => {
  return (
    <Dropdown size="lg">
      <DropdownTrigger>
        <div>
          <Button variant="bordered" className="border-white text-white">
            Chart
          </Button>
        </div>
      </DropdownTrigger>
      <DropdownMenu
        variant="bordered"
        aria-label="Dropdown menu with icons"
        items={chartLinks}
      >
        {(item) => (
          <DropdownItem
            key={item.key}
            className="text-white"
            as={Link}
            target="_blank"
            href={item.href}
            startContent={
              <Image
                draggable={false}
                src={item.icon}
                alt={item.label}
                width={64}
                height={64}
                className={item.className}
              />
            }
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}
