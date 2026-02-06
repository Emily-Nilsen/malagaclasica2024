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
      <AyuntamientoLogo className="h-auto w-24 fill-black2026 sm:w-32" />
    ),
  },
  {
    name: 'MalagaProculturaLogo',
    logoMark: (
      <MalagaProculturaLogo className="h-3 w-auto fill-black2026 sm:h-4" />
    ),
  },
  {
    name: 'TeatroCervantesLogo',
    logoMark: (
      <TeatroCervantesLogo className="h-7 w-auto fill-black2026 stroke-black2026 sm:h-9" />
    ),
  },
  {
    name: 'TeatroEchegarayLogo',
    logoMark: (
      <TeatroEchegarayLogo className="h-6 w-auto fill-black2026 sm:h-8" />
    ),
  },
  {
    name: 'GalamianLogo',
    logoMark: <MalagaIcon className="h-8 w-auto fill-black2026 sm:h-10" />,
  },

  {
    name: 'ReinaNilsenLogo',
    logoMark: <ReinaNilsenLogo className="h-9 w-auto fill-black2026 sm:h-12" />,
  },
  {
    name: 'LaCaixaLogo',
    logoMark: <LaCaixaLogo className="h-12 w-auto fill-black2026 sm:h-16" />,
  },
  {
    name: 'HoteldelPintorLogo',
    logoMark: (
      <HoteldelPintorLogo className="h-12 w-auto fill-black2026 sm:h-16" />
    ),
  },
]

export function LogoCloud() {
  const { locale } = useRouter()
  const { t } = useTranslation('home')
  return (
    <div className="z-1 relative bg-fuchsia2026">
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-900">
          {t('home:cloud_title')}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <div>{logo.logoMark}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 hidden grid-cols-4 gap-3 sm:grid">
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
