import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { MalagaclasicaLogo } from './Logos'

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

export function Hero() {
  const { locale } = useRouter()
  const { t } = useTranslation('home')
  const title = t('title')
  const subtitle = t('subtitle')

  const elNuevoMundo = 'Metrópolis'.split('')
  const theNewWorld = 'Metropolis'.split('')

  return (
    <>
      <div>
        {/* From 2025 */}
        <div className="relative isolate overflow-hidden bg-fuchsia2026 px-6 pb-6 pt-3 sm:px-10 sm:pb-8 sm:pt-4 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-fuchsia2026 to-fuchsia2026/50 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Metropolis title artwork */}
              <div className="-mt-14 w-full max-w-7xl sm:-mt-28">
                <img
                  alt="Málaga Clásica"
                  src="/media/Metropolis_title.webp"
                  className="mx-auto max-h-[90vh] w-full object-contain object-center"
                />
              </div>

              {/* Text block (centred, below the image, with a clear gap) */}
              <div className="-mt-10 pb-4 sm:-mt-20 sm:pb-6">
                <h1 className="text-xl font-normal uppercase tracking-wider text-black2026 sm:text-3xl lg:text-4xl">
                  Málaga Clásica
                </h1>
                <p className="mt-1 text-[10px] font-extrabold uppercase text-black2026 sm:text-lg lg:text-xl">
                  {title}
                </p>
                <motion.h3
                  variants={itemBottom}
                  initial="hidden"
                  animate="show"
                  className="mx-auto mt-3 max-w-lg text-center text-xl font-normal text-black2026 sm:max-w-3xl sm:text-2xl lg:text-3xl"
                >
                  25––31 / 05 /{' '}
                  <span className="font-medium text-black2026">&nbsp;2026</span>
                </motion.h3>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </>
  )
}
