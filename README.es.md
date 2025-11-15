# 💬 PuxaPapo Web

<div align="center">

![PuxaPapo Logo](https://img.shields.io/badge/PuxaPapo-Web-blue?style=for-the-badge)

## [PuxaPapo Site](https://puxa-papo.vercel.app/)
## [PuxaPapo API](https://github.com/BrunoRafaSilva/PuxaPapoApi/)

**Idiomas / Languages / Idiomas:**
[🇧🇷 Português](README.md) | [🇺🇸 English](README.en.md) | [🇪🇸 Español](README.es.md)

**¿No sabes cómo empezar una conversación? ¡Te ayudo!**

<div align="center">
  <img src="./print/print1.png" alt="PuxaPapo Screenshot 1" width="45%">
  <img src="./print/print2.png" alt="PuxaPapo Screenshot 2" width="45%">
</div>

Una aplicación web inteligente que genera mensajes personalizados para iniciar conversaciones basadas en intereses, horarios y tono de comunicación.

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.3.4-0081CB?style=flat&logo=mui&logoColor=white)](https://mui.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.18-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Demo](#) · [Reportar Error](https://github.com/BrunoRafaSilva/PuxaPapoWeb/issues) · [Solicitar Función](https://github.com/BrunoRafaSilva/PuxaPapoWeb/issues)

</div>

---

## 📋 Índice

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologías](#-tecnologías)
- [Comenzando](#-comenzando)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Ejecutando el Proyecto](#ejecutando-el-proyecto)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)
- [Internacionalización](#-internacionalización)
- [API](#-api)
- [Contribuyendo](#-contribuyendo)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Sobre el Proyecto

**PuxaPapo Web** es una aplicación moderna e intuitiva que ayuda a los usuarios a generar mensajes personalizados para iniciar conversaciones. Ya sea invitando a amigos a una barbacoa, programando un happy hour o simplemente rompiendo el hielo, la aplicación utiliza inteligencia artificial para crear mensajes apropiados al contexto.

### ¿Por qué usar PuxaPapo?

- 🎨 **Personalización Total**: Elija intereses, horarios y el tono del mensaje
- 🌍 **Multilingüe**: Soporte para Portugués, Inglés y Español
- 🚀 **Interfaz Moderna**: Diseño responsivo e intuitivo con Material-UI y Tailwind
- ⚡ **Rápido y Eficiente**: Generación instantánea de mensajes vía API
- 📱 **Responsivo**: Funciona perfectamente en escritorio, tablet y móvil

---

## ✨ Funcionalidades

### 🎯 Selección de Intereses

Elija múltiples intereses para personalizar su mensaje:

- ⚽ Fútbol
- 🍖 Barbacoa
- 🍺 Cerveza
- 🏖️ Playa
- 🎬 Cine
- 🎵 Música
- 🎮 Juegos
- ☕ Café

### ⏰ Períodos Disponibles

Defina cuándo quiere encontrarse:

- 📅 Cualquier día de la semana
- 💼 Lunes a Viernes
- 🎉 Fin de Semana
- 🌙 Por la Noche
- 🏖️ En su Día Libre

### 🎭 Tonos de Mensaje

Elija el estilo de su mensaje:

- 😄 Gracioso y Casual
- 🤣 Gracioso
- 👔 Formal
- 📻 Anuncio de Radio

### 🌐 Idiomas Soportados

- 🇧🇷 Portugués (Brasil)
- 🇺🇸 Inglés (EE.UU.)
- 🇪🇸 Español (España)

### 🔔 Funcionalidades Adicionales

- ✅ Monitoreo de estado de API en tiempo real
- 📝 Vista previa del mensaje generado en Markdown
- 🎨 Tema claro optimizado para lectura
- ⚠️ Validaciones y retroalimentación visual
- 🔄 Actualización automática del estado de la API

---

## 🛠 Tecnologías

Este proyecto fue construido con las siguientes tecnologías:

### Core

- **[React 19.1.1](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Superconjunto tipado de JavaScript
- **[Vite 7.1.14](https://vitejs.dev/)** - Herramienta de compilación ultrarrápida

### UI/UX

- **[Material-UI 7.3.4](https://mui.com/)** - Componentes React con Material Design
- **[TailwindCSS 3.4.18](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Biblioteca de íconos

### Internacionalización

- **[i18next 25.6.2](https://www.i18next.com/)** - Framework de internacionalización
- **[react-i18next 16.3.3](https://react.i18next.com/)** - Integración de i18next con React
- **[flag-icons 7.5.0](https://flagicons.lipis.dev/)** - Íconos de banderas SVG

### Markdown y Formato

- **[@uiw/react-markdown-preview 5.1.5](https://uiwjs.github.io/react-markdown-preview/)** - Vista previa de Markdown con tema

### Enrutamiento

- **[React Router DOM 7.9.5](https://reactrouter.com/)** - Enrutamiento para React

### Herramientas de Desarrollo

- **[ESLint 9.36.0](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Prettier 3.6.2](https://prettier.io/)** - Formateador de código
- **[PostCSS 8.5.6](https://postcss.org/)** - Herramienta para transformar CSS
- **[Autoprefixer 10.4.21](https://github.com/postcss/autoprefixer)** - Plugin PostCSS para agregar prefijos de proveedor

---

## 🚀 Comenzando

### Requisitos Previos

Antes de comenzar, necesitará tener instalado en su máquina:

- **Node.js** (versión 18.x o superior)
- **npm** o **yarn**
- **Git**

```bash
# Verifique las versiones instaladas
node --version
npm --version
git --version
```

### Instalación

1. **Clone el repositorio**

```bash
git clone https://github.com/BrunoRafaSilva/PuxaPapoWeb.git
```

2. **Acceda a la carpeta del proyecto**

```bash
cd PuxaPapoWeb
```

3. **Instale las dependencias**

```bash
npm install
```

### Ejecutando el Proyecto

#### Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

#### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

#### Preview del Build

```bash
npm run preview
```

Visualice el build de producción localmente

---

## 📁 Estructura del Proyecto

```
PuxaPapoWeb/
├── public/
│   └── robots.txt              # Configuración para crawlers
├── src/
│   ├── assets/                 # Imágenes y recursos estáticos
│   ├── Components/             # Componentes reutilizables
│   │   ├── ApiStatus.tsx       # Indicador de estado de la API
│   │   ├── ChipSelect.tsx      # Selector de chips personalizado
│   │   ├── Header.tsx          # Encabezado de la aplicación
│   │   ├── LabelOption.tsx     # Etiqueta para opciones
│   │   ├── ResultModal.tsx     # Modal de resultado
│   │   └── Footer.tsx          # Pie de página con enlaces sociales
│   ├── Constants/              # Constantes y configuraciones
│   │   ├── ConstantLabelsOptions.tsx
│   │   ├── ConstantLanguageOptions.tsx
│   │   └── ConstantValidationErrors.tsx
│   ├── i18n/                   # Internacionalización
│   │   ├── config.ts           # Configuración de i18next
│   │   └── locales/            # Archivos de traducción
│   │       ├── en-US.json
│   │       ├── es-ES.json
│   │       └── pt-BR.json
│   ├── pages/                  # Páginas de la aplicación
│   │   ├── Index.tsx           # Página principal
│   │   └── NotFound.tsx        # Página 404
│   ├── Services/               # Servicios e integraciones
│   │   └── ApiConnectionService.tsx
│   ├── App.tsx                 # Componente raíz
│   ├── App.css                 # Estilos globales de la app
│   ├── index.css               # Estilos globales base
│   └── main.tsx                # Punto de entrada
├── eslint.config.js            # Configuración de ESLint
├── index.html                  # Plantilla HTML
├── package.json                # Dependencias y scripts
├── postcss.config.js           # Configuración de PostCSS
├── tailwind.config.js          # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
├── tsconfig.app.json           # Config TypeScript (app)
├── tsconfig.node.json          # Config TypeScript (node)
└── vite.config.ts              # Configuración de Vite
```

---

## 📜 Scripts Disponibles

| Script            | Descripción                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo      |
| `npm run build`   | Genera build de producción optimizado |
| `npm run preview` | Vista previa del build de producción  |
| `npm run lint`    | Ejecuta el linter en el código        |

---

## 🌐 Internacionalización

La aplicación soporta tres idiomas:

### Estructura de Archivos de Traducción

```json
{
  "header": {
    "title": "PuxaPapo",
    "subtitle1": "¿No sabes cómo empezar una conversación? ¡Te ayudo!",
    "subtitle2": "¡Solo rellena los campos a continuación!"
  },
  "form": {
    "interests": { ... },
    "period": { ... },
    "tone": { ... }
  },
  "modal": {
    "title": "Mensaje Generado",
    "closeButton": "Cerrar"
  }
}
```

### Agregando Nuevos Idiomas

1. Cree un nuevo archivo JSON en `src/i18n/locales/`
2. Agregue el idioma en `src/i18n/config.ts`
3. Agregue la bandera en `src/Constants/ConstantLanguageOptions.tsx`

---

## 🔌 API

La aplicación se conecta a una API para generar los mensajes. El servicio está implementado en `src/Services/ApiConnectionService.tsx`.

### Endpoints

#### Health Check

```typescript
GET / health;
Response: {
  status: "online" | "offline";
}
```

#### Generar Mensaje

```typescript
POST /generate
Body: {
  interest: string[],
  period: string,
  tone: string,
  language: string
}
Response: string (Markdown)
```

### Configurando la URL de la API

Edite el archivo `src/Services/ApiConnectionService.tsx`:

```typescript
const API_BASE_URL = "https://tu-api.com";
```

---

## 🤝 Contribuyendo

¡Las contribuciones son siempre bienvenidas! Si quieres contribuir al proyecto:

1. Haz un Fork del proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Use TypeScript para type safety
- Siga los estándares de ESLint configurados
- Documente componentes complejos
- Escriba mensajes de commit descriptivos

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulte el archivo `LICENSE` para más detalles.

---

## 👤 Contacto

**Bruno Silva**

- 💼 LinkedIn: [brunorlsilva](https://www.linkedin.com/in/brunorlsilva/)
- 🐙 GitHub: [BrunoRafaSilva](https://github.com/BrunoRafaSilva)

---

<div align="center">

**[⬆ Volver arriba](#-puxapapo-web)**

Hecho con ❤️ por [Bruno Silva](https://github.com/BrunoRafaSilva)

</div>
