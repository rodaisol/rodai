'use client'

import { SocialLinks } from '../../../components/SocialLinks'

export const CommunitySection = () => {
  return (
    <section
      id="community"
      className="px-4 py-8 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8"
    >
      <div className="flex flex-col gap-4 md:gap-8 md:flex-1">
        <p className="text-md md:text-lg">
          As the Rod is evergrowing, so is its community. RODAI is bringing
          people together around the world to a shared vision of progress and
          possibility. We believe in the power of communality – the idea that we
          are stronger together than we could ever be apart. We welcome everyone
          with open arms to Join Us on this mission to lay the foundations for
          something that lasts for a lifetime.
        </p>
        <SocialLinks />
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <img
          src="/img/rod/rod_community.png"
          className="max-w-full h-auto"
          alt="Join our Community"
        />
      </div>
    </section>
  )
}
