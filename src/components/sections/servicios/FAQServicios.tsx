'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * FAQServicios component
 * Accordion with 4 specific frequently asked questions about services
 */

const faqs = [
  {
    id: 'q1',
    question: '¿Cuánto tardan los candidatos en incorporarse?',
    answer: 'A partir de tres meses dependiendo del país de origen.'
  },
  {
    id: 'q2',
    question: '¿Qué ocurre si la persona incorporada no funciona? ¿Se da un plazo de garantía? ¿Una reposición sin coste adicional?',
    answer: 'Ofrecemos garantía con reposición sin coste adicional durante el periodo acordado en el contrato.'
  },
  {
    id: 'q3',
    question: '¿Llegan con papeles y documentación en regla?',
    answer: 'Sí. Contrato indefinido y documentación validada.'
  },
  {
    id: 'q4',
    question: '¿Qué tipo de perfiles podéis traer?',
    answer: 'Nos adaptamos a las necesidades de cada negocio.'
  }
]

export function FAQServicios() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Preguntas frecuentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-xl border border-neutral-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
                  aria-expanded={openItem === faq.id}
                >
                  <span className="text-base md:text-lg font-semibold text-neutral-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      openItem === faq.id ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                
                {openItem === faq.id && (
                  <div className="px-5 pb-5">
                    <p className="text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

