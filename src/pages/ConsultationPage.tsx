import { useState } from 'react'
import { CheckCircle2, ChevronDown, Clock, MessageSquare, Lightbulb, TrendingUp } from 'lucide-react'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import { OrangeButton } from '../components/ui/OrangeButton'

// ─── Form state ───────────────────────────────────────────────────────────────

interface FormState {
  name: string
  email: string
  phone: string
  business: string
  service: string
  budget: string
  goals: string
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  business: '',
  service: '',
  budget: '',
  goals: '',
}

// ─── What we'll cover ─────────────────────────────────────────────────────────

const COVERS = [
  'Honest audit of your current marketing efforts',
  'Your biggest growth opportunities online',
  'Which channels actually suit your budget and goals',
  'Realistic timelines and what ROI to expect',
]

// ─── How it works ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    Icon: Clock,
    title: 'Book your slot',
    description: "Fill in the form and we'll confirm a 30-minute video call within one business day.",
  },
  {
    Icon: Lightbulb,
    title: 'We do the prep',
    description: 'We review your website, current marketing, and competitors before the call, so every minute counts.',
  },
  {
    Icon: TrendingUp,
    title: 'You get clarity',
    description: 'Leave with a clear picture of what to prioritise and what\'s actually holding your growth back.',
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'Is the consultation really free, with no strings attached?',
    a: 'Yes. Completely free, no obligation, and no sales pitch. We genuinely believe the best way to win your business is to give you honest, useful advice upfront. If we\'re not the right fit, we\'ll tell you.',
  },
  {
    q: 'What should I prepare before the call?',
    a: 'Nothing formal. Just have a rough idea of your business goals and what you\'ve already tried in terms of marketing. We\'ll take care of the research and come prepared with specific observations about your business.',
  },
  {
    q: 'Who will I be speaking to?',
    a: 'A senior member of the MANI team, not a sales rep. We keep our client list small on purpose so that every consultation is handled by someone with direct hands-on experience managing campaigns.',
  },
]

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function ConsultationFaq() {
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
            className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-60 pb-5' : 'max-h-0'}`}
          >
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">{a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ConsultationForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to form endpoint (e.g. Resend, Formspree, or Supabase)
    setSubmitted(true)
  }

  const inputCls =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-gray-900 placeholder-slate-400 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522]/30 transition-colors'

  const labelCls = 'block text-[12px] font-semibold text-gray-700 uppercase tracking-wide mb-1.5'

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-14 h-14 rounded-full bg-[#F26522]/10 flex items-center justify-center mb-5">
          <CheckCircle2 size={28} className="text-[#F26522]" />
        </div>
        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">We'll be in touch soon</h3>
        <p className="text-[15px] text-gray-600 max-w-[360px] leading-relaxed">
          Thanks for reaching out. A member of the MANI team will confirm your consultation within
          one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelCls}>Your name</label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            required
            value={form.name}
            onChange={set('name')}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email address</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@yourbusiness.com"
            required
            value={form.email}
            onChange={set('email')}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelCls}>Phone number</label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+44 7700 000000"
            value={form.phone}
            onChange={set('phone')}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="business" className={labelCls}>Business name</label>
          <input
            id="business"
            type="text"
            autoComplete="organization"
            placeholder="Your Business Ltd"
            required
            value={form.business}
            onChange={set('business')}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelCls}>Service of interest</label>
        <select
          id="service"
          required
          value={form.service}
          onChange={set('service')}
          className={`${inputCls} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_14px_center]`}
        >
          <option value="" disabled>Select a service…</option>
          <option value="seo">SEO</option>
          <option value="ppc">PPC &amp; Paid Advertising</option>
          <option value="social">Social Media Management</option>
          <option value="web">Web Design</option>
          <option value="full">Full Digital Package</option>
          <option value="unsure">Not sure yet, need advice</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className={labelCls}>Monthly marketing budget</label>
        <select
          id="budget"
          value={form.budget}
          onChange={set('budget')}
          className={`${inputCls} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_14px_center]`}
        >
          <option value="" disabled>Select a budget range…</option>
          <option value="under500">Under £500 / month</option>
          <option value="500-1500">£500 – £1,500 / month</option>
          <option value="1500-5000">£1,500 – £5,000 / month</option>
          <option value="5000plus">£5,000+ / month</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="goals" className={labelCls}>Tell us about your business goals</label>
        <textarea
          id="goals"
          rows={4}
          placeholder="What's your biggest marketing challenge right now? What does success look like in 12 months?"
          value={form.goals}
          onChange={set('goals')}
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group w-full flex items-center justify-between gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white text-[14px] font-medium rounded-xl px-6 py-3.5 transition-colors duration-300 cursor-pointer"
      >
        <span>Book my free consultation</span>
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
          <MessageSquare size={15} className="text-[#F26522]" />
        </div>
      </button>

      <p className="text-[12px] text-slate-400 text-center leading-relaxed">
        No spam. No sales calls. We'll only contact you to arrange your consultation.
      </p>
    </form>
  )
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const CONSULT_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free Marketing Consultation',
    description:
      'Free 30-minute digital marketing consultation with Marketing Advice NI. Get an honest audit of your current marketing and clear recommendations for growth.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Marketing Advice NI',
      url: 'https://www.marketingadviceni.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free 30-minute marketing consultation',
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

