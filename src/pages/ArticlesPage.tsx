import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import { ARTICLES, type Article, type Category } from '../data/articles'

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
    <Link
      to={`/articles/${article.slug}`}
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
    </Link>
  )
}

// ─── Article card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  const { pill } = CATEGORY_STYLES[article.category]
  return (
    <Link
      to={`/articles/${article.slug}`}
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
    </Link>
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
    url: 'https://mani-7z6.pages.dev/articles',
    publisher: {
      '@type': 'Organization',
      name: 'Marketing Advice NI',
      url: 'https://www.marketingadviceni.com',
    },
    blogPost: ARTICLES.map(({ title, slug, dateISO, excerpt, category }) => ({
      '@type': 'BlogPosting',
      headline: title,
      url: `https://mani-7z6.pages.dev/articles/${slug}`,
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
                Insights &amp; guides
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
                      <ArticleCard key={article.slug} article={article} />
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
            <Link
              to="/free-consultation"
              className="group flex-shrink-0 inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 transition-colors cursor-pointer"
            >
              <span>Book a free call</span>
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-500">
                <ArrowRight size={13} className="text-[#F26522]" />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
