import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Monitor,
  Users,
  RotateCcw,
  LayoutTemplate,
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
    Icon: Search,
    title: 'Google Search Ads',
    description:
      'Appear at the top when customers search for exactly what you offer. Pay only for clicks from people ready to buy.',
  },
  {
    Icon: Monitor,
    title: 'Google Display Ads',
    description:
      'Build brand awareness and retarget warm audiences across millions of websites in the Google Display Network.',
  },
  {
    Icon: Users,
    title: 'Meta Ads (Facebook & Instagram)',
    description:
      'Scroll-stopping creative on Facebook and Instagram that drives leads, bookings, and sales from cold audiences.',
  },
  {
    Icon: RotateCcw,
    title: 'Remarketing',
    description:
      'Re-engage people who visited your site but didn\'t convert. Stay top-of-mind until they\'re ready to act.',
  },
  {
    Icon: LayoutTemplate,
    title: 'Landing Page Optimisation',
    description:
      'Campaigns are only as strong as the pages they land on. We optimise for conversion, not just traffic.',
  },
  {
    Icon: BarChart2,
    title: 'Monthly Reporting',
    description:
      'Clear ROI-focused reports every month: spend, leads, and cost per acquisition. No jargon, just results.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Audit',
    description:
      'We analyse your market, competitor spend, audience data, and current account health to find the exact opportunities being missed.',
  },
  {
    step: '02',
    title: 'Build',
    description:
      'Campaigns built from scratch around your business goals: keyword strategy, audience segmentation, ad copy, and creatives all aligned.',
  },
  {
    step: '03',
    title: 'Optimise',
    description:
      'Weekly optimisations as your data grows. Bids, audiences, and copy are continuously refined to reduce cost and maximise return.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much budget do I need to get started with PPC?',
    a: 'We generally recommend a minimum ad spend of £500–£800/month for Google Ads and £300–£500/month for Meta Ads to generate statistically meaningful data quickly. Below that, optimisation cycles take too long. Our management fee is separate from ad spend.',
  },
  {
    q: 'How long before I see results from paid advertising?',
    a: 'Google Search Ads typically generate leads within the first 2–4 weeks as your campaigns gather data. Meta Ads can take 4–6 weeks to exit the "learning phase." You\'ll have a realistic performance picture within 60–90 days, and we\'ll be transparent with you throughout.',
  },
  {
    q: 'Do you create the ad creatives too?',
    a: 'Yes. For Meta Ads we produce static and video creative concepts for your approval. For Google Search we write all ad copy. Landing page copy and layout recommendations are included, though design execution depends on your web setup.',
  },
  {
    q: 'What platforms do you advertise on?',
    a: 'Primarily Google Search, Google Display, YouTube, Facebook, and Instagram. We\'ll recommend the right mix based on your audience and budget rather than spreading spend thin across every channel.',
  },
  {
    q: 'How do you measure and report success?',
    a: 'We track conversions that matter to your business: calls, form fills, bookings, purchases. Every month you receive a plain-English report showing spend, leads generated, cost per lead, and where we\'re improving. No vanity metrics.',
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

const PPC_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'PPC & Paid Advertising',
    description:
      'Expert Google Ads and Meta advertising management for businesses across Ireland and Northern Ireland. We build, manage and scale paid ad campaigns that generate real leads and revenue.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Marketing Advice NI',
      url: 'https://www.marketingadviceni.com',
    },
    areaServed: ['Northern Ireland', 'Republic of Ireland'],
    serviceType: 'PPC Advertising',
    offers: {
      '@type': 'Offer',
      description: 'Free initial consultation and account audit',
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

export default function PpcPage() {
  return (
    <>
      <SEO
        title="PPC & Paid Advertising Services | Google Ads & Meta Ads"
        description="Expert Google Ads and Meta advertising management in Northern Ireland. We build and scale paid ad campaigns that generate real leads and revenue for businesses across Ireland & NI."
        canonical="/services/ppc"
        jsonLd={PPC_LD}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 px-5 sm:px-8 lg:px-12"
          aria-labelledby="ppc-hero-heading"
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
              <span className="text-slate-300">Paid Advertising</span>
            </nav>

            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 bg-[#F26522]/10 border border-[#F26522]/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] animate-pulse" />
                <span className="text-[12px] font-medium text-[#F26522] tracking-wide uppercase">
                  Google &amp; Meta Certified
                </span>
              </div>

              <h1
                id="ppc-hero-heading"
                className="font-medium tracking-[-0.03em] leading-[1.06] text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
              >
                Every pound spent.
                <br />
                <span className="text-[#F26522]">Every lead tracked.</span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-slate-400 leading-[1.6] mb-10 max-w-[560px]">
                Google Ads and Meta advertising that generates real revenue for businesses across
                Ireland &amp; Northern Ireland, not just clicks.
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

            {/* Stats bar */}
            <div className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-[560px]">
              {[
                { value: '£2M+', label: 'Ad spend managed' },
                { value: '4.8×', label: 'Average ROAS' },
                { value: '60 days', label: 'To clear ROI picture' },
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
          aria-labelledby="services-heading"
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
              id="services-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
            >
              Full-service paid advertising:
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              from strategy to results.
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
          aria-labelledby="process-heading"
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
              id="process-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-14 sm:mb-20"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
            >
              A methodical process.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              No shortcuts.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {PROCESS.map(({ step, title, description }) => (
                <div key={step} className="relative">
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

        {/* ── Case study pull ───────────────────────────────────────────────── */}
        <section
          className="bg-white py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="case-study-heading"
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
              <div>
                <h2
                  id="case-study-heading"
                  className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-6"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
                >
                  Record lead generation
                  <br />
                  for a Northern Irish
                  <br />
                  fuel company.
                </h2>

                <div className="grid grid-cols-2 gap-5 mb-8">
                  {[
                    { metric: '312%', label: 'Increase in lead volume' },
                    { metric: '£1.84', label: 'Cost per lead achieved' },
                    { metric: '6.2×', label: 'Return on ad spend' },
                    { metric: '90 days', label: 'To hit target CPA' },
                  ].map(({ metric, label }) => (
                    <div key={label} className="p-4 rounded-xl bg-[#F9F9FB] border border-slate-100">
                      <p className="text-[22px] font-bold text-gray-900 tracking-tight">{metric}</p>
                      <p className="text-[12px] text-gray-500 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 mb-8">
                  <CheckCircle2 size={18} className="text-[#F26522] flex-shrink-0 mt-0.5" />
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Targeted Facebook &amp; Instagram campaigns delivering record lead generation and
                    revenue growth for GoFuel, a Northern Irish fuel distribution company.
                  </p>
                </div>

                <p className="text-[14px] font-semibold text-gray-900 mb-1">GoFuel</p>
                <p className="text-[13px] text-gray-500">Northern Ireland · Fuel Distribution</p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-[#1a1d2e] aspect-[4/3]">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="GoFuel campaign showcase"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section
          className="bg-[#F9F9FB] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="faq-heading"
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
              id="faq-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
            >
              Paid advertising FAQs
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
              Ready to generate more leads?
            </h2>
            <p className="text-[16px] text-slate-400 mb-10 max-w-[480px] mx-auto leading-relaxed">
              Book a free 30-minute consultation. We'll audit your current setup and show you exactly
              what's possible.
            </p>
            <OrangeButton text="Book a free consultation" to="/free-consultation" />
          </div>
        </section>
      </main>
    </>
  )
}
