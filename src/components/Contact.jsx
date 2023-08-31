import Link from 'next/link'

import { BuildingsIcon } from '@/components/BuildingsIcon'
import { PhoneIcon } from '@/components/PhoneIcon'
import { EnvelopeIcon } from '@/components/EnvelopeIcon'
import useTranslation from 'next-translate/useTranslation'

export function Contact() {
  const { t, lang } = useTranslation('common')
  const kontakt = t('kontakt')

  return (
    <div
      id="kontakt"
      className="mb-4 w-full border-t sm:mb-6 sm:w-fit sm:border-none"
    >
      <h2 className="mt-6 font-display text-3xl font-bold uppercase text-gray-900 sm:mt-0">
        {kontakt}
      </h2>
      <div className="mt-6 sm:mt-10 ">
        <dl className="flex flex-col items-start space-y-6 text-base leading-7 text-gray-600 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Kontor</span>
              <BuildingsIcon
                className="h-7 w-6 fill-gray-700"
                aria-hidden="true"
              />
            </dt>
            <dd>
              Sørkedalsveien 6
              <br />
              0369 Oslo
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telefon</span>
              <PhoneIcon className="h-7 w-6 fill-gray-700" aria-hidden="true" />
            </dt>
            <dd>
              <Link className="hover:text-gray-900" href="tel:+4791548177">
                + 47 91 54 81 77
              </Link>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">E-post</span>
              <EnvelopeIcon
                className="h-7 w-6 fill-gray-700"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
                href="mailto:cfj@flemmenco.no"
              >
                cfj@flemmenco.no
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
