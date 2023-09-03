import { motion } from 'framer-motion'

export function TextBox1() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          {/* change back to text-gray-600 */}
          <p className="text-base font-semibold leading-7 text-gray-900">
            Siden er under oppdatering.
          </p>
          {/* <h1 className="mt-2 text-3xl font-extrabold text-gray-900 uppercase sm:text-4xl">
            Erfarne Advokater
          </h1> */}
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
              >
                Advokatfirmaet Flemmen & Co ble etablert av advokat Christian
                Flemmen Johansen og hans team gjennom flere år, alle fra Elden
                Advokatfirma.
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="mt-8"
              >
                Christian Flemmen Johansen har vært advokat og senere partner i
                Elden Advokatfirma AS i 16 år. Flemmen & Co er derfor en
                videreføring av eksisterende advokatpraksis, i samarbeid med
                dyktige advokater, revisorer og andre samarbeidspartnere.
              </motion.p>
            </div>
            <div>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
              >
                Flemmen & Co bistår jevnlig mindre og større aktører med
                rådgivning, tvisteløsning, forhandlinger og prosessoppdrag for
                ulike domstoler, se mer om våre kompetanseområder under.
              </motion.p>
            </div>
          </div>
          {/* <div className="flex mt-10">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}
