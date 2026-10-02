# Muntasir -- 3D Creator Portfolio

A dark-themed 3D creator portfolio landing page built with React, TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started in VS Code

1. Unzip this project and open the folder in VS Code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Then open the printed local URL (usually http://localhost:5173).

## Project structure

```
src/
  components/
    FadeIn.tsx           # scroll-triggered fade/slide-in wrapper
    Magnet.tsx            # mouse-following magnetic hover effect
    AnimatedText.tsx       # character-by-character scroll-reveal text
    ContactButton.tsx      # gradient pill CTA
    LiveProjectButton.tsx  # ghost/outline pill button
  sections/
    HeroSection.tsx
    MarqueeSection.tsx
    AboutSection.tsx
    ServicesSection.tsx
    ProjectsSection.tsx
  App.tsx
  main.tsx
  index.css
```

## Notes / things you'll likely want to customize

- **Images**: all image URLs (hero portrait, decorative 3D icons, marquee
  GIFs, project screenshots) point at the placeholder assets from the
  original design spec. Swap the `src` values in `HeroSection.tsx`,
  `AboutSection.tsx`, `MarqueeSection.tsx`, and `ProjectsSection.tsx`
  with your own hosted images before publishing, since some of the
  placeholder hosts may rate-limit or take assets down.
- **Projects data**: edit the `PROJECTS` array in `ProjectsSection.tsx` to
  add/remove case studies, and give `LiveProjectButton` an `href` prop to
  link out to each live project.
- **Nav links / contact button**: currently placeholders with `#` anchors
  and no click handler — wire these up to real routes or a contact form
  once you're ready.

## Publishing to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

To deploy on **GitHub Pages** (a good free option for a static Vite site),
either use the `gh-pages` package or GitHub Actions — happy to walk you
through either once you're at that step.
