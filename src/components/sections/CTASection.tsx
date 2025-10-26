'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone, Mail, Calendar, CheckCircle } from 'lucide-react'

const ctaFeatures = [
  {
    icon: CheckCircle,
    title: 'Consulta gratuita',
    description: 'Evaluación inicial sin compromiso'
  },
  {
    icon: Calendar,
    title: 'Respuesta en 24h',
    description: 'Te contactamos al día siguiente'
  },
  {
    icon: Phone,
    title: 'Llamada personalizada',
    description: 'Análisis detallado de tus necesidades'
  }
]

export function CTASection() {
  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-ibertalento-600 to-ibertalento-800 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para encontrar tu equipo ideal?
          </h2>
          <p className="text-xl text-ibertalento-100 mb-8 leading-relaxed">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a resolver 
            la escasez de talento en tu empresa en solo 4 meses.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {ctaFeatures.map((feature) => (
              <div key={feature.title} className="flex items-center space-x-3 justify-center md:justify-start">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{feature.title}</div>
                  <div className="text-sm text-ibertalento-100">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="xl" 
              variant="secondary"
              className="group bg-white text-ibertalento-600 hover:bg-ibertalento-50"
              onClick={() => {
                // Aquí iría la lógica para abrir el formulario de contacto
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agenda consulta gratuita
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

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="h-6 w-6 text-ibertalento-200" />
                  <div>
                    <div className="font-semibold text-white">Teléfono</div>
                    <div className="text-ibertalento-100">+34 900 123 456</div>
                  </div>
                </div>
                <div className="text-sm text-ibertalento-100">
                  Lun-Vie: 9:00-18:00<br />
                  Respuesta inmediata
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-ibertalento-200" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-ibertalento-100">info@ibertalento.com</div>
                  </div>
                </div>
                <div className="text-sm text-ibertalento-100">
                  Respuesta en 24h<br />
                  Consulta sin compromiso
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-1">150+</div>
                <div className="text-sm text-ibertalento-100">Empresas satisfechas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">95%</div>
                <div className="text-sm text-ibertalento-100">Tasa de éxito</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">4 meses</div>
                <div className="text-sm text-ibertalento-100">Tiempo promedio</div>
              </div>
            </div>
          </div>

          {/* Process Notice */}
          <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-sm text-ibertalento-100">
              <strong>Recuerda:</strong> Nuestro proceso completo tiene una duración promedio de 4 meses. 
              Esto incluye selección, trámites legales y preparación para la incorporación.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
