# 💬 PuxaPapo Web

<div align="center">

![PuxaPapo Logo](https://img.shields.io/badge/PuxaPapo-Web-blue?style=for-the-badge)

## [PuxaPapo Site](https://puxa-papo.vercel.app/)
## [PuxaPapo API](https://github.com/BrunoRafaSilva/PuxaPapoApi/)

**Languages / Idiomas / Idiomas:**
[🇧🇷 Português](README.md) | [🇺🇸 English](README.en.md) | [🇪🇸 Español](README.es.md)

**Don't know how to start a conversation? I'll help you!**

<div align="center">
  <img src="./print/print1.png" alt="PuxaPapo Screenshot 1" width="45%">
  <img src="./print/print2.png" alt="PuxaPapo Screenshot 2" width="45%">
</div>

An intelligent web application that generates personalized messages to start conversations based on interests, schedules, and tone of communication.

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.3.4-0081CB?style=flat&logo=mui&logoColor=white)](https://mui.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.18-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Demo](#) · [Report Bug](https://github.com/BrunoRafaSilva/PuxaPapoWeb/issues) · [Request Feature](https://github.com/BrunoRafaSilva/PuxaPapoWeb/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Internationalization](#-internationalization)
- [API](#-api)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About the Project

**PuxaPapo Web** is a modern and intuitive application that helps users generate personalized messages to start conversations. Whether inviting friends to a barbecue, scheduling a happy hour, or simply breaking the ice, the application uses artificial intelligence to create context-appropriate messages.

### Why use PuxaPapo?

- 🎨 **Total Customization**: Choose interests, schedules, and message tone
- 🌍 **Multilingual**: Support for Portuguese, English, and Spanish
- 🚀 **Modern Interface**: Responsive and intuitive design with Material-UI and Tailwind
- ⚡ **Fast and Efficient**: Instant message generation via API
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile

---

## ✨ Features

### 🎯 Interest Selection

Choose multiple interests to personalize your message:

- ⚽ Soccer
- 🍖 Barbecue
- 🍺 Beer
- 🏖️ Beach
- 🎬 Movies
- 🎵 Music
- 🎮 Games
- ☕ Coffee

### ⏰ Available Periods

Define when you want to meet:

- 📅 Any day of the week
- 💼 Monday to Friday
- 🎉 Weekend
- 🌙 At Night
- 🏖️ On Their Day Off

### 🎭 Message Tones

Choose your message style:

- 😄 Funny and Casual
- 🤣 Funny
- 👔 Formal
- 📻 Radio Announcement

### 🌐 Supported Languages

- 🇧🇷 Portuguese (Brazil)
- 🇺🇸 English (USA)
- 🇪🇸 Spanish (Spain)

### 🔔 Additional Features

- ✅ Real-time API status monitoring
- 📝 Generated message preview in Markdown
- 🎨 Light theme optimized for reading
- ⚠️ Validations and visual feedback
- 🔄 Automatic API status updates

---

## 🛠 Technologies

This project was built with the following technologies:

### Core

- **[React 19.1.1](https://reactjs.org/)** - JavaScript library for interfaces
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Vite 7.1.14](https://vitejs.dev/)** - Ultra-fast build tool

### UI/UX

- **[Material-UI 7.3.4](https://mui.com/)** - React components with Material Design
- **[TailwindCSS 3.4.18](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Icon library

### Internationalization

- **[i18next 25.6.2](https://www.i18next.com/)** - Internationalization framework
- **[react-i18next 16.3.3](https://react.i18next.com/)** - i18next integration with React
- **[flag-icons 7.5.0](https://flagicons.lipis.dev/)** - SVG flag icons

### Markdown & Formatting

- **[@uiw/react-markdown-preview 5.1.5](https://uiwjs.github.io/react-markdown-preview/)** - Markdown preview with theme

### Routing

- **[React Router DOM 7.9.5](https://reactrouter.com/)** - Routing for React

### Development Tools

- **[ESLint 9.36.0](https://eslint.org/)** - Linter for JavaScript/TypeScript
- **[Prettier 3.6.2](https://prettier.io/)** - Code formatter
- **[PostCSS 8.5.6](https://postcss.org/)** - Tool for transforming CSS
- **[Autoprefixer 10.4.21](https://github.com/postcss/autoprefixer)** - PostCSS plugin to add vendor prefixes

---

## 🚀 Getting Started

### Prerequisites

Before starting, you will need to have installed on your machine:

- **Node.js** (version 18.x or higher)
- **npm** or **yarn**
- **Git**

```bash
# Check installed versions
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/BrunoRafaSilva/PuxaPapoWeb.git
```

2. **Access the project folder**

```bash
cd PuxaPapoWeb
```

3. **Install dependencies**

```bash
npm install
```

### Running the Project

#### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

#### Production Build

```bash
npm run build
```

Optimized files will be generated in the `dist/` folder

#### Build Preview

```bash
npm run preview
```

View the production build locally

---

## 📁 Project Structure

```
PuxaPapoWeb/
├── public/
│   └── robots.txt              # Configuration for crawlers
├── src/
│   ├── assets/                 # Images and static resources
│   ├── Components/             # Reusable components
│   │   ├── ApiStatus.tsx       # API status indicator
│   │   ├── ChipSelect.tsx      # Custom chip selector
│   │   ├── Header.tsx          # Application header
│   │   ├── LabelOption.tsx     # Label for options
│   │   ├── ResultModal.tsx     # Result modal
│   │   └── Footer.tsx          # Footer with social links
│   ├── Constants/              # Constants and configurations
│   │   ├── ConstantLabelsOptions.tsx
│   │   ├── ConstantLanguageOptions.tsx
│   │   └── ConstantValidationErrors.tsx
│   ├── i18n/                   # Internationalization
│   │   ├── config.ts           # i18next configuration
│   │   └── locales/            # Translation files
│   │       ├── en-US.json
│   │       ├── es-ES.json
│   │       └── pt-BR.json
│   ├── pages/                  # Application pages
│   │   ├── Index.tsx           # Main page
│   │   └── NotFound.tsx        # 404 page
│   ├── Services/               # Services and integrations
│   │   └── ApiConnectionService.tsx
│   ├── App.tsx                 # Root component
│   ├── App.css                 # Global app styles
│   ├── index.css               # Base global styles
│   └── main.tsx                # Entry point
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # TypeScript config (app)
├── tsconfig.node.json          # TypeScript config (node)
└── vite.config.ts              # Vite configuration
```

---

## 📜 Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Starts development server            |
| `npm run build`   | Generates optimized production build |
| `npm run preview` | Production build preview             |
| `npm run lint`    | Runs linter on code                  |

---

## 🌐 Internationalization

The application supports three languages:

### Translation File Structure

```json
{
  "header": {
    "title": "PuxaPapo",
    "subtitle1": "Don't know how to start a conversation? I'll help you!",
    "subtitle2": "Just fill in the fields below!"
  },
  "form": {
    "interests": { ... },
    "period": { ... },
    "tone": { ... }
  },
  "modal": {
    "title": "Generated Message",
    "closeButton": "Close"
  }
}
```

### Adding New Languages

1. Create a new JSON file in `src/i18n/locales/`
2. Add the language in `src/i18n/config.ts`
3. Add the flag in `src/Constants/ConstantLanguageOptions.tsx`

---

## 🔌 API

The application connects to an API to generate messages. The service is implemented in `src/Services/ApiConnectionService.tsx`.

### Endpoints

#### Health Check

```typescript
GET / health;
Response: {
  status: "online" | "offline";
}
```

#### Generate Message

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

### Configuring API URL

Edit the file `src/Services/ApiConnectionService.tsx`:

```typescript
const API_BASE_URL = "https://your-api.com";
```

---

## 🤝 Contributing

Contributions are always welcome! If you want to contribute to the project:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Use TypeScript for type safety
- Follow configured ESLint standards
- Document complex components
- Write descriptive commit messages

---

## 📄 License

This project is under the MIT license. See the `LICENSE` file for more details.

---

## 👤 Contact

**Bruno Silva**

- 💼 LinkedIn: [brunorlsilva](https://www.linkedin.com/in/brunorlsilva/)
- 🐙 GitHub: [BrunoRafaSilva](https://github.com/BrunoRafaSilva)

---

<div align="center">

**[⬆ Back to top](#-puxapapo-web)**

Made with ❤️ by [Bruno Silva](https://github.com/BrunoRafaSilva)

</div>
