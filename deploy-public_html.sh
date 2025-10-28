#!/bin/bash

# Script para subir archivos al directorio public_html
FTP_HOST="ftp.ibertalento.com"
FTP_USER="juanra@ibertalento.com"
FTP_PASS="t)6jqzhCIX5fsK;}"
FTP_DIR="/public_html/"

LOCAL_DIR="./out"

echo "🚀 Subiendo archivos al directorio public_html..."
echo "📁 Directorio local: $LOCAL_DIR"
echo "🌐 Servidor FTP: $FTP_HOST"
echo "📂 Directorio remoto: $FTP_DIR"

# Función para subir archivos recursivamente
upload_files() {
    local local_path="$1"
    local remote_path="$2"
    
    echo "📤 Subiendo: $local_path -> $remote_path"
    
    # Crear directorio remoto si no existe
    curl -s --ftp-create-dirs \
         --user "$FTP_USER:$FTP_PASS" \
         "ftp://$FTP_HOST$remote_path" || true
    
    # Si es un directorio, subir todos los archivos
    if [ -d "$local_path" ]; then
        for file in "$local_path"/*; do
            if [ -e "$file" ]; then
                filename=$(basename "$file")
                if [ -d "$file" ]; then
                    upload_files "$file" "$remote_path$filename/"
                else
                    curl -s --upload-file "$file" \
                         --user "$FTP_USER:$FTP_PASS" \
                         "ftp://$FTP_HOST$remote_path$filename"
                    echo "✅ Subido: $filename"
                fi
            fi
        done
    else
        # Es un archivo individual
        filename=$(basename "$local_path")
        curl -s --upload-file "$local_path" \
             --user "$FTP_USER:$FTP_PASS" \
             "ftp://$FTP_HOST$remote_path$filename"
        echo "✅ Subido: $filename"
    fi
}

# Verificar que existe el directorio out
if [ ! -d "$LOCAL_DIR" ]; then
    echo "❌ Error: No se encontró el directorio $LOCAL_DIR"
    echo "💡 Ejecuta 'npm run build' primero"
    exit 1
fi

# Subir archivos al directorio public_html
upload_files "$LOCAL_DIR" "$FTP_DIR"

echo ""
echo "🎉 ¡Despliegue completado!"
echo "🌐 Tu web debería estar disponible en: https://ibertalento.com"



