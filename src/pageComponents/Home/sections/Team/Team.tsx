'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { FC } from 'react'

import { teamMembers } from './teamMembers'

export const TeamSection: FC = () => {
  return (
    <div className="w-full py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6">
            Team
          </h2>
          <div className="w-32 h-1 bg-[#3c1154] mx-auto"></div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-[#60E7E5] rounded-2xl p-8 text-center h-full flex flex-col">
                  {/* Avatar */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transition-colors">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-2xl font-black text-[#3c1154] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg font-bold text-[#3c1154] mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  {member.bio && (
                    <p className="text-base sm:text-lg text-[#3c1154] font-medium mb-6 flex-grow leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 pt-4 border-t border-[#3c1154]/20">
                    {member.social.telegram && (
                      <a
                        href={`https://t.me/${member.social.telegram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Image
                            src="/img/socials/telegram.png"
                            alt="telegram"
                            width={32}
                            height={32}
                            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer object-contain"
                            draggable={false}
                            unoptimized
                          />
                        </motion.div>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={`https://twitter.com/${member.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.15, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Image
                            src="/img/socials/x.png"
                            alt="twitter"
                            width={32}
                            height={32}
                            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer object-contain"
                            draggable={false}
                            unoptimized
                          />
                        </motion.div>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
