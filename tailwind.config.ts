import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        levitate: 'levitate 12s ease-in-out infinite',
      },
      keyframes: {
        levitate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(4px)' },
          '70%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
