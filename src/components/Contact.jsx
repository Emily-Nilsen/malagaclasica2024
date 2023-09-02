import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Contact() {
  const { t, lang } = useTranslation('common')
  const kontakt = t('kontakt')
  const advokat = t('advokat')

  return (
    <div
      id="kontakt"
      className="border-t border-gray-100 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-normal text-gray-900">
                {kontakt}
              </h2>
              {/* <p className="mt-4 leading-7 text-gray-600">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
                pellentesque.
              </p> */}
            </div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
            >
              <div className="rounded-none bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Besøksadresse
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>Sørkedalsveien 6 (KPMG-bygget 18. etasje)</p>
                  <p>0369 Oslo</p>
                </address>
              </div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="rounded-none bg-gray-50 p-10"
              >
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Postadresse
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>Postboks 7016 Majorstuen</p>
                  <p>0306 Oslo</p>
                </address>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="rounded-none bg-gray-50 p-10"
              >
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Sentralbord
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <Link
                      className="transition-colors duration-200 ease-in-out hover:text-gray-900"
                      href="tel:+4740001423"
                    >
                      <dd>(+47) 400 01 423</dd>
                    </Link>
                  </div>
                </dl>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="rounded-none bg-gray-50 p-10"
              >
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Kontorsjef
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        className="font-semibold text-gray-600 transition-colors duration-200 ease-in-out hover:text-gray-500"
                        href="mailto:ane@flemmenco.no"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ane@flemmenco.no
                      </Link>
                    </dd>
                  </div>
                </dl>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="rounded-none bg-gray-50 p-10"
              >
                <h3 className="text-base font-semibold capitalize leading-7 text-gray-900">
                  {advokat} Christian Flemmen Johansen
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        className="font-semibold text-gray-600 transition-colors duration-200 ease-in-out hover:text-gray-500"
                        href="mailto:cfj@flemmenco.no"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        cfj@flemmenco.no
                      </Link>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <Link
                      className="transition-colors duration-200 ease-in-out hover:text-gray-900"
                      href="tel:+4791548177"
                    >
                      <dd>(+47) 915 48 177</dd>
                    </Link>
                  </div>
                </dl>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="rounded-none bg-gray-50 p-10"
              >
                <h3 className="text-base font-semibold capitalize leading-7 text-gray-900">
                  {advokat} Stine Kalkvik Stenberg
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        className="font-semibold text-gray-600 transition-colors duration-200 ease-in-out hover:text-gray-500"
                        href="mailto:sks@flemmenco.no"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        sks@flemmenco.no
                      </Link>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <Link
                      className="transition-colors duration-200 ease-in-out hover:text-gray-900"
                      href="tel:+4795796351"
                    >
                      <dd>(+47) 957 96 351</dd>
                    </Link>
                  </div>
                </dl>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
