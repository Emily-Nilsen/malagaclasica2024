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
      description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    },
    {
      name: strafferett,
      description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    },
    {
      name: arbeidsrett,
      description:
        'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
    },
    {
      name: kontraktsrett,
      description:
        'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
    },
    {
      name: familie,
      description:
        'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
    },
    {
      name: fastEiendom,
      description:
        'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
    },
    {
      name: okonomiske,
      description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    },
    {
      name: sikring,
      description:
        'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
    },
  ]

  return (
    <div className="mx-auto max-w-7xl bg-white py-24 sm:py-32">
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
              <dt className="font-semibold text-white">{feature.name}</dt>
              {/* <dd className="mt-1 text-gray-200">{feature.description}</dd> */}
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}
