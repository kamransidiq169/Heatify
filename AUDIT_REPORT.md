# AUDIT_REPORT.md — Heatify website (Phase 0, read-only)

**Date:** 2026-10-20  
**Scope:** code, content, SEO, accessibility, brand consistency, performance hygiene.  
**Rule applied throughout:** no edits yet — this is the stop-and-review artifact.

---

## 1. Site map

| Route / file | Type | Purpose (one line) |
|---|---|---|
| `app/layout.tsx` | Root layout | Global metadata, fonts, navbar/footer/MotionProvider wrappers, `<main>` landmark |
| `app/page.tsx` | Home | Hero loader, product showcase, projects, process, testimonials, final CTA |
| `app/about/page.tsx` | About | Hero, story, principles, team, final CTA |
| `app/products/page.tsx` | Products | Hero, collection intro, scroll-driven product slides, final CTA |
| `app/products/[slug]/page.tsx` | Product detail | Individual product — renders `ProductDetail` (not fully read; data-driven from `lib/products`) |
| `app/solutions/page.tsx` | Solutions / Spaces | Hero, intro, featured applications grid, design-principle section, final CTA |
| `app/services/page.tsx` | Services / Technology | Hero, floor anatomy, system comparison, service scroller, final CTA |
| `app/contact/page.tsx` | Contact | Form + office/email/phone info from `siteConfig`, success state |
| `app/projects/page.tsx` | Projects | Projects list with images and descriptions |
| `app/insights/page.tsx` | Insights list | Article index (filter by category), hardcoded fallback articles visible until MDX flows in |
| `app/insights/[slug]/page.tsx` | Insight detail | Single article — renders `InsightDetail` with simple Markdown→HTML |
| `app/not-found.tsx` | 404 | Simple `Page not found` with "Return home" CTA |
| `app/robots.ts` | SEO config | `robots.ts` — allow all, sitemap from `siteConfig.url` |
| `app/sitemap.ts` | SEO config | Static pages + product slugs + insight slugs |
| `lib/site.ts` | Shared content hub | Brand name, URL, tagline, description, contact, socials, navLinks, stats, partners, testimonials, solutions |
| `lib/products.ts` | Product data | Six products: StickyMat 200W, WarmFoil, AquaBoard, SenseWarm Pro, ThermaBase XPS, AquaFlow Manifold |
| `lib/insights.ts` | Content loader | Reads `content/insights/*.mdx` via gray-matter |
| `lib/hero-motion.ts` | Motion config | Hero wordmark/timeline config — still authored under "WOWTHERM" |
| `lib/gsap.ts` | GSAP bootstrap | Registers `ScrollTrigger`, `CustomEase`, and a custom ease named `"wowtherm"` |
| `components/layout/navbar.tsx` | Navbar | Logo `Image("/logo1.png", alt="WOWTHERM")`, desktop nav, mobile drawer with "WOWTHERM" eyebrow + "Engineered warmth" tagline |
| `components/layout/footer.tsx` | Footer | Brand wordmark "WOWTHERM" in HTML text, contact info from `siteConfig`, partner-ish links |
| `components/home/hero.tsx` | Hero loader | `HeatifyLoader` — wordmark `HEATIFY`, top-right label "Heatify", ink/cream/gold palette |
| `components/home/hero/heating-mat-visual.tsx` | Heating-mat visual | SVG serpentine cable visual, dev console log still says `[WowTherm]` |
| `components/home/hero/hero-meta.tsx` | Hero meta | Corner annotations: "SRINAGAR / INDIA", "200 W/m²", "3 mm" |
| `components/home/hero/technical-drawing.tsx` | Technical drawing | SVG drawing component used in scroll narrative |
| `components/home/benefits.tsx` | Benefits (pinned section) | Scroll-driven "Why WOWTHERM" word-fill + 5 benefit cards; word is `WOWTHERM` |
| `components/home/product-showcase.tsx` | Product showcase | Four expertise cards; eyebrow "WOWTHERM / SYSTEMS" |
| `components/home/projects.tsx` | Projects strip | Six project cards with solution names, several referencing WowTherm product names |
| `components/home/process.tsx` | Process (scroll) | 5-stage engineering process; header "WOWTHERM — ENGINEERING PROCESS", footer "WOWTHERM / 05 STAGES" |
| `components/home/testimonials.tsx` | Testimonials | Carousel from `siteConfig.testimonials`; eyebrow "WOWTHERM / CLIENT VOICES", "WOWTHERM / FIELD NOTE" |
| `components/home/final-cta.tsx` | Final CTA | Dark closing section; eyebrow "WOWTHERM / 05", technical footer "WOWTHERM" |
| `components/services/floor-anatomy.tsx` | Floor cross-section | 5-layer technical drawing; "HEATIFY / DETAIL 02", bottom "HEATIFY / FLOOR SYSTEM / 02" |
| `components/services/system-comparison.tsx` | Electric vs hydronic | Comparison table; footer "HEATIFY / SYSTEMS 03" |
| `components/services/service-scroller.tsx` | Service rail | Scrollable service cards; bottom editorial line "HEATIFY" |
| `components/services/process.tsx` | Services process | Older 5-step timeline (commented-out earlier version present in file) |
| `components/products/product-detail.tsx` | Product detail | Product page component; "WOWTHERM" technical bar and "WOWTHERM" product range value |
| `components/about/about-hero.tsx` | About hero | "About WowTherm" eyebrow; placeholder founding-story block |
| `components/about/story.tsx` | About story | Editorial image grid; all images and copy are `[PLACEHOLDER]` |
| `components/about/timeline.tsx` | About timeline | Milestone cards; all copy is `[PLACEHOLDER]` |
| `components/about/team.tsx` | About team | Team grid with placeholder members; "Heatify / People" marker |
| `components/about/values-cta.tsx` | About values+CTA | Values grid + CTA banner; CTA copy flagged `[PLACEHOLDER]` |
| `components/cta-banner.tsx` | CTA banner | "Book a free survey" / "Browse systems", reusable |
| `components/insights/insights-list.tsx` | Insights index | Article grid; fallback articles authored under "WowTherm Team" |
| `components/insights/insight-detail.tsx` | Insight article | Article reader with simple Markdown→HTML |
| `content/insights/underfloor-heating-guide.mdx` | Article (content) | General educational guide, authored "WowTherm Engineering Team", closes with "That's what we do at WowTherm" |
| `content/insights/thermal-comfort-wellness.mdx` | Article (content) | Wellness-space article, authored "WowTherm Team", section "The WowTherm Approach" |
| `public/` assets | Static assets | `pro1.png`, `service.png`, `sol1.png`, `about.png`, `about1.png`, `home1.png`, `image.png`, `logo1.png` referenced by navbar (file not present in public listing), plus generic Next.js/vercel placeholders |

