interface JsonLdProps {
  data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Schema.org data for the organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ibertalento de Recursos Humanos",
  "alternateName": "Ibertalento",
  "url": "https://ibertalento.com",
  "logo": "https://ibertalento.com/logo.png",
  "description": "Traemos talento latinoamericano cualificado a España con todos los trámites legales. Combinamos headhunting especializado y gestión legal completa.",
  "foundingDate": "2019",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madrid",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-900-123-456",
    "contactType": "customer service",
    "email": "info@ibertalento.com",
    "availableLanguage": ["Spanish", "English"]
  },
  "sameAs": [
    "https://linkedin.com/company/ibertalento",
    "https://twitter.com/ibertalento"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "Spain"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Recursos Humanos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Headhunting Especializado",
          "description": "Búsqueda y selección de talento latinoamericano cualificado"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Trámites de Extranjería",
          "description": "Gestión completa de trámites legales para contratación internacional"
        }
      }
    ]
  }
}

// Schema.org data for the main service
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Contratación de Talento Latinoamericano",
  "description": "Servicio integral de headhunting y gestión legal para traer talento latinoamericano cualificado a España en 4 meses",
  "provider": {
    "@type": "Organization",
    "name": "Ibertalento de Recursos Humanos"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Spain"
  },
  "serviceType": "Human Resources",
  "category": "Recruitment",
  "offers": {
    "@type": "Offer",
    "price": "8000-12000",
    "priceCurrency": "EUR",
    "description": "Servicio integral por profesional"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}

// Schema.org data for FAQ
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué 4 meses de proceso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Este tiempo nos permite garantizar la calidad del proceso: 3-4 semanas para selección rigurosa, 6-8 semanas para trámites legales oficiales, y 2-3 semanas para coordinación y llegada."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué garantías ofrecen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ofrecemos garantía de resultado: si no encontramos el perfil adecuado en el tiempo acordado, no cobramos. Además, hacemos seguimiento durante 6 meses post-incorporación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué sectores cubren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos especializamos en 4 sectores principales: Industria, Servicios, Hostelería y Construcción, con perfiles específicos para cada sector."
      }
    }
  ]
}
