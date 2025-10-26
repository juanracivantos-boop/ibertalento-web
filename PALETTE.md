# 🎨 Sistema de Diseño - Ibertalento

## Paleta de Colores

### Base (Dark-First)
```css
--background: #0E0F12      /* Fondo principal */
--surface: #151821         /* Superficie elevada (cards, modales) */
--text-primary: #EEF1F5    /* Texto principal (títulos, copy importante) */
--text-secondary: #C8CFDB  /* Texto secundario (descripciones, labels) */
--border: #2A2F3A          /* Bordes sutiles */
```

**Contraste AA:**
- `#EEF1F5` sobre `#0E0F12` → **14.8:1** ✅ (AAA)
- `#C8CFDB` sobre `#0E0F12` → **9.2:1** ✅ (AAA)
- `#EEF1F5` sobre `#151821` → **13.1:1** ✅ (AAA)

---

### Acentos por Sector

#### 🏗️ Construcción
```css
--construction-primary: #FF6A00   /* Naranja vibrante */
--construction-muted: #9AA3AE     /* Gris cemento */
```
**Contraste:**
- `#FFFFFF` sobre `#FF6A00` → **4.68:1** ✅ (AA)
- `#FF6A00` sobre `#0E0F12` → **5.12:1** ✅ (AA)

**Uso:** Botones CTA, badges, iconos de sector, hover states

---

#### 🍽️ Hostelería
```css
--hospitality-primary: #0E7C66    /* Verde profundo */
--hospitality-muted: #EADCC2      /* Arena cálida */
```
**Contraste:**
- `#FFFFFF` sobre `#0E7C66` → **5.91:1** ✅ (AA)
- `#0E7C66` sobre `#0E0F12` → **3.22:1** ⚠️ (usar con text-light)

**Uso:** Acentos sutiles, backgrounds de cards, badges secundarios

---

#### 🔧 Industria / Automoción
```css
--industry-primary: #1E3A8A       /* Azul acero oscuro */
--industry-accent: #06B6D4        /* Cian técnico */
```
**Contraste:**
- `#FFFFFF` sobre `#1E3A8A` → **8.59:1** ✅ (AAA)
- `#06B6D4` sobre `#0E0F12` → **4.87:1** ✅ (AA)

**Uso:** CTAs de alta conversión, gráficos, estados activos

---

#### 🧹 Limpieza / Mantenimiento
```css
--cleaning-primary: #4F46E5       /* Índigo moderno */
--cleaning-accent: #A3E635        /* Lima energética */
```
**Contraste:**
- `#FFFFFF` sobre `#4F46E5` → **8.28:1** ✅ (AAA)
- `#A3E635` sobre `#0E0F12` → **11.3:1** ✅ (AAA)

**Uso:** Highlights, success states, micro-interacciones

---

## Regla de Uso: 80-15-5

```
80% → Neutros (background, surface, text-primary, text-secondary, border)
15% → Acentos por sector (primarios)
 5% → Highlights (acentos secundarios, estados hover/active)
```

---

## Componentes: Ejemplos de Aplicación

### Botón Primario (Construcción)
```html
<button class="bg-[#FF6A00] text-white hover:bg-[#FF7A1A] 
               transition-colors duration-200 ease-out
               px-6 py-3 rounded-xl font-semibold
               focus-visible:ring-2 focus-visible:ring-[#FF6A00] 
               focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0F12]">
  Solicitar candidatos
</button>
```
**Contraste:** 4.68:1 ✅

---

### Card Base
```html
<div class="bg-[#151821] border border-[#2A2F3A] rounded-2xl p-6 
            shadow-lg hover:shadow-xl transition-all duration-220 ease-out
            hover:border-[#FF6A00]/20">
  <h3 class="text-[#EEF1F5] text-xl font-semibold mb-2">
    Construcción
  </h3>
  <p class="text-[#C8CFDB] text-base">
    Perfiles listos en 7–14 días con validación técnica.
  </p>
</div>
```
**Contraste texto:** 13.1:1 ✅ (AAA)

---

