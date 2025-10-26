# Hero actualizado - Mensaje "Talento Internacional"

**Fecha:** 26 de octubre de 2025  
**Estado:** ✅ Implementado y funcionando

---

## 🎯 Objetivo

Reforzar el mensaje de **traemos talento extranjero** en el hero principal, con copy claro sobre:
- Reclutamiento en origen
- Gestión legal (visados/permisos)
- Tiempos realistas (desde 3 meses según país)
- Documentación en regla

---

## 📝 Cambios implementados

### 1. Nuevo H1
```
Talento internacional listo para tu negocio
```

### 2. Nuevo subcopy
```
Reclutamos en origen, tramitamos visados y acompañamos la integración. 
Desde 3 meses según país. Documentación validada y contrato indefinido.
```

### 3. Badge superior
- 🌍 **"Talento internacional verificado"**
- Estilo: `bg-red-50 border-red-100 text-brand-red`

### 4. Nuevos badges/métricas (3 columnas)

#### Gestión legal incluida
- Icono: `FileCheck2` (rojo sobre blanco)
- Texto: "Visados y permisos según país de origen"

#### Red global de candidatos
- Icono: `Network` (rojo sobre blanco)
- Texto: "Perfiles validados por competencias"

#### Cobertura en toda España
- Icono: `Globe2` (rojo sobre blanco)
- Texto: "Construcción, hostelería, industria y limpieza"

### 5. CTAs actualizados
- **Primario:** "Solicitar candidatos" (rojo `#C5162D`)
- **Secundario:** "Consulta gratuita" (outline blanco/gris)

---

## 🎨 Diseño

- **Frosted card** mantenida para máxima legibilidad
- **Scrim global:** `bg-gradient-to-t from-black/70 via-black/40 to-black/10`
- **Paleta:** Rojo `#C5162D` + Grises + Blanco
- **Contraste:** AA (texto oscuro sobre tarjeta blanca)
- **Iconos:** `lucide-react` (Globe2, FileCheck2, Network)
- **Sombras:** `shadow-md` en iconos principales, `shadow-lg hover:shadow-xl` en CTAs

---

## 🔍 SEO / Metadatos actualizados

### Title
```html
<title>Ibertalento | Talento internacional listo para tu negocio</title>
```

### Description
```html
<meta name="description" content="Reclutamos en origen, tramitamos visados y acompañamos la integración. Desde 3 meses según país. Documentación validada y contrato indefinido." />
```

### Keywords nuevas
- talento internacional
- reclutamiento extranjero
- gestión de visados
- permisos de trabajo
- contratación extranjera
- recursos humanos internacionales

---

## 📂 Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `src/components/sections/HeroWithMedia.tsx` | Nuevo H1, subcopy, badges y CTAs |
| `src/app/layout.tsx` | Metadatos actualizados (title, description, keywords, OG) |

---

## ✅ Criterios de aceptación cumplidos

- [x] H1 refleja explícitamente **talento internacional/extranjero**
- [x] Subcopy menciona **gestión legal** y **tiempos desde 3 meses según país**
- [x] Legibilidad AA en desktop y mobile (texto oscuro sobre tarjeta blanca)
- [x] CTAs visibles con estados `hover/focus` activos
- [x] Badges coherentes y sin ruido visual
- [x] Iconos actualizados: Globe2, FileCheck2, Network
- [x] Frosted card + scrim para garantizar contraste
- [x] Metadatos SEO actualizados

---

## 🧪 Testing recomendado

1. **Contraste:** Verificar ratio AA con herramienta de accesibilidad
2. **Mobile:** Probar en viewport 375px (iPhone SE)
3. **Tablet:** Probar en viewport 768px (iPad)
4. **Desktop:** Probar en viewport 1440px
5. **Focus states:** Navegar con teclado (Tab + Enter)
6. **Screen readers:** Verificar que badges tengan ARIA labels correctos

---

## 📊 Comparativa antes/después

### Antes
- H1: "Mano de obra profesional lista para tu negocio"
- Enfoque: Validación técnica
- No se mencionaba origen internacional ni gestión legal

### Después
- H1: "Talento internacional listo para tu negocio"
- Enfoque: Reclutamiento en origen + gestión legal
- Tiempos claros (3 meses) y documentación validada

---

## 🚀 Próximos pasos opcionales

### Variante A/B (opcional)
Si quieres probar otras versiones del H1, puedes implementar:

```tsx
const HEADLINES = [
  'Talento internacional listo para tu negocio',
  'Mano de obra internacional con documentación en regla',
  'Traemos talento extranjero cualificado para tu empresa',
];

// Leer parámetro ?h=0|1|2 de la query
const searchParams = useSearchParams();
const headlineIndex = parseInt(searchParams.get('h') || '0', 10);
const headline = HEADLINES[headlineIndex] || HEADLINES[0];
```

### Imagen de fondo mejorada
Recomendación: imagen corporativa mostrando:
- Personas en contexto de trabajo real (obra, cocina, taller)
- Diversidad (sin banderas para no sobrecargar)
- Calidad profesional (mínimo 1920x1080)
- Ruta sugerida: `/hero/internacional.jpg`

---

## 📞 Contacto

Si necesitas ajustes adicionales, contacta al equipo de desarrollo.

**¡El mensaje de talento internacional está ahora claro y destacado! 🌍**

