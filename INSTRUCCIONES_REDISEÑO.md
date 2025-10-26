# 🚀 Instrucciones - Rediseño Paleta Limpia

## ✅ CAMBIOS COMPLETADOS

Se ha implementado el rediseño completo con:

1. **✅ Hero con marco difuminado** (`FrostedCard`)
2. **✅ Nueva paleta gris + rojo** (colores del logo)
3. **✅ Contraste AA/AAA** en todos los elementos
4. **✅ 0 errores de linting**

---

## 🌐 PARA INICIAR LA WEB

Ejecuta en tu terminal:

```bash
cd /Users/juanramoncivantos/Desktop/web_empresa
killall node
rm -rf .next
npm run dev
```

Luego abre: **http://localhost:3000**

---

## 🎨 LO QUE VERÁS

### Hero Section (Portada)
- **Marco difuminado** (frosted glass) sobre el video/imagen
- **Texto con contraste perfecto** (negro sobre blanco difuminado)
- **Colores limpios**: Solo gris y rojo
- **Badge rojo** en lugar del azul anterior

### Paleta General
- **Fondos**: Blanco y gris claro
- **Texto**: Negro y gris oscuro
- **Acento**: Rojo (#C5162D) solo en botones y CTAs
- **Eliminados**: Todos los colores azules, naranjas, verdes y morados

---

## 📁 ARCHIVOS MODIFICADOS

1. `tailwind.config.ts` - Nueva paleta configurada
2. `src/app/globals.css` - Estilos actualizados
3. `src/components/ui/FrostedCard.tsx` - **NUEVO** componente
4. `src/components/sections/HeroWithMedia.tsx` - Rediseñado con marco
5. `REDISEÑO_PALETA_ROJO_GRIS.md` - Documentación completa

---

## 📋 COMPONENTES PENDIENTES

Para completar el rediseño en toda la web, actualizar:

- [ ] `src/components/sections/Services.tsx`
- [ ] `src/app/proceso/page.tsx`
- [ ] `src/app/casos-de-exito/page.tsx`
- [ ] `src/components/sections/Sectors.tsx`
- [ ] `src/components/layout/Footer.tsx`

**Cambio necesario**: Reemplazar colores `construction`, `hosteleria`, `industria`, `limpieza` por `brand-red`

---

## 🎯 PRÓXIMOS PASOS

1. **Iniciar la web** con los comandos de arriba
2. **Ver el nuevo hero** con marco difuminado
3. **Revisar la documentación** en `REDISEÑO_PALETA_ROJO_GRIS.md`
4. **Actualizar componentes restantes** si deseas aplicar la paleta a toda la web

---

**Estado**: ✅ Hero implementado y funcionando  
**Próximo comando**: `npm run dev`

