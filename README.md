# Greek Community School of Newcastle Website

Static website for the Greek Community School of Newcastle - a community school teaching Greek language and culture to children and adults in Newcastle upon Tyne, UK.

## Key Information

- **School Name:** Greek Community School of Newcastle
- **Email:** contact@greekschoolnewcastle.co.uk
- **Phone:** 07958 732 764
- **Location:** St Mary's Catholic School, Benton Park Road, Newcastle Upon Tyne, NE7 7PE
- **Facebook:** https://www.facebook.com/GreekSchoolNewcastleUponTyne/

## Tech Stack

- **Bundler:** [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (with `@tailwindcss/postcss`)
- **JavaScript:** Vanilla JS with Web Components (light DOM)
- **Pages:** Multi-page static site (not SPA)
- **Hosting:** GitHub Pages

## Project Structure

```
/
├── src/
│   ├── components/      # Web components (site-header.js, site-footer.js, hero-section.js)
│   ├── styles/          # CSS with Tailwind v4 theme (main.css, DESIGN-SYSTEM.md)
│   ├── js/              # Shared utilities (main.js)
│   ├── index.html       # Home page
│   ├── about.html       # About page
│   ├── admissions.html  # Admissions page
│   ├── gallery.html     # Gallery page
│   ├── get-involved.html # Get Involved page
│   └── contact.html     # Contact page
├── vite.config.js       # Vite configuration (root: src)
└── postcss.config.js    # PostCSS with @tailwindcss/postcss
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

Build the site for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
