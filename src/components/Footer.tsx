import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

// ─── Inline social SVGs (lucide-react v1 dropped brand icons) ───────────────

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
    </svg>
  )
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

// ─── Logo Icon ────────────────────────────────────────────────────────────────

function LogoIcon() {
  return (
    <div className="w-8 h-8 bg-[#31A8FF] rounded-[8px] flex items-center justify-center flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C4 20 4 14 10 10C16 6 20 4 20 4C20 4 18 8 14 14C10 20 4 20 4 20Z" fill="white" />
        <path d="M4 20L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

// ─── Footer Card ─────────────────────────────────────────────────────────────

const NAV_COLUMNS: Record<string, { label: string; to: string }[]> = {
  Services: [
    { label: 'SEO', to: '/services/seo' },
    { label: 'PPC Advertising', to: '/services/ppc' },
    { label: 'Social Media', to: '/services/social-media' },
    { label: 'Web Design', to: '/services/web-design' },
  ],
  Resources: [
    { label: 'Articles', to: '/articles' },
    { label: 'Marketing FAQs', to: '/faq' },
    { label: 'Free Consultation', to: '/free-consultation' },
    { label: 'Ask Us', to: '/contact' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Partners', to: '/partners' },
    { label: 'Contact', to: '/contact' },
  ],
}

const SOCIAL_ICONS = [
  { label: 'X / Twitter', Icon: IconX },
  { label: 'LinkedIn',    Icon: IconLinkedin },
  { label: 'Instagram',   Icon: IconInstagram },
]

function FooterCard() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-[#E9EBEE] rounded-[48px] border border-slate-200 shadow-sm overflow-hidden">

        {/* ── Inner white card ────────────────────────────────────────── */}
        <div className="bg-white rounded-[40px] m-2 shadow-sm">
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Brand column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-2.5">
                <LogoIcon />
                <span className="text-[26px] font-bold tracking-tight text-[#0F172A]">mani</span>
              </div>

              <p className="text-[#64748B] leading-relaxed text-[16px] font-normal max-w-[320px]">
                Premium digital marketing solutions based in Derry/Londonderry,
                Northern Ireland. Helping businesses across Ireland grow their
                online presence.
              </p>

              <div className="flex gap-3">
                {SOCIAL_ICONS.map(({ label, Icon }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-slate-50 transition-all active:scale-95 group cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-slate-800" />
                  </button>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(NAV_COLUMNS).map(([header, links]) => (
              <div key={header} className="space-y-6">
                <h4 className="text-[14px] font-medium text-[#94A3B8]">{header}</h4>
                <ul className="space-y-4">
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom legal bar (outside white card) ───────────────────── */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px]">
          <p className="text-[#64748B] font-medium">
            © 2026 Marketing Advice NI. All rights reserved.
          </p>
          <div className="flex gap-8 text-[#64748B] font-medium items-center">
            <Link to="/legal" className="hover:text-[#1E293B] transition-colors">Legal Center</Link>
            <div className="w-[1px] h-4 bg-slate-300" />
            <Link to="/privacy" className="hover:text-[#1E293B] transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Glass Text ───────────────────────────────────────────────────────────────

function GlassText() {
  return (
    <div className="relative w-full flex items-center justify-center select-none pt-0">

      {/* Hidden SVG filter definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.25" result="outer-shadow" />
            <feComponentTransfer in="SourceAlpha" result="alpha">
              <feFuncA type="linear" slope="1" />
            </feComponentTransfer>
            <feOffset in="alpha" dx="0" dy="4" result="offset-white" />
            <feGaussianBlur in="offset-white" stdDeviation="4" result="blur-white" />
            <feComposite in="alpha" in2="blur-white" operator="out" result="inner-white-mask" />
            <feFlood floodColor="#ffffff" floodOpacity="0.25" result="white-fill" />
            <feComposite in="white-fill" in2="inner-white-mask" operator="in" result="inner-white-final" />
            <feGaussianBlur in="alpha" stdDeviation="6" result="blur-black" />
            <feComposite in="alpha" in2="blur-black" operator="out" result="inner-black-mask" />
            <feFlood floodColor="#000000" floodOpacity="0.25" result="black-fill" />
            <feComposite in="black-fill" in2="inner-black-mask" operator="in" result="inner-black-final" />
            <feMerge>
              <feMergeNode in="outer-shadow" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="inner-white-final" />
              <feMergeNode in="inner-black-final" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <h1
          className="font-bold tracking-normal leading-none select-none text-white px-4"
          style={{
            fontSize: 'min(25vw, 400px)',
            filter: 'url(#glass-effect)',
          }}
        >
          mani
        </h1>
      </motion.div>

    </div>
  )
}

// ─── Footer Export ────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-0">
      <FooterCard />
      <GlassText />
    </footer>
  )
}
