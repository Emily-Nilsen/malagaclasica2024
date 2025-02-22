import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Layout from '@/components/Layout'
import events from '../../../assets/events'
import slugify from 'slugify'
import { useRouter } from 'next/router'
import { Theatres } from '@/components/Theatres'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

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

export default function Program(props) {
  const slugify = require('slugify')
  const { t, lang } = useTranslation('program')
  const title = t('common:title')
  const metaDescription = t('common:meta-description')
  const program_title = t('title')
  const program_subtitle = t('subtitle')
  const read_more = t('read_more')
  const { locale, locales, asPath } = useRouter()
  const resonancias = [
    'R',
    'e',
    's',
    'o',
    'n',
    'a',
    'n',
    'c',
    'i',
    'a',
    's',
    ' ',
    'd',
    'e',
    'l',
    ' ',
    'e',
    's',
    'p',
    'í',
    'r',
    'i',
    't',
    'u',
  ]
  const spiritual = [
    'S',
    'p',
    'i',
    'r',
    'i',
    't',
    'u',
    'a',
    'l',
    ' ',
    'R',
    'e',
    's',
    'o',
    'n',
    'a',
    'n',
    'c',
    'e',
    ,
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://malagaclasica.com/program"
          key="canonical"
        />
        {/* Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/media/OG_2024_hfuxay.webp" />
        <meta property="og:url" content="https://malagaclasica.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        {/* Add the StructuredData component within Head */}
        {/* <StructuredData /> */}
      </Head>
      <Header />
      <main>
        <div className="relative px-10 py-0 pb-0 overflow-hidden bg-blue2024 sm:px-12 sm:py-0">
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
                  src="/media/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                  alt="Málaga Clásica"
                  width={2000}
                  height={2000}
                  className="object-cover object-center w-full h-full"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
          <div className="relative px-0 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
            <div className="px-3 -m-10 text-center bg-t -mb-80 pb-60 pt-28 sm:-mb-28 sm:w-fit sm:px-9 sm:pb-10 sm:pt-48 sm:text-left">
              <motion.h4
                variants={container}
                initial="hidden"
                animate="show"
                className="block text-4xl italic font-extrabold tracking-normal text-blueGreyDark2024 sm:text-5xl lg:text-6xl"
              >
                {locale === 'en'
                  ? spiritual.map((letter, i) => (
                      <motion.span key={i} variants={item}>
                        {letter}
                      </motion.span>
                    ))
                  : resonancias.map((letter, i) => (
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

        <div className="px-4 pt-16 pb-20 bg-pink3_2024/40 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-pinkText2024/20 lg:max-w-7xl">
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight text-pinkText2024 sm:text-5xl md:text-6xl">
                {program_title}
              </h4>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
                <p className="text-xl text-gray-600">{program_subtitle}</p>
              </div>
            </div>
            <div className="grid gap-6 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-8">
              {events
                .filter((p) => p.locale === locale)
                .map((event, i) => (
                  <Link
                    key={i}
                    href={`/program/${slugify(event.title)}`}
                    passHref
                  >
                    <div
                      className="p-6 transition duration-300 ease-in-out bg-white rounded-md cursor-pointer group hover:bg-blue2024"
                      key={i}
                    >
                      <p className="text-sm text-gray-500 group-hover:text-white">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </p>
                      <div className="block mt-2">
                        <h4 className="text-xl font-bold text-blueGreyDark2024 group-hover:text-white">
                          {event.title}
                        </h4>
                      </div>
                      <div className="mt-3">
                        <button className="text-base font-semibold text-pinkText2024 group-hover:text-pinkText2024">
                          <h4 className="italic">{read_more}</h4>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <Theatres />
      </main>
      <Footer />
    </>
  )
}
