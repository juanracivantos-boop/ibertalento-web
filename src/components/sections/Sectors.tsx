import { SectorCard } from './SectorCard'

/**
 * Sectors component
 * Showcases main sectors with improved legibility
 */

export function Sectors() {
  return (
    <section id="sectores" className="py-8 md:py-10 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="mb-4">Sectores especializados</h2>
          <p className="text-lg text-neutral-600">
            Contamos con experiencia específica en los sectores que más necesitan talento cualificado en España.
          </p>
        </div>
        
        {/* Sectors grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SectorCard
            title="Industria"
            href="/sectores#industria"
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&fit=crop"
          >
            Operarios especializados, técnicos de mantenimiento y supervisores de producción.
          </SectorCard>
          
          <SectorCard
            title="Construcción"
            href="/sectores#construccion"
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop"
          >
            Albañiles, electricistas, fontaneros y personal cualificado con certificaciones.
          </SectorCard>
          
          <SectorCard
            title="Hostelería"
            href="/sectores#hosteleria"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop"
          >
            Chefs, camareros, personal de cocina y recepcionistas con experiencia.
          </SectorCard>
          
          <SectorCard
            title="Limpieza"
            href="/sectores#limpieza"
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&fit=crop"
          >
            Personal especializado en limpieza profesional y mantenimiento de instalaciones.
          </SectorCard>
        </div>
      </div>
    </section>
  )
}
