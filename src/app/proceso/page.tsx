'use client'

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PageHeader } from '@/components/sections/PageHeader'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'

export default function ProcesoPage() {
  return (
    <>
      {/* Hero with PageHeader */}
      <PageHeader 
        title="Nuestro Proceso"
        subtitle="Un proceso transparente, estructurado y eficiente. De la búsqueda a la incorporación en aproximadamente 4 meses."
        badgeLabel="PROCESO"
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80&fit=crop"
      />
      
      {/* Process Timeline Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Las 4 fases del proceso</h2>
            <p className="text-lg text-neutral-600">
              Un recorrido estructurado que garantiza la calidad en cada etapa, desde el primer contacto hasta la incorporación efectiva.
            </p>
          </div>
          
          <ProcessTimeline />
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6 text-gray-900">¿Por qué nuestro proceso funciona?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 mb-4 shadow-md">
                <CheckCircle2 className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparencia total</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Sabes en qué fase estamos en todo momento y qué esperar en cada etapa
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 mb-4 shadow-md">
                <CheckCircle2 className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Evaluación rigurosa</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Metodología estructurada que garantiza la calidad de cada candidato
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-green-600 mb-4 shadow-md">
                <CheckCircle2 className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Acompañamiento continuo</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Te apoyamos desde el primer día hasta la incorporación efectiva
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA con mejor contraste */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white">¿Listo para empezar?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Agenda una consulta gratuita y descubre cómo nuestro proceso puede 
              ayudarte a encontrar el talento que necesitas.
            </p>
            <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-blue-900 text-lg bg-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200">
              Solicitar consulta gratuita
              <CheckCircle2 className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}