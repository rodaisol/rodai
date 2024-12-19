import { motion } from 'framer-motion'
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
    <div
      className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] cursor-pointer flex justify-center items-center 
        rounded-full bg-white/30 p-2"
      onClick={togglePlay}
    >
      {/* Music Notes GIF Above the Player */}
      {isPlaying && (
        <motion.img
          src="/img/musical-notes.gif"
          alt="Music Notes"
          className="absolute top-[-60px] w-[60px] sm:w-[80px] opacity-75"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Pulsing SVG Outer Ring */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        animate={
          isPlaying
            ? {
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="4"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeDasharray="282.6"
          strokeDashoffset={282.6 - (progress / 100) * 282.6}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.2s ease-out' }}
        />
      </motion.svg>

      {/* Boombox-Like Pulsing Image */}
      <motion.img
        src="/img/rod/dj-rod.webp"
        alt="DJ Rod"
        className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] rounded-full absolute"
        animate={
          isPlaying
            ? {
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{
          duration: 0.9,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </div>
  )
}
