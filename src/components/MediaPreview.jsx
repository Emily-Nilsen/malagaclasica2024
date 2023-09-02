import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { DNLogo } from '@/components/icons/DNLogo'
import { AdvokatbladetLogo } from '@/components/icons/AdvokatbladetLogo'
import { FinansavisenLogo } from './icons/FinansavisenLogo'
import { ForsvarsadvokatLogo } from './icons/ForsvarsadvokatLogo'

const posts = [
  {
    id: 4,
    title: 'Partner forlater Elden etter 16 år – starter for seg selv',
    href: 'https://www.advokatbladet.no/elden-oppstart-av-advokatkontor-partner/partner-forlater-elden-etter-16-ar-starter-for-seg-selv/199683',
    description:
      'Tanken har vært der lenge, sier Christian Flemmen Johansen, som har etablert Advokatfirmaet Flemmen & CO.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Blog/article_3_tjgnwg.webp',
    date: '01. sep, 2023',
    datetime: '2023-09-01',
    author: {
      name: 'Tinius Svendsen',
      company: 'Advokatbladet',
      imageLogo: <AdvokatbladetLogo className="h-10 w-10" />,
    },
  },
  {
    id: 3,
    title: 'Forlater Elden med alle egne klienter',
    href: 'https://www.finansavisen.no/jus/2023/08/31/8032852/flemmen-forlater-elden-med-alle-egne-klienter?zephr_sso_ott=hTqGBr',
    description:
      'Christian Flemmen Johansen (39) er en av de mest innbringende partnerne i Advokatfirmaet Elden.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Blog/article_2_non0cm.webp',
    date: '31. aug, 2023',
    datetime: '2023-08-31',
    author: {
      name: 'Oliver Orskaug',
      company: 'Finansavisen',
      imageLogo: <FinansavisenLogo className="h-10 w-10" />,
    },
  },
  {
    id: 2,
    title: 'Toppadvokat forlater Elden',
    href: 'https://www.dn.no/jus/christian-flemmen-johansen/advokatfirmaet-elden/elden/toppadvokat-forlater-elden/2-1-1508933',
    description:
      'Partner Christian Flemmen Johansen starter eget firma etter 16 år i advokatfirmaet Elden.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Blog/article_1_eilcvd.webp',
    date: '30. aug, 2023',
    datetime: '2023-08-30',
    author: {
      name: 'Agnete Klevstrand',
      company: 'Dagens Næringsliv',
      imageLogo: <DNLogo className="h-10 w-10" />,
    },
  },
  {
    id: 1,
    title: 'forsvarsadvokat.no',
    href: 'https://forsvarsadvokat.no/',
    description: 'Medieomtale av advokat Christian Flemmen Johansen.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Blog/article_0_d3xgmw.webp',
    date: 'Fra 2007',
    datetime: '2007-09-01',
    author: {
      name: '',
      company: 'Forsvarsadvokat',
      imageLogo: <ForsvarsadvokatLogo className="h-10 w-10" />,
    },
  },
]

export function MediaPreview() {
  return (
    <section id="media">
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-extrabold uppercase tracking-normal text-white sm:text-4xl">
              Flemmen & Co i media
            </h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-200">
            Siden vil bli oppdatert innen kort tid.
          </p> */}
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post, i) => (
                <motion.article
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    initialDelay: 0.3,
                    duration: 0.7,
                    delay: i * 0.3,
                    ease: 'easeOut',
                  }}
                  key={i}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="rounded-no absolute inset-0 h-full w-full bg-gray-50 object-cover"
                    />
                    <div className="rounded-no absolute inset-0 ring-1 ring-inset ring-gray-200/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-300">
                        {post.date}
                      </time>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="group-hover:text-gray-150 mt-3 text-lg font-semibold leading-6 text-white transition-all duration-300 ease-in-out group-hover:underline">
                        <Link
                          href={post.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-1 text-sm leading-6 text-gray-200">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-200/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        {post.author.imageLogo}
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-white">
                            <div>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </div>
                          </p>
                          <p className="text-gray-300">{post.author.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
