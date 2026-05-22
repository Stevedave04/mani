import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

// ─── Sections ─────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    title: 'Who we are',
    body: 'Marketing Advice NI is a digital marketing agency based in Derry/Londonderry, Northern Ireland. Our website address is marketingadviceni.com. We provide SEO, paid advertising, social media management, and web design services to businesses across Ireland and Northern Ireland.',
  },
  {
    title: 'What personal data we collect and why',
    body: 'We collect personal data in the following circumstances:\n\nContact and enquiry forms: When you submit a contact or consultation request, we collect your name, email address, and any information you choose to include in your message. This data is used solely to respond to your enquiry.\n\nComments: If you leave a comment on our site, we collect the data shown in the comments form, along with your IP address and browser user agent string to assist with spam detection.\n\nMedia: If you upload images to the website, please ensure they do not contain embedded location data (EXIF GPS). Visitors can download and extract location data from any images published on the site.',
  },
  {
    title: 'Cookies',
    body: "We use cookies to improve your experience on our website. If you leave a comment, you may opt in to saving your name and email address in cookies for convenience on future visits. These cookies last for one year.\n\nWe may also use analytics cookies to understand how visitors interact with our website. You can control cookie settings through your browser. Note that disabling cookies may affect the functionality of some parts of the site.",
  },
  {
    title: 'Embedded content from other websites',
    body: 'Pages on this site may include embedded content such as videos, images, and articles from third-party platforms. Embedded content behaves as though you have visited those platforms directly. They may collect data about you, use cookies, embed tracking, and monitor your interactions — including if you have an account and are logged in.',
  },
  {
    title: 'Analytics',
    body: 'We may use third-party analytics tools to understand how visitors use our website. These tools collect anonymised data such as pages visited, time on site, and general location. This data is used solely to improve our website and is never sold or shared with third parties for marketing purposes.',
  },
  {
    title: 'Who we share your data with',
    body: 'We do not sell, trade, or rent your personal data to third parties. We may share data with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep the information confidential. We may also disclose information where required by law.',
  },
  {
    title: 'How long we retain your data',
    body: 'Enquiry and contact form submissions are retained for as long as necessary to fulfil the purpose for which they were collected, or as required by law. If you leave a comment, the comment and its associated metadata are retained indefinitely so that we can recognise and approve follow-up comments automatically.',
  },
  {
    title: 'Your rights over your data',
    body: 'You have the right to request an export of any personal data we hold about you. You also have the right to request that we erase your personal data, subject to any legal obligations that require us to retain it. To exercise these rights, please contact us at hello@marketingadviceni.com.',
  },
  {
    title: 'GDPR compliance',
    body: 'We are committed to complying with the General Data Protection Regulation (GDPR) and all applicable UK and EU data protection legislation. We only collect data that is necessary for the purposes described in this policy, and we take appropriate technical and organisational measures to protect it.',
  },
  {
    title: 'Where we send your data',
    body: 'Visitor comments may be checked through an automated spam detection service. Contact form submissions are processed by our internal team only. No personal data is transferred outside of the UK or EEA without appropriate safeguards in place.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. We encourage you to review this policy periodically. Your continued use of our website following any changes constitutes your acceptance of the updated policy.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Marketing Advice NI"
        description="Privacy policy for Marketing Advice NI. How we collect, use, and protect your personal data. Based in Derry/Londonderry, Northern Ireland."
        canonical="/privacy"
      />

      <main>
        <section
          className="bg-white py-8 sm:py-16 lg:py-24 px-5 sm:px-8 lg:px-12"
          aria-labelledby="privacy-heading"
        >
          <div className="max-w-[860px] mx-auto">

            {/* Header */}
            <div className="mb-6 pb-6 border-b border-slate-100">
              <p className="text-[12px] font-semibold text-[#F26522] uppercase tracking-widest mb-4">
                Legal
              </p>
              <h1
                id="privacy-heading"
                className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-5"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)' }}
              >
                Privacy Policy
              </h1>
              <p className="text-[14px] text-slate-500">
                Effective date: January 2024 &nbsp;·&nbsp; Marketing Advice NI, Derry/Londonderry, Northern Ireland
              </p>
            </div>

            {/* Intro */}
            <p className="text-[15px] text-gray-600 leading-[1.8] mb-10">
              This Privacy Policy explains how Marketing Advice NI collects, uses, and protects your
              personal data when you use our website or engage our services. We take your privacy
              seriously and are committed to being transparent about our data practices.
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
                    {body.split('\n\n').map((paragraph, j) => (
                      <p key={j} className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.8] mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
              <p className="text-[13px] text-slate-400">
                Questions about your data?{' '}
                <a
                  href="mailto:hello@marketingadviceni.com"
                  className="text-[#F26522] hover:underline font-medium"
                >
                  hello@marketingadviceni.com
                </a>
              </p>
              <Link
                to="/legal"
                className="text-[13px] text-slate-400 hover:text-gray-700 transition-colors"
              >
                View our Terms &amp; Conditions →
              </Link>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
