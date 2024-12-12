import { CheckIcon } from '@heroicons/react/20/solid'
import { Tooltip } from '@nextui-org/react'
import { DateTime } from 'luxon'
import Image from 'next/image'
import React from 'react'

import { roadmapData } from './roadmapData'

export const RoadmapSection = () => {
  return (
    <section
      id="roadmap"
      className="px-4 py-8 md:px-8 md:py-8 flex flex-col gap-8 w-full text-white"
    >
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-between">
        {roadmapData.map((phase, phaseIndex) => {
          const completedTasks = phase.items.filter(
            (item) => item.completedDate
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
                {phase.items.map((item, itemIndex) => {
                  const formattedDate = item.completedDate
                    ? DateTime.fromJSDate(item.completedDate).toFormat(
                        'LLL dd, yyyy'
                      )
                    : ''
                  const tooltipContent = item.completedDate
                    ? `Completed on ${formattedDate}`
                    : ''

                  return (
                    <li
                      key={itemIndex}
                      className={`flex items-center gap-2 mb-2 ${
                        !item.completedDate ? 'opacity-50' : ''
                      }`}
                    >
                      {item.completedDate ? (
                        <CheckIcon className="w-6 h-6" />
                      ) : (
                        <div className="w-6 h-6"></div>
                      )}
                      <span className="flex items-center">
                        {item.completedDate && item.major ? (
                          <>
                            <Tooltip
                              content="Major milestone"
                              showArrow
                              placement="top"
                            >
                              <div className="animate-major-milestone-icon-levitate mr-2 cursor-pointer">
                                <Image
                                  src="/img/icons/milestone.svg"
                                  alt="Milestone"
                                  width={20}
                                  height={20}
                                />
                              </div>
                            </Tooltip>
                            <Tooltip
                              content={tooltipContent}
                              showArrow
                              placement="right-start"
                            >
                              <strong className="cursor-pointer text-[#fcd425]">
                                {item.task}
                              </strong>
                            </Tooltip>
                          </>
                        ) : (
                          <>
                            {item.completedDate ? (
                              <Tooltip
                                content={tooltipContent}
                                showArrow
                                placement="right-start"
                              >
                                <span className="cursor-pointer">
                                  {item.task}
                                </span>
                              </Tooltip>
                            ) : (
                              <span>{item.task}</span>
                            )}
                          </>
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
