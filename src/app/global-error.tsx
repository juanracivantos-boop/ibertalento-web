'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log del error global para debugging
    console.error('Error global capturado:', error)
  }, [error])

  return (
    <html lang="es">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '2rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: 'linear-gradient(to bottom right, #f3f4f6, #ffffff)',
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 2rem',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom right, #ef4444, #f97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              color: 'white',
            }}>
              ⚠️
            </div>

            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#0B0D17',
            }}>
              Error Global
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#6B7280',
              marginBottom: '2rem',
            }}>
              Ha ocurrido un error crítico en la aplicación
            </p>

            {process.env.NODE_ENV === 'development' && (
              <div style={{
                padding: '1rem',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '0.5rem',
                marginBottom: '2rem',
                textAlign: 'left',
              }}>
                <p style={{
                  fontSize: '0.875rem',
                  fontFamily: 'monospace',
                  color: '#991b1b',
                  wordBreak: 'break-all',
                }}>
                  {error.message || 'Error desconocido'}
                </p>
                {error.digest && (
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#dc2626',
                    marginTop: '0.5rem',
                  }}>
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            )}

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <button
                onClick={reset}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  color: 'white',
                  background: 'linear-gradient(to right, #D72638, #FFC857)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                🔄 Intentar de nuevo
              </button>

              <a
                href="/"
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  color: '#D72638',
                  background: 'white',
                  border: '2px solid #D72638',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'inline-block',
                }}
              >
                🏠 Volver al inicio
              </a>
            </div>

            <div style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid #e5e7eb',
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: '#9CA3AF',
                marginBottom: '1rem',
              }}>
                Enlaces rápidos:
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
                <a href="/servicios" style={{ color: '#1D4ED8', fontSize: '0.875rem' }}>Servicios</a>
                <a href="/proceso" style={{ color: '#1D4ED8', fontSize: '0.875rem' }}>Proceso</a>
                <a href="/sectores" style={{ color: '#1D4ED8', fontSize: '0.875rem' }}>Sectores</a>
                <a href="/contacto" style={{ color: '#1D4ED8', fontSize: '0.875rem' }}>Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}


