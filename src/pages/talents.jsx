import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ContentTalentos } from '@/components/ContentTalentos'
import { InfoTalentos } from '@/components/InfoTalentos'
import { MapTalentos } from '@/components/MapTalentos'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { CheckIcon, EnvelopeIcon } from '@heroicons/react/20/solid'

export default function Talents() {
  const { t } = useTranslation('talents')
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
  // const talentos = ['T', 'a', 'l', 'e', 'n', 't', 'o', 's']
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
        <meta property="og:image" content="/media/OG_2024_hfuxay.webp" />
        <meta property="og:url" content="https://malagaclasica.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
      </Head>
      <Header />

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
                src="/media/Ocean_water.jpg"
                alt="Talentos"
                className="object-cover object-center w-full h-full"
                unoptimized
                priority
              />
              {/* <div className="absolute inset-0 bg-lightOrange2025 mix-blend-overlay" /> */}
              <div className="absolute inset-0 bg-lightOrange2025/40" />
              {/* <div className="absolute inset-0 opacity-50 sm:hidden">
                <Image
                  alt="Málaga Clásica - Resonancias Del Espíritu 2024"
                  width={2000}
                  height={2000}
                  className="object-cover object-center w-full h-full"
                  unoptimized
                  src="/media/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                />
              </div> */}
              {/* <div className="absolute inset-0 hidden opacity-50 sm:block">
                <Image
                  alt="Málaga Clásica - Resonancias Del Espíritu 2024"
                  width={2000}
                  height={2000}
                  className="object-cover object-center w-full h-full"
                  unoptimized
                  src="/media/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                />
              </div> */}
            </motion.div>
            {/* something in here!! */}
            <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3">
              <div className="relative flex items-center justify-start h-full bg-t">
                <div className="relative">
                  <div className="w-full px-4 pt-3 pb-1 mt-0 sm:mt-0 sm:px-8 sm:pt-4">
                    <div className="text-left max-w-none">
                      <h4 className="pt-3 text-4xl font-extrabold tracking-tight uppercase text-black2025 sm:text-5xl lg:text-6xl ">
                        málaga
                      </h4>
                      <h4 className="pt-0 pl-10 text-4xl font-extrabold tracking-tight uppercase text-red2025 sm:pl-12 sm:text-5xl lg:text-6xl ">
                        {talentsTitle}{' '}
                        <span className="text-xl italic font-extrabold tracking-tight sm:2xl lg:3xl">
                          2025
                        </span>
                      </h4>
                    </div>
                    <div className="h-0.5 w-full bg-black2025 px-20 sm:my-6" />
                    <div className="text-left max-w-none">
                      <h4 className="pt-3 text-3xl font-extrabold tracking-tight uppercase text-black2025 sm:text-5xl lg:text-6xl ">
                        {convocatoria}
                      </h4>
                      <h4 className="pt-0 pl-10 text-3xl font-extrabold tracking-normal uppercase text-black2025 sm:pl-12 sm:text-5xl lg:text-6xl ">
                        {abierta}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center justify-end hidden h-full col-start-3 pl-20 lg:flex">
                <div className="relative">
                  <div className="w-full px-4 pt-3 pb-1 mt-0 bg-t sm:mt-0 sm:px-8 sm:pt-4">
                    <div className="text-right max-w-none">
                      <h4 className="pt-3 text-4xl font-extrabold tracking-tight uppercase text-red2025 sm:pr-0 lg:text-5xl">
                        {requisitosTitle}{' '}
                      </h4>
                      {/* somthing in here!! */}
                      <div className="text-black2025">
                        <ul
                          role="list"
                          className="grid grid-cols-1 gap-4 mt-8 text-xl leading-6 sm:gap-6"
                        >
                          {requisitosData.map((feature) => (
                            <li
                              key={feature}
                              className="flex flex-col text-right gap-x-3"
                            >
                              <div className="flex justify-end">
                                <CheckIcon
                                  className="flex-none w-5 h-6 mr-2 text-orange2025"
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
                          <div className="pt-3 font-bold">
                            <h4>
                              {deadline}{' '}
                              <span className="">
                                <span className="inline font-extrabold text-red2025">
                                  {deadlineDate}
                                </span>
                              </span>{' '}
                              2025
                            </h4>
                          </div>
                          <dl className="mt-3 transition duration-200 ease-in-out text-black2025">
                            <div className="mt-0">
                              <dt className="sr-only">Email</dt>
                              <dd className="flex">
                                <EnvelopeIcon
                                  className="flex-shrink-0 w-6 h-6 text-orange2025"
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
        <div className="px-6 bg-lightOrange2025 lg:hidden">
          <div className="pt-1 pb-6">
            <div className="flex items-center mt-10 gap-x-4">
              <h4 className="pt-3 pr-10 text-4xl font-extrabold tracking-tight uppercase text-red2025 sm:pr-20">
                {requisitosTitle}{' '}
              </h4>
              <div className="flex-auto h-px bg-gray-100" />
            </div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-4 mt-8 text-lg leading-6 text-bleuGreyDark2024 sm:grid-cols-2 sm:gap-6"
            >
              {requisitosData.map((feature) => (
                <li key={feature} className="flex flex-col gap-x-3">
                  <div className="flex gap-x-3">
                    <CheckIcon
                      className="flex-none w-5 h-6 text-orange2025"
                      aria-hidden="true"
                    />
                    {feature.item}
                  </div>
                  <div className="flex text-sm italic pl-7 text-blueGrey2024">
                    <div className="max-w-xs">
                      {feature.note ? <>{feature.note}</> : null}
                    </div>
                  </div>
                </li>
              ))}
              <div className="pb-2" />
              <hr />
              <div className="pt-3 font-bold">
                <h4>
                  {deadline}{' '}
                  <span className="text-red2025">
                    <span className="inline font-extrabold text-red2025">
                      {deadlineDate}
                    </span>
                  </span>{' '}
                  2025
                </h4>
              </div>
              <dl className="mt-3 transition duration-200 ease-in-out text-bleuGreyDark2024">
                <div className="pb-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="flex-shrink-0 w-6 h-6 text-orange2025"
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
