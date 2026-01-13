'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { motion } from 'motion/react'
import { FC } from 'react'

import { RODAI_MINT_ADDRESS } from '../../../app/contants'
import {
  AEROSOL_BURNER_URL,
  AEROSOL_URL,
  CMC_URL,
  COINGECKO_URL,
  JUPITER_BUY_URL,
  RAYDIUM_BUY_URL,
  RODCINERATOR_ARTICLE_URL,
  RUGCHECK_URL,
  UTM_SOURCE,
} from '../../../constants'
import { buildReferralUrl } from '../../../utils/urls'

const faqData = [
  {
    question: 'When was RODAI launched?',
    answer:
      'RODAI launched on January 13, 2024, making it the first AI meme token on Solana.',
  },
  {
    question: 'What makes RODAI special?',
    answer: (
      <>
        <p>
          RODAI is the first AI meme token on Solana, launched January 13, 2024.
          We pioneered the category by combining AI innovation with meme culture
          on the fastest blockchain in crypto, making RODAI a piece of Solana
          history.
        </p>
        <p>
          What sets RODAI apart is that it&apos;s built on real fundamentals.
          RODAI is tied to{' '}
          <a
            href={buildReferralUrl(AEROSOL_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_special_aerosol',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Aerosol&apos;s
          </a>{' '}
          builder success. As the team builds products and grows revenue, they
          reinvest in RODAI. Products like{' '}
          <a
            href={buildReferralUrl(AEROSOL_BURNER_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_special_burn_claim',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Burn & Claim
          </a>{' '}
          already process thousands of transactions monthly, with more products
          launching soon.
        </p>
        <p>
          RODAI is also deflationary, powered by the Rodcinerator which
          automatically burns RODAI tokens. As the supply decreases over time,
          it boosts scarcity and long-term value.
        </p>
        <p>
          RODAI is also highly trusted and discoverable. We&apos;re listed on
          major platforms like{' '}
          <a
            href={buildReferralUrl(CMC_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_special_cmc',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            CoinMarketCap
          </a>{' '}
          and{' '}
          <a
            href={buildReferralUrl(COINGECKO_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_special_coingecko',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            CoinGecko
          </a>
          , categorized under the coveted AI MEME section, establishing RODAI as
          a recognized leader in the category.
        </p>
      </>
    ),
  },
  {
    question: 'What is Aerosol?',
    answer: (
      <>
        <p>
          Aerosol is a software company that builds consumer-facing products for
          the Solana ecosystem. We focus on creating practical tools that solve
          real problems for users while aligning incentives with the communities
          and projects they support.
        </p>
        <p>
          We&apos;ve already launched{' '}
          <a
            href={buildReferralUrl(AEROSOL_BURNER_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_aerosol_burn_claim',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Burn & Claim
          </a>
          , a production-grade application that helps users reclaim SOL by
          cleaning up their wallets. The product is actively used by thousands
          of wallets and has processed hundreds of thousands of transactions to
          date. Beyond Burn & Claim, we are developing additional products that
          extend this model of utility, community participation, and sustainable
          revenue within the Solana ecosystem.
        </p>
        <p className="mt-4">
          <a
            href={buildReferralUrl(AEROSOL_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_aerosol',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Learn more about Aerosol
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: 'Is RODAI listed on centralized exchanges?',
    answer: (
      <>
        We used to be listed on MEXC but not anymore. Listing on centralized
        exchanges often requires us to pay thousands of dollars in listing fees
        and ongoing monthly costs just to keep the token listed there, which
        hampers our ability to grow. We believe the future is on-chain and have
        no interest in paying any more listing fees. Centralized exchanges may
        list us if they want. RODAI is available on decentralized exchanges like{' '}
        <a
          href={JUPITER_BUY_URL}
          target="_blank"
          className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
          rel="noreferrer"
        >
          Jupiter
        </a>{' '}
        and{' '}
        <a
          href={RAYDIUM_BUY_URL}
          target="_blank"
          className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
          rel="noreferrer"
        >
          Raydium
        </a>
        .
      </>
    ),
  },
  {
    question: 'How secure is RODAI?',
    answer: (
      <>
        <p>
          RODAI is highly secure. RODAI was created and is maintained by one of
          the most reputable teams in Solana. The liquidity pool is locked for
          30 years, and it has a risk level of 0 according to{' '}
          <a
            href={RUGCHECK_URL}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Rugcheck
          </a>
          .
        </p>
        <p className="mt-4">
          <a
            href={buildReferralUrl(AEROSOL_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_security_aerosol',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Learn more about Aerosol
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: 'Where can I find RODAI?',
    answer: (
      <>
        RODAI is listed on major crypto tracking platforms like{' '}
        <a
          href={buildReferralUrl(CMC_URL, {
            utm_source: UTM_SOURCE,
            utm_medium: 'website',
            utm_campaign: 'faq_cmc',
          })}
          target="_blank"
          className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
          rel="noreferrer"
        >
          CoinMarketCap
        </a>{' '}
        and{' '}
        <a
          href={buildReferralUrl(COINGECKO_URL, {
            utm_source: UTM_SOURCE,
            utm_medium: 'website',
            utm_campaign: 'faq_coingecko',
          })}
          target="_blank"
          className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
          rel="noreferrer"
        >
          CoinGecko
        </a>
        , categorized under the AI MEME section.
      </>
    ),
  },
  {
    question: 'Is RODAI verified?',
    answer: (
      <>
        Yes, RODAI is verified on all major platforms including{' '}
        <a
          href={buildReferralUrl(CMC_URL, {
            utm_source: UTM_SOURCE,
            utm_medium: 'website',
            utm_campaign: 'faq_verified_cmc',
          })}
          target="_blank"
          className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
          rel="noreferrer"
        >
          CoinMarketCap
        </a>
        ,{' '}
        <a
          href={buildReferralUrl(COINGECKO_URL, {
            utm_source: UTM_SOURCE,
            utm_medium: 'website',
            utm_campaign: 'faq_verified_coingecko',
          })}
          target="_blank"
          className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
          rel="noreferrer"
        >
          CoinGecko
        </a>
        , and{' '}
        <a
          href={JUPITER_BUY_URL}
          target="_blank"
          className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
          rel="noreferrer"
        >
          Jupiter
        </a>
        .
      </>
    ),
  },
  {
    question: 'How many holders does RODAI have?',
    answer: (
      <>
        <p>RODAI is well distributed and has thousands of holders.</p>
        <p className="mt-4">
          <a
            href={`https://solscan.io/token/${RODAI_MINT_ADDRESS}`}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            View current holder count on Solscan
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: 'Who is behind RODAI?',
    answer: (
      <>
        <p>
          RODAI is backed by Aerosol, one of the most reputable teams in Solana.
          Aerosol is a software company building consumer-facing products for
          the Solana ecosystem, focusing on creating practical tools that solve
          real problems for users while aligning incentives with the communities
          and projects they support.
        </p>
        <p>
          Aerosol has already launched{' '}
          <a
            href={buildReferralUrl(AEROSOL_BURNER_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_who_burn_claim',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Burn & Claim
          </a>
          , a production-grade application that helps users reclaim SOL by
          cleaning up their wallets. The product is actively used by thousands
          of wallets and has processed hundreds of thousands of transactions to
          date. The team actively contributes to the Solana ecosystem, engages
          with the community, and focuses on long-term growth.
        </p>
        <p className="mt-4">
          <a
            href={buildReferralUrl(AEROSOL_URL, {
              utm_source: UTM_SOURCE,
              utm_medium: 'website',
              utm_campaign: 'faq_who_learn_more',
            })}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Learn more about Aerosol
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: 'How does the deflationary mechanism work?',
    answer: (
      <>
        <p>
          RODAI is powered by the Rodcinerator, which automatically burns RODAI
          tokens. As the supply decreases over time, it boosts scarcity and
          long-term value.
        </p>
        <p className="mt-4">
          <a
            href={RODCINERATOR_ARTICLE_URL}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Learn more about Rodcinerator
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: 'What is the token supply?',
    answer: (
      <>
        <p>
          RODAI has a fixed supply of 69.42 trillion tokens with no mint
          authority, meaning no new tokens can be created. The liquidity pool is
          locked for 30 years. Since RODAI tokens can be burned through the
          Rodcinerator, the total supply decreases over time.
        </p>
        <p className="mt-4">
          <a
            href={`https://solscan.io/token/${RODAI_MINT_ADDRESS}`}
            target="_blank"
            className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
            rel="noreferrer"
          >
            Check the current total supply on Solscan
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: 'How did I not know about this gem!?',
    answer: (
      <>
        You&apos;re still early! We&apos;ve been here since January 13, 2024,
        but honestly? Most people are still discovering RODAI. You finding us
        now is perfect timing. You get to say you were here before it went
        mainstream AGAIN. Welcome aboard!{' '}
        <a
          href="https://t.me/rodaisol"
          target="_blank"
          className="text-[#3DDAD8] hover:text-[#60E7E5] font-bold underline decoration-2 underline-offset-4 transition-colors"
          rel="noreferrer"
        >
          Join our community on Telegram
        </a>
        .
      </>
    ),
  },
]

export const FAQSection: FC = () => {
  return (
    <div className="w-full py-32 px-4 faq-section">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-32 h-1 bg-[#3c1154] mx-auto"></div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="faq-accordion"
        >
          <Accordion
            variant="splitted"
            className="gap-4"
            itemClasses={{
              base: 'bg-white/10 backdrop-blur-sm rounded-xl shadow-none',
              title: 'text-white font-bold text-lg font-sans',
              trigger: 'px-6 py-4 hover:bg-white/5 transition-colors',
              indicator: 'text-white',
              content:
                'px-6 pb-4 text-white/90 font-medium leading-relaxed font-sans',
            }}
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.question}
                aria-label={faq.question}
              >
                <div className="text-lg">{faq.answer}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}
