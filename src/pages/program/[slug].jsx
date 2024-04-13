import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import events from '../../../assets/events'
import { Discount } from '@/components/Discount'
import { PricingRegular } from '@/components/PricingRegular'
import { PricingLastConcert } from '@/components/PricingLastConcert'
import { motion, AnimatePresence } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { ExternalLinkIcon, TicketIcon } from '@heroicons/react/24/solid'

export const getStaticProps = async ({ params }) => {
  const slugify = require('slugify')
  const eventslist = events.filter(
    (event) => slugify(event.title) === params.slug
  )
  return {
    props: {
      event: eventslist[0],
    },
  }
}

export const getStaticPaths = async () => {
  const slugify = require('slugify')
  const paths = events.map((event) => {
    return {
      params: { slug: slugify(event.title) },
      locale: event.locale,
    }
  })

  return { paths, fallback: false }
}

events.map((event) => ({}))

const Concert = ({ event }) => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  const buy_tickets = t('buy_tickets')
  const program = t('program')

  return (
    <div className="bg-white">
      <section aria-labelledby="details-heading" className="relative">
        {/* Need to use AnimatePresence on a slug */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.asPath}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 2xl:aspect-none xl:pr-16 2xl:absolute 2xl:h-full 2xl:w-1/2 2xl:pr-4"
          >
            <div className="h-full w-full object-cover object-center 2xl:h-full 2xl:w-full">
              <Image
                src={event.image}
                alt={event.title}
                unoptimized
                width={500}
                height={750}
                className={`h-full w-full object-cover ${event.image_position}`}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 2xl:grid 2xl:max-w-7xl 2xl:grid-cols-2 2xl:gap-x-8 2xl:px-8 2xl:pt-32">
          <div className="2xl:col-start-2">
            <h4
              id="details-heading"
              className="font-bold italic text-pinkText2024"
            >
              {event.date}
            </h4>
            <h4 className="mt-4 text-4xl font-extrabold tracking-normal text-blueGreyDark2024">
              {event.title}
            </h4>
            <h4 className="mt-4 font-bold italic text-blueText2024">
              {event.location}
            </h4>
            {/* Act 1 */}
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-base sm:grid-cols-2">
              {event.detailsOne.map((detail, i) => (
                <div key={i}>
                  {detail.composer.map((composer, i) => (
                    <dt key={i} className="font-semibold text-gray-800">
                      {composer}
                    </dt>
                  ))}

                  <dd className="mt-2 text-gray-500">{detail.info}</dd>
                  {detail.artists
                    ? detail.artists.map((artist, i) => (
                        <dd
                          key={i}
                          className="mt-4 font-semibold text-gray-600"
                        >
                          {artist.split(' ').slice(0, -1).join(' ')}{' '}
                          <span className="font-normal">
                            {artist.split(' ').pop()}
                          </span>
                        </dd>
                      ))
                    : null}
                </div>
              ))}
            </dl>
            <hr className="mt-12" />
            {/* Act 2 */}
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-base sm:grid-cols-2">
              {event.detailsTwo &&
                event.detailsTwo.map((detail, i) => (
                  <div key={i}>
                    {detail.composer.map((composer, i) => (
                      <dt key={i} className="font-semibold text-gray-800">
                        {composer}
                      </dt>
                    ))}

                    <dd className="mt-2 text-gray-500">{detail.info}</dd>
                    {detail.songs ? <div className="py-2" /> : null}
                    {detail.songs &&
                      detail.songs.map((song, i) => (
                        <figure
                          key={i}
                          className="border-l border-pinkText2024/50 pl-9"
                        >
                          <blockquote className="font-medium italic text-blueText2024">
                            <p className="py-2">{song}</p>
                          </blockquote>
                        </figure>
                      ))}
                    {detail.artists.map((artist, i) => (
                      <dd key={i} className="mt-4 font-semibold text-gray-700">
                        {artist.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="font-normal">
                          {artist.split(' ').pop()}
                        </span>
                      </dd>
                    ))}
                  </div>
                ))}
            </dl>
            {event.detailsTwo ? (
              <div className="mt-10 border-t border-blue2024/50 py-10" />
            ) : null}
            <div>
              {event.sentence.map((sentence, i) => (
                <p key={i} className="mt-4 text-gray-500">
                  {sentence}
                </p>
              ))}
              {/* Dynamic rendering of Pricing component based on the event's ticket URL */}
              {event.ticket_url ===
              'https://www.teatrocervantes.com/es/genero/musica/xii-malaga-clasica-resonancias-del-espiritu/alfa-omega-1613' ? (
                <PricingLastConcert />
              ) : (
                <PricingRegular />
              )}

              <Discount />
              <div className="mt-10 flex">
                <a href={event.ticket_url} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-blueText2024 px-4 py-2 text-sm font-medium text-white shadow-none transition duration-200 ease-in-out hover:bg-pinkText2024 focus:outline-none focus:ring-2 focus:ring-pink2024 focus:ring-offset-2"
                  >
                    <TicketIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    {buy_tickets}
                  </button>
                </a>
                <Link href="/program" passHref>
                  <button className="ml-6 inline-flex justify-center rounded-md border border-transparent bg-blue2024/30 px-4 py-2 text-sm font-medium text-blueGrey2024 shadow-none ring-1 ring-blue2024/20 transition duration-200 ease-in-out hover:bg-blue2024/20 hover:text-blueGreyDark2024 hover:ring-blue2024/30 focus:outline-none focus:ring-2 focus:ring-blueGrey2024 focus:ring-offset-2">
                    {program}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Concert
