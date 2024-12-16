'use client'

import { teamMembers } from './teamMembers'

export const TeamSlide = () => {
  return (
    <section className="px-8 py-12 w-full flex flex-col items-center text-white">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden">
              <img
                src={member.avatar}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>
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
          </div>
        ))}
      </div>
    </section>
  )
}