**Note on logo file:** `navbar.tsx` references `/logo1.png`. A `find` for logo/heatify/wowtherm files in `public` did **not** return a matching file. The only logo-like asset visible in the repo snapshot is `public/image.png`, which is a "HEATIFY" wordmark graphic (dark gray text + yellow bracket). This is a real inconsistency: the navbar expects a file that is not present, and the logo that does exist says a different brand name.

---

## 2. Content inventory (user-visible strings, verdict)

I have not listed every string — there are hundreds and many are animation-only labels. The material ones are annotated below. Verdict key: **KEEP** = accurate and on-brand; **REWRITE** = needs fresh copy; **REMOVE** = wrong brand or placeholder; **MISSING** = should exist but does not.

### 2.1 Brand name and wordmark occurrences

Every occurrence below is a brand-consistency issue, not ordinary copy. Full list is in section 3.

| File | Line (approx) | Current string | Verdict |
|---|---|---|---|
| `lib/site.ts` | 2, 6, 7, 12-15 | "WowTherm", tagline, description, email, social URLs | REWRITE (should be Heatify; or confirm correct name) |
| `lib/hero-motion.ts` | 2, 19, 150 | "WOWTHERM" wordmark + comments | REWRITE/MOVE (motion config tied to old name) |
| `lib/gsap.ts` | 7 | CustomEase named `"wowtherm"` | NOTE (internal easing name; cosmetic but signals legacy identity) |
| `package.json` | 2 | `"name": "wowtherm"` | REWRITE (project name; low visibility but part of identity) |
| `app/layout.tsx` | metadata | `${siteConfig.name} — Premium Heating Technology` | REWRITE (driven by siteConfig) |
| `app/page.tsx` | 17 | "WOWTHERM designs and installs..." meta description | REWRITE (also redundant with layout metadata) |
| `app/products/page.tsx` | 277, 310, 406, 624, 644 | "WOWTHERM / {number}", alt="WOWTHERM heating systems", "Radiant heating / WOWTHERM" | REWRITE |
| `app/solutions/page.tsx` | 55, 234, 284, 369, 535, 814 | "WowTherm ClimaBoard", "every WOWTHERM system", "WOWTHERM / Spaces", "THE WOWTHERM APPROACH" | REWRITE |
| `components/layout/navbar.tsx` | 113, 353 | alt="WOWTHERM", mobile drawer eyebrow "WOWTHERM" | REWRITE |
| `components/layout/footer.tsx` | brand wordmark | `WOW<span className="text-copper-400">THERM</span>` | REWRITE |
| `components/home/hero.tsx` | 7, 545 | top-right label "Heatify" + wordmark `HEATIFY` | KEEP (this component already uses Heatify) |
| `components/home/benefits.tsx` | 24, 417, 451, etc. | KEEP/COMMENT — active code uses `WOWTHERM` word + comments; the commented-out legacy block also references WOWTHERM | REWRITE (active word is wrong brand) |
| `components/home/product-showcase.tsx` | 617 | "WOWTHERM / SYSTEMS" | REWRITE |
| `components/home/process.tsx` | 14, 1107, 1690 | "WOWTHERM — ENGINEERING PROCESS", "WOWTHERM / 05 STAGES" | REWRITE |
| `components/home/testimonials.tsx` | 234, 391 | "WOWTHERM / CLIENT VOICES", "WOWTHERM / FIELD NOTE" | REWRITE |
| `components/home/final-cta.tsx` | 316, 716 | "WOWTHERM / 05", technical footer "WOWTHERM" | REWRITE |
| `components/home/projects.tsx` | 56 | `solution: "WowTherm ClimaBoard"` | REWRITE (product name in project card) |
| `components/products/product-detail.tsx` | 60, 161 | "WOWTHERM", `["02","Product range","WOWTHERM"]` | REWRITE |
| `app/about/page.tsx` | 22, 630, 811, 1155 | Title "About | Heatify", story copy uses "Heatify" | KEEP (About is already Heatify) |
| `components/about/team.tsx` | 294 | "Heatify / People" | KEEP |
| `components/about/about-hero.tsx` | 30 | "About WowTherm" eyebrow | REWRITE |
| `components/about/story.tsx` | 10, 17-33, 51 | comments + alt text + copy all say "WowTherm" placeholders | REWRITE/REMOVE (placeholders anyway) |
| `components/about/timeline.tsx` | 18, 26, 61 | all placeholder copy says "WowTherm" | REWRITE/REMOVE |
| `components/about/values-cta.tsx` | 75 | `[PLACEHOLDER — replace with WowTherm's actual CTA copy]` | REMOVE (placeholder) |
| `content/insights/underfloor-heating-guide.mdx` | 5, 63 | author + closing "That's what we do at WowTherm" | REWRITE |
| `content/insights/thermal-comfort-wellness.mdx` | 5, 44 | author + "The WowTherm Approach" | REWRITE |
| `lib/insights.ts` | 34 | fallback author "WowTherm Team" | REWRITE |
| `components/insights/insights-list.tsx` | 26, 38, 50 | fallback article authors "WowTherm Engineering Team" / "WowTherm Team" | REWRITE |

