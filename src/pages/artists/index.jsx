import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import artists from '../../../assets/artists'
import { useRouter } from 'next/router'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const itemBottom = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: [0, 0.2, 0.5, 0.8, 1],
    y: 0,
    transition: { type: 'spring', stiffness: 30, duration: 1.3, delay: 1.5 },
  },
}

export default function Artists() {
  const { locale } = useRouter()
  const slugify = require('slugify')

  const artistasDelFestival = [
    'A',
    'r',
    't',
    'i',
    's',
    't',
    'a',
    's',
    ' ',
    'd',
    'e',
    'l',
    ' ',
    'F',
    'e',
    's',
    't',
    'i',
    'v',
    'a',
    'l',
  ]
  const festivalArtists = [
    'F',
    'e',
    's',
    't',
    'i',
    'v',
    'a',
    'l',
    ' ',
    'A',
    'r',
    't',
    'i',
    's',
    't',
    's',
  ]
  const { t } = useTranslation('artists')
  const title = t('common:title')
  const metaDescription = t('common:meta-description')
  const artistsTitle = t('title')
  const subtitle = t('subtitle')

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://malagaclasica.com/artists"
          key="canonical"
        />
        {/* Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/media/OG_2024_hfuxay.webp" />
        <meta property="og:url" content="https://malagaclasica.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
      </Head>
      <Header />

      <main className="">
        <div className="relative px-10 py-20 pb-20 overflow-hidden bg-lightOrange2025 sm:px-12 sm:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="object-cover w-full h-full overflow-hidden"
            >
              <div className="absolute right-0 w-full h-full -mt-10 sm:-mt-0">
                <Image
                  src="/media/Ocean_water.jpg"
                  alt="Málaga Clásica"
                  unoptimized
                  className="object-cover object-center w-full h-full"
                  width={500}
                  height={750}
                />
              </div>
            </motion.div>
          </div>
          <div className="relative px-0 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
            <div className="px-3 -m-10 text-left bg-t -mb-80 pb-60 pt-28 sm:-mb-28 sm:w-fit sm:px-9 sm:pb-10 sm:pt-48">
              <motion.h4
                variants={container}
                initial="hidden"
                animate="show"
                className="block text-3xl font-extrabold tracking-tight uppercase text-black2025 sm:text-4xl lg:text-5xl"
              >
                {locale === 'en'
                  ? festivalArtists.map((letter, i) => (
                      <motion.span key={i} variants={item}>
                        {letter}
                      </motion.span>
                    ))
                  : artistasDelFestival.map((letter, i) => (
                      <motion.span key={i} variants={item}>
                        {letter}
                      </motion.span>
                    ))}
              </motion.h4>

              {/* Where the date was displayed in 2024 */}
              {/* <motion.h3
                                variants={itemBottom}
                                initial="hidden"
                                animate="show"
                                className="max-w-3xl text-lg text-black2025 sm:mt-3 sm:text-2xl"
                              >
                                26/05__01/06 <span className="text-black2025">&nbsp;2025</span>
                              </motion.h3> */}
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-6 sm:space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h4 className="max-w-sm text-4xl font-extrabold leading-none tracking-tight uppercase text-red2025 sm:max-w-lg sm:text-5xl md:text-6xl">
                  {artistsTitle}
                </h4>
                <p className="max-w-sm text-xl text-black2025 sm:max-w-md">
                  {subtitle}
                </p>
              </div>
              <ul
                role="list"
                className="pb-10 space-y-0 group sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 sm:pb-12 md:pb-16 lg:grid-cols-3 lg:gap-x-8"
              >
                {artists
                  .filter((p) => p.locale === locale)
                  .map((artist, i) => (
                    <li key={i}>
                      <Link
                        href={`/artists/${slugify(artist.slug_name)}`}
                        passHref
                      >
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 50,
                          }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: i * 0.15,
                            ease: 'easeInOut',
                          }}
                          className="p-6 space-y-4 transition duration-300 ease-in-out delay-75 rounded-lg cursor-pointer group hover:bg-lightOrange2025"
                        >
                          <div className="aspect-h-2 aspect-w-3">
                            <div className="object-cover overflow-hidden rounded-lg shadow-none">
                              <Image
                                width={2000}
                                height={2000}
                                className="object-cover object-center w-full h-full"
                                unoptimized
                                objectPosition={artist.image_position}
                                src={artist.image}
                                alt={artist.name}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="space-y-1 text-lg leading-6">
                              <h4 className="font-extrabold text-red2025">
                                {artist.name}
                              </h4>
                              <p className="font-normal capitalize text-black2025">
                                {artist.instrument}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
