import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Kompetanser() {
  const { t, lang } = useTranslation('common')
  const kompetanse = t('kompetanse')
  const tvist = t('tvist')
  const strafferett = t('strafferett')
  const arbeidsrett = t('arbeidsrett')
  const kontraktsrett = t('kontraktsrett')
  const familie = t('familie')
  const fastEiendom = t('fastEiendom')
  const okonomiske = t('okonomiske')
  const sikring = t('sikring')

  const features = [
    {
      name: tvist,
      handle: 'tvist-og-prosedyre',
    },
    {
      name: strafferett,
      handle: 'strafferett',
    },
    {
      name: arbeidsrett,
      handle: 'arbeidsrett',
    },
    {
      name: kontraktsrett,
      handle: 'kontraktsrett',
    },
    {
      name: familie,
      handle: 'familie-og-arverett',
    },
    {
      name: fastEiendom,
      handle: 'fast-eiendom',
    },
    {
      name: okonomiske,
      handle: 'økonomiske-straffesaker',
    },
    {
      name: sikring,
      handle: 'sikring-av-verdier-ved-arrest-mv',
    },
  ]

  return (
    <div id="kompetanser" className="mx-auto max-w-7xl bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-0">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-extrabold uppercase text-gray-900 sm:text-4xl">
            {kompetanse}
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none ">
          {features.map((feature, i) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                initialDelay: 0.3,
                duration: 0.7,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
              key={i}
              className="bg-gray-900 px-8 py-6"
            >
              <dt id={feature.handle} className="font-semibold text-white">
                {feature.name}
              </dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}
