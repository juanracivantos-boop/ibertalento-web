const ftpDeploy = require('ftp-deploy');
const path = require('path');

const config = {
  user: "juanra@ibertalento.com",
  password: "t)6jqzhCIX5fsK;}",
  host: "ftp.ibertalento.com",
  port: 21,
  localRoot: path.join(__dirname, "out"),
  remoteRoot: "/ibertalento.com/juanra/",
  include: ["*", "**/*"],
  exclude: [
    ".DS_Store",
    "Thumbs.db",
    ".git/**",
    ".gitignore",
    "README.md",
    "node_modules/**",
    "src/**",
    "*.js",
    "*.json",
    "*.md"
  ],
  deleteRemote: false,
  forcePasv: true
};

console.log("🚀 Iniciando despliegue a FTP...");
console.log("📁 Directorio local:", config.localRoot);
console.log("🌐 Directorio remoto:", config.remoteRoot);

ftpDeploy(config)
  .then(res => {
    console.log("✅ Despliegue completado exitosamente!");
    console.log("📊 Archivos subidos:", res.length);
  })
  .catch(err => {
    console.error("❌ Error en el despliegue:", err);
    process.exit(1);
  });