### 2.2 Other copy worth flagging now

| File | Location | String | Verdict |
|---|---|---|---|
| `app/page.tsx` | section comment | "HEATIFY INTRO" with note "Normal document-flow section. It is NOT fixed..." | KEEP (note is internal; content path is fine) |
| `app/about/page.tsx` | mission text | "Discover the story behind Heatify — engineering radiant warmth beneath architecture, from Srinagar to homes across India." | REWRITE (good start; verify "from Srinagar" and "across India" are real) |
| `app/contact/page.tsx` | success copy | "Our team will review your inquiry and get back to you within 24 hours." | REWRITE/MISSING — response time claim needs confirmation |
| `app/contact/page.tsx` | form labels | Name, Email, Phone, Project Type, Location, Approximate Area, Message | KEEP (form structure is sound) |
| `app/contact/page.tsx` | placeholders | "you@example.com", "+91 98110 40040", "e.g., 2,500", "City, State" | MIXED — phone placeholder duplicates real phone number (fine as example), email placeholder is lorem-like, area placeholder is fine |
| `app/services/page.tsx` | metadata | "Free heat-loss surveys, electric and hydronic system design, installation by our own crews, smart zoning, and 10–25 year aftercare. How ProWarm works." | REWRITE — good structure but "ProWarm" is a name that does not match either Heatify or WowTherm |
| `app/services/page.tsx` | service copy | Six services with strong, specific copy; "three-test discipline", Mumbai engineering team, etc. | REWRITE pending verification of claims |
| `components/home/benefits.tsx` | benefit 3 | "Radiant heating uses up to 40% less energy than conventional forced-air systems." | REWRITE/TRACK — superlative-style energy claim; see claim risk |
| `components/home/benefits.tsx` | benefit 2 | "maintain temperature within ±0.5°C of your target." | REWRITE/TRACK — specific spec claim |
| `lib/products.ts` | StickyMat | "most bathrooms reach barefoot comfort in under 20 minutes" | REWRITE/TRACK — specific performance claim |
| `lib/products.ts` | AquaBoard | "lowest running cost per m² of any system we offer" | REWRITE/TRACK — comparative claim |
| `lib/products.ts` | ThermaBase | "typically halves heat-up time and cuts running cost by up to 50%" | REWRITE/TRACK — quantitative claim |
| `lib/products.ts` | SenseWarm Pro | "Self-learning schedule cuts run-time up to 25%" | REWRITE/TRACK — quantitative claim |
| `lib/site.ts` | stats | 12,500+ installations, 320,000+ sq ft, 40% lower running costs, 98% recommend | REWRITE/TRACK — all are heap claims; see claim risk |
| `lib/site.ts` | partners | Prestige Group, Sobha Realty, DLF Homes, Godrej Properties, Brigade Group, Oberoi Realty, Tata Housing, L&T Realty | REWRITE/TRACK — client logos/names are proof claims |
| `lib/site.ts` | testimonials | 5 testimonials with named people, roles, cities, projects | REWRITE/TRACK — testimonials are proof claims |
| `app/solutions/page.tsx` | applications | 8 featured applications with locations, solutions, years | REWRITE/TRACK — project proof claims |
| `app/projects/page.tsx` | projects | 6 projects with areas, descriptions, solutions | REWRITE/TRACK — project proof claims |
| `components/services/floor-anatomy.tsx` | insulation note | "Typically halves heat-up time" | REWRITE/TRACK — repeat of ThermaBase claim |
| `components/services/process.tsx` | warranty copy | "10 years on electric systems, 25 on hydronic pipework" | REWRITE/TRACK — matches product data; verify |
| `components/services/process.tsx` | step copy | survey, design, installation, commissioning, aftercare | KEEP (structure is good; wording to refresh) |

### 2.3 Placeholder and lorem signals

- `components/about/story.tsx` — 4 image slots all `[PLACEHOLDER — Replace with real WowTherm photo]` + captions; copy block `[PLACEHOLDER — replace with WowTherm's actual founding story]` + lorem-flavored founding narrative with `[YEAR]`, `[NUMBER]` tokens.
- `components/about/timeline.tsx` — all 6 milestones are `[PLACEHOLDER]` / `[YEAR]`.
- `components/about/values-cta.tsx` — CTA headline flagged `[PLACEHOLDER — replace with WowTherm's actual CTA copy]`.
- `components/about/about-hero.tsx` — placeholder founding-story block.
- `app/contact/page.tsx` — `TODO: Integrate with backend/email service` still present; form is non-functional.
- `components/home/hero/heating-mat-visual.tsx` — dev-only `console.log("[WowTherm] Heating mat cable length:", ...)`.
- `app/contact/page.tsx` — `console.log("Form submitted:", data)`.

---

## 3. Brand consistency

This is the most important finding before any content work.

