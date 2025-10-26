# 🌍 Ibertalento - Web Corporativa

> **Talento sin fronteras para España**

Web corporativa ultra moderna para **Ibertalento**, empresa especializada en traer talento internacional cualificado a España con gestión legal completa.

---

## 🚀 Características Principales

### ✨ Diseño Ultra Moderno
- **Hero Section Animado**: Efectos 3D, partículas flotantes y gradientes dinámicos
- **Navegación Inteligente**: Navbar con efecto glass-morphism y menús desplegables animados
- **Animaciones Avanzadas**: Framer Motion para transiciones suaves y efectos visuales
- **Responsive Design**: Optimizado para todos los dispositivos

### 🎨 Branding Ibertalento
- **Colores Corporativos**: Rojo y amarillo de España (#C60B1E, #FFC400)
- **Tipografía Premium**: Inter, Merriweather y Montserrat
- **Iconografía Moderna**: Lucide React icons
- **Imágenes Profesionales**: Unsplash API integrada

### 🛠️ Stack Tecnológico
- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **SEO**: next-seo + Schema.org
- **Testing**: Vitest + Testing Library

---

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/ibertalento-web.git

# Instalar dependencias
cd ibertalento-web
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en el navegador
http://localhost:3000
```

---

## 📁 Estructura del Proyecto

```
ibertalento-web/
├── src/
│   ├── app/                      # App Router de Next.js
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Página de inicio
│   │   ├── globals.css          # Estilos globales
│   │   ├── servicios/           # Páginas de servicios
│   │   ├── proceso/             # Página del proceso
│   │   ├── sectores/            # Páginas por sector
│   │   ├── contacto/            # Página de contacto
│   │   ├── sitemap.ts           # Sitemap dinámico
│   │   └── robots.ts            # Robots.txt dinámico
│   │
│   ├── components/              # Componentes React
│   │   ├── ui/                  # Componentes base (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ...
│   │   ├── layout/              # Componentes de layout
│   │   │   ├── NavbarIbertalento.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/            # Secciones de página
│   │   │   ├── HeroIbertalento.tsx
│   │   │   ├── StatsKPI.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── SectorCards.tsx
│   │   │   └── ...
│   │   ├── forms/               # Formularios
│   │   │   └── ContactForm.tsx
│   │   └── seo/                 # Componentes SEO
│   │       └── JsonLd.tsx
│   │
│   ├── lib/                     # Utilidades
│   │   └── utils.ts
│   │
│   ├── hooks/                   # Custom hooks
│   │   └── use-toast.ts
│   │
│   └── test/                    # Configuración de tests
│       └── setup.ts
│
├── public/                      # Archivos estáticos
│   ├── images/
│   └── logos/
│
├── tailwind.config.ts           # Configuración de Tailwind
├── tsconfig.json                # Configuración de TypeScript
├── next.config.js               # Configuración de Next.js
├── vitest.config.ts             # Configuración de Vitest
└── package.json                 # Dependencias del proyecto
```

---

## 🎨 Sistema de Diseño

### Colores Principales

```css
/* Colores de España */
--spanish-red: #C60B1E
--spanish-yellow: #FFC400

/* Paleta Ibertalento */
--ibertalento-50: #fff7ed
--ibertalento-500: #f97316
--ibertalento-900: #7c2d12
```

### Tipografía

- **Headings**: Montserrat (Display)
- **Body**: Inter (Sans-serif)
- **Accents**: Merriweather (Serif)

### Espaciado

- **Container**: max-w-7xl
- **Section Padding**: py-16 lg:py-24
- **Component Spacing**: space-y-8

---

## 🧩 Componentes Principales

### HeroIbertalento
Hero section ultra moderno con:
- Animaciones 3D con efecto parallax
- Partículas flotantes animadas
- Gradientes dinámicos
- Estadísticas en tiempo real
- CTAs prominentes

### NavbarIbertalento
Navegación avanzada con:
- Efecto glass-morphism al hacer scroll
- Menús desplegables animados
- Responsive mobile menu
- Logo animado

### ProcessTimeline
Timeline interactivo con:
- 7 fases del proceso
- Animaciones de entrada
- Iconos personalizados
- Información detallada por fase

### ContactForm
Formulario avanzado con:
- Validación en tiempo real (Zod)
- Estados visuales de error
- Consentimientos RGPD
- Animaciones de envío

---

## 📊 Páginas Principales

### 🏠 Inicio (`/`)
- Hero ultra moderno
- Estadísticas clave (KPIs)
- Problema/Solución
- Sectores especializados
- Timeline del proceso
- Beneficios
- Testimonios
- Comparativa ROI
- CTA final

### 💼 Servicios (`/servicios`)
- Headhunting especializado
- Trámites de extranjería
- Soluciones por sector
- FAQs

### ⏱️ Proceso (`/proceso`)
- Timeline detallado (7 fases)
- Explicación de los 4 meses
- Beneficios del proceso
- Entregables por fase

### 🏭 Sectores
- Industria
- Servicios
- Hostelería
- Construcción

### 📞 Contacto (`/contacto`)
- Formulario completo
- Información de contacto
- Aviso del proceso de 4 meses

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build            # Build de producción
npm run start            # Servidor de producción

# Calidad de código
npm run lint             # Linter
npm run type-check       # Verificar tipos
npm run format           # Formatear código
npm run format:check     # Verificar formato

# Testing
npm run test             # Tests
npm run test:ui          # Tests con UI
npm run test:coverage    # Coverage
```

---

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Variables de Entorno

Crear `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://ibertalento.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📈 SEO y Performance

### Optimizaciones Implementadas
- ✅ Metadatos completos (Open Graph, Twitter Cards)
- ✅ Schema.org markup (Organization, Service, FAQ)
- ✅ Sitemap.xml dinámico
- ✅ Robots.txt configurado
- ✅ Imágenes optimizadas (next/image)
- ✅ Lazy loading
- ✅ Code splitting automático
- ✅ Lighthouse Score > 90

### Accesibilidad
- ✅ WCAG 2.2 AA compliant
- ✅ Navegación por teclado
- ✅ ARIA labels
- ✅ Contraste de colores
- ✅ Tamaños de toque adecuados

---

## 🎯 Propuesta de Valor

**Ibertalento** integra headhunting especializado y despacho de extranjería para que las empresas capten y traigan talento a España con un único interlocutor, de principio a fin.

### Sectores Especializados
- 🏭 **Industria**: Operarios, técnicos, supervisores
- 💼 **Servicios**: Administrativos, atención al cliente, logística
- 🍽️ **Hostelería**: Chefs, camareros, recepcionistas
- 🏗️ **Construcción**: Albañiles, electricistas, fontaneros

### Proceso en 4 Meses
1. **Análisis** (1-2 semanas)
2. **Selección** (3-4 semanas)
3. **Trámites** (6-8 semanas)
4. **Incorporación** (2-3 semanas)

---

## 📞 Contacto

- **Email**: info@ibertalento.com
- **Teléfono**: +34 900 123 456
- **Web**: https://ibertalento.com
- **Horario**: Lun-Vie 9:00-18:00

---

## 📄 Licencia

Este proyecto es privado y confidencial de Ibertalento.

---

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

## 📝 Changelog

### v1.0.0 (2024-01-01)
- ✨ Hero ultra moderno con animaciones 3D
- ✨ Navbar con glass-morphism
- ✨ Sistema de diseño completo
- ✨ Formulario de contacto avanzado
- ✨ Timeline interactivo
- ✨ SEO optimizado
- ✨ Tests implementados

---

**Hecho con ❤️ por el equipo de Ibertalento**
