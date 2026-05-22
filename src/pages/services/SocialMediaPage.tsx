import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CalendarDays,
  ImagePlay,
  Smartphone,
  Megaphone,
  MessageCircle,
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
    Icon: CalendarDays,
    title: 'Content Strategy & Calendar',
    description:
      'A monthly content calendar built around your brand voice, audience, and business goals, planned and approved before anything goes live.',
  },
  {
    Icon: ImagePlay,
    title: 'Content Creation',
    description:
      'Scroll-stopping graphics, copy, and short-form video concepts produced for your channels. We handle the creative so you can focus on running your business.',
  },
  {
    Icon: Smartphone,
    title: 'Platform Management',
    description:
      'Day-to-day posting, story scheduling, and channel management across Facebook, Instagram, and LinkedIn, consistently and on-brand.',
  },
  {
    Icon: Megaphone,
    title: 'Paid Social Campaigns',
    description:
      'Targeted campaigns that reach new audiences and amplify your best organic content. We manage both cold acquisition and warm retargeting.',
  },
  {
    Icon: MessageCircle,
    title: 'Community Management',
    description:
      'Prompt, on-brand responses to comments and DMs, building genuine audience relationships and keeping your reputation sharp.',
  },
  {
    Icon: BarChart2,
    title: 'Monthly Analytics',
    description:
      'Plain-English monthly reports covering reach, engagement rate, follower growth, website clicks, and what we\'re doing next to improve them.',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Audit & Strategy',
    description:
      'We review your existing channels, audience data, competitor accounts, and past performance to build a focused social strategy with clear goals.',
  },
  {
    step: '02',
    title: 'Create & Schedule',
    description:
      'Content produced, reviewed, and scheduled to a consistent calendar. You approve everything before it goes live and nothing is published without your sign-off.',
  },
  {
    step: '03',
    title: 'Optimise & Grow',
    description:
      'Monthly performance reviews, A/B testing of content formats, and paid amplification of your top performers to compound growth month on month.',
  },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Which social media platforms do you manage?',
    a: "We primarily manage Facebook, Instagram, and LinkedIn. Twitter/X and TikTok can be added depending on where your audience actually is. We'll recommend the right platform mix for your specific business rather than spreading your budget thin across every channel.",
  },
  {
    q: 'Do you create all the content from scratch?',
    a: "Yes. We produce graphics, copy, and short-form video concepts as part of your package. You'll review and approve everything before it goes live and nothing is published without your sign-off. If you have existing brand assets or photography, we'll incorporate them.",
  },
  {
    q: 'How often will you post?',
    a: "That depends on the platform and your package. Typically 3–5 times per week on Facebook and Instagram, with LinkedIn at a lower but more considered frequency. We'll agree a content calendar upfront and stick to it.",
  },
  {
    q: 'Do you manage paid social advertising too?',
    a: 'Yes. Paid social, including boosting posts, running lead generation campaigns, and retargeting warm audiences, is a core part of our service. We can manage your organic and paid social together or focus on one area depending on your goals and budget.',
  },
  {
    q: 'How do you measure success on social media?',
    a: "We track metrics that matter to your business: reach, engagement rate, follower growth, website clicks, and lead generation. Vanity metrics like raw follower counts are context, not the goal. Every month you receive a clear report with plain-English commentary on what the numbers actually mean.",
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
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">{a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const SOCIAL_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Social Media Marketing',
    description:
      'Social media management, content creation, and paid social advertising for businesses across Ireland and Northern Ireland.',
    provider: { '@type': 'LocalBusiness', name: 'Marketing Advice NI', url: 'https://www.marketingadviceni.com' },
    areaServed: ['Northern Ireland', 'Republic of Ireland'],
    serviceType: 'Social Media Marketing',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free social media audit and consultation' },
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

export default function SocialMediaPage() {
  return (
    <>
      <SEO
        title="Social Media Marketing Services | Northern Ireland & Ireland"
        description="Social media management, content creation, and paid social advertising for businesses across Ireland and NI. Facebook, Instagram, and LinkedIn managed by a certified agency in Derry."
        canonical="/services/social-media"
        jsonLd={SOCIAL_LD}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 px-5 sm:px-8 lg:px-12"
          aria-labelledby="social-hero-heading"
        >
          <HlsVideoBackground />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.72)_55%,rgba(15,23,42,0.55)_100%)]" />
          <div className="relative z-10 max-w-[1440px] mx-auto">
            <nav className="flex items-center gap-2 text-[13px] text-slate-500 mb-10 sm:mb-14" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-slate-300 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-slate-300">Social Media</span>
            </nav>

            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 bg-[#F26522]/10 border border-[#F26522]/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] animate-pulse" />
                <span className="text-[12px] font-medium text-[#F26522] tracking-wide uppercase">
                  Meta Business Partner · Ireland &amp; NI
                </span>
              </div>

              <h1
                id="social-hero-heading"
                className="font-medium tracking-[-0.03em] leading-[1.06] text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
              >
                Content, community,
                <br />
                <span className="text-[#F26522]">and paid social.</span>
              </h1>

              <p className="text-[16px] sm:text-[18px] text-slate-400 leading-[1.6] mb-10 max-w-[560px]">
                Full-service social media management for Irish businesses: strategy, content
                creation, platform management, and paid campaigns all under one roof.
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

            <div className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-[560px]">
              {[
                { value: 'FB & IG', label: 'Meta certified advertising' },
                { value: '3–5×', label: 'Weekly posting cadence' },
                { value: 'Full service', label: 'Strategy to community mgmt' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[20px] sm:text-[26px] font-bold text-white tracking-tight">{value}</p>
                  <p className="text-[12px] sm:text-[13px] text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's included ───────────────────────────────────────────────── */}
        <section id="what-we-do" className="bg-white py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="social-services-heading">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">1</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">What's included</span>
            </div>
            <h2 id="social-services-heading" className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}>
              Everything your social
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              presence needs.
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
        <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="social-process-heading">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">2</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-900">How we work</span>
            </div>
            <h2 id="social-process-heading" className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-14 sm:mb-20" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}>
              Consistent. Creative.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Always on-brand.
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
        <section className="bg-white py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="social-case-study-heading">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">3</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">Client result</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h2 id="social-case-study-heading" className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-6" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}>
                  Record lead generation
                  <br />from Facebook &amp;
                  <br />Instagram.
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
                <div className="flex items-start gap-3 mb-6">
                  <CheckCircle2 size={18} className="text-[#F26522] flex-shrink-0 mt-0.5" />
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Targeted Facebook &amp; Instagram campaigns delivering record lead generation
                    and revenue growth for GoFuel, a Northern Irish fuel distribution company.
                  </p>
                </div>
                <p className="text-[14px] font-semibold text-gray-900 mb-1">GoFuel</p>
                <p className="text-[13px] text-gray-500">Northern Ireland · Fuel Distribution</p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#1a1d2e] aspect-[4/3]">
                <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" aria-label="GoFuel social media results" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="bg-[#F9F9FB] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12" aria-labelledby="social-faq-heading">
          <div className="max-w-[860px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">4</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">Common questions</span>
            </div>
            <h2 id="social-faq-heading" className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}>Social media FAQs</h2>
            <FaqAccordion />
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-[#0F172A] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="font-medium tracking-[-0.03em] text-white mb-5" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}>
              Ready to grow your social presence?
            </h2>
            <p className="text-[16px] text-slate-400 mb-10 max-w-[460px] mx-auto leading-relaxed">
              Book a free consultation. We'll audit your current channels and show you exactly what's possible.
            </p>
            <OrangeButton text="Book a free consultation" to="/free-consultation" />
          </div>
        </section>
      </main>
    </>
  )
}
