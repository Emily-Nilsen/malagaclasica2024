import useTranslation from 'next-translate/useTranslation'

export function MapTalentos() {
  const { t, lang } = useTranslation('talents')
  const map_title = t('map_title')
  return (
    <>
      <div className="bg-white">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
            <div className="text-center">
              <h4 className="mt-0 text-4xl font-extrabold uppercase tracking-tight text-fuchsia2026 sm:text-5xl lg:text-6xl">
                {map_title}
              </h4>
              <p className="mx-auto -mt-7 max-w-xl text-xl text-gray-600 sm:-mt-3">
                {/* {t('talents:map_subtitle')} */}
              </p>
              {/* Address */}
              {/* <div>
                <dd className="mt-5 text-blueRevolution">
                  <p>{t('talents:map_address_top')}</p>
                  <p>{t('talents:map_address_bottom')}</p>
                </dd>
              </div> */}
            </div>
          </div>
        </div>
        <div className="px-4 pb-12 pt-6">
          <div className="relative mx-auto w-full max-w-[375px] py-12 md:max-w-[744px] lg:max-w-[1440px]">
            <div className="relative w-full overflow-hidden rounded-lg">
              <iframe
                className="relative"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.952007840044!2d-1.8820857874480295!3d37.29627123946128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd652b2506cd8fa9%3A0x46ebebe50fa3e44b!2sTeatro%20Echegaray!5e0!3m2!1sen!2sno!4v1681542955717!5m2!1sen!2sno"
                width="100%"
                height={600}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <style>
          {`
    @media (min-width:1024px) {
        .loc{
            left: 200px;
        }
    }
    @media (max-width:380px) {
        .set{
            width: 300px;
            left: 12px;
        }
    }
    `}
        </style>
      </div>
    </>
  )
}
