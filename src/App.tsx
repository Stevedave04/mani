import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ConsultationPage from './pages/ConsultationPage'
import PpcPage from './pages/services/PpcPage'
import SeoPage from './pages/services/SeoPage'
import SocialMediaPage from './pages/services/SocialMediaPage'
import WebDesignPage from './pages/services/WebDesignPage'
import ArticlesPage from './pages/ArticlesPage'

// ─── Coming soon placeholder ──────────────────────────────────────────────────

function ComingSoon({ page }: { page: string }) {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
      <p className="text-[13px] font-semibold text-[#F26522] uppercase tracking-widest mb-4">Coming soon</p>
      <h1
        className="font-medium tracking-[-0.03em] text-gray-900 mb-5"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
      >
        {page}
      </h1>
      <p className="text-[15px] text-gray-500 max-w-[400px] leading-relaxed mb-8">
        This page is being built. In the meantime, feel free to get in touch.
      </p>
      <Link
        to="/free-consultation"
        className="group inline-flex items-center gap-2 bg-gray-900 text-white text-[14px] font-medium rounded-full px-6 py-2.5 hover:bg-gray-700 transition-colors cursor-pointer"
      >
        Book a free consultation
      </Link>
    </main>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="free-consultation" element={<ConsultationPage />} />
          <Route path="services/ppc" element={<PpcPage />} />

          {/* Placeholder routes — to be built */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/seo" element={<SeoPage />} />
          <Route path="services/social-media" element={<SocialMediaPage />} />
          <Route path="services/web-design" element={<WebDesignPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="partners" element={<ComingSoon page="Partners" />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="faq" element={<ComingSoon page="Marketing FAQs" />} />
          <Route path="*" element={<ComingSoon page="Page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
