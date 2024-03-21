'use client'

import { Icon } from '@iconify/react'
import type { CardProps } from '@nextui-org/react'
import {
  Card,
  CardBody,
  CardHeader,
  Listbox,
  ListboxItem,
  Progress,
} from '@nextui-org/react'
import { DateTime } from 'luxon'
import React from 'react'

import { ReleaseItem, RoadmapRelease } from './rodKitRoadmapData'
import { calculateReleaseCompletionPercentage } from './utils'

export interface MvpReleaseCardProps extends CardProps {
  release: RoadmapRelease
}

export function MvpReleaseCard({ release, ...props }: MvpReleaseCardProps) {
  const halfwayIndex = Math.ceil(release.items.length / 2)
  const itemsFirstHalf = release.items.slice(0, halfwayIndex)
  const itemsSecondHalf = release.items.slice(halfwayIndex)

  return (
    <Card
      {...props}
      className="max-w-[1420px] py-1 md:py-4 border-medium border-orange-600"
    >
      <CardHeader className="flex items-center gap-3 px-4 pb-0 pt-3 md:px-10 md:pt-5">
        <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br from-secondary-300 to-primary-500">
          <Icon className="text-white" icon={release.icon} width={30} />
        </div>
        <div className="flex flex-col flex-1">
          <Progress
            showValueLabel={release.active}
            classNames={{
              label: 'font-medium',
              indicator: 'bg-gradient-to-r from-primary-400 to-secondary-500',
              value: 'text-foreground/60',
            }}
            label={`${release.version}: ${release.codeName}`}
            value={calculateReleaseCompletionPercentage(release)}
          />
          {release.targetDate && (
            <div className="text-small text-slate-300 mt-2">
              Target Date:{' '}
              {DateTime.fromJSDate(release.targetDate).toFormat('LLL dd, yyyy')}
            </div>
          )}
        </div>
      </CardHeader>
      <CardBody className="px-1 pt-3 sm:px-2 md:px-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <Listbox
              hideSelectedIcon
              aria-label="Onboarding checklist part one"
              items={itemsFirstHalf}
              variant="flat"
            >
              {(item: ReleaseItem) => (
                <ListboxItem
                  key={item.description}
                  classNames={{
                    base: 'w-full px-2 md:px-4 gap-3 cursor-default',
                    title: 'text-medium font-medium',
                    description: 'text-small',
                  }}
                  title={item.description}
                  description={item.fullDescription}
                  startContent={
                    <div className="flex items-center rounded-md border border-divider p-2">
                      <Icon
                        className="text-secondary"
                        icon={item.icon}
                        width={24}
                      />
                    </div>
                  }
                  endContent={
                    <div className="flex flex-none">
                      {item.complete ? (
                        <Icon
                          className="text-secondary"
                          icon="solar:check-circle-bold"
                          width={30}
                        />
                      ) : null}
                    </div>
                  }
                />
              )}
            </Listbox>
          </div>
          <div className="flex-1">
            <Listbox hideSelectedIcon items={itemsSecondHalf} variant="flat">
              {itemsSecondHalf.map((item: ReleaseItem) => (
                <ListboxItem
                  key={item.description}
                  classNames={{
                    base: 'w-full px-2 md:px-4 gap-3 cursor-default',
                    title: 'text-medium font-medium',
                    description: 'text-small',
                  }}
                  title={item.description}
                  description={item.fullDescription}
                  startContent={
                    <div className="flex items-center rounded-md border border-divider p-2">
                      <Icon
                        className="text-secondary"
                        icon={item.icon}
                        width={24}
                      />
                    </div>
                  }
                  endContent={
                    <div className="flex flex-none">
                      {item.complete ? (
                        <Icon
                          className="text-secondary"
                          icon="solar:check-circle-bold"
                          width={30}
                        />
                      ) : null}
                    </div>
                  }
                />
              ))}
            </Listbox>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
