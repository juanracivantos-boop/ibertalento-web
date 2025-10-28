#!/bin/bash

# Script para limpiar todo y crear una carpeta única con la web
FTP_HOST="ftp.ibertalento.com"
FTP_USER="juanra@ibertalento.com"
FTP_PASS="t)6jqzhCIX5fsK;}"

echo "🧹 Limpiando todo y creando carpeta única..."

# Crear directorio juanra limpio
echo "📁 Creando directorio /juanra/ limpio..."
curl -s --ftp-create-dirs \
     --user "$FTP_USER:$FTP_PASS" \
     "ftp://$FTP_HOST/juanra/" || true

# Función para subir archivos directamente desde el directorio local
upload_file() {
    local local_file="$1"
    local remote_file="$2"
    
    if [ -f "$local_file" ]; then
        echo "📤 Subiendo: $remote_file"
        curl -s --upload-file "$local_file" \
             --user "$FTP_USER:$FTP_PASS" \
             "ftp://$FTP_HOST/juanra/$remote_file"
        echo "✅ Subido: $remote_file"
    fi
}

# Función para subir directorios recursivamente
upload_directory() {
    local local_dir="$1"
    local remote_dir="$2"
    
    echo "📁 Subiendo directorio: $remote_dir"
    
    # Crear directorio remoto
    curl -s --ftp-create-dirs \
         --user "$FTP_USER:$FTP_PASS" \
         "ftp://$FTP_HOST/juanra/$remote_dir/" || true
    
    # Subir archivos del directorio
    for item in "$local_dir"/*; do
        if [ -f "$item" ]; then
            local filename=$(basename "$item")
            upload_file "$item" "$remote_dir/$filename"
        elif [ -d "$item" ]; then
            local dirname=$(basename "$item")
            upload_directory "$item" "$remote_dir/$dirname"
        fi
    done
}

# Subir archivos principales desde el directorio out local
echo "📂 Subiendo archivos desde ./out/..."

# Archivos principales
upload_file "./out/index.html" "index.html"
upload_file "./out/robots.txt" "robots.txt"
upload_file "./out/sitemap.xml" "sitemap.xml"
upload_file "./out/404.html" "404.html"
upload_file "./.htaccess" ".htaccess"

# Directorios principales
upload_directory "./out/_next" "_next"
upload_directory "./out/assets" "assets"
upload_directory "./out/blog" "blog"
upload_directory "./out/casos-de-exito" "casos-de-exito"
upload_directory "./out/contacto" "contacto"
upload_directory "./out/legal" "legal"
upload_directory "./out/proceso" "proceso"
upload_directory "./out/sectores" "sectores"
upload_directory "./out/servicios" "servicios"
upload_directory "./out/404" "404"

echo ""
echo "🎉 ¡Web limpia creada!"
echo "📁 Directorio final: /juanra/"
echo "🌐 Configura el Document Root en cPanel para apuntar a: /juanra/"
echo ""
echo "📋 Archivos principales:"
echo "   - index.html (página principal)"
echo "   - .htaccess (configuración del servidor)"
echo "   - robots.txt (SEO)"
echo "   - sitemap.xml (SEO)"
echo "   - 404.html (página de error)"
echo ""
echo "📁 Directorios:"
echo "   - _next/ (archivos de Next.js)"
echo "   - assets/ (logos y recursos)"
echo "   - blog/, casos-de-exito/, contacto/, legal/, proceso/, sectores/, servicios/ (páginas)"
echo "   - 404/ (página de error)"



