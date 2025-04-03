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
        <h4 className="pb-5 text-2xl font-extrabold uppercase text-red2025 sm:text-3xl">
          Málaga Clásica Talentos
        </h4>
        <p>{invitationText}</p>
      </div>
      <div className="flex mt-10">
        <a
          href="https://teatrocervantes.com/es/genero/musica/xiii-malaga-clasica-el-nuevo-mundo/malaga-clasica-talentos-1893"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-red2025 hover:bg-orange2025 focus:outline-none focus:ring-2 focus:ring-red2025 focus:ring-offset-2"
          >
            <TicketIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
            {ticketsByInvitation}
          </button>
        </a>
        <Link href="/program" passHref>
          <button className="inline-flex justify-center px-4 py-2 ml-6 text-sm font-medium transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-grey2025/40 text-black2025 ring-1 ring-grey2025/40 hover:bg-grey2025/20 hover:text-black2025 hover:ring-grey2025/30 focus:outline-none focus:ring-2 focus:ring-grey2025 focus:ring-offset-2">
            {program}
          </button>
        </Link>
      </div>
    </div>
  )
}
