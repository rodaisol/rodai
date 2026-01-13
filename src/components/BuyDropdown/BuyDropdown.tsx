'use client'

import {
  Button,
  ButtonProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react'
import Image from 'next/image'
import React, { FC } from 'react'

import {
  AEROSOL_BUY_URL,
  HOW_TO_BUY_YOUTUBE_URL,
  JUPITER_BUY_URL,
  PHOTON_BUY_URL,
  RAYDIUM_BUY_URL,
} from '../../constants'

const buyLinks = [
  {
    key: 'aerosol',
    label: 'Aerosol',
    href: AEROSOL_BUY_URL,
    icon: '/img/aerosol/logo-icon.png',
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
            className="bg-[#3DDAD8] hover:bg-[#2AC8C6] text-black font-bold px-3 py-2 sm:px-4 sm:py-2 text-sm border-2 border-transparent hover:border-white/20 transition-all shadow-lg min-w-0"
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
            onPress={() => {
              window.open(item.href, '_blank', 'noopener,noreferrer')
            }}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}
