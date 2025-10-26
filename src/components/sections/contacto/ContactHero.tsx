'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-ibertalento-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ¿Listo para encontrar tu
            <span className="gradient-text block">equipo ideal?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Solicita una <strong>consulta gratuita</strong> y descubre cómo podemos ayudarte 
            a resolver la escasez de talento en tu empresa en solo <strong>4 meses</strong>.
          </p>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Phone className="h-6 w-6 text-ibertalento-600" />
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">Llamada directa</div>
                <div className="text-xs text-gray-500">+34 900 123 456</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Mail className="h-6 w-6 text-ibertalento-600" />
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">Email</div>
                <div className="text-xs text-gray-500">info@ibertalento.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <Clock className="h-6 w-6 text-ibertalento-600" />
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">Respuesta</div>
                <div className="text-xs text-gray-500">En 24 horas</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              variant="ibertalento"
              className="group"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Solicitar consulta gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="xl" 
              variant="ibertalento-outline"
              onClick={() => window.location.href = 'tel:+34900123456'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar ahora
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-ibertalento-600 mb-1">150+</div>
                <div className="text-sm text-gray-600">Empresas satisfechas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ibertalento-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">Tasa de éxito</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ibertalento-600 mb-1">4 meses</div>
                <div className="text-sm text-gray-600">Tiempo promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
