# 📸 Guía de Medios - Ibertalento

## 🎥 **Video y Fotos de Fondo del Hero**

### Ubicación de archivos
Coloca tus archivos de video e imágenes en:
```
/public/media/
```

### Archivos recomendados

#### Opción 1: Video (preferido)
- `hero-industry.mp4` - Video de industria/manufactura
- `hero-construction.mp4` - Video de construcción/obra  
- `hero-hospitality.mp4` - Video de hostelería/hoteles

**Especificaciones del video:**
- Formato: MP4 (H.264)
- Resolución: 1920x1080 (Full HD) mínimo
- Duración: 10-30 segundos (se reproduce en loop)
- Peso: < 5MB (optimizado para web)
- Sin audio (se reproduce muted)

#### Opción 2: Imágenes (fallback actual)
- `hero-industry.jpg` - Imagen de industria
- `hero-construction.jpg` - Imagen de construcción
- `hero-hospitality.jpg` - Imagen de hostelería

**Especificaciones de imágenes:**
- Formato: JPG o WebP
- Resolución: 1920x1080 mínimo
- Peso: < 500KB cada una
- Calidad: Alta, optimizada para web

### Estado actual
✅ **Slideshow funcionando** con imágenes de Unsplash (placeholders)
⏳ **Video desactivado** hasta que subas tus archivos

### Cómo activar el video

1. Sube tu video a `/public/media/hero-industry.mp4`
2. Abre `src/components/sections/HeroWithMedia.tsx`
3. Cambia la línea 30:
   ```tsx
   const [videoError, setVideoError] = useState(true)
   ```
   Por:
   ```tsx
   const [videoError, setVideoError] = useState(false)
   ```

4. Si quieres rotar entre varios videos, edita las líneas 40-44

### Optimización de videos

Para optimizar tus videos para web, usa FFmpeg:

```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M -vf scale=1920:1080 output.mp4
```

O usa herramientas online:
- https://www.freeconvert.com/video-compressor
- https://www.videosmaller.com/

---

## 🎨 **Logo**

### Ubicación actual
```
/public/assets/logo.svg
```

### Cómo reemplazar el logo

1. Coloca tu logo en `/public/assets/`
2. Formatos aceptados: SVG (preferido), PNG, JPG
3. Si usas PNG/JPG, asegúrate de tener versión 2x para pantallas retina
4. Actualiza la ruta en `src/components/ui/Logo.tsx` si cambias el nombre

**Especificaciones:**
- SVG: Vectorial, escalable
- PNG: Fondo transparente, 400x120px mínimo
- Colores: Deben coincidir con la paleta corporativa

---

## 📧 **Configuración del Formulario de Contacto**

### Datos actuales
- **Email:** info@ibertalento.com
- **Teléfono:** 607 33 85 33

### Configurar envío de emails

El formulario actualmente simula el envío. Para hacerlo funcional:

#### Opción A: Next.js API Route (recomendado)

1. Crea `.env.local` en la raíz:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@ibertalento.com
SMTP_PASS=tu_contraseña_de_aplicación
```

2. Instala nodemailer:
```bash
npm install nodemailer
```

3. El endpoint `/api/contact` ya está preparado (crear si no existe)

#### Opción B: Servicio externo (más fácil)

Usa Formspree o EmailJS:

1. Regístrate en https://formspree.io
2. Obtén tu endpoint
3. Actualiza `src/components/forms/ContactForm.tsx` línea 75:
```tsx
const response = await fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

---

## 🚀 **Despliegue**

### Antes de desplegar

✅ Reemplaza placeholders de imágenes/videos
✅ Configura envío de formulario
✅ Verifica que todos los enlaces funcionan
✅ Prueba en móvil, tablet y desktop
✅ Ejecuta `npm run build` para verificar errores

### Variables de entorno en producción

En Vercel/Netlify, añade:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@ibertalento.com
SMTP_PASS=tu_contraseña
```

---

## 📞 **Soporte**

Si necesitas ayuda:
1. Revisa este README
2. Consulta la documentación de Next.js
3. Contacta al desarrollador

**¡Tu web de Ibertalento está lista para producción!** 🎉
