import { RoadmapRelease } from './rodKitRoadmapData'

export function calculateReleaseCompletionPercentage(
  release: RoadmapRelease
): number {
  if (!release.items.length) {
    return 0
  }

  const totalItems = release.items.length
  const completedItems = release.items.filter((item) => item.complete).length

  const completionPercentage = (completedItems / totalItems) * 100

  return completionPercentage
}
