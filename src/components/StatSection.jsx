import Image from 'next/image'
import Link from 'next/link'

const stats = [
  {
    id: 1,
    name: 'Advokatguiden',
    value: 'Rating 5.0',
    statUrl:
      'https://www.advokatguiden.no/advokat/13511-christian-flemmen-johansen',
  },
  {
    id: 2,
    name: 'Advokatundesøkelsen 2022: Økonomiske straffesaker - Lovende talenter',
    value: '2. plass ',
    statUrl:
      'https://www.finansavisen.no/nyheter/jus/2022/02/17/7815296/stor-oversikt-over-norges-beste-advokater',
  },
  {
    id: 3,
    name: 'Advokatundesøkelsen 2023: Økonomiske straffesaker',
    value: '7. plass',
    statUrl:
      'https://www.kapital.no/karriere/2023/02/23/7988328/advokatundersokelsen-25-ar-dette-er-norges-beste-advokater?zephr_sso_ott=WZBhBL',
  },
]

export function StatSection() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950/90 py-24 sm:py-32">
      <div className="hidden sm:block">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-45_pcqnr6.webp"
          alt="Advokat Christian Flemmen Johansen"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply"
        />
      </div>
      <div className="sm:hidden">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-45_pcqnr6-Square_sce5my.webp"
          alt="Advokat Christian Flemmen Johansen"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
          aria-hidden="true"
        >
          <div
            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#64748b] to-[#334155] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Annerkjenelse
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Advokat Christian Flemmen Johansen er positivt annerkjent både av
            klienter og i advokatbransjen.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {stats.map((stat) => (
            <Link
              href={stat.statUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={stat.id}
              className="rounded-md p-3 transition delay-75 duration-300 ease-in-out hover:bg-white/5"
            >
              <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                <dt className="text-sm leading-6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            </Link>
          ))}
        </dl>
      </div>
    </div>
  )
}