### 3.1 Two brands are live in the same repo

**Heatify** appears in:
- `components/home/hero.tsx` — loader wordmark `HEATIFY`, top-right label "Heatify", `aria-label="Heatify introduction"`.
- `app/about/page.tsx` — title "About | Heatify", story copy "Heatify began in Srinagar...", "That idea became Heatify...", "The Heatify Standard".
- `components/about/team.tsx` — "Heatify / People".
- `components/services/floor-anatomy.tsx` — "HEATIFY / DETAIL 02", "HEATIFY / FLOOR SYSTEM / 02".
- `components/services/system-comparison.tsx` — "HEATIFY / SYSTEMS 03".
- `components/services/service-scroller.tsx` — bottom editorial line "HEATIFY".
- `app/page.tsx` — section comment "HEATIFY INTRO".

**WowTherm / WOWTHERM** appears in:
- `lib/site.ts` (brand name, URL, description, email, socials).
- `lib/hero-motion.ts` (wordmark + comments).
- `lib/gsap.ts` (CustomEase `"wowtherm"`).
- `package.json` (`"name": "wowtherm"`).
- `app/layout.tsx` metadata (driven by siteConfig).
- `app/page.tsx` meta description.
- `app/products/page.tsx` (multiple).
- `app/solutions/page.tsx` (multiple).
- `components/layout/navbar.tsx` (alt text + mobile drawer).
- `components/layout/footer.tsx` (HTML wordmark).
- `components/home/benefits.tsx` (active word + comments).
- `components/home/product-showcase.tsx`.
- `components/home/process.tsx`.
- `components/home/testimonials.tsx`.
- `components/home/final-cta.tsx`.
- `components/home/projects.tsx` (WowTherm product name in a project card).
- `components/products/product-detail.tsx`.
- `components/about/about-hero.tsx`, `story.tsx`, `timeline.tsx`, `values-cta.tsx`.
- `lib/insights.ts` + `components/insights/insights-list.tsx` (authors).
- `content/insights/*.mdx` (authors + body).
- `components/home/hero/heating-mat-visual.tsx` (dev log).

### 3.2 Specific inconsistencies to resolve before copy work

1. **Brand name:** Heatify vs WowTherm. They are both used as the brand in different places, including within the same component families.
2. **Logo file:** `navbar.tsx` references `/logo1.png` with `alt="WOWTHERM"`. That file is not present in the public asset listing. The only visible logo asset is `public/image.png`, which is a "HEATIFY" wordmark. Either the navbar is pointing at a missing file, or the logo has been replaced without updating the navbar. This needs confirmation.
3. **Logo alt text:** `alt="WOWTHERM"` on the navbar logo — wrong brand if the brand is Heatify, and also wrong if the logo image is the HEATIFY wordmark.
4. **Mobile drawer eyebrow:** "WOWTHERM" in the mobile menu header.
5. **Mobile drawer tagline:** "Engineered warmth" under the phone number.
6. **Footer wordmark:** HTML "WOWTHERM" text, not an image — this is a direct brand-string problem, not just an asset problem.
7. **Tagline in siteConfig:** "Comfort, engineered into every surface." — currently the siteConfig tagline. The navbar drawer says "Engineered warmth". Two taglines are circulating.
8. **Page titles:** `app/about/page.tsx` already uses "Heatify"; `app/layout.tsx` metadata uses `siteConfig.name` (currently WowTherm). Title template is inconsistent until the brand is settled.
9. **Internal motion/config naming:** `hero-motion.ts`, `gsap.ts`, and comments in `benefits.tsx` reference "WOWTHERM" / "wowtherm". These are not user-facing strings in most cases, but they are part of the identity surface and should be reconciled after the brand decision.

### 3.3 What I will not do silently

I will not rename the brand, the logo file, the alt text, or the config in `lib/site.ts` until you confirm:
- The correct brand name (Heatify, WowTherm, or something else).
- Which logo file is the real one and where it should live.
- Whether "Engineered warmth" or "Comfort, engineered into every surface." (or a new line) is the real tagline.

---

## 4. Facts extracted about Heatify (HEATIFY_FACT_SHEET.md)

Full structured fact sheet is being written as a separate file. Summary of what the repo currently supplies, with source and verification status:

### 4.1 Identity and contact (from `lib/site.ts`)

- Brand name: currently "WowTherm" in config. **UNVERIFIED for Heatify** — needs confirmation.
- URL: `https://wowtherm.com`. **UNVERIFIED for Heatify.**
- Email: `hello@wowtherm.com`. **UNVERIFIED for Heatify.**
- Phone: `+91 98110 40040`. **UNVERIFIED.**
- Address: "Design District, Lower Parel, Mumbai 400013". **UNVERIFIED.**
- Map query: "Design District, Lower Parel, Mumbai". **UNVERIFIED.**
- Social: Instagram, Facebook, LinkedIn, YouTube all under `wowtherm`. **UNVERIFIED for Heatify.**
- Tagline in config: "Comfort, engineered into every surface." **UNVERIFIED.**

### 4.2 Stats (from `lib/site.ts`)

- 12,500+ installations, note "Homes, villas and hotels". **UNVERIFIED.**
- 320,000+ sq ft warmed, note "From Kashmir chalets to Mumbai penthouses". **UNVERIFIED.**
- 40% lower running costs, note "Versus conventional space heating". **UNVERIFIED — also duplicated in benefits and comparison copy.**
- 98% recommend, note "Post-installation survey, 2025". **UNVERIFIED.**

### 4.3 Partners (from `lib/site.ts`)

