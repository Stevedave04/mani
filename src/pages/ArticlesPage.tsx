import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'

// ─── Article data ─────────────────────────────────────────────────────────────

type Category = 'SEO' | 'Social Media' | 'Strategy'

interface Article {
  title: string
  url: string
  date: string
  dateISO: string
  category: Category
  excerpt: string
  readTime: string
  image?: string
}

const ARTICLES: Article[] = [
  {
    title: "Navigating Google's Latest SEO Updates: What Northern Ireland SMEs Need to Know",
    url: 'https://marketingadviceni.com/navigating-google-s-latest-seo-updates-what-northern-ireland-smes-need-to-know/',
    date: '30 Sep 2025',
    dateISO: '2025-09-30',
    category: 'SEO',
    excerpt:
      "Northern Ireland SMEs are feeling the pressure as Google's latest updates shake up search rankings. Here's what's changed, what it means for your business, and the steps you need to take now.",
    readTime: '5 min read',
    image: 'https://marketingadviceni.com/wp-content/uploads/2025/09/featured-image-1759219211-1400x788.jpeg',
  },
  {
    title: 'A Step-by-Step Guide to Crafting a Winning Social Media Strategy for Local Businesses',
    url: 'https://marketingadviceni.com/a-step-by-step-guide-to-crafting-a-winning-social-media-strategy-for-local-businesses/',
    date: '29 Sep 2025',
    dateISO: '2025-09-29',
    category: 'Social Media',
    excerpt:
      "You're pouring time and resources into social media, yet your online presence feels invisible. This guide outlines a practical step-by-step strategy for local businesses in Northern Ireland.",
    readTime: '6 min read',
    image: 'https://marketingadviceni.com/wp-content/uploads/2025/09/featured-image-1759132816-1200x800.jpeg',
  },
  {
    title: 'Unlocking Growth: Innovative SEO Strategies for Small Businesses in Northern Ireland',
    url: 'https://marketingadviceni.com/unlocking-growth-innovative-seo-strategies-for-small-businesses-in-northern-ireland/',
    date: '28 Sep 2025',
    dateISO: '2025-09-28',
    category: 'SEO',
    excerpt:
      'Discover innovative SEO strategies tailored for small businesses in Northern Ireland to enhance online visibility, attract local customers, and boost your digital marketing results.',
    readTime: '5 min read',
  },
  {
    title: 'Unlocking Growth: Personalised Marketing Advice for Northern Irish Startups',
    url: 'https://marketingadviceni.com/unlocking-growth-personalised-marketing-advice-for-northern-irish-startups/',
    date: '27 Sep 2025',
    dateISO: '2025-09-27',
    category: 'Strategy',
    excerpt:
      'Personalised marketing can accelerate growth for Northern Irish startups by enhancing digital presence and driving real results. Tailored strategies offer a clear path to transforming brand identity.',
    readTime: '5 min read',
  },
  {
    title: 'Harnessing the Power of Video Content: Boosting Engagement and Brand Awareness',
    url: 'https://marketingadviceni.com/harnessing-the-power-of-video-content-boosting-engagement-and-brand-awareness/',
    date: '26 Sep 2025',
    dateISO: '2025-09-26',
    category: 'Social Media',
    excerpt:
      'Video content is crucial for Northern Ireland SMEs looking to enhance engagement and brand awareness. Here are tailored strategies, including clear narratives and platform-specific formats, to boost visibility.',
    readTime: '5 min read',
    image: 'https://marketingadviceni.com/wp-content/uploads/2025/09/featured-image-1758873620-1200x800.jpeg',
  },
  {
    title: 'Mastering Social Media Success: A Comprehensive Guide to Creating Engaging Campaigns',
    url: 'https://marketingadviceni.com/mastering-social-media-success-a-comprehensive-guide-to-creating-engaging-campaigns-for-business-growth/',
    date: '26 Feb 2024',
    dateISO: '2024-02-26',
    category: 'Social Media',
    excerpt:
      'Social media marketing campaigns play a pivotal role in enhancing brand visibility, engaging audiences, and driving business growth. A well-executed campaign can significantly impact your online presence.',
    readTime: '7 min read',
    image: 'https://marketingadviceni.com/wp-content/uploads/2024/02/Mastering-Social-Media-Success-A-Comprehensive-Guide-to-Creating-Engaging-Campaigns-for-Business-Growth-1400x788.png',
  },
  {
    title: 'The Power of Storytelling in Marketing',
    url: 'https://marketingadviceni.com/the-power-of-storytelling-in-marketing/',
    date: '4 Sep 2023',
    dateISO: '2023-09-04',
    category: 'Strategy',
    excerpt:
      'Incorporating compelling narratives into your marketing doesn\'t just grab attention, it builds lasting emotional connections. Here\'s how storytelling works and how to apply it to your business.',
    readTime: '6 min read',
    image: 'https://marketingadviceni.com/wp-content/uploads/2023/09/The-Power-of-Storytelling-in-Marketing-1400x788.png',
  },
  {
    title: '5 Low-Cost Marketing Strategies for Northern Ireland Businesses',
    url: 'https://marketingadviceni.com/5-low-cost-marketing-strategies-for-northern-ireland/',
    date: '14 Jul 2023',
    dateISO: '2023-07-14',
    category: 'Strategy',
    excerpt:
      'Budget-friendly marketing approaches that actually work, from website optimisation and social engagement to email campaigns, influencer partnerships, and local business collaborations.',
    readTime: '5 min read',
    image: 'https://marketingadviceni.com/wp-content/uploads/2023/07/Boost-Your-Brand-5-Low-Cost-Marketing-Strategies-for-Northern-Ireland-Businesses-1400x788.png',
  },
  {
    title: 'The Vital Role of Local SEO Links in Today\'s Digital Landscape',
    url: 'https://marketingadviceni.com/the-vital-role-of-local-seo-links-in-todays-digital-landscape/',
    date: '8 Jul 2023',
    dateISO: '2023-07-08',
    category: 'SEO',
    excerpt:
      'Local SEO links strengthen domain authority, increase organic traffic, and improve search engine rankings. Here\'s why they matter and how to build them strategically for businesses in Ireland.',
    readTime: '5 min read',
    image: 'https://marketingadviceni.com/wp-content/uploads/2023/07/The-Vital-Role-of-Local-SEO-Links-in-Todays-Digital-Landscape-1400x788.png',
  },
  {
    title: 'How to Increase Social Media Traffic for Local Businesses in Northern Ireland',
    url: 'https://marketingadviceni.com/how-to-increase-social-media-traffic-for-local-businesses-in-northern-ireland/',
    date: '27 Mar 2023',
    dateISO: '2023-03-27',
    category: 'Social Media',
    excerpt:
      'Actionable strategies for driving more traffic from social media: creating engaging content, using visuals effectively, running contests, and leveraging targeted social advertising.',
    readTime: '5 min read',
    image: 'https://marketingadviceni.com/wp-content/uploads/2023/03/How-to-Increase-Social-Media-Traffic-for-Local-Businesses-in-Northern-Ireland-1-1400x788.png',
  },
]

