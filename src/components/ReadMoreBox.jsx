import Image from 'next/image'
import Link from 'next/link'

export function ReadMoreBox() {
  return (
    <div className="bg-slate-50 pb-24 pt-6 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          {/* <p className="text-base leading-7 text-gray-600 uppercase">noe her</p> */}
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Erfaren forsvarer og rådgiver
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Flemmen Johansen har bistått som forsvarer i flere omfattende
                straffesaker, bla Tordenskjold-saken, Thule Drilling,
                Unibuss-saken (anført korrupsjon), Oslo katolske bispedømme
                (anført bedrageri), Eiendomskonge-saken (anført bankbedrageri),
                Jemtland-saken (anført drap), rektor-saken (i lagmannsretten),
                skattefunnsaken (anført skattesvik), etablering av
                el-sparkesykler i Norge, nedleggelsen av Pelsdyrnæringen
                (erstatningsrett), Nortura-saken (anført
                korrupsjon),Thune-saken, Husbank-saken (anført bankbedrageri),
                Finans Cowboy-saken (anført grov hvitvasking),
                krabbefabrikksaken (anført forsikringsbedrageri), Nordea-saken
                (anført korrupsjon), DNB-saken (anført bedrageri/korrupsjon) mv.
              </p>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas.
              </p> */}
            </div>
            <div>
              <p>
                Han har også utstrakt erfaring med saker overfor pressens
                faglige utvalg (PFU) og Kringkastingsrådet (NRK), samtidig som
                han jevnlig samarbeider tett med ulike byråer,
                privatetterforskere mfl.
              </p>
              <p className="mt-8">
                Flemmen Johansen fungerer også som sensor på masternivå ved UiO,
                han har styreverv innen eiendom og i veldedige foreninger. Han
                påtar seg også tidvis oppdrag pro-bono for personer som befinner
                seg i en vanskelig livssituasjon uten mulighet for annen
                bistand.
              </p>
            </div>
          </div>
          {/* <div className="flex mt-10">
            <a
              href="#"
              className="rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Less mindre
            </a>
          </div> */}
        </div>
      </div>
      {/* <div className="relative pt-16 overflow-hidden lg:pt-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="relative">
            <Image
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Forsvarsadvokat/CF-image-25_i61h5b.webp"
              alt=""
              width={1334}
              height={750}
            />
          </div>
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div> */}
    </div>
  )
}
