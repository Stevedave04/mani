import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  FileSearch,
  PenLine,
  Link2,
  MapPin,
  BarChart2,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import SEO, { LOCAL_BUSINESS_LD } from '../../components/SEO'
import { OrangeButton } from '../../components/ui/OrangeButton'
import { HlsVideoBackground } from '../../components/HlsVideoBackground'

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    Icon: FileSearch,
    title: 'Technical SEO Audit',
    description:
      'Full crawl of your site to identify and fix issues holding back your rankings: speed, indexation, structured data, Core Web Vitals.',
  },
  {
    Icon: Search,
    title: 'Keyword Research',
    description:
      'Data-driven targeting of the terms your customers actually search. We map intent to pages so your content earns rankings that convert.',
  },
  {
    Icon: PenLine,
    title: 'On-Page Optimisation',
    description:
      'Title tags, meta descriptions, headings, and content aligned with search intent. Every page optimised for both Google and the humans reading it.',
  },
  {
    Icon: Link2,
    title: 'Link Building',
    description:
      'Authoritative backlinks from relevant Irish, UK, and industry publications. Quality over quantity: we never use link farms or shortcuts.',
  },
  {
    Icon: MapPin,
    title: 'Local SEO',
    description:
      'Google Business Profile management, local citations, and map pack visibility for searches in Derry, Belfast, Dublin, and across Ireland.',
  },
  {
    Icon: BarChart2,
    title: 'Monthly Reporting',
    description:
      'Plain-English ranking reports showing keyword positions, organic traffic, and leads generated, with a clear view of what\'s working and what\'s next.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Audit',
    description:
      'We crawl your site, analyse competitor rankings, and map every technical issue and content gap. You get a complete picture before we spend a penny.',
  },
  {
    step: '02',
    title: 'Optimise',
    description:
      'Technical fixes, on-page improvements, and content updates are rolled out in priority order, starting with the highest-impact changes first.',
  },
  {
    step: '03',
    title: 'Scale',
    description:
      'Link acquisition and content authority build month on month. Rankings compound as your site earns trust with Google over time.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How long does SEO take to show results?',
    a: 'SEO is a long-term investment. Most clients see meaningful improvements within 3–6 months, with significant ranking gains at 6–12 months. That said, technical fixes and quick-win pages can show measurable impact within the first 30–60 days, and we\'ll be transparent with you every step of the way.',
  },
  {
    q: 'Do you create the content too?',
    a: 'Yes. We produce SEO-optimised blog posts, service page copy, and location pages as part of your retainer. If you have an in-house writer, we\'ll provide keyword briefs and review everything before it\'s published.',
  },
  {
    q: 'What\'s included in the monthly retainer?',
    a: 'Technical monitoring, keyword ranking reports, on-page optimisation work, content production, link building outreach, and a monthly strategy call. The exact scope depends on your package tier, agreed upfront with no surprises.',
  },
  {
    q: 'Can you guarantee first-page rankings?',
    a: 'No ethical agency can guarantee specific rankings, as search algorithms are outside anyone\'s direct control. What we guarantee is a transparent, methodical process and honest reporting. The majority of our clients hit top-5 positions for their target keywords within 12 months.',
  },
  {
    q: 'Do you specialise in local SEO for Northern Ireland?',
    a: 'Yes. Local SEO, including Google Business Profile management, local citations, and map pack visibility for Northern Ireland and Republic of Ireland searches, is central to what we do. Being based in Derry means we understand the NI and ROI market better than most.',
  },
]

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-slate-200">
      {FAQS.map(({ q, a }, i) => (
        <div key={i}>
          <button
            className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-[15px] sm:text-[16px] font-medium text-gray-900 group-hover:text-[#F26522] transition-colors">
              {q}
            </span>
            <ChevronDown
              size={20}
              className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}
          >
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">{a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const SEO_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Services',
    description:
      'Expert SEO services for businesses across Ireland and Northern Ireland. Technical audits, keyword strategy, link building, and local SEO to grow organic search visibility.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Marketing Advice NI',
      url: 'https://www.marketingadviceni.com',
    },
    areaServed: ['Northern Ireland', 'Republic of Ireland'],
    serviceType: 'Search Engine Optimisation',
    offers: {
      '@type': 'Offer',
      description: 'Free initial SEO consultation and site audit',
      price: '0',
      priceCurrency: 'GBP',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SeoPage() {
  return (
    <>
      <SEO
        title="SEO Services Northern Ireland | Search Engine Optimisation"
        description="Expert SEO for businesses across Ireland & Northern Ireland. Technical audits, local SEO, link building, and content strategy that grows organic rankings and drives qualified leads."
        canonical="/services/seo"
        jsonLd={SEO_LD}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 px-5 sm:px-8 lg:px-12"
          aria-labelledby="seo-hero-heading"
        >
          <HlsVideoBackground />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.72)_55%,rgba(15,23,42,0.55)_100%)]" />
          <div className="relative z-10 max-w-[1440px] mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[13px] text-slate-500 mb-10 sm:mb-14" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-slate-300 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-slate-300">SEO</span>
            </nav>

            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 bg-[#F26522]/10 border border-[#F26522]/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] animate-pulse" />
                <span className="text-[12px] font-medium text-[#F26522] tracking-wide uppercase">
                  Local SEO Specialists · Ireland &amp; NI
                </span>
              </div>

              <h1
                id="seo-hero-heading"
                className="font-medium tracking-[-0.03em] leading-[1.06] text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
              >
                Rank higher.
                <br />
                <span className="text-[#F26522]">Get found. Grow faster.</span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-slate-400 leading-[1.6] mb-10 max-w-[560px]">
                Sustainable SEO that builds long-term organic visibility for businesses across
                Ireland &amp; Northern Ireland, not quick wins that disappear after the next
                algorithm update.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <OrangeButton text="Get a free audit" to="/free-consultation" />
                <a
                  href="#what-we-do"
                  className="group inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-[14px] font-medium rounded-full px-6 py-2.5 transition-colors duration-300"
                >
                  See what's included
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-[560px]">
              {[
                { value: 'Top 5', label: 'Rankings for most clients in 12 months' },
                { value: '3–6 mo', label: 'Typical time to first results' },
                { value: 'Ireland-wide', label: 'Local & national SEO coverage' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight">{value}</p>
                  <p className="text-[12px] sm:text-[13px] text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's included ───────────────────────────────────────────────── */}
        <section
          id="what-we-do"
          className="bg-white py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="seo-services-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">1</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                What's included
              </span>
            </div>

            <h2
              id="seo-services-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
            >
              Everything needed to rank
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              and stay there.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="group p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 bg-[#F9F9FB]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 flex items-center justify-center mb-5 group-hover:bg-[#F26522]/15 transition-colors">
                    <Icon size={20} className="text-[#F26522]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-[14px] text-gray-600 leading-[1.65]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="seo-process-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">2</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-900">
                How we work
              </span>
            </div>

            <h2
              id="seo-process-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-14 sm:mb-20"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
            >
              SEO that compounds.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Not just clicks.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {PROCESS.map(({ step, title, description }) => (
                <div key={step}>
                  <span
                    className="block font-bold text-slate-200 mb-4 leading-none select-none"
                    style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                    aria-hidden="true"
                  >
                    {step}
                  </span>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.7]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case study ────────────────────────────────────────────────────── */}
        <section
          className="bg-white py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="seo-case-study-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">3</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                Client result
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="rounded-2xl overflow-hidden bg-[#6b6b6b] aspect-[4/3]">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Beech Hill campaign showcase"
                />
              </div>

              <div>
                <h2
                  id="seo-case-study-heading"
                  className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-6"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
                >
                  From invisible online
                  <br />
                  to fully booked:
                  <br />
                  a Derry hotel's story.
                </h2>

                <div className="grid grid-cols-2 gap-5 mb-8">
                  {[
                    { metric: '#1', label: 'Google ranking for "Derry hotel"' },
                    { metric: '218%', label: 'Increase in organic traffic' },
                    { metric: '4.1×', label: 'Growth in direct bookings' },
                    { metric: '8 months', label: 'To reach top position' },
                  ].map(({ metric, label }) => (
                    <div key={label} className="p-4 rounded-xl bg-[#F9F9FB] border border-slate-100">
                      <p className="text-[22px] font-bold text-gray-900 tracking-tight">{metric}</p>
                      <p className="text-[12px] text-gray-500 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <CheckCircle2 size={18} className="text-[#F26522] flex-shrink-0 mt-0.5" />
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Full digital strategy covering SEO, Google Ads &amp; social media, transforming
                    online bookings for Beech Hill, a premier hotel in Derry/Londonderry.
                  </p>
                </div>

                <p className="text-[14px] font-semibold text-gray-900 mb-1">Beech Hill</p>
                <p className="text-[13px] text-gray-500">Derry/Londonderry · Luxury Hotel</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section
          className="bg-[#F9F9FB] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="seo-faq-heading"
        >
          <div className="max-w-[860px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">4</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                Common questions
              </span>
            </div>

            <h2
              id="seo-faq-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
            >
              SEO FAQs
            </h2>

            <FaqAccordion />
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-[#0F172A] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2
              className="font-medium tracking-[-0.03em] text-white mb-5"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
            >
              Ready to rank higher?
            </h2>
            <p className="text-[16px] text-slate-400 mb-10 max-w-[460px] mx-auto leading-relaxed">
              Book a free consultation and we'll audit your site, show you exactly where you
              stand, and map out a clear path to page one.
            </p>
            <OrangeButton text="Book a free SEO audit" to="/free-consultation" />
          </div>
        </section>
      </main>
    </>
  )
}
