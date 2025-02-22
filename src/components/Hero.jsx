import Image from 'next/image'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { MalagaclasicaLogo } from './Logos'
import { AyuntamientoLogo } from './Logos'
import { MalagaProculturaLogo } from './Logos'
import { TeatroCervantesLogo } from './Logos'
import { TeatroEchegarayLogo } from './Logos'
import { GalamianLogo } from './Logos'
import { ReinaNilsenLogo } from './Logos'
import { LaCaixaLogo } from './Logos'
import { HoteldelPintorLogo } from './Logos'
import { MalagaIcon } from './Logos'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
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

const logos = [
  {
    name: 'AyuntamientoLogo',
    logoMark: (
      <AyuntamientoLogo className="w-24 h-auto fill-gray-600 sm:w-32" />
    ),
  },
  {
    name: 'MalagaProculturaLogo',
    logoMark: (
      <MalagaProculturaLogo className="w-auto h-3 fill-gray-600 sm:h-4" />
    ),
  },
  {
    name: 'TeatroCervantesLogo',
    logoMark: (
      <TeatroCervantesLogo className="w-auto h-7 fill-gray-600 stroke-gray-600 sm:h-9" />
    ),
  },
  {
    name: 'TeatroEchegarayLogo',
    logoMark: (
      <TeatroEchegarayLogo className="w-auto h-6 fill-gray-600 sm:h-8" />
    ),
  },
  {
    name: 'GalamianLogo',
    logoMark: <MalagaIcon className="w-auto h-8 fill-gray-600 sm:h-10" />,
  },

  {
    name: 'ReinaNilsenLogo',
    logoMark: <ReinaNilsenLogo className="w-auto h-9 fill-gray-600 sm:h-12" />,
  },
  {
    name: 'LaCaixaLogo',
    logoMark: <LaCaixaLogo className="w-auto h-12 fill-gray-600 sm:h-16" />,
  },
  {
    name: 'HoteldelPintorLogo',
    logoMark: (
      <HoteldelPintorLogo className="w-auto h-12 fill-gray-600 sm:h-16" />
    ),
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Hero() {
  const { locale, locales, defaultLocale, asPath } = useRouter()
  const { t, lang } = useTranslation('home')
  const title = t('title')
  const subtitle = t('subtitle')
  const coming_soon = t('coming_soon')
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
  const stayTuned = ['S', 't', 'a', 'y', ' ', 'T', 'u', 'n', 'e', 'd', '!']
  const estateAtento = [
    '!',
    'E',
    's',
    't',
    'a',
    't',
    'e',
    ' ',
    'a',
    't',
    'e',
    'n',
    't',
    'o',
    '!',
  ]
  return (
    <>
      <div>
        {/* Temporary Coming Soon Page */}
        {/* <div className="flex flex-col min-h-full pt-16 pb-12 bg-white">
            <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="px-4 pt-4 pb-8 mx-auto max-w-7xl sm:py-10 sm:px-6 lg:px-8">
                <div className="text-center">
                  <div className="grid max-w-xs grid-cols-3 gap-0 pb-2 mx-auto lg:max-w-lg sm:max-w-sm">
                    <div className="flex col-span-1 justify-self-center">
                      <MalagaclasicaLogo className="w-auto h-10 fill-orangeRevolution" />
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                      <div>
                        <p className="text-2xl font-normal tracking-wider text-gray-700 uppercase sm:text-3xl lg:text-4xl">
                          Málaga Clásica
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto w-fit border-y border-coalCrescendo">
                    <p className="px-2 py-1 text-xl font-light text-coalCrescendo sm:text-2xl lg:text-3xl">
                      {t('home:title')}
                    </p>
                  </div>
                  <h3 className="max-w-xl mx-auto mt-5 text-2xl font-bold tracking-wider uppercase sm:text-3xl lg:text-4xl text-mossCrescendo">
                    2024
                  </h3>
                </div>
              </div>
              <div className="py-16">
                <div className="text-center">
                  <p className="text-sm font-semibold tracking-wide uppercase text-greenCrescendo"></p>
                  <h1 className="mt-2 text-4xl font-extrabold tracking-normal text-coalCrescendo sm:text-5xl">
                    {t('home:coming_soon')}
                  </h1>
                  <p className="max-w-sm mx-auto my-6 text-xl text-coalCrescendo">
                    {t('home:dates_coming')}
                  </p>
                </div>
              </div>
            </main>
          </div> */}

        {/* From 2024 */}
        <div className="relative z-0 bg-transparent">
          <div className="absolute inset-0 z-0 -mt-32 sm:-mt-64">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="object-cover w-full h-full bg-blue2024"
            >
              <div className="sm:hidden">
                <Image
                  unoptimized
                  width={3000}
                  height={2000}
                  src="/media/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                  alt="Resonancias de la espiritu"
                  className="object-cover object-center h-screen bg-blue2024"
                />
              </div>

              <div className="hidden sm:block">
                <Image
                  unoptimized
                  width={3000}
                  height={2000}
                  src="/media/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                  alt="Resonancias de la espiritu"
                  className="object-cover object-center w-full h-full bg-blue2024"
                />
              </div>
            </motion.div>
          </div>
          <div className="relative z-10 bg-transparent">
            <div className="px-4 pt-4 pb-8 mx-auto max-w-7xl sm:px-6 sm:py-10 lg:px-8">
              <div className="text-center">
                <div className="grid max-w-xs grid-cols-3 gap-0 pb-2 mx-auto sm:max-w-sm lg:max-w-lg">
                  <div className="flex col-span-1 justify-self-end">
                    <MalagaclasicaLogo className="w-auto h-10 fill-gray-900" />
                  </div>
                  <div className="flex items-center justify-center col-span-2">
                    <div>
                      <p className="text-2xl font-normal tracking-wider text-gray-900 uppercase sm:text-3xl lg:text-4xl">
                        Málaga Clásica
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mx-auto border-gray-400 w-fit border-y">
                  <p className="px-2 py-1 text-xl font-light text-gray-600 sm:text-2xl lg:text-3xl">
                    {title}
                  </p>
                </div>
                <h3 className="max-w-xl mx-auto mt-5 text-xl font-bold tracking-wide uppercase text-blueGreyDark2024 sm:text-2xl lg:text-3xl">
                  {subtitle}
                </h3>
              </div>
            </div>
          </div>
          {/* Hero below */}
          <div className="bg-transparent">
            <main>
              <div>
                {/* Hero card */}
                <div className="relative">
                  <div className="absolute inset-0">
                    <motion.div
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        type: 'fade',
                        ease: 'easeIn',
                      }}
                      className="object-cover w-full h-full bg-transparent"
                    ></motion.div>
                  </div>
                  <div className="absolute inset-0 bg-transparent" />
                  <div className="w-screen h-full mx-auto bg-transparent sm:px-0 lg:px-0">
                    <div className="relative shadow-none sm:overflow-visible">
                      <div className="relative flex items-center justify-center h-full sm:justify-start sm:px-6 lg:px-8">
                        <div className="w-full px-6 pt-3 bg-t sm:mt-80 sm:w-fit sm:p-10">
                          <motion.h4
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="block pt-40 text-5xl italic font-bold text-center text-blueGreyDark2024 sm:pt-20 sm:text-6xl lg:text-7xl"
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
                            className="max-w-lg mx-auto mt-3 text-xl font-normal text-center text-gray-600 sm:max-w-3xl sm:text-3xl lg:text-4xl"
                          >
                            27/05__01/06{' '}
                            <span className="font-medium text-blueGreyDark2024">
                              &nbsp;2024
                            </span>
                          </motion.h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logo cloud */}
                <div className="relative bg-transparent z-1">
                  <div className="relative z-20 px-4 py-10 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
                    <p className="text-sm font-semibold tracking-wide text-center text-gray-900 uppercase">
                      {t('home:cloud_title')}
                    </p>
                    {/* Mobile screen cloud */}
                    <div className="grid grid-cols-2 gap-3 mt-6 sm:hidden">
                      {logos.map((logo) => (
                        <div
                          key={logo.name}
                          className="flex items-center justify-center"
                        >
                          <div>{logo.logoMark}</div>
                        </div>
                      ))}
                    </div>
                    {/* iPad and larger screen cloud */}
                    <div className="hidden grid-cols-4 gap-3 mt-6 sm:grid">
                      {logos.map((logo) => (
                        <div
                          key={logo.name}
                          className="flex items-center justify-center"
                        >
                          <a href={logo.link} target="_blank" rel="noreferrer">
                            <div>{logo.logoMark}</div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* <Features /> */}
        {/* <Testimonials /> */}
      </div>
    </>
  )
}
