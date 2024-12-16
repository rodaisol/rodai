'use client'

import { motion } from 'framer-motion'

import { SlideProps } from '../../../../types'

import { teamMembers } from './teamMembers'

export const TeamSlide = ({ visibilityRatio }: SlideProps) => {
  return (
    <section className="px-8 py-12 w-full flex flex-col items-center text-white">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: visibilityRatio }}
        transition={{
          opacity: { duration: 0.5, ease: 'easeOut' },
        }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: visibilityRatio,
              y: visibilityRatio * 20, // Gentle vertical animation as it enters
              scale: visibilityRatio * 0.1 + 0.9, // Subtle scaling as it enters
            }}
            transition={{
              delay: index * 0.1, // Stagger the animations with a smaller delay
              duration: 0.6, // Slightly longer duration for smoothness
              ease: 'easeInOut', // Smooth easing
            }}
          >
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: visibilityRatio,
                scale: visibilityRatio * 0.1 + 0.9, // Smooth scaling of the avatar
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white">
                {member.role}
              </p>
            </div>

            <div className="flex space-x-4 mt-2">
              {member.social.telegram && (
                <a
                  href={`https://t.me/${member.social.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src="/img/social/telegram.png"
                    alt="telegram"
                    className="w-6 sm:w-7 md:w-8"
                  />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={`https://twitter.com/${member.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src="/img/social/x.png"
                    alt="twitter"
                    className="w-6 sm:w-7 md:w-8"
                  />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
