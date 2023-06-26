import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export function ReadMoreBox() {
  const { t, lang } = useTranslation('common')
  const aboutTitle = t('about-title')
  const about5 = t('about-5')
  const about6 = t('about-6')
  const about7 = t('about-7')

  return (
    <div className="bg-slate-50 pb-24 pt-6 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {aboutTitle}
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>{about5}</p>
            </div>
            <div>
              <p>{about6}</p>
              <p className="mt-8">{about7}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
