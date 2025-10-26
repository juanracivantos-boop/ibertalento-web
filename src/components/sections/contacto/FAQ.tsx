'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: '¿Cuánto tiempo tarda el proceso completo?',
    answer: 'Nuestro proceso integral tiene una duración promedio de 4 meses desde el inicio hasta la incorporación del profesional. Esto incluye selección, trámites legales y preparación para la llegada.'
  },
  {
    question: '¿Qué garantías ofrecen?',
    answer: 'Ofrecemos garantía de cumplimiento legal (100%), garantía de calidad (95% tasa de éxito), garantía de tiempo (4 meses o compensación) y garantía de satisfacción (reemplazo gratuito si no cumple expectativas).'
  },
  {
    question: '¿Qué sectores cubren?',
    answer: 'Nos especializamos en industria, servicios, hostelería y construcción. Contamos con experiencia específica en cada sector y conocimiento de los perfiles y certificaciones requeridas.'
  },
  {
    question: '¿Cómo garantizan la calidad de los candidatos?',
    answer: 'Realizamos una selección rigurosa que incluye evaluación técnica, cultural y de referencias. Nuestros headhunters especializados conocen tanto el mercado español como el latinoamericano.'
  },
  {
    question: '¿Qué incluye la gestión legal?',
    answer: 'Gestionamos todos los trámites: visados de trabajo, NIE, permisos de residencia, contratos laborales, inscripción en Seguridad Social y cumplimiento de normativas RGPD.'
  },
  {
    question: '¿Cuál es el coste del servicio?',
    answer: 'Nuestro servicio integral tiene un coste de €8,000-12,000 por profesional, significativamente menor que los métodos tradicionales (€15,000-25,000) al combinar selección y gestión legal.'
  },
  {
    question: '¿Qué pasa si el candidato no se adapta?',
    answer: 'Ofrecemos garantía de satisfacción de 6 meses. Si el profesional no cumple las expectativas, lo reemplazamos sin coste adicional.'
  },
  {
    question: '¿Cómo se aseguran del cumplimiento legal?',
    answer: 'Contamos con un despacho de abogados especializado en extranjería, registrado en el Colegio de Abogados de Madrid y con autorización del Ministerio de Trabajo.'
  },
  {
    question: '¿Qué países de Latinoamérica cubren?',
    answer: 'Trabajamos con profesionales de 15+ países latinoamericanos, con redes de headhunters especializados en cada región y conocimiento de las normativas específicas.'
  },
  {
    question: '¿Ofrecen soporte post-incorporación?',
    answer: 'Sí, ofrecemos seguimiento de 6 meses post-incorporación, incluyendo soporte para resolución de dudas, evaluación de integración y asistencia en cualquier incidencia.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro proceso y servicios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-ibertalento-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-ibertalento-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Contacta con nosotros directamente. Estamos aquí para resolver todas tus dudas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:+34900123456'}
                className="px-6 py-3 bg-ibertalento-600 text-white rounded-lg font-semibold hover:bg-ibertalento-700 transition-colors"
              >
                Llamar ahora
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:info@ibertalento.com'}
                className="px-6 py-3 border-2 border-ibertalento-600 text-ibertalento-600 rounded-lg font-semibold hover:bg-ibertalento-50 transition-colors"
              >
                Enviar email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
