import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function TextBox1() {
  const { t, lang } = useTranslation('common')
  const oppdatering = t('oppdatering')
  const intro1 = t('intro_1')
  const intro2 = t('intro_2')
  const intro3 = t('intro_3')

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          {/* change back to text-gray-600 */}
          <p className="text-base font-semibold leading-7 text-gray-900">
            {oppdatering}.
          </p>
          {/* <h1 className="mt-2 text-3xl font-extrabold text-gray-900 uppercase sm:text-4xl">
            Erfarne Advokater
          </h1> */}
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
              >
                {intro1}
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="mt-8"
              >
                {intro2}
              </motion.p>
            </div>
            <div>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
              >
                {intro3}
              </motion.p>
            </div>
          </div>
          {/* <div className="flex mt-10">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}
