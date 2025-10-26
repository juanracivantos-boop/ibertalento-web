import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Ibertalento',
  description: 'Tendencias, consejos y mejores prácticas en selección de personal y headhunting internacional.',
}

const posts = [
  {
    slug: 'atraer-talento-internacional-etico',
    title: 'Cómo atraer talento internacional de forma ética',
    excerpt: 'Guía completa sobre reclutamiento internacional responsable, cumpliendo con todas las regulaciones y garantizando una experiencia positiva para los candidatos.',
    category: 'Reclutamiento Internacional',
    date: '2024-01-15',
    readTime: '8 min',
    image: '/blog/international-talent.jpg',
  },
  {
    slug: '5-claves-contratar-rapido-sin-perder-calidad',
    title: '5 claves para contratar rápido sin perder calidad',
    excerpt: 'Descubre cómo acelerar tus procesos de selección sin comprometer la calidad de las contrataciones. Estrategias probadas por empresas líderes.',
    category: 'Procesos de Selección',
    date: '2024-01-10',
    readTime: '6 min',
    image: '/blog/fast-hiring.jpg',
  },
  {
    slug: 'modelo-exito-futuro-reclutamiento',
    title: 'Por qué el modelo "éxito o nada" es el futuro del reclutamiento',
    excerpt: 'Análisis del modelo de pago por éxito en headhunting: ventajas para empresas, alineación de incentivos y casos de éxito reales.',
    category: 'Tendencias',
    date: '2024-01-05',
    readTime: '7 min',
    image: '/blog/success-model.jpg',
  },
  {
    slug: 'diferencias-culturales-equipos-internacionales',
    title: 'Gestionar diferencias culturales en equipos internacionales',
    excerpt: 'Consejos prácticos para integrar talento de diferentes países y crear equipos diversos de alto rendimiento.',
    category: 'Gestión de Equipos',
    date: '2023-12-28',
    readTime: '9 min',
    image: '/blog/cultural-diversity.jpg',
  },
  {
    slug: 'employer-branding-atraer-mejor-talento',
    title: 'Employer branding: cómo atraer al mejor talento',
    excerpt: 'Estrategias para construir una marca empleadora atractiva que te ayude a captar y retener a los mejores profesionales del mercado.',
    category: 'Employer Branding',
    date: '2023-12-20',
    readTime: '10 min',
    image: '/blog/employer-branding.jpg',
  },
  {
    slug: 'onboarding-efectivo-nuevos-empleados',
    title: 'Onboarding efectivo para nuevos empleados internacionales',
    excerpt: 'Guía paso a paso para integrar con éxito a profesionales internacionales en tu organización, desde el día uno hasta los primeros 90 días.',
    category: 'Onboarding',
    date: '2023-12-15',
    readTime: '8 min',
    image: '/blog/onboarding.jpg',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-muted-1 to-muted-2 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Tendencias y consejos en selección</h1>
            <p className="text-xl text-white/90">
              Artículos, guías y mejores prácticas para ayudarte a construir equipos 
              de alto rendimiento y optimizar tus procesos de reclutamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          {/* Featured Post */}
          <article className="card mb-16 overflow-hidden border-l-4 border-brand-2">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-video bg-muted-4 rounded-lg flex items-center justify-center">
                <span className="text-muted-3">Imagen destacada</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center w-fit px-3 py-1 rounded-full text-sm font-medium bg-brand-1/10 text-brand-1 mb-4">
                  {posts[0].category}
                </span>
                <h2 className="text-3xl font-semibold mb-4">
                  <Link href={`/blog/${posts[0].slug}`} className="hover:text-brand-1 transition-colors">
                    {posts[0].title}
                  </Link>
                </h2>
                <p className="text-muted-2 mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-3 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {new Date(posts[0].date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {posts[0].readTime}
                  </span>
                </div>
                <Link 
                  href={`/blog/${posts[0].slug}`}
                  className="inline-flex items-center gap-2 text-brand-1 font-medium hover:gap-3 transition-all"
                >
                  Leer artículo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="card group">
                <div className="aspect-video bg-muted-4 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-3 text-sm">Imagen</span>
                </div>
                
                <span className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-medium bg-brand-2/10 text-brand-2 mb-3">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-semibold mb-3">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand-1 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-muted-2 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-3 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {new Date(post.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-brand-1 text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Leer más
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted-4">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Recibe nuestros artículos por email</h2>
            <p className="text-muted-2 mb-8">
              Suscríbete a nuestra newsletter y recibe contenido exclusivo sobre selección 
              de personal, tendencias del mercado laboral y consejos prácticos.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-muted-4 focus:outline-none focus:ring-2 focus:ring-brand-1"
                aria-label="Email"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
