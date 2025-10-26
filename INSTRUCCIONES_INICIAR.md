# 🚀 INSTRUCCIONES PARA INICIAR LA WEB

## Problema Actual
Hay algunos errores de sintaxis que necesitan ser corregidos antes de que la web funcione correctamente.

## Solución Rápida

### Opción 1: Limpiar completamente y reconstruir

```bash
cd /Users/juanramoncivantos/Desktop/web_empresa

# Matar todos los procesos de Node
killall node

# Eliminar caché y node_modules
rm -rf .next node_modules package-lock.json

# Reinstalar dependencias
npm install

# Iniciar el servidor
npm run dev
```

### Opción 2: Solo limpiar caché

```bash
cd /Users/juanramoncivantos/Desktop/web_empresa

# Matar procesos
killall node

# Limpiar caché
rm -rf .next

# Iniciar
npm run dev
```

## Verificar que funciona

Después de iniciar, deberías ver algo como:

```
✓ Ready in 1s
- Local:        http://localhost:3000
```

Luego abre el navegador en: **http://localhost:3000**

## Si sigue sin funcionar

Prueba hacer un build de producción para ver errores específicos:

```bash
npm run build
```

Esto te mostrará cualquier error de sintaxis o tipo que necesite ser corregido.

---

**Nota**: Los errores actuales parecen estar relacionados con archivos manifest de Next.js que no se generan correctamente. La reconstrucción completa debería solucionarlo.

