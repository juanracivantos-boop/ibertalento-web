'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, CheckCircle, Users, Shield } from 'lucide-react'

export function ProcessHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-ibertalento-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-ibertalento-100 text-ibertalento-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="h-4 w-4" />
            <span>Proceso garantizado</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Tu equipo ideal en
            <span className="gradient-text block">4 meses</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Un proceso estructurado y transparente que combina <strong>selección rigurosa</strong> 
            con <strong>gestión legal completa</strong> para garantizar la incorporación exitosa 
            de talento latinoamericano cualificado.
          </p>

          {/* Key Process Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Users className="h-6 w-6 text-ibertalento-600" />
              <span className="text-sm font-medium text-gray-700">Selección Rigurosa</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Shield className="h-6 w-6 text-ibertalento-600" />
              <span className="text-sm font-medium text-gray-700">100% Legal</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Clock className="h-6 w-6 text-ibertalento-600" />
              <span className="text-sm font-medium text-gray-700">Timeline Claro</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <CheckCircle className="h-6 w-6 text-ibertalento-600" />
              <span className="text-sm font-medium text-gray-700">Garantía de Resultado</span>
            </div>
          </div>

          {/* Process Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen del proceso</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-ibertalento-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Análisis</h3>
                <p className="text-sm text-gray-600">1-2 semanas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ibertalento-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Selección</h3>
                <p className="text-sm text-gray-600">3-4 semanas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ibertalento-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trámites</h3>
                <p className="text-sm text-gray-600">6-8 semanas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ibertalento-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Incorporación</h3>
                <p className="text-sm text-gray-600">2-3 semanas</p>
              </div>
            </div>
          </div>

          <Button 
            size="xl" 
            variant="ibertalento"
            className="group"
            onClick={() => document.getElementById('timeline-detallado')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver timeline detallado
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
