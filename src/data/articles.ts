export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  categorySlug: string;
  author: string;
  authorBio?: string;
  publishedAt: string;
  readTime: number;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  featured?: boolean;
  premium?: boolean;
  tags?: string[];
  region?: string;
}

export const categories = [
  { name: 'Markets', slug: 'markets' },
  { name: 'Economy', slug: 'economy' },
  { name: 'Business', slug: 'business' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Politics', slug: 'politics' },
  { name: 'Opinion', slug: 'opinion' },
  { name: 'ESG', slug: 'esg' },
  { name: 'Asia', slug: 'asia' },
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'fed-signals-rate-cut-asia-markets-surge',
    title: 'Fed Signals Rate Pause as Asian Markets Rally to Six-Month High',
    excerpt: 'Federal Reserve officials hinted at a prolonged pause in rate hikes, triggering a broad-based rally across Asian equities with Tokyo, Seoul, and Jakarta indices leading gains.',
    content: `Federal Reserve officials sent clear signals Wednesday that the central bank is prepared to hold interest rates steady for the remainder of the year, a development that sent shockwaves through global financial markets — most dramatically felt across Asian bourses.

The Nikkei 225 surged 2.3% to close at 38,420 points, its highest level in six months, while South Korea's KOSPI gained 1.8% and Indonesia's JCI advanced 1.5%. Hong Kong's Hang Seng Index, which has been under pressure from weak Chinese economic data, rebounded 2.1%.

"This is exactly the kind of policy clarity markets have been waiting for," said Kenji Yamamoto, chief strategist at Daiwa Securities. "When the Fed removes rate uncertainty from the equation, it creates fertile ground for risk assets across the region."

The catalyst came from remarks by Fed Governor Christopher Waller, who suggested that the U.S. economy was "in a good place" and that inflation data over the coming months would determine whether any rate adjustments were warranted.

<h2>Currency Markets React</h2>

The U.S. dollar weakened against most major currencies on the news, with the Japanese yen strengthening to 148.20 per dollar from 149.60 the previous session. The Korean won and Taiwan dollar also gained ground.

A weaker dollar is typically favorable for emerging market assets in Asia, as it reduces the cost of servicing dollar-denominated debt and makes regional assets more attractive to foreign investors.

<h2>Bond Markets Tell the Story</h2>

U.S. Treasury yields fell across the curve, with the 10-year note dropping to 4.18% from 4.31%. This compression in yields made the risk premium on Asian equities more attractive by comparison.

Analysts note that the correlation between U.S. monetary policy and Asian market performance has become increasingly tight over the past two years, as global capital flows have responded with greater sensitivity to Fed communications.`,
    category: 'Markets',
    categorySlug: 'markets',
    author: 'Akira Tanaka',
    authorBio: 'Senior Markets Correspondent covering Asia-Pacific financial markets for over 12 years.',
    publishedAt: '2026-05-15T08:30:00Z',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    imageAlt: 'Tokyo Stock Exchange trading floor with green screens showing gains',
    imageCaption: 'The Tokyo Stock Exchange saw its strongest single-day gain since November. (Reuters)',
    featured: true,
    premium: false,
    tags: ['Federal Reserve', 'Japan', 'Interest Rates', 'Nikkei'],
    region: 'Japan',
  },
  {
    id: '2',
    slug: 'china-gdp-stimulus-property-sector',
    title: "China's GDP Growth Misses Forecast, Pressure Mounts for Broader Stimulus",
    excerpt: "China's economy expanded at a 4.6% annual pace in Q1, falling short of the government's 5% target, prompting calls from economists for more aggressive fiscal intervention in the struggling property sector.",
    category: 'Economy',
    categorySlug: 'economy',
    author: 'Li Wei',
    publishedAt: '2026-05-14T06:15:00Z',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e',
    imageAlt: 'Shanghai skyline with construction cranes in background',
    featured: true,
    premium: true,
    tags: ['China', 'GDP', 'Property', 'Stimulus'],
    region: 'China',
  },
  {
    id: '3',
    slug: 'india-tech-unicorns-ipo-wave',
    title: 'India Tech Unicorns Eye $8 Billion IPO Wave as Valuations Recover',
    excerpt: "At least seven Indian tech unicorns are preparing for public listings in 2026, seeking to capitalize on recovering investor appetite after a two-year valuation reset.",
    category: 'Technology',
    categorySlug: 'technology',
    author: 'Priya Sharma',
    publishedAt: '2026-05-14T10:45:00Z',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
    imageAlt: 'Mumbai financial district skyline at dusk',
    featured: true,
    premium: false,
    tags: ['India', 'IPO', 'Technology', 'Startups'],
    region: 'India',
  },
  {
    id: '4',
    slug: 'asean-energy-transition-coal-phaseout',
    title: 'ASEAN Nations Split on Coal Phase-Out Timeline as Green Finance Gaps Widen',
    excerpt: "Southeast Asian economies are divided over the pace of coal retirement, with Indonesia and Vietnam pushing for extended timelines while Singapore leads a regional green bond initiative.",
    category: 'ESG',
    categorySlug: 'esg',
    author: 'Maria Santos',
    publishedAt: '2026-05-13T09:00:00Z',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
    imageAlt: 'Coal power plant with smoke stacks against blue sky',
    premium: true,
    tags: ['ASEAN', 'Energy', 'ESG', 'Coal', 'Climate'],
    region: 'Southeast Asia',
  },
  {
    id: '5',
    slug: 'samsung-chip-investment-texas',
    title: 'Samsung Doubles Down on U.S. Chip Investment With $15 Billion Texas Expansion',
    excerpt: "Samsung Electronics is expanding its semiconductor manufacturing footprint in Taylor, Texas, betting that geopolitical pressures will sustain demand for U.S.-made advanced chips.",
    category: 'Technology',
    categorySlug: 'technology',
    author: 'Joon-ho Park',
    publishedAt: '2026-05-13T14:20:00Z',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    imageAlt: 'Semiconductor wafer under microscope with colorful circuit patterns',
    premium: false,
    tags: ['Samsung', 'Semiconductors', 'USA', 'Investment'],
    region: 'South Korea',
  },
  {
    id: '6',
    slug: 'boj-yield-curve-control-exit',
    title: 'Bank of Japan Prepares Markets for Further YCC Adjustments This Summer',
    excerpt: "BOJ Governor Kazuo Ueda signaled that the central bank is monitoring wage and price data closely as it prepares to further dismantle its decade-long yield curve control framework.",
    category: 'Markets',
    categorySlug: 'markets',
    author: 'Akira Tanaka',
    publishedAt: '2026-05-12T07:30:00Z',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    imageAlt: 'Bank of Japan building in Tokyo at night',
    premium: true,
    tags: ['Bank of Japan', 'Monetary Policy', 'Yen', 'Bonds'],
    region: 'Japan',
  },
  {
    id: '7',
    slug: 'vietnam-manufacturing-supply-chain',
    title: "Vietnam Emerges as Southeast Asia's Manufacturing Champion as China+1 Strategy Matures",
    excerpt: "Foreign direct investment into Vietnam's manufacturing sector surged 28% in Q1 2026, as global brands from Nike to Apple deepened their supply chain diversification.",
    category: 'Business',
    categorySlug: 'business',
    author: 'Nguyen Thi Lan',
    publishedAt: '2026-05-11T11:00:00Z',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    imageAlt: 'Industrial manufacturing facility with workers on assembly line',
    premium: false,
    tags: ['Vietnam', 'Manufacturing', 'Supply Chain', 'FDI'],
    region: 'Vietnam',
  },
  {
    id: '8',
    slug: 'philippines-inflation-central-bank',
    title: 'Philippine Central Bank Holds Rate as Inflation Slows to 3-Year Low',
    excerpt: "Bangko Sentral ng Pilipinas kept its benchmark rate at 6.5% for a third consecutive meeting, with policymakers increasingly confident that the disinflation trend is durable.",
    category: 'Economy',
    categorySlug: 'economy',
    author: 'Jose Reyes',
    publishedAt: '2026-05-10T08:00:00Z',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51',
    imageAlt: 'Manila city skyline with financial district buildings',
    premium: false,
    tags: ['Philippines', 'Inflation', 'Monetary Policy'],
    region: 'Philippines',
  },
  {
    id: '9',
    slug: 'opinion-asia-dollar-hegemony',
    title: 'Opinion: Asia Must Hedge Against Dollar Hegemony Before the Next Crisis Hits',
    excerpt: "The slow-motion diversification away from dollar dominance in Asian reserves reflects a structural shift that policymakers need to accelerate, writes our columnist.",
    category: 'Opinion',
    categorySlug: 'opinion',
    author: 'Dr. Rajeev Menon',
    publishedAt: '2026-05-10T13:00:00Z',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e',
    imageAlt: 'US dollar bills fanned out on a surface',
    premium: true,
    tags: ['Opinion', 'Dollar', 'Reserve Currency', 'Asia Policy'],
    region: 'Asia Pacific',
  },
  {
    id: '10',
    slug: 'australia-rba-rate-decision',
    title: 'Australia RBA Surprises Markets With 25bps Cut, First Since 2020',
    excerpt: "The Reserve Bank of Australia delivered a widely anticipated but still market-moving rate cut to 4.10%, citing easing inflation and slowing household consumption.",
    category: 'Markets',
    categorySlug: 'markets',
    author: 'James Whitfield',
    publishedAt: '2026-05-09T05:00:00Z',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be',
    imageAlt: 'Sydney Harbor Bridge and Opera House aerial view at sunrise',
    premium: false,
    tags: ['Australia', 'RBA', 'Interest Rates', 'AUD'],
    region: 'Australia',
  },
  {
    id: '11',
    slug: 'tata-group-ev-battery-gigafactory',
    title: 'Tata Group Breaks Ground on $4 Billion EV Battery Gigafactory in Gujarat',
    excerpt: "India's largest conglomerate is making its most ambitious clean energy bet, launching a gigafactory designed to supply batteries for its own EV brands and external customers.",
    category: 'Business',
    categorySlug: 'business',
    author: 'Priya Sharma',
    publishedAt: '2026-05-08T10:30:00Z',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7',
    imageAlt: 'Electric vehicle charging station with solar panels in background',
    premium: false,
    tags: ['India', 'Tata', 'EV', 'Battery', 'Manufacturing'],
    region: 'India',
  },
  {
    id: '12',
    slug: 'japan-corporate-governance-reform',
    title: 'Tokyo Stock Exchange Pushes Harder on Corporate Governance as ROE Gap Persists',
    excerpt: "Japan's bourse is intensifying pressure on listed companies to improve capital efficiency, threatening enhanced scrutiny for firms that fail to address below-book valuations.",
    category: 'Business',
    categorySlug: 'business',
    author: 'Akira Tanaka',
    publishedAt: '2026-05-07T09:15:00Z',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff',
    imageAlt: 'Japanese corporate office building with Tokyo skyline',
    premium: true,
    tags: ['Japan', 'Corporate Governance', 'TSE', 'Investors'],
    region: 'Japan',
  },
];

