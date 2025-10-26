import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Casos de Éxito | Ibertalento',
  description: 'Historias reales de empresas que han transformado sus equipos con Ibertalento. Resultados medibles y procesos ágiles.',
}

const cases = [
  {
    sector: 'Industria',
    company: 'Fabricante de componentes',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&fit=crop',
    challenge: 'Necesitaban jefe de ventas con experiencia en el sector para liderar la expansión en el mercado español.',
    solution: 'Identificamos y presentamos 5 candidatos senior en 10 días mediante headhunting especializado.',
    results: [
      'Incorporación en 10 días desde el inicio',
      'El equipo comercial duplicó resultados en 6 meses',
      'Apertura de 3 nuevos mercados regionales',
    ],
    metrics: {
      time: '10 días',
      growth: '+100%',
      team: '12 personas',
    },
  },
  {
    sector: 'Hostelería',
    company: 'Cadena hotelera 4★',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80&fit=crop',
    challenge: 'Temporada alta con 15 vacantes urgentes en cocina, limpieza y recepción en múltiples ubicaciones.',
    solution: 'Proceso acelerado con nuestra red en Latinoamérica, gestionando visados y permisos de trabajo.',
    results: [
      '15 contrataciones en 2 semanas',
      'Cobertura completa antes de temporada alta',
      'Tasa de retención del 92% tras 12 meses',
    ],
    metrics: {
      time: '2 semanas',
      growth: '15 personas',
      team: '92% retención',
    },
  },
  {
    sector: 'Industria',
    company: 'Planta de producción',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&fit=crop',
    challenge: 'Expansión de línea de producción requería 20 operarios especializados con certificaciones específicas.',
    solution: 'Selección nacional e internacional con formación previa y onboarding estructurado.',
    results: [
      '20 operarios certificados incorporados',
      'Producción aumentó un 45% en 3 meses',
      'Cero accidentes laborales en el primer año',
    ],
    metrics: {
      time: '1 mes',
      growth: '+45%',
      team: '20 personas',
    },
  },
  {
    sector: 'Construcción',
    company: 'Proyecto de infraestructura',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&fit=crop',
    challenge: 'Proyecto de gran envergadura necesitando equipos completos de construcción cualificados.',
    solution: 'Selección y gestión de trámites para 40 profesionales de construcción.',
    results: [
      '40 profesionales incorporados',
      'Proyecto completado 15% antes de plazo',
      'Certificación de calidad ISO obtenida',
    ],
    metrics: {
      time: '4 meses',
      growth: '40 personas',
      team: 'ISO certificado',
    },
  },
]

export default function CasosExitoPage() {
  return (
    <>
      {/* Hero - Historias con ALTO CONTRASTE */}
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&fit=crop" 
          alt="Historias que impulsan el negocio" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* OVERLAY OSCURO para texto blanco */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/70" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/30 via-transparent to-transparent opacity-50" aria-hidden="true" />
        
        <div className="relative py-20 md:py-28 w-full">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-white/30">
                <span className="text-sm font-semibold text-white uppercase tracking-wide">
                  Casos de Éxito
                </span>
              </div>
              <h1 className="mb-6 text-white drop-shadow-2xl text-5xl md:text-6xl lg:text-7xl font-bold">
                Historias que impulsan el negocio
              </h1>
              <p className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed drop-shadow-lg">
                Casos reales de incorporación exitosa en diferentes sectores.<br />
                Resultados medibles, procesos ágiles y crecimiento compartido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl shadow-xl border border-border"
              >
                {/* Header con OVERLAY OSCURO y texto BLANCO */}
                <header className="relative overflow-hidden h-72 md:h-96">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={caseStudy.image}
                    alt={`${caseStudy.sector} - ${caseStudy.company}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* OVERLAY OSCURO para texto blanco */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-transparent opacity-40" aria-hidden="true" />
                  
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-brand-red text-white mb-4 self-start shadow-lg">
                      {caseStudy.sector}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-xl">
                      {caseStudy.company}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-base text-white/95 font-medium">
                      <span className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Cierre en {caseStudy.metrics.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        {caseStudy.metrics.growth}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        {caseStudy.metrics.team}
                      </span>
                    </div>
                  </div>
                </header>

                {/* Content con CONTRASTE */}
                <div className="p-8 md:p-10 bg-white">
                  <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-brand-red">Desafío</h4>
                      <p className="text-neutral-900 text-lg leading-relaxed">{caseStudy.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-brand-red">Solución</h4>
                      <p className="text-neutral-900 text-lg leading-relaxed">{caseStudy.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-bold text-xl mb-4 text-brand-red">Resultados</h4>
                      <ul className="space-y-3">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="h-6 w-6 text-brand-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-neutral-900 font-medium text-lg">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics con CONTRASTE */}
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-6 w-6 text-brand-red" />
                        <h5 className="font-bold text-sm text-neutral-700 uppercase tracking-wide">Tiempo de proceso</h5>
                      </div>
                      <p className="text-3xl font-bold text-neutral-900 mt-2">{caseStudy.metrics.time}</p>
                    </div>

                    <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="h-6 w-6 text-brand-red" />
                        <h5 className="font-bold text-sm text-neutral-700 uppercase tracking-wide">Crecimiento</h5>
                      </div>
                      <p className="text-3xl font-bold text-brand-red mt-2">{caseStudy.metrics.growth}</p>
                    </div>

                    <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="h-6 w-6 text-brand-red" />
                        <h5 className="font-bold text-sm text-neutral-700 uppercase tracking-wide">Equipo</h5>
                      </div>
                      <p className="text-3xl font-bold text-neutral-900 mt-2">{caseStudy.metrics.team}</p>
                    </div>
                  </div>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted-4">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Quiero resultados como estos</h2>
            <p className="text-lg text-muted-2 mb-8">
              Cada empresa es única, pero todas comparten el mismo objetivo: encontrar el talento 
              adecuado en el momento adecuado. Cuéntanos tu desafío.
            </p>
            <Link href="/contacto" className="btn-primary">
              Solicitar consulta gratuita
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
