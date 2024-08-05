'use client'

import {
  Button,
  ButtonProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from '@nextui-org/react'
import Image from 'next/image' // Import Image from next/image
import React, { FC } from 'react'

import { HOW_TO_BUY_YOUTUBE_URL, MEXC_BUY_URL } from '../../constants'

const buyLinks = [
  {
    key: 'aerosol',
    label: 'Aerosol',
    href: 'https://www.aerosol.so/tokens/rod-ai',
    icon: '/img/aerosol/aerosol-logo.png',
    className: 'w-8',
  },
  {
    key: 'jupiter',
    label: 'Jupiter',
    href: 'https://jup.ag/swap/SOL-RODAI_GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC',
    icon: '/img/exchanges/jupiter.png',
    className: 'w-8',
  },
  {
    key: 'raydium',
    label: 'Raydium',
    href: 'https://raydium.io/swap/?inputCurrency=sol&outputCurrency=GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC&fixed=in',
    icon: '/img/exchanges/raydium.png',
    className: 'w-8',
  },
  {
    key: 'mexc',
    label: 'MEXC',
    href: MEXC_BUY_URL,
    icon: '/img/exchanges/mexc.png',
    className: 'w-8',
  },
  {
    key: 'youtube',
    label: 'Watch Tutorial',
    href: HOW_TO_BUY_YOUTUBE_URL,
    icon: '/img/social/youtube.png',
    className: 'w-8',
  },
]

buyLinks.sort((a, b) => a.label.localeCompare(b.label))

export const BuyDropdown: FC<ButtonProps> = (buttonProps) => {
  return (
    <Dropdown size="lg">
      <DropdownTrigger>
        <Button
          variant="shadow"
          color="primary"
          className="border-white"
          size="lg"
          {...buttonProps}
        >
          Buy Now
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="bordered"
        aria-label="Dropdown menu for buying options"
        items={buyLinks}
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
                width={32}
                height={32}
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
