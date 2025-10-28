#!/bin/bash

# Script para corregir permisos de archivos
FTP_HOST="ftp.ibertalento.com"
FTP_USER="juanra@ibertalento.com"
FTP_PASS="t)6jqzhCIX5fsK;}"

echo "🔧 Corrigiendo permisos de archivos..."

# Función para corregir permisos
fix_permissions() {
    local file="$1"
    echo "📝 Corrigiendo permisos: $file"
    
    # Establecer permisos 644 para archivos
    curl -s --quote "SITE CHMOD 644 $file" \
         --user "$FTP_USER:$FTP_PASS" \
         "ftp://$FTP_HOST/public_html/$file" || true
}

# Función para corregir permisos de directorios
fix_dir_permissions() {
    local dir="$1"
    echo "📁 Corrigiendo permisos de directorio: $dir"
    
    # Establecer permisos 755 para directorios
    curl -s --quote "SITE CHMOD 755 $dir" \
         --user "$FTP_USER:$FTP_PASS" \
         "ftp://$FTP_HOST/public_html/$dir" || true
}

# Corregir permisos del directorio principal
fix_dir_permissions "."

# Corregir permisos de archivos principales
fix_permissions "index.html"
fix_permissions "index.php"
fix_permissions ".htaccess"
fix_permissions "robots.txt"
fix_permissions "sitemap.xml"

# Corregir permisos de directorios
fix_dir_permissions "_next"
fix_dir_permissions "assets"
fix_dir_permissions "blog"
fix_dir_permissions "casos-de-exito"
fix_dir_permissions "contacto"
fix_dir_permissions "legal"
fix_dir_permissions "proceso"
fix_dir_permissions "sectores"
fix_dir_permissions "servicios"

echo ""
echo "✅ Permisos corregidos!"
echo "🔄 Espera 2-3 minutos y verifica en cPanel"



