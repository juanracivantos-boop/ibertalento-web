// Configuración de Email para Ibertalento con servidor del hosting
export const emailConfig = {
  host: 'mail.ibertalento.com', // Servidor SMTP del hosting
  port: 587,
  secure: false,
  auth: {
    user: 'info@ibertalento.com',
    pass: 'Madrid2026#'
  },
  tls: {
    rejectUnauthorized: false
  }
}

export const emailSettings = {
  from: 'info@ibertalento.com',
  to: 'info@ibertalento.com',
  subject: 'Nueva consulta desde ibertalento.com'
}



