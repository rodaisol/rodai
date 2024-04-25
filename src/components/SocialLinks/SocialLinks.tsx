import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

export interface SocialLinksProps {
  className?: string
}

export const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'flex flex-wrap justify-center md:justify-start text-center gap-4',
        className
      )}
    >
      <Link href="https://t.me/rodaisol" target="_blank">
        <img
          src="/img/social/telegram.png"
          alt="telegram"
          className="w-12 md:w-16 cursor-pointer"
        />
      </Link>
      <Link href="https://twitter.com/aerosol_ai" target="_blank">
        <img
          src="/img/social/x.png"
          alt="twitter"
          className="w-12 md:w-16 cursor-pointer"
        />
      </Link>
      <Link href="https://discord.gg/rodai" target="_blank">
        <img
          src="/img/social/discord.png"
          alt="discord"
          className="w-12 md:w-16 cursor-pointer"
        />
      </Link>
      <Link href="https://youtube.com/@RodAISol" target="_blank">
        <img
          src="/img/social/youtube.png"
          alt="youtube"
          className="w-12 md:w-16 cursor-pointer"
        />
      </Link>
    </div>
  )
}
