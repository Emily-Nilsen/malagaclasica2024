import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LogoCloud } from '@/components/LogoCloud'
import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import useTranslation from 'next-translate/useTranslation'

function HiddenHome() {
  // export default function Home() {
  const { t } = useTranslation('common')
  const title = t('title')
  const metaDescription = t('meta-description')

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://malagaclasica.com/"
          key="canonical"
        />
        {/* Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/media/El_Nuevo_Mundo_2025.webp" />
        <meta property="og:url" content="https://malagaclasica.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
      </Head>
      <Header />

      <main className="">
        <Hero />
        <LogoCloud />
        <Features />
        <Testimonials />
      </main>

      <Footer />
    </>
  )
}

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Málaga Clásica 2026 · Coming Soon</title>
        <meta
          name="description"
          content="Información sobre Málaga Clásica 2026 próximamente. Málaga Clásica 2026 information coming soon."
        />
        <link
          rel="canonical"
          href="https://malagaclasica.com/"
          key="canonical"
        />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24 text-center text-gray-900">
        <div className="mx-auto max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Málaga Clásica 2026
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Coming Soon</h1>
          <div className="space-y-3 text-base text-gray-600 sm:text-lg">
            <p>Próximamente compartiremos la información del festival 2026.</p>
            <p>Information about the 2026 festival will be available soon.</p>
          </div>
        </div>
      </main>
    </>
  )
}
