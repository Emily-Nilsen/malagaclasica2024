import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function Features() {
  const { t } = useTranslation('home')
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
      imageSrc: '/media/info_bzd046.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${feature_programa}`,
      href: '/program',
      imageSrc: '/media/programa_srijsh.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${feature_artistas}`,
      href: '/artists',
      imageSrc: '/media/artistas_d6tq86.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${feature_talentos}`,
      href: 'talents',
      imageSrc: '/media/talentos_mobile_sdlzwr.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
  ]
  return (
    <div>
      <section>
        {/* Feature section */}
        <div className="bg-white">
          <div className="max-w-2xl px-4 pt-10 pb-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="max-w-3xl">
              <h4 className="mt-2 text-4xl font-extrabold tracking-tight uppercase text-black2025 sm:text-5xl">
                {features_title}
              </h4>
              <p className="mt-4 text-black2025">{features_text}</p>
            </div>

            <div className="grid items-start grid-cols-2 mt-11 gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-8">
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
                    className="flex flex-col-reverse cursor-pointer group"
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
                      <h4 className="text-2xl font-extrabold text-black2025 group-hover:text-red2025">
                        {feature.name}
                      </h4>
                    </motion.div>
                    <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1">
                      <div className="object-cover object-center transition duration-300 ease-in-out group-hover:brightness-125">
                        <Image
                          src={feature.imageSrc}
                          alt={feature.imageAlt}
                          width={2000}
                          height={2000}
                          className="object-cover object-center w-full h-full"
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
