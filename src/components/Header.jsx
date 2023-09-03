import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react' // Import useState

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base uppercase leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header(props) {
  const { t, lang } = useTranslation('common')
  const kontakt = t('kontakt')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false) // Function to close the mobile menu
  }

  return (
    <header className="absolute w-full lg:relative lg:px-20">
      <nav>
        <div className="relative z-50 flex justify-between px-6 py-8 lg:px-0 ">
          <div className="relative z-10 flex items-center gap-16">
            <Link
              className="flex items-center gap-1"
              href="/"
              aria-label="Home"
            >
              <Logo className="h-4 w-36 fill-white sm:h-5 sm:w-72 sm:fill-gray-900" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-400 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#media">Media</MobileNavLink>
                            <MobileNavLink href="#kontakt">
                              {kontakt}
                            </MobileNavLink>
                            {/* Pass the closeMobileMenu function as a prop */}
                            <LanguageSwitcher
                              closeMobileMenu={closeMobileMenu}
                              isMobileMenuOpen={isMobileMenuOpen}
                            />
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="hidden lg:block">
              {/* Pass the closeMobileMenu function as a prop */}
              <LanguageSwitcher closeMobileMenu={closeMobileMenu} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
