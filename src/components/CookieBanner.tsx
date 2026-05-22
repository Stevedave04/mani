import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const STORAGE_KEY = 'mani-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-5"
    >
      <div className="max-w-4xl mx-auto bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-[13px] sm:text-[14px] text-slate-300 leading-relaxed">
            We use cookies to analyse site performance and improve your experience.
            See our{' '}
            <Link
              to="/privacy"
              className="text-[#F26522] hover:underline underline-offset-2 font-medium"
            >
              Privacy Policy
            </Link>{' '}
            for details.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer px-1 py-1"
            aria-label="Decline cookies"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-[13px] font-medium bg-[#F26522] hover:bg-[#e05a1a] text-white rounded-full px-5 py-2 transition-colors cursor-pointer"
          >
            Accept all
          </button>
          <button
            onClick={decline}
            className="text-slate-500 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
