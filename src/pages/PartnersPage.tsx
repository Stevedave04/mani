import { CheckCircle2 } from 'lucide-react'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import { OrangeButton } from '../components/ui/OrangeButton'

// ─── Data ─────────────────────────────────────────────────────────────────────

const CERT_PARTNERS = [
  {
    name: 'Google Partner',
    badge: 'Certified',
    description:
      'We hold Google Partner status, meaning our team is certified across Google Ads products including Search, Display, Shopping, and YouTube. Google Partner agencies are independently verified for campaign performance and client growth.',
    services: ['Google Search Ads', 'Google Display Network', 'YouTube Advertising', 'Google Shopping'],
  },
  {
    name: 'Meta Business Partner',
    badge: 'Certified',
    description:
      'As a Meta Business Partner we are certified in Facebook and Instagram advertising. This accreditation reflects our track record managing paid social campaigns and our direct access to Meta support and beta products.',
    services: ['Facebook Advertising', 'Instagram Advertising', 'Meta Lead Generation', 'Retargeting Campaigns'],
  },
]

const CLIENTS = [
  'Beech Hill',
  'Go Fuel',
  'Go Power',
  'Solis GMC',
  'LCC Oil',
  'Riverside',
  'Best Weight Loss Clinic',
  'Irish Hypnosis Ltd',
  'MK Merch',
  'Jefferson Tools',
  'MacGen',
  "McIntyre's Equipment",
  'Fermac',
  'Belfray',
  'SDG',
  'Grey Black Page Livre',
]

const SECTORS = [
  { label: 'Hospitality & Tourism', desc: 'Hotels, restaurants, and visitor attractions across Ireland.' },
  { label: 'Fuel & Energy', desc: 'Oil suppliers, fuel distributors, and energy companies in NI and ROI.' },
  { label: 'Health & Wellness', desc: 'Clinics, therapists, and wellness practitioners.' },
  { label: 'Trade & Equipment', desc: 'Tools, machinery, and specialist trade suppliers.' },
  { label: 'Automotive', desc: 'Dealerships and fleet operators across Northern Ireland.' },
  { label: 'Professional Services', desc: 'Consultancies, agencies, and B2B service providers.' },
]

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const PARTNERS_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Partners | Marketing Advice NI',
    description:
      'Marketing Advice NI is a Google Partner and Meta Business Partner, certified in paid advertising across Search, Display, Facebook, and Instagram.',
    url: 'https://www.marketingadviceni.com/partners',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PartnersPage() {
  return (
    <>
      <SEO
        title="Partners | Google & Meta Certified Agency, Derry"
        description="Marketing Advice NI is a certified Google Partner and Meta Business Partner based in Derry. We've worked with 80+ businesses across Ireland and Northern Ireland."
        canonical="/partners"
        jsonLd={PARTNERS_LD}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="bg-white pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 px-5 sm:px-8 lg:px-12"
          aria-labelledby="partners-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">✓</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                Our partners
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <h1
                id="partners-heading"
                className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
                style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.2rem)' }}
              >
                Certified. Trusted.
                <br />
                Accountable.
              </h1>
              <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-[380px] leading-relaxed md:text-right md:ml-auto">
                Our certifications are independently verified. Our client roster spans 16 businesses across
                Ireland and Northern Ireland.
              </p>
            </div>
          </div>
        </section>

        {/* ── Certification partners ────────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-labelledby="cert-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">1</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-900">
                Technology certifications
              </span>
            </div>

            <h2
              id="cert-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-12"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
            >
              Independently verified expertise.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {CERT_PARTNERS.map(({ name, badge, description, services }) => (
                <div
                  key={name}
                  className="bg-white rounded-2xl border border-slate-100 p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <span className="inline-block text-[11px] font-semibold text-[#F26522] uppercase tracking-widest mb-2">
                        {badge}
                      </span>
                      <h3 className="text-[20px] font-semibold text-gray-900">{name}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={20} className="text-[#F26522]" />
                    </div>
                  </div>

                  <p className="text-[14px] text-gray-600 leading-[1.75] mb-6">{description}</p>

                  <div className="space-y-2">
                    {services.map((s) => (
                      <div key={s} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] flex-shrink-0" />
                        <span className="text-[13px] font-medium text-gray-700">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sectors ───────────────────────────────────────────────────────── */}
        <section
          className="bg-white py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-labelledby="sectors-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">2</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-200 rounded-full px-4 py-1.5 text-gray-900">
                Sectors we work in
              </span>
            </div>

            <h2
              id="sectors-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-4"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
            >
              Experience across industries.
            </h2>
            <p className="text-[15px] text-gray-500 mb-12 max-w-[480px] leading-relaxed">
              We have delivered results for businesses across a wide range of sectors throughout Ireland and Northern Ireland.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SECTORS.map(({ label, desc }) => (
                <div key={label} className="p-5 rounded-2xl border border-slate-100 bg-[#F9F9FB]">
                  <div className="w-2 h-2 rounded-full bg-[#F26522] mb-4" />
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{label}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Client roster ─────────────────────────────────────────────────── */}
        <section
          className="bg-[#F5F5F5] py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-labelledby="clients-heading"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold leading-none">3</span>
              </div>
              <span className="text-[13px] font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-900">
                Businesses we have worked with
              </span>
            </div>

            <h2
              id="clients-heading"
              className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-4"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
            >
              80+ businesses. One team.
            </h2>
            <p className="text-[15px] text-gray-500 mb-10 max-w-[480px] leading-relaxed">
              A selection of the businesses we have had the privilege of working with across Ireland and Northern Ireland.
            </p>

            <div className="flex flex-wrap gap-3">
              {CLIENTS.map((name) => (
                <span
                  key={name}
                  className="inline-block bg-white border border-slate-200 rounded-full px-4 py-2 text-[13px] font-medium text-gray-800"
                >
                  {name}
                </span>
              ))}
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
                Ready to join the list?
              </h2>
              <p className="text-[14px] text-slate-400">
                Book a free 30-minute call to talk through your goals.
              </p>
            </div>
            <OrangeButton text="Book a free consultation" to="/free-consultation" />
          </div>
        </section>
      </main>
    </>
  )
}
