import { Card, CardContent } from '@/components/ui/card'
import { Users, Building, CheckCircle, Clock, Shield, FileText } from 'lucide-react'

const responsabilidades = [
  {
    fase: 'Briefing y Análisis',
    ibertalento: [
      'Facilitar cuestionarios y entrevistas',
      'Documentar requisitos del puesto',
      'Definir perfil ideal',
      'Crear cronograma detallado'
    ],
    cliente: [
      'Proporcionar información detallada',
      'Participar en reuniones de briefing',
      'Validar perfil y requisitos',
      'Aprobar cronograma propuesto'
    ]
  },
  {
    fase: 'Búsqueda y Selección',
    ibertalento: [
      'Ejecutar búsqueda activa',
      'Realizar entrevistas técnicas',
      'Verificar referencias',
      'Presentar candidatos finales'
    ],
    cliente: [
      'Revisar candidatos presentados',
      'Participar en entrevistas finales',
      'Tomar decisión de selección',
      'Proporcionar feedback'
    ]
  },
  {
    fase: 'Trámites Legales',
    ibertalento: [
      'Gestionar toda la documentación',
      'Realizar trámites oficiales',
      'Seguimiento de expedientes',
      'Comunicar avances'
    ],
    cliente: [
      'Firmar contrato de trabajo',
      'Proporcionar documentación empresarial',
      'Mantener comunicación fluida',
      'Preparar integración'
    ]
  },
  {
    fase: 'Incorporación',
    ibertalento: [
      'Coordinar viaje y llegada',
      'Acompañar primeras gestiones',
      'Facilitar integración',
      'Seguimiento post-incorporación'
    ],
    cliente: [
      'Recibir al profesional',
      'Realizar onboarding empresarial',
      'Proporcionar herramientas de trabajo',
      'Evaluar integración'
    ]
  }
]

const entregables = [
  {
    fase: 'Fase 1-2',
    entregable: 'Documento de briefing y candidatos preseleccionados',
    responsable: 'Cibertalento',
    tiempo: '4-6 semanas'
  },
  {
    fase: 'Fase 3-4',
    entregable: 'Candidatos finales y contrato firmado',
    responsable: 'Cibertalento + Cliente',
    tiempo: '3-5 semanas'
  },
  {
    fase: 'Fase 5',
    entregable: 'Documentación legal completa',
    responsable: 'Cibertalento',
    tiempo: '6-8 semanas'
  },
  {
    fase: 'Fase 6-7',
    entregable: 'Profesional integrado y funcionando',
    responsable: 'Cibertalento + Cliente',
    tiempo: '3-4 semanas'
  }
]

export function Responsabilidades() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Responsabilidades y entregables
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Claridad total sobre quién hace qué y cuándo. Un proceso colaborativo con responsabilidades bien definidas.
          </p>
        </div>

        {/* Responsabilidades por fase */}
        <div className="space-y-8 mb-16">
          {responsabilidades.map((responsabilidad, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Fase */}
                  <div className="lg:col-span-1 bg-ibertalento-50 p-6 border-r border-ibertalento-200">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-ibertalento-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {responsabilidad.fase}
                      </h3>
                    </div>
                  </div>

                  {/* Responsabilidades */}
                  <div className="lg:col-span-2 p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Cibertalento */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Building className="h-5 w-5 text-ibertalento-600" />
                          <h4 className="font-semibold text-gray-900">Cibertalento</h4>
                        </div>
                        <ul className="space-y-2">
                          {responsabilidad.ibertalento.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cliente */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Users className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900">Cliente</h4>
                        </div>
                        <ul className="space-y-2">
                          {responsabilidad.cliente.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Entregables */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Entregables por fase
            </h3>
            <p className="text-gray-600">
              Documentos y resultados concretos que recibirás en cada etapa del proceso
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {entregables.map((entregable, index) => (
              <Card key={index} className="border-l-4 border-l-ibertalento-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-ibertalento-100 rounded-full flex items-center justify-center">
                        <FileText className="h-4 w-4 text-ibertalento-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{entregable.fase}</div>
                        <div className="text-sm text-gray-500">{entregable.tiempo}</div>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {entregable.entregable}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>Responsable: {entregable.responsable}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comunicación y seguimiento */}
        <div className="bg-ibertalento-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comunicación y seguimiento
            </h3>
            <p className="text-gray-600">
              Mantenemos una comunicación constante y transparente durante todo el proceso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Clock className="h-8 w-8 text-ibertalento-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reportes semanales</h4>
              <p className="text-sm text-gray-600">
                Informes detallados del progreso y próximos pasos
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Users className="h-8 w-8 text-ibertalento-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Contacto directo</h4>
              <p className="text-sm text-gray-600">
                Acceso directo al equipo responsable de tu proyecto
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Shield className="h-8 w-8 text-ibertalento-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Soporte 24/7</h4>
              <p className="text-sm text-gray-600">
                Disponibilidad para resolver dudas e incidencias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
