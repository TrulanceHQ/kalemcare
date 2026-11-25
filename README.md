# KALEM Home Care Services · kalemcare.com

The KALEM website, built with **Next.js 16** (App Router, TypeScript) and **Tailwind CSS 4**.

## Run it in VS Code

1. Install [Node.js 20 or newer](https://nodejs.org) (the LTS version is fine) if it isn't installed yet.
2. In VS Code choose **File › Open Folder…** and open this `kalem-website` folder.
   Accept the prompt to install the recommended extensions (Tailwind CSS IntelliSense, ESLint, Prettier).
3. Open a terminal (**Terminal › New Terminal**) and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open <http://localhost:3000>. The page reloads as you save changes.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (checks types too) |
| `npm run start` | Serves the production build |
| `npm run lint` | Lints the code |

## Where things are

```
src/
  app/
    layout.tsx            header, footer, mobile call bar, default SEO and structured data
    page.tsx              homepage
    services/page.tsx     /services: all six services in full
    how-it-works/page.tsx /how-it-works: the five steps, quality standard and safety
    families/page.tsx     /families
    organizations/page.tsx /organizations: staffing for retirement and assisted-living communities
    about/page.tsx        /about: the KALEM difference, promise, values and commitment
    contact/page.tsx      /contact: contact details and enquiry form
    globals.css           Tailwind setup and the KALEM brand tokens
    icon.svg, apple-icon.png, opengraph-image.png …  icons and link-preview images
    robots.ts, sitemap.ts, manifest.ts
  components/             shared building blocks (Header, Footer, ContactForm, CarePicker, ServiceIcon, ui.tsx)
public/brand/             KALEM logo files
public/photos/            photos used on the pages
```

**To change wording**, open the page where the text appears (e.g. `src/app/services/page.tsx`) and
edit it there: each page holds its own copy. Text shared by every page, such as the phone number,
email and navigation, is written in `src/components/Header.tsx`, `Footer.tsx`, `MobileCallBar.tsx`
and the `CtaBand` in `ui.tsx`. If the phone number or email changes, search the project for
`460-8142` or `hello@kalemcare.com` to find every place it appears.

**Brand colours and fonts** are Tailwind tokens defined in `src/app/globals.css`:
`purple` #4A0868 (buttons and links), `violet` #6A1585 (hover), `plum` #2E0F3D (headings, footer),
`lilac` #F3ECF6 and `gold-soft` #F7EFE2 (soft highlights), `gold` #CFA162 (small accents), `ivory`
#FBF8F3 (alternate sections), `ink` #2A1D31, `muted` #6A5F70 and `line` #ECE5DC. Pages stay light;
purple is kept for buttons, the footer and one closing banner per page. Headings use `font-serif`
(Fraunces) and body text uses the default `font-sans` (Figtree). Both are bundled from npm
(Fontsource), so nothing loads from Google at runtime. Reusable classes: `.h1`, `.h2`, `.h3`,
`.eyebrow`, `.lede`, `.card`, `.btn-primary`, `.btn-secondary` and `.check-list`.

## Search and sharing (SEO)

- **Default title, description, keywords and share text** live in `src/app/layout.tsx`; each page
  sets its own title and description in its `metadata` export.
- **Link-preview image** (WhatsApp, LinkedIn, Facebook, X): replace `src/app/opengraph-image.png`
  and `twitter-image.png` with a new 1200×630 PNG and update the `.alt.txt` files.
- **Structured data** (schema.org JSON-LD in `layout.tsx`) tells Google KALEM is a local business,
  with its phone, email and services. Add a street address there once there is a public one.
- **New pages:** add them to `src/app/sitemap.ts`.
- After launch: add the site to Google Search Console, submit `https://kalemcare.com/sitemap.xml`,
  create a Google Business Profile, and test link previews with the LinkedIn Post Inspector and the
  Facebook Sharing Debugger. Redirect `www.kalemcare.com` to `kalemcare.com` at the host.

## Before going live

- **Photos:** live in `public/photos/` and are referenced from the page that shows them.
  To swap one, replace the file or change the path on that page, and update its `alt` text.
- **Contact form:** it currently opens the visitor's email app addressed to hello@kalemcare.com. Links from the homepage
  "Who needs care?" picker pre-fill the message.
  To receive enquiries directly, connect `src/components/ContactForm.tsx` to a form service
  (e.g. Formspree or Resend) or a Next.js route handler.
- **Privacy policy:** the footer link points to the top of the page until a policy page exists.
- **Hosting:** the site builds to static pages, so Vercel, Netlify or any Node host works.
  Point the kalemcare.com domain at the host when ready.