- Prestige Group, Sobha Realty, DLF Homes, Godrej Properties, Brigade Group, Oberoi Realty, Tata Housing, L&T Realty. **UNVERIFIED — these are client/partner proof claims.**

### 4.4 Testimonials (from `lib/site.ts`)

- Meera Chandran, Homeowner, New Delhi, "Luxury Residence".
- Kabir Sethi, Principal Architect, Studio Terra, "Commercial Complex, Bengaluru".
- Anjali Thakur, Owner, Cedar House, "Hospitality, Manali".
- Rohit Banerjee, Homeowner, Gurugram, "Residential Villa".
- Farah Wani, Homeowner, Srinagar, "Heritage Renovation".
- All **UNVERIFIED.**

### 4.5 Products (from `lib/products.ts`)

Six products currently live in the data:
1. StickyMat 200W — electric mat, 200 W/m², 3 mm, IPX7, 10-year warranty, tile/stone.
2. WarmFoil Underlaminate — electric foil, 140 W/m², 1 mm, earthed aluminium, laminate/engineered wood up to 18 mm, 10-year warranty.
3. AquaBoard Low-Profile — hydronic, 18 mm build-up, 12 mm PERT-AL-PERT, flow 35–55 °C, 25-year pipe warranty, 10-year panels.
4. SenseWarm Pro — thermostat, 3.5" touchscreen, air+floor sensing, 16 A / 3,600 W, 2.4 GHz Wi-Fi, 5-year warranty, Alexa/Google Home.
5. ThermaBase XPS — insulation, 6/10/20 mm, 0.032 W/mK, 300 kPa, "lifetime of the floor" warranty.
6. AquaFlow Manifold — nickel-plated brass, 2–12 circuits, 10 bar test, 10-year warranty.

Several product specs also contain WowTherm-branded claims ("WowTherm thermostat", "WowTherm floor", "Any WowTherm system"). Those brand strings are part of the product data and must be reconciled.

### 4.6 Projects and applications (from `app/solutions/page.tsx`, `app/projects/page.tsx`, `components/home/projects.tsx`)

- Multiple named projects across Srinagar, Manali, Mumbai, Shimla, Jaipur, Bengaluru, Anjuna/Goa, New Delhi.
- Several project cards cite specific product names including "AquaBoard Low-Profile", "AquaFlow Screed System", "AquaFlow ScreedPro", "AquaBoard XT", "WowTherm ClimaBoard", "StickyMat 200W + SenseWarm Pro", "StickyMat 150W", "SenseWarm Zone Control", "WarmFoil Underlaminate", "AquaFlow + ThermaBase XPS".
- **UNVERIFIED** as Heatify project proof.

### 4.7 About / history (mixed)

- `app/about/page.tsx` says Heatify began in Srinagar, founded 2011, with milestone text: 2011 first floor, 2015 hamam, 2019 beyond the valley, 2023 new scale, "TODAY" warmer every winter.
- `components/about/story.tsx` and `timeline.tsx` are placeholder and contain no usable Heatify facts.
- **Partially UNVERIFIED** — the about page's Srinagar origin and 2011 date are stated as Heatify facts, but the placeholder teams/timeline suggest the "real" history is not yet in place.

### 4.8 What is NOT in the repo (gaps)

- No live service/annual-report/doc confirming the stats, partners, testimonials, or product warranties.
- No pricing page or price list.
- No downloadable fact sheet, certifications list, or warranty terms document.
- No real team photos or bios (team component is placeholder).
- No real about-images (story images are placeholder paths in `public/images/about/` that are referenced but not confirmed as real).
- No legal pages (privacy/terms) in the route tree.

---

## 5. Claim risk list

Every number, award, certification, testimonial, client logo, and superlative currently on the site, with whether it is backed by anything in the repo.

| Claim | Where | Backed in repo? | Risk |
|---|---|---|---|
| 12,500+ installations | `lib/site.ts` stats | No source document | High |
| 320,000+ sq ft warmed | `lib/site.ts` stats | No source | High |
| 40% lower running costs | `lib/site.ts`, `benefits.tsx`, comparison copy | No source; also phrased as superlative-adjacent | High |
| 98% recommend, "Post-installation survey, 2025" | `lib/site.ts` stats | No survey artifact | High |
| 10-year warranty on electric systems | `lib/products.ts`, footer, process copy | Repeated in product data; no warranty PDF | Med |
| 25-year warranty on hydronic pipework | `lib/products.ts`, process copy | Repeated in product data; no warranty PDF | Med |
| IPX7-rated (StickyMat) | `lib/products.ts` | Product spec claim, no cert | Med |
| "zero EMF design" (StickyMat) | `lib/products.ts` | Claim, no measurement/source | Med |
| "Warms tile and stone from cold in 15–25 minutes" | `lib/products.ts` | Spec-style claim | Med |
| "most bathrooms reach barefoot comfort in under 20 minutes" | `lib/products.ts` | Performance claim | Med |
| "lowest running cost per m² of any system we offer" | `lib/products.ts` (AquaBoard) | Comparative claim | Med |
| "halves heat-up times on concrete slabs" / "cuts running costs by up to 50%" | `lib/products.ts` (ThermaBase) | Quantitative claim | Med |
| "Self-learning schedule cuts run-time up to 25%" | `lib/products.ts` (SenseWarm Pro) | Quantitative claim | Med |
| "Compatible with click-lock laminate and engineered wood up to 18mm" | `lib/products.ts` (WarmFoil) | Spec claim | Low-Med |
| "Works with heat pumps at low flow temperatures (35°C)" | `lib/products.ts` (AquaBoard) | General-education-consistent, but presented as product capability | Med |
| ±0.5°C control accuracy (benefits) | `benefits.tsx` | Specific spec claim | Med |
| Partners list (8 major Indian developers) | `lib/site.ts` | Proof claim, no logos/docs | High |
| 5 testimonials with names/roles/cities/projects | `lib/site.ts` | Proof claim, no verification | High |
| Projects list (8 applications in solutions + 6 in projects) | pages + components | Proof claim, no project references | High |
| "Designed for interiors", "SRINAGAR / INDIA" in hero meta | `hero-meta.tsx` | Origin claim; consistent with about page | Med |
| "our own crews — never subcontractors" | `services/process.tsx` | Operational claim | Med |
| "annual health checks for hydronic homes" | `services/process.tsx`, services copy | Service claim | Med |
| "three-test discipline: every circuit resistance-tested before, during and after the floor goes down" | `services/process.tsx` | Process claim | Low-Med |
| "From the first room survey to the final control setting..." and similar service promises | `services/page.tsx` | Service claims | Low-Med |
| "Ready for your last cold winter?" (CTA banner) | `cta-banner.tsx` | Marketing line, not a factual claim | Low |
| "Book a free survey" (CTA banner) | `cta-banner.tsx` | Offer claim — free survey must be real | Med |

