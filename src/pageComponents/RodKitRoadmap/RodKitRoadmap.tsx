'use client'

import { Icon } from '@iconify/react'
import { Card } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

import { TokenSymbol } from '../../components/TokenSymbol'

import { MvpReleaseCard } from './MvpReleaseCard'
import { ReleaseCard } from './ReleaseCard'
import { roadmapData } from './rodKitRoadmapData'

import './styles.css'

const toolkitFeatures = [
  { name: 'Token deployment', icon: 'ic:baseline-generating-tokens' },
  { name: 'Community engagement', icon: 'iconoir:community' },
  { name: 'Marketing', icon: 'tabler:ad-filled' },
  { name: 'Listing Support', icon: 'clarity:bank-solid' },
]

const levitatingImages = [
  {
    src: '/img/rodkit/rodkit-city.webp',
    alt: 'RODKit city',
  },
  {
    src: '/img/rodkit/flying-rod.webp',
    alt: 'Flying ROD',
  },
  {
    src: '/img/rodkit/rod-train.webp',
    alt: 'ROD waiting for train',
  },
]

function getPositionClasses(index: number) {
  switch (index) {
    case 0:
      return 'top-12 left-24'
    case 1:
      return '-top-64 left-32'
    case 2:
      return '-top-24 left-[26rem]'
    default:
      return 'top-0 left-0'
  }
}

function getAnimationClass(index: number) {
  switch (index % 3) {
    case 0:
      return 'animate-float-slow' // Slow floating animation
    case 1:
      return 'animate-float-medium' // Medium speed floating animation
    case 2:
      return 'animate-float-fast' // Fast floating animation
    default:
      return ''
  }
}

const LevitatingImagesSection = () => (
  <div className="hidden lg:flex gap-4 w-full justify-center relative">
    {levitatingImages.map((image, index) => (
      <div
        key={index}
        className={`absolute ${getPositionClasses(index)} ${getAnimationClass(
          index
        )}`}
      >
        <Card isHoverable className="w-64 h-64">
          <Image
            src={image.src}
            alt={image.alt}
            width={256}
            height={256}
            draggable={false}
          />
        </Card>
      </div>
    ))}
  </div>
)

export const RodKitRoadmapPage = () => {
  const [mvpRelease, secondRelease, ...otherReleases] = roadmapData

  return (
    <div className="p-4 flex flex-col items-center">
      <section className="max-w-7xl flex justify-center items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)] w-full">
        <div className="w-full  mx-auto text-center">
          <div className="inline-block">
            <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
              Introducing&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-5xl lg:text-6xl">
              RODKit
            </h1>
          </div>
          <h2 className="my-8 text-lg lg:text-xl font-normal mx-auto">
            Enabling <u>anyone</u> to launch community projects on Solana.
          </h2>
          <div className="text-sm md:text-lg mx-auto mt-4">
            RODKit provides a comprehensive, accessible toolkit for:
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
              {toolkitFeatures.map((item) => (
                <div
                  key={item.name}
                  className="border p-2 flex items-center gap-2 rounded-full bg-content1 shadow-md"
                >
                  <Icon
                    className="text-secondary"
                    icon={item.icon}
                    width={24}
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <section className="relative z-10 flex flex-col gap-2 w-full text-center mt-4">
            <h3 className="text-large text-default-500">
              Supported and backed by
            </h3>
            <div className="flex justify-center">
              <Link href="/" className="flex gap-1 items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  draggable={false}
                />
                The
                <TokenSymbol />
                Community
              </Link>
            </div>
          </section>
        </div>

        <LevitatingImagesSection />
      </section>
      <section className="flex flex-col gap-4 justify-center items-stretch md:items-center">
        <h2 className="text-xl md:text-4xl font-bold mt-2 mb-4 text-center">
          Roadmap
        </h2>
        <MvpReleaseCard key={mvpRelease.version} release={mvpRelease} />
        <ReleaseCard key={secondRelease.version} release={secondRelease} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherReleases.map((release) => (
            <ReleaseCard key={release.version} release={release} />
          ))}
        </div>
      </section>
    </div>
  )
}
