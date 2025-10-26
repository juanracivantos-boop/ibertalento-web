#!/bin/bash

# Script para arreglar y reiniciar la web de Ibertalento

echo "╔════════════════════════════════════════════╗"
echo "║  🔧 ARREGLANDO WEB IBERTALENTO           ║"
echo "╚════════════════════════════════════════════╝"
echo ""

echo "🔴 Paso 1/5: Cerrando todos los servidores Node..."
killall -9 node 2>/dev/null
sleep 5
echo "✅ Servidores cerrados"
echo ""

echo "🧹 Paso 2/5: Limpiando cachés..."
cd /Users/juanramoncivantos/Desktop/web_empresa
rm -rf .next
rm -rf node_modules/.cache
rm -rf /tmp/*.log 2>/dev/null
echo "✅ Cachés limpiadas"
echo ""

echo "📦 Paso 3/5: Verificando dependencias..."
if [ ! -d "node_modules" ]; then
  echo "⚠️  No hay node_modules, instalando..."
  npm install
fi
echo "✅ Dependencias OK"
echo ""

echo "🚀 Paso 4/5: Iniciando servidor..."
npm run dev &
SERVER_PID=$!
echo "✅ Servidor iniciando (PID: $SERVER_PID)"
echo ""

echo "⏳ Paso 5/5: Esperando compilación..."
sleep 15
echo ""

echo "╔════════════════════════════════════════════╗"
echo "║  ✅ ¡LISTO!                              ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "🌐 Abre tu navegador en una de estas URLs:"
echo ""
echo "   → http://localhost:3000"
echo "   → http://localhost:3001"
echo "   → http://localhost:3002"
echo ""
echo "💡 Prueba cada una hasta que encuentres la que funciona"
echo ""
echo "📋 Para ver los logs:"
echo "   tail -f /Users/juanramoncivantos/Desktop/web_empresa/.next/logs/dev.log"
echo ""
echo "🛑 Para detener el servidor:"
echo "   killall -9 node"
echo ""


