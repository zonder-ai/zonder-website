# Zonder Website - Next.js

The Zonder landing page, built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Animations
- **Outfit Font** - Google Fonts

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles with Zonder brand colors
├── components/
│   ├── hero-section.tsx     # Hero section with animated header
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       └── animated-group.tsx
├── lib/
│   └── utils.ts             # Utility functions (cn)
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Zonder Brand Colors

The brand colors are configured in `app/globals.css` and available as CSS variables:

```css
--zonder-green: 159 100% 30.4%;
--zonder-light: 159 60% 45%;
--zonder-dark: 159 100% 22%;
--zonder-glow: 159 80% 50%;
```

### Using Brand Colors

```tsx
// Gradient background
<div className="gradient-zonder" />

// Gradient text
<h1 className="text-gradient-zonder">Deploy AI Agents</h1>

// Shadow
<div className="shadow-zonder" />

// Border
<div className="border-zonder" />
```

## Adding New Sections

The old HTML sections need to be converted to React components. Follow this pattern:

1. Create a new component file in `components/`
2. Import necessary UI components
3. Add Framer Motion animations if needed
4. Import and use in `app/page.tsx`

Example:

```tsx
// components/features-section.tsx
export function FeaturesSection() {
  return (
    <section id="for-agencies" className="py-24 bg-muted/20">
      {/* Your content */}
    </section>
  );
}

// app/page.tsx
import { FeaturesSection } from '@/components/features-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

Or use static export:

```javascript
// next.config.js
module.exports = {
  output: 'export',
}
```

Then deploy the `out/` folder to any static host.

## Environment Variables

Create `.env.local` for environment variables:

```bash
NEXT_PUBLIC_API_URL=https://api.zonder.ai
```

## TODO

- [ ] Convert remaining HTML sections to React components:
  - Why Zonder / Comparison section
  - For Agencies section
  - For Clients section
  - Security section
  - How It Works section
  - Pricing section
  - Contact section
  - Footer
- [ ] Add form handling for contact/signup
- [ ] Integrate with backend API
- [ ] Add SEO metadata
- [ ] Add analytics
- [ ] Optimize images
- [ ] Add tests

## Migration from HTML

The original HTML/CSS/JS version is still in the repo:

- `index.html` → Converted to React components
- `assets/css/styles.css` → Converted to Tailwind + globals.css
- `assets/js/main.js` → Converted to React hooks and Framer Motion

To keep the old version as backup, rename:

```bash
mv index.html index.html.backup
mv assets/ assets.backup/
```

## Development Notes

- Dark mode is default (see `layout.tsx`)
- All animations use Framer Motion
- Colors use HSL format for better theming
- Mobile-first responsive design
- Outfit font loaded from Google Fonts
