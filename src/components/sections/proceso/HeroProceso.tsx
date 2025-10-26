'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CheckCircle, Users, Shield } from 'lucide-react'

export function HeroProceso() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-ibertalento-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Proceso integral:
                <span className="gradient-text block">4 meses al equipo ideal</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Un proceso estructurado y transparente que combina <strong>selección rigurosa</strong> 
                con <strong>gestión legal completa</strong> para garantizar el éxito de tu contratación.
              </p>
            </div>

            {/* Process Highlights */}
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-sm border">
                <Clock className="h-6 w-6 text-ibertalento-600" />
                <span className="text-sm font-medium text-gray-700">4 meses</span>
                <span className="text-xs text-gray-500">tiempo total</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-sm border">
                <CheckCircle className="h-6 w-6 text-ibertalento-600" />
                <span className="text-sm font-medium text-gray-700">7 fases</span>
                <span className="text-xs text-gray-500">estructuradas</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-sm border">
                <Users className="h-6 w-6 text-ibertalento-600" />
                <span className="text-sm font-medium text-gray-700">95%</span>
                <span className="text-xs text-gray-500">tasa de éxito</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-sm border">
                <Shield className="h-6 w-6 text-ibertalento-600" />
                <span className="text-sm font-medium text-gray-700">100%</span>
                <span className="text-xs text-gray-500">legal</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="ibertalento"
                className="group"
                onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver timeline detallado
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="xl" 
                variant="ibertalento-outline"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Inicia tu proceso
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                ¿Por qué nuestro proceso es diferente?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-ibertalento-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-ibertalento-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transparencia total</h4>
                  <p className="text-sm text-gray-600">
                    Timeline claro con entregables en cada fase y seguimiento continuo
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-ibertalento-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-ibertalento-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Gestión integral</h4>
                  <p className="text-sm text-gray-600">
                    Un solo proveedor para selección, trámites legales y coordinación
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-ibertalento-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-ibertalento-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Especialización</h4>
                  <p className="text-sm text-gray-600">
                    Conocimiento profundo del mercado latinoamericano y normativas españolas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
