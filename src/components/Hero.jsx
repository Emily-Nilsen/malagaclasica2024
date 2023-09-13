import Image from 'next/image'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Hero() {
  const { t, lang } = useTranslation('common')
  const advokatfirma = t('advokatfirma')
  return (
    <div className="mx-auto max-w-7xl bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        {/* Mobile */}
        <div className="sm:hidden">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1694621177/Flemmen%20Co/Flemmen_Co_hero_mobile_cropped_itv4fj.webp"
            alt="Christian Flemmen Johansen & Stine Kalkvik Stenberg"
            width={1598}
            height={1500}
            priority
            unoptimized
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900/70" />
        </div>
        {/* Desktop */}
        <div className="hidden sm:block">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Flemmen_Co_hero_desktop_v1_cropped_i51zcb.webp"
            alt="Christian Flemmen Johansen & Stine Kalkvik Stenberg"
            width={4500}
            height={2739}
            priority
            unoptimized
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900/50" />
        </div>
        <div className="relative z-10 -mt-12 max-w-2xl px-6 py-32 sm:-mt-28 sm:px-16 sm:py-48 lg:py-56">
          <div className="text-left text-white">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.1,
                duration: 1,
                type: 'fade',
              }}
            >
              <h1 className="font-display mt-8 text-3xl font-extrabold uppercase tracking-tight md:text-4xl lg:mt-16 lg:text-5xl xl:text-6xl">
                Flemmen
              </h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
                type: 'fade',
              }}
              className="my-0 lg:my-3"
            >
              <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
                & Co
              </h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 1,
                type: 'fade',
              }}
              className="mt-3 w-fit bg-white px-3.5 py-1.5 lg:mt-5"
            >
              <h1 className="text-base font-extrabold uppercase tracking-normal text-gray-950 md:text-lg lg:text-2xl xl:text-3xl">
                {advokatfirma}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