---

## 6. SEO audit

### 6.1 What is in place

- `app/layout.tsx` exports `metadata` using the Next.js `Metadata` API, with `metadataBase`, title template, description, keywords, Open Graph, Twitter card.
- `app/robots.ts` and `app/sitemap.ts` exist and are dynamic from `siteConfig`.
- Individual pages set their own `metadata.title` / `description` where they do (about, services, insights, insight detail).
- `app/sitemap.ts` includes product slugs and insight slugs.
- `app/insights/[slug]/page.tsx` generates `generateStaticParams` and per-page `generateMetadata`.

### 6.2 Problems

1. **Home page title/description mismatch.** `app/page.tsx` sets its own `title` and `description` that do not match the layout template or `siteConfig`. Title is "Premium Heating Technology — Comfort, engineered into every surface"; description says "WOWTHERM designs and installs...". This overrides the root metadata and is branded wrong. `app/page.tsx` should not set its own top-level title/description this way unless intentional — and if intentional, it must be accurate and on-brand.
2. **Brand name inside metadata.** Root title, OG title, Twitter title, description, siteName all flow from `siteConfig.name`. Until the brand is settled, all of these are branded with the wrong name.
3. **`keywords` metadata.** The root `keywords` array is present. This is mostly ignored by search engines and can look unprofessional; I would remove or slim it during the rewrite.
4. **Page-level titles.** Several pages use very generic titles: "Services", "Products", "Insights", "Contact". These need unique, keyword-rich titles. Some pages do not set metadata at all and rely on the root template — that is fine only once the brand is right.
5. **Open Graph images.** No `openGraph.images` set at the root. OG cards will fall back to a default or none. Each major page should have an OG image (ideally a real branded image, not a random project photo).
6. **Twitter card.** Set to `summary_large_image`, but without `openGraph.images` it may not render well.
7. **Canonical.** Next.js handles canonical from `metadataBase` / page URL by default. No custom canonical needed, but the home page's custom title/description suggests metadata discipline is loose and should be checked page by page.
8. **Sitemap priorities/changefreq.** Present and reasonable, but `lastModified: new Date()` for many static pages means every build stamps today's date. That is acceptable for a small site but not ideal; not a blocker.
9. **URL structure.** Clean, slug-based. Good. Product and insight routes are well structured.
10. **Heading hierarchy.** Many sections use oversized display typography as the visual "headline" but those are often `<p>` or `<span>` styled large rather than `<h1>`/`<h2>`. This is a semantic concern: the real document outline needs one `<h1>` per page and a logical `h2/h3` structure. Several pages currently have no clear single `<h1>` in the accessible tree — hero text is often a styled paragraph. This is an accessibility + SEO issue.
11. **Insight article SEO.** Articles have titles/descriptions in frontmatter and per-page metadata, which is good. But the fallback articles in `insights-list.tsx` are hardcoded with "WowTherm Team" authors and will be visible until MDX is wired. The articles also lack OG images in frontmatter (they have `image` but it is not mapped into `generateMetadata.openGraph` in the slug page — only title/description/url).
12. **Internal linking.** Nav links and footer links exist. Some links are decorative or duplicate. No obvious broken internal links from what I read, but several pages link to `/contact`, `/products`, `/solutions`, `/projects`, `/insights`. I have not exhaustively validated every link; that belongs in Phase 3.
13. **Image alt text.** Mixed: some images have descriptive alt text, some have empty `alt=""`, some have placeholder alt text, and the logo alt is the wrong brand. Several project/application cards use `alt=""` or `alt={project.title}` but the surrounding context may already describe them; still, a pass is needed.

---

## 7. Accessibility audit

### 7.1 Landmark structure

- Root layout has `<header className="...">` (navbar), `<main id="main">`, `<Footer>` (a `<footer>`). This is good: there is a main landmark and footer.
- Mobile drawer uses `<motion.aside>` with `aria-describedby={undefined}` and Radix `Dialog.Content`. The dialog pattern is reasonable; the `aria-describedby={undefined}` is odd but not necessarily harmful.
- Several sections use `aria-label` on decorative containers, which is fine.

### 7.2 Heading order

