export interface ReleaseItem {
  icon: string
  description: string
  fullDescription?: string
  complete: boolean
}

export interface RoadmapRelease {
  version: string
  codeName: string
  icon: string
  targetDate?: Date
  active?: boolean
  items: ReleaseItem[]
}

export const roadmapData: RoadmapRelease[] = [
  {
    version: '1.0.0',
    codeName: 'MVP (Minimum Viable Product)',
    icon: 'solar:rocket-2-bold',
    targetDate: new Date(2024, 3, 9),
    active: true,
    items: [
      {
        description: 'Technology Stack Selection',
        fullDescription:
          'Determine the optimal technologies for the project, considering scalability, performance, and team expertise.',
        icon: 'solar:posts-carousel-vertical-bold-duotone',
        complete: true,
      },
      {
        description: 'Brand Identity',
        fullDescription:
          'Design and create branding elements, including logos, color schemes, and typography, to establish a strong visual identity.',
        icon: 'solar:gallery-favourite-bold',
        complete: true,
      },
      {
        description: 'Project Architecture',
        fullDescription:
          'Establish the core architecture of the project, defining its overall structure and design patterns to ensure robustness and maintainability.',
        icon: 'solar:settings-bold-duotone',
        complete: true,
      },
      {
        description: 'Wallet Authentication',
        fullDescription:
          'Implement secure authentication mechanisms by integrating with Phantom and Solflare wallets for user identification and access control.',
        icon: 'solar:ghost-bold',
        complete: true,
      },
      {
        description: 'AI Architecture',
        fullDescription:
          'Develop the initial framework for AI functionalities, laying the groundwork for all future AI-driven features and capabilities.',
        icon: 'fluent:bot-sparkle-20-filled',
        complete: true,
      },
      {
        description: 'E-Commerce Infrastructure',
        fullDescription:
          'Create infrastructure for all payments that will be done within the platform, enabling users to buy goods and services within the platform.',
        icon: 'mdi:cart',
        complete: true,
      },
      {
        description: 'Token Minting',
        fullDescription:
          'Allow users to create (mint) their own tokens within the platform.',
        icon: 'ic:baseline-generating-tokens',
        complete: true,
      },
      {
        description: 'Token Import',
        fullDescription:
          'Allow users to import their existing tokens into the platform by token address',
        icon: 'iconoir:import',
        complete: true,
      },
      {
        description: 'Token Metadata Update',
        fullDescription:
          'Implement functionality allowing users to update their token metadata after initial minting.',
        icon: 'material-symbols:edit',
        complete: true,
      },
      {
        description: 'Mint Authority Revocation',
        fullDescription:
          'Allow users to revoke the minting authority, ensuring no more tokens can ever be created.',
        icon: 'pepicons-print:coins-circle-off',
        complete: true,
      },
      {
        description: 'Freeze Authority Revocation',
        fullDescription:
          'Allow users to remove freeze authority. This is necessary before you are allowed to setup a liquidity pool.',
        icon: 'ic:baseline-severe-cold',
        complete: true,
      },
      {
        description: 'Token Immutability',
        fullDescription:
          'Allow users to make their tokens immutable, improving the risk profile of the token.',
        icon: 'fluent:tag-lock-16-filled',
        complete: true,
      },
      {
        description: 'Tokenomics Setup',
        fullDescription:
          'Assist the user in creating a comprehensive and transparent tokenomics model, outlining how the tokens have been distributed after minting.',
        icon: 'pepicons-pop:coins',
        complete: true,
      },
      {
        description: 'Roadmap Setup',
        fullDescription:
          'Assist the user in creating a detailed and structured roadmap, providing clear visibility into the project’s future plans and milestones.',
        icon: 'streamline:arrow-roadmap',
        complete: true,
      },
      {
        description: 'FAQ Section Creation',
        fullDescription:
          'Compile and publish a FAQ section to address common questions and provide support for users.',
        icon: 'wpf:faq',
        complete: true,
      },
      {
        description: 'Automated Website Generation Tool',
        fullDescription:
          'After all information has been collected, generate a website for the token.',
        icon: 'solar:global-linear',
        complete: false,
      },
      {
        description: 'Deployment to staging environment',
        fullDescription:
          'Deploy to staging environment for internal testing against testnet.',
        icon: 'ooui:lab-flask',
        complete: true,
      },
      {
        description: 'Deployment to production',
        fullDescription: 'Deploy to production and point mainnet.',
        icon: 'tabler:ship',
        complete: false,
      },
    ],
  },
  {
    version: '1.1.0',
    codeName: 'Community Engagement',
    icon: 'iconoir:community',
    items: [
      {
        description: 'Crowdfunding',
        fullDescription:
          'Communities have goals that sometimes require funding. Aerosol will provide a platform for communities to raise funds for their strategic goals.',
        icon: 'solar:hand-money-bold',
        complete: false,
      },
      {
        description: 'Website Customization',
        fullDescription:
          'Allow administrators to customize the website to match their brand identity, ensuring a consistent and professional appearance.',
        icon: 'dashicons:admin-customizer',
        complete: false,
      },
      {
        description: 'Community Comments',
        fullDescription:
          'Implement a system for collecting and integrating community feedback into development processes, fostering a user-centric approach.',
        icon: 'fluent:person-feedback-16-filled',
        complete: false,
      },
      {
        description: 'Sentiment Tracker',
        fullDescription:
          'Implement mechanisms to gauge and analyze the sentiment within the community, aiding in feedback-driven development.',
        icon: 'mingcute:happy-line',
        complete: false,
      },
    ],
  },
  {
    version: '1.2.0',
    codeName: 'Marketplace',
    icon: 'tdesign:swap',
    items: [
      {
        description: 'OpenBook Market Creation',
        fullDescription:
          'Create an OpenBook market which is required in order to setup a liquidity pool.',
        icon: 'codicon:book',
        complete: false,
      },
      {
        description: 'Liquidity Pool Creation',
        fullDescription:
          'Establish a liquidity pool to enable everyone in the Solana ecosystem to buy the token in question.',
        icon: 'fluent:arrow-swap-16-filled',
        complete: false,
      },
      {
        description: 'Adding Liquidity',
        fullDescription: 'Allow admin to add liquidity to the liquidity pool.',
        icon: 'material-symbols:add',
        complete: false,
      },
      {
        description: 'Removing Liquidity',
        fullDescription:
          'Allow admin to remove liquidity from the liquidity pool.',
        icon: 'material-symbols:remove',
        complete: false,
      },
    ],
  },
  {
    version: '1.3.0',
    codeName: 'Professional Services',
    icon: 'ph:suitcase-bold',
    items: [
      {
        description: 'Telegram Group Setup',
        fullDescription:
          'Aerosol will provide full support in setting up a Telegram group for the community in question.',
        icon: 'ic:baseline-telegram',
        complete: false,
      },
      {
        description: 'Discord Server Setup',
        fullDescription:
          'Aerosol will provide full support in setting up a Discord server for the community in question.',
        icon: 'ic:baseline-discord',
        complete: false,
      },
      {
        description: 'Stickers and GIF Creation',
        fullDescription:
          'Aerosol will produce high-quality stickers, GIFs and other media content for engaging and motivating the community.',
        icon: 'fluent:sticker-12-regular',
        complete: false,
      },
      {
        description: 'Community Management Assistance',
        fullDescription:
          'Aerosol will place a community manager or moderators to assist in the day-to-day management of the community.',
        icon: 'fluent-mdl2:manager-self-service',
        complete: false,
      },
      {
        description: 'Marketing Campaigns Support',
        fullDescription:
          'Support and guide the execution of marketing campaigns to boost platform awareness and user engagement.',
        icon: 'tabler:ad-filled',
        complete: false,
      },
    ],
  },
  {
    version: '1.4.0',
    codeName: 'Listing Support',
    icon: 'clarity:bank-solid',
    items: [
      {
        description: 'CoinMarketCap Listing Support',
        fullDescription:
          'Provide guidance and support for listing the platform’s token on CoinMarketCap, enhancing visibility and credibility.',
        icon: 'simple-icons:coinmarketcap',
        complete: false,
      },
      {
        description: 'CoinGecko Listing Support',
        fullDescription:
          'Facilitate the process of listing on CoinGecko, aiming to increase the token’s accessibility and market presence.',
        icon: 'arcticons:coingecko',
        complete: false,
      },
      {
        description: 'Jupiter Strict List Inclusion Support',
        fullDescription:
          'Offer assistance in getting listed on the Jupiter Strict List, ensuring compliance and broadening the token’s reach.',
        icon: 'game-icons:jupiter',
        complete: false,
      },
      {
        description: 'Centralized Exchange Listing Support',
        fullDescription:
          'Provide expert advice and steps for listing the platform’s token on centralized exchanges, expanding trading opportunities.',
        icon: 'bi:bank',
        complete: false,
      },
    ],
  },
  {
    version: '1.5.0',
    codeName: 'Other Utilities',
    icon: 'mdi:tools',
    items: [
      {
        description: 'Risk Analysis',
        fullDescription:
          'Integrate with existing risk analysis tools to provide communities with insights into the risk profile of their token.',
        icon: 'mingcute:asterisk-fill',
        complete: false,
      },
      {
        description: 'RAID Helper Utility',
        fullDescription:
          'Information about this feature is not available at this time.',
        icon: 'ph:sword',
        complete: false,
      },
      {
        description: 'RAID Sniper Utility',
        fullDescription:
          'Information about this feature is not available at this time.',
        icon: 'ph:detective',
        complete: false,
      },
      {
        description: 'Token Lock',
        fullDescription:
          'Integrate with Streamflow to provide token lock functionality right from the platform.',
        icon: 'ic:baseline-lock',
        complete: false,
      },
    ],
  },
]
