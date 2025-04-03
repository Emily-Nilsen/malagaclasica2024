import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { MalagaclasicaLogo } from './Logos'
import { AyuntamientoLogo } from './Logos'
import { MalagaProculturaLogo } from './Logos'
import { TeatroCervantesLogo } from './Logos'
import { TeatroEchegarayLogo } from './Logos'
import { ReinaNilsenLogo } from './Logos'
import { LaCaixaLogo } from './Logos'
import { HoteldelPintorLogo } from './Logos'
import { MalagaIcon } from './Logos'

const logos = [
  {
    name: 'AyuntamientoLogo',
    logoMark: (
      <AyuntamientoLogo className="w-24 h-auto fill-black2025 sm:w-32" />
    ),
  },
  {
    name: 'MalagaProculturaLogo',
    logoMark: (
      <MalagaProculturaLogo className="w-auto h-3 fill-black2025 sm:h-4" />
    ),
  },
  {
    name: 'TeatroCervantesLogo',
    logoMark: (
      <TeatroCervantesLogo className="w-auto h-7 fill-black2025 stroke-black2025 sm:h-9" />
    ),
  },
  {
    name: 'TeatroEchegarayLogo',
    logoMark: (
      <TeatroEchegarayLogo className="w-auto h-6 fill-black2025 sm:h-8" />
    ),
  },
  {
    name: 'GalamianLogo',
    logoMark: <MalagaIcon className="w-auto h-8 fill-black2025 sm:h-10" />,
  },

  {
    name: 'ReinaNilsenLogo',
    logoMark: <ReinaNilsenLogo className="w-auto h-9 fill-black2025 sm:h-12" />,
  },
  {
    name: 'LaCaixaLogo',
    logoMark: <LaCaixaLogo className="w-auto h-12 fill-black2025 sm:h-16" />,
  },
  {
    name: 'HoteldelPintorLogo',
    logoMark: (
      <HoteldelPintorLogo className="w-auto h-12 fill-black2025 sm:h-16" />
    ),
  },
]

export function LogoCloud() {
  const { locale } = useRouter()
  const { t } = useTranslation('home')
  return (
    <div className="relative z-1 bg-red2025">
      <div className="relative z-20 px-4 py-10 mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-center text-gray-900 uppercase">
          {t('home:cloud_title')}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-6 sm:hidden">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <div>{logo.logoMark}</div>
            </div>
          ))}
        </div>

        <div className="hidden grid-cols-4 gap-3 mt-6 sm:grid">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <a href={logo.link} target="_blank" rel="noreferrer">
                <div>{logo.logoMark}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