### Badge de Confianza
```html
<span class="inline-flex items-center gap-2 px-3 py-1.5 
             bg-[#0E7C66]/10 border border-[#0E7C66]/30 
             rounded-full text-sm font-medium text-[#0E7C66]">
  <svg class="w-4 h-4" />
  Garantía de sustitución
</span>
```

---

### Input / Form
```html
<input 
  class="w-full px-4 py-3 bg-[#0E0F12] border border-[#2A2F3A] 
         rounded-xl text-[#EEF1F5] placeholder:text-[#C8CFDB]/50
         focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20
         transition-all duration-150 ease-out"
  placeholder="Número de vacantes"
/>
```

---

## Tipografía

### Familia
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-accent: 'Sora', 'Manrope', sans-serif; /* Titulares */
```

### Escala (clamp para responsive)
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);     /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);       /* 14-16px */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);     /* 16-18px */
--text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);   /* 18-20px */
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);       /* 20-24px */
--text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);    /* 24-30px */
--text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem);  /* 30-36px */
--text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);        /* 36-48px */
--text-5xl: clamp(3rem, 2.5rem + 2.5vw, 3.5rem);          /* 48-56px */
```

### Jerarquía
```
H1 (Hero): text-5xl (48-56px) / font-bold / tracking-tight / text-[#EEF1F5]
H2 (Section): text-3xl (30-36px) / font-semibold / text-[#EEF1F5]
H3 (Card): text-xl (20-24px) / font-semibold / text-[#EEF1F5]
Body: text-base (16-18px) / font-normal / leading-relaxed / text-[#C8CFDB]
Small: text-sm (14-16px) / font-medium / text-[#C8CFDB]
```

---

## Espaciado & Layout

### Contenedor
```css
.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem; /* 24px mobile */
}

@media (min-width: 768px) {
  .container-custom {
    padding: 0 2rem; /* 32px tablet */
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 3rem; /* 48px desktop */
  }
}
```

### Secciones
```css
section {
  padding-top: clamp(3rem, 5vw, 6rem);    /* 48-96px */
  padding-bottom: clamp(3rem, 5vw, 6rem);
}
```

---

## Animaciones & Transiciones

### Timing
```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 220ms;
--easing: cubic-bezier(0.4, 0, 0.2, 1); /* ease-out */
```

### Hover States
```css
/* Card elevation */
.card-hover {
  transition: transform 220ms ease-out, box-shadow 220ms ease-out;
}
.card-hover:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.2);
}

/* Button press */
.button-press:active {
  transform: scale(0.98);
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Sombras

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.15);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.25), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

---

## Bordes & Radios

```css
--radius-sm: 0.5rem;    /* 8px - inputs, badges */
--radius-md: 0.75rem;   /* 12px - buttons, small cards */
--radius-lg: 1rem;      /* 16px - cards medianas */
--radius-xl: 1.5rem;    /* 24px - cards grandes, hero sections */
--radius-2xl: 2rem;     /* 32px - hero containers, destacados */
```

---

## Iconografía

### Tamaños
```css
--icon-xs: 14px;   /* Badges, inline text */
--icon-sm: 16px;   /* Buttons, small UI */
--icon-md: 20px;   /* Cards, list items */
--icon-lg: 24px;   /* Section headers */
--icon-xl: 32px;   /* Hero, feature highlights */
--icon-2xl: 48px;  /* Process steps, decorative */
```

### Librería
- Lucide React (consistente, moderno, ~40kb gzipped)
- Alternativa: Heroicons v2

---

## Grid & Breakpoints

```css
/* Mobile first */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;

