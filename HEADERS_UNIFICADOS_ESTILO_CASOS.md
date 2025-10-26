# Headers Unificados - Estilo "Casos de Éxito"

**Fecha:** 26 de octubre de 2025  
**Estado:** ✅ Completado

---

## 🎯 Objetivo

Unificar el estilo de los headers en todas las páginas (Servicios, Proceso, Sectores) para que coincidan con el diseño de Casos de Éxito: **texto blanco directo sobre imagen oscura con overlay**.

---

## ✨ Estilo implementado

### Diseño visual
- **Fondo:** Imagen a pantalla completa
- **Overlay principal:** `bg-gradient-to-br from-black/85 via-black/75 to-black/70`
- **Overlay decorativo:** `bg-gradient-to-tr from-brand-red/30` con `opacity-50`
- **Logo Ibertalento:** Centrado arriba, en blanco con `drop-shadow-2xl` (h-10 mobile, h-12 desktop)
- **Badge superior:** Pill transparente `bg-white/20 backdrop-blur-sm ring-1 ring-white/30`
- **Título (H1):** Texto blanco con `drop-shadow-2xl` (tamaños: 5xl → 6xl → 7xl)
- **Subtítulo:** Texto `text-white/95` con `drop-shadow-lg`
- **Altura mínima:** 400px mobile, 500px desktop

---

## 📄 Páginas actualizadas

### 1. Servicios (`/servicios`)
```tsx
<PageHeader 
  title="Servicios" 
  subtitle="Selección especializada, trámites de extranjería e integración en destino"
  badgeLabel="SERVICIOS"
  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&fit=crop"
/>
```

### 2. Proceso (`/proceso`)
```tsx
<PageHeader 
  title="Nuestro Proceso"
  subtitle="Un proceso transparente, estructurado y eficiente. De la búsqueda a la incorporación en aproximadamente 4 meses."
  badgeLabel="PROCESO"
  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80&fit=crop"
/>
```

### 3. Sectores (`/sectores`)
```tsx
<PageHeader 
  title="Sectores"
  subtitle="Entendemos las particularidades de cada sector para responder rápido y con precisión. Nuestra experiencia nos permite identificar el talento adecuado para cada industria."
  badgeLabel="SECTORES"
  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80&fit=crop"
/>
```

### 4. Casos de Éxito (`/casos-de-exito`)
**Ya tenía este estilo** - No se modificó

---

## 🔧 Componente actualizado

### `PageHeader.tsx` - Nuevo diseño

**Antes:** Frosted card blanco con texto oscuro  
**Después:** Texto blanco directo sobre imagen con overlay oscuro

#### Props disponibles:
```typescript
interface PageHeaderProps {
  title: string          // Título principal (H1)
  subtitle?: string      // Subtítulo opcional
  badgeLabel?: string    // Label del badge superior (default: 'IBERTALENTO')
  src?: string           // URL de la imagen de fondo
  priority?: boolean     // Loading priority (default: true)
}
```

#### Estructura HTML:
1. Imagen de fondo (`<img>` absoluta)
2. Overlay oscuro (gradiente negro)
3. Overlay decorativo (gradiente rojo translúcido)
4. **Logo de Ibertalento** (blanco, centrado, con drop-shadow)
5. Badge superior (pill blanco translúcido)
6. H1 blanco con drop-shadow
7. Subtítulo blanco con drop-shadow

---

## 📂 Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `src/components/sections/PageHeader.tsx` | Rediseño completo: de frosted card a texto blanco sobre imagen oscura |
| `src/app/servicios/page.tsx` | Agregado `badgeLabel="SERVICIOS"` |
| `src/app/proceso/page.tsx` | Agregado `badgeLabel="PROCESO"` |
| `src/app/sectores/page.tsx` | Agregado `badgeLabel="SECTORES"` |

---

## 🎨 Comparativa visual

