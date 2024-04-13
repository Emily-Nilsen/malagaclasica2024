import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { ContentTalentos } from '@/components/ContentTalentos'
import { InfoTalentos } from '@/components/InfoTalentos'
import { MapTalentos } from '@/components/MapTalentos'
// import { StructuredData } from '@/components/StructuredData'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { CheckIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

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
    transition: { type: 'spring', stiffness: 30, duration: 1.3, delay: 1.6 },
  },
}

export default function Talents() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const { t, lang } = useTranslation('talents')
  const title = t('common:title')
  const metaDescription = t('common:meta-description')
  const requisito01 = t('requisito01')
  const requisitoNote = t('requisitoNote')
  const requisito02 = t('requisito02')
  const requisito03 = t('requisito03')
  const talentsTitle = t('talents')
  const convocatoria = t('convocatoria')
  const abierta = t('abierta')
  const deadline = t('deadline')
  const deadlineDate = t('deadlineDate')
  const requisitosTitle = t('requisitos')
  const talentos = ['T', 'a', 'l', 'e', 'n', 't', 'o', 's']
  const requisitosData = [
    {
      item: `${requisito01}`,
      note: `${requisitoNote}`,
    },
    { item: `${requisito02}` },
    { item: `${requisito03}` },
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://malagaclasica.com/talentos"
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
        <div className="overflow-y-hidden">
          <div className="relative flex items-center justify-center">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
              }}
              className="w-full"
            >
              <Image
                width={2356}
                height={1564}
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/talentos_nhflyf.webp"
                alt="Talentos"
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-blue2024 mix-blend-overlay" />
              <div className="absolute inset-0 bg-blue2024/70" />
              <div className="absolute inset-0 opacity-50 sm:hidden">
                <Image
                  alt="Málaga Clásica - Resonancias Del Espíritu 2024"
                  objectFit="cover"
                  layout="fill"
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                />
              </div>
              <div className="absolute inset-0 hidden opacity-50 sm:block">
                <Image
                  alt="Málaga Clásica - Resonancias Del Espíritu 2024"
                  objectFit="cover"
                  layout="fill"
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                />
              </div>
            </motion.div>
            {/* something in here!! */}
            <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-t relative flex h-full items-center justify-start">
                <div className="relative">
                  <div className="mt-0 w-full px-4 pb-1 pt-3 sm:mt-0 sm:px-8 sm:pt-4">
                    <div className="max-w-none text-left">
                      <h4 className="pt-3 text-4xl font-extrabold uppercase tracking-normal text-blueGreyDark2024 sm:text-5xl lg:text-6xl ">
                        málaga
                      </h4>
                      <h4 className="pl-10 pt-0 text-4xl font-extrabold uppercase tracking-normal text-white sm:pl-12 sm:text-5xl lg:text-6xl ">
                        {talentsTitle}{' '}
                        <span className="sm:2xl lg:3xl text-xl font-bold italic tracking-normal">
                          2024
                        </span>
                      </h4>
                    </div>
                    <div className="h-0.5 w-full bg-blueGreyDark2024 px-20 sm:my-6" />
                    <div className="max-w-none text-left">
                      <h4 className="pt-3 text-3xl font-extrabold uppercase tracking-normal text-blueGreyDark2024 sm:text-5xl lg:text-6xl ">
                        {convocatoria}
                      </h4>
                      <h4 className="pl-10 pt-0 text-3xl font-extrabold uppercase tracking-normal text-blueGreyDark2024 sm:pl-12 sm:text-5xl lg:text-6xl ">
                        {abierta}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-3 hidden h-full items-center justify-end pl-20 lg:flex">
                <div className="relative">
                  <div className="bg-t mt-0 w-full px-4 pb-1 pt-3 sm:mt-0 sm:px-8 sm:pt-4">
                    <div className="max-w-none text-right">
                      <h4 className="capitalise pt-3 text-4xl font-extrabold italic tracking-normal text-pinkText2024 sm:pr-0 lg:text-5xl">
                        {requisitosTitle}{' '}
                      </h4>
                      {/* somthing in here!! */}
                      <div className="text-blueGreyDark2024">
                        <ul
                          role="list"
                          className="mt-8 grid grid-cols-1 gap-4 text-xl leading-6 sm:gap-6"
                        >
                          {requisitosData.map((feature) => (
                            <li
                              key={feature}
                              className="flex flex-col gap-x-3 text-right"
                            >
                              <div className="flex justify-end">
                                <CheckIcon
                                  className="mr-2 h-6 w-5 flex-none text-white"
                                  aria-hidden="true"
                                />
                                <span>{feature.item}</span>
                              </div>
                              <div className="flex justify-end text-base italic text-blueGrey2024">
                                <div className="max-w-xs">
                                  {feature.note ? <>{feature.note}</> : null}
                                </div>
                              </div>
                            </li>
                          ))}
                          <div className="pb-2" />
                          <hr />
                          <div className="pt-3 font-medium">
                            <p>
                              {deadline}{' '}
                              <span className="">
                                <h4 className="inline font-bold italic text-pinkText2024">
                                  {deadlineDate}
                                </h4>
                              </span>{' '}
                              2024
                            </p>
                          </div>
                          <dl className="mt-3 text-blueGreyDark2024 transition duration-200 ease-in-out">
                            <div className="mt-0">
                              <dt className="sr-only">Email</dt>
                              <dd className="flex">
                                <EnvelopeIcon
                                  className="h-6 w-6 flex-shrink-0 text-pinkText2024"
                                  aria-hidden="true"
                                />
                                <span className="ml-3 font-normal">
                                  secretaria.malagaclasica@gmail.com
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* and in here!! */}
        <div className="bg-pink3_2024/30 px-6 lg:hidden">
          <div className="pb-6 pt-1">
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="pr-10 pt-3 text-4xl font-bold capitalize italic tracking-normal text-pinkText2024 sm:pr-20">
                {requisitosTitle}{' '}
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="text-bleuGreyDark2024 mt-8 grid grid-cols-1 gap-4 text-lg leading-6 sm:grid-cols-2 sm:gap-6"
            >
              {requisitosData.map((feature) => (
                <li key={feature} className="flex flex-col gap-x-3">
                  <div className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-pinkText2024"
                      aria-hidden="true"
                    />
                    {feature.item}
                  </div>
                  <div className="flex pl-7 text-sm italic text-blueGrey2024">
                    <div className="max-w-xs">
                      {feature.note ? <>{feature.note}</> : null}
                    </div>
                  </div>
                </li>
              ))}
              <div className="pb-2" />
              <hr />
              <div className="pt-3 font-medium">
                <p>
                  {deadline}{' '}
                  <span className="text-pinkText2024">
                    <h4 className="inline font-bold italic text-pinkText2024">
                      {deadlineDate}
                    </h4>
                  </span>{' '}
                  2024
                </p>
              </div>
              <dl className="text-bleuGreyDark2024 mt-3 transition duration-200 ease-in-out">
                <div className="pb-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-pinkText2024"
                      aria-hidden="true"
                    />
                    <span className="ml-3 font-normal">
                      secretaria.malagaclasica@gmail.com
                    </span>
                  </dd>
                </div>
              </dl>
            </ul>
          </div>
        </div>

        <ContentTalentos />
        <InfoTalentos />
        {/* <ProgramTalentos /> */}
        <MapTalentos />
      </main>

      <Footer />
    </>
  )
}
