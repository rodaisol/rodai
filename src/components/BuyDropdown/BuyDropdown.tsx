'use client'

import {
  ButtonProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from '@nextui-org/react'
import Image from 'next/image'
import React, { FC } from 'react'

import {
  AEROSOL_BUY_URL,
  HOW_TO_BUY_YOUTUBE_URL,
  JUPITER_BUY_URL,
  MEXC_BUY_URL,
  PHOTON_BUY_URL,
  RAYDIUM_BUY_URL,
} from '../../constants'
import { Button } from '../Button'

const buyLinks = [
  {
    key: 'aerosol',
    label: 'Aerosol',
    href: AEROSOL_BUY_URL,
    icon: '/img/aerosol/aerosol-logo.png',
    className: 'w-8',
  },
  {
    key: 'jupiter',
    label: 'Jupiter',
    href: JUPITER_BUY_URL,
    icon: '/img/exchanges/jupiter.png',
    className: 'w-8',
  },
  {
    key: 'raydium',
    label: 'Raydium',
    href: RAYDIUM_BUY_URL,
    icon: '/img/exchanges/raydium.png',
    className: 'w-8',
  },
  {
    key: 'photon',
    label: 'Photon',
    href: PHOTON_BUY_URL,
    icon: '/img/exchanges/photon.svg',
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
    icon: '/img/socials/youtube-color.png',
    className: 'w-8',
  },
]

buyLinks.sort((a, b) => a.label.localeCompare(b.label))

export const BuyDropdown: FC<ButtonProps> = (buttonProps) => {
  return (
    <Dropdown size="lg">
      <DropdownTrigger>
        <div>
          <Button
            variant="shadow"
            className="border-white bg-pink-600 text-white"
            size="md"
            {...buttonProps}
          >
            Buy Now
          </Button>
        </div>
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
