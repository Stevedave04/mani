import { useState } from 'react'
import { ArrowRight, Clock, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLondonTime } from '../hooks/useLondonTime'
import { TextRoll } from './ui/TextRoll'

// ─── Nav links config ─────────────────────────────────────────────────────────

const NAV_LINKS: [string, string][] = [
  ['Services', '/services'],
  ['About', '/about'],
  ['Articles', '/articles'],
  ['Contact', '/contact'],
]

// ─── Mobile menu ─────────────────────────────────────────────────────────────

function MobileMenu({
  isOpen,
  onClose,
  londonTime,
}: {
  isOpen: boolean
  onClose: () => void
  londonTime: string
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className={`absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center gap-2 mb-8">
          <Clock size={13} className="text-gray-500" />
          <span className="text-[13px] text-gray-600">{londonTime} in London</span>
        </div>

        <nav className="flex flex-col gap-5 mb-8">
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className="text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300"
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          to="/free-consultation"
          onClick={onClose}
          className="group flex items-center gap-2 bg-[#F26522] text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 cursor-pointer w-full justify-between"
        >
          <TextRoll text="Get a free call" />
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
            <ArrowRight size={13} className="text-[#F26522]" />
          </div>
        </Link>
      </div>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const londonTime = useLondonTime()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto p-2 sm:p-3">
          <nav
            className="bg-white rounded-full px-[5px] py-[5px] flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Left: logo + desktop links */}
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0"
                aria-label="Marketing Advice NI home"
              >
                <span className="text-white font-bold tracking-tight text-[10px] sm:text-[11px]">
                  MANI
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map(([label, href]) => (
                  <Link
                    key={label}
                    to={href}
                    className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: clock + CTA / mobile menu */}
            <div className="hidden md:flex items-center gap-4">
              <span className="hidden lg:block text-[13px] text-gray-600">
                Serving businesses across Ireland &amp; NI
              </span>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-gray-600" />
                <span className="text-[13px] text-gray-600">{londonTime} in London</span>
              </div>
              <Link
                to="/free-consultation"
                className="group flex items-center gap-2 bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 cursor-pointer"
              >
                <TextRoll text="Get a free call" />
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <ArrowRight size={11} className="text-gray-900" />
                </div>
              </Link>
            </div>

            <button
              className="md:hidden flex items-center gap-2 bg-gray-900 text-white text-[13px] font-medium rounded-full px-4 py-2 cursor-pointer mr-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={16} />
              <span>Menu</span>
            </button>
          </nav>
        </div>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        londonTime={londonTime}
      />
    </>
  )
}
