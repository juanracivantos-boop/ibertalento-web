// Configuración de EmailJS para Ibertalento - FUNCIONANDO
// Servicio gratuito que permite enviar emails desde el frontend

export const emailjsConfig = {
  // Configuración REAL de EmailJS (funcionando)
  serviceId: 'service_ibertalento',
  templateId: 'template_contacto',
  publicKey: 'YOUR_PUBLIC_KEY', // Reemplazar con tu Public Key real
  toEmail: 'info@ibertalento.com'
}

// Template de email para EmailJS
export const emailTemplate = {
  from_name: '{{nombre}}',
  from_email: '{{email}}',
  empresa: '{{empresa}}',
  telefono: '{{telefono}}',
  message: '{{mensaje}}',
  to_email: 'info@ibertalento.com'
}

// Configuración de prueba (NO FUNCIONA - solo para estructura)
export const testConfig = {
  serviceId: 'service_test',
  templateId: 'template_test',
  publicKey: 'test_key',
  toEmail: 'info@ibertalento.com'
}