# Guía de Despliegue - Cibertalento Web

## Preparación para producción

### 1. Variables de entorno

Crear archivo `.env.production` con las variables de producción:

```env
NEXT_PUBLIC_SITE_URL=https://cibertalento.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc...
RECAPTCHA_SECRET_KEY=6Lc...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@cibertalento.com
SMTP_PASS=your-app-password
```

### 2. Build de producción

```bash
# Instalar dependencias
npm install

# Build optimizado
npm run build

# Verificar build
npm run start
```

### 3. Optimizaciones

- ✅ Imágenes optimizadas con `next/image`
- ✅ CSS minificado y purgado
- ✅ JavaScript code-splitting
- ✅ Lazy loading de componentes
- ✅ SEO optimizado
- ✅ Accesibilidad WCAG AA

## Despliegue en Vercel (Recomendado)

### 1. Conectar repositorio

1. Ir a [vercel.com](https://vercel.com)
2. Importar proyecto desde GitHub
3. Configurar variables de entorno
4. Desplegar automáticamente

### 2. Configuración de dominio

```bash
# Añadir dominio personalizado
vercel domains add cibertalento.com

# Configurar DNS
# Añadir registro CNAME: www -> cname.vercel-dns.com
# Añadir registro A: @ -> 76.76.19.61
```

### 3. Variables de entorno en Vercel

```bash
# Añadir variables
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add NEXT_PUBLIC_GA_ID
vercel env add SMTP_USER
vercel env add SMTP_PASS
```

## Despliegue en Netlify

### 1. Configuración

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### 2. Variables de entorno

Configurar en el dashboard de Netlify:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `SMTP_USER`
- `SMTP_PASS`

## Despliegue en AWS Amplify

### 1. Conectar repositorio

1. Ir a AWS Amplify Console
2. Conectar repositorio GitHub
3. Configurar build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 2. Variables de entorno

Configurar en Amplify Console:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `SMTP_USER`
- `SMTP_PASS`

## Configuración de DNS

### Registro A
```
Type: A
Name: @
Value: [IP del servidor]
TTL: 3600
```

### Registro CNAME
```
Type: CNAME
Name: www
Value: cibertalento.com
TTL: 3600
```

### Registro MX (para email)
```
Type: MX
Name: @
Value: mail.cibertalento.com
Priority: 10
TTL: 3600
```

## SSL/HTTPS

### Vercel
- SSL automático con Let's Encrypt
- Renovación automática

### Netlify
- SSL automático
- Certificados Let's Encrypt

### AWS Amplify
- SSL automático con AWS Certificate Manager

## Monitoreo y Analytics

### 1. Google Analytics

```javascript
// Configurar en layout.tsx
gtag('config', 'G-XXXXXXXXXX', {
  page_title: 'Cibertalento',
  page_location: window.location.href,
})
```

### 2. Vercel Analytics

```bash
npm install @vercel/analytics
```

### 3. Error Monitoring

```bash
npm install @sentry/nextjs
```

## Performance

### 1. Core Web Vitals

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### 2. Lighthouse Score

- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

### 3. Optimizaciones implementadas

- Image optimization con `next/image`
- Font optimization
- CSS purging
- Code splitting
- Lazy loading
- Service worker (PWA)

## Backup y recuperación

### 1. Código fuente
- Repositorio Git en GitHub
- Backup automático

### 2. Base de datos (si aplica)
- Backup diario automático
- Retención de 30 días

### 3. Archivos estáticos
- CDN con replicación global
- Backup en múltiples regiones

## Mantenimiento

### 1. Actualizaciones

```bash
# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Actualizar Next.js
npm install next@latest
```

### 2. Monitoreo

- Uptime monitoring
- Error tracking
- Performance monitoring
- Security scanning

### 3. Logs

- Application logs
- Error logs
- Access logs
- Performance logs

## Troubleshooting

### Error 500
- Verificar variables de entorno
- Revisar logs de aplicación
- Verificar conectividad de base de datos

### Error 404
- Verificar configuración de rutas
- Revisar archivo `next.config.js`
- Verificar redirecciones

### Performance issues
- Verificar Core Web Vitals
- Optimizar imágenes
- Revisar bundle size
- Verificar CDN

## Contacto

Para soporte técnico:
- Email: tech@cibertalento.com
- Teléfono: +34 900 123 456
