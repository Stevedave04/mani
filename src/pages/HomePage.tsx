import { ArrowRight } from 'lucide-react'
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'
import Navbar from '../components/Navbar'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import { OrangeButton } from '../components/ui/OrangeButton'

// ─── Partner badge SVG ────────────────────────────────────────────────────────

const PARTNER_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
)

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[62vh] sm:min-h-screen bg-[#EFEFEF] flex flex-col" aria-labelledby="hero-heading">
      {/* Shader overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader style={{ width: '100%', height: '100%' }} disableTelemetry>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Navbar floats over shader */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>

      <div className="flex-1 z-20" />

      {/* Hero content */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
          Marketing Advice NI
        </p>
        <h1
          id="hero-heading"
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-0"
          style={{ fontSize: 'clamp(1.75rem, 7vw, 4.2rem)' }}
        >
          <span className="hidden sm:inline">
            Need more clients for<br />
            your business? That's<br />
            exactly what we do.
          </span>
          <span className="sm:hidden">
            Need more clients for your business? That's exactly what we do.
          </span>
        </h1>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <OrangeButton text="Get a free call" to="/free-consultation" />
          <div
            className="flex items-center gap-2.5 bg-white rounded-[4px] px-3 py-2 cursor-pointer transition-shadow duration-300"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[#E8704E]">{PARTNER_SVG}</span>
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">Agency Partner</span>
            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded font-medium">
              Google &amp; Meta
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 2: About ─────────────────────────────────────────────────────────

function AboutSection() {
  const SMALL_IMG =
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85'
  const LARGE_IMG =
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85'

  return (
    <section
      className="bg-white pt-10 sm:pt-20 lg:pt-32 pb-8 sm:pb-16 lg:pb-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[11px] sm:text-[12px] font-semibold leading-none">1</span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Who we are
          </span>
        </div>

        <h2
          id="about-heading"
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-7 sm:mb-16 lg:mb-28 px-5 sm:px-8 lg:px-12"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
        >
          A premier digital marketing agency,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          delivering results across Ireland.
        </h2>

        {/* Mobile / tablet */}
        <div className="lg:hidden px-5 sm:px-8">
          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-6">
            Based in Derry/Londonderry, Northern Ireland. We specialise in SEO, PPC, Social Media,
            Email Marketing, and Web Design, helping businesses grow their online presence and reach
            their goals.
          </p>
          <OrangeButton text="Our services" to="/services" />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8">
            <div className="sm:w-[45%]">
              <img
                src={SMALL_IMG}
                alt="MANI team at work"
                className="w-full rounded-xl sm:rounded-2xl object-cover"
                style={{ aspectRatio: '438/346' }}
                loading="lazy"
              />
            </div>
            <div className="sm:w-[55%]">
              <img
                src={LARGE_IMG}
                alt="MANI studio session"
                className="w-full rounded-xl sm:rounded-2xl object-cover"
                style={{ aspectRatio: '900/600' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-12">
          <div className="self-end">
            <img
              src={SMALL_IMG}
              alt="MANI team at work"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '438/346' }}
              loading="lazy"
            />
          </div>
          <div className="self-start flex justify-end">
            <div>
              <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-gray-900 whitespace-nowrap mb-6">
                Based in Derry/Londonderry, we specialise
                <br />
                in SEO, PPC, Social Media &amp; Web Design,
                <br />
                helping Irish businesses grow online.
              </p>
              <OrangeButton text="Our services" to="/services" />
            </div>
          </div>
          <div className="self-end">
            <img
              src={LARGE_IMG}
              alt="MANI studio session"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '3/2' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 3: Case Studies ──────────────────────────────────────────────────

function CaseStudiesSection() {
  return (
    <section
      className="bg-[#F5F5F5] pt-10 sm:pt-20 lg:pt-28 pb-10 sm:pb-20 lg:pb-28"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[11px] sm:text-[12px] font-semibold leading-none">2</span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Featured client work
          </span>
        </div>

        <h2
          id="clients-heading"
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-5 sm:mb-14 lg:mb-16 px-5 sm:px-8 lg:px-12"
          style={{ fontSize: 'clamp(1.75rem, 7vw, 4.2rem)' }}
        >
          Our clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          {/* GoFuel */}
          <div>
            <div className="group relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] cursor-pointer">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="GoFuel campaign results"
              />
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full transition-all duration-300 ease-in-out overflow-hidden">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-100 whitespace-nowrap">
                  Learn more
                </span>
                <div className="absolute right-[11px] top-1/2 -translate-y-1/2 -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
              Targeted Facebook &amp; Instagram ad campaigns delivering record lead generation and
              revenue growth for a Northern Irish fuel company
            </p>
            <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">GoFuel</p>
          </div>

          {/* Beech Hill */}
          <div>
            <div className="group relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] cursor-pointer">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="Beech Hill campaign results"
              />
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[168px] bg-gray-900 rounded-full transition-all duration-300 ease-in-out overflow-hidden">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-100 whitespace-nowrap">
                  View case study
                </span>
                <div className="absolute right-[11px] top-1/2 -translate-y-1/2 -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
              Full digital strategy covering SEO, Google Ads &amp; social media, transforming online
              bookings for a premier Derry hotel
            </p>
            <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">Beech Hill</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Home page ────────────────────────────────────────────────────────────────

const HOME_LD = [
  LOCAL_BUSINESS_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Marketing Advice NI',
    url: 'https://www.marketingadviceni.com',
  },
]

export default function HomePage() {
  return (
    <>
      <SEO
        title="Digital Marketing Agency | Derry & Northern Ireland"
        description="Marketing Advice NI: premium SEO, PPC, social media and web design for businesses across Ireland and Northern Ireland. Google and Meta certified agency based in Derry/Londonderry."
        canonical="/"
        jsonLd={HOME_LD}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <CaseStudiesSection />
      </main>
    </>
  )
}
