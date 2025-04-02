import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import artists from '../../../assets/artists'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { CameraIcon } from '@heroicons/react/20/solid'

export const getStaticProps = async ({ params }) => {
  const slugify = require('slugify')
  const artistslist = artists.filter(
    (artist) => slugify(artist.slug_name) === params.slug
  )
  return {
    props: {
      artist: artistslist[0],
    },
  }
}

export const getStaticPaths = async () => {
  const slugify = require('slugify')
  const paths = artists.map((artist) => {
    return {
      params: { slug: slugify(artist.slug_name) },
      locale: artist.locale,
    }
  })

  return { paths, fallback: false }
}

artists.map((artist) => ({}))

const Artist = ({ artist }) => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  const back_artists = t('back_artists')
  return (
    <>
      <Header />
      <div className="relative py-16 bg-white sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 w-full opacity-100 right-1/2 rounded-r-3xl bg-lightOrange2025 lg:right-72" />
            </div>
            <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Artist*/}
              <figure>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden aspect-h-10 aspect-w-12 lg:aspect-none"
                >
                  <div className="object-cover object-center overflow-hidden rounded-lg shadow-none">
                    <Image
                      src={artist.image || '/static/cervantes.webp'}
                      alt={artist.name || ''}
                      width={800}
                      height={666}
                      unoptimized
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </motion.div>
                <figcaption className="flex items-center mt-3 text-base text-black2025">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-orange2025"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {artist.name}, {artist.instrument}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h4 className="text-4xl font-extrabold tracking-normal text-black2025 sm:text-5xl">
                {artist.name}
              </h4>
              <h4 className="mt-2 text-lg font-extrabold capitalize text-red2025">
                {artist.instrument}
              </h4>
              <div className="mt-6 space-y-6 text-grey2025">
                <p className="text-lg">{artist.para_1}</p>
                {artist.sentences.map((sentence, i) => (
                  <p key={i} className="text-base leading-7">
                    {sentence}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="mt-10">
                <Link
                  href="/artists"
                  passHref
                  className="text-base font-bold transition duration-200 ease-in-out text-red2025 hover:text-orange2025"
                >
                  {' '}
                  {back_artists} <span aria-hidden="true">&rarr;</span>{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Artist
