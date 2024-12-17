'use client'

import { PlayIcon } from '@heroicons/react/20/solid'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { motion } from 'motion/react'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useMedia } from 'react-use'

import { Button } from '../../../components/Button'
import { BuyDropdown } from '../../../components/BuyDropdown'
import { HOW_TO_BUY_YOUTUBE_URL } from '../../../constants'
import { SlideProps } from '../../../types'

export const HowToBuySlide = ({ visibilityRatio }: SlideProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isMobile = useMedia('(max-width: 768px)')

  const handleOpenVideo = () => {
    if (isMobile) {
      window.open(HOW_TO_BUY_YOUTUBE_URL, '_blank')
    } else {
      onOpen()
    }
  }

  return (
    <section
      id="how-to-buy"
      className="w-full h-full overflow-hidden py-8 flex flex-col gap-8 items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: visibilityRatio,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
        className="px-8 max-w-4xl text-2xl md:text-3xl text-center"
      >
        <p className="leading-relaxed mt-6">
          To buy RODAI, get the{' '}
          <span className="font-bold text-yellow-400">Phantom</span> or{' '}
          <span className="font-bold text-yellow-400">Solflare</span> wallet app
          and use a decentralized exchange such as{' '}
          <span className="font-bold text-yellow-400">Jupiter</span> or{' '}
          <span className="font-bold text-yellow-400">Raydium</span> to swap
          your existing tokens for RODAI.
        </p>
        <p className="leading-relaxed mt-6">
          RODAI is also listed on centralized exchanges like{' '}
          <span className="font-bold text-yellow-400">MEXC</span> and{' '}
          <span className="font-bold text-yellow-400">SolCex</span>, where it
          can be bought directly.
        </p>
        <p className="leading-relaxed mt-6">
          We have prepared a step-by-step video guide to help you through the
          process.
        </p>
      </motion.div>

      <motion.div
        style={{
          y: (1 - visibilityRatio) * 200,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
        className="w-full flex justify-center items-center mt-8"
      >
        <div className="flex justify-center gap-4 w-full">
          <BuyDropdown variant="bordered" className="border-white text-white" />
          <Button
            onClick={handleOpenVideo}
            variant="shadow"
            color="secondary"
            className="border-white"
          >
            <PlayIcon className="w-6 h-6 mr-2" />
            Watch Tutorial
          </Button>
        </div>
      </motion.div>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        closeButton
        autoFocus
        size="xl"
      >
        <ModalContent>
          <ModalHeader>How to Buy RODAI</ModalHeader>
          <ModalBody>
            <div className="flex justify-center items-center">
              <ReactPlayer
                url={HOW_TO_BUY_YOUTUBE_URL}
                playing={isOpen}
                width={470}
                height={774}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  )
}
