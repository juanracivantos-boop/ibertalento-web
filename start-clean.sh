#!/bin/bash

echo "🧹 Limpiando procesos de Node.js..."
pkill -9 -f "next dev" 2>/dev/null
pkill -9 -f "node.*next" 2>/dev/null
sleep 2

echo "🗑️  Limpiando caché..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .swc

echo "🚀 Iniciando servidor..."
npm run dev

