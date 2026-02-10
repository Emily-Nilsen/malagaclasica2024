import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { TicketIcon } from '@heroicons/react/24/solid'

export function ByInvitation() {
  const { t } = useTranslation('common')
  const ticketsByInvitation = t('tickets_by_invitation')
  const program = t('program')
  const invitationText = t('invitation_text')

  return (
    <div>
      <div className="mt-10">
        <h4 className="pb-5 text-2xl font-extrabold uppercase text-fuchsia2026 sm:text-3xl">
          Málaga Clásica Talentos
        </h4>
        <p>{invitationText}</p>
      </div>
      <div className="mt-10 flex">
        <a
          href="https://www.teatroechegaray.com/es/genero/musica/xiv-malaga-clasica-metropolis/malaga-clasica-talentos-2132"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-fuchsia2026 px-4 py-2 text-sm font-medium text-white shadow-none transition duration-200 ease-in-out hover:bg-fuchsia2026 focus:outline-none focus:ring-2 focus:ring-fuchsia2026 focus:ring-offset-2"
          >
            <TicketIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            {ticketsByInvitation}
          </button>
        </a>
        <Link href="/program" passHref>
          <button className="ml-6 inline-flex justify-center rounded-md border border-transparent bg-grey2026/40 px-4 py-2 text-sm font-medium text-black2026 shadow-none ring-1 ring-grey2026/40 transition duration-200 ease-in-out hover:bg-grey2026/20 hover:text-black2026 hover:ring-grey2026/30 focus:outline-none focus:ring-2 focus:ring-grey2026 focus:ring-offset-2">
            {program}
          </button>
        </Link>
      </div>
    </div>
  )
}
