import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Users, Shield } from 'lucide-react'

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de contacto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-ibertalento-600" />
            <div>
              <div className="font-medium text-gray-900">Teléfono</div>
              <div className="text-sm text-gray-600">+34 900 123 456</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-ibertalento-600" />
            <div>
              <div className="font-medium text-gray-900">Email</div>
              <div className="text-sm text-gray-600">info@ibertalento.com</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-ibertalento-600" />
            <div>
              <div className="font-medium text-gray-900">Oficina</div>
              <div className="text-sm text-gray-600">Madrid, España</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-ibertalento-600" />
            <div>
              <div className="font-medium text-gray-900">Horario</div>
              <div className="text-sm text-gray-600">Lun-Vie: 9:00-18:00</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">¿Por qué elegirnos?</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-ibertalento-600 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900 text-sm">Experiencia comprobada</div>
                <div className="text-xs text-gray-600">150+ empresas satisfechas</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-ibertalento-600 mt-0.5" />
              <div>
                <div className="font-medium text-gray-900 text-sm">Cumplimiento legal</div>
                <div className="text-xs text-gray-600">100% de trámites exitosos</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}