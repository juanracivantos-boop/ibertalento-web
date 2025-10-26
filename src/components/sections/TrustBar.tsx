import Image from 'next/image'

const trustLogos = [
  { name: 'Ministerio de Trabajo', src: '/logos/ministerio-trabajo.png', alt: 'Ministerio de Trabajo y Economía Social' },
  { name: 'Colegio de Abogados', src: '/logos/colegio-abogados.png', alt: 'Colegio de Abogados de Madrid' },
  { name: 'AEPD', src: '/logos/aepd.png', alt: 'Agencia Española de Protección de Datos' },
  { name: 'SEPE', src: '/logos/sepe.png', alt: 'Servicio Público de Empleo Estatal' },
  { name: 'Cámara de Comercio', src: '/logos/camara-comercio.png', alt: 'Cámara de Comercio de Madrid' },
]

export function TrustBar() {
  return (
    <section className="py-12 bg-gray-50 border-y">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm font-medium uppercase tracking-wide">
            Certificaciones y colaboraciones oficiales
          </p>
        </div>
        
        <div className="flex items-center justify-center space-x-8 md:space-x-12 opacity-60">
          {trustLogos.map((logo, index) => (
            <div 
              key={logo.name}
              className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            Cumplimos con todas las normativas legales y contamos con las certificaciones necesarias
          </p>
        </div>
      </div>
    </section>
  )
}
