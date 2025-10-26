'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Shield, Clock } from 'lucide-react'
import Image from 'next/image'

export function HeroCibertalento() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-ibertalento-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-ibertalento-100 text-ibertalento-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🤝</span>
                <span>Talento sin fronteras</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Un único interlocutor
                <span className="gradient-text block">de principio a fin</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Integramos <strong>headhunting especializado</strong> y <strong>despacho de extranjería</strong> 
                para que las empresas capten y traigan talento a España. 
                <strong>Velocidad con rigor</strong> y <strong>cero fricciones legales</strong>.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Users className="h-6 w-6 text-ibertalento-600" />
                <span className="text-sm font-medium text-gray-700">Shortlists en 1-2 semanas</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Shield className="h-6 w-6 text-ibertalento-600" />
                <span className="text-sm font-medium text-gray-700">Cumplimiento normativo</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Clock className="h-6 w-6 text-ibertalento-600" />
                <span className="text-sm font-medium text-gray-700">KPI-driven</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="ibertalento"
                className="group"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agenda una consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="xl" 
                variant="ibertalento-outline"
                onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver proceso completo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Sectores especializados:</p>
              <div className="flex flex-wrap gap-2">
                {['Industria', 'Servicios', 'Hostelería', 'Construcción'].map((sector) => (
                  <span 
                    key={sector}
                    className="px-3 py-1 bg-ibertalento-100 text-ibertalento-700 rounded-full text-sm font-medium"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Profesionales trabajando en equipo - Talento internacional integrado en empresas españolas"
                width={600}
                height={700}
                className="w-full h-[500px] lg:h-[600px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-ibertalento-600">1-2</div>
                <div className="text-sm text-gray-600">semanas</div>
                <div className="text-xs text-gray-500">time-to-shortlist</div>
              </div>
            </div>

            {/* Floating Success Card */}
            <div className="absolute -top-6 -right-6 bg-success text-white rounded-xl shadow-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs">expedientes aprobados</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
