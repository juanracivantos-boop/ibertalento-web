// Configuración de Email para Ibertalento - Versión alternativa
export const emailConfig = {
  // Opción 1: Gmail SMTP (requiere contraseña de aplicación)
  gmail: {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'info@ibertalento.com',
      pass: 'Madrid2026#' // Debe ser contraseña de aplicación de Gmail
    }
  },
  
  // Opción 2: Servidor del hosting (si está disponible)
  hosting: {
    host: 'mail.ibertalento.com',
    port: 587,
    secure: false,
    auth: {
      user: 'info@ibertalento.com',
      pass: 'Madrid2026#'
    },
    tls: {
      rejectUnauthorized: false
    }
  },
  
  // Opción 3: Servidor alternativo común
  alternative: {
    host: 'smtp.ibertalento.com',
    port: 587,
    secure: false,
    auth: {
      user: 'info@ibertalento.com',
      pass: 'Madrid2026#'
    }
  }
}

export const emailSettings = {
  from: 'info@ibertalento.com',
  to: 'info@ibertalento.com',
  subject: 'Nueva consulta desde ibertalento.com'
}



