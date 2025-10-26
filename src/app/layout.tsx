import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ibertalento | Talento internacional listo para tu negocio',
  description: 'Reclutamos en origen, tramitamos visados y acompañamos la integración. Desde 3 meses según país. Documentación validada y contrato indefinido.',
  keywords: [
    'talento internacional',
    'reclutamiento extranjero',
    'gestión de visados',
    'permisos de trabajo',
    'talento latinoamericano',
    'ibertalento',
    'recursos humanos internacionales',
    'contratación extranjera',
  ],
  authors: [{ name: 'Ibertalento' }],
  creator: 'Ibertalento',
  publisher: 'Ibertalento',
  metadataBase: new URL('https://ibertalento.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ibertalento.com',
    siteName: 'Ibertalento',
    title: 'Ibertalento | Talento internacional listo para tu negocio',
    description: 'Reclutamos en origen, tramitamos visados y acompañamos la integración. Desde 3 meses según país. Documentación en regla.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ibertalento - Talento sin fronteras',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibertalento | Selección de personal y headhunting internacional',
    description: 'Conectamos talento de España y Latinoamérica con empresas líderes.',
    images: ['/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}