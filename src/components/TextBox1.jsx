import { Expandable } from '@/components/Expandable'
import { ReadMoreBox } from '@/components/ReadMoreBox'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  useMotionValue,
} from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function TextBox1() {
  const { t, lang } = useTranslation('common')
  const oppdatering = t('oppdatering')
  const intro1 = t('intro_1')
  const intro2 = t('intro_2')
  const intro3 = t('intro_3')
  const merOm = t('merOm')
  const her = t('her')

  return (
    <section>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <div className="bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                  {/* change back to text-gray-600 */}

                  {/* <h1 className="mt-2 text-3xl font-extrabold text-gray-900 uppercase sm:text-4xl">
            Erfarne Advokater
          </h1> */}
                  <div className="z-1 relative mt-0 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
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
                  <div className="z-1 relative mt-8">
                    <p className="text-gray-700">
                      {merOm}
                      <span>
                        <Expandable.Button>{her}</Expandable.Button>
                      </span>
                      :
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {isExpanded ? <ReadMoreBox /> : null}
          </>
        )}
      </Expandable>
    </section>
  )
}
