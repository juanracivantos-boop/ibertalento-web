#!/bin/bash

# Script para unificar toda la web en la carpeta juanra
FTP_HOST="ftp.ibertalento.com"
FTP_USER="juanra@ibertalento.com"
FTP_PASS="t)6jqzhCIX5fsK;}"

echo "🔄 Unificando toda la web en la carpeta /juanra/..."

# Crear directorio juanra si no existe
echo "📁 Creando directorio /juanra/..."
curl -s --ftp-create-dirs \
     --user "$FTP_USER:$FTP_PASS" \
     "ftp://$FTP_HOST/juanra/" || true

# Función para mover archivos desde diferentes directorios
move_from_directory() {
    local source_dir="$1"
    local target_dir="/juanra/"
    
    echo "📤 Moviendo archivos desde $source_dir a $target_dir"
    
    # Listar archivos en el directorio fuente
    for file in $(curl -s --user "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/$source_dir/" | awk '{print $9}' | grep -v '^\.$' | grep -v '^\.\.$' | grep -v '^\.ftpquota$'); do
        if [ ! -z "$file" ]; then
            echo "📤 Moviendo: $file"
            
            # Descargar archivo desde directorio fuente
            curl -s --user "$FTP_USER:$FTP_PASS" \
                 "ftp://$FTP_HOST/$source_dir/$file" \
                 -o "/tmp/$file"
            
            # Subir archivo a directorio destino
            curl -s --upload-file "/tmp/$file" \
                 --user "$FTP_USER:$FTP_PASS" \
                 "ftp://$FTP_HOST/$target_dir$file"
            
            # Limpiar archivo temporal
            rm -f "/tmp/$file"
            echo "✅ Movido: $file"
        fi
    done
}

# Función para mover directorios
move_directory_from_source() {
    local source_dir="$1"
    local target_dir="/juanra/"
    local dir_name="$2"
    
    echo "📁 Moviendo directorio: $dir_name"
    
    # Crear directorio en destino
    curl -s --ftp-create-dirs \
         --user "$FTP_USER:$FTP_PASS" \
         "ftp://$FTP_HOST/$target_dir$dir_name/" || true
    
    # Mover archivos del directorio
    for file in $(curl -s --user "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/$source_dir/$dir_name/" | awk '{print $9}' | grep -v '^\.$' | grep -v '^\.\.$'); do
        if [ ! -z "$file" ]; then
            echo "📤 Moviendo: $dir_name/$file"
            
            # Descargar archivo
            curl -s --user "$FTP_USER:$FTP_PASS" \
                 "ftp://$FTP_HOST/$source_dir/$dir_name/$file" \
                 -o "/tmp/$file"
            
            # Subir archivo
            curl -s --upload-file "/tmp/$file" \
                 --user "$FTP_USER:$FTP_PASS" \
                 "ftp://$FTP_HOST/$target_dir$dir_name/$file"
            
            # Limpiar archivo temporal
            rm -f "/tmp/$file"
            echo "✅ Movido: $dir_name/$file"
        fi
    done
}

# Mover archivos desde el directorio raíz
echo "📂 Moviendo desde directorio raíz..."
move_from_directory ""

# Mover directorios desde el directorio raíz
move_directory_from_source "" "_next"
move_directory_from_source "" "assets"
move_directory_from_source "" "blog"
move_directory_from_source "" "casos-de-exito"
move_directory_from_source "" "contacto"
move_directory_from_source "" "legal"
move_directory_from_source "" "proceso"
move_directory_from_source "" "sectores"
move_directory_from_source "" "servicios"
move_directory_from_source "" "404"

# Mover archivos desde /public_html/ibertalento.com/
echo "📂 Moviendo desde /public_html/ibertalento.com/..."
move_from_directory "public_html/ibertalento.com"

# Mover directorios desde /public_html/ibertalento.com/
move_directory_from_source "public_html/ibertalento.com" "_next"
move_directory_from_source "public_html/ibertalento.com" "assets"
move_directory_from_source "public_html/ibertalento.com" "blog"
move_directory_from_source "public_html/ibertalento.com" "casos-de-exito"
move_directory_from_source "public_html/ibertalento.com" "contacto"
move_directory_from_source "public_html/ibertalento.com" "legal"
move_directory_from_source "public_html/ibertalento.com" "proceso"
move_directory_from_source "public_html/ibertalento.com" "sectores"
move_directory_from_source "public_html/ibertalento.com" "servicios"
move_directory_from_source "public_html/ibertalento.com" "404"

echo ""
echo "🎉 ¡Web unificada en /juanra/!"
echo "📁 Directorio final: /juanra/"
echo "🌐 Configura el Document Root en cPanel para apuntar a: /juanra/"



