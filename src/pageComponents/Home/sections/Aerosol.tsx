'use client'

import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'

export const AerosolSection = () => {
  return (
    <section
      id="how-to-buy"
      className="px-4 py-8 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8"
    >
      <div className="flex flex-col gap-4 md:gap-8 md:flex-1">
        <h2 className="flex gap-2 items-center text-5xl md:text-6xl lg:text-7xl">
          <div>What is</div>
          <div className="flex items-center">
            <Image
              src="/img/aerosol/aerosol-logo.png"
              alt="Aerosol logo"
              width={68}
              height={68}
            />
            <Image
              src="/img/aerosol/aerosol-logo-text.png"
              alt="logo"
              draggable={false}
              width={183}
              height={60}
            />
          </div>
          ?
        </h2>
        <div>
          <p>
            Aerosol is an innovative platform under development, designed to
            empower the Solana blockchain community. It serves as a foundational
            tool for creating and maintaining community tokens, providing a
            comprehensive suite of features not just for token creation but also
            for fostering and sustaining vibrant communities.
          </p>
          <p>
            With the flexibility to access Aerosol services using RODAI, SOL,
            and stablecoins, we ensure an inclusive approach, allowing a broad
            range of users to engage with our platform, leveraging the payment
            method that best suits their needs.
          </p>

          <h3 className="text-lg font-bold my-3">
            Payment Flexibility and Community Engagement
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Transactions with RODAI directly support the ecosystem, with a
              portion allocated to the treasury to help cover operation costs
              and a part also being burned to reduce the RODAI supply.
            </li>
            <li>
              Transactions using SOL or stablecoins will involve swapping these
              into RODAI first, with a portion supporting our treasury and the
              remainder being burned, also enhancing the value of RODAI.
            </li>
            <li>
              RODAI holders will benefit from exclusive features within Aerosol,
              designed to enhance their experience and provide additional value.
              These features are a testament to our commitment to the RODAI
              community and aim to offer unique benefits to our dedicated users.
            </li>
          </ul>

          <h3 className="text-lg font-bold my-3">Why Choose Aerosol?</h3>
          <p>
            Opting for Aerosol for your community token project on Solana
            signifies a commitment to a platform that prioritizes community
            empowerment at its core. Through a blend of diverse payment options,
            exclusive benefits for RODAI holders, and a suite of tools designed
            to foster and sustain vibrant communities, Aerosol is set to
            catalyze the growth of a robust and thriving ecosystem on the Solana
            blockchain.
          </p>

          <p className="mt-4">
            <strong>Note:</strong> As Aerosol is still under development, we are
            committed to ensuring it not only meets the needs of our users but
            also contributes to the overall health and growth of the community.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            as={Link}
            href="/aerosol"
            target="_blank"
            variant="bordered"
            className="border-white"
            size="lg"
          >
            See Aerosol Roadmap
          </Button>
          <Button
            as={Link}
            href="https://aerosol.community"
            target="_blank"
            size="lg"
            className="flex bg-gradient-to-tr from-pink-500 via-indigo-500 to-sky-600 shadow-lg"
          >
            Experience Aerosol
          </Button>
        </div>
      </div>
    </section>
  )
}
