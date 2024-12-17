import { cn } from '@nextui-org/react'
import { motion } from 'motion/react'
import { FC, MouseEventHandler, ReactNode } from 'react'

export interface ButtonProps {
  className?: string
  variant?:
    | 'solid'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'faded'
    | 'shadow'
    | 'ghost'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const variantClasses: Record<string, string> = {
  solid: 'bg-primary text-white',
  bordered: '!bg-transparent border-2 border-primary text-primary',
  light: 'bg-gray-100 text-gray-800',
  flat: 'bg-gray-200 text-gray-800',
  faded: 'bg-opacity-75 text-gray-700',
  shadow: 'shadow-lg',
  ghost: 'bg-transparent text-primary',
}

const colorClasses: Record<string, string> = {
  default: 'bg-gray-500 text-black',
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  success: 'bg-success text-white',
  warning: 'bg-warning text-white',
  danger: 'bg-danger text-white',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-md',
  lg: 'px-8 py-4 text-lg',
}

const radiusClasses: Record<string, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'solid',
  color = 'default',
  size = 'md',
  radius = 'full',
  ...props
}) => {
  return (
    <motion.button
      {...props}
      className={cn(
        'flex items-center justify-center font-bold',
        colorClasses[color],
        variantClasses[variant],
        sizeClasses[size],
        radiusClasses[radius],
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    />
  )
}
