import {
  AEROSOL_URL,
  CMC_URL,
  COINGECKO_URL,
  JUPITER_BUY_URL,
  MEXC_URL,
  PHANTOM_EMBEDDED_WALLET_COLLAB_POST,
  RODCINERATOR_ARTICLE_URL,
  RUGCHECK_URL,
  SOLCEX_URL,
  TOLY_COMPRESSION_RECOGNITION_POST,
} from '../../../../constants'
import { TokenOverviewItem } from '../../../../types'

export const overviewData: TokenOverviewItem[] = [
  {
    icon: '⏳',
    title: 'Standing the Test of Time',
    items: [
      'Launched on January 13, 2024.',
      'First AI meme on Solana... EVER.',
    ],
  },
  {
    icon: '💻',
    title: 'AI Utility',
    items: [
      <>
        Launched{' '}
        <a href={AEROSOL_URL} target="_blank" className="text-blue-500">
          Aerosol
        </a>{' '}
        in May 2024.
      </>,
      'Helps Solana communities monetize and build sustainable ecosystems.',
      'Thousands of transactions processed, with rapid growth.',
      <>
        <a
          href={TOLY_COMPRESSION_RECOGNITION_POST}
          target="_blank"
          className="text-blue-500"
        >
          Recognized by Toly
        </a>
        , the co-founder of Solana.
      </>,
      <>
        One of the first dapps{' '}
        <a
          href={PHANTOM_EMBEDDED_WALLET_COLLAB_POST}
          target="_blank"
          className="text-blue-500"
        >
          to integrate with Phantom embedded wallets
        </a>
        .
      </>,
    ],
  },

  {
    icon: '🏦',
    title: 'Central Exchange (CEX) Listings',
    items: [
      <>
        <a href={MEXC_URL} target="_blank" className="text-blue-500">
          MEXC
        </a>{' '}
        (March 30, 2024)
      </>,
      <>
        <a href={SOLCEX_URL} target="_blank" className="text-blue-500">
          SolCex
        </a>{' '}
        (December 11, 2024)
      </>,
    ],
  },
  {
    icon: '🔒',
    title: 'Secure',
    items: [
      'Liquidity pool locked for 30 years.',
      <span key="rugcheck_span">
        Risk level of 0 according to{' '}
        <a
          key="rugcheck_link"
          href={RUGCHECK_URL}
          target="_blank"
          className="text-blue-500"
        >
          Rugcheck
        </a>
        .
      </span>,
    ],
  },
  {
    icon: '🔍',
    title: 'Discoverable',
    items: [
      <>
        Listed on major crypto tracking platforms like{' '}
        <a href={CMC_URL} target="_blank" className="text-blue-500">
          CoinMarketCap
        </a>{' '}
        and{' '}
        <a href={COINGECKO_URL} target="_blank" className="text-blue-500">
          CoinGecko
        </a>
        .
      </>,
      'Categorized under the coveted 🤖 AI MEME section.',
    ],
  },
  {
    icon: '✅',
    title: 'Verified',
    items: [
      <>
        Verified on{' '}
        <a href={CMC_URL} target="_blank" className="text-blue-500">
          CoinMarketCap
        </a>
        ,{' '}
        <a href={COINGECKO_URL} target="_blank" className="text-blue-500">
          CoinGecko
        </a>
        , and{' '}
        <a href={JUPITER_BUY_URL} target="_blank" className="text-blue-500">
          Jupiter
        </a>
        .
      </>,
      'Established legitimacy for added security.',
    ],
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: 'Well-Distributed',
    items: ['Thousands of holders'],
  },
  {
    icon: '🧑‍🍳',
    title: 'Fully Committed Team',
    items: [
      'Dedicated team contributes to the Solana ecosystem.',
      'Actively engages with the community and focuses on long-term growth.',
    ],
  },

  {
    icon: '🔥',
    title: 'Deflationary',
    items: [
      'Powered by the Rodcinerator, which automatically burns $RODAI.',
      <>
        Supply decreases over time, boosting scarcity and long-term value.{' '}
        <a
          href={RODCINERATOR_ARTICLE_URL}
          target="_blank"
          className="text-blue-500"
        >
          Learn more about Rodcinerator
        </a>
        .
      </>,
    ],
  },
]
