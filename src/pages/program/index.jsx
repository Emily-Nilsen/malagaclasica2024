import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import events from '../../../assets/events'
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

export default function Program() {
  const slugify = require('slugify')
  const { t } = useTranslation('program')
  const title = t('common:title')
  const metaDescription = t('common:meta-description')
  const program_title = t('title')
  const program_subtitle = t('subtitle')
  const read_more = t('read_more')
  const { locale } = useRouter()
  const elNuovoMundo = [
    '2',
    '6',
    '/',
    '0',
    '5',
    '_',
    '_',
    '0',
    '1',
    '/',
    '0',
    '6',
    ' ',
    ' ',
    '2',
    '0',
    '2',
    '5',
  ]

  const theNewWorld = [
    '2',
    '6',
    '/',
    '0',
    '5',
    '_',
    '_',
    '0',
    '1',
    '/',
    '0',
    '6',
    ' ',
    ' ',
    '2',
    '0',
    '2',
    '5',
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
      </Head>
      <Header />
      <main>
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
                  ? theNewWorld.map((letter, i) => (
                      <motion.span key={i} variants={item}>
                        {letter}
                      </motion.span>
                    ))
                  : elNuovoMundo.map((letter, i) => (
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

        <div className="px-4 pt-16 pb-20 bg-lightOrange2025 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-red2025/20 lg:max-w-7xl">
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight uppercase text-red2025 sm:text-5xl md:text-6xl">
                {program_title}
              </h4>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
                <p className="text-xl text-black2025">{program_subtitle}</p>
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
                      className="p-6 transition duration-300 ease-in-out bg-white rounded-md cursor-pointer group hover:bg-orange2025"
                      key={i}
                    >
                      <p className="text-sm font-semibold group-hover:black2025/90 text-black2025/80">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </p>
                      <div className="block mt-2">
                        <h4 className="text-xl font-bold group-hover:black2025 text-black2025">
                          {event.title}
                        </h4>
                      </div>
                      <div className="mt-3">
                        <button className="text-base font-semibold text-red2025 group-hover:text-white">
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
