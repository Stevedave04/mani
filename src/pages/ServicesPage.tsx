import { Search, TrendingUp, Share2, Monitor, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import { OrangeButton } from '../components/ui/OrangeButton'

// ─── Service cards ────────────────────────────────────────────────────────────

const SERVICES = [
  {
    Icon: Search,
    title: 'SEO',
    slug: 'seo',
    tagline: 'Long-term organic growth that keeps paying dividends.',
    description:
      'We build sustainable search visibility through technical excellence, content strategy, and authoritative link building, so your business gets found by the right people.',
    included: [
      'Technical audit & site fixes',
      'Keyword & content strategy',
      'Link building & authority growth',
      'Monthly ranking reports',
    ],
    accent: 'from-orange-50 to-amber-50',
  },
  {
    Icon: TrendingUp,
    title: 'PPC & Paid Advertising',
    slug: 'ppc',
    tagline: 'Leads and revenue from Google and Meta, trackable to the penny.',
    description:
      'Google Ads and Meta advertising built around your goals, not just clicks. Every campaign is structured to generate measurable leads and revenue from day one.',
    included: [
      'Google Search & Display Ads',
      'Meta Ads (Facebook & Instagram)',
      'Remarketing campaigns',
      'Landing page optimisation',
    ],
    accent: 'from-blue-50 to-indigo-50',
  },
  {
    Icon: Share2,
    title: 'Social Media',
    slug: 'social-media',
    tagline: 'Content and community that converts followers into customers.',
    description:
      'We manage your social presence end-to-end: strategy, content creation, scheduling, community management, and paid amplification, so you can focus on running your business.',
    included: [
      'Content calendar & creation',
      'Platform management',
      'Paid social campaigns',
      'Performance reporting',
    ],
    accent: 'from-purple-50 to-pink-50',
  },
  {
    Icon: Monitor,
    title: 'Web Design',
    slug: 'web-design',
    tagline: 'Sites built to rank, load fast, and turn visitors into leads.',
    description:
      'Design-led builds with conversion and SEO baked in from the start. We create sites that work hard for your business, not just look good in screenshots.',
    included: [
      'UX/UI design & branding',
      'CRO-focused development',
      'SEO-ready site architecture',
      'Speed & Core Web Vitals',
    ],
    accent: 'from-emerald-50 to-teal-50',
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '80+', label: 'Businesses helped' },
  { value: '£2M+', label: 'Ad spend managed' },
  { value: 'Since 2019', label: 'Derry-based agency' },
  { value: 'Google & Meta', label: 'Certified partner' },
]

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const SERVICES_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Digital Marketing Services | Marketing Advice NI',
    itemListElement: SERVICES.map(({ title, slug }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: title,
      url: `https://www.marketingadviceni.com/services/${slug}`,
    })),
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Digital Marketing Services | SEO, PPC, Social Media & Web Design"
        description="Marketing Advice NI offers SEO, PPC advertising, social media management, and web design for businesses across Ireland and Northern Ireland. Google & Meta certified agency."
        canonical="/services"
        jsonLd={SERVICES_LD}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="bg-white pt-9 pb-10 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="services-hero-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">↗</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                What we do
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
              <h1
                id="services-hero-heading"
                className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
              >
                Digital marketing
                <br />
                that drives real
                <br />
                <span className="text-[#F26522]">results.</span>
              </h1>
              <div>
                <p className="text-[16px] sm:text-[17px] text-gray-600 leading-[1.65] mb-8 max-w-[460px]">
                  We're a certified Google &amp; Meta agency based in Derry/Londonderry. Every
                  service is designed around one goal: getting more paying customers through your
                  door.
                </p>
                <OrangeButton text="Book a free consultation" to="/free-consultation" />
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
              {STATS.map(({ value, label }) => (
                <div key={label} className="bg-white px-6 py-5">
                  <p className="text-[20px] sm:text-[24px] font-bold text-gray-900 tracking-tight">
                    {value}
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service cards ─────────────────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] py-9 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-label="Our services"
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {SERVICES.map(({ Icon, title, slug, tagline, description, included, accent }) => (
              <article
                key={slug}
                className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Card header */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center mb-6 border border-slate-100`}>
                  <Icon size={22} className="text-gray-700" />
                </div>

                <h2 className="text-[20px] sm:text-[22px] font-semibold text-gray-900 mb-1">
                  {title}
                </h2>
                <p className="text-[13px] font-medium text-[#F26522] mb-4">{tagline}</p>
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.65] mb-6">
                  {description}
                </p>

                {/* Included bullets */}
                <ul className="space-y-2 mb-8 flex-1">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="text-[#F26522] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-[13px] sm:text-[14px] text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Card CTA */}
                <Link
                  to={`/services/${slug}`}
                  className="group/link inline-flex items-center gap-2 text-[13px] font-semibold text-gray-900 hover:text-[#F26522] transition-colors"
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-[#0F172A] py-9 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                className="font-medium tracking-[-0.02em] text-white mb-3"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)' }}
              >
                Not sure where to start?
              </h2>
              <p className="text-[15px] text-slate-400 max-w-[420px] leading-relaxed">
                Book a free 30-minute consultation. We'll tell you honestly which channels will
                move the needle for your specific business.
              </p>
            </div>
            <div className="flex-shrink-0">
              <OrangeButton text="Get a free consultation" to="/free-consultation" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
