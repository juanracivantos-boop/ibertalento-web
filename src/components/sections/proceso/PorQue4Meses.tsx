import { Card, CardContent } from '@/components/ui/card'
import { Clock, CheckCircle, Shield, Users, FileText, Plane, Home } from 'lucide-react'

const razones = [
  {
    icon: Users,
    title: 'Selección rigurosa',
    description: 'Tiempo necesario para una búsqueda exhaustiva y evaluación completa de candidatos.',
    tiempo: '3-4 semanas',
    detalles: [
      'Búsqueda activa en múltiples canales',
      'Evaluación técnica y cultural',
      'Verificación de referencias',
      'Entrevistas especializadas'
    ]
  },
  {
    icon: FileText,
    title: 'Trámites legales',
    description: 'Los procesos administrativos oficiales requieren este tiempo para su correcta tramitación.',
    tiempo: '6-8 semanas',
    detalles: [
      'Solicitud de visado de trabajo',
      'Obtención del NIE',
      'Permiso de trabajo y residencia',
      'Inscripción en Seguridad Social'
    ]
  },
  {
    icon: Shield,
    title: 'Cumplimiento normativo',
    description: 'Garantizar el cumplimiento de todas las normativas españolas y europeas.',
    tiempo: 'Continuo',
    detalles: [
      'Verificación de documentación',
      'Cumplimiento de normativas',
      'Validación de certificaciones',
      'Revisión legal completa'
    ]
  },
  {
    icon: Plane,
    title: 'Coordinación logística',
    description: 'Preparación y coordinación del viaje y primeros pasos en España.',
    tiempo: '1-2 semanas',
    detalles: [
      'Coordinación del viaje',
      'Recogida en aeropuerto',
      'Primeras gestiones',
      'Orientación inicial'
    ]
  },
  {
    icon: Home,
    title: 'Integración y onboarding',
    description: 'Acompañamiento en la integración del profesional en la empresa y entorno.',
    tiempo: '2-3 semanas',
    detalles: [
      'Presentación en la empresa',
      'Seguimiento de integración',
      'Resolución de dudas',
      'Evaluación del proceso'
    ]
  }
]

const comparacionTiempos = [
  {
    metodo: 'Proceso tradicional',
    tiempo: '6-12 meses',
    problemas: [
      'Múltiples proveedores',
      'Falta de coordinación',
      'Retrasos administrativos',
      'Costes elevados'
    ],
    color: 'red'
  },
  {
    metodo: 'Cibertalento',
    tiempo: '4 meses',
    beneficios: [
      'Un solo proveedor',
      'Coordinación integral',
      'Gestión proactiva',
      'Costes optimizados'
    ],
    color: 'green'
  }
]

export function PorQue4Meses() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué 4 meses?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Este tiempo nos permite garantizar la calidad del proceso y el cumplimiento de todos los requisitos legales
          </p>
        </div>

        {/* Razones detalladas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {razones.map((razon) => (
            <Card key={razon.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-ibertalento-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <razon.icon className="h-8 w-8 text-ibertalento-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {razon.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {razon.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-ibertalento-100 text-ibertalento-700 rounded-full text-sm font-medium">
                    <Clock className="h-4 w-4 mr-1" />
                    {razon.tiempo}
                  </div>
                </div>

                <ul className="space-y-2">
                  {razon.detalles.map((detalle, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparación de tiempos */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comparación de tiempos
            </h3>
            <p className="text-gray-600">
              Nuestro proceso optimizado vs. métodos tradicionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {comparacionTiempos.map((item) => (
              <Card key={item.metodo} className={`border-2 ${
                item.color === 'red' ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'
              }`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h4 className={`text-xl font-bold mb-2 ${
                      item.color === 'red' ? 'text-red-800' : 'text-green-800'
                    }`}>
                      {item.metodo}
                    </h4>
                    <div className={`text-3xl font-bold ${
                      item.color === 'red' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {item.tiempo}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {(item.problemas || item.beneficios)?.map((punto, index) => (
                      <li key={index} className={`flex items-start space-x-2 text-sm ${
                        item.color === 'red' ? 'text-red-700' : 'text-green-700'
                      }`}>
                        {item.color === 'red' ? (
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        ) : (
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        )}
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Factores que influyen en el tiempo */}
        <div className="bg-ibertalento-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Factores que influyen en el tiempo
            </h3>
            <p className="text-gray-600">
              Variables que pueden afectar la duración del proceso
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Factores internos (controlables)</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Claridad en los requisitos</div>
                    <div className="text-sm text-gray-600">Briefing detallado acelera el proceso</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Respuesta rápida del cliente</div>
                    <div className="text-sm text-gray-600">Decisiones ágiles evitan retrasos</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Documentación completa</div>
                    <div className="text-sm text-gray-600">Preparación previa acelera trámites</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Factores externos (administrativos)</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Tiempos de respuesta oficiales</div>
                    <div className="text-sm text-gray-600">Administraciones públicas (6-8 semanas)</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Disponibilidad de citas</div>
                    <div className="text-sm text-gray-600">Embajadas y consulados</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Volumen de solicitudes</div>
                    <div className="text-sm text-gray-600">Picos de demanda estacionales</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
