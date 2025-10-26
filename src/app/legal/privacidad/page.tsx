import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Ibertalento',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1>Política de Privacidad</h1>
          
          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>Ibertalento S.L.</strong> es el responsable del tratamiento de los datos personales del usuario y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
          </p>

          <h2>2. Finalidad del tratamiento</h2>
          <p>Los datos personales proporcionados a través del Sitio Web serán tratados con las siguientes finalidades:</p>
          <ul>
            <li>Gestionar las consultas y solicitudes realizadas a través del formulario de contacto.</li>
            <li>Enviar información comercial sobre nuestros servicios, si el usuario ha dado su consentimiento.</li>
            <li>Cumplir con las obligaciones legales aplicables.</li>
          </ul>

          <h2>3. Legitimación</h2>
          <p>La base legal para el tratamiento de sus datos es:</p>
          <ul>
            <li>El consentimiento del interesado (formulario de contacto y newsletter).</li>
            <li>La ejecución de un contrato o medidas precontractuales.</li>
            <li>El cumplimiento de obligaciones legales.</li>
          </ul>

          <h2>4. Conservación de datos</h2>
          <p>
            Los datos personales se conservarán mientras sean necesarios para las finalidades para las que fueron recogidos. Posteriormente, se conservarán bloqueados durante los plazos legalmente establecidos.
          </p>

          <h2>5. Destinatarios</h2>
          <p>
            Los datos no serán comunicados a terceros, salvo obligación legal. Podrán ser tratados por encargados del tratamiento (proveedores de servicios tecnológicos) bajo las debidas garantías de confidencialidad.
          </p>

          <h2>6. Derechos del usuario</h2>
          <p>El usuario puede ejercer los siguientes derechos:</p>
          <ul>
            <li><strong>Acceso:</strong> Conocer qué datos personales estamos tratando.</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos.</li>
            <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede enviar un correo electrónico a <a href="mailto:privacidad@ibertalento.com">privacidad@ibertalento.com</a> adjuntando copia de su DNI.
          </p>

          <h2>7. Reclamación</h2>
          <p>
            Si considera que el tratamiento de sus datos personales no se ajusta a la normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
          </p>

          <h2>8. Seguridad</h2>
          <p>
            Ibertalento S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>

          <p className="text-sm text-muted-3 mt-8">
            Última actualización: Enero 2024
          </p>
        </div>
      </div>
    </div>
  )
}
