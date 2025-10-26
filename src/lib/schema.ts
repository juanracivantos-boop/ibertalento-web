// Schema.org structured data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cibertalento de Recursos Humanos",
  "description": "Especialistas en traer talento latinoamericano cualificado a España con gestión legal completa. Proceso integral en 4 meses.",
  "url": "https://cibertalento.com",
  "logo": "https://cibertalento.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-900-123-456",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madrid",
    "addressCountry": "ES"
  },
  "sameAs": [
    "https://linkedin.com/company/cibertalento",
    "https://twitter.com/cibertalento"
  ],
  "foundingDate": "2019",
  "numberOfEmployees": "10-50",
  "areaServed": {
    "@type": "Country",
    "name": "Spain"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Contratación de Talento Latinoamericano",
  "description": "Servicio integral de headhunting y gestión legal para traer talento latinoamericano cualificado a España en 4 meses.",
  "provider": {
    "@type": "Organization",
    "name": "Cibertalento de Recursos Humanos"
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Cibertalento",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Headhunting Especializado"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Trámites de Extranjería"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Soluciones por Sector"
        }
      }
    ]
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda el proceso completo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro proceso integral tiene una duración promedio de 4 meses desde el inicio hasta la incorporación del profesional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué garantías ofrecen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ofrecemos garantía de cumplimiento legal (100%), garantía de calidad (95% tasa de éxito), garantía de tiempo (4 meses) y garantía de satisfacción."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué sectores cubren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos especializamos en industria, servicios, hostelería y construcción con experiencia específica en cada sector."
      }
    }
  ]
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})
