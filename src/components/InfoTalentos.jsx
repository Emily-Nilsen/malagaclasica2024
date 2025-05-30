import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function InfoTalentos() {
  const { t, lang } = useTranslation('talents')
  const masterclasses_title = t('masterclasses_title')
  const dates = t('dates')
  const time = t('time')
  const masterclasses_time = t('masterclasses_time')
  const concerts_title = t('concerts_title')
  const concert_date = t('concert_date')
  const concert_time = t('concert_time')
  const concert_conference = t('concert_conference')
  const concert_conference_date = t('concert_conference_date')
  const concert_conference_time = t('concert_conference_time')
  const image_title = t('image_title')
  const title_3 = t('title_3')
  const para_7_start = t('para_7_start')
  const para_7_link = t('para_7_link')
  const para_8 = t('para_8')
  const more_info = t('more_info')
  const stats = [
    {
      label: `${masterclasses_title}`,
      value: `${dates}`,
    },
    {
      label: `${time}`,
      value: `${masterclasses_time}`,
    },
    {
      label: `${concerts_title}`,
      value: `${concert_date}`,
    },
    { label: `${time}`, value: `${concert_time}` },
    {
      label: `${concert_conference}`,
      value: `${concert_conference_date}`,
    },
    {
      label: `${time}`,
      value: `${concert_conference_time}`,
    },
  ]

  return (
    <div className="relative py-16 bg-lightOrange2025 sm:py-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full opacity-100 right-1/2 rounded-r-3xl bg-orange2025 lg:right-72" />
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 overflow-hidden shadow-none rounded-2xl">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="absolute inset-0 object-cover w-full h-full"
              >
                <Image
                  src="/media/echegaray_fcc1ko.jpg"
                  alt="Teatro Echegaray"
                  width={2000}
                  height={2000}
                  className="object-cover object-center w-full h-full"
                  unoptimized
                />
              </motion.div>
              {/* <div className="absolute inset-0 bg-blueCrescendo mix-blend-multiply" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-grey2025 via-red2025 opacity-70" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <footer className="mt-4">
                    <p className="text-lg font-medium text-white">
                      {image_title}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h4 className="w-full text-4xl font-extrabold tracking-tight uppercase xl:8/12 text-red2025 sm:text-5xl md:w-8/12 lg:w-10/12 xl:text-6xl 2xl:w-8/12">
              {title_3}
            </h4>
            <div className="mt-6 space-y-6 text-black2025">
              <p className="text-lg">{t('talents:para_1')}</p>
              <p className="text-base leading-7">
                {para_7_start}
                <a
                  href="https://www.teatroechegaray.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-semibold transition duration-300 ease-in-out hover:text-orangeRevolution">
                    {para_7_link}
                  </span>
                </a>

                {/* {t('talents:para_7_end')} */}
              </p>
              {/* Detailed information about the program and the chosen groups will be published one week before the shows */}
              <p className="text-base leading-7">{para_8}</p>
            </div>
          </div>

          {/* Stats section */}
          {/* <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="pt-6 border-t-2 border-gray-100"
                >
                  <dt className="text-base font-medium text-orangeRevolution">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-normal text-blueRevolution">
                    <h2>{stat.value}</h2>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 space-y-6 text-gray-500">
              <p>{t('talents:concert_conference_note')}</p>
            </div>

            <div className="mt-10 text-gray-500">
              {t('talents:concert_note')}
            </div>
            <div className="flex mt-10">
              <a
                href="https://teatrocervantes.com/es/genero/musica/xi-malaga-clasica-revoluciones/malaga-talentos-1389"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-orangeRevolution hover:bg-blueRevolution focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeRevolution"
                >
                  {t('talents:cervantes')}
                </button>
              </a>
              <a
                href="http://cinealbeniz.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="inline-flex justify-center px-4 py-2 ml-6 text-sm font-medium text-gray-600 transition duration-200 ease-in-out bg-white border border-transparent rounded-md shadow-none hover:text-blueRevolution hover:bg-orangeRevolution/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeRevolution">
                  {t('talents:cine')}
                </button>
              </a>
            </div>
            <div className="flex"></div>

            
          </div> */}
          {/* More info */}
          <div>
            <div className="mt-12 text-gray-500">
              <span className="">
                <h4 className="text-lg font-extrabold text-black2025">
                  {more_info}
                </h4>
              </span>
            </div>
            <dl className="mt-3 text-base transition duration-200 ease-in-out text-blueGreyDark2024">
              {/* phone */}
              <div className="mt-3">
                <dt className="sr-only">Telefono</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-orange2025"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-medium">699 06 74 52</span>
                </dd>
              </div>
              {/* email */}
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="flex-shrink-0 w-6 h-6 text-orange2025"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-medium">
                    secretaria.malagaclasica@gmail.com
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
