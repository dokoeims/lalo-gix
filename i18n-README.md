# Internacionalización (i18n) en Lalo Gix Website

Este documento explica cómo se ha implementado la internacionalización (i18n) en el proyecto Lalo Gix Website, permitiendo que el sitio esté disponible en múltiples idiomas.

## Tecnologías utilizadas

- **i18next**: Biblioteca principal para internacionalización
- **react-i18next**: Integración de i18next con React
- **i18next-browser-languagedetector**: Detector de idioma del navegador
- **i18next-http-backend**: Carga dinámica de traducciones

## Estructura de archivos

```
src/
  locales/
    en/
      translation.json    # Traducciones en inglés
    es/
      translation.json    # Traducciones en español
  i18n.js                 # Configuración de i18next
  components/
    LanguageSwitcher.js   # Componente para cambiar el idioma
```

## Características principales

1. **Detección automática del idioma del navegador**
   - Al cargar el sitio por primera vez, detecta automáticamente el idioma preferido del usuario

2. **Selector de idioma manual**
   - Componente LanguageSwitcher permite al usuario cambiar el idioma manualmente

3. **Persistencia de preferencias**
   - El idioma seleccionado se guarda en localStorage para futuras visitas

4. **Carga optimizada de traducciones**
   - Las traducciones se cargan de forma eficiente en memoria

5. **Integración completa con React**
   - Uso de hooks y componentes de alto nivel para una experiencia de desarrollo fluida

## Cómo usar

### Añadir nuevas traducciones

Para añadir nuevas cadenas de texto traducibles, sigue estos pasos:

1. Añade una nueva clave en `/src/locales/es/translation.json` y `/src/locales/en/translation.json`
2. Utiliza claves jerárquicas para mantener organizadas las traducciones

Ejemplo:
```json
// en translation.json
{
  "newSection": {
    "title": "New Section Title",
    "description": "This is a description for the new section"
  }
}

// es translation.json
{
  "newSection": {
    "title": "Título de Nueva Sección",
    "description": "Esta es una descripción para la nueva sección"
  }
}
```

### Usar traducciones en componentes

Utiliza el hook `useTranslation` para acceder a las traducciones:

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  );
};
```

### Cambiar el idioma programáticamente

Puedes cambiar el idioma desde cualquier componente:

```jsx
import { useTranslation } from 'react-i18next';

const LanguageControl = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};
```

## Añadir un nuevo idioma

Para añadir un nuevo idioma (por ejemplo, francés):

1. Crea una nueva carpeta en `/src/locales/fr/`
2. Crea un archivo `translation.json` dentro de esta carpeta
3. Traduce todas las claves de los otros archivos de traducciones
4. Actualiza el archivo `i18n.js` para incluir el nuevo idioma:

```javascript
// En i18n.js
import translationFR from './locales/fr/translation.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  fr: { translation: translationFR }  // Nuevo idioma
};
```

5. Añade el nuevo idioma al componente `LanguageSwitcher.js`

## Recursos adicionales

- [Documentación oficial de i18next](https://www.i18next.com/)
- [Documentación de react-i18next](https://react.i18next.com/)
- [Guía de mejores prácticas para i18n](https://phrase.com/blog/posts/react-i18n-best-practices/)
