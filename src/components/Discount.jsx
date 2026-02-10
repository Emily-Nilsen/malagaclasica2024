import useTranslation from 'next-translate/useTranslation'

export function Discount() {
  const { t } = useTranslation('common')
  const discount = t('discount')
  const discount_text = t('discount_text')
  const discount_button = t('with_discounts')

  return (
    <div className="bg-t">
      <div className="relative mx-auto mt-10 max-w-7xl lg:mt-12">
        <div className="max-w-md lg:max-w-5xl">
          <div className="rounded-lg bg-pink2026 px-6 py-8 ring-1 ring-fuchsia2026/30 sm:p-10 lg:flex lg:items-center">
            <div className="flex-1">
              <div>
                <h4 className="inline-flex rounded-full bg-fuchsia2026 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-black2026">
                  {discount}
                </h4>
              </div>
              <div className="mt-4 text-lg text-gray-700">
                <span className="font-bold text-fuchsia2026">
                  <h4 className="inline font-extrabold">10%</h4>
                </span>{' '}
                {discount_text}
              </div>
            </div>
            {/* Uncomment below? */}
            <div className="mt-6 rounded-md shadow lg:ml-10 lg:mt-0 lg:flex-shrink-0">
              <a
                href="https://www.teatrocervantes.com/es/genero/musica/xiv-malaga-clasica-metropolis/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                {discount_button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
