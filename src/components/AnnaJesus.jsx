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
  const closingParagraphs = [para_5, para_6, para_7].filter((para) =>
    para?.trim()
  )
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
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-0 sm:px-6 sm:pb-32 sm:pt-0 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="border-b border-orange2025 pb-10">
                <div className="text-gray-600 ">
                  {closingParagraphs.map((para, index) => (
                    <p key={para} className={index > 0 ? 'mt-5' : undefined}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <dl className="mt-10 space-y-10">
                {directors.map((feature) => (
                  <div key={feature.name}>
                    <h4 className="text-lg font-extrabold italic text-red2025">
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
              <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
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
                  className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100"
                >
                  <div className="h-full w-full object-cover object-center">
                    <Image
                      src="/media/image-03-small_ccpydm.jpg"
                      alt="Jesús Reina"
                      unoptimized
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center"
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
                  className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100"
                >
                  <div className="h-full w-full object-cover object-center">
                    <Image
                      src="/media/anna-nilsen_kolwch.webp"
                      alt="Anna Nilsen"
                      unoptimized
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center"
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
