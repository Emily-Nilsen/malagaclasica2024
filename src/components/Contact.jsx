import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

export function Contact() {
  return (
    <div className="mb-4 sm:mb-6">
      <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900">
        Kontakt
      </h2>
      <div className="mt-10 ">
        <dl className="flex flex-col items-start space-y-6 text-base leading-7 text-gray-600 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
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
              <span className="sr-only">Telephone</span>
              <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
            </dt>
            <dd>
              <a className="hover:text-gray-900" href="tel:+4791548177">
                + 47 91 54 81 77
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <EnvelopeIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a className="hover:text-gray-900" href="mailto:cfj@elden.no">
                cfj@elden.no
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
