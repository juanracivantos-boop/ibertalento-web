import { Metadata } from 'next'
import { Factory, Building2, UtensilsCrossed, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { PageHeader } from '@/components/sections/PageHeader'

export const metadata: Metadata = {
  title: 'Sectores | Ibertalento',
  description: 'Especialistas en selección de personal para Industria, Construcción, Hostelería y Limpieza.',
}

const sectors = [
  {
    id: 'industria',
    icon: Factory,
    title: 'Industria y Automoción',
    description: 'Conectamos empresas industriales con operarios especializados, técnicos de mantenimiento, ingenieros de producción y mandos intermedios.',
    profiles: [
      'Operarios de línea de producción',
      'Técnicos de mantenimiento industrial',
      'Ingenieros de procesos',
      'Supervisores de producción',
      'Responsables de calidad',
    ],
    stats: { placed: '200+', success: '98%' },
  },
  {
    id: 'construccion',
    icon: Building2,
    title: 'Construcción',
    description: 'Profesionales cualificados para proyectos de construcción y obra civil.',
    profiles: [
      'Oficiales de obra',
      'Electricistas industriales',
      'Fontaneros y climatización',
      'Jefes de obra',
      'Personal de construcción cualificado',
    ],
    stats: { placed: '220+', success: '96%' },
  },
  {
    id: 'hosteleria',
    icon: UtensilsCrossed,
    title: 'Hostelería y Turismo',
    description: 'Personal cualificado para hoteles, restaurantes y empresas turísticas con necesidades urgentes y de temporada.',
    profiles: [
      'Cocineros y ayudantes de cocina',
      'Camareros y personal de sala',
      'Recepcionistas y conserjes',
      'Gobernanta y personal de limpieza',
      'Directores de hotel',
    ],
    stats: { placed: '180+', success: '97%' },
  },
  {
    id: 'limpieza',
    icon: Sparkles,
    title: 'Limpieza y Mantenimiento',
    description: 'Personal especializado en limpieza profesional y mantenimiento de instalaciones comerciales e industriales.',
    profiles: [
      'Operarios de limpieza',
      'Supervisores de limpieza',
      'Personal de mantenimiento',
      'Limpieza industrial',
      'Gestores de servicios auxiliares',
    ],
    stats: { placed: '150+', success: '95%' },
  },
]

export default function SectoresPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader 
        title="Sectores"
        subtitle="Entendemos las particularidades de cada sector para responder rápido y con precisión. Nuestra experiencia nos permite identificar el talento adecuado para cada industria."
        badgeLabel="SECTORES"
        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80&fit=crop"
      />

      {/* Sectors Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={sector.id}
                  id={sector.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-24`}
                >
                  {/* Icon & Stats con CONTRASTE */}
                  <div className="lg:w-1/3">
                    <div className="rounded-2xl bg-white p-8 ring-1 ring-neutral-200 shadow-lg text-center">
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-red mb-6 shadow-lg">
                        <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-neutral-900">{sector.title}</h3>
                      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-200">
                        <div>
                          <div className="text-3xl font-bold text-brand-red">{sector.stats.placed}</div>
                          <div className="text-sm font-medium text-neutral-700">Colocados</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-brand-red">{sector.stats.success}</div>
                          <div className="text-sm font-medium text-neutral-700">Éxito</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content con CONTRASTE */}
                  <div className="lg:w-2/3">
                    <p className="text-lg text-neutral-900 mb-6 leading-relaxed font-medium">
                      {sector.description}
                    </p>
                    
                    <h4 className="font-bold text-xl mb-4 text-neutral-900">Perfiles que reclutamos:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {sector.profiles.map((profile) => (
                        <li key={profile} className="flex items-start gap-3">
                          <svg className="h-6 w-6 text-brand-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-neutral-900 font-medium">{profile}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA con CONTRASTE */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-neutral-900">¿No encuentras tu sector?</h2>
            <p className="text-lg text-neutral-900 mb-8 leading-relaxed font-medium">
              Trabajamos con empresas de múltiples industrias. Cuéntanos tus necesidades 
              y te ayudaremos a encontrar el talento que buscas.
            </p>
            <Link href="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-brand-red hover:bg-brand-red-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Contactar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
