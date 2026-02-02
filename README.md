# Zonder Landing Page

A modern, responsive landing page showcasing Zonder's automation and content creation capabilities.

## Features

- **Modern Design**: Clean, professional interface with gradient accents and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Lightweight, fast-loading, and efficient
- **Interactive Elements**: Smooth scrolling, animated sections, and parallax effects
- **Accessible**: Semantic HTML and keyboard-friendly navigation

## Structure

```
website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles and responsive design
│   ├── js/
│   │   └── main.js         # JavaScript for interactivity
│   └── images/             # Image assets (empty, ready for your images)
└── README.md               # This file
```

## Quick Start

### Local Development

1. Open `index.html` directly in your browser, or
2. Use a local server for better development experience:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Deployment Options

### Option 1: Static Hosting (Recommended)

Deploy to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `website` folder
- **GitHub Pages**: Push to a repository and enable Pages
- **Cloudflare Pages**: Connect your repository
- **AWS S3 + CloudFront**: Upload files to S3 bucket

### Option 2: Traditional Web Hosting

Upload all files to your web host via FTP/SFTP:

```bash
# Example using rsync
rsync -avz website/ user@yourserver.com:/var/www/html/
```

### Option 3: Docker

Create a `Dockerfile` in the website directory:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t zonder-website .
docker run -p 8080:80 zonder-website
```

## Customization

### Colors

Edit CSS variables in `assets/css/styles.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    /* ... more colors */
}
```

### Content

All content is in `index.html`. Edit text, links, and sections directly.

### Images

Add your images to `assets/images/` and reference them in HTML:

```html
<img src="assets/images/your-image.png" alt="Description">
```

### Logo

Replace the text logo with an image:

```html
<!-- Current -->
<div class="logo">
    <span class="logo-text">Zonder</span>
</div>

<!-- With image -->
<div class="logo">
    <img src="assets/images/logo.png" alt="Zonder Logo">
</div>
```

## Features Breakdown

### Navigation

- Fixed navbar with blur effect
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Auto-hide on scroll down, show on scroll up

### Hero Section

- Animated gradient text
- Floating cards with parallax effect
- Responsive typography
- Call-to-action buttons

### Sections

1. **Features**: Core technical capabilities
2. **Capabilities**: Detailed service breakdown
3. **Tools**: Specialized tool showcase
4. **Tech Stack**: Technologies used
5. **Contact**: Call-to-action section
6. **Footer**: Site navigation and info

### Animations

- Scroll-triggered fade-in animations
- Floating card animations
- Hover effects on cards
- Smooth transitions throughout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies (except Google Fonts)
- Optimized CSS with custom properties
- Debounced scroll handlers
- Efficient animations using CSS transforms
- Minimal JavaScript footprint

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast
- Responsive text sizing

## SEO

Add these meta tags to `<head>` for better SEO:

```html
<!-- Open Graph -->
<meta property="og:title" content="Zonder - Automation & Content Creation">
<meta property="og:description" content="Advanced automation tools and content creation scripts">
<meta property="og:image" content="https://yoursite.com/assets/images/og-image.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Zonder - Automation & Content Creation">
<meta name="twitter:description" content="Advanced automation tools and content creation scripts">
<meta name="twitter:image" content="https://yoursite.com/assets/images/twitter-card.jpg">
```

## Analytics

Add Google Analytics or other tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## License

Internal use only. All rights reserved.

## Support

For questions or issues, contact the Zonder team.
