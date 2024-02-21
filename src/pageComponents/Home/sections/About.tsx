'use client'

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="px-4 py-8 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8"
    >
      <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl lg:text-7xl">About RODAI</h2>
        <p className="text-md md:text-lg">
          RODAI – personified by the likeable rod-shaped character Rod – is an
          ambitious venture aiming to join together technological innovation,
          global fellowship and inclusiveness. The project is set out to harness
          the power of positive community empowerment, comroddery and
          technological inspiration to create something truly permanent and
          impactful.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/img/rod/about_rod.gif"
          className="max-w-full h-auto"
          alt="The Rod to Rule Them All"
        />
      </div>
    </section>
  )
}
