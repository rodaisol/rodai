import classNames from 'classnames'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface SocialLinksProps {
  className?: string
}

const socialLinks = [
  {
    href: 'https://t.me/rodaisol',
    src: '/img/socials/telegram.png',
    alt: 'telegram',
  },
  {
    href: 'https://x.com/rodaimeme',
    src: '/img/socials/x.png',
    alt: 'x',
    className: 'w-6 md:w-8',
  },
  {
    href: 'https://youtube.com/@RodAISol',
    src: '/img/socials/youtube.png',
    alt: 'youtube',
  },
]

export const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'flex flex-wrap justify-center text-center gap-5 items-center',
        className
      )}
    >
      {socialLinks.map((link) => (
        <Link key={link.href} href={link.href} target="_blank" rel="noreferrer">
          <motion.div
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={32}
              height={32}
              className={classNames(
                'w-7 h-7 sm:w-8 sm:h-8 cursor-pointer filter brightness-0 invert object-contain',
                link.className
              )}
              draggable={false}
              unoptimized
            />
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
