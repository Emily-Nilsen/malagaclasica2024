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
      icon: <AforoLibreLogo className="h-9 w-auto fill-pink2024" />,
    },
    {
      quote: `${quote_2}`,
      source: `${source_2}`,
      icon: <LaOpinionLogo className="h-5 w-auto fill-pink2024" />,
    },
    {
      quote: `${quote_3}`,
      source: `${source_3}`,
      icon: <EuropressLogo className="h-9 w-auto fill-pink2024" />,
    },
  ]
  return (
    <div className="bg-blue2024/50 py-16">
      <div className="container mx-auto flex flex-col justify-between px-4 lg:flex-row lg:items-center">
        <div className="mb-14 xl:mb-0">
          <h4 className="max-w-sm pb-2 pr-16 text-3xl font-bold tracking-normal text-blueGreyDark2024 sm:pb-4 sm:text-4xl lg:pr-0 xl:w-2/3 xl:text-5xl">
            {testimonials_title}
          </h4>
          <p className="mt-4 pr-16 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 lg:pr-0">
            {testimonials_text}
          </p>
          <Link href="/info" passHref>
            <button className="mt-12 hidden w-full items-start justify-center rounded bg-pink2024 px-8 py-4 text-center text-base font-medium leading-none text-white transition duration-200 ease-in-out hover:bg-pink2_2024 focus:outline-none focus:ring-2 focus:ring-pink2024 focus:ring-offset-2 sm:w-auto sm:justify-start md:flex">
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
              className="rounded bg-white px-4 pb-6 pt-4 shadow-none xl:p-8"
            >
              <div>
                <QuotesIcon className="h-4 w-auto fill-pink2_2024" />
              </div>
              <div className="flex items-start justify-between pl-4 pt-0">
                <div className="mr-6">
                  <p className="text-gray-700 xl:text-xl xl:leading-loose">
                    {testimonial.quote}
                  </p>
                  <p className="mt-4 text-base font-semibold leading-none text-gray-500">
                    {testimonial.source}
                  </p>
                </div>
                <div>{testimonial.icon}</div>
              </div>
            </motion.div>
          ))}
          <Link href="/info" passHref>
            <button className="mt-4 flex w-full items-start justify-center rounded bg-pink2024 px-8 py-4 text-center text-base font-medium leading-none text-white transition duration-200 ease-in-out hover:bg-pink2_2024 focus:outline-none focus:ring-2 focus:ring-pink2024 focus:ring-offset-2 sm:w-auto sm:justify-start md:hidden">
              {read_about}
            </button>
          </Link>
          {/* pdf */}
          <div className="mt-6">
            <a download href="/Resonancias_del_espiritu_2024.pdf">
              <article className="relative isolate mt-6 flex h-64 w-40 flex-col justify-end overflow-hidden rounded-2xl bg-white transition duration-300 ease-in-out hover:contrast-125 sm:mt-0 sm:w-48">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/ResonanciasDelEspiritu_djhaju.webp"
                  alt="Resonancias del espíritu - PDF"
                  width={1862}
                  height={2584}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute bottom-0 -z-10 h-40 w-full bg-gradient-to-t from-pink2024" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-pink2024/30" />

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
