import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto | Ibertalento',
  description: 'Contacta con nuestro equipo de expertos en talento internacional. Consulta gratuita y respuesta en menos de 24 horas.',
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero con imagen de fondo */}
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80&fit=crop" 
          alt="" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* OVERLAY OSCURO para texto blanco */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/70" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/30 via-transparent to-transparent opacity-50" aria-hidden="true" />
        
        <div className="relative py-20 md:py-28 w-full">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-white drop-shadow-2xl text-5xl md:text-6xl lg:text-7xl font-bold">
                Hablemos de tu proyecto
              </h1>
              <p className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed drop-shadow-lg">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a encontrar 
                el talento que impulse el crecimiento de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Nuestros datos de contacto
              </h2>
              <p className="text-xl text-neutral-600">
                Estamos aquí para ayudarte con tu proyecto de talento internacional
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Información principal */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-1">Teléfono</h3>
                    <a 
                      href="tel:+34607338533" 
                      className="text-neutral-700 hover:text-brand-red transition-colors font-medium"
                    >
                      607 33 85 33
                    </a>
                    <p className="text-sm text-neutral-500">Lunes a Viernes, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-1">Email</h3>
                    <a 
                      href="mailto:info@ibertalento.com" 
                      className="text-neutral-700 hover:text-brand-red transition-colors font-medium"
                    >
                      info@ibertalento.com
                    </a>
                    <p className="text-sm text-neutral-500">Respuesta en menos de 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-1">Oficina</h3>
                    <p className="text-neutral-700">
                      C. del Maestro Ángel Llorca, 6<br />
                      Planta 7, Chamberí<br />
                      28003 Madrid, España
                    </p>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="space-y-6">
                <div className="p-6 bg-brand-red/5 border border-brand-red/20 rounded-xl">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">Horario de atención</h3>
                  <div className="space-y-2 text-neutral-700">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados</span>
                      <span className="font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos</span>
                      <span className="font-medium">Cerrado</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                  <h3 className="font-semibold text-lg text-green-800 mb-3">Garantía de respuesta</h3>
                  <div className="flex items-center gap-2 text-green-700">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Menos de 24 horas</span>
                  </div>
                  <p className="text-sm text-green-600 mt-2">
                    Nuestro equipo de asesores expertos se pondrá en contacto contigo para ayudarte con tu proyecto.
                  </p>
                </div>

                <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 className="font-semibold text-lg text-blue-800 mb-3">Consulta gratuita</h3>
                  <p className="text-sm text-blue-700">
                    Primera consulta sin compromiso. Evaluamos tu caso y te explicamos cómo podemos ayudarte.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center p-8 bg-neutral-900 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para encontrar tu talento ideal?
              </h3>
              <p className="text-white/90 mb-6">
                Contacta con nosotros y descubre cómo podemos ayudarte a resolver tus necesidades de personal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+34607338533" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-600 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Llamar ahora
                </a>
                <a 
                  href="mailto:info@ibertalento.com" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Enviar email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Notice con CONTRASTE */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">¿Qué ocurre después de contactarnos?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white font-bold text-2xl mb-4 shadow-lg">
                  1
                </div>
                <p className="text-base font-medium text-neutral-900">
                  Revisamos tu solicitud en menos de 24 horas
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white font-bold text-2xl mb-4 shadow-lg">
                  2
                </div>
                <p className="text-base font-medium text-neutral-900">
                  Te contactamos para agendar una videollamada
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white font-bold text-2xl mb-4 shadow-lg">
                  3
                </div>
                <p className="text-base font-medium text-neutral-900">
                  Te presentamos una propuesta personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}