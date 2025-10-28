// Configuración de Email para Ibertalento con Gmail
// IMPORTANTE: Usar contraseña de aplicación de Gmail, NO la contraseña normal
export const emailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: 'info@ibertalento.com',
    pass: 'TU_CONTRASEÑA_DE_APLICACION_AQUI' // Reemplazar con contraseña de aplicación de Gmail
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



