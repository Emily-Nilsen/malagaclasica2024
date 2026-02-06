import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { MalagaclasicaLogo } from './Logos'
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

export function Header(props) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentPath = router.pathname

  // Define patterns that match dynamic slug pages
  const isDynamicPage =
    /\/artists\/[^\/]+$/.test(currentPath) ||
    /\/program\/[^\/]+$/.test(currentPath)
  const link_home = t('link_home')
  const link_info = t('link_info')
  const link_programa = t('link_programa')
  const link_artistas = t('link_artistas')
  const link_talentos = t('link_talentos')
  const link_contactar = t('link_contactar')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false) // Function to close the mobile menu
  }

  return (
    <header className="relative -mb-3 w-full bg-fuchsia2026 lg:relative lg:px-20">
      <nav>
        <div className="relative z-50 mx-auto flex max-w-7xl justify-between px-6 py-8 lg:px-0">
          <div className="relative z-10 flex items-center gap-16">
            <Link
              className="flex items-center gap-1"
              href="/"
              aria-label="Home"
            >
              <MalagaclasicaLogo className="h-6 w-auto fill-black2026 transition-all sm:h-6 sm:w-auto sm:fill-gray-900 sm:hover:fill-black2026/80" />
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
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-black2026 p-2 hover:bg-pink2026 hover:stroke-fuchsia2026 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
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
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-pink2026 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/">
                              <h4 className="text-lg font-bold capitalize italic">
                                {link_home}
                              </h4>
                            </MobileNavLink>
                            <MobileNavLink href="/about">
                              <h4 className="text-lg font-bold capitalize italic">
                                {link_info}
                              </h4>
                            </MobileNavLink>
                            <MobileNavLink href="/program">
                              <h4 className="text-lg font-bold capitalize italic">
                                {link_programa}
                              </h4>
                            </MobileNavLink>
                            <MobileNavLink href="/artists">
                              <h4 className="text-lg font-bold capitalize italic">
                                {link_artistas}
                              </h4>
                            </MobileNavLink>
                            <MobileNavLink href="/talents">
                              <h4 className="text-lg font-bold capitalize italic">
                                {link_talentos}
                              </h4>
                            </MobileNavLink>
                            <MobileNavLink href="/contact">
                              <h4 className="text-lg font-bold capitalize italic">
                                {link_contactar}
                              </h4>
                            </MobileNavLink>
                            {/* Conditionally render LanguageSwitcher in mobile menu */}
                            {!isDynamicPage && (
                              <div className="pt-6">
                                <LanguageSwitcher
                                  closeMobileMenu={closeMobileMenu}
                                  isMobileMenuOpen={isMobileMenuOpen}
                                />
                              </div>
                            )}
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
              {!isDynamicPage && (
                <div className="hidden lg:block">
                  <LanguageSwitcher closeMobileMenu={closeMobileMenu} />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
