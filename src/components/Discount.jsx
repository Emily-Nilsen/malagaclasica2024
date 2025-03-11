import { TicketIcon } from '@heroicons/react/outline'
import useTranslation from 'next-translate/useTranslation'

export function Discount() {
  const { t, lang } = useTranslation('common')
  const discount = t('discount')
  const discount_text = t('discount_text')

  return (
    <div className="bg-t">
      <div className="relative mx-auto mt-10 max-w-7xl lg:mt-12">
        <div className="max-w-md lg:max-w-5xl">
          <div className="px-6 py-8 rounded-lg bg-blue2024/10 ring-1 ring-blue2024/30 sm:p-10 lg:flex lg:items-center">
            <div className="flex-1">
              <div>
                <h4 className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide uppercase rounded-full bg-blue2024/30 text-blueText2024">
                  {discount}
                </h4>
              </div>
              <div className="mt-4 text-lg text-gray-700">
                <span className="font-semibold text-pinkText2024">
                  <h4 className="inline font-bold">10%</h4>
                </span>{' '}
                {discount_text}
              </div>
            </div>
            {/* Uncomment below? */}
            <div className="mt-6 rounded-md shadow lg:ml-10 lg:mt-0 lg:flex-shrink-0">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50"
              >
                Compra entradas con descuento
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
