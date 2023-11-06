export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'LegalService',
              name: {
                '@language': 'en',
                '@value': 'Flemmen & Co Law Firm',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Sørkedalsveien 6',
                addressLocality: 'Oslo',
                postalCode: '0369',
              },
              url: 'https://flemmenco.no/en',
              telephone: '+47 400 01 423',
            },
            {
              '@type': 'LegalService',
              name: {
                '@language': 'nb',
                '@value': 'Flemmen & Co Advokatfirma',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Sørkedalsveien 6',
                addressLocality: 'Oslo',
                postalCode: '0369',
              },
              url: 'https://flemmenco.no',
              telephone: '+47 400 01 423',
            },
            // Person schema for Christian Flemmen Johansen
            {
              '@type': 'Person',
              name: 'Christian Flemmen Johansen',
              jobTitle: {
                '@language': 'en',
                '@value': 'Lawyer',
              },
              telephone: '+47 915 48 177',
              email: 'cfj@flemmenco.no',
              worksFor: {
                '@type': 'LegalService',
                name: {
                  '@language': 'en',
                  '@value': 'Flemmen & Co Law Firm',
                },
              },
            },
            {
              '@type': 'Person',
              name: 'Christian Flemmen Johansen',
              jobTitle: {
                '@language': 'nb',
                '@value': 'Advokat',
              },
              telephone: '+47 915 48 177',
              email: 'cfj@flemmenco.no',
              worksFor: {
                '@type': 'LegalService',
                name: {
                  '@language': 'nb',
                  '@value': 'Flemmen & Co Advokatfirma',
                },
              },
            },
            // Person schema for Stine Kalkvik Stenberg
            {
              '@type': 'Person',
              name: 'Stine Kalkvik Stenberg',
              jobTitle: {
                '@language': 'en',
                '@value': 'Lawyer',
              },
              telephone: '+47 957 96 351',
              email: 'sks@flemmenco.no',
              worksFor: {
                '@type': 'LegalService',
                name: {
                  '@language': 'en',
                  '@value': 'Flemmen & Co Law Firm',
                },
              },
            },
            {
              '@type': 'Person',
              name: 'Stine Kalkvik Stenberg',
              jobTitle: {
                '@language': 'nb',
                '@value': 'Advokat',
              },
              telephone: '+47 957 96 351',
              email: 'sks@flemmenco.no',
              worksFor: {
                '@type': 'LegalService',
                name: {
                  '@language': 'nb',
                  '@value': 'Flemmen & Co Advokatfirma',
                },
              },
            },
            // Person schema for Ane Natvig
            {
              '@type': 'Person',
              name: 'Ane Natvig',
              jobTitle: {
                '@language': 'en',
                '@value': 'Office Manager',
              },
              telephone: '+47 980 59 953',
              email: 'ane@flemmenco.no',
              worksFor: {
                '@type': 'LegalService',
                name: {
                  '@language': 'en',
                  '@value': 'Flemmen & Co Law Firm',
                },
              },
            },
            {
              '@type': 'Person',
              name: 'Ane Natvig',
              jobTitle: {
                '@language': 'nb',
                '@value': 'Kontorsjef',
              },
              telephone: '+47 980 59 953',
              email: 'ane@flemmenco.no',
              worksFor: {
                '@type': 'LegalService',
                name: {
                  '@language': 'nb',
                  '@value': 'Flemmen & Co Advokatfirma',
                },
              },
            },
            // Service schema for the service "Dispute and Procedure"
            {
              '@type': 'Service',
              provider: {
                '@type': 'LegalService',
                name: {
                  '@language': 'en',
                  '@value': 'Flemmen & Co Law Firm',
                },
              },
              serviceType: {
                '@language': 'en',
                '@value': 'Dispute and Procedure',
              },
              description: {
                '@language': 'en',
                '@value':
                  'Expert legal support for disputes and legal proceedings.',
              },
              url: 'https://flemmenco.no/en/#tvist-og-prosedyre',
            },
            {
              '@type': 'Service',
              provider: {
                '@type': 'LegalService',
                name: {
                  '@language': 'nb',
                  '@value': 'Flemmen & Co Advokatfirma',
                },
              },
              serviceType: {
                '@language': 'nb',
                '@value': 'Tvist og Prosedyre',
              },
              description: {
                '@language': 'nb',
                '@value':
                  'Ekspert juridisk støtte for tvister og rettslige prosesser.',
              },
              url: 'https://flemmenco.no/#tvist-og-prosedyre',
            },
            // Service schema for the service "Criminal Law"
            {
              '@type': 'Service',
              provider: {
                '@type': 'LegalService',
                name: {
                  '@language': 'en',
                  '@value': 'Flemmen & Co Law Firm',
                },
              },
              serviceType: {
                '@language': 'en',
                '@value': 'Criminal Law',
              },
              description: {
                '@language': 'en',
                '@value':
                  'Expert legal support for disputes and legal proceedings.',
              },
              url: 'https://flemmenco.no/en/#tvist-og-prosedyre',
            },
            {
              '@type': 'Service',
              provider: {
                '@type': 'LegalService',
                name: {
                  '@language': 'nb',
                  '@value': 'Flemmen & Co Advokatfirma',
                },
              },
              serviceType: {
                '@language': 'nb',
                '@value': 'Strafferett',
              },
              description: {
                '@language': 'nb',
                '@value':
                  'Omfattende juridiske tjenester for strafferettslige saker.',
              },
              url: 'https://flemmenco.no/#strafferett',
            },
          ],
        }),
      }}
    />
  )
}
