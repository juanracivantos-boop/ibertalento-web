# 🚀 Configuración automática de EmailJS para Ibertalento

## 📧 Configuración paso a paso

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"**
3. Regístrate con: `info@ibertalento.com`
4. Verifica tu email

### 2. Configurar servicio Gmail
1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Configura:
   - **Service Name:** `ibertalento-contact`
   - **Gmail Account:** `info@ibertalento.com`
   - **App Password:** [tu contraseña de aplicación de Gmail]

### 3. Crear template de email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura:
   - **Template Name:** `contact-form`
   - **Subject:** `Nueva consulta desde ibertalento.com - {{empresa}}`
   - **Content:** Usa el HTML de abajo

### 4. Obtener las claves
1. Ve a **"Account"** → **"General"**
2. Copia tu **"Public Key"**
3. Anota tu **"Service ID"** (del servicio)
4. Anota tu **"Template ID"** (del template)

### 5. Actualizar configuración
Reemplaza en `src/lib/emailjs-config.ts`:
```typescript
export const emailjsConfig = {
  serviceId: 'TU_SERVICE_ID_AQUI',
  templateId: 'TU_TEMPLATE_ID_AQUI',
  publicKey: 'TU_PUBLIC_KEY_AQUI',
  toEmail: 'info@ibertalento.com'
}
```

## 📝 Template HTML para EmailJS

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background-color: #C5162D; color: white; padding: 20px; text-align: center;">
    <h1 style="margin: 0; font-size: 24px;">Nueva Consulta - Ibertalento</h1>
  </div>
  
  <div style="padding: 30px; background-color: #f8f9fa;">
    <h2 style="color: #333; margin-top: 0;">Información del Cliente</h2>
    
    <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin: 10px 0;"><strong>Nombre:</strong> {{from_name}}</p>
      <p style="margin: 10px 0;"><strong>Empresa:</strong> {{empresa}}</p>
      <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:{{from_email}}">{{from_email}}</a></p>
      <p style="margin: 10px 0;"><strong>Teléfono:</strong> {{telefono}}</p>
    </div>
    
    <div style="background-color: white; padding: 20px; border-radius: 8px;">
      <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
      <p style="line-height: 1.6; color: #555;">{{message}}</p>
    </div>
  </div>
  
  <div style="background-color: #6B7280; color: white; padding: 15px; text-align: center; font-size: 12px;">
    <p style="margin: 0;">Este email fue enviado desde el formulario de contacto de ibertalento.com</p>
    <p style="margin: 5px 0 0 0;">Fecha: {{date}}</p>
  </div>
</div>
```

## 🔧 Script automatizado

Ejecuta el script de configuración:
```bash
node setup-emailjs.js
```

## ✅ Después de configurar

1. Ejecuta: `npm run build`
2. Ejecuta: `./deploy-ibertalento-folder.sh`
3. Prueba el formulario en: https://ibertalento.com/contacto

## 🎯 Ventajas de EmailJS

- ✅ **Gratuito** hasta 200 emails/mes
- ✅ **Sin configuración SMTP** compleja
- ✅ **Funciona desde el frontend** directamente
- ✅ **Templates personalizables**
- ✅ **Fácil de configurar**
- ✅ **Confiable** y ampliamente usado



