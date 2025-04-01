import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  const { t, lang } = useTranslation('common')
  const link_home = t('link_home')
  const link_info = t('link_info')
  const link_programa = t('link_programa')
  const link_artistas = t('link_artistas')
  const link_talentos = t('link_talentos')
  const link_contactar = t('link_contactar')

  return [
    [`${link_home}`, '/'],
    [`${link_info}`, '/about'],
    [`${link_programa}`, '/program'],
    [`${link_artistas}`, '/artists'],
    [`${link_talentos}`, '/talents'],
    [`${link_contactar}`, '/contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -mx-3 -my-2 rounded-md px-3 py-2 font-bold capitalize italic text-black2025 transition-colors delay-150 hover:text-black2025 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-md bg-white/50"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">
        <h4 className="inline">{label}</h4>
      </span>
    </Link>
  ))
}
