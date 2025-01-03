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
  currentTargetDate?: Date
  active?: boolean
  items: ReleaseItem[]
}

export const roadmapData: RoadmapRelease[] = [
  {
    version: '1.0.0',
    codeName: 'MVP (Minimum Viable Product)',
    icon: 'solar:rocket-2-bold',
    targetDate: new Date(2024, 3, 5),
    currentTargetDate: new Date(2024, 3, 13),
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
        complete: true,
      },
      {
        description: 'Deployment to staging environment',
        fullDescription:
          'Deploy to staging environment for internal testing against testnet.',
        icon: 'ooui:lab-flask',
        complete: true,
      },
      {
        description: 'Deployment to production (for testing only)',
        fullDescription:
          'Deploy to production and mainnet for the purposes of testing. The official launch date will be provided by the team later on.',
        icon: 'tabler:ship',
        complete: true,
      },
    ],
  },
  {
    version: '1.1.0',
    codeName: 'Marketplace',
    icon: 'tdesign:swap',
    active: true,
    targetDate: new Date(2024, 3, 20),
    currentTargetDate: new Date(2024, 3, 22),
    items: [
      {
        description: 'Openbook Market Creation',
        fullDescription:
          'Create an Openbook market which is required in order to setup a liquidity pool.',
        icon: 'codicon:book',
        complete: true,
      },
      {
        description: 'Liquidity Pool Creation',
        fullDescription:
          'Establish a liquidity pool to enable everyone in the Solana ecosystem to buy the token in question.',
        icon: 'fluent:arrow-swap-16-filled',
        complete: true,
      },
    ],
  },
  {
    version: '1.2.0',
    codeName: 'Search and Discovery',
    icon: 'iconamoon:search-duotone',
    targetDate: new Date(2024, 4, 10),
    currentTargetDate: new Date(2024, 4, 25),
    items: [
      {
        description: 'Automatic Token Imports',
        fullDescription:
          'Automatically import token projects that have sufficient liquidity.',
        icon: 'solar:hand-money-bold',
        complete: true,
      },
      {
        description: 'Price and Market Info',
        fullDescription:
          'Automatically import and refresh real time price and market data from the Solana blockchain.',
        icon: 'icon-park-outline:stock-market',
        complete: true,
      },
      {
        description: 'Full-text search',
        fullDescription:
          'Allow users to search for tokens, communities, and projects using full-text search.',
        icon: 'iconamoon:search-duotone',
        complete: true,
      },
      {
        description: 'Sorting and Filtering',
        fullDescription:
          'Allow users to sort and filter search results based on various criteria.',
        icon: 'solar:filter-bold-duotone',
        complete: true,
      },
    ],
  },
  {
    version: '1.3.0',
    targetDate: new Date(2024, 4, 17),
    codeName: 'All About the Buyers',
    icon: 'tdesign:money',
    items: [
      {
        description: 'Buy',
        fullDescription: 'Allow users to buy tokens right from within Aerosol',
        icon: 'fluent:money-hand-16-filled',
        complete: true,
      },
      {
        description: 'Risk Analysis',
        fullDescription:
          'Provide a risk analysis for each token to protect the user as much as possible from rug pulls.',
        icon: 'ph:warning-duotone',
        complete: true,
      },
      {
        description: 'Likes',
        fullDescription:
          'Allow buyers to like and track their favorite tokens in a separate list.',
        icon: 'ph:heart-duotone',
        complete: true,
      },
      {
        description: 'Track Buys',
        fullDescription:
          'Keep track of all the tokens users buy within Aerosol.',
        icon: 'pajamas:log',
        complete: true,
      },
    ],
  },
  {
    version: '1.4.0',
    codeName: '[Data] Power to the People',
    icon: 'streamline:fist',
    targetDate: new Date(2024, 5, 29),
    items: [
      {
        description: 'Date Added',
        fullDescription:
          'Show date added of tokens so users can quickly detect when a token became tradeable.',
        icon: 'clarity:new-line',
        complete: true,
      },
      {
        description: 'Categorization',
        fullDescription:
          'Automatically categorize tokens as they are imported using AI.',
        icon: 'ic:twotone-category',
        complete: true,
      },
      {
        description: 'Moderation',
        fullDescription:
          'Automatically ban any scam tokens or any tokens associated with hate, self-harm, and sexual content involving minors.',
        icon: 'fa6-solid:ban',
        complete: true,
      },
      {
        description: 'More Filters',
        fullDescription:
          'Add new filters: Jupiter verified, Liquidity (TVL), Holders, Release Date, Launchpad',
        icon: 'solar:filter-bold-duotone',
        complete: true,
      },
      {
        description: 'Trending Lists',
        fullDescription:
          'Show trending lists in Aerosol so that users can take advantage of opportunities in the market.',
        icon: 'fluent:data-trending-28-regular',
        complete: true,
      },
    ],
  },
  {
    version: '1.5.0',
    codeName: 'Burn the ROD',
    icon: 'noto:fire',
    targetDate: new Date(2024, 7, 26),
    items: [
      {
        description: 'Rodcinerator',
        fullDescription:
          'Use the SOL (and any other valuable tokens) in the Rodcinerator account to purchase and burn $RODAI.',
        icon: 'mdi:fire',
        complete: true,
      },
      {
        description: 'Burn Notifications',
        fullDescription: 'Notify RODAI holders about the burn via Telegram.',
        icon: 'ic:twotone-notifications',
        complete: true,
      },
      {
        description: 'Tribute Notifications',
        fullDescription:
          'Notify RODAI holders whenever a token tribute is made to the Rodcinerator via Telegram.',
        icon: 'ic:twotone-notifications',
        complete: true,
      },
      {
        description: 'Burn Report',
        fullDescription:
          'Show a $RODAI burn report on Aerosol. Allow users to also run a command on Telegram to see the burn report.',
        icon: 'carbon:report',
        complete: true,
      },
      {
        description: 'Aerosol Burner',
        fullDescription:
          'Allow comrods to burn and close their token accounts within Aerosol. This will allow them to reclaim some of their SOL while at the same time help the team and burn some ROD.',
        icon: 'mdi:gas-burner',
        complete: true,
      },
    ],
  },
  {
    version: '1.6.0',
    codeName: 'Wen better launches? - Thanks, Franchot ($BOTA) and M2!',
    icon: 'fluent-emoji:rocket',
    items: [
      {
        description: 'Transfer Fees',
        fullDescription:
          'Allow users to mint a token with the transfer fee extension.',
        icon: 'heroicons-outline:receipt-tax',
        complete: true,
      },
      {
        description: 'Aerosol Launch Spotlight',
        fullDescription: 'Spotlight tokens launched on Aerosol.',
        icon: 'tabler:sunshine',
        complete: true,
      },
      {
        description: 'Harvest and Withdraw Transfer Fees',
        fullDescription:
          'Allow creators to harvest and withdraw their transfer fees.',
        icon: 'mdi:corn',
        complete: true,
      },
      {
        description: 'Revoke Transfer Fee Config Authority',
        fullDescription:
          'Allow creators to revoke their transfer fee authority.',
        icon: 'line-md:file-document-cancel-twotone',
        complete: true,
      },
      {
        description: 'Drop Openbook Markets',
        fullDescription: "Openbook markets are expensive; let's drop em'.",
        icon: 'pepicons-pencil:book-off',
        complete: false,
      },
      {
        description: 'New Raydium CLMM pools',
        fullDescription:
          'Integrate with the new Raydium CLMM pool protocol to provide liquidity for tokens with transfer fees and also skip Openbook Market fees.',
        icon: 'token-branded:ray',
        complete: false,
      },
      {
        description: 'Token Creator Likes Tracker',
        fullDescription:
          'Allow token creators to see who has liked their project.',
        icon: 'solar:chat-square-like-bold-duotone',
        complete: false,
      },
      {
        description: 'Token Creator Views Tracker',
        fullDescription:
          'Allow token creators to see who has viewed their project.',
        icon: 'lets-icons:view-duotone',
        complete: false,
      },
      {
        description: 'Token Creator Shares Tracker',
        fullDescription:
          'Allow token creators to see who has shared their project.',
        icon: 'fontisto:share-a',
        complete: false,
      },
      {
        description: 'Airdrops',
        fullDescription:
          'Allow token creators to take snapshot and execute airdrops.',
        icon: 'hugeicons:hot-air-balloon',
        complete: false,
      },
    ],
  },
  {
    version: '1.7.0',
    codeName: 'Aerosocial',
    icon: 'mynaui:funny-circle',
    items: [
      {
        description: 'Web2 Authentication',
        fullDescription:
          'Allow users to authenticate using their Web2 accounts instead of having to connect their wallets.',
        icon: 'simple-icons:fusionauth',
        complete: true,
      },
      {
        description: 'Views',
        fullDescription:
          'Track views and show users how many times a token has been viewed.',
        icon: 'ph:eye-duotone',
        complete: false,
      },
      {
        description: 'Shares',
        fullDescription:
          'Track shares and show users how many times a token has been shared.',
        icon: 'mdi:share',
        complete: false,
      },
      {
        description: 'Aeroterminal',
        fullDescription:
          "Implement our terminal instead of using Jupiter's so that we can improve user experience and have more precision when collecting our platform fees.",
        icon: 'ri:swap-2-fill',
        complete: false,
      },
      {
        description: 'Discoverability',
        fullDescription: 'Add innovative ways for users to find new tokens.',
        icon: 'iconamoon:discover-duotone',
        complete: false,
      },
      {
        description: 'Community Comments',
        fullDescription:
          'Implement a system for collecting community feedback and comments, enabling users to share their thoughts about the project.',
        icon: 'fluent:person-feedback-16-filled',
        complete: false,
      },
      {
        description: 'X Trending Lists',
        fullDescription:
          'Regularly posts trending lists on X to showcase and interact with other communities in a consistent manner.',
        icon: 'pajamas:twitter',
        complete: false,
      },
      {
        description: 'Crowdfunding',
        fullDescription:
          'Communities have goals that sometimes require funding. Aerosol will provide a platform for communities to raise funds for their strategic goals.',
        icon: 'solar:hand-money-bold',
        complete: false,
      },
    ],
  },
  {
    version: '1.8.0',
    codeName: 'Website Customization',
    icon: 'iconoir:community',
    items: [
      {
        description: 'Website Customization',
        fullDescription:
          'Allow administrators to customize the website to match their brand identity, ensuring a consistent and professional appearance.',
        icon: 'fluent-mdl2:design',
        complete: true,
      },
    ],
  },
  {
    version: '1.9.0',
    codeName: 'Liquidity Pool Management',
    icon: 'material-symbols:pool-rounded',
    active: false,
    items: [
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
      {
        description: 'Pool Management',
        fullDescription:
          'Allow admins to create an manage multiple liquidity pools.',
        icon: 'fluent:swimming-pool-32-regular',
        complete: false,
      },
    ],
  },
  {
    version: '1.10.0',
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
    version: '1.11.0',
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
        description: 'Jupiter Verification',
        fullDescription:
          'Offer assistance in getting verified by Jupiter, ensuring compliance and broadening the token’s reach.',
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
    version: '1.12.0',
    codeName: 'Other Utilities',
    icon: 'mdi:tools',
    items: [
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
