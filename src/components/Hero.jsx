import Image from 'next/image'
import { BackgroundVideo } from './BackgroundVideo'
import { motion, useInView, useMotionValue, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { Button } from './Button'
import { Brenner } from '@/components/Brenner'
import useTranslation from 'next-translate/useTranslation'

function MobileHero() {
  const { t, lang } = useTranslation('common')
  const advokatfirma = t('advokatfirma')

  return (
    <div className="relative h-[50vh] sm:hidden">
      <Image
        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Flemmen_Co_hero_mobile_aubyjs.webp"
        alt="Christian Flemmen Johansen & Stine Kalkvik Stenberg"
        fill
        className="h-full w-full object-cover object-left"
        priority
      />
      <div className="absolute inset-0 mt-[8.5rem] flex max-w-xs flex-col pl-6 pr-24">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: 'fade',
          }}
        >
          <h1 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white">
            Flemmen
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.7,
            duration: 1,
            type: 'fade',
          }}
        >
          <h1 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white">
            & Co
          </h1>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.9,
            duration: 1,
            type: 'fade',
          }}
          className="my-3 w-fit bg-white px-2.5 py-0.5 text-base font-extrabold tracking-normal text-black"
        >
          <h1 className="uppercase">{advokatfirma}</h1>
        </motion.div>
      </div>
    </div>
  )
}

export function Hero() {
  const { t, lang } = useTranslation('common')
  const advokatfirma = t('advokatfirma')

  return (
    <section>
      <div className="hidden sm:block">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Flemmen_Co_hero_desktop_v1_cropped_i51zcb.webp"
          alt="Christian Flemmen Johansen & Stine Kalkvik Stenberg"
          width={4500}
          height={2739}
          priority
        />

        <div className="absolute inset-0">
          <div className="relative">
            <div className="max-w-md lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pb-24 pt-20 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                <div className="bg-t relative mx-auto max-w-lg px-20 pt-6 text-white md:pl-28 lg:mx-0 lg:-mt-24 lg:p-16 lg:pl-24 xl:-mt-10 xl:max-w-2xl xl:p-12 xl:pl-20">
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 1,
                      type: 'fade',
                    }}
                  >
                    <h1 className="font-display mt-8 font-extrabold uppercase tracking-tight sm:text-3xl md:text-4xl lg:mt-16 lg:text-5xl xl:text-6xl">
                      Flemmen
                    </h1>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.7,
                      duration: 1,
                      type: 'fade',
                    }}
                    className="my-1 lg:my-3"
                  >
                    <h1 className="font-display font-extrabold uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                      & Co
                    </h1>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.9,
                      duration: 1,
                      type: 'fade',
                    }}
                    className="mt-3 w-fit bg-white px-3.5 py-1.5 lg:mt-5"
                  >
                    <h1 className="font-extrabold uppercase tracking-normal text-gray-950 sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
                      {advokatfirma}
                    </h1>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileHero />
    </section>
  )
}
