// Configuración de Email para Ibertalento con Gmail
export const emailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: 'info@ibertalento.com',
    pass: 'Madrid2026#'
  },
  tls: {
    rejectUnauthorized: false // Para certificados autofirmados
  }
}

export const emailSettings = {
  from: 'info@ibertalento.com',
  to: 'info@ibertalento.com',
  subject: 'Nueva consulta desde ibertalento.com'
}
