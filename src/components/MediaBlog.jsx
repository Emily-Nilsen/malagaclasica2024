import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Anna Rasmussen hyrer inn toppadvokat for å få redusert «bloggbot»',
    href: 'https://www.nettavisen.no/na24/anna-rasmussen-hyrer-inn-toppadvokat-for-a-fa-redusert-bloggbot/s/12-95-3423559805',
    description:
      'Toppbloggeren har hyret inn advokat Christian Flemmen for å klage inn saken til Markedsrådet. Flemmen er for øvrig i disse dager en av forsvarerne til Janne Jemtland sin drapstiltalte ektemann.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/blog-1_cvy1vt.webp',
    date: '16. nov, 2018',
    datetime: '2018-11-16',
    category: {
      title: 'Nettavisen',
    },
    author: {
      name: 'Mario Andrés Neira Torres',
      role: 'Journalist',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/mariotorres_dzpupg.webp',
    },
  },
  {
    id: 2,
    title: 'Pelsdyraktivister må betale en halv million',
    href: 'https://www.nrk.no/rogaland/pelsdyraktivister-ma-betale-en-halv-million-i-erstatning-1.13741093',
    description:
      'De fire pelsdyraktivistene fra Nettverk for dyrs frihet brøt seg inn på en minkfarm i Figgjo i Sandnes i 2013. Grunnen var at de skulle dokumentere dårlig dyrehold.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/blog-2_fuaklc.webp',
    date: '19. okt, 2017',
    datetime: '2020-03-16',
    category: { title: 'NRK' },
    author: {
      name: 'Rolv Christian Topdahl',
      role: 'Journalist',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/blog-2-author_pfxpys.webp',
    },
  },
  // More posts...
]

export function MediaBlog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <Link href={post.href}>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {post.category.title}
                    </div>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <div>
                        <span className="absolute inset-0" />
                        {post.title}
                      </div>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <div>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </div>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
