import { motion } from 'motion/react'
import Image from 'next/image'

export const SwipeIndicator = ({ label = 'Swipe' }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <motion.div
        className="w-10 h-10"
        initial={{ rotate: 0, x: 0, y: 0 }}
        animate={{
          rotate: [25, 0, -25, 0],
          x: [0, 30, -30, 0], // Reversed swipe direction
          y: [0, -10, -10, 0], // Slight lift motion remains
        }}
        transition={{
          duration: 2,
          ease: [0.42, 0, 0.58, 1],
          times: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1, // Pause for realism
        }}
      >
        <Image
          src="/img/icons/hand.png"
          alt="Swipe Hand"
          width={40}
          height={40}
          className="w-full h-full"
          draggable={false}
        />
      </motion.div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
