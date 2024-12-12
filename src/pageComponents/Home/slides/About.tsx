'use client'

import { ScrollShadow } from '@nextui-org/react'

import { ArtMarquee } from '../../../components/ArtMarquee'

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full h-full overflow-hidden py-8 flex flex-col md:flex-row gap-4 md:gap-8"
    >
      <ScrollShadow
        orientation="horizontal"
        className="w-full h-full flex justify-center items-center"
      >
        <ArtMarquee />
      </ScrollShadow>
    </section>
  )
}
