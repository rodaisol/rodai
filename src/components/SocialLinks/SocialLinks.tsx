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
          className="w-10 md:w-12 cursor-pointer"
        />
      </Link>
      <Link href="https://x.com/rodaimeme" target="_blank">
        <img
          src="/img/social/x.png"
          alt="x"
          className="w-10 md:w-12 cursor-pointer"
        />
      </Link>
      <Link href="https://discord.gg/rodai" target="_blank">
        <img
          src="/img/social/discord.png"
          alt="discord"
          className="w-10 md:w-12 cursor-pointer"
        />
      </Link>
      <Link href="https://youtube.com/@RodAISol" target="_blank">
        <img
          src="/img/social/youtube.png"
          alt="youtube"
          className="w-10 md:w-12 cursor-pointer"
        />
      </Link>
      <Link href="https://www.instagram.com/rodai.meme" target="_blank">
        <img
          src="/img/social/instagram.webp"
          alt="instagram"
          className="w-10 md:w-12 cursor-pointer rounded-full"
        />
      </Link>
      <Link href="https://www.tiktok.com/@rodai.meme" target="_blank">
        <img
          src="/img/social/tiktok.png"
          alt="tiktok"
          className="w-10 md:w-12 cursor-pointer rounded-full"
        />
      </Link>
      <Link href="https://www.reddit.com/r/RODAI" target="_blank">
        <img
          src="/img/social/reddit.png"
          alt="reddit"
          className="w-10 md:w-12 cursor-pointer rounded-full"
        />
      </Link>
    </div>
  )
}
