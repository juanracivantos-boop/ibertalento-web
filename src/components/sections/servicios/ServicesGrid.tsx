'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search, FileText, Building2, Users } from 'lucide-react'

const services = [
  {
    id: 'headhunting',
    title: 'Headhunting Especializado',
    icon: Search,
    description: 'Búsqueda y selección de talento latinoamericano cualificado con experiencia en tu sector específico.',
    features: [
      'Red de headhunters en 15+ países',
      'Evaluación técnica y cultural',
      'Verificación de referencias',
      'Entrevistas especializadas'
    ],
    process: '3-4 semanas',
    href: '/servicios/headhunting'
  },
  {
    id: 'tramites',
    title: 'Trámites de Extranjería',
    icon: FileText,
    description: 'Gestión completa de todos los trámites legales necesarios para la contratación internacional.',
    features: [
      'Visados de trabajo',
      'NIE y permisos de residencia',
      'Seguridad Social',
      'Contratos laborales'
    ],
    process: '6-8 semanas',
    href: '/servicios/tramites-extranjeria'
  },
  {
    id: 'sectores',
    title: 'Soluciones por Sector',
    icon: Building2,
    description: 'Especialización en los sectores que más necesitan talento: industria, servicios, hostelería y construcción.',
    features: [
      'Conocimiento sectorial profundo',
      'Perfiles específicos por sector',
      'Certificaciones requeridas',
      'Cultura empresarial adaptada'
    ],
    process: 'Personalizado',
    href: '/servicios/sectores'
  },
  {
    id: 'integracion',
    title: 'Integración y Seguimiento',
    icon: Users,
    description: 'Acompañamiento completo durante la incorporación y seguimiento post-contratación.',
    features: [
      'Onboarding personalizado',
      'Seguimiento de integración',
      'Resolución de dudas',
      'Evaluación del proceso'
    ],
    process: '2-3 semanas',
    href: '/servicios/integracion'
  }
]

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros servicios especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un enfoque integral que combina la mejor selección de talento con la gestión legal más completa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-ibertalento-100 rounded-lg flex items-center justify-center group-hover:bg-ibertalento-200 transition-colors">
                    <service.icon className="h-6 w-6 text-ibertalento-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <div className="text-sm text-ibertalento-600 font-medium">
                      Tiempo: {service.process}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-ibertalento-400 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-ibertalento-50 group-hover:border-ibertalento-300 group-hover:text-ibertalento-700 transition-colors"
                  onClick={() => window.location.href = service.href}
                >
                  Conocer más detalles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Integration */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Servicios integrados en un solo proceso
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Todos nuestros servicios están diseñados para trabajar en conjunto, 
              creando un flujo optimizado que garantiza resultados en 4 meses.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.id} className="text-center">
                <div className="w-16 h-16 bg-ibertalento-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.process}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
