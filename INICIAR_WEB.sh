#!/bin/bash

echo "🚀 Iniciando servidor de Ibertalento..."
echo ""
echo "📍 La web estará disponible en: http://localhost:3000"
echo ""
echo "⚠️  Para detener el servidor presiona Ctrl+C"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cd "$(dirname "$0")"
npm run dev

