'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: '¿Por qué 4 meses de proceso?',
    answer: 'Este tiempo nos permite garantizar la calidad del proceso: 3-4 semanas para selección rigurosa, 6-8 semanas para trámites legales oficiales, y 2-3 semanas para coordinación y llegada. Los procesos administrativos oficiales requieren este tiempo para su correcta tramitación.'
  },
  {
    question: '¿Qué garantías ofrecen?',
    answer: 'Ofrecemos garantía de resultado: si no encontramos el perfil adecuado en el tiempo acordado, no cobramos. Además, hacemos seguimiento durante 6 meses post-incorporación para asegurar la satisfacción tanto del cliente como del profesional.'
  },
  {
    question: '¿Cómo seleccionan a los candidatos?',
    answer: 'Utilizamos un proceso de selección riguroso: evaluación técnica específica del sector, entrevistas culturales, verificación de referencias, y pruebas prácticas cuando es necesario. Nuestros headhunters conocen tanto el mercado español como el latinoamericano.'
  },
  {
    question: '¿Qué trámites legales gestionan?',
    answer: 'Gestionamos todos los trámites necesarios: solicitud de visado de trabajo, obtención del NIE, permisos de residencia y trabajo, alta en Seguridad Social, y contratos laborales. Todo a través de nuestro despacho de abogados especializado en extranjería.'
  },
  {
    question: '¿Qué sectores cubren?',
    answer: 'Nos especializamos en 4 sectores principales: Industria (operarios, técnicos, supervisores), Servicios (administrativos, atención al cliente, logística), Hostelería (chefs, camareros, recepcionistas), y Construcción (albañiles, electricistas, fontaneros, capataces).'
  },
  {
    question: '¿Cuál es el coste del servicio?',
    answer: 'Nuestro servicio integral tiene un coste de €8,000-12,000 por profesional, dependiendo del perfil y sector. Esto incluye todo: selección, trámites legales, coordinación y seguimiento. Es más económico que gestionar cada parte por separado.'
  },
  {
    question: '¿Qué pasa si el profesional no se adapta?',
    answer: 'Hacemos seguimiento durante 6 meses post-incorporación. Si hay problemas de adaptación, trabajamos con ambas partes para resolverlos. En casos excepcionales, podemos buscar un reemplazo sin coste adicional durante el primer año.'
  },
  {
    question: '¿Cómo se asegura el cumplimiento legal?',
    answer: 'Contamos con un despacho de abogados especializado en extranjería con más de 10 años de experiencia. Todos los trámites se realizan siguiendo la normativa vigente y mantenemos actualizada nuestra formación en cambios legislativos.'
  }
]

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro proceso y servicios
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:border-ibertalento-300 transition-colors">
              <CardContent className="p-0">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-ibertalento-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Tienes más preguntas? Estamos aquí para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contacta con nosotros
            </button>
            <button 
              className="btn-secondary"
              onClick={() => window.location.href = 'tel:+34900123456'}
            >
              Llama al +34 900 123 456
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
