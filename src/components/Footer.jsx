import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { Contact } from '@/components/Contact'
import useTranslation from 'next-translate/useTranslation'

export function Footer() {
  const { t, lang } = useTranslation('common')
  const slogan = t('slogan')

  return (
    <footer className="bg-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo className="h-5 w-60 flex-none fill-gray-900" />
            </div>
            {/* <p className="mt-1 text-sm">{slogan}</p> */}
          </div>

          <Contact />
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} Flemmen & Co Advokatfirma
          </p>
        </div>
      </Container>
    </footer>
  )
}
