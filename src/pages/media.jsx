import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { MediaHero } from '@/components/MediaHero'
import { MediaCollage } from '@/components/MediaCollage'
import { Footer } from '@/components/Footer'

export default function Media() {
  return (
    <>
      <Head>
        <title>Forsvarsadvokat</title>
        <meta name="description" content="Need a page description here" />
      </Head>
      <Header />
      <main>
        <MediaHero />
        <MediaCollage />
      </main>
      <Footer />
    </>
  )
}
