import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export function ReadMoreBox() {
  const { t, lang } = useTranslation('common')
  const flemmen1 = t('flemmen_1')
  const flemmen2 = t('flemmen_2')
  const flemmen3 = t('flemmen_3')
  const flemmen4 = t('flemmen_4')
  const flemmen5 = t('flemmen_5')
  const flemmen6 = t('flemmen_6')
  const flemmen7 = t('flemmen_7')
  const flemmen8 = t('flemmen_8')

  return (
    <div className="-mt-12 bg-white pb-24 sm:-mt-20 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>{flemmen1}</p>
              <p className="mt-8">{flemmen2}</p>
              <p className="mt-8">{flemmen3}</p>
              <p className="mt-8">{flemmen4}</p>
              <p className="mt-8">{flemmen5}</p>
            </div>
            <div>
              <p>{flemmen6}</p>
              <p className="mt-8">{flemmen7}</p>
              <p className="mt-8">{flemmen8}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
