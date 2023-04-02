import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { MediaHero } from '@/components/MediaHero'
import { MediaTilesHero } from '@/components/MediaTilesHero'
import { StatSection } from '@/components/StatSection'
import { MediaBlog } from '@/components/MediaBlog'
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
        <MediaTilesHero />
        <StatSection />
        <MediaBlog />
        {/* <MediaCollage /> */}
      </main>
      <Footer />
    </>
  )
}
