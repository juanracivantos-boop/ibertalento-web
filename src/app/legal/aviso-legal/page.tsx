import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal | Ibertalento',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1>Aviso Legal</h1>
          
          <h2>1. Datos identificativos</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa de los datos del titular del sitio web:
          </p>
          <ul>
            <li><strong>Denominación social:</strong> Ibertalento S.L.</li>
            <li><strong>CIF:</strong> B-12345678</li>
            <li><strong>Domicilio:</strong> Calle Ejemplo, 123, 28001 Madrid, España</li>
            <li><strong>Email:</strong> contacto@ibertalento.com</li>
            <li><strong>Teléfono:</strong> +34 900 123 456</li>
          </ul>

          <h2>2. Objeto</h2>
          <p>
            El presente aviso legal regula el uso del sitio web ibertalento.com (en adelante, el "Sitio Web"), del que es titular Ibertalento S.L.
          </p>

          <h2>3. Condiciones de uso</h2>
          <p>
            El acceso y uso del Sitio Web implica la aceptación expresa y sin reservas de todas las condiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso correcto del Sitio Web de conformidad con la ley y el presente Aviso Legal.
          </p>

          <h2>4. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad de Ibertalento S.L. o de terceros que han autorizado su uso, y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial.
          </p>

          <h2>5. Responsabilidad</h2>
          <p>
            Ibertalento S.L. no se hace responsable de los daños y perjuicios de cualquier naturaleza derivados de:
          </p>
          <ul>
            <li>La imposibilidad de acceso al Sitio Web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos.</li>
            <li>La presencia de virus o de otros elementos en los contenidos que puedan producir alteraciones en los sistemas informáticos, documentos electrónicos o datos de los usuarios.</li>
          </ul>

          <h2>6. Legislación aplicable y jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia las partes se someterán a los Juzgados y Tribunales de Madrid.
          </p>

          <p className="text-sm text-muted-3 mt-8">
            Última actualización: Enero 2024
          </p>
        </div>
      </div>
    </div>
  )
}
