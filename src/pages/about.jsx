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
        <meta property="og:image" content="/media/OG_2024_hfuxay.webp" />
        <meta property="og:url" content="https://malagaclasica.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
      </Head>
      <Header />

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
                  src="/media/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                  alt="Málaga Clásica"
                  unoptimized
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={750}
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
                className="block text-4xl font-bold italic tracking-normal text-blueGreyDark2024 sm:text-5xl lg:text-6xl"
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
        <div className="overflow-hidden bg-pink3_2024/50">
          <div className="relative mx-auto max-w-7xl px-4 pb-0 pt-16 sm:px-6 lg:px-8">
            <div className="bg-t absolute bottom-0 left-3/4 top-0 hidden w-screen opacity-25 lg:block" />
            <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
              <div>
                <h4 className="text-base font-bold italic tracking-normal text-pinkText2024">
                  Málaga Clásica
                </h4>
                <h4 className="mt-2 text-4xl font-bold leading-none tracking-normal text-blueText2024 sm:text-5xl md:text-6xl">
                  {title}
                </h4>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:col-start-2 lg:row-start-1">
                <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
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
                        className="overflow-hidden rounded-lg object-cover object-center shadow-none"
                      >
                        <Image
                          src="/media/img_01_l7yprr.webp"
                          alt="Málaga Clásica"
                          width={2228}
                          height={1300}
                          className="h-full w-full bg-blue2024 object-cover object-center"
                          unoptimized
                        />
                      </motion.div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto max-w-prose text-base lg:max-w-none">
                  <p className="text-lg text-gray-600">{para_1}</p>
                </div>
                <div className="prose prose-cyan mx-auto mt-5 lg:col-start-1 lg:row-start-1 lg:max-w-none">
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
