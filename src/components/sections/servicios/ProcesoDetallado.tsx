'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Clock, Users, FileText, Shield, Plane, Home, ArrowRight } from 'lucide-react'

const procesoDetallado = [
  {
    fase: 1,
    titulo: 'Briefing y Análisis',
    duracion: '1-2 semanas',
    icono: FileText,
    descripcion: 'Entendemos a fondo tus necesidades específicas y definimos el perfil ideal.',
    actividades: [
      'Reunión inicial con stakeholders',
      'Análisis de requisitos del puesto',
      'Definición del perfil ideal',
      'Estudio de la cultura empresarial',
      'Planificación del proceso completo'
    ],
    entregables: [
      'Documento de briefing',
      'Perfil de candidato ideal',
      'Cronograma detallado',
      'Plan de comunicación'
    ],
    responsable: 'Cibertalento + Cliente'
  },
  {
    fase: 2,
    titulo: 'Búsqueda y Selección',
    duracion: '3-4 semanas',
    icono: Users,
    descripcion: 'Nuestros headhunters especializados buscan y evalúan candidatos en Latinoamérica.',
    actividades: [
      'Búsqueda activa en redes profesionales',
      'Contacto directo con candidatos',
      'Evaluación técnica y cultural',
      'Entrevistas presenciales y virtuales',
      'Verificación de referencias laborales'
    ],
    entregables: [
      'Lista de candidatos preseleccionados',
      'Informes de evaluación',
      'Videos de presentación',
      'Candidatos finales (3-5)'
    ],
    responsable: 'Cibertalento'
  },
  {
    fase: 3,
    titulo: 'Pre-validación Legal',
    duracion: '2-3 semanas',
    icono: Shield,
    descripcion: 'Verificamos la elegibilidad legal y preparamos toda la documentación necesaria.',
    actividades: [
      'Verificación de elegibilidad para visado',
      'Recopilación de documentación personal',
      'Validación de títulos y certificaciones',
      'Preparación del expediente completo',
      'Revisión legal preliminar'
    ],
    entregables: [
      'Expediente documental completo',
      'Informe de elegibilidad legal',
      'Documentación validada',
      'Plan de trámites'
    ],
    responsable: 'Cibertalento'
  },
  {
    fase: 4,
    titulo: 'Oferta y Contrato',
    duracion: '1-2 semanas',
    icono: CheckCircle,
    descripcion: 'Presentamos candidatos finales y gestionamos la oferta laboral y contrato.',
    actividades: [
      'Presentación de candidatos seleccionados',
      'Negociación de condiciones laborales',
      'Preparación de contrato de trabajo',
      'Firma de acuerdo de incorporación',
      'Inicio de trámites legales oficiales'
    ],
    entregables: [
      'Candidatos finales presentados',
      'Contrato de trabajo firmado',
      'Acuerdo de incorporación',
      'Inicio de trámites oficiales'
    ],
    responsable: 'Cibertalento + Cliente'
  },
  {
    fase: 5,
    titulo: 'Trámites de Extranjería',
    duracion: '6-8 semanas',
    icono: Clock,
    descripcion: 'Gestionamos todos los trámites legales: visado, NIE, permisos de trabajo.',
    actividades: [
      'Solicitud de visado de trabajo',
      'Obtención del NIE',
      'Permiso de trabajo y residencia',
      'Inscripción en Seguridad Social',
      'Seguimiento de expedientes'
    ],
    entregables: [
      'Visado de trabajo concedido',
      'NIE obtenido',
      'Permiso de trabajo',
      'Alta en Seguridad Social'
    ],
    responsable: 'Cibertalento'
  },
  {
    fase: 6,
    titulo: 'Viaje y Llegada',
    duracion: '1 semana',
    icono: Plane,
    descripcion: 'Coordinamos el viaje, recogida en aeropuerto y primeros pasos en España.',
    actividades: [
      'Coordinación del viaje',
      'Recogida en aeropuerto',
      'Entrega de documentación',
      'Primeras gestiones administrativas',
      'Orientación inicial'
    ],
    entregables: [
      'Profesional en España',
      'Documentación entregada',
      'Primeras gestiones completadas',
      'Orientación inicial realizada'
    ],
    responsable: 'Cibertalento'
  },
  {
    fase: 7,
    titulo: 'Onboarding',
    duracion: '2-3 semanas',
    icono: Home,
    descripcion: 'Acompañamos la integración del profesional en tu empresa y entorno.',
    actividades: [
      'Presentación en la empresa',
      'Seguimiento de integración',
      'Resolución de dudas y problemas',
      'Evaluación del proceso',
      'Seguimiento post-incorporación'
    ],
    entregables: [
      'Profesional integrado',
      'Informe de integración',
      'Evaluación del proceso',
      'Seguimiento 6 meses'
    ],
    responsable: 'Cibertalento + Cliente'
  }
]

export function ProcesoDetallado() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proceso detallado: 4 meses al éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso estructurado y transparente con entregables claros en cada fase
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {procesoDetallado.map((fase, index) => (
              <Card key={fase.fase} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-4 gap-0">
                    {/* Fase Info */}
                    <div className="lg:col-span-1 bg-ibertalento-50 p-6 border-r border-ibertalento-200">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-ibertalento-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <fase.icono className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-ibertalento-600 mb-2">
                          Fase {fase.fase}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {fase.titulo}
                        </h3>
                        <div className="text-sm text-gray-600 mb-4">
                          {fase.duracion}
                        </div>
                        <div className="text-xs text-gray-500">
                          Responsable: {fase.responsable}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {fase.descripcion}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Actividades */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            Actividades principales
                          </h4>
                          <ul className="space-y-2">
                            {fase.actividades.map((actividad, actIndex) => (
                              <li key={actIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-ibertalento-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{actividad}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Entregables */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <FileText className="h-4 w-4 text-blue-500 mr-2" />
                            Entregables
                          </h4>
                          <ul className="space-y-2">
                            {fase.entregables.map((entregable, entIndex) => (
                              <li key={entIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{entregable}</span>
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
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Resumen del timeline
            </h3>
            <p className="text-gray-600">
              Proceso completo optimizado para máxima eficiencia y resultados
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-ibertalento-600 mb-2">4</div>
              <div className="text-sm text-gray-600">meses totales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ibertalento-600 mb-2">7</div>
              <div className="text-sm text-gray-600">fases estructuradas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ibertalento-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">tasa de éxito</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ibertalento-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">soporte continuo</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="ibertalento"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Inicia tu proceso ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
