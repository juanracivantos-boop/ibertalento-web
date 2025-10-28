#!/bin/bash

# Script para reiniciar la web de Ibertalento limpiamente

echo "🔴 Cerrando todos los servidores Node..."
killall -9 node 2>/dev/null
sleep 3

echo "🧹 Limpiando cachés..."
cd /Users/juanramoncivantos/Desktop/web_empresa
rm -rf .next
rm -rf node_modules/.cache
rm -rf /tmp/next-dev.log

echo "✅ Cachés limpiadas"
sleep 2

echo "🚀 Iniciando servidor..."
npm run dev

echo "✅ Servidor iniciado en http://localhost:3000"





