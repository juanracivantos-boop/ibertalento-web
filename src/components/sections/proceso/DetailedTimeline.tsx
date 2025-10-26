import { Card, CardContent } from '@/components/ui/card'
import { FileText, Users, CheckCircle, Clock, Plane, Home, Award } from 'lucide-react'

const detailedSteps = [
  {
    id: 1,
    title: 'Briefing y Análisis',
    duration: '1-2 semanas',
    icon: FileText,
    description: 'Entendemos tus necesidades específicas, perfiles requeridos y cultura empresarial.',
    activities: [
      'Análisis de requisitos del puesto',
      'Definición del perfil ideal',
      'Estudio de la cultura empresarial',
      'Planificación del proceso'
    ],
    deliverables: [
      'Documento de requisitos',
      'Perfil de candidato ideal',
      'Plan de trabajo personalizado'
    ],
    responsibility: 'Cibertalento + Cliente',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Búsqueda y Selección',
    duration: '3-4 semanas',
    icon: Users,
    description: 'Nuestros headhunters especializados buscan y evalúan candidatos en Latinoamérica.',
    activities: [
      'Búsqueda activa en redes profesionales',
      'Evaluación técnica y cultural',
      'Entrevistas presenciales y virtuales',
      'Verificación de referencias'
    ],
    deliverables: [
      'Lista de candidatos preseleccionados',
      'Informes de evaluación',
      'Candidatos finales recomendados'
    ],
    responsibility: 'Cibertalento',
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Pre-validación Legal',
    duration: '2-3 semanas',
    icon: CheckCircle,
    description: 'Verificamos la elegibilidad legal y preparamos toda la documentación necesaria.',
    activities: [
      'Verificación de elegibilidad para visado',
      'Recopilación de documentación',
      'Validación de títulos y certificaciones',
      'Preparación del expediente'
    ],
    deliverables: [
      'Informe de elegibilidad legal',
      'Documentación completa',
      'Expediente listo para trámites'
    ],
    responsibility: 'Cibertalento',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Oferta y Contrato',
    duration: '1-2 semanas',
    icon: FileText,
    description: 'Presentamos candidatos finales y gestionamos la oferta laboral y contrato.',
    activities: [
      'Presentación de candidatos seleccionados',
      'Negociación de condiciones laborales',
      'Firma de contrato de trabajo',
      'Inicio de trámites legales'
    ],
    deliverables: [
      'Candidatos finales presentados',
      'Contrato de trabajo firmado',
      'Inicio de trámites oficiales'
    ],
    responsibility: 'Cibertalento + Cliente',
    color: 'bg-orange-500'
  },
  {
    id: 5,
    title: 'Trámites de Extranjería',
    duration: '6-8 semanas',
    icon: Clock,
    description: 'Gestionamos todos los trámites legales: visado, NIE, permisos de trabajo.',
    activities: [
      'Solicitud de visado de trabajo',
      'Obtención del NIE',
      'Permiso de trabajo',
      'Seguridad Social'
    ],
    deliverables: [
      'Visado de trabajo aprobado',
      'NIE obtenido',
      'Permisos de trabajo',
      'Alta en Seguridad Social'
    ],
    responsibility: 'Cibertalento',
    color: 'bg-red-500'
  },
  {
    id: 6,
    title: 'Viaje y Llegada',
    duration: '1 semana',
    icon: Plane,
    description: 'Coordinamos el viaje, recogida en aeropuerto y primeros pasos en España.',
    activities: [
      'Coordinación del viaje',
      'Recogida en aeropuerto',
      'Entrega de documentación',
      'Primeras gestiones'
    ],
    deliverables: [
      'Viaje coordinado',
      'Llegada a España',
      'Documentación entregada',
      'Primeras gestiones completadas'
    ],
    responsibility: 'Cibertalento',
    color: 'bg-indigo-500'
  },
  {
    id: 7,
    title: 'Onboarding',
    duration: '2-3 semanas',
    icon: Home,
    description: 'Acompañamos la integración del profesional en tu empresa y entorno.',
    activities: [
      'Presentación en la empresa',
      'Seguimiento de integración',
      'Resolución de dudas',
      'Evaluación del proceso'
    ],
    deliverables: [
      'Profesional integrado',
      'Seguimiento de adaptación',
      'Evaluación del proceso',
      'Soporte continuo'
    ],
    responsibility: 'Cibertalento + Cliente',
    color: 'bg-teal-500'
  }
]

export function DetailedTimeline() {
  return (
    <section id="timeline-detallado" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Timeline detallado del proceso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada fase tiene actividades específicas, entregables claros y responsabilidades definidas
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ibertalento-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {detailedSteps.map((step, index) => (
              <div key={step.id} className="relative flex items-start space-x-8">
                {/* Timeline Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-medium whitespace-nowrap">
                    {step.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {step.id}. {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 mb-1">Responsabilidad</div>
                          <div className="font-medium text-gray-700">{step.responsibility}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Activities */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <div className={`w-2 h-2 ${step.color} rounded-full mr-2`}></div>
                            Actividades principales
                          </h4>
                          <ul className="space-y-2">
                            {step.activities.map((activity, activityIndex) => (
                              <li key={activityIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-ibertalento-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Award className="h-4 w-4 text-ibertalento-600 mr-2" />
                            Entregables
                          </h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Time Summary */}
        <div className="mt-16 bg-ibertalento-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Resumen del tiempo total
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-ibertalento-600">1-2</div>
                <div className="text-sm text-gray-600">semanas</div>
                <div className="text-xs text-gray-500">Análisis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ibertalento-600">3-4</div>
                <div className="text-sm text-gray-600">semanas</div>
                <div className="text-xs text-gray-500">Selección</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ibertalento-600">6-8</div>
                <div className="text-sm text-gray-600">semanas</div>
                <div className="text-xs text-gray-500">Trámites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ibertalento-600">2-3</div>
                <div className="text-sm text-gray-600">semanas</div>
                <div className="text-xs text-gray-500">Incorporación</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-ibertalento-200">
              <div className="text-4xl font-bold text-gray-900">4 meses</div>
              <div className="text-lg text-gray-600">Tiempo total del proceso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
