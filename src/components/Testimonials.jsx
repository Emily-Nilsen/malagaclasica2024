import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

import { QuotesIcon } from './Logos'
import { AforoLibreLogo } from './Logos'
import { LaOpinionLogo } from './Logos'
import { EuropressLogo } from './Logos'

export function Testimonials() {
  const { t, lang } = useTranslation('home')
  const quote_1 = t('quote_1')
  const source_1 = t('source_1')
  const quote_2 = t('quote_2')
  const source_2 = t('source_2')
  const quote_3 = t('quote_3')
  const source_3 = t('source_3')
  const testimonials_title = t('testimonials_title')
  const testimonials_text = t('testimonials_text')
  const read_about = t('read_about')
  const download_pdf = t('common:download_pdf')
  const testimonials = [
    {
      source: `${source_1}`,
      quote: `${quote_1}`,
      icon: <AforoLibreLogo className="w-auto h-9 fill-orange2025" />,
    },
    {
      quote: `${quote_2}`,
      source: `${source_2}`,
      icon: <LaOpinionLogo className="w-auto h-5 fill-orange2025" />,
    },
    {
      quote: `${quote_3}`,
      source: `${source_3}`,
      icon: <EuropressLogo className="w-auto h-9 fill-orange2025" />,
    },
  ]
  return (
    <div className="py-16 bg-lightOrange2025">
      <div className="container flex flex-col justify-between px-4 mx-auto lg:flex-row lg:items-center">
        <div className="mb-14 xl:mb-0">
          <h4 className="max-w-sm pb-2 pr-16 text-3xl font-extrabold tracking-normal text-black2025 sm:pb-4 sm:text-4xl lg:pr-0 xl:w-2/3 xl:text-5xl">
            {testimonials_title}
          </h4>
          <p className="pr-16 mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 lg:pr-0">
            {testimonials_text}
          </p>
          <Link href="/info" passHref>
            <button className="items-start justify-center hidden w-full px-8 py-4 mt-12 text-base font-medium leading-none text-center text-white transition duration-200 ease-in-out rounded bg-red2025 hover:bg-orange2025 focus:outline-none focus:ring-2 focus:ring-red2025 focus:ring-offset-2 sm:w-auto sm:justify-start md:flex">
              {read_about}
            </button>
          </Link>
        </div>
        <div
          role="list"
          aria-label="Testimonials"
          className="grid flex-wrap items-start justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:w-1/2"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.3,
                ease: 'easeIn',
              }}
              key={i}
              role="listitem"
              className="px-4 pt-4 pb-6 bg-white rounded shadow-none xl:p-8"
            >
              <div>
                <QuotesIcon className="w-auto h-4 fill-orange2025" />
              </div>
              <div className="flex items-start justify-between pt-0 pl-4">
                <div className="mr-6">
                  <p className="text-black2025 xl:text-xl xl:leading-loose">
                    {testimonial.quote}
                  </p>
                  <p className="mt-4 text-base font-bold leading-none text-red2025">
                    {testimonial.source}
                  </p>
                </div>
                <div>{testimonial.icon}</div>
              </div>
            </motion.div>
          ))}
          <Link href="/info" passHref>
            <button className="flex items-start justify-center w-full px-8 py-4 mt-4 text-base font-medium leading-none text-center text-white transition duration-200 ease-in-out rounded bg-red2025 hover:bg-orange2025 focus:outline-none focus:ring-2 focus:ring-red2025 focus:ring-offset-2 sm:w-auto sm:justify-start md:hidden">
              {read_about}
            </button>
          </Link>
          {/* pdf */}
          <div className="mt-6">
            <a download href="/p_MC2025.pdf">
              <article className="relative flex flex-col justify-end w-40 h-64 mt-6 overflow-hidden transition duration-300 ease-in-out bg-white isolate rounded-2xl hover:contrast-125 sm:mt-0 sm:w-48">
                <Image
                  src="/media/El_Nuevo_Mundo_2025.webp"
                  alt="Resonancias del espíritu - PDF"
                  width={1862}
                  height={2584}
                  className="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div className="absolute bottom-0 w-full h-40 -z-10 bg-gradient-to-t from-red2025" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-red2025/30" />

                <h3 className="absolute bottom-0 p-3 font-medium leading-6 text-white">
                  <span className="absolute inset-0" />
                  {download_pdf}
                </h3>
              </article>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