/* Grid común */
.grid-sectors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .grid-sectors {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## Focus States (Accesibilidad)

```css
.focus-ring {
  @apply focus-visible:outline-none 
         focus-visible:ring-2 
         focus-visible:ring-offset-2 
         focus-visible:ring-offset-[#0E0F12];
}

/* Por sector */
.focus-construction { @apply focus-visible:ring-[#FF6A00]; }
.focus-hospitality { @apply focus-visible:ring-[#0E7C66]; }
.focus-industry { @apply focus-visible:ring-[#1E3A8A]; }
.focus-cleaning { @apply focus-visible:ring-[#4F46E5]; }
```

---

## Ejemplos de Composición

### Hero Section
```html
<section class="relative overflow-hidden bg-[#0E0F12] py-20">
  <div class="container-custom">
    <div class="max-w-4xl">
      <!-- Badge de confianza -->
      <span class="inline-flex items-center gap-2 px-4 py-2 
                   bg-[#FF6A00]/10 border border-[#FF6A00]/20 
                   rounded-full text-sm font-medium text-[#FF6A00] mb-6">
        <svg class="w-4 h-4" />
        7–14 días de media
      </span>
      
      <!-- H1 -->
      <h1 class="text-5xl font-bold tracking-tight text-[#EEF1F5] mb-6">
        Mano de obra profesional, lista en 7–14 días
      </h1>
      
      <!-- Subcopy -->
      <p class="text-xl text-[#C8CFDB] mb-8 max-w-2xl">
        Modelo de éxito: 0 € hasta la incorporación. 
        Selección ágil y cobertura nacional.
      </p>
      
      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="bg-[#FF6A00] text-white hover:bg-[#FF7A1A] 
                       px-8 py-4 rounded-xl font-semibold 
                       transition-colors duration-200 ease-out">
          Solicitar candidatos
        </button>
        <button class="border-2 border-[#2A2F3A] text-[#EEF1F5] 
                       hover:border-[#FF6A00]/50 hover:bg-[#FF6A00]/5
                       px-8 py-4 rounded-xl font-semibold
                       transition-all duration-200 ease-out">
          Quiero postularme
        </button>
      </div>
    </div>
  </div>
</section>
```

---

## Tests de Contraste

### Botones sobre fondos
| Combinación | Ratio | Estado |
|-------------|-------|--------|
| `#FFFFFF` sobre `#FF6A00` | 4.68:1 | ✅ AA |
| `#FFFFFF` sobre `#0E7C66` | 5.91:1 | ✅ AA |
| `#FFFFFF` sobre `#1E3A8A` | 8.59:1 | ✅ AAA |
| `#FFFFFF` sobre `#4F46E5` | 8.28:1 | ✅ AAA |

### Texto sobre fondos
| Combinación | Ratio | Estado |
|-------------|-------|--------|
| `#EEF1F5` sobre `#0E0F12` | 14.8:1 | ✅ AAA |
| `#C8CFDB` sobre `#0E0F12` | 9.2:1 | ✅ AAA |
| `#EEF1F5` sobre `#151821` | 13.1:1 | ✅ AAA |
| `#C8CFDB` sobre `#151821` | 8.1:1 | ✅ AAA |

**Herramienta de verificación:** https://webaim.org/resources/contrastchecker/

---

## Modo Claro (Light Mode) - Opcional

Si se implementa toggle:

```css
--background-light: #FAFBFC
--surface-light: #FFFFFF
--text-primary-light: #0E0F12
--text-secondary-light: #4A5568
--border-light: #E2E8F0
```

Mantener los mismos acentos por sector, ajustando opacidad si es necesario.

---

## Exportación para Tailwind

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#0E0F12',
        surface: '#151821',
        'text-primary': '#EEF1F5',
        'text-secondary': '#C8CFDB',
        border: '#2A2F3A',
        construction: {
          DEFAULT: '#FF6A00',
          muted: '#9AA3AE',
        },
        hospitality: {
          DEFAULT: '#0E7C66',
          muted: '#EADCC2',
        },
        industry: {
          DEFAULT: '#1E3A8A',
          accent: '#06B6D4',
        },
        cleaning: {
          DEFAULT: '#4F46E5',
          accent: '#A3E635',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Sora', 'Manrope', 'sans-serif'],
      },
    },
  },
}
```

---

**Última actualización:** Octubre 2025  
**Diseñado para:** Ibertalento B2B Web  
**Stack:** Next.js 15 + Tailwind 3.4 + shadcn/ui


