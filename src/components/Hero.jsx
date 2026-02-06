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
        <div className="relative isolate overflow-hidden pt-14">
          <img
            alt="Málaga Clásica"
            src="/media/Ocean_water.jpg"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red2025 to-orange2025 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* <div className="relative px-3 py-1 mx-auto text-center text-gray-400 rounded-full text-sm/6 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-black">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
            <div className="text-center">
              <div className="mx-auto grid max-w-xs grid-cols-3 gap-0 pb-2 sm:max-w-sm lg:max-w-lg">
                <div className="col-span-1 flex justify-self-end">
                  <MalagaclasicaLogo className="h-7 w-auto fill-gray-900 sm:h-10" />
                </div>
                <div className="col-span-2 flex items-center justify-center">
                  <div>
                    <p className="text-xl font-normal uppercase tracking-wider text-black2025 sm:text-3xl lg:text-4xl">
                      Málaga Clásica
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-fit border-y border-gray-400">
                <h4 className="px-2 py-1 text-xs font-extrabold uppercase text-red2025 sm:text-xl lg:text-2xl">
                  {title}
                </h4>
              </div>
              {/* <h3 className="max-w-xl mx-auto mt-5 text-xl font-bold tracking-wide uppercase text-red2025 sm:text-2xl lg:text-3xl">
                {subtitle}
              </h3> */}
            </div>
            <div className="max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-left">
                <motion.h4
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="block pt-40 text-left text-5xl font-extrabold uppercase text-black2025 sm:pt-20 sm:text-6xl lg:text-7xl"
                >
                  {locale === 'en'
                    ? theNewWorld.map((letter, i) => (
                        <motion.span key={i} variants={item}>
                          {letter}
                        </motion.span>
                      ))
                    : elNuevoMundo.map((letter, i) => (
                        <motion.span key={i} variants={item}>
                          {letter}
                        </motion.span>
                      ))}
                </motion.h4>
                <h4 className="mt-5 max-w-xl text-xl font-extrabold uppercase tracking-tight text-red2025 sm:text-2xl lg:text-3xl">
                  {subtitle}
                </h4>
                <motion.h3
                  variants={itemBottom}
                  initial="hidden"
                  animate="show"
                  className="mx-auto mt-3 max-w-lg text-left text-2xl font-normal text-gray-600 sm:max-w-3xl sm:text-3xl lg:text-4xl"
                >
                  25––31 / 05 /{' '}
                  <span className="font-medium text-blueGreyDark2024">
                    &nbsp;2026
                  </span>
                </motion.h3>
                <div className="mt-10 flex items-center justify-center gap-x-6"></div>
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
