'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    position: 'Directora de RRHH',
    company: 'Industrias del Norte S.L.',
    sector: 'Industria',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: 'Cibertalento nos ayudó a encontrar 8 operarios especializados en solo 4 meses. El proceso fue transparente y el resultado excelente. Los profesionales se integraron perfectamente en nuestro equipo.',
    results: {
      professionals: 8,
      time: '4 meses',
      satisfaction: '100%'
    }
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    position: 'Gerente General',
    company: 'Hotel Mediterráneo',
    sector: 'Hostelería',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: 'Necesitábamos personal de cocina y recepción urgentemente. Cibertalento no solo nos trajo el talento, sino que gestionó todos los trámites legales. Un servicio integral excepcional.',
    results: {
      professionals: 5,
      time: '3.5 meses',
      satisfaction: '100%'
    }
  },
  {
    id: 3,
    name: 'Ana Martínez',
    position: 'Directora de Operaciones',
    company: 'Constructora del Sur',
    sector: 'Construcción',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: 'La calidad de los profesionales que nos trajo Cibertalento es excepcional. Todos tenían las certificaciones necesarias y se adaptaron rápidamente a nuestros estándares de seguridad.',
    results: {
      professionals: 12,
      time: '4 meses',
      satisfaction: '95%'
    }
  },
  {
    id: 4,
    name: 'Roberto Silva',
    position: 'CEO',
    company: 'Servicios Empresariales Plus',
    sector: 'Servicios',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: 'El proceso fue impecable. Desde la selección hasta la incorporación, todo fue gestionado profesionalmente. Los costes fueron transparentes y el ROI excelente.',
    results: {
      professionals: 6,
      time: '4 meses',
      satisfaction: '100%'
    }
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Casos de éxito reales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que ya han confiado en nosotros y han obtenido resultados excepcionales
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-ibertalento-100 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-ibertalento-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentIndex].position}
                      </div>
                      <div className="text-sm text-ibertalento-600 font-medium">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-ibertalento-600">
                      {testimonials[currentIndex].results.professionals}
                    </div>
                    <div className="text-sm text-gray-600">profesionales</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ibertalento-600">
                      {testimonials[currentIndex].results.time}
                    </div>
                    <div className="text-sm text-gray-600">tiempo total</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {testimonials[currentIndex].results.satisfaction}
                    </div>
                    <div className="text-sm text-gray-600">satisfacción</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:bg-ibertalento-50 hover:border-ibertalento-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-ibertalento-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:bg-ibertalento-50 hover:border-ibertalento-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sector Tags */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Casos de éxito en todos nuestros sectores:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Industria', 'Hostelería', 'Construcción', 'Servicios'].map((sector) => (
              <span 
                key={sector}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-ibertalento-300 hover:text-ibertalento-700 transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
