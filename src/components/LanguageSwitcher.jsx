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
        className="bg-t relative inline-flex cursor-pointer items-center border-y-0 px-0 text-blueGrey2024 transition duration-300 ease-in-out hover:text-blueGrey2024 focus:z-10 focus:outline-none focus:ring-0 lg:text-blueGrey2024"
        onClick={handleLanguageClick} // Close menu when language is clicked
      >
        <Link locale="en" passHref href={asPath}>
          <p className="hidden cursor-pointer font-medium uppercase sm:text-sm lg:block">
            en
          </p>
          <p className="cursor-pointer sm:text-sm lg:hidden">English</p>
        </Link>
      </button>

      <button>
        <p className="pointer-events-none px-3 text-sm font-normal text-pinkText2024 sm:px-2">
          |
        </p>
      </button>
      <button
        type="button"
        className="bg-t text-blueGrey2024focus:z-10 relative inline-flex items-center border-y-0 px-0 text-blueGrey2024 transition duration-300 ease-in-out hover:text-blueGrey2024 focus:outline-none focus:ring-0 lg:text-blueGrey2024"
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
