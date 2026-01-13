'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@heroui/react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { JUPITER_BUY_URL } from '../../constants'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const threshold = 150 // Only show navbar when scrolled past this point

      // Always hide navbar when near the top
      if (currentScrollY < threshold) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up and past threshold - show navbar
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#3c1154] border-b border-white/10 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
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
                className="h-8 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection('rodai')}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('tokenomics')}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors cursor-pointer"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection('roadmap')}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors cursor-pointer"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors cursor-pointer"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={JUPITER_BUY_URL}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:block"
              >
                <Button className="bg-[#3DDAD8] hover:bg-[#2AC8C6] text-[#3c1154] font-bold px-3 py-2 sm:px-4 sm:py-2 text-sm border-2 border-transparent hover:border-white/20 transition-all shadow-lg min-w-0">
                  Buy Now
                </Button>
              </a>
              <a
                href="https://t.me/rodaisol"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:block"
              >
                <Button className="bg-[#f97b55] hover:bg-[#FF6B4A] text-white font-bold px-4 py-2 text-sm border-2 border-transparent hover:border-white/20 transition-all shadow-lg min-w-0">
                  Join
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-[#3DDAD8] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

// Mobile Drawer - rendered outside header to avoid z-index issues
export const MobileDrawer: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
    onClose()
  }

  const navigationItems = [
    { id: 'rodai', label: 'About' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'team', label: 'Team' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#3c1154] border-l border-white/20 z-[101] md:hidden shadow-2xl overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Image
                  src="/img/logo/rodai-logo-horizontal-transparent-bg.webp"
                  alt="RODAI Logo"
                  width={150}
                  height={50}
                  draggable={false}
                  className="h-8 w-auto"
                />
                <button
                  onClick={onClose}
                  className="p-2 text-white hover:text-[#3DDAD8] transition-colors"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium text-base transition-all cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Action Buttons */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <a
                  href={JUPITER_BUY_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="block"
                >
                  <Button className="w-full bg-[#3DDAD8] hover:bg-[#2AC8C6] text-[#3c1154] font-bold py-3 text-base border-2 border-transparent hover:border-white/20 transition-all shadow-lg">
                    Buy Now
                  </Button>
                </a>
                <a
                  href="https://t.me/rodaisol"
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="block"
                >
                  <Button className="w-full bg-[#f97b55] hover:bg-[#FF6B4A] text-white font-bold py-3 text-base border-2 border-transparent hover:border-white/20 transition-all shadow-lg">
                    Join
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
