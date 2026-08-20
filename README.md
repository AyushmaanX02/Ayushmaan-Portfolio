# Ayushmaan Kapoor — Portfolio

A modern, dark-themed React portfolio.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# 1. Extract the zip and go into the folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder ready to deploy.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js / .css       — Sticky top nav with mobile menu
│   ├── Hero.js / .css         — Animated hero with typing effect
│   ├── About.js / .css        — About section with stats
│   ├── Skills.js / .css       — Skill bars by category
│   ├── Projects.js / .css     — Featured project cards
│   ├── Experience.js / .css   — Timeline of training
│   ├── Education.js / .css    — Education cards
│   ├── Certifications.js/.css — Certification grid
│   ├── Contact.js / .css      — Contact form + info
│   └── Footer.js / .css       — Footer
├── App.js
├── App.css
├── index.js
└── index.css                  — Global styles & design tokens
```

## ✏️ Customization

All data is hardcoded in each component file. To update:

- **Personal info / links**: `Hero.js`, `Contact.js`, `Footer.js`
- **Projects**: `Projects.js` → `projects` array
- **Skills**: `Skills.js` → `skillCategories` array
- **Education**: `Education.js` → `education` array
- **Certifications**: `Certifications.js` → `certs` array
- **Colors / fonts**: `src/index.css` → `:root` CSS variables

## 🎨 Design

- **Theme**: Dark, minimal with purple accent (#7c6af7)
- **Fonts**: Syne (display) + DM Mono (code)
- **Animations**: CSS keyframe animations, typing effect, floating code snippets
- **Responsive**: Mobile-first, works on all screen sizes

## 🌐 Deployment

Works with Vercel, Netlify, GitHub Pages, or any static host.

```bash
# Vercel
npm i -g vercel
vercel

# Netlify drag-and-drop
npm run build
# Upload the /build folder to netlify.com
```
