import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import events from '../../../assets/events'
import { ByInvitation } from '@/components/ByInvitation'
import { Discount } from '@/components/Discount'
import { PricingRegular } from '@/components/PricingRegular'
import { PricingLastConcert } from '@/components/PricingLastConcert'
import { motion, AnimatePresence } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import { TicketIcon } from '@heroicons/react/24/solid'

export const getStaticProps = async ({ params, locale }) => {
  const slugify = require('slugify')
  const eventslist = events.filter(
    (event) => slugify(event.title) === params.slug && event.locale === locale
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

const Concert = ({ event }) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const buy_tickets = t('buy_tickets')
  const program = t('program')

  const normalizeLines = (value, delimiter) => {
    if (Array.isArray(value)) {
      return value.filter(Boolean).map((entry) => String(entry))
    }
    if (typeof value === 'string') {
      if (!value.includes(delimiter)) {
        return [value]
      }
      return value.split(delimiter).map((entry) => entry.trim())
    }
    return []
  }

  // Helper function to render info with two line breaks between songs.
  const renderInfo = (info) => {
    const songs = normalizeLines(info, ';')
    if (songs.length === 0) return null
    if (songs.length === 1) return songs[0]
    return songs.map((song, idx) => (
      <React.Fragment key={idx}>
        {song}
        {idx < songs.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </React.Fragment>
    ))
  }

  // Helper function to render titles split by ';' onto separate lines.
  const renderTitle = (title) => {
    const parts = normalizeLines(title, ';')
    if (parts.length === 0) return null
    if (parts.length === 1) return parts[0]
    return parts.map((part, idx) => (
      <React.Fragment key={idx}>
        {part}
        {idx < parts.length - 1 && <br />}
      </React.Fragment>
    ))
  }

  const renderArtist = (artist) => {
    if (typeof artist === 'string') {
      const parts = artist.split(' ')
      const lastName = parts.pop()
      const firstNames = parts.join(' ')
      return (
        <>
          {firstNames}{' '}
          {lastName ? <span className="font-normal">{lastName}</span> : null}
        </>
      )
    }
    if (artist && typeof artist === 'object') {
      const name = artist.name ? String(artist.name) : ''
      const info = artist.info ? String(artist.info) : ''
      return (
        <>
          {name}
          {info ? <span className="font-normal"> {info}</span> : null}
        </>
      )
    }
    return null
  }

  // Helper function to render a sentence. If the sentence is all uppercase (and has letters),
  // it is rendered in bold.
  const highlightSentences = new Set([
    'Programme Contemporary Malaga Composers',
    'Programa Compositores malagueños y contemporáneos',
  ])
  const renderSentence = (sentence) => {
    const isHighlight = highlightSentences.has(sentence)
    if (isHighlight) {
      return {
        content: sentence.toUpperCase(),
        isHighlight: true,
      }
    }
    const hasAlpha = /[A-Z]/.test(sentence)
    if (sentence === sentence.toUpperCase() && hasAlpha) {
      return { content: <strong>{sentence}</strong>, isHighlight: false }
    }
    return { content: sentence, isHighlight: false }
  }

  return (
    <>
      <Header />
      <div className="bg-white">
        <section aria-labelledby="details-heading" className="relative">
          {/* AnimatePresence keyed on the slug */}
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.asPath}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, type: 'fade', ease: 'easeIn' }}
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
                className="font-extrabold italic text-fuchsia2026"
              >
                {event.date}
              </h4>
              <h4 className="mt-4 text-4xl font-extrabold tracking-tight text-black2026">
                {renderTitle(event.title)}
              </h4>
              <h4 className="mt-4 font-extrabold text-black2026/80">
                {event.location}
              </h4>

              {/* Act 1 */}
              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-base sm:grid-cols-2">
                {(event.detailsOne || []).map((detail, i) => (
                  <div className="space-y-4" key={i}>
                    {detail.composers ? (
                      detail.composers.map((composerDetail, j) => (
                        <React.Fragment key={j}>
                          <dt className="font-extrabold text-fuchsia2026">
                            {composerDetail.name}
                          </dt>
                          <dd className="mt-2 text-black2026/80">
                            {renderInfo(composerDetail.info)}
                          </dd>
                        </React.Fragment>
                      ))
                    ) : (
                      <>
                        {(detail.composer || []).map((composer, j) => (
                          <dt
                            key={j}
                            className="font-extrabold text-fuchsia2026"
                          >
                            {composer}
                          </dt>
                        ))}
                        <dd className="mt-2 text-black2026/80">
                          {renderInfo(detail.info)}
                        </dd>
                      </>
                    )}
                    {detail.artists &&
                      detail.artists.map((artist, j) => (
                        <dd
                          key={j}
                          className="mt-4 font-semibold text-black2026"
                        >
                          {renderArtist(artist)}
                        </dd>
                      ))}
                  </div>
                ))}
              </dl>

              <hr className="mt-12" />

              {/* Act 2 */}
              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-base sm:grid-cols-2">
                {(event.detailsTwo || []).map((detail, i) => (
                  <div className="space-y-4" key={i}>
                    {detail.composers ? (
                      detail.composers.map((composerDetail, j) => (
                        <React.Fragment key={j}>
                          <dt className="font-bold text-fuchsia2026">
                            {composerDetail.name}
                          </dt>
                          <dd className="mt-2 text-black2026/80">
                            {renderInfo(composerDetail.info)}
                          </dd>
                        </React.Fragment>
                      ))
                    ) : (
                      <>
                        {(detail.composer || []).map((composer, j) => (
                          <dt key={j} className="font-bold text-fuchsia2026">
                            {composer}
                          </dt>
                        ))}
                        <dd className="mt-2 text-black2026/80">
                          {renderInfo(detail.info)}
                        </dd>
                      </>
                    )}
                    {detail.artists &&
                      detail.artists.map((artist, j) => (
                        <dd
                          key={j}
                          className="mt-4 font-semibold text-black2026"
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
              {event.detailsTwo && event.detailsTwo.length > 0 ? (
                <div className="mt-10 border-t border-fuchsia2026/50 py-10" />
              ) : null}

              <div>
                {(event.sentence || []).map((sentence, i) => {
                  const { content, isHighlight } = renderSentence(sentence)
                  if (isHighlight) {
                    return (
                      <p
                        key={i}
                        className="mt-6 text-xl font-extrabold uppercase tracking-tight text-black2026 sm:text-2xl"
                      >
                        {content}
                      </p>
                    )
                  }
                  return (
                    <p key={i} className="mt-4 text-black2026/80">
                      {content}
                    </p>
                  )
                })}

                {/* Render Pricing or Invitation section based on ticket_url */}
                {event.ticket_url === '#' ? (
                  <ByInvitation />
                ) : (
                  <div>
                    <Discount />
                    {event.ticket_url ===
                    'https://teatrocervantes.com/es/genero/musica/xiii-malaga-clasica-el-nuevo-mundo/hollywood-y-broadway-1898' ? (
                      <PricingLastConcert />
                    ) : (
                      <PricingRegular />
                    )}

                    <div className="mt-10 flex">
                      <a
                        href={event.ticket_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-fuchsia2026 px-4 py-2 text-sm font-medium text-black2026 shadow-none transition duration-200 ease-in-out hover:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia2026 focus:ring-offset-2"
                        >
                          <TicketIcon
                            className="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          {buy_tickets}
                        </button>
                      </a>
                      <Link href="/program" passHref>
                        <button className="ml-6 inline-flex justify-center rounded-md border border-transparent bg-grey2026/40 px-4 py-2 text-sm font-medium text-black2026 shadow-none ring-1 ring-grey2026/40 transition duration-200 ease-in-out hover:bg-grey2026/20 hover:text-black2026 hover:ring-grey2026/30 focus:outline-none focus:ring-2 focus:ring-grey2026 focus:ring-offset-2">
                          {program}
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
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
