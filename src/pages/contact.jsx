import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const { t } = useTranslation('contact')
  const title = t('common:title')
  const metaDescription = t('common:meta-description')
  const contactTitle = t('title')
  const subtitle = t('subtitle')
  const first_name = t('first_name')
  const surname = t('surname')
  const help = t('help')
  const email = t('email')
  const phone = t('phone')
  const optional = t('optional')
  const max = t('max')
  const submit = t('submit')

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://malagaclasica.com/contact"
          key="canonical"
        />
        {/* Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/media/El_Nuevo_Mundo_2025.webp" />
        <meta property="og:url" content="https://malagaclasica.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
      </Head>
      <Header />

      <main className="">
        <div className="relative bg-lightOrange2025">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="lg:absolute lg:inset-0"
          >
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative object-cover w-full h-64 bg-lightOrange2025 lg:absolute lg:h-full">
                <Image
                  src="/media/Ocean_water.jpg"
                  alt="Resonancias del espíritu 2024"
                  width={2000}
                  height={2000}
                  className="object-cover object-center w-full h-full"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h4 className="text-5xl font-extrabold tracking-tight uppercase text-red2025 sm:text-6xl">
                  {contactTitle}
                </h4>
                <p className="mt-4 text-lg text-black2025 sm:mt-3">
                  {subtitle}
                </p>
                <dl className="mt-8 text-base transition duration-200 ease-in-out text-black2025">
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
                        anamariagomezaguilar.secretaria@gmail.com
                      </span>
                    </dd>
                  </div>
                </dl>

                {/* Contact form */}
                <form
                  action="/success"
                  name="Málaga Clásica"
                  netlify
                  method="POST"
                  className="grid grid-cols-1 mt-16 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="Málaga Clásica"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="Festival Málaga Clásica"
                  />
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {first_name}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        autoComplete="given-name"
                        className="block w-full rounded-md shadow-none border-orange2025/30 focus:border-orange2025 focus:ring-orange2025 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {surname}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                        autoComplete="family-name"
                        className="block w-full rounded-md shadow-none border-orange2025/30 focus:border-orange2025 focus:ring-orange2025 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {email}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md shadow-none border-orange2025/30 focus:border-orange2025 focus:ring-orange2025 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {phone}
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-grey2025"
                      >
                        {optional}
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md shadow-none border-orange2025/30 focus:border-orange2025 focus:ring-orange2025 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="how-can-we-help"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {help}
                      </label>
                      <span
                        id="how-can-we-help-description"
                        className="text-sm text-grey2025"
                      >
                        {max}
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        required
                        maxLength="500"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full border rounded-md shadow-none border-orange2025/30 focus:border-orange2025 focus:ring-orange2025 sm:text-sm"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-orange2025 hover:bg-red2025 focus:outline-none focus:ring-2 focus:ring-orange2025 focus:ring-offset-2"
                    >
                      {submit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
