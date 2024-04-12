import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { motion, AnimatePresence } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import artists from '../../../assets/artists'

import slugify from 'slugify'
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

export default function Artists(props) {
  const { locale, locales, asPath } = useRouter()
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
  const { t, lang } = useTranslation('artists')
  const title = t('common:title')
  const metaDescription = t('common:meta-description')
  const artistsTitle = t('title')
  const hero_title = t('hero_title')
  const hero_subtitle = t('hero_subtitle')
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
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/OG_2024_hfuxay.webp"
        />
        <meta property="og:url" content="https://malagaclasica.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        {/* Add the StructuredData component within Head */}
        {/* <StructuredData /> */}
      </Head>
      {/* <Header /> */}

      <main className="">
        <div className="relative overflow-hidden bg-blue2024 px-10 py-0 pb-0 sm:px-12 sm:py-0">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="h-full w-full overflow-hidden object-cover"
            >
              <div className="absolute right-0 -mt-10 h-full w-full sm:-mt-0">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                  alt="Málaga Clásica"
                  unoptimized={true}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </motion.div>
          </div>
          <div className="relative mx-auto max-w-7xl px-0 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="bg-t -m-10 -mb-80 px-3 pb-60 pt-28 text-center sm:-mb-28 sm:w-fit sm:px-9 sm:pb-10 sm:pt-48 sm:text-left">
              <motion.h4
                variants={container}
                initial="hidden"
                animate="show"
                className="block text-4xl font-extrabold italic tracking-normal text-blueGreyDark2024 sm:text-5xl lg:text-6xl"
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

              <motion.h3
                variants={itemBottom}
                initial="hidden"
                animate="show"
                className="max-w-3xl text-lg text-blueGrey2024 sm:mt-3 sm:text-2xl"
              >
                27/05__01/06{' '}
                <span className="text-blueGreyDark2024">&nbsp;2024</span>
              </motion.h3>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-6 sm:space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h4 className="max-w-sm text-4xl font-bold leading-none tracking-normal text-blueText2024 sm:max-w-lg sm:text-5xl md:text-6xl">
                  {artistsTitle}
                </h4>
                <p className="max-w-sm text-xl text-blueGreyDark2024 sm:max-w-md">
                  {subtitle}
                </p>
              </div>
              <ul
                role="list"
                className="group space-y-0 pb-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 sm:pb-12 md:pb-16 lg:grid-cols-3 lg:gap-x-8"
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
                          className="group cursor-pointer space-y-4 rounded-lg p-6 transition delay-75 duration-300 ease-in-out hover:bg-pink3_2024/40"
                        >
                          <div className="aspect-h-2 aspect-w-3">
                            <div className="overflow-hidden rounded-lg object-cover shadow-none">
                              <Image
                                layout="fill"
                                objectFit="cover"
                                objectPosition={artist.image_position}
                                src={artist.image}
                                alt={artist.name}
                                unoptimized={true}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="space-y-1 text-lg leading-6">
                              <h4 className="font-bold italic text-pinkText2024">
                                {artist.name}
                              </h4>
                              <p className="font-normal capitalize text-gray-600">
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