// ─── Category config ──────────────────────────────────────────────────────────

const CATEGORY_STYLES: Record<Category, { pill: string; gradient: string }> = {
  SEO: {
    pill: 'bg-blue-50 text-blue-700 border border-blue-100',
    gradient: 'from-slate-800 to-blue-950',
  },
  'Social Media': {
    pill: 'bg-violet-50 text-violet-700 border border-violet-100',
    gradient: 'from-violet-950 to-purple-900',
  },
  Strategy: {
    pill: 'bg-amber-50 text-amber-700 border border-amber-100',
    gradient: 'from-gray-900 to-amber-950',
  },
}

const FILTERS = ['All', 'SEO', 'Social Media', 'Strategy'] as const

// ─── Article card image ───────────────────────────────────────────────────────

function CardImage({ image, category, title }: { image?: string; category: Category; title: string }) {
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    )
  }
  const { gradient } = CATEGORY_STYLES[category]
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <span className="font-bold text-white/10 select-none" style={{ fontSize: '5rem' }}>
        {category[0]}
      </span>
    </div>
  )
}

// ─── Featured article ─────────────────────────────────────────────────────────

function FeaturedArticle({ article }: { article: Article }) {
  const { pill } = CATEGORY_STYLES[article.category]
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300"
      aria-label={`Read: ${article.title}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
          <CardImage image={article.image} category={article.category} title={article.title} />
        </div>
        <div className="p-7 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-[11px] font-semibold rounded-full px-2.5 py-1 uppercase tracking-wide ${pill}`}>
              {article.category}
            </span>
            <span className="text-[12px] text-slate-400">{article.readTime}</span>
          </div>
          <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-gray-900 leading-[1.3] mb-4 group-hover:text-[#F26522] transition-colors">
            {article.title}
          </h2>
          <p className="text-[14px] text-gray-600 leading-[1.7] mb-6 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <time className="text-[12px] text-slate-400" dateTime={article.dateISO}>
              {article.date}
            </time>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F26522] group-hover:gap-2.5 transition-all">
              Read article <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

// ─── Article card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  const { pill } = CATEGORY_STYLES[article.category]
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md hover:border-slate-200 transition-all duration-300"
      aria-label={`Read: ${article.title}`}
    >
      <div className="aspect-[16/9] overflow-hidden flex-shrink-0">
        <CardImage image={article.image} category={article.category} title={article.title} />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 mb-3">
          <span className={`text-[10px] font-semibold rounded-full px-2.5 py-1 uppercase tracking-wide ${pill}`}>
            {article.category}
          </span>
          <span className="text-[11px] text-slate-400">{article.readTime}</span>
        </div>
        <h3 className="text-[15px] font-semibold text-gray-900 leading-[1.4] mb-2 group-hover:text-[#F26522] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-[1.65] line-clamp-2 flex-1 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
          <time className="text-[11px] text-slate-400" dateTime={article.dateISO}>
            {article.date}
          </time>
          <span className="text-[12px] font-semibold text-[#F26522] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
            Read <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </a>
  )
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const ARTICLES_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Marketing Advice NI | Articles',
    description: 'Digital marketing insights, SEO strategies, and social media tips for businesses in Northern Ireland and Ireland.',
    url: 'https://www.marketingadviceni.com/articles',
    publisher: {
      '@type': 'Organization',
      name: 'Marketing Advice NI',
      url: 'https://www.marketingadviceni.com',
    },
    blogPost: ARTICLES.map(({ title, url, dateISO, excerpt, category }) => ({
      '@type': 'BlogPosting',
      headline: title,
      url,
      datePublished: dateISO,
      description: excerpt,
      keywords: category,
      author: {
        '@type': 'Organization',
        name: 'Marketing Advice NI',
      },
    })),
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const visible =
    activeFilter === 'All'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeFilter)

  const featured = visible[0]
  const rest = visible.slice(1)

  return (
    <>
      <SEO
        title="Marketing Articles & Insights | Northern Ireland"
        description="Digital marketing articles, SEO guides, social media strategies, and growth advice for businesses across Ireland and Northern Ireland, from the team at Marketing Advice NI."
        canonical="/articles"
        jsonLd={ARTICLES_LD}
      />

      <main>
        {/* ── Header ────────────────────────────────────────────────────────── */}
        <section
          className="bg-white pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 px-5 sm:px-8 lg:px-12"
          aria-labelledby="articles-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">✦</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                Insights & guides
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h1
                id="articles-heading"
                className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
                style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.2rem)' }}
              >
                Marketing insights
                <br />
                for Irish businesses.
              </h1>
              <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-[340px] leading-relaxed md:text-right">
                Practical advice on SEO, paid advertising, and social media, written by the
                team at Marketing Advice NI.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mt-10" role="group" aria-label="Filter articles">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-[13px] font-medium rounded-full px-4 py-2 border transition-all duration-200 cursor-pointer ${
                    activeFilter === f
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-slate-200 hover:border-slate-400'
                  }`}
                  aria-pressed={activeFilter === f}
                >
                  {f}
                  {f !== 'All' && (
                    <span className={`ml-2 text-[11px] ${activeFilter === f ? 'text-white/60' : 'text-slate-400'}`}>
                      {ARTICLES.filter((a) => a.category === f).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Articles ──────────────────────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] py-8 sm:py-10 lg:py-12 pb-20 sm:pb-24 lg:pb-28 px-5 sm:px-8 lg:px-12"
          aria-live="polite"
        >
          <div className="max-w-[1440px] mx-auto">
            {visible.length === 0 ? (
              <p className="text-gray-500 py-16 text-center">No articles in this category yet.</p>
            ) : (
              <>
                {/* Featured */}
                {featured && (
                  <div className="mb-6 lg:mb-8">
                    <FeaturedArticle article={featured} />
                  </div>
                )}

                {/* Grid */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {rest.map((article) => (
                      <ArticleCard key={article.url} article={article} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* ── Subscribe / CTA strip ─────────────────────────────────────────── */}
        <section className="bg-[#0F172A] py-12 sm:py-14 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2
                className="font-medium tracking-[-0.02em] text-white mb-2"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
              >
                Want marketing advice tailored to your business?
              </h2>
              <p className="text-[14px] text-slate-400">
                Book a free 30-minute consultation. No pitch, just honest advice.
              </p>
            </div>
            <a
              href="/free-consultation"
              className="group flex-shrink-0 inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 transition-colors cursor-pointer"
            >
              <span>Book a free call</span>
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-500">
                <ArrowRight size={13} className="text-[#F26522]" />
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
