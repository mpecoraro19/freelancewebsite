# marcopecoraro.com

Bilingual (EN/FR) static site for a freelance SAP EWM / TM consultant.
Built with Astro. Near-zero JavaScript (one ~460-byte inline script that
powers the scroll-reveal effect and respects `prefers-reduced-motion`) —
every page is otherwise plain HTML, which is what makes it index well.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Buying the domain

`marcopecoraro.com` was confirmed available at the time this site was built.
Two straightforward options:

- **Cloudflare Registrar** — wholesale pricing (roughly $11/yr, no renewal
  markup), and DNS/SSL for Cloudflare Pages is automatic once it's there.
  Cloudflare dashboard → Domain Registration → Register.
- **GoDaddy** (or any registrar) — works fine too; if you deploy to GitHub
  Pages instead of Cloudflare, you'll just point the DNS records yourself
  (see the GitHub Pages section below).

## Deploy on Cloudflare Pages (about 10 minutes)

1. **Buy the domain** (see above).
2. **Push this folder to GitHub** as a new repository.
3. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.**
   Pick the repo, then set:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. **Custom domain.** Pages project → Custom domains → add `marcopecoraro.com`
   and `www.marcopecoraro.com`. DNS and SSL are automatic if the domain is
   registered at Cloudflare.
5. Every `git push` redeploys.

## Before you go live — things to check

1. **Contact form.** `src/components/ContactPage.astro` has
   `action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"`.
   Sign up free at formspree.io, create a form, paste the real ID.
   Until you do, the form will not deliver. The email and phone links work
   regardless.
2. **Contact email.** `src/data/site.ts` → `person.email` is currently
   `marco.m.pecoraro@gmail.com`, per the build brief. Double-check that's the
   address you want published everywhere (footer, every /contact page,
   JSON-LD) before launch.
3. **LinkedIn URL.** `src/data/site.ts` → `person.linkedin`. Confirm the vanity
   slug is exactly right.
