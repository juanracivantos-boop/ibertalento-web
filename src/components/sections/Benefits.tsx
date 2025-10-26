import { Shield, Clock, Users, TrendingUp, CheckCircle, Award } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: '100% Cumplimiento Legal',
    description: 'Todos los trámites de extranjería gestionados por nuestro despacho de abogados especializado.',
    details: ['Visados de trabajo', 'NIE y permisos', 'Seguridad Social', 'Contratos laborales']
  },
  {
    icon: Users,
    title: 'Selección Rigurosa',
    description: 'Headhunters especializados que conocen tanto el mercado español como el latinoamericano.',
    details: ['Evaluación técnica', 'Fit cultural', 'Verificación de referencias', 'Entrevistas especializadas']
  },
  {
    icon: Clock,
    title: 'Proceso Garantizado',
    description: 'Timeline claro de 4 meses con entregables en cada fase y seguimiento continuo.',
    details: ['Cronograma detallado', 'Entregables por fase', 'Seguimiento semanal', 'Garantía de cumplimiento']
  },
  {
    icon: TrendingUp,
    title: 'ROI Comprobado',
    description: 'Reducción de costes de contratación y mejora en la retención del talento.',
    details: ['Costes optimizados', 'Mayor retención', 'Productividad desde día 1', 'Reducción de rotación']
  },
  {
    icon: CheckCircle,
    title: 'Calidad Garantizada',
    description: '95% de tasa de éxito en colocaciones con seguimiento post-incorporación.',
    details: ['Tasa de éxito 95%', 'Seguimiento 6 meses', 'Garantía de satisfacción', 'Soporte continuo']
  },
  {
    icon: Award,
    title: 'Experiencia Comprobada',
    description: 'Más de 5 años especializados en talento latinoamericano para España.',
    details: ['150+ empresas', '500+ colocaciones', '15+ países', '4 sectores especializados']
  }
]

export function Benefits() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Cibertalento?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos la experiencia en headhunting con la especialización legal para ofrecerte un servicio integral único
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group p-6 rounded-xl border border-gray-200 hover:border-ibertalento-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-ibertalento-100 rounded-lg flex items-center justify-center group-hover:bg-ibertalento-200 transition-colors">
                    <benefit.icon className="h-6 w-6 text-ibertalento-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <ul className="space-y-1">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-xs text-gray-500">
                        <div className="w-1 h-1 bg-ibertalento-400 rounded-full flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cibertalento vs. Métodos tradicionales
            </h3>
            <p className="text-gray-600">
              Compara los resultados y beneficios de nuestro enfoque integral
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">6-12 meses</div>
              <div className="text-sm text-gray-600 mb-4">Proceso tradicional</div>
              <div className="text-xs text-gray-500">
                Búsqueda independiente + gestión legal separada + múltiples proveedores
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ibertalento-600 mb-2">4 meses</div>
              <div className="text-sm text-gray-600 mb-4">Con Cibertalento</div>
              <div className="text-xs text-gray-500">
                Proceso integral con un solo proveedor especializado
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50% menos</div>
              <div className="text-sm text-gray-600 mb-4">Tiempo ahorrado</div>
              <div className="text-xs text-gray-500">
                Reducción significativa en tiempo y costes operativos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
