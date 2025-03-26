# Instrucciones de instalación de i18next

Este documento proporciona instrucciones paso a paso para instalar las dependencias necesarias para la internacionalización (i18n) en el proyecto Lalo Gix Website.

## Instalación automática

Para facilitar la instalación, hemos incluido un script que instalará todas las dependencias necesarias:

```bash
# Para sistemas Unix (macOS, Linux)
chmod +x install-i18n.sh
./install-i18n.sh

# Para Windows (usando npm directamente)
npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend
```

## Instalación manual

Si prefieres instalar las dependencias manualmente, sigue estos pasos:

1. **Instalar i18next (biblioteca principal)**
   ```bash
   npm install i18next
   ```

2. **Instalar react-i18next (integración con React)**
   ```bash
   npm install react-i18next
   ```

3. **Instalar detector de idioma**
   ```bash
   npm install i18next-browser-languagedetector
   ```

4. **Instalar soporte para carga de traducciones**
   ```bash
   npm install i18next-http-backend
   ```

## Verificación de instalación

Para verificar que todas las dependencias se han instalado correctamente:

```bash
npm list i18next react-i18next i18next-browser-languagedetector i18next-http-backend
```

Deberías ver algo como esto:

```
└─┬ projectname@0.1.0
  ├── i18next@23.7.11
  ├── i18next-browser-languagedetector@7.2.0
  ├── i18next-http-backend@2.4.2
  └── react-i18next@13.5.0
```

## Siguiente paso

Una vez instaladas las dependencias, el sitio web debería funcionar con soporte para múltiples idiomas. Si quieres aprender más sobre cómo usar la internacionalización en este proyecto, consulta el archivo [i18n-README.md](i18n-README.md) para obtener instrucciones detalladas.

## Solución de problemas

### Si obtienes errores relacionados con las versiones de las dependencias

Prueba eliminando el archivo `package-lock.json` y volviendo a instalar:

```bash
rm package-lock.json
npm install
```

### Si obtienes errores de "Módulo no encontrado"

Asegúrate de que todas las dependencias están correctamente instaladas:

```bash
npm cache clean --force
npm install
```

### Si los cambios en los archivos de traducción no se aplican

En modo de desarrollo, intenta reiniciar el servidor de desarrollo:

```bash
npm start
```
