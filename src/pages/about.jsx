import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnnaJesus } from '@/components/AnnaJesus'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

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

export default function About() {
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

  const { t } = useTranslation('about')
  const title = t('common:title')
  const metaDescription = t('common:meta-description')
  const para_1 = t('para_1')
  const para_2 = t('para_2')
  const para_3 = t('para_3')
  const para_3b = t('para_3b')
  const para_4 = t('para_4')

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://malagaclasica.com/about"
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
        <div className="overflow-hidden bg-lightOrange2025">
          <div className="relative px-4 pt-16 pb-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="absolute top-0 bottom-0 hidden w-screen opacity-25 bg-t left-3/4 lg:block" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
              <div>
                <h4 className="text-base font-extrabold tracking-normal uppercase text-red2025">
                  Málaga Clásica
                </h4>
                <h4 className="mt-2 text-4xl font-extrabold leading-none tracking-tight uppercase text-black2025 sm:text-5xl md:text-6xl">
                  {title}
                </h4>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:col-start-2 lg:row-start-1">
                <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                      <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{
                          delay: 0.7,
                          duration: 0.8,
                          type: 'fade',
                          ease: 'easeIn',
                        }}
                        className="object-cover object-center overflow-hidden rounded-lg shadow-none"
                      >
                        <Image
                          src="/media/img_01_l7yprr.webp"
                          alt="Málaga Clásica"
                          width={2228}
                          height={1300}
                          className="object-cover object-center w-full h-full bg-lightOrange2025"
                          unoptimized
                        />
                      </motion.div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto text-base max-w-prose lg:max-w-none">
                  <p className="text-lg text-gray-600">{para_1}</p>
                </div>
                <div className="mx-auto mt-5 prose prose-cyan lg:col-start-1 lg:row-start-1 lg:max-w-none">
                  <div className="text-gray-600">
                    <p>{para_2}</p>
                    <p>{para_3}</p>
                    <p>{para_3b}</p>
                  </div>

                  <div className="text-gray-600">
                    <p>{para_4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnnaJesus />
      </main>

      <Footer />
    </>
  )
}
