import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { emailConfig } from '@/lib/email-config'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, empresa, email, telefono, mensaje } = body

    // Validar datos requeridos
    if (!nombre || !empresa || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      )
    }

    // Configurar el transporter de Nodemailer con Gmail
    const transporter = nodemailer.createTransport(emailConfig)

    // Verificar la conexión antes de enviar
    try {
      await transporter.verify()
      console.log('✅ Conexión SMTP verificada correctamente')
    } catch (verifyError) {
      console.error('❌ Error verificando conexión SMTP:', verifyError)
      return NextResponse.json(
        { error: 'Error de configuración del servidor de email' },
        { status: 500 }
      )
    }

    // Configurar el email
    const mailOptions = {
      from: 'info@ibertalento.com',
      to: 'info@ibertalento.com', // Email de destino
      replyTo: email, // Email del cliente para responder
      subject: `Nueva consulta desde ibertalento.com - ${empresa}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #C5162D; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Nueva Consulta - Ibertalento</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f8f9fa;">
            <h2 style="color: #333; margin-top: 0;">Información del Cliente</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Nombre:</strong> ${nombre}</p>
              <p style="margin: 10px 0;"><strong>Empresa:</strong> ${empresa}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${telefono}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
              <p style="line-height: 1.6; color: #555;">${mensaje.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="background-color: #6B7280; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Este email fue enviado desde el formulario de contacto de ibertalento.com</p>
            <p style="margin: 5px 0 0 0;">Fecha: ${new Date().toLocaleString('es-ES')}</p>
          </div>
        </div>
      `,
      text: `
Nueva consulta desde ibertalento.com

Información del Cliente:
- Nombre: ${nombre}
- Empresa: ${empresa}
- Email: ${email}
- Teléfono: ${telefono}

Mensaje:
${mensaje}

---
Este email fue enviado desde el formulario de contacto de ibertalento.com
Fecha: ${new Date().toLocaleString('es-ES')}
      `
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error al enviar email:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
