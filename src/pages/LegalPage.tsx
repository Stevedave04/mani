import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

// ─── Sections ─────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    title: 'Services offered',
    body: 'Marketing Advice NI provides marketing consultancy and strategy services to clients. This includes, but is not limited to, marketing planning, digital marketing, social media management, content creation, and advertising campaigns. The specific services provided to each client will be outlined in individual client agreements or proposals.',
  },
  {
    title: 'Client obligations',
    body: "Clients are expected to supply accurate and up-to-date information, work collaboratively with timely feedback, and follow Marketing Advice NI's guidelines for effective strategy implementation. The quality of outcomes depends in part on the accuracy of information provided and the responsiveness of the client throughout the engagement.",
  },
  {
    title: 'Payment terms',
    body: 'Payment terms, including schedules and accepted methods, will be outlined in individual client agreements. Failure to make timely payments may result in the suspension or termination of services. Clients remain liable for any fees due up to the date of termination regardless of the circumstances of that termination.',
  },
  {
    title: 'Confidentiality',
    body: "Marketing Advice NI is committed to protecting client information. We will not disclose confidential details shared during our working relationship except where required by law. Clients are similarly expected to safeguard any proprietary information shared by Marketing Advice NI, including methodologies, strategies, and internal processes.",
  },
  {
    title: 'Intellectual property',
    body: 'Any intellectual property owned by Marketing Advice NI, including but not limited to trademarks, logos, and copyrighted material, remains the property of Marketing Advice NI. Work product created specifically for a client will be governed by the terms set out in the relevant client agreement.',
  },
  {
    title: 'No guarantee of results',
    body: 'We do not guarantee specific results or outcomes from our marketing strategies. Digital marketing performance is influenced by many factors outside our direct control, including platform algorithm changes, market conditions, and competitor activity. We commit to a transparent, methodical process and honest reporting throughout every engagement.',
  },
  {
    title: 'Limitation of liability',
    body: 'Marketing Advice NI shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or from the temporary unavailability of those services. Our liability in any circumstance shall not exceed the fees paid by the client in the three months preceding the event giving rise to the claim.',
  },
  {
    title: 'Termination',
    body: 'Either party may terminate the service agreement with reasonable written notice as specified in the individual client agreement. Upon termination, the client remains responsible for all fees incurred up to and including the termination date. Any outstanding invoices become immediately due.',
  },
  {
    title: 'Governing law',
    body: 'These terms and conditions are governed by the laws of Northern Ireland. Any disputes arising from or in connection with these terms shall be resolved in the courts of Northern Ireland.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LegalPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Marketing Advice NI"
        description="Terms and conditions governing the use of Marketing Advice NI services. Based in Derry/Londonderry, Northern Ireland."
        canonical="/legal"
      />

      <main>
        <section
          className="bg-white py-14 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-labelledby="legal-heading"
        >
          <div className="max-w-[860px] mx-auto">

            {/* Header */}
            <div className="mb-12 pb-10 border-b border-slate-100">
              <p className="text-[12px] font-semibold text-[#F26522] uppercase tracking-widest mb-4">
                Legal
              </p>
              <h1
                id="legal-heading"
                className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-5"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)' }}
              >
                Terms &amp; Conditions
              </h1>
              <p className="text-[14px] text-slate-500">
                Last updated: June 2023 &nbsp;·&nbsp; Marketing Advice NI, Derry/Londonderry, Northern Ireland
              </p>
            </div>

            {/* Intro */}
            <p className="text-[15px] text-gray-600 leading-[1.8] mb-10">
              These terms and conditions govern the provision of services by Marketing Advice NI. By
              engaging our services you agree to the terms set out below. Individual client agreements
              may contain additional or superseding terms that will take precedence where relevant.
            </p>

            {/* Sections */}
            <div className="space-y-8">
              {SECTIONS.map(({ title, body }, i) => (
                <div key={title} className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="text-[13px] font-semibold text-slate-300 mt-0.5 w-6 text-right flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="text-[16px] font-semibold text-gray-900 mb-2 capitalize">
                      {title}
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.8]">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
              <p className="text-[13px] text-slate-400">
                Questions about these terms?{' '}
                <Link to="/contact" className="text-[#F26522] hover:underline font-medium">
                  Get in touch
                </Link>
              </p>
              <Link
                to="/privacy"
                className="text-[13px] text-slate-400 hover:text-gray-700 transition-colors"
              >
                View our Privacy Policy →
              </Link>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
