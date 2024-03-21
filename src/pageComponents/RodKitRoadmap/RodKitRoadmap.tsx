'use client'

import { Pixelify_Sans } from 'next/font/google'

import { MvpReleaseCard } from './MvpReleaseCard'
import { ReleaseCard } from './ReleaseCard'
import { roadmapData } from './rodKitRoadmapData'

const font = Pixelify_Sans({ subsets: ['latin'], weight: '400' })

const RodaiToken = () => {
  return (
    <video
      className="w-16 h-16 md:w-24 md:h-24"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/rodai.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}

export const RodKitRoadmapPage = () => {
  const [mvpRelease, secondRelease, ...otherReleases] = roadmapData
  return (
    <div className="p-4">
      <div className="flex justify-center items-center my-4">
        <RodaiToken />
        <div className={`${font.className} mx-4`}>
          <h1 className="text-3xl md:text-7xl font-bold text-center">
            RODKit Roadmap
          </h1>
        </div>
        <RodaiToken />
      </div>
      <div className="flex flex-col gap-4 justify-center items-stretch md:items-center">
        <MvpReleaseCard key={mvpRelease.version} release={mvpRelease} />
        <ReleaseCard key={secondRelease.version} release={secondRelease} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherReleases.map((release) => (
            <ReleaseCard key={release.version} release={release} />
          ))}
        </div>
      </div>
    </div>
  )
}