### Antes (Frosted card)
```
┌─────────────────────────────┐
│ Imagen oscura de fondo      │
│   ┌─────────────────────┐   │
│   │ 📦 IBERTALENTO      │   │
│   │                     │   │
│   │ TÍTULO (negro)      │   │
│   │                     │   │
│   │ Subtítulo (gris)    │   │
│   │                     │   │
│   └─────────────────────┘   │
│     ↑ Tarjeta blanca        │
└─────────────────────────────┘
```

### Después (Texto directo con logo)
```
┌─────────────────────────────┐
│ Imagen oscura + overlay     │
│                             │
│     🔴 IBERTALENTO (logo)   │
│                             │
│     🏷️ SERVICIOS            │
│                             │
│     TÍTULO (blanco)         │
│                             │
│     Subtítulo (blanco)      │
│                             │
│   ↑ Con logo + texto        │
└─────────────────────────────┘
```

---

## ✅ Beneficios del nuevo diseño

1. **Consistencia:** Todas las páginas principales comparten el mismo estilo visual
2. **Impacto:** Mayor dramatismo y presencia con texto blanco sobre imágenes oscuras
3. **Contraste:** Drop shadows garantizan legibilidad sobre cualquier imagen
4. **Modernidad:** Diseño más limpio sin frosted card intermedia
5. **Identidad:** Badge personalizado por sección (SERVICIOS, PROCESO, SECTORES)
6. **Flexibilidad:** Prop `badgeLabel` permite personalización fácil

---

## 🧪 Testing

Para verificar en el navegador:

```bash
http://localhost:3000/servicios
http://localhost:3000/proceso
http://localhost:3000/sectores
http://localhost:3000/casos-de-exito
```

**Checklist visual:**

- [ ] **Logo de Ibertalento visible en blanco** arriba del badge
- [ ] Texto blanco visible sobre imagen oscura
- [ ] Badge superior muestra label correcto (SERVICIOS/PROCESO/SECTORES)
- [ ] Drop shadows proporcionan legibilidad (logo, título, subtítulo)
- [ ] Overlay oscuro activo (from-black/85)
- [ ] Overlay decorativo rojo visible sutilmente
- [ ] Responsive: logo, altura y tamaños de texto se adaptan
- [ ] Mobile (375px): logo h-10, texto legible y centrado
- [ ] Tablet (768px): proporciones correctas
- [ ] Desktop (1440px): logo h-12, título grande y espaciado adecuado

---

## 📱 Responsive

| Viewport | H1 size | Layout |
|----------|---------|--------|
| 375px (mobile) | text-5xl (3rem) | Stack centrado |
| 768px (md) | text-6xl (3.75rem) | Stack centrado |
| 1024px (lg) | text-7xl (4.5rem) | Stack centrado |

---

## 🎯 Paleta de colores usada

- **Overlay principal:** Negro con gradiente (85% → 75% → 70%)
- **Overlay decorativo:** Rojo `brand-red` con 30% opacidad
- **Badge:** Blanco con 20% opacidad + backdrop blur
- **Texto título:** Blanco (`text-white`)
- **Texto subtítulo:** Blanco 95% (`text-white/95`)

---

## 🚀 Resultado final

**Las 4 páginas principales ahora comparten el mismo diseño de header:**
1. ✅ Imagen de fondo a pantalla completa
2. ✅ Overlay oscuro para contraste
3. ✅ **Logo de Ibertalento** en blanco con drop shadow
4. ✅ Badge personalizado por sección
5. ✅ Título y subtítulo blancos con drop shadow
6. ✅ Diseño limpio, moderno y consistente

---

## 📝 Notas adicionales

- Si necesitas agregar más páginas con este estilo, simplemente usa `<PageHeader>` con los props apropiados
- Las imágenes de Unsplash son placeholders - puedes reemplazarlas con imágenes corporativas propias
- El componente es totalmente reutilizable y acepta cualquier combinación de props
- El `badgeLabel` por defecto es "IBERTALENTO" si no se especifica

---

🎉 **¡Headers unificados y listos para producción!**

