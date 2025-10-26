# 🚀 CÓMO INICIAR LA WEB

## Pasos para arrancar el servidor

1. **Abre una terminal** (Terminal.app en Mac)

2. **Navega a la carpeta del proyecto:**
```bash
cd /Users/juanramoncivantos/Desktop/web_empresa
```

3. **Inicia el servidor:**
```bash
npm run dev
```

4. **Abre tu navegador y ve a:**
   - http://localhost:3000

## ✅ Qué esperar

Deberías ver algo como esto en la terminal:
```
▲ Next.js 15.5.6
- Local:        http://localhost:3000
- Network:      http://192.168.1.X:3000
✓ Starting...
✓ Ready in XXXms
```

## 🛑 Para detener el servidor

Presiona `Ctrl + C` en la terminal donde está corriendo.

## ⚠️ Si hay problemas

1. **Puerto 3000 ocupado:** Ejecuta `killall node` y vuelve a intentar
2. **Errores de npm:** Ejecuta `npm install` primero
3. **Página en blanco:** Presiona `Cmd + Shift + R` en tu navegador para refrescar

## 📱 Acceder desde otro dispositivo

Si quieres ver la web desde tu móvil/tablet en la misma red WiFi, usa la dirección que dice "Network" en la terminal (ejemplo: http://192.168.1.133:3000)

