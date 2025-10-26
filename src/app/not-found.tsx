'use client'

import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-muted-4 to-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-brand-1 to-brand-3 mb-6">
              <span className="text-6xl font-bold text-white">404</span>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            No hemos encontrado esta página
          </h1>
          <p className="text-xl text-muted-2 mb-8">
            La página que buscas no existe o ha sido movida. 
            Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/" className="btn-primary">
              <Home className="h-5 w-5" aria-hidden="true" />
              Volver al inicio
            </Link>
            <Link href="/contacto" className="btn-secondary">
              <Search className="h-5 w-5" aria-hidden="true" />
              Contactar con nosotros
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-muted-4 pt-8">
            <p className="text-sm text-muted-3 mb-4">Enlaces rápidos:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/servicios" className="link text-sm">
                Servicios
              </Link>
              <Link href="/proceso" className="link text-sm">
                Proceso
              </Link>
              <Link href="/sectores" className="link text-sm">
                Sectores
              </Link>
              <Link href="/casos-de-exito" className="link text-sm">
                Casos de Éxito
              </Link>
              <Link href="/contacto" className="link text-sm">
                Contacto
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="mt-8 inline-flex items-center gap-2 text-muted-3 hover:text-brand-1 transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver atrás
          </button>
        </div>
      </div>
    </div>
  )
}
