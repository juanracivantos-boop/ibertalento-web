import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal | Ibertalento',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg prose-neutral">
          <h1 className="text-4xl font-bold text-neutral-900 mb-8">Aviso Legal</h1>
          
          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">I. INFORMACIÓN GENERAL</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los datos de información general de este sitio web:
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            La titularidad de este sitio web, https://www.ibertalento.com (en adelante, el "Sitio Web"), la ostenta Legalcasos Comercializadora S.L., titular de la marca registrada IBERTALENTO, con NIF B75433912, y cuyos datos de contacto son:
          </p>
          <ul className="list-disc pl-6 text-neutral-700 mb-6">
            <li><strong>Domicilio social:</strong> Calle Cañuelo de San Bernardo, 4, 29008 Málaga (España)</li>
            <li><strong>Teléfono de contacto:</strong> 691 027 733</li>
            <li><strong>Correo electrónico de contacto:</strong> info@ibertalento.com</li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">II. TÉRMINOS Y CONDICIONES GENERALES DE USO</h2>
          
          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">Objeto del Sitio Web</h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            El objeto de las presentes Condiciones Generales de Uso (en adelante, las "Condiciones") es regular el acceso y la utilización del Sitio Web.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como dinámica (árbol de navegación), así como todos los elementos integrados en dichos interfaces o en el árbol de navegación (en adelante, los "Contenidos") y todos aquellos servicios o recursos en línea que en su caso se ofrezcan a los usuarios (en adelante, los "Servicios").
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Ibertalento se reserva el derecho a modificar, en cualquier momento y sin previo aviso, la presentación, configuración y contenidos del Sitio Web, así como interrumpir, desactivar o cancelar el acceso a los mismos cuando lo considere necesario.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            El acceso al Sitio Web por parte del usuario tiene carácter libre y gratuito, sin perjuicio del coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por el usuario.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            La utilización de algunos de los Contenidos o Servicios del Sitio Web podrá requerir el registro o suscripción previa del usuario.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">El Usuario</h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            El acceso, la navegación y uso del Sitio Web confieren la condición de usuario (en adelante, el "Usuario") e implican la aceptación de todas las Condiciones aquí establecidas, así como sus posteriores modificaciones, sin perjuicio de la normativa legal de obligado cumplimiento aplicable en cada caso.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            El Usuario se compromete a hacer un uso adecuado y lícito del Sitio Web y de los Contenidos, de conformidad con la legislación vigente, la buena fe, el orden público, los usos del tráfico y las presentes Condiciones.
            Asimismo, el Usuario se obliga a no utilizar el Sitio Web con fines ilícitos o lesivos para los derechos e intereses de terceros.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            El Usuario declara ser mayor de edad y disponer de la capacidad jurídica suficiente para vincularse por las presentes Condiciones. Este Sitio Web no está dirigido a menores de edad, declinando Ibertalento cualquier responsabilidad derivada del incumplimiento de este requisito.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            El Sitio Web está dirigido principalmente a usuarios residentes en España. Ibertalento no garantiza que el Sitio Web cumpla total o parcialmente con legislaciones de otros países. Si el Usuario accede desde fuera de España, lo hará bajo su propia responsabilidad y deberá asegurarse de que dicho acceso cumple con la legislación local aplicable.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Ibertalento no garantiza la continuidad, disponibilidad ni utilidad del Sitio Web, ni de los Contenidos o Servicios ofrecidos.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            No se responsabiliza de posibles interrupciones, errores, fallos técnicos, virus o daños que pudieran afectar al sistema informático (software o hardware) del Usuario a consecuencia del acceso, uso o descarga de contenidos.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            En ningún caso Ibertalento será responsable por pérdidas, daños o perjuicios de cualquier tipo derivados del acceso o uso del Sitio Web, incluidos los provocados por caídas del servicio, errores de conexión o uso inadecuado del mismo.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">IV. POLÍTICA DE ENLACES</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            El Sitio Web puede contener enlaces a sitios web de terceros (links, banners, botones, directorios o motores de búsqueda).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            La presencia de estos enlaces tiene como único propósito facilitar el acceso a información disponible en Internet, sin que ello implique que Ibertalento recomiende, promueva o garantice el contenido, productos o servicios ofrecidos en dichos sitios enlazados.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Ibertalento no se hace responsable de la exactitud, disponibilidad técnica, veracidad o legalidad de los contenidos accesibles a través de dichos enlaces, ni de los daños o perjuicios que pudieran derivarse de su uso.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            El establecimiento de hipervínculos al Sitio Web no implica la existencia de relación alguna entre Ibertalento y el titular del sitio web enlazante, ni el conocimiento o aceptación de los contenidos, servicios o actividades en él ofrecidos.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">V. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Legalcasos Comercializadora S.L., titular de la marca registrada IBERTALENTO, es propietaria de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos incluidos en el mismo (a título enunciativo y no limitativo: textos, imágenes, diseño gráfico, logotipos, combinaciones de colores, estructura, programas de ordenador, etc.).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o puesta a disposición del público de la totalidad o parte de los contenidos del Sitio Web sin la autorización expresa y por escrito de Ibertalento.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            El Usuario podrá visualizar, descargar y realizar copias temporales de los contenidos del Sitio Web únicamente para su uso personal y privado, siempre que no se vulneren los derechos de propiedad intelectual o industrial de Ibertalento.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            En caso de que el Usuario o un tercero considere que alguno de los contenidos del Sitio Web infringe derechos de propiedad intelectual, deberá comunicarlo inmediatamente a Ibertalento mediante los datos de contacto indicados en el apartado I. Información General.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Ibertalento se reserva el derecho de emprender las acciones civiles o penales que considere oportunas por el uso indebido del Sitio Web o de sus contenidos, o por el incumplimiento de las presentes Condiciones.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            La relación entre el Usuario y Ibertalento se regirá por la legislación española vigente. En caso de conflicto o controversia, las partes se someterán a los Juzgados y Tribunales de Málaga, salvo que la normativa de protección de consumidores disponga otro fuero aplicable.
          </p>

          <p className="text-sm text-neutral-500 mt-8 pt-6 border-t border-neutral-200">
            Última actualización: Diciembre 2024
          </p>
        </div>
      </div>
    </div>
  )
}
