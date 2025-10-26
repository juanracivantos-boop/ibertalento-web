# Ibertalento - Web Corporativa

Web corporativa para Ibertalento, empresa que integra headhunting especializado y despacho de extranjería para que las empresas capten y traigan talento a España con un único interlocutor, de principio a fin.

**Talento sin fronteras** 🤝

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes
- **Accesibilidad WCAG AA**
- **SEO optimizado**
- **Responsive design**
- **Performance optimizado**

## 🛠️ Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Hook Form + Zod
- Vitest + Testing Library

## 📦 Instalación

```bash
# Instalar dependencias
npm install
# o
yarn install

# Ejecutar en desarrollo
npm run dev
# o
yarn dev
```

## 🧪 Testing

```bash
# Ejecutar tests
npm run test
# o
yarn test

# Tests con UI
npm run test:ui
# o
yarn test:ui

# Coverage
npm run test:coverage
# o
yarn test:coverage
```

## 📝 Scripts disponibles

- `dev` - Servidor de desarrollo
- `build` - Build de producción
- `start` - Servidor de producción
- `lint` - Linter
- `test` - Tests
- `format` - Formatear código
- `type-check` - Verificar tipos

## 🎨 Diseño

El diseño sigue los principios de:
- **Serio pero con vida**: Tono corporativo pero humano
- **Accesibilidad**: Cumple WCAG AA
- **Performance**: Optimizado para Core Web Vitals
- **SEO**: Estructura semántica y metadatos

## 📱 Responsive

- Mobile First
- Breakpoints: sm, md, lg, xl, 2xl
- Componentes adaptativos

## 🔧 Configuración

### Variables de entorno

Crear `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://cibertalento.com
NEXT_PUBLIC_GA_ID=your-ga-id
```

### Tailwind

Configuración personalizada con colores de marca Cibertalento.

### TypeScript

Configuración estricta con paths aliases.

## 📄 Estructura

```
src/
├── app/                 # App Router
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── layout/         # Layout components
│   └── sections/       # Secciones de página
├── lib/                # Utilidades
├── hooks/              # Custom hooks
├── types/              # Tipos TypeScript
└── styles/             # Estilos globales
```

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otros proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- etc.

## 📊 Performance

- Lighthouse Score > 90
- Core Web Vitals optimizados
- Imágenes optimizadas con next/image
- Lazy loading
- Code splitting automático

## 🔒 Seguridad

- Headers de seguridad configurados
- CSP (Content Security Policy)
- HTTPS obligatorio
- Validación de formularios

## 📈 SEO

- Metadatos optimizados
- Schema.org markup
- Sitemap.xml
- Robots.txt
- Open Graph / Twitter Cards

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es privado y confidencial de Ibertalento.

## 📞 Contacto

- Email: info@ibertalento.com
- Teléfono: +34 900 123 456
- Web: https://ibertalento.com

---

## 🎯 Propuesta de Valor

**Ibertalento** integra headhunting especializado y despacho de extranjería:

- 🎯 **Búsqueda directa** y shortlists en 1-2 semanas
- 📋 **Coordinamos visados y permisos** con cumplimiento normativo
- 🏭 **Sectores**: Industria, Hostelería, Construcción, Servicios
- 📈 **KPI-driven**: time-to-shortlist, ratio oferta/aceptación, NPS
- 🔐 **Confidencialidad, ética y calidad** en cada proyecto
