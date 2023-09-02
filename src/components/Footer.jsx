import Link from 'next/link'
import { motion } from 'framer-motion'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import useTranslation from 'next-translate/useTranslation'

export function Footer() {
  const { t, lang } = useTranslation('common')
  const advokatfirma = t('advokatfirma')
  const rettigheter = t('rettigheter')
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/">
            <Logo className="h-5 w-60 flex-none fill-gray-900" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
            className="text-center text-xs leading-5 text-gray-500"
          >
            &copy; {new Date().getFullYear()} Flemmen & Co {advokatfirma} AS.{' '}
            {rettigheter}.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
