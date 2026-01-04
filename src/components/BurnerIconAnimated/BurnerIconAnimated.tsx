'use client'

import Image from 'next/image'
import { FC } from 'react'

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Original dimensions: 1080x1080
const BURNER_ICON_ANIMATED_SIZES: Record<
  IconSize,
  { width: number; height: number }
> = {
  xs: { width: 32, height: 32 },
  sm: { width: 64, height: 64 },
  md: { width: 128, height: 128 },
  lg: { width: 192, height: 192 },
  xl: { width: 256, height: 256 },
}

interface BurnerIconAnimatedProps {
  size?: IconSize
  width?: number
  height?: number
  className?: string
}

export const BurnerIconAnimated: FC<BurnerIconAnimatedProps> = ({
  size = 'md',
  width,
  height,
  className,
}) => {
  const sizeConfig = BURNER_ICON_ANIMATED_SIZES[size]
  const finalWidth = width ?? sizeConfig.width
  const finalHeight = height ?? sizeConfig.height

  return (
    <Image
      src="/img/logos/burner/logo-icon-animated.webp"
      alt="Burner Logo Animated"
      width={finalWidth}
      height={finalHeight}
      className={className}
      draggable={false}
    />
  )
}
