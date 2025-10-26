'use client'

import { AlertTriangle, CheckCircle, Users, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ProblemSolution() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                <AlertTriangle className="h-4 w-4" />
                <span>Problema actual</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                España necesita mano de obra cualificada
              </h2>
              <p className="text-lg text-gray-600">
                La escasez de talento en sectores clave está limitando el crecimiento de las empresas españolas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dificultad para encontrar perfiles</h3>
                  <p className="text-gray-600">Los procesos de selección se alargan meses sin resultados</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Costes elevados de contratación</h3>
                  <p className="text-gray-600">Inversión alta en procesos que no garantizan resultados</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Complejidad legal</h3>
                  <p className="text-gray-600">Trámites de extranjería que paralizan las incorporaciones</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-6 w-6 text-red-600" />
                <h4 className="font-semibold text-red-800">Impacto en tu empresa</h4>
              </div>
              <p className="text-red-700">
                Proyectos paralizados, equipos sobrecargados y oportunidades perdidas por falta de personal cualificado.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>Nuestra solución</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Talento latinoamericano con gestión legal completa
              </h2>
              <p className="text-lg text-gray-600">
                Combinamos headhunting especializado con experiencia legal para traerte el equipo perfecto en 4 meses.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Selección rigurosa en LATAM</h3>
                  <p className="text-gray-600">Red de headhunters especializados en cada sector</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Gestión legal end-to-end</h3>
                  <p className="text-gray-600">Despacho de abogados experto en extranjería</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proceso garantizado en 4 meses</h3>
                  <p className="text-gray-600">Timeline claro con entregables en cada fase</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Briefcase className="h-6 w-6 text-green-600" />
                <h4 className="font-semibold text-green-800">Resultado para tu empresa</h4>
              </div>
              <p className="text-green-700">
                Equipo cualificado, integrado y productivo desde el primer día, con total cumplimiento legal.
              </p>
            </div>

            <Button 
              size="lg" 
              variant="ibertalento"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce nuestro proceso
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
