import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, CheckCircle, AlertCircle } from 'lucide-react'

export function ProcessNotice() {
  return (
    <Card className="border-ibertalento-200 bg-ibertalento-50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-ibertalento-800">
          <Clock className="h-5 w-5" />
          <span>Importante: Tiempo de proceso</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white rounded-lg p-4 border border-ibertalento-200">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="h-5 w-5 text-ibertalento-600" />
            <span className="font-semibold text-ibertalento-800">4 meses promedio</span>
          </div>
          <p className="text-sm text-ibertalento-700">
            Nuestro proceso completo desde la selección hasta la incorporación tiene una duración promedio de 4 meses.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-700">Selección rigurosa (3-4 semanas)</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-700">Trámites legales (6-8 semanas)</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm text-gray-700">Coordinación y llegada (2-3 semanas)</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-ibertalento-200">
          <p className="text-xs text-ibertalento-700">
            <strong>Nota:</strong> Los tiempos pueden variar según la complejidad del perfil y los trámites específicos requeridos.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
