import useTranslation from 'next-translate/useTranslation'

export function ContentTalentos() {
  const { t } = useTranslation('talents')
  const subtitle_1 = t('subtitle_1')
  const title_1 = t('title_1')
  const para_1 = t('para_1')
  const para_3 = t('para_3')
  const para_4 = t('para_4')
  const para_5b = t('para_5b')

  return (
    <div className="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 xl:py-36">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h4>
            <span className="block text-base font-semibold tracking-wide text-center uppercase text-pinkText2024">
              {subtitle_1}
            </span>
            <span className="block mt-2 text-5xl italic font-extrabold leading-none tracking-normal text-center text-blueText2024 sm:text-6xl">
              {title_1}
            </span>
          </h4>
          <p className="mt-8 text-xl leading-8 text-gray-500">{para_1}</p>
        </div>
        <div className="mx-auto mt-6 prose prose-lg text-gray-500">
          <p>{para_3}</p>
          <p>{para_4}</p>

          <h2 className="text-blueRevolution">{t('talents:title_2')}</h2>
          <p>{t('talents:para_5b')}</p>
        </div>

        {/* Announce new talent program */}
        {/* <div className="inset-x-0 bottom-0 pb-2 mt-10 sm:mt-16 sm:pb-5">
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg shadow-lg bg-mossCrescendo sm:p-3">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-1 w-0">
                  <span className="flex p-2 rounded-lg bg-coalCrescendo">
                    <SpeakerphoneIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">
                      {t('talents:announcement_short')}
                    </span>
                    <span className="hidden md:inline">
                      {t('talents:announcement_long')}
                    </span>
                  </p>
                </div>
                <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                  <Link href="/talentos/#talentosProgram" passHref>
                    <a className="flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-300 ease-in-out bg-white border border-transparent rounded-md shadow-sm text-coalCrescendo hover:bg-cyan-50">
                      {t('talents:button_program')}
                    </a>
                  </Link>
                </div>
                <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
                  <button
                    type="button"
                    className="flex p-2 -mr-1 rounded-md cursor-default hover:bg-t focus:outline-none focus:ring-0 focus:ring-t"
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon
                      className="w-6 h-6 text-mossCrescendo"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
