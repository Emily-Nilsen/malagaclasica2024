import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
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
      {/* <Header /> */}

      <main className="">
        <Hero />
        {/* <Features /> */}
        {/* <Testimonials /> */}
      </main>

      {/* <Footer /> */}
    </>
  )
}
