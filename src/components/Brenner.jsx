import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/20/solid'
import useTranslation from 'next-translate/useTranslation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Brenner() {
  const { t, lang } = useTranslation('common')
  const kontakt = t('kontakt')
  const hasterDet = t('haster-det')
  const hvisIkke = t('hvis-ikke')

  return (
    <Menu as="div" className="inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-fit justify-center gap-x-1.5 rounded-none bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-none ring-1 ring-inset  ring-slate-800 transition-all duration-300 ease-in-out hover:bg-gray-950">
          {kontakt} <span aria-hidden="true">→</span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="w-fitnone absolute z-20 mt-2 bg-yellow-50 p-4">
          <div className="flex w-full">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                {hasterDet}{' '}
                <span>
                  Ring{' '}
                  <Link
                    className="font-semibold underline transition duration-300 ease-in-out hover:text-yellow-900"
                    href="tel:91548177"
                  >
                    915 48 177
                  </Link>
                </span>
              </h3>
              <div className="group mt-2 text-sm text-yellow-700 ">
                <p>
                  {hvisIkke}{' '}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold transition duration-300 ease-in-out hover:text-yellow-900"
                    href="mailto:cfj@elden.no"
                  >
                    cfj@elden.no
                  </Link>
                  .{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Menu>
  )
}
