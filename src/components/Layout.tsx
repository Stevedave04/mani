import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      {/* Inner pages get a sticky navbar; home manages its own nav inside the shader hero */}
      {!isHome && (
        <header className="sticky top-0 z-40 bg-[#F9F9FB]/95 backdrop-blur-sm border-b border-slate-100/60">
          <Navbar />
        </header>
      )}
      <Outlet />
      <Footer />
      <CookieBanner />
    </>
  )
}
