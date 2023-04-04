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
      'Han har blitt kåret til en av Norges fremste advokater innen strafferett flere år på rad i Finansavisens årlige advokatundersøkelse. Flemmen Johansen og hans team bistår deg når du trenger det, og yter nødvendig bistand i krevende saker og prosesser.',
  },
  {
    name: 2,
    description:
      'Flemmen Johansen har spesialisert seg innen sivilrett og bistår flere større næringsaktører innenfor eiendom, uteliv, butikkdrift, salg og produksjon. Han arbeider også med arbeidsrett, skifte, arv og selskapsrett. Se videoen om Advokat Christian Flemmen Johansen for mer informasjon om hans kompetanse og erfaring.',
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
              className="overflow-hidden bg-gradient-to-t from-slate-50 pb-16 pt-24 sm:py-32"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <h2 className="text-base uppercase leading-7 text-gray-600">
                        Advokat Christian Flemmen Johansen
                      </h2>
                      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        En av Norges fremste advokater
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Christian Flemmen Johansen, partner i Elden
                        Advokatfirma, er en anerkjent advokat med omfattende
                        erfaring innen et bredt spekter av rettsområder.
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
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF_on_phone_fcjvpf.webp"
                        alt="Advokat Christian Flemmen Johansen"
                        className="w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                        width={1130}
                        height={1267}
                      />
                      <div className="flex justify-end">
                        <figcaption className="mt-4 flex gap-x-2 text-right text-sm leading-6 text-gray-500">
                          <InformationCircleIcon
                            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                            aria-hidden="true"
                          />
                          Advokat Christian Flemmen Johansen
                        </figcaption>
                      </div>
                    </div>
                    <div className="relative hidden sm:block ">
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-16_ssli8k.webp"
                        alt="Advokat Christian Flemmen Johansen"
                        className="w-[57rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                        width={2432}
                        height={1442}
                      />
                      <div className="flex justify-end">
                        <figcaption className="mt-4 flex gap-x-2 text-right text-sm leading-6 text-gray-500">
                          <InformationCircleIcon
                            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                            aria-hidden="true"
                          />
                          Advokat Christian Flemmen Johansen
                        </figcaption>
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
