import { Metadata } from 'next'
import { PageHeader } from '@/components/sections/PageHeader'
import { ServicesIntegrated } from '@/components/sections/servicios/ServicesIntegrated'
import { ServiceTile } from '@/components/sections/servicios/ServiceTile'
import { FAQServicios } from '@/components/sections/servicios/FAQServicios'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios - Selección y Trámites Legales',
  description: 'Servicios integrales: selección de personal especializada y gestión completa de trámites legales para incorporaciones internacionales.',
  keywords: ['selección personal', 'trámites extranjería', 'contratación internacional', 'visados trabajo', 'permisos residencia'],
}

export default function ServiciosPage() {
  return (
    <>
      <PageHeader 
        title="Servicios" 
        subtitle="Selección especializada, trámites de extranjería e integración en destino"
        badgeLabel="SERVICIOS"
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&fit=crop"
      />
      
      {/* Nuestros servicios especializados */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Nuestros servicios especializados</h2>
            <p className="text-lg text-neutral-600">
              Solución completa de principio a fin: desde la búsqueda hasta la incorporación efectiva.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceTile 
              icon="headhunting" 
              title="Headhunting especializado"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80&fit=crop"
            >
              Perfiles validados por competencias y tiempos ágiles.
            </ServiceTile>
            
            <ServiceTile 
              icon="tramites" 
              title="Trámites de extranjería"
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop"
            >
              Visados y permisos con acompañamiento completo.
            </ServiceTile>
            
            <ServiceTile 
              icon="sectores" 
              title="Soluciones por sector"
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&fit=crop"
            >
              Construcción, hostelería, industria y limpieza.
            </ServiceTile>
            
            <ServiceTile 
              icon="integracion" 
              title="Integración y seguimiento"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop"
            >
              Acompañamiento post‑incorporación y garantías.
            </ServiceTile>
          </div>
        </div>
      </section>
      
      {/* De los trámites a la incorporación */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&fit=crop" 
              alt="Proceso de trámites a incorporación" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Overlay más oscuro para mejor contraste */}
            <div className="absolute inset-0 bg-white/90" aria-hidden="true"></div>
            <div className="relative p-8 md:p-12 min-h-[320px] flex flex-col justify-center text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 drop-shadow-sm">
                De los trámites a la incorporación
              </h2>
              <p className="text-lg text-neutral-900 mx-auto max-w-3xl font-medium">
                Nos encargamos del proceso completo: desde la gestión de visados y permisos hasta la incorporación efectiva del candidato en tu empresa. Un servicio integral que elimina la complejidad burocrática.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <FAQServicios />
      
      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-12 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
              ¿Listo para encontrar tu equipo ideal?
            </h3>
            <p className="text-lg text-neutral-700 mb-8">
              Cuéntanos tu necesidad y te proponemos candidatos cualificados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center rounded-lg bg-brand-red px-6 py-3 text-white font-semibold hover:bg-brand-red-600 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/40"
              >
                Contactar ahora
              </Link>
              <Link 
                href="/proceso" 
                className="inline-flex items-center justify-center rounded-lg border-2 border-neutral-300 px-6 py-3 text-neutral-900 font-semibold hover:bg-neutral-50 transition-colors"
              >
                Ver nuestro proceso
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}