import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Calendar, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'
import { ARTICLES, type Article, type Category } from '../data/articles'

// ─── Category colours ─────────────────────────────────────────────────────────

const CATEGORY_STYLES: Record<Category, { pill: string; bg: string }> = {
  SEO: {
    pill: 'bg-blue-50 text-blue-700 border border-blue-100',
    bg: 'from-slate-800 to-blue-950',
  },
  'Social Media': {
    pill: 'bg-violet-50 text-violet-700 border border-violet-100',
    bg: 'from-violet-950 to-purple-900',
  },
  Strategy: {
    pill: 'bg-amber-50 text-amber-700 border border-amber-100',
    bg: 'from-gray-900 to-amber-950',
  },
}

// ─── Related articles ─────────────────────────────────────────────────────────

function RelatedCard({ article }: { article: Article }) {
  const { pill } = CATEGORY_STYLES[article.category]
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md hover:border-slate-200 transition-all duration-300"
      aria-label={`Read: ${article.title}`}
    >
      <div className="aspect-[16/9] overflow-hidden flex-shrink-0 bg-slate-100">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${CATEGORY_STYLES[article.category].bg} flex items-center justify-center`}
          >
            <span className="font-bold text-white/10 select-none" style={{ fontSize: '4rem' }}>
              {article.category[0]}
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 mb-3">
          <span
            className={`text-[10px] font-semibold rounded-full px-2.5 py-1 uppercase tracking-wide ${pill}`}
          >
            {article.category}
          </span>
          <span className="text-[11px] text-slate-400">{article.readTime}</span>
        </div>
        <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 leading-[1.4] mb-2 group-hover:text-[#F26522] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = ARTICLES.find((a) => a.slug === slug)

  // 404 state
  if (!article) {
    return (
      <>
        <SEO
          title="Article Not Found | Marketing Advice NI"
          description="This article could not be found."
          canonical="/articles"
        />
        <main className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
          <p className="text-[13px] font-semibold text-[#F26522] uppercase tracking-widest mb-4">
            Not found
          </p>
          <h1
            className="font-medium tracking-[-0.03em] text-gray-900 mb-5"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          >
            Article not found
          </h1>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#F26522] hover:underline"
          >
            <ArrowLeft size={14} /> Back to articles
          </Link>
        </main>
      </>
    )
  }

  const { pill, bg } = CATEGORY_STYLES[article.category]

  // Related articles: same category, excluding current
  const related = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== article.slug,
  ).slice(0, 3)

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.dateISO,
    url: `https://mani-7z6.pages.dev/articles/${article.slug}`,
    ...(article.image ? { image: article.image } : {}),
    author: {
      '@type': 'Organization',
      name: 'Marketing Advice NI',
      url: 'https://www.marketingadviceni.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Marketing Advice NI',
      url: 'https://www.marketingadviceni.com',
    },
  }

  return (
    <>
      <SEO
        title={`${article.title} | Marketing Advice NI`}
        description={article.excerpt}
        canonical={`/articles/${article.slug}`}
        jsonLd={[articleLd]}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div className="relative">
          {/* Hero image or gradient */}
          <div className="h-[260px] sm:h-[320px] lg:h-[400px] overflow-hidden">
            {article.image ? (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${bg}`} />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/30 to-transparent" />
          </div>

          {/* Breadcrumb + headline on top of image */}
          <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 lg:px-12 pb-7 sm:pb-9">
            <div className="max-w-[800px] mx-auto">
              <nav className="flex items-center gap-2 mb-4" aria-label="Breadcrumb">
                <Link
                  to="/articles"
                  className="inline-flex items-center gap-1.5 text-[12px] text-white/60 hover:text-white transition-colors"
                >
                  <ArrowLeft size={12} />
                  Articles
                </Link>
                <span className="text-white/30 text-[12px]">/</span>
                <span className="text-[12px] text-white/60 line-clamp-1">{article.title}</span>
              </nav>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`text-[11px] font-semibold rounded-full px-3 py-1 uppercase tracking-wide ${pill}`}
                >
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] text-white/60">
                  <Clock size={12} />
                  {article.readTime}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] text-white/60">
                  <Calendar size={12} />
                  <time dateTime={article.dateISO}>{article.date}</time>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Article title + content ────────────────────────────────────────── */}
        <div className="bg-white px-5 sm:px-8 lg:px-12 pt-8 pb-12 sm:pt-10 sm:pb-16">
          <div className="max-w-[800px] mx-auto">
            <h1
              className="font-semibold tracking-[-0.025em] text-gray-900 leading-[1.2] mb-8"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
            >
              {article.title}
            </h1>

            {/* Partial content notice */}
            {article.contentPartial && (
              <div className="mb-8 p-5 rounded-2xl bg-amber-50 border border-amber-100 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-[13px] text-amber-800 font-medium mb-0.5">Preview only</p>
                  <p className="text-[12px] text-amber-700">
                    The full version of this article is available on our original website.
                  </p>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 text-[12px] font-semibold text-amber-800 hover:text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-full px-4 py-2 transition-colors"
                >
                  Read full article <ExternalLink size={12} />
                </a>
              </div>
            )}

            {/* Article body */}
            <div
              className="prose-article"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>

        {/* ── Related articles ──────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section
            className="bg-[#F5F5F5] px-5 sm:px-8 lg:px-12 py-8 sm:py-16"
            aria-labelledby="related-heading"
          >
            <div className="max-w-[1200px] mx-auto">
              <h2
                id="related-heading"
                className="font-semibold tracking-[-0.02em] text-gray-900 mb-8"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
              >
                More {article.category} articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {related.map((a) => (
                  <RelatedCard key={a.slug} article={a} />
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/articles"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft size={13} /> View all articles
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
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