4. **Photos.** `public/img/marco-pecoraro.webp` is cropped from a social photo.
   Swap it for a proper headshot when you have one — same filename, square.
   Warehouse photos live in the same folder as `.webp`; see the note below on
   client images. If you replace any image, re-export as WebP (or update the
   `w`/`h` fields in `src/data/site.ts` if the new file's dimensions differ —
   they're used to size the image box correctly and avoid layout shift).
5. **CV files.** `public/marco-pecoraro-sap-consultant-cv.pdf` (EN) and
   `public/marco-pecoraro-consultant-sap-cv-fr.pdf` (FR). Replace these whenever
   you update the CV — the filenames are referenced in the footer and on
   /contact, so keep the names the same.

## After launch — the SEO checklist that actually matters

- **Google Search Console.** Add the property, verify by DNS TXT record
  (one click if the domain is at Cloudflare), then submit
  `https://marcopecoraro.com/sitemap.xml`.
- **Bing Webmaster Tools.** Import from Search Console; takes a minute and
  Bing still feeds some recruiter tooling.
- **Link from LinkedIn.** Put the domain in your profile's Contact info and in
  your About section. That is your first and most valuable backlink.
- **Put it on the CV.** Header line, next to your email.
- Expect nothing for 4–8 weeks. Long-tail technical pages start ranking before
  the head terms do.

## Where the content lives

Everything — both languages, all copy, all eleven projects, meta titles and
descriptions — is in **`src/data/site.ts`**. Editing that one file updates the
whole site. Nothing is hardcoded in the page templates.

To turn one of the seven summary-only projects into a full detail page:
set `page: true`, fill in `slug`, `slugFr`, `detail` and `meta`. The routes,
sitemap entries and hreflang links all generate themselves.

## Page map

| English | French |
|---|---|
| `/` | `/fr/` |
| `/sap-ewm-consultant` | `/fr/consultant-sap-ewm` |
| `/sap-tm-consultant` | `/fr/consultant-sap-tm` |
| `/sap-pp-qm-consultant` | `/fr/consultant-sap-pp-qm` |
| `/warehouse-process-consulting` | `/fr/conseil-processus-entrepot` |
| `/sap-expertise` | `/fr/expertise-sap` |
| `/projects` | `/fr/projets` |
| `/projects/{4 detail pages}` | `/fr/projets/{4 pages détaillées}` |
| `/about` | `/fr/profil` |
| `/contact` | `/fr/contact` |

26 pages total, plus `/sitemap.xml` and `/robots.txt`.

## SEO built in

- Unique `<title>` and meta description on every one of the 26 pages
- Reciprocal `hreflang` on every page (en / fr / x-default), in the HTML head
  and inside the sitemap — verified both-ways-resolving as part of the build
- JSON-LD `Person` with both SAP certifications as `EducationalOccupationalCredential`,
  `ProfessionalService`, `Service` on each of the four service pages,
  `FAQPage` on service pages with real FAQ content, and `CreativeWork` on
  project pages
- Canonical URLs, Open Graph tags, semantic headings, one `h1` per page
- Keyboard focus states, skip link, reduced-motion support, responsive to 320px
- Self-hosted fonts (Archivo + Source Serif 4, latin/latin-ext subsets only,
  `unicode-range`-split so a page only downloads what it needs) — no external
  font request, so nothing depends on fonts.googleapis.com being reachable
- Images shipped as WebP with correct width/height (or an explicit
  `aspect-ratio` on the full-bleed banners), so there's no layout shift while
  they load
- Lighthouse (run locally against the production build): **Accessibility
  100 / Best Practices 100 / SEO 100 / Performance 87** — Performance was
  measured in a resource-constrained sandbox with no GPU and a shared CPU, so
  treat it as a floor, not a ceiling; total blocking time is 0ms and layout
  shift is ~0, so the real number on Cloudflare Pages/GitHub Pages with a
  normal device should be higher. Re-run Lighthouse (or PageSpeed Insights)
  against the live domain after launch — that's the number that actually
  matters.

## Alternative: host on GitHub Pages instead of Cloudflare

This repo already contains `.github/workflows/deploy.yml` and `public/CNAME`.
Push to `main` and GitHub Actions builds and publishes automatically — no local
Node install needed.

1. Create the repo on github.com and upload these files (drag and drop works).
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Repo → Settings → Pages → Custom domain: `marcopecoraro.com`, then tick
   **Enforce HTTPS** once the certificate provisions.
4. At your domain registrar, point DNS at GitHub:
   - Four `A` records for `@` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - One `CNAME` for `www` → `YOURNAME.github.io`
5. Edit content directly in the browser: press `.` on the repo page to open the
   web editor, change `src/data/site.ts`, commit. The site rebuilds in ~2 min.

Note: GitHub Pages is free on public repos. A private repo needs GitHub Pro.
If you change the domain, update `public/CNAME` and `site:` in `astro.config.mjs`.


## A note on the warehouse photos

Four warehouse photos ship in `public/img/` (as WebP), used both in the
expertise-page gallery and as full-bleed banners on the home and service
pages. Before this goes public, confirm you are allowed to publish interior
photos of a client facility — most consulting and employment agreements
restrict this, and internal DC photos usually belong to the client, not the
person who took them.

What was already done to reduce exposure:

- `warehouse-structure.webp` is cropped to the roof and racking only, removing
  cartons that carried readable PO numbers and brand marks.
- The two photos showing red totes stamped with a client company name were left
  out entirely.
- `a-frame-automated-picking.webp` shows no company marking, though the product
  packaging identifies it as a pharmacy operation.
- No alt text or caption anywhere on the site names a client company.

If in doubt, drop the photos and keep the portrait. The site works without them
(the full-bleed banners just won't render if `gallery[]` in `src/data/site.ts`
is emptied — you'd want to also remove the `<figure class="feature-photo">`
blocks in `HomePage.astro` and `ServicePage.astro` at that point).
