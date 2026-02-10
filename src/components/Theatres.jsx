import Image from 'next/image'
import Link from 'next/link'
import { CervantesMap } from '@/components/CervantesMap'
import { EchegarayMap } from '@/components/EchegarayMap'

import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { TicketIcon } from '@heroicons/react/24/solid'

export function Theatres() {
  const { t, lang } = useTranslation('program')
  const title = t('common:title')
  const metaDescription = t('common:meta-description')
  const cervantes_address = t('cervantes_address')
  const cervantes_weekday = t('cervantes_weekday')
  const cervantes_week_hours = t('cervantes_week_hours')
  const cervantes_weekend = t('cervantes_weekend')
  const cervantes_weekend_hours = t('cervantes_weekend_hours')
  const holidays = t('holidays')
  const echegaray_address = t('echegaray_address')
  const ticket_hours = t('ticket_hours')
  const echegaray_tickets = t('echegaray_tickets')
  const theatre_subtitle = t('theatre_subtitle')
  const theatre_echegaray = t('theatre_echegaray')
  const theatre_cervantes = t('theatre_cervantes')
  const buy_tickets = t('buy_tickets')
  const detailsCervantes = [
    {
      name: `${cervantes_address}`,
      description: '',
    },
    {
      name: `${cervantes_weekday}`,
      description: `${cervantes_week_hours}`,
    },
    {
      name: `${cervantes_weekend}`,
      description: `${cervantes_weekend_hours}`,
    },
    {
      name: '',
      description: `${holidays}`,
    },
  ]

  const detailsEchegaray = [
    {
      name: `${echegaray_address}`,
      description: '',
    },
    {
      name: `${ticket_hours}`,
      description: `${echegaray_tickets}`,
    },
  ]

  return (
    <section>
      {/* Teatro Echegaray */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-white"
              >
                <div className="h-full w-full object-cover object-center">
                  <Image
                    src="/media/Foto_04_revoluciones_jvrwqs.webp"
                    alt="Teatro Echegaray"
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover object-center"
                    unoptimized
                  />
                </div>
              </motion.div>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                {/* Google Map */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="aspect-h-1 aspect-w-1 relative h-0 overflow-hidden rounded-lg shadow-none"
                >
                  <EchegarayMap />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-grey2026"
                >
                  <div className="h-full w-full object-cover object-center">
                    <Image
                      src="/media/echegaray_fcc1ko.jpg"
                      alt="Teatro Echegaray"
                      width={2000}
                      height={2000}
                      className="h-full w-full object-cover object-center"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:pl-20">
              <div className="border-b border-fuchsia2026/50 pb-10">
                <h4 className="font-extrabold italic text-fuchsia2026">
                  {theatre_subtitle}
                </h4>
                <h4 className="mt-2 text-3xl font-extrabold tracking-normal text-black2026 sm:text-4xl">
                  {theatre_echegaray}
                </h4>
              </div>

              <dl className="mt-10 space-y-10">
                {detailsEchegaray.map((detail) => (
                  <div key={detail.name}>
                    <dt className="text-base font-medium text-black2026">
                      {detail.name}
                    </dt>
                    <dd className="mt-3 max-w-sm text-base text-black2026/80">
                      {detail.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a
                  href="https://www.teatroechegaray.com/es/genero/musica/xiv-malaga-clasica-metropolis/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-fuchsia2026 px-4 py-2 text-sm font-medium text-white shadow-none transition duration-200 ease-in-out hover:bg-fuchsia2026/90 hover:text-black2026 focus:outline-none focus:ring-2 focus:ring-grey2026 focus:ring-offset-2"
                  >
                    <TicketIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    {buy_tickets}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Teatro Cervantes */}
      <div className="bg-pink2026">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="border-b border-fuchsia2026/30 pb-10">
                <h4 className="font-extrabold italic text-fuchsia2026">
                  {theatre_subtitle}
                </h4>
                <h4 className="mt-2 text-3xl font-extrabold tracking-normal text-black2026 sm:text-4xl">
                  {theatre_cervantes}
                </h4>
              </div>

              <dl className="mt-10 space-y-10">
                {detailsCervantes.map((detail) => (
                  <div key={detail.name}>
                    <dt className="text-base font-medium text-black2026">
                      {detail.name}
                    </dt>
                    <dd className="mt-3 max-w-sm text-base text-black2026/80">
                      {detail.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a
                  href="https://www.teatrocervantes.com/es/genero/musica/xiv-malaga-clasica-metropolis/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-fuchsia2026 px-4 py-2 text-sm font-medium text-black2026 shadow-none transition duration-200 ease-in-out hover:bg-fuchsia2026 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink2026 focus:ring-offset-2"
                  >
                    <TicketIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    {buy_tickets}
                  </button>
                </a>
              </div>
            </div>

            <div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100"
              >
                <div className="h-full w-full object-cover object-center">
                  <Image
                    src="/media/NG-revoluciones_ecfcmj.webp"
                    alt="Teatro Cervantes"
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover object-center"
                    unoptimized
                  />
                </div>
              </motion.div>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100"
                >
                  <div className="h-full w-full object-cover object-center">
                    <Image
                      src="/media/cervantes_ikqf3i.webp"
                      alt="Teatro Cervantes"
                      width={2000}
                      height={2000}
                      className="h-full w-full object-cover object-center"
                      unoptimized
                    />
                  </div>
                </motion.div>

                {/* Google Map */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="aspect-h-1 aspect-w-1 relative h-0 overflow-hidden rounded-lg shadow-none"
                >
                  <CervantesMap />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