- Problem: many hero "headlines" are implemented as large styled paragraphs or spans, not as `<h1>`. Examples: about hero, services hero, products hero, solutions hero, home hero scroll text.
- The about page does include an `<h1>`-sized visual but it is a styled `<h1>` only in some parts; other pages rely on display paragraphs. This needs a real `<h1>` per page for screen readers and SEO.
- After the hero, subheadings often use `<h2>`-sized display text but may not be `<h2>` elements. This means the document outline can be flat or misleading.

### 7.3 Color contrast

The brief specifically flagged the gold-on-paper text and tiny uppercase labels. My assessment:

- Gold `#F2B84B` on paper `#F4F1EA`: this is light gold on light cream. Depending on size/weight, this can fail WCAG for small text. It is used for eyebrows and small uppercase labels. As designed, these are intentionally low-contrast decorative labels, but they are also sometimes used for navigation-active states and small readable text. This is a real accessibility risk for the 8–9 px uppercase tracked labels.
- Ink `#11100E` on paper `#F4F1EA`: strong contrast, fine.
- Copper `#B98520` on paper `#F4F1EA`: similar concern to gold; used for small labels and active states.
- White on charcoal `#11100E`: fine.
- The footer is charcoal-950 with white/copper text — generally fine, but copper-on-charcoal small text should be checked.

I have not run a pixel-level contrast test here; the recommendation is to verify the gold and copper small labels against their backgrounds and either darken them or accept them as decorative-only (and ensure decorative labels are not the only way to convey information).

### 7.4 Focus states

- `globals.css` defines `:focus-visible` with a copper outline + offset. Good start.
- Navbar links, mobile menu buttons, testimonial nav, service scroller buttons, and CTA links should all be checked for visible focus. Some buttons use custom styling that may obscure focus (e.g., circular icon buttons).
- The mobile drawer close/open and Radix dialog should be keyboard-accessible; Radix handles most of this, but focus trapping and escape should be verified in Phase 3.

### 7.5 Keyboard access

- Navbar links and CTAs are real `<Link>` / `<button>` elements — good.
- Service scroller uses buttons for prev/next with `aria-label` — good.
- Testimonials carousel uses buttons for each testimonial with `aria-current` and `aria-label` — good.
- Accordion (where used) uses Radix primitives — good.
- Some custom scroll-driven UI (product showcase, process, benefits) may be mostly visual and not keyboard-operable in their full animated form; that is acceptable for decorative sections but any interactive controls must be keyboard reachable.

### 7.6 Reduced motion

- `globals.css` has a `@media (prefers-reduced-motion: reduce)` block that shortens animations and disables smooth scroll.
- `MotionProvider` sets `reducedMotion="user"`.
- `SmoothScroll` (Lenis) bails out for reduced-motion users.
- Several components check reduced motion and simplify (e.g., benefits commented-out block references it; `testimonials.tsx` uses `useReducedMotion`; `process.tsx` uses `usePrefersReducedMotion` in the scroll-text layer).
- This is generally well-handled. One concern: the pinned scroll sections (benefits, process, product showcase) are highly motion-dependent; reduced-motion users may get a degraded but still functional view. That is acceptable but should be confirmed visually.

### 7.7 Link text quality

- Some CTAs are good: "Start a project", "Talk to an expert", "Book a free survey", "Browse systems".
- Some links are weak or repetitive: multiple "Explore systems", "Explore product", "Discuss this system", "Discuss your space". Not broken, but a bit generic.
- Arrow-only buttons and icon links mostly have `aria-label` — good.

### 7.8 Image alt text

- Logo alt is wrong brand.
- Some hero/project images have descriptive alt text.
- Several cards use `alt=""` where the image is decorative or redundant — acceptable if truly decorative.
- Placeholder images use `alt="[PLACEHOLDER — Replace with real WowTherm photo]"` — not acceptable in production.
- Insight article images use `alt={insight.title}` — acceptable.

---

## 8. Technical content hygiene

| Issue | Where | Severity |
|---|---|---|
| `lorem`-style placeholder copy and `[PLACEHOLDER]` tokens | `story.tsx`, `timeline.tsx`, `values-cta.tsx`, `about-hero.tsx` | High |
| `[YEAR]` / `[NUMBER]` tokens in placeholder copy | `story.tsx`, `timeline.tsx` | High |
| Placeholder image alt text | `story.tsx` (4 images) | High |
| `TODO: Integrate with backend/email service` | `app/contact/page.tsx` | Med |
| `console.log("Form submitted:", data)` | `app/contact/page.tsx` | Low (dev leak in a client component) |
| `[WowTherm]` dev console log | `components/home/hero/heating-mat-visual.tsx` | Low (dev-only, but branded wrong) |
| WOWTHERM / WowTherm throughout | many files | High (brand) |
| Stale/uncertain years | about milestones (2011, 2015, 2019, 2023) — stated as Heatify history | Med (verify) |
| "How ProWarm works" in services meta | `app/services/page.tsx` | Med (wrong name) |
| Empty `alt=""` on some images | several components | Low-Med (verify each) |
| Generic project/application alt text | some cards | Low |
| Commented-out legacy code blocks | `services/process.tsx`, `benefits.tsx` | Low (not user-facing, but noise) |
| `package.json` name `wowtherm` | `package.json` | Low (internal) |
| GSAP CustomEase named `wowtherm` | `lib/gsap.ts` | Low (internal, but branded) |
| No legal pages | route tree | Med (missing) |
| Non-functional contact form | `app/contact/page.tsx` | High (user-facing) |
| Missing logo file referenced by navbar | `navbar.tsx` → `/logo1.png` | High (broken asset path) |

---

## 9. Gaps — what a premium underfloor-heating site is missing

