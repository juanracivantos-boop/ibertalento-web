#!/bin/bash

# Script para mover archivos de public_html al directorio raíz
FTP_HOST="ftp.ibertalento.com"
FTP_USER="juanra@ibertalento.com"
FTP_PASS="t)6jqzhCIX5fsK;}"

echo "🔄 Moviendo archivos de public_html al directorio raíz..."

# Función para mover archivos
move_file() {
    local file="$1"
    echo "📤 Moviendo: $file"
    
    # Descargar archivo desde public_html
    curl -s --user "$FTP_USER:$FTP_PASS" \
         "ftp://$FTP_HOST/public_html/$file" \
         -o "/tmp/$file"
    
    # Subir archivo al directorio raíz
    curl -s --upload-file "/tmp/$file" \
         --user "$FTP_USER:$FTP_PASS" \
         "ftp://$FTP_HOST/$file"
    
    # Limpiar archivo temporal
    rm -f "/tmp/$file"
    echo "✅ Movido: $file"
}

# Función para mover directorios
move_directory() {
    local dir="$1"
    echo "📁 Moviendo directorio: $dir"
    
    # Crear directorio en raíz
    curl -s --ftp-create-dirs \
         --user "$FTP_USER:$FTP_PASS" \
         "ftp://$FTP_HOST/$dir/" || true
    
    # Mover archivos del directorio
    for file in $(curl -s --user "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/public_html/$dir/" | awk '{print $9}' | grep -v '^\.$' | grep -v '^\.\.$'); do
        if [ ! -z "$file" ]; then
            move_file "$dir/$file"
        fi
    done
}

# Mover archivos principales
move_file "index.html"
move_file "index.php"
move_file ".htaccess"
move_file "robots.txt"
move_file "sitemap.xml"
move_file "404.html"

# Mover directorios
move_directory "_next"
move_directory "assets"
move_directory "blog"
move_directory "casos-de-exito"
move_directory "contacto"
move_directory "legal"
move_directory "proceso"
move_directory "sectores"
move_directory "servicios"
move_directory "404"

echo ""
echo "🎉 ¡Archivos movidos al directorio raíz!"
echo "🌐 Prueba acceder a: https://ibertalento.com"



