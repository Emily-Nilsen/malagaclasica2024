import Image from 'next/image'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import { Expandable } from '@/components/Expandable'
import { ReadMoreBox } from '@/components/ReadMoreBox'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  useMotionValue,
} from 'framer-motion'

const fields = [
  {
    name: 1,
    description:
      'Advokat Flemmen Johansen er juridisk fagforfatter og generalist med omfattende prosedyreerfaring fra et bredt spekter av saker, med særlig kompetanse innen privatrett, tvisteløsning, forhandlinger og strafferett.',
  },
  {
    name: 2,
    description:
      'Flemmen Johansen bistår jevnlig flere større næringsaktører innen eiendom, arbeidsrett, selskapsrett og kontraktsrett. Han har også håndtert et stort antall saker innenfor feltene arv og skifte.',
  },
  {
    name: 3,
    description:
      'Videre har han betydelig erfaring og ekspertise innen strafferett, hvor han jevnlig er involvert i større- og mindre straffesaker. Flemmen Johansen har i flere år har han blitt kåret til en av Norge beste yngre advokater i Finansavisens årlige advokatundersøkelse innen fagfeltet økonomisk kriminalitet – og ble i 2017 trukket frem som et av årets advokattalenter, i 2020 ble han utropt til «…det mest lovende talentet blant hvitsnippadvokatene» og i 2023 var han oppført på en av kåringens hovedlister, blant Norges beste advokater innenfor fagfeltet Økonomiske straffesaker.',
  },
]

export function Fields() {
  return (
    <section>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <div
              id="fagfelt"
              className="overflow-hidden bg-gradient-to-t from-slate-50 py-16 sm:py-32"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <h2 className="text-base uppercase leading-7 text-gray-600">
                        Advokat
                      </h2>
                      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Christian Flemmen Johansen
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Advokat Christian Flemmen Johansen har vært ansatt og
                        senere partner i Elden Advokatfirma AS i over 16 år. Han
                        har i flere år blitt kåret til en av Norges fremste
                        advokater i Finansavisens årlige advokatundersøkelse -
                        og ble i 2020 utropt til «(…) det mest lovende talentet
                        blant hvitsnippadvokatene», i 2023 var han oppført på en
                        av kåringens hovedlister, blant Norges beste advokater.
                      </p>
                      <dl className="mt-4 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                        {fields.map((field) => (
                          <div key={field.name} className="relative pl-0">
                            <dd className="inline">{field.description}</dd>
                          </div>
                        ))}
                      </dl>
                      <Expandable.Button>Les mer</Expandable.Button>
                    </div>
                  </div>
                  <div className="flex items-start justify-end lg:order-first">
                    <div className="relative sm:hidden">
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/Oslo_Tinghus_feudkq.webp"
                        alt="Advokat Christian Flemmen Johansen"
                        className="w-[24rem] max-w-none rounded-none ring-1 ring-gray-400/10"
                        width={1280}
                        height={1280}
                      />
                      <div className="flex justify-end">
                        {/* <figcaption className="flex mt-4 text-sm leading-6 text-right text-gray-500 gap-x-2">
                          <InformationCircleIcon
                            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                            aria-hidden="true"
                          />
                          Advokat Christian Flemmen Johansen
                        </figcaption> */}
                      </div>
                    </div>
                    <div className="relative hidden sm:block ">
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/Oslo_Tinghus_feudkq.webp"
                        alt="Advokat Christian Flemmen Johansen"
                        className="w-[57rem] max-w-none rounded-none ring-1 ring-gray-400/10"
                        width={1280}
                        height={1280}
                      />
                      <div className="flex justify-end">
                        {/* <figcaption className="flex mt-4 text-sm leading-6 text-right text-gray-500 gap-x-2">
                          <InformationCircleIcon
                            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                            aria-hidden="true"
                          />
                          Advokat Christian Flemmen Johansen
                        </figcaption> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isExpanded ? <ReadMoreBox /> : null}
          </>
        )}
      </Expandable>
    </section>
  )
}
