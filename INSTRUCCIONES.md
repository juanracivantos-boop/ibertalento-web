# 🚀 Instrucciones de Instalación y Uso - Ibertalento

## ✅ ¿Qué se ha completado?

### 1. **Actualización Completa de Branding**
- ✅ Nombre actualizado de "Cibertalento" a "Ibertalento"
- ✅ Logo temporal con inicial "I"  
- ✅ Todos los metadatos SEO actualizados
- ✅ Emails actualizados a info@ibertalento.com
- ✅ URLs actualizadas a ibertalento.com

### 2. **Propuesta de Valor LinkedIn Integrada**
- ✅ Tagline: "Talento sin fronteras"
- ✅ Hero actualizado: "Un único interlocutor de principio a fin"
- ✅ KPIs actualizados: 
  - Time-to-shortlist: 1-2 semanas
  - Tasa de expedientes aprobados: 100%
  - Ratio oferta/aceptación: 95%
- ✅ Enfoque en cumplimiento normativo y velocidad con rigor

### 3. **Web Corporativa Lista**
- ✅ Diseño serio y profesional
- ✅ Imágenes reales de trabajadores (Unsplash)
- ✅ Enfoque B2B para empresas
- ✅ 9 secciones en homepage
- ✅ Componentes reutilizables
- ✅ Responsive y accesible (WCAG AA)

---

## 📦 Instalación

### Paso 1: Instalar Node.js
Si aún no tienes Node.js instalado, descárgalo desde:
https://nodejs.org/ (versión LTS recomendada)

### Paso 2: Instalar dependencias
Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

O si prefieres usar yarn:

```bash
yarn install
```

Este proceso puede tardar unos minutos.

---

## 🖥️ Ejecutar en Desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

La web estará disponible en:
**http://localhost:3000**

Abre tu navegador y visita esa URL.

---

## 🏗️ Compilar para Producción

Para crear la versión optimizada para producción:

```bash
npm run build
```

Y luego para ejecutarla:

```bash
npm start
```

---

## 📁 Estructura del Proyecto

```
web_empresa/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal (Navbar + Footer)
│   │   ├── page.tsx            # Página de inicio
│   │   └── globals.css         # Estilos globales
│   │
│   ├── components/
│   │   ├── ui/                 # Componentes base (botones, cards, etc.)
│   │   ├── layout/             # Navbar y Footer
│   │   └── sections/           # Secciones de la homepage
│   │
│   ├── lib/                    # Utilidades
│   └── hooks/                  # Custom hooks
│
├── public/                     # Archivos estáticos (imágenes, logos)
├── package.json                # Dependencias
├── tailwind.config.ts          # Configuración de Tailwind
└── tsconfig.json               # Configuración de TypeScript
```

---

## 🎨 Personalización

### 1. **Logo Real**
Actualmente hay un logo temporal con la letra "I".

Para actualizar con el logo real:

1. Guarda tu logo en `public/logo.svg` o `public/logo.png`
2. Edita `src/components/layout/Navbar.tsx` línea 46
3. Edita `src/components/layout/Footer.tsx` línea 38

Reemplaza el div temporal por:

```tsx
<Image 
  src="/logo.svg" 
  alt="Ibertalento" 
  width={32} 
  height={32}
/>
```

### 2. **Colores de Marca**

Los colores actuales están en `tailwind.config.ts` línea 42-50:

```typescript
cibertalento: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  // ... más colores
  600: '#0284c7', // Color principal
}
```

Si quieres cambiarlos por los colores del logo que proporcionaste:
- Rojo: `#E63946`
- Amarillo: `#F1C40F`

Actualiza el archivo `tailwind.config.ts`:

```typescript
ibertalento: {
  red: '#E63946',
  yellow: '#F1C40F',
  blue: '#023E8A',
  // ... etc
}
```

Y luego busca y reemplaza `cibertalento-600` por `ibertalento-blue` en todos los archivos.

### 3. **Información de Contacto**

Actualiza en:
- `src/components/layout/Footer.tsx` líneas 48-62
- `src/components/sections/CTASection.tsx` líneas 87 y 103

