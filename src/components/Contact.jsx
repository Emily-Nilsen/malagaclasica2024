import Link from 'next/link'

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import useTranslation from 'next-translate/useTranslation'

export function Contact() {
  const { t, lang } = useTranslation('common')
  const kontakt = t('kontakt')

  return (
    <div
      id="kontakt"
      className="mb-4 w-full border-t sm:mb-6 sm:w-fit sm:border-none"
    >
      <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:mt-0">
        {kontakt}
      </h2>
      <div className="mt-6 sm:mt-10 ">
        <dl className="flex flex-col items-start space-y-6 text-base leading-7 text-gray-600 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Kontor</span>
              <BuildingOffice2Icon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              Sankt Olavs Gate 25
              <br />
              0166 Oslo
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telefon</span>
              <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
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
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
                href="mailto:cfj@elden.no"
              >
                cfj@elden.no
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
