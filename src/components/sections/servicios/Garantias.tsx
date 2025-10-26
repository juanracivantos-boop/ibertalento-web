import { Card, CardContent } from '@/components/ui/card'
import { Shield, CheckCircle, Clock, Users, Award, Phone } from 'lucide-react'

const garantias = [
  {
    icon: Shield,
    title: 'Garantía de Cumplimiento Legal',
    description: '100% de cumplimiento en todos los trámites de extranjería y normativas laborales.',
    details: [
      'Trámites gestionados por abogados especializados',
      'Cumplimiento de normativas españolas y europeas',
      'Documentación legal completa y actualizada',
      'Seguimiento de cambios normativos'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Garantía de Calidad',
    description: '95% de tasa de éxito en colocaciones con seguimiento post-incorporación.',
    details: [
      'Selección rigurosa con múltiples filtros',
      'Verificación de referencias laborales',
      'Evaluación técnica y cultural',
      'Seguimiento de 6 meses post-incorporación'
    ]
  },
  {
    icon: Clock,
    title: 'Garantía de Tiempo',
    description: 'Proceso completado en 4 meses o compensación por retrasos no imputables al cliente.',
    details: [
      'Timeline claro con entregables por fase',
      'Seguimiento semanal del progreso',
      'Compensación por retrasos administrativos',
      'Comunicación proactiva de incidencias'
    ]
  },
  {
    icon: Users,
    title: 'Garantía de Satisfacción',
    description: 'Satisfacción garantizada o reemplazo del profesional sin coste adicional.',
    details: [
      'Período de garantía de 6 meses',
      'Reemplazo gratuito si no cumple expectativas',
      'Soporte continuo durante la garantía',
      'Evaluación de satisfacción trimestral'
    ]
  }
]

const certificaciones = [
  {
    name: 'Colegio de Abogados de Madrid',
    description: 'Despacho registrado y colegiado',
    icon: Award
  },
  {
    name: 'Agencia Española de Protección de Datos',
    description: 'Cumplimiento RGPD certificado',
    icon: Shield
  },
  {
    name: 'Ministerio de Trabajo',
    description: 'Autorización para gestión de extranjería',
    icon: CheckCircle
  }
]

export function Garantias() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestras garantías
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu tranquilidad es nuestra prioridad. Por eso ofrecemos garantías claras y medibles en cada aspecto de nuestro servicio.
          </p>
        </div>

        {/* Garantías Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {garantias.map((garantia) => (
            <Card key={garantia.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ibertalento-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <garantia.icon className="h-6 w-6 text-ibertalento-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {garantia.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {garantia.description}
                    </p>
                    <ul className="space-y-2">
                      {garantia.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificaciones */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certificaciones y autorizaciones
            </h3>
            <p className="text-gray-600">
              Contamos con todas las certificaciones y autorizaciones necesarias para operar legalmente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certificaciones.map((cert) => (
              <div key={cert.name} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <cert.icon className="h-8 w-8 text-ibertalento-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soporte 24/7 */}
        <div className="bg-ibertalento-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-ibertalento-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Soporte 24/7 durante todo el proceso
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Nuestro equipo está disponible para resolver cualquier duda o incidencia 
              durante todo el proceso de 4 meses y durante el período de garantía.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-ibertalento-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ibertalento-600 mb-2">&lt; 2h</div>
                <div className="text-sm text-gray-600">Tiempo de respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ibertalento-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Resolución de incidencias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
