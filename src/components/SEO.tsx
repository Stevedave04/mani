import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  jsonLd?: object | object[]
}

const SITE_NAME = 'Marketing Advice NI'
const BASE_URL = 'https://www.marketingadviceni.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`

// ─── Shared LocalBusiness structured data ────────────────────────────────────

export const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Marketing Advice NI',
  description:
    'Premium digital marketing agency based in Derry/Londonderry, Northern Ireland. Specialising in SEO, PPC, Social Media and Web Design.',
  url: BASE_URL,
  image: DEFAULT_OG_IMAGE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Derry/Londonderry',
    addressRegion: 'Northern Ireland',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.9966,
    longitude: -7.3077,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:30',
  },
  areaServed: [
    { '@type': 'Place', name: 'Northern Ireland' },
    { '@type': 'Place', name: 'Republic of Ireland' },
  ],
  knowsAbout: ['SEO', 'PPC Advertising', 'Social Media Marketing', 'Web Design', 'Digital Marketing'],
  sameAs: [
    'https://www.linkedin.com/company/marketing-advice-ni',
    'https://twitter.com/marketingadviceni',
  ],
}

// ─── SEO component ────────────────────────────────────────────────────────────

export default function SEO({ title, description, canonical = '/', ogImage, jsonLd }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const canonicalUrl = `${BASE_URL}${canonical}`
  const image = ogImage ?? DEFAULT_OG_IMAGE

  const schemaArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD structured data */}
      {schemaArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
