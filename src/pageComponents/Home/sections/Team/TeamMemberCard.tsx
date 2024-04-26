'use client'

import { Avatar, Link, cn } from '@nextui-org/react'
import React, { FC } from 'react'

export type TeamMember = {
  name: string
  avatar: string
  role: string
  bio?: string
  social: {
    twitter: string
    telegram: string
  }
}

export type TeamMemberCardProps = React.HTMLAttributes<HTMLDivElement> &
  TeamMember

export const TeamMemberCard: FC<TeamMemberCardProps> = ({
  children,
  avatar,
  name,
  role,
  bio,
  social,
  className,
  ...props
}) => (
  <div
    className={cn(
      'flex flex-col items-center rounded-large bg-content1/85 px-4 py-6 text-center shadow-small',
      className
    )}
    {...props}
  >
    <Avatar className="h-20 w-20" src={avatar} />
    <h3 className="mt-2 font-medium">{name || children}</h3>
    <span className="text-small text-default-500">{role}</span>
    <p className="flex-1 mb-4 mt-2 text-default-600">{bio}</p>
    <div className="flex gap-4">
      {social?.telegram && (
        <Link isExternal href={`https://t.me/${social.telegram}`}>
          <img
            src="/img/social/telegram.png"
            alt="telegram"
            className="w-8 cursor-pointer"
          />
        </Link>
      )}
      {social?.twitter && (
        <Link isExternal href={`https://twitter.com/${social.twitter}`}>
          <img
            src="/img/social/x.png"
            alt="twitter"
            className="w-8 cursor-pointer"
          />
        </Link>
      )}
    </div>
  </div>
)
