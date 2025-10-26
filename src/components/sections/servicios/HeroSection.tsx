'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Shield, Clock, CheckCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-ibertalento-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Servicios integrales para tu
            <span className="gradient-text block">contratación internacional</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Combinamos <strong>headhunting especializado</strong> con <strong>gestión legal completa</strong> 
            para traerte el talento latinoamericano que necesitas en solo <strong>4 meses</strong>.
          </p>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Users className="h-6 w-6 text-ibertalento-600" />
              <span className="text-sm font-medium text-gray-700">Headhunting Especializado</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Shield className="h-6 w-6 text-ibertalento-600" />
              <span className="text-sm font-medium text-gray-700">Gestión Legal Completa</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Clock className="h-6 w-6 text-ibertalento-600" />
              <span className="text-sm font-medium text-gray-700">Proceso en 4 Meses</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <CheckCircle className="h-6 w-6 text-ibertalento-600" />
              <span className="text-sm font-medium text-gray-700">95% Tasa de Éxito</span>
            </div>
          </div>

          <Button 
            size="xl" 
            variant="ibertalento"
            className="group"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicita información
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
