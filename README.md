# ⚡ Interactive Bento Grid Portfolio

A modern, high-performance developer portfolio built with an **Interactive Bento Grid** architecture. Designed with **React 19**, **Vite**, **Tailwind CSS v4**, **shadcn/ui**, and fluid **Framer Motion** spring physics micro-interactions.

![Portfolio Banner](https://img.shields.io/badge/Status-Production%20Ready-emerald?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13-purple?style=for-the-badge&logo=framer)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite)

---

## 🌟 Key Features

- **🍱 Bento Grid Architecture:** Modular, high-density glassmorphism layout that organizes complex developer information into visually balanced cards.
- **✨ Fluid Micro-Interactions:** Custom Framer Motion spring physics (`whileHover`, `whileTap`) and staggered grid scroll-entrance animations.
- **🌗 Native Dark / Light Mode:** Class-based theme toggling with dynamic CSS variables and ambient radial background glows.
- **🎠 Interactive Multi-Project Carousel:** Browse featured projects with smooth transition physics without clogging vertical page scroll.
- **🕒 Real-Time Clock Widget:** Live ticking timezone clock and availability indicator.
- **🎨 Accessible UI Primitives:** Styled using `shadcn/ui` and Radix UI accessible primitives.
- **📱 Fully Responsive:** Adaptive 3-column desktop layout that scales down smoothly to single-column mobile views.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism Utilities |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI Primitives](https://www.radix-ui.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components (button, card, badge, input, textarea)
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   └── textarea.jsx
│   │   ├── BentoCard.jsx             # Reusable Framer Motion spring hover card wrapper
│   │   ├── LiveClockCard.jsx         # Live updating clock & timezone card
│   │   ├── ProfileCard.jsx           # Bio, social links, and dark/light theme toggle
│   │   ├── ProjectsCarouselCard.jsx  # Multi-project interactive showcase carousel
│   │   └── QuickContactCard.jsx      # Functional contact form with state animations
│   ├── lib/
│   │   └── utils.js                  # Tailwind class merging utility (clsx + tailwind-merge)
│   ├── App.jsx                       # Root layout shell & Framer Motion stagger container
│   ├── index.css                     # Tailwind v4 import directives & CSS variables theme
│   └── main.jsx                      # Vite application entry point
├── package.json
├── vite.config.js                    # Vite configuration with @ path alias
└── README.md

## 🚀 Getting Started
Prerequisites
Ensure you have the following installed on your machine:

Node.js (v20.0.0 or higher recommended)

npm or yarn or pnpm

## 🎨 Customization Guide
Personal Information: Edit src/components/ProfileCard.jsx to update your name, bio, role, and skills.

Featured Projects: Open src/components/ProjectsCarouselCard.jsx and update the PROJECTS array with your real project titles, tech tags, descriptions, and repository URLs.

Location & Timezone: Adjust the location text inside src/components/LiveClockCard.jsx.

## 📄 License
This project is open-source and available under the MIT License.