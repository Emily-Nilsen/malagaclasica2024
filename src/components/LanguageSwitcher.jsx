import { useRouter } from 'next/router'
import Link from 'next/link'

export function LanguageSwitcher({ closeMobileMenu, isMobileMenuOpen }) {
  const { locale, asPath } = useRouter()

  const handleLanguageClick = () => {
    closeMobileMenu() // Close the mobile menu
  }

  return (
    <span
      className="relative z-0 inline-flex shadow-none"
      key={isMobileMenuOpen}
    >
      <button
        type="button"
        className="relative inline-flex items-center px-0 transition duration-300 ease-in-out cursor-pointer bg-t border-y-0 text-black2025 hover:text-black2025 focus:z-10 focus:outline-none focus:ring-0 lg:text-black2025"
        onClick={handleLanguageClick} // Close menu when language is clicked
      >
        <Link locale="en" passHref href={asPath}>
          <p className="hidden font-medium uppercase cursor-pointer sm:text-sm lg:block">
            en
          </p>
          <p className="cursor-pointer sm:text-sm lg:hidden">English</p>
        </Link>
      </button>

      <button>
        <p className="px-3 text-sm font-normal pointer-events-none text-black2025/80 sm:px-2">
          |
        </p>
      </button>
      <button
        type="button"
        className="relative inline-flex items-center px-0 transition duration-300 ease-in-out bg-t text-black2025focus:z-10 border-y-0 text-black2025 hover:text-black2025 focus:outline-none focus:ring-0 lg:text-black2025"
        onClick={handleLanguageClick} // Close menu when language is clicked
      >
        <Link locale="es" passHref href={asPath}>
          <p className="hidden font-medium uppercase sm:text-sm lg:block">es</p>
          <p className="sm:text-sm lg:hidden">español</p>
        </Link>
      </button>
    </span>
  )
}
