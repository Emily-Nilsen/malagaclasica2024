import useTranslation from 'next-translate/useTranslation'

export function PricingRegular() {
  const { t } = useTranslation('common')
  const single_ticket = t('single_ticket')
  const ticket_cost_en = t('ticket_cost_en')
  const ticket_cost_es = t('ticket_cost_es')
  const no_discounts = t('no_discounts')

  return (
    <div className="bg-t">
      <h4 className="mt-10 text-lg font-extrabold tracking-normal text-fuchsia2026">
        <span className="font-bold tracking-normal text-black2026">
          {single_ticket}{' '}
        </span>
        {ticket_cost_en}
        15
        {ticket_cost_es}{' '}
        <span className="font-normal lowercase tracking-normal text-gray-600">
          {no_discounts}
        </span>
      </h4>
    </div>
  )
}
