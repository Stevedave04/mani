import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Palette,
  MousePointerClick,
  Search,
  Smartphone,
  Database,
  Wrench,
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
    Icon: Palette,
    title: 'UX & Visual Design',
    description:
      'Wireframes and high-fidelity designs built around how your customers think and what drives them to act, not just what looks good on a screen.',
  },
  {
    Icon: MousePointerClick,
    title: 'Conversion Rate Optimisation',
    description:
      'Every layout, CTA, and page flow designed to turn visitors into enquiries. We measure what works and iterate, because a beautiful site that doesn\'t convert is a waste.',
  },
  {
    Icon: Search,
    title: 'SEO-Ready Architecture',
    description:
      'Clean URLs, proper site structure, Core Web Vitals, schema markup, and fast page speeds built in from day one, not bolted on after launch.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile-First Development',
    description:
      'Most of your visitors are on a phone. We design and build mobile-first, then scale up, not the other way round.',
  },
  {
    Icon: Database,
    title: 'CMS Integration',
    description:
      'WordPress, Webflow, or custom builds, whichever lets your team manage content independently without needing a developer for every change.',
  },
  {
    Icon: Wrench,
    title: 'Post-Launch Support',
    description:
      'Ongoing maintenance, security updates, performance monitoring, and quick fixes after handover. We don\'t disappear once the site goes live.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We map your goals, target audience, and competitors. No wireframes until we understand what success looks like for your specific business, and what\'s stopping visitors from converting right now.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'High-fidelity mockups reviewed and iterated with you before a single line of code is written. Design is approved, not surprised.',
  },
  {
    step: '03',
    title: 'Build & Launch',
    description:
      'Development, cross-browser and device testing, performance optimisation, and a smooth handover with full team training. No rushed launches.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How long does a typical website project take?',
    a: "Most websites take 4–8 weeks from kickoff to launch, depending on scope and how quickly content and feedback is provided. We'll agree a realistic timeline upfront and keep you updated at every stage. No radio silence.",
  },
  {
    q: 'Do you build in WordPress?',
    a: "We work with WordPress, Webflow, and custom HTML/CSS depending on your needs. We'll recommend the right platform based on how your team needs to manage content day-to-day and what your budget allows.",
  },
  {
    q: 'Will I be able to update the site myself?',
    a: "Yes. Every site we build includes easy content management and a training session at handover so your team can make basic updates independently. If something breaks or you get stuck, we're available to help.",
  },
  {
    q: 'Is SEO included in the build?',
    a: "Technical SEO is baked into every build: clean site architecture, fast page speeds, mobile-first design, proper heading structure, and metadata. Ongoing SEO content work (keyword targeting, link building, blog strategy) is a separate retainer service.",
  },
  {
    q: 'Do you offer hosting and ongoing maintenance?',
    a: "We can recommend hosting, set it up, and manage it on your behalf, or work with your existing provider. Ongoing maintenance packages covering security monitoring, updates, and performance checks are available after launch.",
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
            <span className="text-[15px] sm:text-[16px] font-medium text-gray-900 group-hover:text-[#F26522] transition-colors">{q}</span>
            <ChevronDown size={20} className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">{a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const WEB_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Design & Development',
    description: 'Conversion-focused web design and development for businesses across Ireland and Northern Ireland. SEO-ready, mobile-first sites built to generate leads and revenue.',
    provider: { '@type': 'LocalBusiness', name: 'Marketing Advice NI', url: 'https://www.marketingadviceni.com' },
    areaServed: ['Northern Ireland', 'Republic of Ireland'],
    serviceType: 'Web Design',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free website review and consultation' },
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

export default function WebDesignPage() {
  return (
    <>
      <SEO
        title="Web Design Services Northern Ireland | Conversion-Focused Websites"
        description="Conversion-focused web design for businesses across Ireland and Northern Ireland. SEO-ready, mobile-first sites that rank well, load fast, and turn visitors into customers."
        canonical="/services/web-design"
        jsonLd={WEB_LD}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 px-5 sm:px-8 lg:px-12" aria-labelledby="web-hero-heading">
          <HlsVideoBackground />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.72)_55%,rgba(15,23,42,0.55)_100%)]" />
          <div className="relative z-10 max-w-[1440px] mx-auto">
            <nav className="flex items-center gap-2 text-[13px] text-slate-500 mb-10 sm:mb-14" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-slate-300 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-slate-300">Web Design</span>
            </nav>

            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 bg-[#F26522]/10 border border-[#F26522]/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] animate-pulse" />
                <span className="text-[12px] font-medium text-[#F26522] tracking-wide uppercase">
                  CRO-Focused · SEO-Ready · Mobile-First
                </span>
              </div>

              <h1 id="web-hero-heading" className="font-medium tracking-[-0.03em] leading-[1.06] text-white mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
                Sites that sell,
                <br />
                <span className="text-[#F26522]">not just look good.</span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-slate-400 leading-[1.6] mb-10 max-w-[560px]">
                Design-led websites built around conversion and SEO from the start, not templated
                themes with your logo dropped in.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <OrangeButton text="Get a free site review" to="/free-consultation" />
                <a href="#what-we-do" className="group inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-[14px] font-medium rounded-full px-6 py-2.5 transition-colors duration-300">
                  See what's included
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-[560px]">
              {[
                { value: '4–8 wks', label: 'Typical project timeline' },
                { value: 'Core Web Vitals', label: 'Performance optimised' },
                { value: 'SEO-ready', label: 'Built for search from day one' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[18px] sm:text-[24px] font-bold text-white tracking-tight leading-tight">{value}</p>
                  <p className="text-[12px] sm:text-[13px] text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's included ───────────────────────────────────────────────── */}
        <section id="what-we-do" className="bg-white py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="web-services-heading">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">1</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">What's included</span>
            </div>
            <h2 id="web-services-heading" className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}>
              A full build from strategy
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              to launch.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map(({ Icon, title, description }) => (
                <div key={title} className="group p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 bg-[#F9F9FB]">
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
        <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="web-process-heading">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">2</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-900">How we work</span>
            </div>
            <h2 id="web-process-heading" className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-14 sm:mb-20" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}>
              Strategy first.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              No shortcuts.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {PROCESS.map(({ step, title, description }) => (
                <div key={step}>
                  <span className="block font-bold text-slate-200 mb-4 leading-none select-none" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }} aria-hidden="true">{step}</span>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.7]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case study ────────────────────────────────────────────────────── */}
        <section className="bg-white py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="web-case-study-heading">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">3</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">Client result</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="rounded-2xl overflow-hidden bg-[#6b6b6b] aspect-[4/3]">
                <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" aria-label="Beech Hill web project" />
              </div>
              <div>
                <h2 id="web-case-study-heading" className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-6" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}>
                  A full digital rebuild
                  <br />that transformed
                  <br />direct bookings.
                </h2>
                <div className="grid grid-cols-2 gap-5 mb-8">
                  {[
                    { metric: '4.1×', label: 'Growth in direct bookings' },
                    { metric: '218%', label: 'Increase in organic traffic' },
                    { metric: '#1', label: 'Google ranking for "Derry hotel"' },
                    { metric: '1.8s', label: 'Average page load time' },
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
                    Full digital strategy covering a new website, SEO, and Google Ads, transforming
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
        <section className="bg-[#F9F9FB] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="web-faq-heading">
          <div className="max-w-[860px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">4</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">Common questions</span>
            </div>
            <h2 id="web-faq-heading" className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}>Web design FAQs</h2>
            <FaqAccordion />
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-[#0F172A] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="font-medium tracking-[-0.03em] text-white mb-5" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}>
              Ready to build something that works?
            </h2>
            <p className="text-[16px] text-slate-400 mb-10 max-w-[460px] mx-auto leading-relaxed">
              Book a free consultation and we'll review your current site, identify what's costing
              you conversions, and outline what a new build would look like.
            </p>
            <OrangeButton text="Book a free site review" to="/free-consultation" />
          </div>
        </section>
      </main>
    </>
  )
}
