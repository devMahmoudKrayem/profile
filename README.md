# Mahmoud Naser Abu Karim — Portfolio

A production-ready bilingual portfolio for a Mobile Software Engineer. The site is built with semantic HTML, modern CSS, and vanilla JavaScript; there is no build step and no framework runtime.

## Run locally

Serve the repository root so project links and metadata behave like they will in production:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Structure

- `index.html` — portfolio landing page
- `styles.css` — shared design system, responsive layout, light/dark themes, and RTL rules
- `i18n.js` — English/Arabic copy and preference handling
- `script.js` — navigation, theme, accessibility, reveal, and progress interactions
- `projects/project.js` — factual bilingual data and shared case-study renderer
- `projects/project.css` — case-study system and project-specific art direction
- `projects/*.html` — progressive entry pages for all seven case studies
- `og-portfolio.png` — production social-preview artwork

## Product behavior

- English and Arabic are fully supported, including LTR/RTL layout and localized metadata.
- Language and theme preferences are saved in `localStorage`; theme falls back to the visitor’s system preference.
- The mobile navigation traps focus, closes with Escape, restores focus, and locks page scrolling while open.
- Motion is lightweight and respects `prefers-reduced-motion`.
- Skills are grouped into keyboard-accessible category toggles with technology-specific cards and icons.
- Technology marks use the pinned Devicon 2.17.0 set; non-brand skill concepts use Google Material Icons, with the Cloudinary mark supplied by Simple Icons.
- Project visuals are clearly labelled as interface concepts, not client screenshots.

## Deploy

This is a static site. No build command or output folder is required.

- **GitHub Pages:** publish the repository root from **Settings → Pages**.
- **Netlify:** import the repository, leave the build command empty, and publish the root directory (`.`).
- **Vercel:** import the repository and choose **Other** as the framework preset with no build command.
- **Firebase Hosting:** initialize Hosting, choose this repository as the public directory, and deploy.

Before using a custom domain, update any relative social-image URLs to absolute production URLs and add the domain’s canonical links.

## Content still requiring real assets

The current site deliberately avoids fabricated product evidence. Add these only when they are available:

1. Real product screenshots or approved store imagery for individual case studies.
2. Public repository, live demo, or store links for projects that can be shared.
3. Verified performance or usage outcomes, if documented later.

Until then, repository status is shown honestly as **Private / link unavailable**, and the custom interface artwork remains labelled as conceptual.
