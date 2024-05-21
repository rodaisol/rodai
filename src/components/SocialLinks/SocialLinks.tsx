import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import classNames from 'classnames'
import Image from 'next/image'
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
      <Dropdown size="lg">
        <DropdownTrigger>
          <img
            src="/img/social/x.png"
            alt="twitter"
            className="w-10 md:w-12 cursor-pointer"
          />
        </DropdownTrigger>
        <DropdownMenu
          variant="bordered"
          aria-label="Dropdown menu for buying options"
        >
          <DropdownItem
            key="rodai-community"
            className="text-white"
            as={Link}
            target="_blank"
            href="https://x.com/rodaimeme"
            startContent={
              <Image
                draggable={false}
                src="/img/rod/x_rodaimeme.jpg"
                alt="RODAI community X account logo"
                className="rounded-full"
                width={32}
                height={32}
              />
            }
          >
            @rodaimeme
          </DropdownItem>
          <DropdownItem
            key="aerosol"
            className="text-white"
            as={Link}
            target="_blank"
            href="https://x.com/aerosol_ai"
            startContent={
              <Image
                draggable={false}
                src="/img/aerosol/aerosol-logo.png"
                alt="Aerosol logo"
                className="rounded-full"
                width={32}
                height={32}
              />
            }
          >
            @aerosol_ai
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
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
