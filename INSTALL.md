# Guía de Instalación - Cibertalento Web

## Requisitos previos

Antes de instalar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn** (gestor de paquetes)
- **Git** (para control de versiones)

### Verificar instalaciones

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar yarn (opcional)
yarn --version
```

## Instalación paso a paso

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd web_empresa
```

### 2. Instalar dependencias

```bash
# Con npm
npm install

# O con yarn
yarn install
```

### 3. Configurar variables de entorno

Crear archivo `.env.local`:

```bash
cp .env.example .env.local
```

Editar `.env.local` con tus valores:

```env
NEXT_PUBLIC_SITE_URL=https://cibertalento.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-key
```

### 4. Ejecutar en desarrollo

```bash
# Con npm
npm run dev

# O con yarn
yarn dev
```

El proyecto estará disponible en: `http://localhost:3000`

## Scripts disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm run start

# Linting
npm run lint

# Tests
npm run test

# Tests con UI
npm run test:ui

# Coverage de tests
npm run test:coverage

# Verificar tipos TypeScript
npm run type-check

# Formatear código
npm run format

# Verificar formato
npm run format:check
```

## Estructura del proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── sitemap.ts         # Generación de sitemap
│   ├── robots.ts          # Configuración de robots
│   └── [páginas]/         # Páginas adicionales
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── layout/           # Componentes de layout
│   ├── sections/         # Secciones de página
│   ├── forms/            # Formularios
│   └── seo/              # Componentes SEO
├── lib/                  # Utilidades y configuraciones
├── hooks/                # Custom hooks
├── types/                # Tipos TypeScript
└── styles/               # Estilos adicionales
```

## Configuración adicional

### Tailwind CSS

El proyecto usa Tailwind CSS con configuración personalizada. Los colores de marca están definidos en `tailwind.config.ts`.

### shadcn/ui

Componentes UI pre-configurados. Para añadir nuevos componentes:

```bash
npx shadcn-ui@latest add [component-name]
```

### TypeScript

Configuración estricta con paths aliases configurados en `tsconfig.json`.

## Despliegue

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Otros proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- etc.

## Troubleshooting

### Error: "Module not found"

```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"

```bash
# Usar otro puerto
npm run dev -- -p 3001
```

### Error de TypeScript

```bash
# Verificar tipos
npm run type-check
```

## Soporte

Para dudas o problemas:
- Email: info@cibertalento.com
- Teléfono: +34 900 123 456

## Licencia

Proyecto privado de Cibertalento de Recursos Humanos.
