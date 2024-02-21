import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { BuyDropdown } from '../BuyDropdown'
import { TokenSymbol } from '../TokenSymbol'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 64 // Subtract 64 pixels for the header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Navbar className={className}>
      <NavbarBrand
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => scrollToSection('hero')}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={64}
          height={64}
          draggable={false}
        />
        <TokenSymbol />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        <NavbarItem
          onClick={() => scrollToSection('about')}
          className="cursor-pointer"
        >
          About
        </NavbarItem>
        <NavbarItem
          onClick={() => scrollToSection('tokenomics')}
          className="cursor-pointer"
        >
          Tokenomics
        </NavbarItem>
        <NavbarItem
          onClick={() => scrollToSection('roadmap')}
          className="cursor-pointer"
        >
          Roadmap
        </NavbarItem>
        <NavbarItem
          as={Link}
          href="/whitepaper.pdf"
          target="_blank"
          className="cursor-pointer"
        >
          Whitepaper
        </NavbarItem>
        <NavbarItem
          onClick={() => scrollToSection('why-invest')}
          className="hidden cursor-pointer"
        >
          Why Invest?
        </NavbarItem>
        <NavbarItem
          onClick={() => scrollToSection('community')}
          className="hidden cursor-pointer"
        >
          Join Us
        </NavbarItem>
        <NavbarItem
          onClick={() => scrollToSection('how-to-buy')}
          className="hidden cursor-pointer"
        >
          How to Buy
        </NavbarItem>
        <NavbarItem
          onClick={() => scrollToSection('faq')}
          className="cursor-pointer"
        >
          FAQ
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            className="border border-white text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
            target="_blank"
            href="https://t.me/rodaisol"
          >
            Join Us
          </Button>
        </NavbarItem>
        <NavbarItem>
          <BuyDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
