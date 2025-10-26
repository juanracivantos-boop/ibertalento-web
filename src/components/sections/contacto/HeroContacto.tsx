'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export function HeroContacto() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-ibertalento-600 to-ibertalento-800 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Consulta gratuita
                <span className="block text-ibertalento-100">sin compromiso</span>
              </h1>
              <p className="text-xl text-ibertalento-100 leading-relaxed max-w-3xl mx-auto">
                Analizamos tus necesidades de talento y te proponemos la mejor solución. 
                Respuesta garantizada en <strong>24 horas</strong>.
              </p>
            </div>

            {/* Contact Highlights */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Phone className="h-8 w-8 text-ibertalento-200" />
                <div className="text-center">
                  <div className="font-semibold text-white">Llamada directa</div>
                  <div className="text-sm text-ibertalento-100">+34 900 123 456</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Mail className="h-8 w-8 text-ibertalento-200" />
                <div className="text-center">
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-sm text-ibertalento-100">info@ibertalento.com</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Clock className="h-8 w-8 text-ibertalento-200" />
                <div className="text-center">
                  <div className="font-semibold text-white">Respuesta</div>
                  <div className="text-sm text-ibertalento-100">En 24 horas</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="group bg-white text-ibertalento-600 hover:bg-ibertalento-50"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Completa el formulario
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-ibertalento-600"
                onClick={() => {
                  window.location.href = 'tel:+34900123456'
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llama ahora
              </Button>
            </div>

            {/* Process Steps */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">
                ¿Qué incluye tu consulta gratuita?
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="text-sm text-ibertalento-100">
                    Análisis de necesidades
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="text-sm text-ibertalento-100">
                    Propuesta personalizada
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="text-sm text-ibertalento-100">
                    Timeline detallado
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="text-sm text-ibertalento-100">
                    Presupuesto sin compromiso
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">150+</div>
                <div className="text-sm text-ibertalento-100">Empresas satisfechas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">95%</div>
                <div className="text-sm text-ibertalento-100">Tasa de éxito</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4 meses</div>
                <div className="text-sm text-ibertalento-100">Tiempo promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
