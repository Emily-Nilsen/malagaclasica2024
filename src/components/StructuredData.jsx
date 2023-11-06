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
              logo: 'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Flemmen_Co_logo_iaexmq.svg',
              description:
                'Professional legal services in Oslo, specializing in business law, dispute resolution, and more.',
              image:
                'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Flemmen_Co_hero_desktop_v1_cropped_i51zcb.webp',
              keywords: [
                'Law Firm',
                'Legal Services',
                'Oslo',
                'Business Law',
                'Dispute Resolution',
              ],
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
              logo: 'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Flemmen_Co_logo_iaexmq.svg',
              description:
                'Profesjonelle juridiske tjenester i Oslo, spesialisert på forretningsjus, tvisteløsning og mer.',
              image:
                'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/Flemmen_Co_hero_desktop_v1_cropped_i51zcb.webp',
              keywords: [
                'Advokatfirma',
                'Juridiske Tjenester',
                'Oslo',
                'Forretningsjus',
                'Tvisteløsning',
              ],
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
            // Service schema for the service "Criminal Law/Strafferett"
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
                  'Comprehensive legal assistance in criminal cases, defending the rights of the accused with diligence and expertise.',
              },
              url: 'https://flemmenco.no/en/#strafferett',
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
                  'Omfattende juridisk bistand i straffesaker, forsvarer de tiltaltes rettigheter med grundighet og ekspertise.',
              },
              url: 'https://flemmenco.no/#strafferett',
            },
            // Service schema for the service "Labor Law/Arbeidsrett"
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
                '@value': 'Labor Law',
              },
              description: {
                '@language': 'en',
                '@value':
                  'Professional advice on employment disputes, workplace rights, and labor regulations to protect both employers and employees.',
              },
              url: 'https://flemmenco.no/en/#arbeidsrett',
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
                '@value': 'Arbeidsrett',
              },
              description: {
                '@language': 'nb',
                '@value':
                  'Profesjonell rådgivning om arbeidstvister, arbeidsplassrettigheter og arbeidsregelverk for å beskytte både arbeidsgivere og arbeidstakere.',
              },
              url: 'https://flemmenco.no/#arbeidsrett',
            },
            // Service schema for the service "Contract Law/Kontraktsrett"
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
                '@value': 'Contract Law',
              },
              description: {
                '@language': 'en',
                '@value':
                  'Expert navigation of contract disputes and negotiations, ensuring fair and binding agreements for all parties involved.',
              },
              url: 'https://flemmenco.no/en/#kontraktsrett',
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
                '@value': 'Kontraktsrett',
              },
              description: {
                '@language': 'nb',
                '@value':
                  'Ekspertnavigering av kontraktstvister og forhandlinger, sikrer rettferdige og bindende avtaler for alle involverte parter.',
              },
              url: 'https://flemmenco.no/#kontraktsrett',
            },
            // Service schema for the service "Family and Inheritance Law/Familie- og arverett"
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
                '@value': 'Family and Inheritance Law',
              },
              description: {
                '@language': 'en',
                '@value':
                  'Sensitive and informed support for family law matters, including inheritance disputes, wills, and guardianship.',
              },
              url: 'https://flemmenco.no/en/#familie-og-arverett',
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
                '@value': 'Familie- og arverett',
              },
              description: {
                '@language': 'nb',
                '@value':
                  'Sensitiv og informert støtte for familierettslige saker, inkludert arvetvister, testamenter og vergemål.',
              },
              url: 'https://flemmenco.no/#familie-og-arverett',
            },
            // Service schema for the service "Real Estate/Fast eiendom"
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
                '@value': 'Real Estate',
              },
              description: {
                '@language': 'en',
                '@value':
                  'Guidance on property law, from real estate transactions to land disputes, ensuring legal compliance and protection of assets.',
              },
              url: 'https://flemmenco.no/en/#fast-eiendom',
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
                '@value': 'Fast eiendom',
              },
              description: {
                '@language': 'nb',
                '@value':
                  'Veiledning i eiendomsrett, fra eiendomstransaksjoner til landtvister, sikrer juridisk overholdelse og beskyttelse av eiendeler.',
              },
              url: 'https://flemmenco.no/#fast-eiendom',
            },
            // Service schema for the service "Economic criminal cases/Økonomiske straffesaker"
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
                '@value': 'Economic criminal cases',
              },
              description: {
                '@language': 'en',
                '@value':
                  'Defense and representation in economic criminal cases, offering strategic counsel to navigate complex financial legislation.',
              },
              url: 'https://flemmenco.no/en/#økonomiske-straffesaker',
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
                '@value': 'Økonomiske straffesaker',
              },
              description: {
                '@language': 'nb',
                '@value':
                  'Forsvar og representasjon i økonomiske straffesaker, tilbyr strategisk rådgivning for å navigere i komplekse sakskomplekser.',
              },
              url: 'https://flemmenco.no/#økonomiske-straffesaker',
            },
            // Service schema for the service "Securing valuables in case of arrest etc./Sikring av verdier ved arrest mv."
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
                '@value': 'Securing valuables in case of arrest etc.',
              },
              description: {
                '@language': 'en',
                '@value':
                  'Legal services to secure assets in the event of an arrest or legal action, ensuring the safeguarding of your valuables.',
              },
              url: 'https://flemmenco.no/en/#sikring-av-verdier-ved-arrest-mv',
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
                '@value': 'Sikring av verdier ved arrest mv.',
              },
              description: {
                '@language': 'nb',
                '@value':
                  'Juridiske tjenester for å sikre verdier ved arrestasjon eller rettslige skritt, sikrer beskyttelse av dine verdier.',
              },
              url: 'https://flemmenco.no/#sikring-av-verdier-ved-arrest-mv',
            },
          ],
        }),
      }}
    />
  )
}
