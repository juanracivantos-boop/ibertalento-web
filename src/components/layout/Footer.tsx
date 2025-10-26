import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  servicios: [
    { name: 'Selección de Personal', href: '/servicios' },
    { name: 'Trámites Legales', href: '/servicios#tramites' },
    { name: 'Proceso Integral', href: '/proceso' },
    { name: 'Incorporación', href: '/servicios#incorporacion' },
  ],
  sectores: [
    { name: 'Industria y Automoción', href: '/sectores#industria' },
    { name: 'Construcción', href: '/sectores#construccion' },
    { name: 'Hostelería y Turismo', href: '/sectores#hosteleria' },
    { name: 'Limpieza y Mantenimiento', href: '/sectores#limpieza' },
  ],
  empresa: [
    { name: 'Proceso', href: '/proceso' },
    { name: 'Casos de Éxito', href: '/casos-de-exito' },
    { name: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { name: 'Aviso Legal', href: '/legal/aviso-legal' },
    { name: 'Política de Privacidad', href: '/legal/privacidad' },
    { name: 'Política de Cookies', href: '/legal/cookies' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Logo size="md" href="/" />
            </div>
            <p className="text-neutral-600 leading-relaxed max-w-md">
              Conectamos talento de España y Latinoamérica con empresas líderes. 
              Procesos ágiles, enfoque ético y resultados medibles.
            </p>
            
            {/* Contact */}
            <div className="space-y-3">
              <a 
                href="mailto:info@ibertalento.com" 
                className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 transition-colors focus-ring rounded"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span>info@ibertalento.com</span>
              </a>
              <a 
                href="tel:+34607338533" 
                className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 transition-colors focus-ring rounded"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>607 33 85 33</span>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/ibertalento"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors focus-ring text-neutral-700 hover:text-neutral-900"
                aria-label="LinkedIn de Ibertalento"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ibertalento"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors focus-ring text-neutral-700 hover:text-neutral-900"
                aria-label="Instagram de Ibertalento"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectores */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Sectores</h3>
            <ul className="space-y-3">
              {footerLinks.sectores.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Empresa</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Aviso Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm focus-ring rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-center text-neutral-600 text-sm">
            © {currentYear} Ibertalento. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}