1. **Flooring compatibility page/section.** The brief expects a clear guide: tile/stone, engineered wood, laminate, vinyl/SPC, solid wood (not recommended), carpet, and the ~27 °C cap for wood-based finishes. There is no dedicated page for this; bits are scattered in product data and floor anatomy.
2. **How installation works (end to end).** There is a process section, but no clear standalone "Is underfloor heating right for you?" page with honest regional guidance (who it suits in India, who it does not).
3. **FAQ.** No FAQ page exists. The brief expects 8–12 genuine questions.
4. **Privacy / Terms.** No legal routes.
5. **Trust proof that is currently unverified.** Stats, partners, testimonials, project list are all unverified — they function as proof but cannot be published as fact until confirmed.
6. **Pricing.** No prices anywhere; the brief says not to invent them, so this is a "leave blank or use a call-to-action" gap, not a content error.
7. **Certifications / warranty documentation.** None attached; product pages claim warranties without supporting docs.
8. **Blog/insights wiring.** The insights list shows hardcoded fallback articles authored by "WowTherm Team"; the MDX content is there but the articles still carry the old brand in frontmatter and body.
9. **Regional localization.** Copy leans on "India" and "Srinagar" but does not yet have a clear, honest regional positioning section for the cold-belt vs national-default distinction the brief wants.
10. **Canonical OG image per page.** Missing; would strengthen shareability.

---

## 10. Prioritised findings

| Severity | Finding | Effort | Recommendation |
|---|---|---|---|
| High | Brand name is split: Heatify and WowTherm both live in the repo, including in shared config, metadata, footer, navbar, product data, and content. | Medium | Decide the correct name first. Do not touch copy until confirmed. Then centralise the name in `lib/site.ts` and propagate. |
| High | Navbar references `/logo1.png` (alt "WOWTHERM"); that file is not present; the visible logo asset is a HEATIFY wordmark. | Low-Medium | Confirm correct logo file and path; fix src + alt together. |
| High | Footer renders the brand as HTML "WOWTHERM" text. | Low | Replace with the confirmed brand wordmark (text or image) once name is settled. |
| High | Stats, partners, testimonials, and project list are unverified proof claims. | Medium | Either confirm each from Fact Sheet sources or replace with honest placeholders and move them to `OPEN_QUESTIONS.md`. |
| High | Contact form is non-functional (`TODO` + console.log); success state promises "within 24 hours" without confirmation. | Medium | Wire a real form handler or make the placeholder states honest; confirm or remove the response-time claim. |
| High | Placeholder about content: story images + copy + timeline + values CTA CTA copy are all `[PLACEHOLDER]`. | Medium | Replace with real content or remove the sections until real content exists. |
| Medium | Home page overrides root metadata with wrong-brand title/description. | Low | Remove or correct; ensure every page has unique, accurate metadata. |
| Medium | No OG images configured. | Low | Add `openGraph.images` per page with real branded images. |
| Medium | No dedicated FAQ page. | Medium | Add one, 8–12 genuine questions, with JSON-LD only if claims are real. |
| Medium | No flooring-compatibility page. | Medium | Add one; use general industry guidance, no invented Heatify specs. |
| Medium | No "Is underfloor heating right for you?" page with honest regional guidance. | Medium | Add one; be explicit about cold-belt suitability and who it is not for. |
| Medium | Heading hierarchy is weak on several pages (visual headlines are styled paragraphs, not `<h1>`/`<h2>`). | Medium | Re-head the pages semantically without changing design. |
| Medium | Small gold/copper uppercase labels may not meet contrast for readable text. | Low-Medium | Verify contrast; if informational, darken; if decorative, ensure they are not the sole conveyer of meaning. |
| Medium | Missing privacy/terms routes. | Low | Add stubs flagged for legal review; do not invent legal text. |
| Medium | Insights articles still branded "WowTherm" in frontmatter and body. | Low-Medium | Rewrite authors and brand strings after brand decision. |
| Low | Internal motion/config naming still says "wowtherm"/"WOWTHERM". | Low | Refresh after brand decision; cosmetic. |
| Low | `package.json` name `wowtherm`. | Low | Rename if/when the project identity is settled. |
| Low | Dev console logs with old brand. | Low | Remove or neutralise before production. |

---

## Stop — what I need from you

**Phase 0 is complete.** I have not edited anything. Before Phase 1, please confirm:

1. **Brand name.** Is this brand **Heatify**, **WowTherm**, or something else? If Heatify, do you want the WowTherm identity fully retired from config, metadata, footer, navbar, product data, and content?
2. **Logo.** Which file is the real logo, and where should it live? Is `/logo1.png` supposed to exist and be replaced, or should the navbar point at a different file (e.g., the HEATIFY wordmark in `public/image.png`)? What should the logo alt text say?
3. **Tagline.** Is the tagline "Comfort, engineered into every surface.", "Engineered warmth", or something else?
4. **Which facts are real.** From the claim risk list and fact sheet, which of these do you confirm as true for Heatify: the stats (12,500+ installations, 320,000+ sq ft, 40% lower running costs, 98% recommend), the partner list, the testimonials, the project list, the product warranties/specs, the 2011 Srinagar founding story, the free-survey offer, and the "within 24 hours" response time?
5. **Scope.** Do you want all pages rewritten, or only the public-facing ones (home, products, services, solutions, projects, insights, about, contact)? Should the placeholder about sections be removed or waited on for real content?

Once you reply, I will write `HEATIFY_FACT_SHEET.md`, `OPEN_QUESTIONS.md`, and proceed to Phase 1 (content strategy), then Phase 2 (rewrite), then Phase 3 (verify).
