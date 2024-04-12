import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { StructuredData } from '@/components/StructuredData'

import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t, lang } = useTranslation('common')
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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/OG_2024_hfuxay.webp"
        />
        <meta property="og:url" content="https://malagaclasica.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        {/* Add the StructuredData component within Head */}
        <StructuredData />
      </Head>
      {/* <Header /> */}

      <main className="">
        <Hero />
        <Testimonials />
      </main>

      <Footer />
    </>
  )
}
