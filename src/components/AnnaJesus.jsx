import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function AnnaJesus() {
  const { t, lang } = useTranslation('about')
  const co_directors = t('co_directors')
  const honorary_director = t('honorary_director')
  const para_5 = t('para_5')
  const para_6 = t('para_6')
  const para_7 = t('para_7')
  const directors = [
    {
      name: `Jesús Reina & Anna Nilsen`,
      description: `${co_directors}`,
    },
    {
      name: `John Rockwell`,
      description: `${honorary_director}`,
    },
  ]
  return (
    <div className="">
      <div className="relative bg-lightOrange2025"></div>
      <div className="bg-lightOrange2025">
        <div className="max-w-2xl px-4 pt-0 pb-24 mx-auto sm:px-6 sm:pb-32 sm:pt-0 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="pb-10 border-b border-orange2025">
                <div className="text-gray-600 ">
                  <p>{para_5}</p>
                  <p className="mt-5">{para_6}</p>
                  <p className="mt-5">{para_7}</p>
                </div>
              </div>

              <dl className="mt-10 space-y-10">
                {directors.map((feature) => (
                  <div key={feature.name}>
                    <h4 className="text-lg italic font-extrabold text-red2025">
                      {feature.name}
                    </h4>
                    <dd className="mt-3 text-base font-medium text-black2025">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0,
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1"
                >
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="/media/image-03-small_ccpydm.jpg"
                      alt="Jesús Reina"
                      unoptimized
                      width={500}
                      height={500}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1"
                >
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="/media/anna-nilsen_kolwch.webp"
                      alt="Anna Nilsen"
                      unoptimized
                      width={500}
                      height={500}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
