import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | Ibertalento',
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1>Política de Cookies</h1>
          
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.
          </p>

          <h2>2. ¿Qué cookies utilizamos?</h2>
          
          <h3>Cookies técnicas (necesarias)</h3>
          <p>
            Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse. Incluyen cookies de sesión y cookies de seguridad.
          </p>

          <h3>Cookies de análisis</h3>
          <p>
            Utilizamos cookies de análisis (como Google Analytics) para entender cómo los visitantes interactúan con nuestro sitio web. Esto nos ayuda a mejorar la experiencia del usuario.
          </p>

          <h3>Cookies de marketing</h3>
          <p>
            Estas cookies se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas publicitarias. Requieren su consentimiento explícito.
          </p>

          <h2>3. Cookies de terceros</h2>
          <p>Algunos servicios externos pueden instalar cookies en su dispositivo:</p>
          <ul>
            <li><strong>Google Analytics:</strong> Para análisis estadístico del tráfico web.</li>
            <li><strong>Redes sociales:</strong> Si compartimos contenido en redes sociales.</li>
          </ul>

          <h2>4. Gestión de cookies</h2>
          <p>
            Puede configurar su navegador para rechazar cookies o para que le avise cuando se envíen cookies. Sin embargo, si desactiva las cookies, algunas funciones del sitio web pueden no funcionar correctamente.
          </p>

          <h3>Cómo gestionar cookies en los principales navegadores:</h3>
          <ul>
            <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
            <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies</li>
            <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies</li>
            <li><strong>Edge:</strong> Configuración &gt; Privacidad &gt; Cookies</li>
          </ul>

          <h2>5. Consentimiento</h2>
          <p>
            Al utilizar nuestro sitio web, usted acepta el uso de cookies técnicas necesarias. Para cookies de análisis y marketing, solicitaremos su consentimiento explícito mediante un banner de cookies.
          </p>

          <h2>6. Más información</h2>
          <p>
            Para más información sobre el tratamiento de sus datos personales, consulte nuestra <a href="/legal/privacidad">Política de Privacidad</a>.
          </p>

          <p className="text-sm text-muted-3 mt-8">
            Última actualización: Enero 2024
          </p>
        </div>
      </div>
    </div>
  )
}
