import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Users,
    title: 'Selección nacional e internacional',
    description: 'Cobertura rápida en España y Latinoamérica. Acceso a una red de profesionales cualificados en más de 15 países.',
    features: ['Red en 15+ países', 'Procesos ágiles', 'Cumplimiento legal'],
  },
  {
    icon: Target,
    title: 'Headhunting especializado',
    description: 'Búsqueda activa de perfiles comerciales, técnicos y directivos. Identificamos y atraemos al talento que tu empresa necesita.',
    features: ['Perfiles senior', 'Búsqueda activa', 'Evaluación rigurosa'],
  },
  {
    icon: TrendingUp,
    title: 'Garantía de reemplazo',
    description: 'Si la incorporación no se consolida en el periodo acordado, activamos una garantía de reemplazo para que tu proyecto no se detenga.',
    features: ['Sin riesgo adicional', 'Continuidad garantizada', 'Compromiso con resultados'],
  },
  {
    icon: Lightbulb,
    title: 'Consultoría de talento',
    description: 'Optimizamos tus procesos de reclutamiento y retención. Estrategias personalizadas para atraer y mantener el mejor talento.',
    features: ['Análisis de procesos', 'Employer branding', 'Retención de talento'],
  },
]

export function Services() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-5">
          <h2 className="mb-2 text-neutral-900">
            Soluciones de selección adaptadas a tu negocio
          </h2>
          <p className="text-lg text-neutral-700">
            Combinamos tecnología, experiencia y una red internacional para encontrar 
            el talento que impulsa el crecimiento de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-neutral-200 hover:ring-brand-red hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-red group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900">{service.title}</h3>
                    <p className="text-neutral-700">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-900 font-medium">
                      <svg className="h-5 w-5 text-brand-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/servicios" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-brand-red hover:bg-brand-red-600 transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  )
}
