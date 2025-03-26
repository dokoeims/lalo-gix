# Plantilla de Sitio Web para Artistas Musicales

Un sitio web moderno e interactivo para artistas musicales con un diseño responsive, reproductor de audio integrado, animaciones suaves y configuración centralizada para fácil personalización.

## Características Principales

- **Configuración centralizada**: Toda la información del artista en un solo archivo para fácil actualización
- **Diseño responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- **Componentes visuales modernos**: Efectos de glass morphism, animaciones suaves, transiciones
- **Reproductor de audio integrado**: Incluye visualización de onda y control de reproducción
- **Soporte multilingüe**: Internacionalización completa con soporte para español e inglés
- **Optimizado para SEO**: Estructura semántica y metadatos correctamente implementados
- **Accesibilidad mejorada**: Controles accesibles y compatibilidad con lectores de pantalla
- **Integración con plataformas de streaming**: Enlaces a Spotify, Apple Music, etc.
- **Carga optimizada de recursos**: Carga diferida de imágenes y componentes para mejor rendimiento

## Configuración Centralizada

Este proyecto utiliza un sistema de configuración centralizada para facilitar la personalización y mantenimiento. Toda la información del artista, enlaces, textos y colores se encuentran en un único archivo:

```
src/config/artistConfig.js
```

Esta arquitectura permite que otros artistas puedan adaptar fácilmente el template a sus necesidades simplemente modificando este archivo de configuración, sin necesidad de tocar el código de los componentes.

### Datos Centralizados

El archivo centraliza la siguiente información:

- Información básica del artista (nombre, lema, correo electrónico)
- Enlaces a redes sociales
- Enlaces a plataformas de streaming
- Contenido de la sección Hero
- Último lanzamiento musical
- Discografía completa
- Biografía (versión corta y completa)
- Información de eventos y giras
- Enlaces de navegación
- Colores y temas del sitio web

## Tecnologías Utilizadas

- React.js
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- Howler.js para manejo de audio
- i18next para internacionalización

## Primeros Pasos

### Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd lalo-gix-website
```

2. Instala las dependencias:
```bash
npm install

# O si prefieres usar Yarn
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm start

# O si prefieres usar Yarn
yarn start
```

4. Abre [http://localhost:3000](http://localhost:3000) para ver el sitio web en tu navegador.

## Personalización

Para personalizar el sitio web para tu propio uso:

1. Abre el archivo `src/config/artistConfig.js`
2. Modifica la información del artista, enlaces, biografía, discografía, etc.
3. Reemplaza las imágenes en la carpeta `src/assets/` con tus propias imágenes
4. Reemplaza los archivos de audio en `src/assets/audios/` con tus propias canciones

Luego inicia la aplicación en modo desarrollo para ver los cambios en tiempo real:

```bash
npm start
```

### Colores
Puedes personalizar el esquema de colores de dos maneras:

1. **A través de la configuración centralizada**:
   Edita los colores en el objeto `THEME` dentro de `src/config/artistConfig.js`:
   ```js
   export const THEME = {
     primaryColor: '#FF5722', // Color de acento (naranja)
     darkBackground: '#0F0F0F', // Fondo oscuro primario
     darkerBackground: '#0A0A0A', // Fondo oscuro secundario
     lightBackground: '#1A1A1A' // Fondo claro para contrastes
   };
   ```

2. **Mediante el archivo Tailwind**:
   Edita el archivo `tailwind.config.js` para personalizar el esquema de colores:
   ```js
   theme: {
     extend: {
       colors: {
         'dark-bg': '#0F0F0F',
         'darker-bg': '#0A0A0A',
         'light-bg': '#1A1A1A',
         'accent': '#FF5722',
       },
     },
   },
   ```

### Fuentes
El sitio web utiliza Montserrat para encabezados e Inter para el texto del cuerpo. Para cambiar las fuentes, actualiza:

1. La importación de Google Fonts en `public/index.html`
2. La configuración de fuentes en `tailwind.config.js`

## Estructura del Proyecto

El proyecto sigue una estructura organizada que separa claramente los componentes, la configuración, los activos multimedia y las utilidades:

```
lalo-gix-website/
├── public/            # Archivos públicos estáticos
├── src/
│   ├── assets/         # Recursos multimedia del sitio
│   ├── components/     # Componentes React
│   ├── config/         # Configuración centralizada
│   ├── contexts/       # Contextos React (incluyendo contexto de audio)
│   ├── utils/          # Funciones de utilidad y servicios
│   ├── App.js          # Componente raíz de la aplicación
│   └── index.js        # Punto de entrada
├── package.json       # Dependencias y scripts
└── tailwind.config.js # Configuración de Tailwind CSS
```

## Estado del Desarrollo

### Fase 1: Configuración y Estructura Básica (Completado)
- Configuración del proyecto y entorno
- Estructura HTML básica y framework responsive
- Implementación de navegación
- Desarrollo del encabezado y pie de página

### Fase 2: Secciones de Contenido Principal (Completado)
- Sección Hero con efecto parallax
- Sección de último lanzamiento
- Sección de música con carrusel
- Sección de biografía

### Fase 3: Elementos Interactivos (Completado)
- Integración del reproductor de audio
- Implementación de animaciones y micro-interacciones
- Validación de formulario
- Sección de comunidad/galería

### Fase 4: Refinamiento y Pruebas (Completado)
- Pruebas de compatibilidad en diferentes navegadores
- Optimización de rendimiento
- Verificación de accesibilidad
- Revisión y finalización de contenido
- **Implementación de configuración centralizada del artista**

## Despliegue

Para construir el sitio web para producción:

```bash
npm run build
# O usando Yarn
yarn build
```

Esto creará una versión optimizada para producción en la carpeta `build` que puede ser desplegada en cualquier servicio de alojamiento estático como:

- Netlify
- Vercel
- GitHub Pages
- Amazon S3
- Firebase Hosting

## Internacionalización (i18n)

Este proyecto incluye soporte completo para múltiples idiomas usando la biblioteca i18next. Para más detalles, consulta el archivo [i18n-README.md](i18n-README.md).

### Idiomas soportados actualmente

- Español
- Inglés

### Cómo funciona

1. **Detección automática**: El sitio detecta automáticamente el idioma preferido del navegador del usuario
2. **Cambio manual**: Un selector en la navegación permite cambiar entre idiomas disponibles
3. **Persistencia**: El idioma seleccionado se guarda para futuras visitas

### Añadir un nuevo idioma

Consulta [i18n-README.md](i18n-README.md) para instrucciones detalladas sobre cómo añadir soporte para nuevos idiomas.

## Licencia

[Licencia MIT](LICENSE)
