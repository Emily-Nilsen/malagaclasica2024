import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { TextBox1 } from '@/components/TextBox1'
import { TextBox2 } from '@/components/TextBox2'
import { Kompetanser } from '@/components/Kompetanser'
import { Fields } from '@/components/Fields'
import { ReadMoreBox } from '@/components/ReadMoreBox'
import { FeatureVideo } from '@/components/FeatureVideo'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t, lang } = useTranslation('common')
  const metaDescription = t('meta-description')

  return (
    <>
      <Head>
        <title>Flemmen & Co Advokatfirma</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://www.flemmenco.no/"
          key="canonical"
        />
      </Head>
      <Header />

      <main className="sm:p-12 sm:pt-20 md:px-20 md:pb-20 lg:pt-0">
        <Hero />
        {/* <Fields /> */}

        {/* <FeatureVideo /> */}
        <TextBox1 />
        <TextBox2 />
        <Kompetanser />
        <Footer />
      </main>
    </>
  )
}
