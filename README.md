# NDSG Associates Website

A sophisticated, all-black themed website for NDSG Associates built with Next.js 15 and featuring smooth animations powered by Aceternity UI components.

## Features

- **Modern Design**: All-black theme with cyan and blue accents
- **Smooth Animations**: Powered by Framer Motion and Aceternity UI
- **Responsive Layout**: Works seamlessly across all devices
- **Interactive Components**:
  - Animated hero section with spotlight effects
  - 3D card animations
  - Hover border gradients
  - Sticky scroll reveal
  - Background particle beams

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Aceternity UI
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ndsg-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Aceternity UI components
│   │   ├── 3d-card.tsx
│   │   ├── background-beams.tsx
│   │   ├── hover-border-gradient.tsx
│   │   ├── spotlight.tsx
│   │   ├── sticky-scroll-reveal.tsx
│   │   └── text-generate-effect.tsx
│   └── sections/          # Website sections
│       ├── navigation.tsx
│       ├── hero.tsx
│       ├── about.tsx
│       ├── culture.tsx
│       ├── services.tsx
│       ├── advanced-tech.tsx
│       ├── service-details.tsx
│       ├── contact.tsx
│       └── footer.tsx
└── lib/
    └── utils.ts           # Utility functions

```

## Sections

1. **Hero**: Eye-catching landing with animated text and spotlight effects
2. **About**: Company overview with glassmorphism cards and stats
3. **Culture**: Vision, Mission, and Values with 3D card effects
4. **Services**: Core service offerings with hover effects
5. **Advanced Tech**: Detailed technology solutions with sticky scroll
6. **Service Details**: In-depth service information
7. **Contact**: Contact form and company information
8. **Footer**: Links and social media

## Customization

- Colors can be modified in `tailwind.config.ts`
- Content can be updated in respective section components
- Animations can be tweaked by adjusting Framer Motion properties

## Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

© 2024 NDSG Associates. All rights reserved.
