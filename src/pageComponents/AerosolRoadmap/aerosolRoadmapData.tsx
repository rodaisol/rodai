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
    codeName: 'Token Launches',
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
    ],
  },
  {
    version: '1.6.0',
    codeName: 'Aerosol Burner',
    icon: 'mdi:gas-burner',
    items: [
      {
        description: 'Launch Aerosol Burner MVP',
        fullDescription:
          'Allow users to clean up their wallets and reclaim their SOL by burning unwanted Solana tokens and NFTs.',
        icon: 'mdi:gas-burner',
        complete: true,
      },
      {
        description: 'Community Burner Integration',
        fullDescription:
          'Launch functionality for users to burn tokens in support of their communities.',
        icon: 'mdi:account-group',
        complete: true,
      },
      {
        description: 'ZK Compression and Decompression',
        fullDescription:
          'Introduce token compression and decompression using zero-knowledge technology within the Aerosol burner.',
        icon: 'mdi:lock-outline',
        complete: true,
      },
      {
        description: 'Burner Referral Program',
        fullDescription:
          'Launch a referral system allowing users to share unique links and earn rewards from platform fees.',
        icon: 'mdi:link-variant',
        complete: true,
      },
      {
        description: 'Burner Stats Dashboard',
        fullDescription:
          'Introduce a dashboard displaying metrics like total transactions and active wallets on the burner page.',
        icon: 'mdi:chart-bar',
        complete: true,
      },
      {
        description: 'Real-Time Burn Activity Notifications',
        fullDescription:
          'Introduce live notifications to keep users informed about ongoing burn activity.',
        icon: 'mdi:bell-ring',
        complete: true,
      },
      {
        description: 'Top Burner Leaderboards',
        fullDescription:
          'Launch leaderboards ranking wallets based on burn activity.',
        icon: 'mdi:trophy',
        complete: true,
      },
      {
        description: 'Community Leaderboards',
        fullDescription:
          'Introduce leaderboards highlighting the communities receiving the most support within the Aerosol burner.',
        icon: 'mdi:account-multiple',
        complete: true,
      },
    ],
  },
  {
    version: '1.7.0',
    codeName: 'Marketing Site',
    icon: 'mdi:web',
    items: [
      {
        description: 'Marketing Home',
        fullDescription:
          "Create a beautiful landing page that explains Aerosol's product offerings and value proposition.",
        icon: 'mdi:home-outline',
        complete: false,
      },
      {
        description: 'Products - Aerosol Burner',
        fullDescription:
          'Develop a dedicated page to highlight the Aerosol Burner, its features, and benefits for users.',
        icon: 'mdi:fire',
        complete: false,
      },
      {
        description: 'Products - Marketplace',
        fullDescription:
          'Create a page to showcase the Aerosol Marketplace, emphasizing its capabilities for buying, selling, and discovering tokens.',
        icon: 'mdi:shopping-outline',
        complete: false,
      },
      {
        description: 'Products - AI Powered Token Launcher',
        fullDescription:
          'Add a page to explain the AI-powered token launch process and its advantages for creators.',
        icon: 'fluent:bot-add-20-regular',
        complete: false,
      },
      {
        description: 'Tokens - RODAI',
        fullDescription:
          "Build a page to explain what RODAI is, its purpose, and how it integrates with Aerosol's product offerings.",
        icon: 'mdi:currency-usd-circle-outline',
        complete: false,
      },
      {
        description: 'Company',
        fullDescription:
          'Create a page about Aerosol as a company, including its mission, vision, and team information.',
        icon: 'mdi:office-building-outline',
        complete: false,
      },
      {
        description: 'Investors',
        fullDescription:
          "Develop a page for potential investors, detailing Aerosol's growth strategy, financial performance, and opportunities to support the platform.",
        icon: 'mingcute:angel-line',
        complete: false,
      },
      {
        description: 'Contact Us',
        fullDescription:
          'Add a page with contact details, including email addresses, social media links, and a contact form for inquiries.',
        icon: 'mdi:email-outline',
        complete: false,
      },
    ],
  },
  {
    version: '1.8.0',
    codeName: 'Aerosol Rewards',
    icon: 'mdi:gift-outline',
    items: [
      {
        description: 'Reward Points System',
        fullDescription:
          'Credit users with reward points for each transaction they perform in Aerosol.',
        icon: 'mdi:cash-plus',
        complete: false,
      },
      {
        description: 'Use Points for Giveaways',
        fullDescription:
          'Allow users to use their reward points to win tokens from the Aerosol giveaway wallet.',
        icon: 'mdi:gift-open-outline',
        complete: false,
      },
      {
        description: 'Claim Prizes',
        fullDescription:
          'Enable users to claim their prizes after winning giveaways.',
        icon: 'mdi:hand-coin',
        complete: false,
      },
      {
        description: 'Reward Points Ledger',
        fullDescription:
          'Allow users to view a detailed history of their reward points ledger, showing how points were earned and spent.',
        icon: 'mdi:history',
        complete: false,
      },
    ],
  },
  {
    version: '1.9.0',
    codeName: 'Ads',
    icon: 'mdi:advertisements',
    items: [
      {
        description: 'Campaign Creation',
        fullDescription:
          'Allow users to create advertising campaigns directly within Aerosol, defining budgets, durations, and targeting options.',
        icon: 'mdi:briefcase-plus-outline',
        complete: false,
      },
      {
        description: 'Campaign Analytics Dashboard',
        fullDescription:
          'Provide a dashboard to track campaign performance in real time, including impressions, clicks, and conversions.',
        icon: 'mdi:chart-line',
        complete: false,
      },
      {
        description: 'Ad Placement Options',
        fullDescription:
          'Allow users to select specific areas of the platform (e.g., homepage, burn page, token pages, etc.) where their ads will appear.',
        icon: 'mdi:map-marker',
        complete: false,
      },
      {
        description: 'Featured Projects',
        fullDescription:
          'Allow projects to purchase featured or sponsored placements within Aerosol to enhance visibility and engagement.',
        icon: 'tabler:sunshine',
        complete: false,
      },
    ],
  },
  {
    version: '1.10.0',
    codeName: 'Transfer Fees',
    icon: 'heroicons-outline:receipt-tax',
    items: [
      {
        description: 'Transfer Fees',
        fullDescription:
          'Allow users to mint a token with the transfer fee extension.',
        icon: 'heroicons-outline:receipt-tax',
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
        description: 'New Raydium CLMM Pools',
        fullDescription:
          'Integrate with the new Raydium CLMM pool protocol which supports token extensions and do not require Openbook Market fees.',
        icon: 'token-branded:ray',
        complete: false,
      },
      {
        description: 'Drop Openbook Markets',
        fullDescription:
          "Openbook markets are expensive and no longer needed for CLMM pools; let's drop em'.",
        icon: 'pepicons-pencil:book-off',
        complete: false,
      },
    ],
  },
  {
    version: '1.11.0',
    codeName: 'AI Agent Token Launches',
    icon: 'fluent:bot-add-20-regular',
    items: [
      {
        description: 'AI Agent Launch',
        fullDescription:
          'Enable users to create tokens effortlessly by leveraging an AI agent to generate tokenomics, metadata, and configuration with minimal input.',
        icon: 'fluent:bot-add-20-regular',
        complete: false,
      },
      {
        description: 'AI-Generated Token Logo',
        fullDescription:
          'Allow users to generate a custom token logo using AI, ensuring a professional and unique visual identity.',
        icon: 'mdi:image-outline',
        complete: false,
      },
      {
        description: 'Automatic Liquidity Pool Launch',
        fullDescription:
          'Automatically launch a liquidity pool for the token on the start date provided by the user, simplifying the process for token creators.',
        icon: 'mdi:pool',
        complete: false,
      },
      {
        description: 'AI-Generated Website',
        fullDescription:
          "Automatically generate a website for users' tokens, showcasing tokenomics, roadmap, and other key details.",
        icon: 'mdi:web',
        complete: false,
      },
    ],
  },
  {
    codeName: 'Improved Marketplace',
    icon: 'ri:swap-2-fill',
    version: '1.12.0',
    items: [
      {
        description: 'Aeroterminal',
        fullDescription:
          "Implement our terminal instead of using Jupiter's so that we can improve user experience and have more precision when collecting our platform fees.",
        icon: 'ri:swap-2-fill',
        complete: false,
      },
      {
        description: 'Rewards for Swapping',
        fullDescription:
          'Allow users to earn rewards while swapping tokens, incentivizing participation and increasing platform activity.',
        icon: 'mdi:cash-plus',
        complete: false,
      },
      {
        description: 'Near Real-Time New Token Pool Detection',
        fullDescription:
          'Introduce functionality to detect new token pools in near real-time, ensuring users can act quickly on new opportunities.',
        icon: 'mdi:radar',
        complete: false,
      },
      {
        description: 'AI Agent Powered Buys',
        fullDescription:
          'Enable AI-powered buying strategies that help users optimize token purchases based on market data and trends.',
        icon: 'fluent:bot-add-20-regular',
        complete: false,
      },
      {
        description: 'Aerosol Risk Analysis',
        fullDescription:
          'Provide a risk analysis tool powered by Aerosol to assess token safety and reliability without relying on third-party tools like Rugcheck.',
        icon: 'mdi:shield-check',
        complete: false,
      },
    ],
  },
  {
    version: '1.13.0',
    codeName: 'Token Creator Engagement Tools',
    icon: 'mdi:toolbox-outline',
    items: [
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
          'Allow token creators to take snapshots and execute airdrops.',
        icon: 'hugeicons:hot-air-balloon',
        complete: false,
      },
      {
        description: 'Social Media Giveaways',
        fullDescription:
          'Allow token creators to reward users for engaging with their social media content through airdrops and giveaways.',
        icon: 'mdi:gift-outline',
        complete: false,
      },
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
    version: '1.14.0',
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
        description: 'User Profiles',
        fullDescription:
          'Launch user profiles to allow users to personalize and manage their presence within Aerosocial.',
        icon: 'mdi:account-circle',
        complete: true,
      },
      {
        description: 'Telegram Bot Integration',
        fullDescription:
          'Release a Telegram bot to enhance community engagement and provide updates directly through Telegram.',
        icon: 'ic:baseline-telegram',
        complete: true,
      },
      {
        description: 'Token Gifting',
        fullDescription:
          'Allow users to gift tokens directly to others, making it easier to share and promote tokens within the community.',
        icon: 'mdi:gift',
        complete: false,
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
    version: '1.15.0',
    codeName: 'NFTs',
    icon: 'mdi:image-multiple-outline',
    items: [
      {
        description: 'Create NFT Collections',
        fullDescription:
          'Allow users to create and customize their own NFT collections within Aerosol.',
        icon: 'mdi:folder-plus-outline',
        complete: false,
      },
      {
        description: 'Mint NFTs',
        fullDescription:
          'Enable users to mint new NFTs directly into their collections.',
        icon: 'mdi:shape-plus',
        complete: false,
      },
      {
        description: 'List Purchased NFTs',
        fullDescription:
          'Allow users to list NFTs they have already purchased for resale or display within Aerosol.',
        icon: 'mdi:tag-multiple-outline',
        complete: false,
      },
    ],
  },
]
