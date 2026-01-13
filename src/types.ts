import { ReactNode } from 'react'

export interface MediaConfig {
  fileName: string
  type: 'image' | 'video'
  aspectRatio: string
  width: number
  height: number
}

export interface Media extends MediaConfig {
  src: string
}

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

export interface TokenOverviewItem {
  icon: ReactNode
  title: ReactNode
  items: ReactNode[]
}
