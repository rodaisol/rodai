'use client'

import Image from 'next/image'
import { FC } from 'react'

import { AEROSOL_URL, UTM_SOURCE } from '../../constants'
import { buildReferralUrl } from '../../utils/urls'
import { SocialLinks } from '../SocialLinks'

export const Footer: FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="w-full bg-[#3c1154] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src="/img/logo/rodai-logo-horizontal-transparent-bg.webp"
                alt="RODAI Logo"
                width={150}
                height={50}
                draggable={false}
                className="h-10 w-auto"
              />
            </button>
            <p className="text-white/70 text-sm text-center md:text-left max-w-xs">
              The First AI Meme Token on Solana. Official meme token of Aerosol.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              <button
                onClick={() => scrollToSection('rodai')}
                className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('tokenomics')}
                className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection('roadmap')}
                className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Connect
            </h3>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs text-center sm:text-left">
            Copyright © {new Date().getFullYear()} Aerosol. All rights reserved.
          </p>
          <a
            href={buildReferralUrl(AEROSOL_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'footer_aerosol_logo',
            })}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/img/aerosol/logo-horizontal-dark.png"
              alt="Aerosol"
              width={100}
              height={30}
              className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              draggable={false}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
