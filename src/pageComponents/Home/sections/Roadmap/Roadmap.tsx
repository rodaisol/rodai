import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

import { roadmapData } from './roadmapData'

export const RoadmapSection = () => {
  return (
    <section
      id="roadmap"
      className="px-4 py-8 md:px-8 md:py-8 flex flex-col gap-8 w-full text-white"
    >
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mb-8">
        <h2 className="text-4xl md:text-6xl lg:text-8xl">Roadmap</h2>
        <img
          className="w-16 md:w-20 h-16 md:h-20"
          src="/img/icons/roadmap.svg"
          alt="Roadmap Icon"
        />
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-between">
        {roadmapData.map((phase, phaseIndex) => {
          const completedTasks = phase.items.filter(
            (item) => item.completed
          ).length
          const completionRate = (completedTasks / phase.items.length) * 100
          const backgroundStyle = {
            backgroundImage: `linear-gradient(to top, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.5) ${completionRate}%, transparent ${completionRate}%)`,
          }

          return (
            <div
              key={phaseIndex}
              className="flex-1 border-2 rounded-lg p-4 bg-gray-800 min-w-[280px] md:min-w-[30%]"
              style={backgroundStyle}
            >
              <h3 className="font-bold text-lg md:text-xl mb-4">
                {phase.phase}
              </h3>
              <ul className="list-none m-0 p-0">
                {phase.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-center gap-2 mb-2 ${
                      !item.completed ? 'opacity-50' : ''
                    }`}
                  >
                    {item.completed ? (
                      <CheckIcon className="w-6 h-6" />
                    ) : (
                      <div className="w-6 h-6"></div>
                    )}
                    <span>{item.task}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
