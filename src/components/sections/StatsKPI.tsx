import { Users, Clock, Shield, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '1-2 semanas',
    label: 'Time-to-shortlist',
    description: 'Búsqueda directa, mapeo de mercado y entrevistas por competencias'
  },
  {
    icon: TrendingUp,
    value: '100%',
    label: 'Tasa de expedientes aprobados',
    description: 'Cumplimiento normativo y tiempos de incorporación garantizados'
  },
  {
    icon: Users,
    value: '95%',
    label: 'Ratio oferta/aceptación',
    description: 'Excelente experiencia de candidato y cero fricciones legales'
  },
  {
    icon: Shield,
    value: 'KPI-driven',
    label: 'Medición del éxito',
    description: 'NPS, confidencialidad, ética y calidad en cada proyecto'
  }
]

export function StatsKPI() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo medimos el éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KPI-driven: time-to-shortlist, ratio oferta/aceptación, NPS y tasa de expedientes aprobados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ibertalento-100 rounded-full mb-6 group-hover:bg-ibertalento-200 transition-colors">
                <stat.icon className="h-8 w-8 text-ibertalento-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-ibertalento-600 mb-2">24/7</div>
              <div className="text-gray-600">Soporte durante todo el proceso</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ibertalento-600 mb-2">15+</div>
              <div className="text-gray-600">Países de origen del talento</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ibertalento-600 mb-2">5 años</div>
              <div className="text-gray-600">De experiencia en el sector</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
