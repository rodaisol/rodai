import classNames from 'classnames'
import { motion } from 'motion/react'
import Link from 'next/link'
import { FC } from 'react'

export interface SocialLinksProps {
  className?: string
}

const socialLinks = [
  {
    href: 'https://t.me/rodaisol',
    src: '/img/social/telegram.png',
    alt: 'telegram',
  },
  {
    href: 'https://x.com/rodaimeme',
    src: '/img/social/x.png',
    alt: 'x',
    className: 'w-6 md:w-8',
  },
  {
    href: 'https://discord.gg/rodai',
    src: '/img/social/discord.png',
    alt: 'discord',
  },
  {
    href: 'https://youtube.com/@RodAISol',
    src: '/img/social/youtube.png',
    alt: 'youtube',
  },
  {
    href: 'https://www.instagram.com/rodai.meme',
    src: '/img/social/instagram.png',
    alt: 'instagram',
  },
  {
    href: 'https://www.tiktok.com/@rodai.meme',
    src: '/img/social/tiktok.png',
    alt: 'tiktok',
  },
]

export const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'flex flex-wrap justify-center md:justify-start text-center gap-4 items-center',
        className
      )}
    >
      {socialLinks.map((link) => (
        <Link key={link.href} href={link.href} target="_blank">
          <motion.img
            src={link.src}
            alt={link.alt}
            className={classNames('w-8 md:w-10 cursor-pointer', link.className)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          />
        </Link>
      ))}
    </div>
  )
}
