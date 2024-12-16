import { FC } from 'react'

export interface SlideProps {
  state: 'moving' | 'idle'
  direction: 'left' | 'right'
  visibilityRatio: number
}

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

export interface Slide {
  id: string
  label: string
  Component: FC<SlideProps>
  background: string
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
