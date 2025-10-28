#!/bin/bash

# Script para subir archivos directamente a public_html
FTP_HOST="ftp.ibertalento.com"
FTP_USER="juanra@ibertalento.com"
FTP_PASS="t)6jqzhCIX5fsK;}"
LOCAL_DIR="./out"
REMOTE_DIR="/public_html/"

echo "🚀 Subiendo archivos directamente a public_html..."
echo "📁 Directorio local: $LOCAL_DIR"
echo "🌐 Servidor FTP: $FTP_HOST"
echo "📂 Directorio remoto: $REMOTE_DIR"

# Función para subir archivos y directorios recursivamente
upload_dir() {
    local local_path="$1"
    local remote_path="$2"

    # Crear directorio remoto si no existe
    curl -s -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/$remote_path" --ftp-create-dirs

    for item in "$local_path"/*; do
        if [ -f "$item" ]; then
            echo "📤 Subiendo: $item -> $remote_path/$(basename "$item")"
            curl -u "$FTP_USER:$FTP_PASS" --ftp-create-dirs -T "$item" "ftp://$FTP_HOST/$remote_path/$(basename "$item")"
            echo "✅ Subido: $(basename "$item")"
        elif [ -d "$item" ]; then
            echo "📤 Subiendo: $item -> $remote_path/$(basename "$item")/"
            upload_dir "$item" "$remote_path/$(basename "$item")"
        fi
    done
}

# Iniciar la subida
upload_dir "$LOCAL_DIR" "$REMOTE_DIR"

echo ""
echo "🎉 ¡Despliegue completado!"
echo "🌐 Tu web debería estar disponible en: https://ibertalento.com"



