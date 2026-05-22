import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

export function ProgramTalentos() {
  const { t } = useTranslation('talents')
  const kicker = t('program.kicker')
  const heading = t('program.heading')
  const when = t('program.when')
  const venue = t('program.venue')
  const tickets = t('program.tickets')
  const ticketsLink = t('program.tickets_link')
  const groups = t('program.groups', {}, { returnObjects: true }) || []

  return (
    <div
      id="program"
      className="overflow-hidden bg-pink2026 px-4 py-16 sm:px-6 lg:px-8 xl:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-prose text-center">
          <h4>
            <span className="block text-base font-extrabold uppercase tracking-normal text-fuchsia2026">
              {kicker}
            </span>
            <span className="mt-2 block text-4xl font-extrabold uppercase leading-none tracking-tight text-black2026 sm:text-5xl lg:text-6xl">
              {heading}
            </span>
          </h4>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-black2026 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2 text-base font-semibold sm:text-lg">
              <CalendarIcon
                className="h-5 w-5 text-fuchsia2026"
                aria-hidden="true"
              />
              {when}
            </span>
            <span className="hidden text-fuchsia2026 sm:inline">·</span>
            <span className="inline-flex items-center gap-2 text-base font-semibold sm:text-lg">
              <MapPinIcon
                className="h-5 w-5 text-fuchsia2026"
                aria-hidden="true"
              />
              {venue}
            </span>
          </div>
          <p className="mt-6 text-sm leading-6 text-black2026/80">
            {tickets}{' '}
            <a
              href="https://www.teatrocervantes.es/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-fuchsia2026 underline-offset-2 hover:underline"
            >
              {ticketsLink}
            </a>
            .
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2"
        >
          {groups.map((group, idx) => (
            <motion.li
              key={group.name}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: 'easeOut',
              }}
              className="flex flex-col"
            >
              <div className="relative aspect-[1/1] overflow-hidden rounded-2xl bg-greyMedium2026">
                <Image
                  src={group.image}
                  alt={group.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <div className="mt-5">
                <h5 className="text-2xl font-extrabold uppercase tracking-tight text-black2026 sm:text-3xl">
                  {group.name}
                </h5>
                <ul role="list" className="mt-3 space-y-1.5">
                  {group.pieces.map((piece) => (
                    <li
                      key={`${piece.composer}-${piece.title}`}
                      className="text-base text-black2026 sm:text-lg"
                    >
                      <span className="font-semibold text-fuchsia2026">
                        {piece.composer}.
                      </span>{' '}
                      <span className="italic">{piece.title}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  role="list"
                  className="mt-4 space-y-0.5 text-sm leading-6 text-black2026/85 sm:text-base"
                >
                  {group.performers.map((p) => (
                    <li key={p.name}>
                      <span>{p.name}</span>
                      <span className="ml-2 italic text-black2026/60">
                        {p.instrument}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
