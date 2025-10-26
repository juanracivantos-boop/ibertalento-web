import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto | Ibertalento',
  description: 'Solicita una consulta gratuita. Respuesta en menos de 24 horas. Te ayudamos a encontrar el talento que necesitas.',
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
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-red">
                      <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-neutral-900">Email</h3>
                      <a 
                        href="mailto:info@ibertalento.com" 
                        className="text-neutral-700 hover:text-brand-red transition-colors"
                      >
                        info@ibertalento.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-red">
                      <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-neutral-900">Teléfono</h3>
                      <a 
                        href="tel:+34607338533" 
                        className="text-neutral-700 hover:text-brand-red transition-colors"
                      >
                        607 33 85 33
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">
                        Lunes a Viernes, 9:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-red">
                      <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-neutral-900">Oficina</h3>
                      <p className="text-neutral-700">
                        C. del Maestro Ángel Llorca, 6<br />
                        Planta 7, Chamberí<br />
                        28003 Madrid, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-red">
                      <Clock className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-neutral-900">Horario</h3>
                      <p className="text-neutral-700">
                        Lunes - Viernes: 9:00 - 18:00<br />
                        Sábado - Domingo: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators con CONTRASTE */}
              <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
                <h3 className="font-bold text-lg mb-4 text-neutral-900">¿Qué puedes esperar?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-base">
                    <svg className="h-6 w-6 text-brand-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-900 font-medium">Respuesta en menos de 24 horas</span>
                  </li>
                  <li className="flex items-start gap-3 text-base">
                    <svg className="h-6 w-6 text-brand-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-900 font-medium">Consulta inicial sin compromiso</span>
                  </li>
                  <li className="flex items-start gap-3 text-base">
                    <svg className="h-6 w-6 text-brand-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-900 font-medium">Asesoramiento personalizado</span>
                  </li>
                  <li className="flex items-start gap-3 text-base">
                    <svg className="h-6 w-6 text-brand-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-900 font-medium">Propuesta adaptada a tu necesidad</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card">
                <h2 className="text-2xl font-semibold mb-6">Solicita tu consulta gratuita</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Notice con CONTRASTE */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">¿Qué ocurre después de enviar el formulario?</h3>
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