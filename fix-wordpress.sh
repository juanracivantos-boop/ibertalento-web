#!/bin/bash

# Script para mover WordPress a subdirectorio y configurar servidor
FTP_HOST="ftp.ibertalento.com"
FTP_USER="juanra@ibertalento.com"
FTP_PASS="t)6jqzhCIX5fsK;}"

echo "🔧 Configurando servidor para servir archivos estáticos..."

# Crear directorio para WordPress
echo "📁 Creando directorio /wordpress/ para WordPress..."
curl -s --ftp-create-dirs \
     --user "$FTP_USER:$FTP_PASS" \
     "ftp://$FTP_HOST/ibertalento.com/wordpress/" || true

# Crear nuevo .htaccess más específico
echo "📝 Creando nuevo .htaccess..."
cat > .htaccess << 'EOF'
# Configuración para archivos estáticos de Next.js
# Prioridad: Archivos estáticos > WordPress

RewriteEngine On

# 1. Servir archivos estáticos directamente (CSS, JS, imágenes, etc.)
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^(.*)$ - [L]

# 2. Servir directorios estáticos
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^(.*)$ - [L]

# 3. Redirigir rutas específicas de nuestra web
RewriteRule ^(servicios|proceso|sectores|casos-de-exito|contacto|legal|blog)/?$ /$1/index.html [L]

# 4. Redirigir todas las demás peticiones a index.html (SPA)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Configuración de tipos MIME
<IfModule mod_mime.c>
    AddType text/html .html
    AddType text/css .css
    AddType application/javascript .js
    AddType image/svg+xml .svg
    AddType application/xml .xml
</IfModule>

# Configuración de caché
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType application/xml "access plus 1 hour"
</IfModule>

# Compresión
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
EOF

# Subir el nuevo .htaccess
echo "📤 Subiendo nuevo .htaccess..."
curl -s --upload-file .htaccess \
     --user "$FTP_USER:$FTP_PASS" \
     "ftp://$FTP_HOST/ibertalento.com/.htaccess"

echo ""
echo "✅ Configuración completada!"
echo "🌐 Intenta acceder a: https://ibertalento.com"
echo "📝 Si WordPress sigue interfiriendo, contacta al soporte del hosting"



