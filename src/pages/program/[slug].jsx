import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import events from '../../../assets/events'
import { Discount } from '@/components/Discount'
import { PricingRegular } from '@/components/PricingRegular'
import { PricingLastConcert } from '@/components/PricingLastConcert'
import { motion, AnimatePresence } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { TicketIcon } from '@heroicons/react/24/solid'

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

events.map(() => ({}))

const Concert = ({ event }) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const buy_tickets = t('buy_tickets')
  const program = t('program')

  return (
    <>
      <Header />
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
              className="overflow-hidden aspect-h-2 aspect-w-3 sm:aspect-w-5 2xl:aspect-none xl:pr-16 2xl:absolute 2xl:h-full 2xl:w-1/2 2xl:pr-4"
            >
              <div className="object-cover object-center w-full h-full 2xl:h-full 2xl:w-full">
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

          <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 sm:pb-32 2xl:grid 2xl:max-w-7xl 2xl:grid-cols-2 2xl:gap-x-8 2xl:px-8 2xl:pt-32">
            <div className="2xl:col-start-2">
              <h4
                id="details-heading"
                className="italic font-bold text-pinkText2024"
              >
                {event.date}
              </h4>
              <h4 className="mt-4 text-4xl font-extrabold tracking-normal text-blueGreyDark2024">
                {event.title}
              </h4>
              <h4 className="mt-4 italic font-bold text-blueText2024">
                {event.location}
              </h4>
              {/* Act 1 */}
              <dl className="grid grid-cols-1 mt-10 text-base gap-x-8 gap-y-10 sm:grid-cols-2">
                {event.detailsOne.map((detail, i) => (
                  <div className="" key={i}>
                    {/* Check if we have a composers array */}
                    {detail.composers ? (
                      detail.composers.map((composerDetail, j) => (
                        <React.Fragment key={j}>
                          <dt className="font-semibold text-gray-800">
                            {composerDetail.name}
                          </dt>
                          <dd className="mt-2 text-gray-500">
                            {composerDetail.info}
                          </dd>
                        </React.Fragment>
                      ))
                    ) : (
                      <>
                        {detail.composer.map((composer, j) => (
                          <dt key={j} className="font-semibold text-gray-800">
                            {composer}
                          </dt>
                        ))}
                        <dd className="mt-2 text-gray-500">{detail.info}</dd>
                      </>
                    )}
                    {detail.artists &&
                      detail.artists.map((artist, j) => (
                        <dd
                          key={j}
                          className="mt-4 font-semibold text-gray-600"
                        >
                          {artist.split(' ').slice(0, -1).join(' ')}{' '}
                          <span className="font-normal">
                            {artist.split(' ').pop()}
                          </span>
                        </dd>
                      ))}
                  </div>
                ))}
              </dl>
              <hr className="mt-12" />
              {/* Act 2 */}
              <dl className="grid grid-cols-1 mt-10 text-base gap-x-8 gap-y-10 sm:grid-cols-2">
                {event.detailsTwo.map((detail, i) => (
                  <div key={i}>
                    {/* Check if we have a composers array */}
                    {detail.composers ? (
                      detail.composers.map((composerDetail, j) => (
                        <React.Fragment key={j}>
                          <dt className="font-semibold text-gray-800">
                            {composerDetail.name}
                          </dt>
                          <dd className="mt-2 text-gray-500">
                            {composerDetail.info}
                          </dd>
                        </React.Fragment>
                      ))
                    ) : (
                      <>
                        {detail.composer.map((composer, j) => (
                          <dt key={j} className="font-semibold text-gray-800">
                            {composer}
                          </dt>
                        ))}
                        <dd className="mt-2 text-gray-500">{detail.info}</dd>
                      </>
                    )}
                    {detail.artists &&
                      detail.artists.map((artist, j) => (
                        <dd
                          key={j}
                          className="mt-4 font-semibold text-gray-600"
                        >
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
                <div className="py-10 mt-10 border-t border-blue2024/50" />
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

                {/* <Discount /> */}
                <div className="flex mt-10">
                  <a href={event.ticket_url} target="_blank" rel="noreferrer">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-blueText2024 hover:bg-pinkText2024 focus:outline-none focus:ring-2 focus:ring-pink2024 focus:ring-offset-2"
                    >
                      <TicketIcon
                        className="w-5 h-5 mr-2 -ml-1"
                        aria-hidden="true"
                      />
                      {buy_tickets}
                    </button>
                  </a>
                  <Link href="/program" passHref>
                    <button className="inline-flex justify-center px-4 py-2 ml-6 text-sm font-medium transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-blue2024/30 text-blueGrey2024 ring-1 ring-blue2024/20 hover:bg-blue2024/20 hover:text-blueGreyDark2024 hover:ring-blue2024/30 focus:outline-none focus:ring-2 focus:ring-blueGrey2024 focus:ring-offset-2">
                      {program}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Concert
