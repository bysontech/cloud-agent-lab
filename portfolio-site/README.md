# Portfolio Site

Modern portfolio website built with Next.js 15 and Tailwind CSS.

## Features

- 🚀 Built with Next.js 15 (App Router)
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🌗 Dark mode support
- ⚡ Static export ready
- 🎯 TypeScript for type safety

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
```

This will generate a static export in the `out/` directory.

## Project Structure

```
portfolio-site/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Customization

Edit `app/page.tsx` to customize:
- Your name and title
- About section content
- Projects list
- Skills list
- Contact links

## Technologies

- Next.js 15
- React 19
- TypeScript 5
- Tailwind CSS 3
