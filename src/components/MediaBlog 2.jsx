import Image from 'next/image'
import Link from 'next/link'

const posts = [
  // More posts...
  {
    id: 6,
    title:
      'Ble dømt til forvaring for to drapsforsøk. Nå er han frikjent for det ene',
    href: 'https://www.ao.no/ble-domt-til-forvaring-for-to-drapsforsok-na-er-han-frikjent-for-det-ene/s/5-128-386280',
    description:
      '35-åringen handlet i nødverge da han knivstakk en mann på Ammerud, mener lagmannsretten. Han vil likevel anke dommen til Høyesterett.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/blog-6_motzpn.webp',
    date: '29. sep, 2022',
    datetime: '2022-09-29',
    category: { title: 'Avisa Oslo' },
    author: {
      name: 'Jørn Normann Pedersen',
      role: 'Journalist',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/blog-author-6_gvjkc4.webp',
    },
  },
  {
    id: 5,
    title: 'Advokat om uavklart hjertestopp-sak: – Urovekkende',
    href: 'https://www.dagsavisen.no/fremtiden/nyheter/2020/05/05/advokat-om-uavklart-hjertestopp-sak-urovekkende/',
    description:
      'Erstatningstvisten mellom langrennsløperen Sondre Turvoll Fossli (26), Norges Skiforbundet og If fortsetter. Det er snart ni måneder siden han fikk hjertestans.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/blog-5_ensxot.webp',
    date: '05. mai, 2020',
    datetime: '2020-05-05',
    category: { title: 'NTB' },
    author: {
      name: 'NTB',
      role: 'NTB nyheter',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/ntb_vbxpk4.webp',
    },
  },
  {
    id: 4,
    title:
      'Leiligheten ble brukt til vill sex- og kokainfest: Petter og Tina hyrer toppadvokat mot Airbnb',
    href: 'https://www.nettavisen.no/okonomi/leiligheten-ble-brukt-til-vill-sex-og-kokainfest-petter-og-tina-hyrer-toppadvokat-mot-airbnb/s/12-95-3423870808blog-3',
    description:
      'Etter at leiligheten til Petter Nøtnes (36) og Tina Melhus (34) ble rasert av leietagernes sex- og kokainfest, har paret kjempet en kamp om erstatning mot Airbnb. Nå har paret hyret inn toppadvokaten Christian Flemmen Johansen i Elden advokatfirma for å knuse Airbnb.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/blog-3_yzarkk.webp',
    date: '31. okt, 2019',
    datetime: '2019-10-31',
    category: { title: 'Nettavisen' },
    author: {
      name: 'Espen Teigen',
      role: 'Journalist',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/Espen_Teigen_byline_ngbnru.webp',
    },
  },
  {
    id: 3,
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
    datetime: '2017-11-19',
    category: { title: 'NRK' },
    author: {
      name: 'Rolv Christian Topdahl',
      role: 'Journalist',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/blog-2-author_pfxpys.webp',
    },
  },
  {
    id: 1,
    title: 'Lur eller lettlurt?',
    href: 'https://www.ta.no/nyheter/lur-eller-lettlurt/s/1-111-7369224',
    description:
      'Påtalemyndigheten la ned påstand om fengsel i ett og et halvt år – der seks måneder ble gjort betinget – for entreprenøren som er tiltalt for en rekke bedragerier. – Full frifinnelse, forlangte forsvareren.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1680527952/Forsvarsadvokat/blog-4_wvitar.webp',
    date: '14. mai, 2014',
    datetime: '2014-05-14',
    category: { title: 'Telemarksavisa' },
    author: {
      name: 'Jarle Pedersen',
      role: 'Journalist',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/JarlePedersen_gerza9.webp',
    },
  },
]

export function MediaBlog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fra arkivet
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Linker til tidligere mediaomtale.
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
                <Link
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
