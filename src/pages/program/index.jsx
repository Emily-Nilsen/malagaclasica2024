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
    'E',
    'l',
    ' ',
    'N',
    'u',
    'o',
    'v',
    'o',
    ' ',
    'M',
    'u',
    'n',
    'd',
    'o',
  ]

  const theNewWorld = [
    'T',
    'h',
    'e',
    ' ',
    'N',
    'e',
    'w',
    ' ',
    'W',
    'o',
    'r',
    'l',
    'd',
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
                  src="/media/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                  alt="Málaga Clásica"
                  width={2000}
                  height={2000}
                  className="h-full w-full object-cover object-center"
                  unoptimized
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

              <motion.h3
                variants={itemBottom}
                initial="hidden"
                animate="show"
                className="max-w-3xl text-lg text-blueGrey2024 sm:mt-3 sm:text-2xl"
              >
                26/05__01/06{' '}
                <span className="text-blueGreyDark2024">&nbsp;2025</span>
              </motion.h3>
            </div>
          </div>
        </div>

        <div className="bg-pink3_2024/40 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="relative mx-auto max-w-lg divide-y-2 divide-pinkText2024/20 lg:max-w-7xl">
            <div>
              <h4 className="text-4xl font-extrabold tracking-tight text-pinkText2024 sm:text-5xl md:text-6xl">
                {program_title}
              </h4>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
                <p className="text-xl text-gray-600">{program_subtitle}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-6 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-8">
              {events
                .filter((p) => p.locale === locale)
                .map((event, i) => (
                  <Link
                    key={i}
                    href={`/program/${slugify(event.title)}`}
                    passHref
                  >
                    <div
                      className="group cursor-pointer rounded-md bg-white p-6 transition duration-300 ease-in-out hover:bg-blue2024"
                      key={i}
                    >
                      <p className="text-sm text-gray-500 group-hover:text-white">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </p>
                      <div className="mt-2 block">
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
