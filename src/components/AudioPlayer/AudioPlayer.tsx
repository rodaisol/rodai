import { motion } from 'motion/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface AudioPlayerProps {
  tracks: string[]
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    const updateProgress = () => {
      if (!audioRef.current) return
      const percentage =
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(percentage)
    }

    const handleTrackEnd = () => {
      setIsPlaying(false)
      setProgress(0)

      if (tracks.length > 1) {
        const nextTrackIndex = (currentTrackIndex + 1) % tracks.length
        setCurrentTrackIndex(nextTrackIndex)
        audioRef.current?.pause()
        audioRef.current = new Audio(tracks[nextTrackIndex])
        audioRef.current.play()
        setIsPlaying(true)
      }
    }

    if (tracks.length === 0) return

    if (!audioRef.current) {
      audioRef.current = new Audio(tracks[currentTrackIndex])
    }

    const audio = audioRef.current
    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('ended', handleTrackEnd)

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('ended', handleTrackEnd)
    }
  }, [currentTrackIndex, tracks])

  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={togglePlay}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Music Notes Animation Above */}
      {isPlaying && (
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-6 bg-[#3DDAD8] rounded-full"
                animate={
                  isPlaying
                    ? {
                        height: [12, 24, 12],
                        opacity: [0.5, 1, 0.5],
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Main Player Container */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        {/* Progress Ring Background */}
        <svg
          className="absolute w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#3DDAD8"
            strokeWidth="3"
            strokeDasharray="282.6"
            strokeDashoffset={282.6 - (progress / 100) * 282.6}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>

        {/* Glow Effect When Playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full bg-[#3DDAD8]/20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        {/* Inner Container with Gradient Border */}
        <div
          className={`absolute inset-2 rounded-full border-2 transition-all duration-300 ${
            isPlaying
              ? 'border-[#3DDAD8] bg-[#3c1154]/30'
              : 'border-white/20 bg-[#3c1154]/50'
          }`}
        >
          {/* DJ RODAI Image */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden"
            animate={
              isPlaying
                ? {
                    scale: [1, 1.05, 1],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <Image
              src="/img/rod/dj-rodai.png"
              alt="DJ RODAI"
              fill
              className="object-top object-cover"
              style={{ objectPosition: 'center top' }}
              draggable={false}
            />
          </motion.div>

          {/* Play Indicator - Only show when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
