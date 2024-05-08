'use client'

import { Spacer } from '@nextui-org/react'

import { TeamMemberCard } from './TeamMemberCard'
import { teamMembers } from './teamMembers'

export const TeamSection = () => {
  return (
    <section className="px-4 py-8 flex justify-center w-full">
      <div className="flex max-w-4xl flex-col items-center py-24">
        <div className="flex max-w-xl flex-col text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight">
            Our Team
          </h1>

          <Spacer y={4} />
          <h2 className="text-large">
            We are highly committed to the success of our project and our
            community. Please let contact us with ideas, questions or concerns.
          </h2>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
