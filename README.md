# web-DacPac

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Node.js](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen) ![React](https://img.shields.io/badge/react-18.3.1-blue)

Bienvenidos a la web de DacPac 🤘


## Requisitos
Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** (LTS) - [Descargar aquí](https://nodejs.org/en/download/prebuilt-installer)
- **npm** (incluido con Node.js)

## Estructura del Proyecto
```plaintext
web-dacpac/
├── src/                # Código fuente principal
├── public/             # Recursos estáticos
├── dist/               # Archivos generados para despliegue
├── package.json        # Dependencias y scripts del proyecto
└── vite.config.ts      # Configuración de Vite
```

## Cómo Colaborar

### Ejecutar en Local
Sigue los siguientes pasos para ejecutar el proyecto en tu entorno local:

1. Instalar **Node.js** (LTS) desde [aquí](https://nodejs.org/en/download/prebuilt-installer).
2. Verificar que **npm** esté instalado correctamente ejecutando en tu terminal:
   ```bash
   npm --version
   ```
3. Instalar Vite globalmente (opcional):
   ```bash
   npm install -g vite
   ```
4. Clonar el repositorio y cambiar a la carpeta del proyecto:
   ```bash
   git clone https://github.com/pabloqb2000/web-DacPac.git
   cd web-DacPac/web-dacpac/
   ```
5. Instalar las dependencias necesarias:
   ```bash
   npm install
   ```
6. Ejecutar la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

### Compilar para la Nube
1. Asegúrate de haber completado todos los pasos de la sección **Ejecutar en Local**.
2. Generar una versión lista para producción:
   ```bash
   npm run build
   ```
3. (Opcional) Servir la versión compilada localmente para pruebas:
   ```bash
   npx serve -s dist
   ```
   Es posible que necesites instalar paquetes adicionales como `serve`, puedes usar `npm install --global serve`.
4. Publicar los archivos generados en la carpeta `dist` en el entorno deseado.

### Desplegar en gh-pages
1. Subir el código a GitHub a la rama `main`
2. Ejecutar `npm run deplot`

## Notas
El proyecto fue creado usando:
```bash
npm create vite@latest web-dacpac
- React
- TypeScript (no SWC)
```
### Versiones utilizadas
- **Node.js**: `v20.17.0`
- **npm**: `10.8.3`

