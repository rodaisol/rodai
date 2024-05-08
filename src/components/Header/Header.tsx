import { Button, Navbar, NavbarItem, cn } from '@nextui-org/react'
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
    <Navbar
      className={cn('justify-center', className)}
      classNames={{
        wrapper: 'w-full max-w-5xl',
      }}
    >
      <ul
        className="flex flex-none gap-2 items-center cursor-pointer max-w-32"
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
      </ul>
      <ul className="hidden flex-1 sm:flex gap-4 justify-center items-center h-full">
        <NavbarItem
          as={Link}
          href="https://aerosol.community"
          target="_blank"
          className="cursor-pointer w-auto"
        >
          <div className="flex gap-2 items-center">
            <Image
              src="/img/aerosol/aerosol-logo.png"
              alt="Aerosol logo"
              width={42}
              height={42}
            />
            <Image
              src="/img/aerosol/aerosol-logo-text.png"
              alt="logo"
              draggable={false}
              className="relative top-1"
              width={91}
              height={30}
            />
          </div>
        </NavbarItem>
        <NavbarItem
          onClick={() => scrollToSection('about')}
          className="cursor-pointer"
        >
          About
        </NavbarItem>
        <NavbarItem
          onClick={() => scrollToSection('tokenomics')}
          className="cursor-pointer sm:hidden"
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
          className="cursor-pointer sm:hidden"
        >
          FAQ
        </NavbarItem>
      </ul>
      <ul className="flex gap-2 items-center">
        <NavbarItem
          as={Link}
          href="https://aerosol.community"
          target="_blank"
          className="sm:hidden cursor-pointer w-auto"
        >
          <Image
            src="/img/aerosol/aerosol-logo.png"
            alt="Aerosol logo"
            width={42}
            height={42}
          />
        </NavbarItem>
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
      </ul>
    </Navbar>
  )
}
