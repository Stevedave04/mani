import { CheckCircle2 } from 'lucide-react'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import { OrangeButton } from '../components/ui/OrangeButton'

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: 'Since 2019', label: 'Helping Irish businesses grow' },
  { value: '80+', label: 'Clients across Ireland & NI' },
  { value: '£2M+', label: 'In ad spend managed' },
  { value: '4.8×', label: 'Average ROAS across accounts' },
]

const VALUES = [
  {
    title: 'Transparency first',
    description:
      "You'll always know what we're doing, why we're doing it, and what it costs. No retainers for work you can't measure. No jargon to hide a lack of results.",
  },
  {
    title: 'Strategy before tactics',
    description:
      "We don't start campaigns until we understand your business. The right channel mix, correctly structured, beats throwing budget at every platform.",
  },
  {
    title: 'Small list, full attention',
    description:
      "We deliberately limit our client roster. When you're with MANI, you get a senior strategist, not a rotation of account managers who've never heard of you.",
  },
]

const PARTNER_BADGES = [
  {
    name: 'Google Partner',
    detail: 'Certified in Google Ads: Search, Display, and Shopping',
  },
  {
    name: 'Meta Business Partner',
    detail: 'Certified in Meta Ads: Facebook and Instagram advertising',
  },
]

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const ABOUT_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Marketing Advice NI',
    description:
      'Marketing Advice NI is a digital marketing agency based in Derry/Londonderry, Northern Ireland, specialising in SEO, PPC, social media, and web design for businesses across Ireland.',
    url: 'https://www.marketingadviceni.com/about',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Digital Marketing Agency, Derry/Londonderry"
        description="Marketing Advice NI is a Google & Meta certified digital marketing agency based in Derry/Londonderry. We've helped 80+ businesses across Ireland grow their online presence since 2019."
        canonical="/about"
        jsonLd={ABOUT_LD}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="bg-white pt-9 pb-10 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="about-hero-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">1</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                Who we are
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
              <h1
                id="about-hero-heading"
                className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 self-end"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
              >
                Based in Derry.
                <br />
                Working across
                <br />
                Ireland.
              </h1>

              <div className="space-y-6">
                <p className="text-[16px] sm:text-[18px] text-gray-900 font-medium leading-[1.6]">
                  "We got tired of watching good businesses get poor results from agencies that
                  didn't care. So we built something different."
                </p>
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.75]">
                  Marketing Advice NI was founded in Derry/Londonderry to give Irish businesses
                  access to the kind of senior digital marketing expertise usually reserved for
                  larger markets. We're a small, deliberate team, certified by Google and Meta,
                  with a track record of growing businesses from Derry to Dublin and beyond.
                </p>
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.75]">
                  We keep our client list small by design. Every business we work with gets
                  direct access to experienced strategists, transparent reporting, and a team
                  that's genuinely invested in their growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────────────────────────────── */}
        <section className="bg-[#0F172A] py-12 sm:py-14 px-5 sm:px-8 lg:px-12" aria-label="Agency stats">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p
                  className="font-bold text-white tracking-tight leading-none mb-2"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
                >
                  {value}
                </p>
                <p className="text-[13px] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What makes us different ───────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] py-9 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="values-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">2</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-900">
                How we operate
              </span>
            </div>

            <h2
              id="values-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-6 sm:mb-16"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
            >
              Not a typical agency.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {VALUES.map(({ title, description }) => (
                <div key={title} className="bg-white rounded-2xl p-7 border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-[#F26522] mb-5" />
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-[1.7]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What we do ────────────────────────────────────────────────────── */}
        <section
          className="bg-white py-9 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="services-overview-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[12px] font-semibold leading-none">3</span>
                  </div>
                  <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                    Our services
                  </span>
                </div>

                <h2
                  id="services-overview-heading"
                  className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-6"
                  style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}
                >
                  Four services.
                  <br />
                  One strategy.
                </h2>

                <p className="text-[15px] text-gray-600 leading-[1.7] mb-8 max-w-[440px]">
                  We specialise in the four disciplines that drive measurable online growth,
                  and we approach each one as part of a cohesive strategy, not a standalone tactic.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    ['SEO', '/services/seo'],
                    ['PPC & Paid Advertising', '/services/ppc'],
                    ['Social Media', '/services/social-media'],
                    ['Web Design', '/services/web-design'],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center justify-between group py-3 border-b border-slate-100 hover:border-slate-300 transition-colors"
                    >
                      <span className="text-[15px] font-medium text-gray-900 group-hover:text-[#F26522] transition-colors">
                        {label}
                      </span>
                      <span className="text-slate-400 group-hover:text-[#F26522] group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </a>
                  ))}
                </div>

                <OrangeButton text="View all services" to="/services" />
              </div>

              {/* Partner badges */}
              <div className="space-y-5">
                <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-6">
                  Certified partners
                </p>
                {PARTNER_BADGES.map(({ name, detail }) => (
                  <div
                    key={name}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-[#F9F9FB]"
                  >
                    <CheckCircle2 size={20} className="text-[#F26522] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[15px] font-semibold text-gray-900">{name}</p>
                      <p className="text-[13px] text-gray-500 mt-1">{detail}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-6 rounded-2xl bg-[#0F172A]">
                  <p className="text-[13px] font-medium text-slate-400 mb-2">Serving</p>
                  <p className="text-[16px] font-semibold text-white">
                    Businesses across Ireland and Northern Ireland
                  </p>
                  <p className="text-[13px] text-slate-400 mt-2 leading-relaxed">
                    From Derry/Londonderry to Dublin, Belfast to Cork, we work with businesses
                    of all sizes across the island of Ireland.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section
          className="bg-[#F9F9FB] border-t border-slate-100 py-16 sm:py-20 px-5 sm:px-8 lg:px-12"
        >
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                className="font-medium tracking-[-0.02em] text-gray-900 mb-3"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)' }}
              >
                Ready to work together?
              </h2>
              <p className="text-[15px] text-gray-500 max-w-[400px] leading-relaxed">
                Book a free 30-minute consultation. No pitch, just honest advice about what
                will actually grow your business.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <OrangeButton text="Book a free call" to="/free-consultation" />
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 text-gray-700 hover:text-gray-900 hover:border-slate-400 text-[14px] font-medium rounded-full px-6 py-2.5 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
