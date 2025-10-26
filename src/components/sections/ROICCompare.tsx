'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, X, TrendingUp, Clock, Euro, Users } from 'lucide-react'

const comparisonData = [
  {
    aspect: 'Tiempo de proceso',
    traditional: '6-12 meses',
    ibertalento: '4 meses',
    savings: '50-67% menos tiempo',
    icon: Clock
  },
  {
    aspect: 'Coste total',
    traditional: '€15,000-25,000',
    ibertalento: '€8,000-12,000',
    savings: '40-50% ahorro',
    icon: Euro
  },
  {
    aspect: 'Tasa de éxito',
    traditional: '60-70%',
    ibertalento: '95%',
    savings: '25-35% más éxito',
    icon: TrendingUp
  },
  {
    aspect: 'Gestión legal',
    traditional: 'Múltiples proveedores',
    ibertalento: 'Servicio integral',
    savings: 'Una sola gestión',
    icon: Users
  }
]

const roiMetrics = [
  {
    metric: 'ROI promedio',
    value: '300%',
    description: 'Retorno de inversión en el primer año'
  },
  {
    metric: 'Tiempo de amortización',
    value: '4 meses',
    description: 'Tiempo para recuperar la inversión'
  },
  {
    metric: 'Ahorro anual',
    value: '€50,000+',
    description: 'Ahorro en costes de rotación y reclutamiento'
  }
]

export function ROICCompare() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ROI y comparativa de costes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre por qué nuestro enfoque integral es más eficiente y rentable que los métodos tradicionales
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-center text-xl">Comparativa: Método tradicional vs. Cibertalento</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Aspecto</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Método tradicional</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Cibertalento</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Beneficio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.map((item, index) => (
                      <tr key={item.aspect} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <item.icon className="h-5 w-5 text-gray-400" />
                            <span className="font-medium text-gray-900">{item.aspect}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span className="text-gray-600">{item.traditional}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="font-medium text-gray-900">{item.ibertalento}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            {item.savings}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ROI Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roiMetrics.map((metric) => (
            <Card key={metric.metric} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-ibertalento-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.metric}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cost Breakdown */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Desglose de costes tradicionales
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                <span className="text-gray-700">Agencia de reclutamiento</span>
                <span className="font-semibold text-red-600">€8,000-12,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                <span className="text-gray-700">Despacho de abogados</span>
                <span className="font-semibold text-red-600">€3,000-5,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                <span className="text-gray-700">Gestión administrativa</span>
                <span className="font-semibold text-red-600">€2,000-3,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                <span className="text-gray-700">Costes ocultos y retrasos</span>
                <span className="font-semibold text-red-600">€2,000-5,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-100 rounded-lg border-2 border-red-300">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="font-bold text-red-700 text-lg">€15,000-25,000</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Servicio integral Cibertalento
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-700">Selección y headhunting</span>
                <span className="font-semibold text-green-600">Incluido</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-700">Gestión legal completa</span>
                <span className="font-semibold text-green-600">Incluido</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-700">Coordinación y seguimiento</span>
                <span className="font-semibold text-green-600">Incluido</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-700">Garantía de resultado</span>
                <span className="font-semibold text-green-600">Incluido</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg border-2 border-green-300">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="font-bold text-green-700 text-lg">€8,000-12,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-ibertalento-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para optimizar tu proceso de contratación?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a reducir costes, tiempo y riesgos en tu próxima contratación internacional
            </p>
            <Button 
              size="lg" 
              variant="ibertalento"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Calcula tu ahorro potencial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
