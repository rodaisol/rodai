import Link from 'next/link'

export const faqData = [
  {
    question: 'How do I buy and sell RODAI?',
    answer:
      'You can trade RODAI on decentralised exchanges like Raydium and Jupiter.',
  },
  {
    question: "Will RODAI be listed on CEX's?",
    answer: 'Yes, CEX is coming very soon.',
  },
  {
    question: 'Is there a RODAI whitepaper?',
    answer: (
      <p>
        Yes! Please see our whitepaper{' '}
        <Link href="/whitepaper.pdf" target="_blank" className="underline">
          here
        </Link>
        .
      </p>
    ),
  },
  {
    question: 'Worried about a rug pull?',
    answer: (
      <p className="text-base leading-relaxed">
        At RODAI, we understand the importance of trust and security in the
        crypto space. Our team is deeply committed to the integrity and
        long-term success of our project. We go beyond just words to ensure our
        investors feel secure and confident in their decision to support us.
        <br />
        <br />
        Here’s how we safeguard against rug pulls:
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Transparent Team:</strong> Our team’s identities are
            publicly known, and we maintain an open line of communication with
            our community. Feel free to join our Telegram group or any of our
            social media platforms to get to know us better and see our
            commitment firsthand.
          </li>
          <li>
            <strong>Locking Liquidity:</strong> A significant portion of our
            liquidity is locked in smart contracts, with terms that are publicly
            verifiable. This prevents the possibility of a rug pull by ensuring
            that the liquidity cannot be suddenly withdrawn.
          </li>
          <li>
            <strong>Community Engagement:</strong> We believe in the power of
            our community and regularly engage with our members for feedback,
            updates, and governance decisions. Our community is the backbone of
            our project, and we strive to maintain a relationship built on trust
            and transparency.
          </li>
          <li>
            <strong>Public Treasury Funds:</strong> Transparency extends to our
            finances. Visit our{' '}
            <Link
              href="https://app.squads.so/squads/4HtuYEhUtZmYbRpQDMTcSTfhEsrjTtBUTPb7NFpKDJNg/home"
              target="_blank"
              className="underline"
            >
              Public Treasury Fund
            </Link>{' '}
            to see the current financial status of RODAI’s treasury. This
            openness ensures all stakeholders can monitor our financial health
            and allocations, further establishing our commitment to transparency
            and accountability.
          </li>
        </ul>
        <br />
        We also invite you to review our{' '}
        <Link
          href="https://rugcheck.xyz/tokens/GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC"
          target="_blank"
          className="underline"
        >
          RugCheck score
        </Link>
        , which provides an independent assessment of our project’s security and
        trustworthiness. Your peace of mind is our top priority, and we’re
        dedicated to maintaining the highest standards of safety and integrity.
        <br />
        <br />
        Thank you for considering RODAI. We’re here for the long rod, committed
        to delivering value and security to our investors.
      </p>
    ),
  },
]
