// Configuración temporal de EmailJS para pruebas
// IMPORTANTE: Reemplazar con valores reales de tu cuenta EmailJS

export const emailjsConfig = {
  // Configuración temporal - REEMPLAZAR CON VALORES REALES
  serviceId: 'service_ibertalento', // Tu Service ID de EmailJS
  templateId: 'template_contacto', // Tu Template ID de EmailJS
  publicKey: 'YOUR_PUBLIC_KEY', // Tu Public Key de EmailJS
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



