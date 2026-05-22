import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import { OrangeButton } from '../components/ui/OrangeButton'

// ─── FAQ data ─────────────────────────────────────────────────────────────────

interface Faq {
  q: string
  a: string
}

interface FaqCategory {
  title: string
  faqs: Faq[]
}

const CATEGORIES: FaqCategory[] = [
  {
    title: 'Working with us',
    faqs: [
      {
        q: 'What services do you offer?',
        a: 'We specialise in four core disciplines: SEO, PPC and paid advertising (Google Ads and Meta Ads), social media management, and web design. Most clients work with us across two or more of these as part of a joined-up digital strategy rather than in isolation.',
      },
      {
        q: 'How do you work with clients?',
        a: 'We start by getting a thorough understanding of your business, your goals, and what you have already tried. From there we build a customised strategy and agree clear deliverables before any work begins. You will receive regular progress updates, monthly reports, and direct access to the people actually working on your account.',
      },
      {
        q: 'What does it cost to work with you?',
        a: 'Our pricing is tailored to the specific needs and goals of each client. We offer both project-based fees and ongoing monthly retainers depending on the scope of work. We will always give you a clear, written proposal before any engagement begins so there are no surprises.',
      },
      {
        q: 'Do you guarantee results?',
        a: 'We do not guarantee specific rankings or revenue figures — no ethical agency can, because digital marketing results depend on many factors outside our direct control. What we do guarantee is a transparent, methodical approach, honest reporting, and a team that is genuinely invested in your growth. The majority of our clients see meaningful improvements within the first 3 to 6 months.',
      },
      {
        q: 'How do you measure the success of a campaign?',
        a: 'We measure success through the metrics that matter to your specific business: leads generated, cost per lead, bookings, sales, organic traffic growth, keyword rankings, and overall return on investment. We avoid reporting vanity metrics. Every monthly report ties activity directly back to business outcomes.',
      },
    ],
  },
  {
    title: 'SEO',
    faqs: [
      {
        q: 'How long does SEO take to show results?',
        a: 'SEO is a long-term investment. Most clients see meaningful improvements within 3 to 6 months, with significant ranking gains at 6 to 12 months. Technical fixes and quick-win pages can show measurable impact within the first 30 to 60 days. We will be transparent with you at every stage about what to expect and when.',
      },
      {
        q: 'Do you work on local SEO for Northern Ireland and Ireland?',
        a: 'Yes. Local SEO is central to what we do. We manage Google Business Profiles, build local citations, and optimise for map pack visibility across Derry, Belfast, Dublin, and the wider island of Ireland. Being based in Derry means we understand the NI and ROI market better than agencies operating from outside the region.',
      },
    ],
  },
  {
    title: 'Paid advertising',
    faqs: [
      {
        q: 'What paid advertising platforms do you manage?',
        a: 'We primarily manage Google Search Ads, Google Display, YouTube, Facebook, and Instagram. We will recommend the right platform mix based on your audience, sector, and budget rather than spreading spend thinly across every channel.',
      },
      {
        q: 'How much budget do I need to get started?',
        a: 'We generally recommend a minimum ad spend of £500 to £800 per month for Google Ads and £300 to £500 per month for Meta Ads. Below these thresholds, optimisation cycles take too long to generate statistically meaningful data. Our management fee is quoted separately from your ad spend.',
      },
    ],
  },
  {
    title: 'Social media',
    faqs: [
      {
        q: 'Which social media platforms do you manage?',
        a: 'We primarily manage Facebook, Instagram, and LinkedIn. Twitter/X and TikTok can be included depending on where your audience actually spends its time. We will recommend the right platform mix for your business rather than asking you to pay for channels that will not deliver a return.',
      },
      {
        q: 'Will I be able to approve content before it goes live?',
        a: 'Yes, always. Every piece of content is reviewed and approved by you before it is published. Nothing goes out without your sign-off. We work from a shared content calendar so you can see exactly what is planned and when.',
      },
    ],
  },
  {
    title: 'Web design',
    faqs: [
      {
        q: 'How long does a website project take?',
        a: 'Most websites take 4 to 8 weeks from kickoff to launch, depending on scope and how quickly content and feedback is provided. We agree a realistic timeline at the start of every project and keep you updated throughout. No rushed launches.',
      },
      {
        q: 'Is SEO included in a web design project?',
        a: 'Technical SEO is baked into every build: clean site architecture, fast page speeds, mobile-first design, proper heading structure, and metadata. Ongoing SEO content work such as keyword targeting, link building, and blog strategy is available as a separate retainer.',
      },
    ],
  },
  {
    title: 'Data and compliance',
    faqs: [
      {
        q: 'How do you ensure compliance with GDPR and data regulations?',
        a: 'We stay current on all applicable regulations including GDPR and follow industry best practices across all campaigns and platforms. Any data collected through campaigns or contact forms is handled in line with our Privacy Policy. We never use client data for any purpose beyond the agreed scope of work.',
      },
    ],
  },
]

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const FAQ_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CATEGORIES.flatMap(({ faqs }) =>
      faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      }))
    ),
  },
]

// ─── Accordion ────────────────────────────────────────────────────────────────

function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-slate-100">
      {faqs.map(({ q, a }, i) => (
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
              size={18}
              className={`flex-shrink-0 mt-0.5 text-slate-400 transition-transform duration-300 ${open === i ? 'rotate-180 text-[#F26522]' : ''}`}
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.75]">{a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FaqPage() {
  return (
    <>
      <SEO
        title="Marketing FAQs | Common Questions Answered"
        description="Answers to the most common questions about digital marketing, SEO, paid advertising, social media, and web design from Marketing Advice NI, based in Derry."
        canonical="/faq"
        jsonLd={FAQ_LD}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="bg-white pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 px-5 sm:px-8 lg:px-12"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">?</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                Marketing FAQs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <h1
                id="faq-heading"
                className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
                style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.2rem)' }}
              >
                Questions we
                <br />
                get asked a lot.
              </h1>
              <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-[380px] leading-relaxed md:text-right md:ml-auto">
                Straight answers about how we work, what we charge, and what to expect from digital marketing.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ categories ────────────────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-label="FAQ categories"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-20">

              {/* Sticky category nav — desktop */}
              <nav className="hidden lg:block" aria-label="FAQ navigation">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
                  Categories
                </p>
                <ul className="space-y-1">
                  {CATEGORIES.map(({ title }) => (
                    <li key={title}>
                      <a
                        href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-[14px] font-medium text-gray-500 hover:text-[#F26522] py-1.5 transition-colors"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* FAQ content */}
              <div className="space-y-12">
                {CATEGORIES.map(({ title, faqs }) => (
                  <div
                    key={title}
                    id={title.toLowerCase().replace(/\s+/g, '-')}
                    className="bg-white rounded-2xl border border-slate-100 px-6 sm:px-8 py-2"
                  >
                    <h2 className="text-[13px] font-semibold text-[#F26522] uppercase tracking-widest pt-6 pb-2">
                      {title}
                    </h2>
                    <FaqAccordion faqs={faqs} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-[#0F172A] py-14 sm:py-16 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2
                className="font-medium tracking-[-0.02em] text-white mb-2"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
              >
                Still have a question?
              </h2>
              <p className="text-[14px] text-slate-400">
                Book a free 30-minute call and we will answer it directly.
              </p>
            </div>
            <OrangeButton text="Book a free consultation" to="/free-consultation" />
          </div>
        </section>
      </main>
    </>
  )
}
