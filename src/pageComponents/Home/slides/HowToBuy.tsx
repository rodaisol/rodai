import { PlayIcon } from '@heroicons/react/20/solid'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useMedia } from 'react-use'

import { BuyDropdown } from '../../../components/BuyDropdown'
import { HOW_TO_BUY_YOUTUBE_URL } from '../../../constants'

export const HowToBuySection = () => {
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
      className="px-4 py-8 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8"
    >
      <div className="flex flex-col gap-4 md:gap-8 md:flex-1">
        <p className="text-base md:text-lg">
          To buy RODAI, get the Phantom wallet app and then use a decentralized
          exchange such as Jupiter or Raydium to swap your existing tokens for
          RODAI.
        </p>
        <p className="text-base md:text-lg">
          We have prepared a step-by-step video guide to help you through the
          process.
        </p>
        <div className="w-full flex justify-center md:justify-start gap-4">
          <BuyDropdown variant="bordered" className="border-white text-white" />
          <Button
            onClick={handleOpenVideo}
            variant="shadow"
            color="secondary"
            className="border-white"
            size="lg"
          >
            <PlayIcon className="w-6 h-6 mr-2" />
            Watch Video
          </Button>
        </div>
      </div>
      <div className="md:flex-1 flex justify-center items-center relative group cursor-pointer">
        <div onClick={handleOpenVideo}>
          <Image
            src="/img/how-to-buy.png"
            alt="How to buy RODAI"
            width={370}
            height={674}
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/img/play.png"
              alt="Play video"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
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
