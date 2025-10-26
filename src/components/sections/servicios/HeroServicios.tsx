'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Shield, Clock, Briefcase } from 'lucide-react'

export function HeroServicios() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-ibertalento-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Servicios integrales para
                <span className="gradient-text block">tu equipo ideal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Combinamos <strong>headhunting especializado</strong> con <strong>gestión legal completa</strong> 
                para traerte talento latinoamericano cualificado en <strong>4 meses</strong>.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Users className="h-6 w-6 text-ibertalento-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Headhunting</div>
                  <div className="text-sm text-gray-600">Selección especializada</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Shield className="h-6 w-6 text-ibertalento-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Trámites Legales</div>
                  <div className="text-sm text-gray-600">Gestión completa</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Briefcase className="h-6 w-6 text-ibertalento-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Por Sectores</div>
                  <div className="text-sm text-gray-600">Especialización</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="ibertalento"
                className="group"
                onClick={() => document.getElementById('servicios-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conoce nuestros servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="xl" 
                variant="ibertalento-outline"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Consulta gratuita
              </Button>
            </div>

            {/* Process Notice */}
            <div className="bg-ibertalento-50 border border-ibertalento-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="h-6 w-6 text-ibertalento-600" />
                <h3 className="font-semibold text-ibertalento-800">Proceso garantizado en 4 meses</h3>
              </div>
              <p className="text-ibertalento-700 text-sm">
                Nuestro proceso integral incluye selección, trámites legales y preparación para la incorporación. 
                Timeline claro con entregables en cada fase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
