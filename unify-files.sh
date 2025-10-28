#!/bin/bash

# Script para unificar todos los archivos en /public_html/ibertalento/
FTP_HOST="ftp.ibertalento.com"
FTP_USER="juanra@ibertalento.com"
FTP_PASS="t)6jqzhCIX5fsK;}"

echo "🔄 Unificando todos los archivos en /public_html/ibertalento/..."

# Función para mover archivos desde diferentes directorios
move_from_directory() {
    local source_dir="$1"
    local target_dir="/public_html/ibertalento/"
    
    echo "📤 Moviendo archivos desde $source_dir a $target_dir"
    
    # Listar archivos en el directorio fuente
    for file in $(curl -s --user "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/$source_dir/" | awk '{print $9}' | grep -v '^\.$' | grep -v '^\.\.$'); do
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
    local target_dir="/public_html/ibertalento/"
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

# Mover archivos desde /ibertalento.com/ (el más completo)
echo "📂 Moviendo desde /ibertalento.com/..."
move_from_directory "ibertalento.com"

# Mover directorios desde /ibertalento.com/
move_directory_from_source "ibertalento.com" "_next"
move_directory_from_source "ibertalento.com" "assets"
move_directory_from_source "ibertalento.com" "blog"
move_directory_from_source "ibertalento.com" "casos-de-exito"
move_directory_from_source "ibertalento.com" "contacto"
move_directory_from_source "ibertalento.com" "legal"
move_directory_from_source "ibertalento.com" "proceso"
move_directory_from_source "ibertalento.com" "sectores"
move_directory_from_source "ibertalento.com" "servicios"
move_directory_from_source "ibertalento.com" "404"

echo ""
echo "🎉 ¡Archivos unificados en /public_html/ibertalento/!"
echo "📁 Directorio final: /public_html/ibertalento/"
echo "🌐 Configura el Document Root en cPanel para apuntar a: /public_html/ibertalento/"



