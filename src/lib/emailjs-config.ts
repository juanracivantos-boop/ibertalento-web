// Configuración de EmailJS para Ibertalento
// Servicio gratuito que permite enviar emails desde el frontend
export const emailjsConfig = {
  serviceId: 'service_ibertalento', // Se configurará en EmailJS
  templateId: 'template_contacto', // Se configurará en EmailJS
  publicKey: 'YOUR_PUBLIC_KEY', // Se obtendrá de EmailJS
  toEmail: 'info@ibertalento.com'
}

// Configuración temporal para pruebas (usar valores reales de EmailJS)
export const tempEmailConfig = {
  serviceId: 'service_ibertalento',
  templateId: 'template_contacto', 
  publicKey: 'YOUR_PUBLIC_KEY',
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

// Configuración temporal para pruebas (reemplazar con valores reales)
export const tempConfig = {
  serviceId: 'service_1234567', // Reemplazar con Service ID real
  templateId: 'template_1234567', // Reemplazar con Template ID real
  publicKey: 'user_1234567890abcdef', // Reemplazar con Public Key real
  toEmail: 'info@ibertalento.com'
}
