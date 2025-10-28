#!/usr/bin/env node

/**
 * Script para configurar EmailJS automáticamente
 * Este script te guiará paso a paso para configurar EmailJS
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Configuración automática de EmailJS para Ibertalento\n');

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function setupEmailJS() {
  console.log('📧 PASO 1: Crear cuenta en EmailJS');
  console.log('1. Ve a https://www.emailjs.com/');
  console.log('2. Haz clic en "Sign Up"');
  console.log('3. Regístrate con tu email: info@ibertalento.com');
  console.log('4. Verifica tu email\n');
  
  await askQuestion('Presiona Enter cuando hayas creado la cuenta...');

  console.log('\n📧 PASO 2: Configurar servicio Gmail');
  console.log('1. En el dashboard, ve a "Email Services"');
  console.log('2. Haz clic en "Add New Service"');
  console.log('3. Selecciona "Gmail"');
  console.log('4. Configura:');
  console.log('   - Service Name: ibertalento-contact');
  console.log('   - Gmail Account: info@ibertalento.com');
  console.log('   - App Password: [tu contraseña de aplicación de Gmail]\n');
  
  await askQuestion('Presiona Enter cuando hayas configurado el servicio...');

  console.log('\n📧 PASO 3: Crear template de email');
  console.log('1. Ve a "Email Templates"');
  console.log('2. Haz clic en "Create New Template"');
  console.log('3. Configura:');
  console.log('   - Template Name: contact-form');
  console.log('   - Subject: Nueva consulta desde ibertalento.com - {{empresa}}');
  console.log('   - Content: [usa el HTML que está en EMAILJS_CONFIGURACION.md]\n');
  
  await askQuestion('Presiona Enter cuando hayas creado el template...');

  console.log('\n📧 PASO 4: Obtener las claves');
  console.log('1. Ve a "Account" → "General"');
  console.log('2. Copia tu "Public Key"');
  console.log('3. Anota tu "Service ID" (del servicio que creaste)');
  console.log('4. Anota tu "Template ID" (del template que creaste)\n');

  const publicKey = await askQuestion('🔑 Public Key: ');
  const serviceId = await askQuestion('🔑 Service ID: ');
  const templateId = await askQuestion('🔑 Template ID: ');

  // Actualizar el archivo de configuración
  const configPath = path.join(__dirname, 'src', 'lib', 'emailjs-config.ts');
  const configContent = `// Configuración de EmailJS para Ibertalento
// Servicio gratuito que permite enviar emails desde el frontend
export const emailjsConfig = {
  serviceId: '${serviceId}',
  templateId: '${templateId}',
  publicKey: '${publicKey}',
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
}`;

  fs.writeFileSync(configPath, configContent);

  console.log('\n✅ ¡Configuración completada!');
  console.log('📁 Archivo actualizado: src/lib/emailjs-config.ts');
  console.log('\n🚀 Próximos pasos:');
  console.log('1. Ejecuta: npm run build');
  console.log('2. Ejecuta: ./deploy-ibertalento-folder.sh');
  console.log('3. Prueba el formulario en https://ibertalento.com/contacto');

  rl.close();
}

setupEmailJS().catch(console.error);



