import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Features() {
  const { t, lang } = useTranslation('home')
  const feature_info = t('feature_info')
  const feature_programa = t('feature_programa')
  const feature_artistas = t('feature_artistas')
  const feature_talentos = t('feature_talentos')
  const features_title = t('features_title')
  const features_text = t('features_text')

  const features = [
    {
      name: `${feature_info}`,
      href: '/about',
      imageSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/images%20for%202024%20festival/info_bzd046.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${feature_programa}`,
      href: '/program',
      imageSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/images%20for%202024%20festival/programa_srijsh.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${feature_artistas}`,
      href: '/artists',
      imageSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/images%20for%202024%20festival/artistas_d6tq86.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${feature_talentos}`,
      href: 'talents',
      imageSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/images%20for%202024%20festival/talentos_mobile_sdlzwr.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
  ]
  return (
    <div>
      <section>
        {/* Feature section */}
        <div className="bg-pink3_2024/50">
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="max-w-3xl">
              <h4 className="mt-2 text-4xl font-bold tracking-normal text-blueText2024 sm:text-5xl">
                {features_title}
              </h4>
              <p className="mt-4 text-blueGreyDark2024">{features_text}</p>
            </div>

            <div className="mt-11 grid grid-cols-2 items-start gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-8">
              {features.map((feature, i) => (
                <Link key={i} href={feature.href} passHref>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      initialDelay: 0.3,
                      duration: 0.7,
                      delay: i * 0.3,
                      ease: 'easeOut',
                    }}
                    className="group flex cursor-pointer flex-col-reverse"
                  >
                    <motion.div
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.3,
                        type: 'fade',
                      }}
                      className="mt-4"
                    >
                      <h4 className="text-2xl font-bold italic text-pinkText2024 group-hover:text-blueGrey2024">
                        {feature.name}
                      </h4>
                    </motion.div>
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                      <div className="object-cover object-center transition duration-300 ease-in-out group-hover:brightness-125">
                        <Image
                          src={feature.imageSrc}
                          alt={feature.imageAlt}
                          width={2000}
                          height={2000}
                          className="h-full w-full object-cover object-center"
                          unoptimized
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