Cambia:
- Email: info@ibertalento.com
- Teléfono: +34 900 123 456
- Dirección: Tu dirección real

### 4. **Imágenes Reales**

Las imágenes actuales son de Unsplash (stock photos reales pero genéricas).

Para usar tus propias fotos:

1. Guarda las imágenes en `public/images/`
2. Edita los componentes:
   - Hero: `src/components/sections/HeroCibertalento.tsx` línea 89
   - Sectores: `src/components/sections/SectorCards.tsx` líneas 12, 21, 30, 39

Cambia:
```tsx
src="https://images.unsplash.com/..."
```

Por:
```tsx
src="/images/tu-imagen.jpg"
```

---

## 📄 Páginas Adicionales a Crear

El proyecto base incluye solo la homepage. Las siguientes páginas están planificadas pero no implementadas:

- `/servicios` - Landing de servicios
- `/servicios/headhunting` - Detalle headhunting
- `/servicios/tramites-extranjeria` - Detalle extranjería
- `/proceso` - Proceso detallado
- `/sectores/industria` - Sector industria
- `/sectores/servicios` - Sector servicios
- `/sectores/hosteleria` - Sector hostelería
- `/sectores/construccion` - Sector construcción
- `/casos-exito` - Casos de éxito
- `/equipo` - Sobre nosotros
- `/blog` - Blog/artículos
- `/contacto` - Formulario de contacto

Para crear una nueva página, crea un archivo en `src/app/[nombre-pagina]/page.tsx`

Ejemplo para `/servicios`:

```bash
mkdir src/app/servicios
touch src/app/servicios/page.tsx
```

Y añade el contenido:

```tsx
export default function ServiciosPage() {
  return (
    <div>
      <h1>Servicios</h1>
      {/* Tu contenido aquí */}
    </div>
  )
}
```

---

## 🧪 Testing

Para ejecutar los tests:

```bash
npm run test
```

Para ver la interfaz de tests:

```bash
npm run test:ui
```

---

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

1. Crea una cuenta en https://vercel.com
2. Instala Vercel CLI: `npm i -g vercel`
3. Ejecuta: `vercel`
4. Sigue las instrucciones

### Opción 2: Netlify

1. Crea una cuenta en https://netlify.com
2. Arrastra la carpeta del proyecto a Netlify
3. Configura:
   - Build command: `npm run build`
   - Publish directory: `.next`

---

## 📞 Soporte

Si tienes dudas sobre el código:

1. Revisa la documentación de Next.js: https://nextjs.org/docs
2. Revisa la documentación de Tailwind: https://tailwindcss.com/docs
3. Revisa shadcn/ui: https://ui.shadcn.com/

---

## ✨ Próximos Pasos Sugeridos

1. **Instalar y probar en local** ✓ Hazlo ahora
2. **Actualizar logo e imágenes** con tus archivos reales
3. **Actualizar información de contacto** con datos reales
4. **Crear páginas adicionales** (servicios, sectores, contacto)
5. **Añadir formulario de contacto** funcional
6. **Integrar Google Analytics**
7. **Desplegar en producción**

---

## 🎯 Checklist Pre-Lanzamiento

- [ ] Logo actualizado
- [ ] Colores de marca ajustados
- [ ] Información de contacto real
- [ ] Imágenes propias subidas
- [ ] Páginas secundarias creadas
- [ ] Formulario de contacto funcional
- [ ] Textos legales (privacidad, cookies, etc.)
- [ ] Google Analytics configurado
- [ ] Dominio ibertalento.com configurado
- [ ] SSL/HTTPS activo
- [ ] Tests de velocidad (Lighthouse >90)
- [ ] Pruebas en móvil y desktop
- [ ] Revisar accesibilidad
- [ ] SEO optimizado

---

**¿Listo para empezar?** 🚀

Abre la terminal, navega a la carpeta del proyecto y ejecuta:

```bash
npm install && npm run dev
```

¡Tu web estará lista en http://localhost:3000!

