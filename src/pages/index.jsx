import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Hero } from '@/components/Hero'
import { TextBox1 } from '@/components/TextBox1'
import { MediaBlog } from '@/components/MediaBlog'
import { Kompetanser } from '@/components/Kompetanser'

import { Contact } from '@/components/Contact'
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
        <link rel="canonical" href="https://flemmenco.no/" key="canonical" />
        {/* Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Flemmen_Co_hero_desktop_v1_cropped_i51zcb.webp"
        />
        <meta property="og:url" content="https://flemmenco.no/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        {/* Add the StructuredData component within Head */}
        <StructuredData />
      </Head>
      <Header />

      <main className="sm:p-12 sm:pt-20 md:px-20 md:pb-20 lg:pt-0">
        <Hero />

        <TextBox1 />
        <MediaBlog />
        <Kompetanser />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
