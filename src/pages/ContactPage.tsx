import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import { OrangeButton } from '../components/ui/OrangeButton'

// ─── Form state ───────────────────────────────────────────────────────────────

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', phone: '', service: '', message: '' }

// ─── Contact details ──────────────────────────────────────────────────────────

const DETAILS = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'hello@marketingadviceni.com',
    href: 'mailto:hello@marketingadviceni.com',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+44 (0)28 7100 0000',
    href: 'tel:+442871000000',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Derry/Londonderry, Northern Ireland',
    href: 'https://maps.google.com/?q=Derry+Londonderry+Northern+Ireland',
  },
  {
    Icon: Clock,
    label: 'Office hours',
    value: 'Mon – Fri, 9:00 am – 5:30 pm',
    href: null,
  },
]

// ─── Contact form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to form endpoint
    setSubmitted(true)
  }

  const inputCls =
    'w-full rounded-xl border border-slate-200 bg-[#F9F9FB] px-4 py-3 text-[14px] text-gray-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522]/30 transition-all'

  const labelCls = 'block text-[12px] font-semibold text-gray-700 uppercase tracking-wide mb-1.5'

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-14 h-14 rounded-full bg-[#F26522]/10 flex items-center justify-center mb-5">
          <Send size={24} className="text-[#F26522]" />
        </div>
        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">Message received</h3>
        <p className="text-[15px] text-gray-500 max-w-[340px] leading-relaxed">
          Thanks for reaching out. We'll come back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-name" className={labelCls}>Name</label>
          <input
            id="c-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            value={form.name}
            onChange={set('name')}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="c-email" className={labelCls}>Email</label>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            required
            value={form.email}
            onChange={set('email')}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-phone" className={labelCls}>Phone <span className="font-normal text-slate-400 normal-case tracking-normal">(optional)</span></label>
          <input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+44 7700 000000"
            value={form.phone}
            onChange={set('phone')}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="c-service" className={labelCls}>I'm interested in</label>
          <select
            id="c-service"
            value={form.service}
            onChange={set('service')}
            className={`${inputCls} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_14px_center] bg-[#F9F9FB]`}
          >
            <option value="">Select a service…</option>
            <option value="seo">SEO</option>
            <option value="ppc">PPC &amp; Paid Advertising</option>
            <option value="social">Social Media</option>
            <option value="web">Web Design</option>
            <option value="full">Full Package</option>
            <option value="other">General enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className={labelCls}>Message</label>
        <textarea
          id="c-message"
          rows={5}
          placeholder="Tell us a bit about your business and what you're looking to achieve…"
          required
          value={form.message}
          onChange={set('message')}
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group w-full flex items-center justify-between gap-2 bg-gray-900 hover:bg-[#F26522] text-white text-[14px] font-medium rounded-xl px-6 py-3.5 transition-colors duration-300 cursor-pointer"
      >
        <span>Send message</span>
        <div className="w-8 h-8 bg-white/10 group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:-rotate-45 transition-all duration-500">
          <Send size={14} className="text-white group-hover:text-[#F26522] transition-colors" />
        </div>
      </button>

      <p className="text-[12px] text-slate-400 text-center">
        We reply within one business day. No spam, ever.
      </p>
    </form>
  )
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const CONTACT_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Marketing Advice NI',
    description: 'Get in touch with Marketing Advice NI, the digital marketing agency based in Derry/Londonderry, Northern Ireland.',
    url: 'https://www.marketingadviceni.com/contact',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Marketing Advice NI, Derry"
        description="Get in touch with Marketing Advice NI. Based in Derry/Londonderry, we serve businesses across Ireland and Northern Ireland. Call, email, or send a message."
        canonical="/contact"
        jsonLd={CONTACT_LD}
      />

      <main>
        {/* ── Main contact section ──────────────────────────────────────────── */}
        <section
          className="bg-white py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">

            {/* Left — details */}
            <div className="lg:sticky lg:top-32">
              <h1
                id="contact-heading"
                className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-5"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Let's talk.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-[1.7] mb-10 max-w-[400px]">
                Whether you have a project in mind or just want to understand your options,
                we're happy to help. Send us a message or book a call directly.
              </p>

              {/* Contact details */}
              <div className="space-y-5 mb-10">
                {DETAILS.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#F9F9FB] border border-slate-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#F26522]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-[14px] font-medium text-gray-900 hover:text-[#F26522] transition-colors"
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[14px] font-medium text-gray-900">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Or book a call */}
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[13px] text-gray-500 mb-4">
                  Prefer a conversation? Book a free 30-minute call.
                </p>
                <OrangeButton text="Book a free consultation" to="/free-consultation" />
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#F9F9FB] border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-[18px] font-semibold text-gray-900 mb-1">Send us a message</h2>
              <p className="text-[13px] text-gray-500 mb-7">
                We'll come back to you within one business day.
              </p>
              <ContactForm />
            </div>

          </div>
        </section>

        {/* ── Map / location bar ────────────────────────────────────────────── */}
        <section
          className="bg-[#0F172A] py-10 sm:py-12 px-5 sm:px-8 lg:px-12"
          aria-label="Location"
        >
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-[#F26522] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[15px] font-semibold text-white">Derry/Londonderry</p>
                <p className="text-[13px] text-slate-400 mt-0.5">
                  Northern Ireland · Serving all of Ireland
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Derry+Londonderry+Northern+Ireland"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              View on Google Maps →
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
