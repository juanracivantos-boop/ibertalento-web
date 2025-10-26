import { ServiceTile } from './ServiceTile'

/**
 * ServicesIntegrated component
 * Visual mosaic showcasing 4 integrated services
 */

export function ServicesIntegrated() {
  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Servicios integrados</h2>
          <p className="text-lg text-neutral-600">
            Solución completa de principio a fin: desde la búsqueda hasta la incorporación efectiva.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceTile 
            icon="user-check" 
            title="Headhunting especializado"
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80&fit=crop"
          >
            Perfiles validados por competencias técnicas y tiempos ágiles de selección.
          </ServiceTile>
          
          <ServiceTile 
            icon="file-signature" 
            title="Trámites de extranjería"
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop"
          >
            Visados de trabajo, permisos de residencia y acompañamiento completo.
          </ServiceTile>
          
          <ServiceTile 
            icon="layers" 
            title="Soluciones por sector"
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&fit=crop"
          >
            Especialización en construcción, hostelería, industria y limpieza.
          </ServiceTile>
          
          <ServiceTile 
            icon="handshake" 
            title="Integración y seguimiento"
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop"
          >
            Acompañamiento post-incorporación, seguimiento y garantías de reemplazo.
          </ServiceTile>
        </div>
      </div>
    </section>
  )
}