export const marketData = [
  { name: 'Nikkei 225', value: '38,420', change: '+2.3%', up: true },
  { name: 'Hang Seng', value: '18,210', change: '+1.8%', up: true },
  { name: 'KOSPI', value: '2,740', change: '+1.5%', up: true },
  { name: 'ASX 200', value: '7,890', change: '-0.4%', up: false },
  { name: 'USD/JPY', value: '148.20', change: '-0.95%', up: false },
  { name: 'USD/CNY', value: '7.24', change: '+0.12%', up: true },
  { name: 'Brent Crude', value: '$82.40', change: '+0.7%', up: true },
  { name: 'Gold', value: '$2,318', change: '+0.3%', up: true },
  { name: 'Bitcoin', value: '$61,440', change: '-1.2%', up: false },
];

export const breakingNews = [
  'Fed holds rates steady; Powell signals caution on cuts before Q4',
  "China's NPC approves $140B special bond issuance for infrastructure",
  'IMF upgrades Asia-Pacific growth outlook to 4.4% for 2026',
  'Samsung posts 58% surge in operating profit on AI chip demand',
  'ASEAN leaders sign landmark digital economy framework at Kuala Lumpur summit',
];

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(a => a.categorySlug === categorySlug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(a => a.featured);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter(a => a.id !== article.id && a.categorySlug === article.categorySlug)
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  if (diffHours < 1) return 'Just now';
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  return formatDateShort(dateString);
}