export default function ConsultationPage() {
  return (
    <>
      <SEO
        title="Free Marketing Consultation | 30-Minute Strategy Call"
        description="Book a free 30-minute marketing consultation with Marketing Advice NI. We'll audit your current efforts, identify your biggest growth opportunities, and give you honest, actionable advice. No sales pitch."
        canonical="/free-consultation"
        jsonLd={CONSULT_LD}
      />

      <main>
        {/* ── Hero + Form ───────────────────────────────────────────────────── */}
        <section className="bg-white py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12" aria-labelledby="consult-heading">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

              {/* Left — value prop */}
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 bg-[#F26522]/10 border border-[#F26522]/20 rounded-full px-4 py-1.5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] animate-pulse" />
                  <span className="text-[12px] font-medium text-[#F26522] tracking-wide uppercase">
                    100% Free · No Obligation
                  </span>
                </div>

                <h1
                  id="consult-heading"
                  className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-5"
                  style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
                >
                  Your free 30-minute
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  marketing consultation.
                </h1>

                <p className="text-[15px] sm:text-[17px] text-gray-600 leading-[1.65] mb-10 max-w-[460px]">
                  No sales pitch. Just honest advice about what will actually grow your business,
                  from people who've done it for businesses across Ireland.
                </p>

                <div className="space-y-3 mb-10">
                  <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
                    What we'll cover
                  </p>
                  {COVERS.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#F26522] flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] sm:text-[15px] text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3">
                  {['Google Partner', 'Meta Business Partner', 'Based in Derry, NI'].map((badge) => (
                    <span
                      key={badge}
                      className="text-[12px] font-medium text-gray-600 border border-slate-200 rounded-full px-3 py-1.5 bg-slate-50"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — form card */}
              <div className="bg-[#F9F9FB] border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="mb-7">
                  <h2 className="text-[18px] font-semibold text-gray-900 mb-1">
                    Book your consultation
                  </h2>
                  <p className="text-[13px] text-gray-500">
                    We'll confirm within one business day.
                  </p>
                </div>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-labelledby="how-it-works-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <h2
              id="how-it-works-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 text-center"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
            >
              How it works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-[900px] mx-auto">
              {STEPS.map(({ Icon, title, description }, i) => (
                <div key={title} className="relative text-center md:text-left">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 mx-auto md:mx-0 shadow-sm">
                    <Icon size={20} className="text-[#F26522]" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 tracking-widest uppercase mb-1 block">
                    Step {i + 1}
                  </span>
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-[14px] text-gray-600 leading-[1.65]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section
          className="bg-white py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-labelledby="consult-faq-heading"
        >
          <div className="max-w-[720px] mx-auto">
            <h2
              id="consult-faq-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-10 text-center"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
            >
              Good questions
            </h2>
            <ConsultationFaq />
          </div>
        </section>

        {/* ── Other services ────────────────────────────────────────────────── */}
        <section className="bg-[#F9F9FB] py-14 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 border-t border-slate-100">
          <div className="max-w-[1440px] mx-auto text-center">
            <p className="text-[13px] font-semibold text-gray-500 uppercase tracking-widest mb-5">
              Our services
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ['SEO', '/services/seo'],
                ['PPC & Paid Ads', '/services/ppc'],
                ['Social Media', '/services/social-media'],
                ['Web Design', '/services/web-design'],
              ].map(([label, href]) => (
                <OrangeButton key={label} text={label} to={href} size="sm" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
