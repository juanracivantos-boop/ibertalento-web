'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log del error para debugging
    console.error('Error capturado:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted-4 to-white px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icono de Error */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-500 mb-6">
            <AlertCircle className="w-12 h-12 text-white" aria-hidden="true" />
          </div>
        </div>

        {/* Contenido */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ink">
          Algo salió mal
        </h1>
        
        <p className="text-xl text-muted-2 mb-2">
          Ha ocurrido un error inesperado
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message || 'Error desconocido'}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        <p className="text-muted-3 mt-6 mb-8">
          No te preocupes, puedes intentar recargar la página o volver al inicio.
        </p>

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-brand-1 to-brand-3 hover:shadow-medium transition-all duration-200 focus-ring"
          >
            <RefreshCw className="h-5 w-5" aria-hidden="true" />
            Intentar de nuevo
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-brand-1 border-2 border-brand-1 hover:bg-brand-1 hover:text-white transition-all duration-200 focus-ring"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>

        {/* Enlaces Rápidos */}
        <div className="mt-12 pt-8 border-t border-muted-4">
          <p className="text-sm text-muted-3 mb-4">O visita estas páginas:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/servicios" className="text-sm text-accent-1 hover:underline focus-ring rounded">
              Servicios
            </Link>
            <Link href="/proceso" className="text-sm text-accent-1 hover:underline focus-ring rounded">
              Proceso
            </Link>
            <Link href="/sectores" className="text-sm text-accent-1 hover:underline focus-ring rounded">
              Sectores
            </Link>
            <Link href="/contacto" className="text-sm text-accent-1 hover:underline focus-ring rounded">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


