import { Card, CardContent } from '@/components/ui/card'
import { Clock, Users, FileText, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    phase: 'Fase 1',
    title: 'Análisis y Briefing',
    duration: '1-2 semanas',
    icon: Users,
    description: 'Entendemos tus necesidades específicas y definimos el perfil ideal.',
    activities: [
      'Análisis de requisitos',
      'Definición del perfil',
      'Estudio de cultura empresarial',
      'Planificación del proceso'
    ]
  },
  {
    phase: 'Fase 2',
    title: 'Búsqueda y Selección',
    duration: '3-4 semanas',
    icon: Users,
    description: 'Nuestros headhunters especializados buscan y evalúan candidatos.',
    activities: [
      'Búsqueda activa en LATAM',
      'Evaluación técnica',
      'Entrevistas especializadas',
      'Verificación de referencias'
    ]
  },
  {
    phase: 'Fase 3',
    title: 'Gestión Legal',
    duration: '6-8 semanas',
    icon: FileText,
    description: 'Gestionamos todos los trámites legales necesarios.',
    activities: [
      'Solicitud de visados',
      'Obtención del NIE',
      'Permisos de trabajo',
      'Seguridad Social'
    ]
  },
  {
    phase: 'Fase 4',
    title: 'Incorporación',
    duration: '2-3 semanas',
    icon: CheckCircle,
    description: 'Coordinamos la llegada y seguimiento de integración.',
    activities: [
      'Coordinación del viaje',
      'Entrega de documentación',
      'Presentación en empresa',
      'Seguimiento de integración'
    ]
  }
]

export function ProcessOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proceso integral en 4 fases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso estructurado que garantiza la incorporación exitosa de talento cualificado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={step.phase} className="relative group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                {/* Phase Number */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-ibertalento-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-ibertalento-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ibertalento-200 transition-colors">
                  <step.icon className="h-6 w-6 text-ibertalento-600" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-ibertalento-600 font-medium mb-1">{step.phase}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Actividades:</h4>
                    <ul className="space-y-1">
                      {step.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start space-x-2 text-xs text-gray-600">
                          <div className="w-1 h-1 bg-ibertalento-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-ibertalento-200 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.phase} className="text-center">
                  <div className="w-16 h-16 bg-white border-4 border-ibertalento-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="h-8 w-8 text-ibertalento-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total Time */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border">
            <Clock className="h-6 w-6 text-ibertalento-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900">4 meses</div>
              <div className="text-sm text-gray-600">Tiempo total del proceso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
