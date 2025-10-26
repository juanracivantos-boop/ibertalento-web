import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Shield, Building2, CheckCircle, Clock, FileText, Plane } from 'lucide-react'

const servicios = [
  {
    id: 'headhunting',
    title: 'Headhunting Especializado',
    icon: Users,
    description: 'Selección rigurosa de talento latinoamericano con experiencia en headhunting y conocimiento del mercado español.',
    features: [
      'Red de headhunters en Latinoamérica',
      'Evaluación técnica y cultural',
      'Entrevistas especializadas',
      'Verificación de referencias',
      'Fit cultural con tu empresa'
    ],
    process: [
      { step: 'Briefing', icon: FileText, description: 'Análisis de necesidades' },
      { step: 'Búsqueda', icon: Users, description: 'Selección activa' },
      { step: 'Evaluación', icon: CheckCircle, description: 'Screening riguroso' },
      { step: 'Presentación', icon: ArrowRight, description: 'Candidatos finales' }
    ],
    time: '3-4 semanas',
    price: 'Incluido en servicio integral'
  },
  {
    id: 'tramites',
    title: 'Trámites de Extranjería',
    icon: Shield,
    description: 'Gestión legal completa de todos los trámites necesarios para la contratación de personal extranjero.',
    features: [
      'Visados de trabajo',
      'NIE y permisos de residencia',
      'Contratos laborales',
      'Seguridad Social',
      'Cumplimiento RGPD'
    ],
    process: [
      { step: 'Documentación', icon: FileText, description: 'Recopilación completa' },
      { step: 'Tramitación', icon: Shield, description: 'Gestión legal' },
      { step: 'Seguimiento', icon: Clock, description: 'Control de plazos' },
      { step: 'Entrega', icon: CheckCircle, description: 'Documentación final' }
    ],
    time: '6-8 semanas',
    price: 'Incluido en servicio integral'
  },
  {
    id: 'sectores',
    title: 'Soluciones por Sector',
    icon: Building2,
    description: 'Especialización en los sectores que más necesitan talento: industria, servicios, hostelería y construcción.',
    features: [
      'Conocimiento sectorial específico',
      'Perfiles especializados',
      'Certificaciones requeridas',
      'Normativas sectoriales',
      'Red de contactos especializada'
    ],
    process: [
      { step: 'Análisis', icon: FileText, description: 'Requisitos sectoriales' },
      { step: 'Búsqueda', icon: Users, description: 'Talent pool especializado' },
      { step: 'Validación', icon: CheckCircle, description: 'Certificaciones' },
      { step: 'Incorporación', icon: Plane, description: 'Onboarding sectorial' }
    ],
    time: '4 meses',
    price: 'Servicio integral personalizado'
  }
]

export function ServiciosGrid() {
  return (
    <section id="servicios-grid" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros servicios especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un enfoque integral que combina la mejor selección con la gestión legal más completa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <Card key={servicio.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-ibertalento-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ibertalento-200 transition-colors">
                  <servicio.icon className="h-8 w-8 text-ibertalento-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {servicio.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {servicio.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {servicio.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Proceso:</h4>
                  <div className="space-y-2">
                    {servicio.process.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm">
                        <div className="w-6 h-6 bg-ibertalento-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-3 w-3 text-ibertalento-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">{step.step}</span>
                          <span className="text-gray-500 ml-2">- {step.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time and Price */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Tiempo</div>
                      <div className="font-semibold text-gray-900">{servicio.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Precio</div>
                      <div className="font-semibold text-ibertalento-600">{servicio.price}</div>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-ibertalento-50 group-hover:border-ibertalento-300 group-hover:text-ibertalento-700 transition-colors"
                >
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Integration Notice */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Servicio integral personalizado
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Todos nuestros servicios están diseñados para trabajar en conjunto, ofreciendo una solución 
              completa y personalizada para cada empresa y sector específico.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-ibertalento-600 mb-2">1</div>
                <div className="text-sm text-gray-600">Análisis de necesidades</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ibertalento-600 mb-2">2</div>
                <div className="text-sm text-gray-600">Servicios integrados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ibertalento-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Resultado garantizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
