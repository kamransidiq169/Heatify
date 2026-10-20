# HEATIFY_FACT_SHEET.md

> Built from repo content only. No external Heatify facts have been added.
> Each item is marked **VERIFIED** only if it is literally in the repo as a Heatify fact.
> Items branded "WowTherm/WOWTHERM" in the repo are marked **UNVERIFIED (brand mismatch)** because they are not currently Heatify facts in the repo.
> Any claim that is suspicious or unsourced is marked **UNVERIFIED**.

---

## Identity

| Fact | Source | Status |
|---|---|---|
| Brand name currently stored as "WowTherm" in shared config | `lib/site.ts:2` | UNVERIFIED (brand mismatch) |
| Site URL currently stored as `https://wowtherm.com` | `lib/site.ts:3` | UNVERIFIED (brand mismatch) |
| Config tagline: "Comfort, engineered into every surface." | `lib/site.ts:4` | UNVERIFIED (brand mismatch + tagline not confirmed) |
| Site description: "WowTherm designs and installs premium heating systems for modern homes, hospitality spaces and architectural interiors. Invisible warmth, precise control, architectural integrity." | `lib/site.ts:6` | UNVERIFIED (brand mismatch) |
| Email: `hello@wowtherm.com` | `lib/site.ts:7` | UNVERIFIED (brand mismatch) |
| Phone: `+91 98110 40040` | `lib/site.ts:8` | UNVERIFIED (contact detail) |
| Address: "Design District, Lower Parel, Mumbai 400013" | `lib/site.ts:9` | UNVERIFIED (address) |
| Map query: "Design District, Lower Parel, Mumbai" | `lib/site.ts:10` | UNVERIFIED (address) |
| Socials: Instagram, Facebook, LinkedIn, YouTube all under `wowtherm` slugs | `lib/site.ts:12-15` | UNVERIFIED (brand mismatch) |
| Nav links: About, Technology, Products, Projects (Insights commented out) | `lib/site.ts:18-24` | VERIFIED (this is the current nav configuration in the repo) |
| Navbar references logo file `/logo1.png` with `alt="WOWTHERM"` | `components/layout/navbar.tsx:113` | UNVERIFIED (asset path not found in public listing; alt text brand mismatch) |

---

## Brand name (the key open fact)

- The repo uses **two names**. "Heatify" appears in the hero component, the About page, and several section editorial lines. "WowTherm"/"WOWTHERM" appears in shared config, the footer, the navbar, product data, metadata, insights, and many component eyebrows.
- No single canonical Heatify brand statement exists in the repo right now.
- Status: **UNVERIFIED** — the canonical brand name for this site is not established in the repo yet.

---

## Contact details

| Fact | Source | Status |
|---|---|---|
| Phone `+91 98110 40040` appears as the real contact phone and also as the contact form phone placeholder | `lib/site.ts:8`, `app/contact/page.tsx:144` (placeholder) | UNVERIFIED (repeats as placeholder; needs confirmation) |
| Email `hello@wowtherm.com` is used as the contact email | `lib/site.ts:7`, `app/contact/page.tsx` mailto | UNVERIFIED (brand mismatch) |
| Address "Design District, Lower Parel, Mumbai 400013" is shown on the contact page from siteConfig | `lib/site.ts:9`, `app/contact/page.tsx` | UNVERIFIED (address) |
| Contact form success message promises a response "within 24 hours" | `app/contact/page.tsx:107` | UNVERIFIED (service promise) |
| Contact form is non-functional: a TODO and console.log remain in the submit handler | `app/contact/page.tsx:47-48` | VERIFIED (this is a real state of the repo, not a factual claim about Heatify) |

---

## Stats (proof claims)

| Fact | Source | Status |
|---|---|---|
| 12,500+ installations, note "Homes, villas and hotels" | `lib/site.ts:28` | UNVERIFIED (proof claim) |
| 320,000+ sq ft warmed, note "From Kashmir chalets to Mumbai penthouses" | `lib/site.ts:29` | UNVERIFIED (proof claim) |
| 40% lower running costs, note "Versus conventional space heating" | `lib/site.ts:30` | UNVERIFIED (proof claim; also appears in benefits and comparison copy) |
| 98% recommend us, note "Post-installation survey, 2025" | `lib/site.ts:31` | UNVERIFIED (proof claim; no survey artifact in repo) |

---

## Partners / clients

| Fact | Source | Status |
|---|---|---|
| Prestige Group | `lib/site.ts:34` | UNVERIFIED (proof claim) |
| Sobha Realty | `lib/site.ts:35` | UNVERIFIED (proof claim) |
| DLF Homes | `lib/site.ts:36` | UNVERIFIED (proof claim) |
| Godrej Properties | `lib/site.ts:37` | UNVERIFIED (proof claim) |
| Brigade Group | `lib/site.ts:38` | UNVERIFIED (proof claim) |
| Oberoi Realty | `lib/site.ts:39` | UNVERIFIED (proof claim) |
| Tata Housing | `lib/site.ts:40` | UNVERIFIED (proof claim) |
| L&T Realty | `lib/site.ts:41` | UNVERIFIED (proof claim) |

---

## Testimonials

All five testimonials are currently authored in `lib/site.ts` with names, roles, cities, and project labels.

| Fact | Source | Status |
|---|---|---|
| Meera Chandran, Homeowner, New Delhi, "Luxury Residence" | `lib/site.ts:44-48` | UNVERIFIED (proof claim; brand mismatch in quote text) |
| Kabir Sethi, Principal Architect, Studio Terra, "Commercial Complex, Bengaluru" | `lib/site.ts:50-54` | UNVERIFIED (proof claim; brand mismatch in quote text) |
| Anjali Thakur, Owner, Cedar House, "Hospitality, Manali" | `lib/site.ts:56-62` | UNVERIFIED (proof claim; brand mismatch in quote text) |
| Rohit Banerjee, Homeowner, Gurugram, "Residential Villa" | `lib/site.ts:64-69` | UNVERIFIED (proof claim; brand mismatch in quote text) |
| Farah Wani, Homeowner, Srinagar, "Heritage Renovation" | `lib/site.ts:71-76` | UNVERIFIED (proof claim; brand mismatch in quote text) |

Note: the testimonial quotes currently contain "WowTherm" references verbatim, so they are also brand-mismatch until rewritten.

---

## Products (current product data)

Source: `lib/products.ts`.

### StickyMat 200W
| Fact | Source | Status |
|---|---|---|
| Category: electric | `lib/products.ts:78` | VERIFIED (repo data) |
| Tagline: "Self-adhesive electric mat for tile and stone floors" | `lib/products.ts:79` | VERIFIED (repo data) |
| Output: 200 W/m² | `lib/products.ts:97` | VERIFIED (repo data) |
| Thickness: 3 mm | `lib/products.ts:98` | VERIFIED (repo data) |
| Cable type: twin-conductor, fluoropolymer insulated | `lib/products.ts:99-101` | VERIFIED (repo data) |
| Voltage: 230 V AC | `lib/products.ts:102` | VERIFIED (repo data) |
| Sizes: 1 m² to 12 m² mats | `lib/products.ts:103` | VERIFIED (repo data) |
| Floor finishes: tile, stone, marble, granite | `lib/products.ts:104-106` | VERIFIED (repo data) |
| Warranty: 10 years | `lib/products.ts:107` | VERIFIED (repo data; not backed by a warranty document) |
| IPX7-rated, safe for bathrooms and wet rooms | `lib/products.ts:89` | UNVERIFIED (cert claim without cert in repo) |
| "zero EMF design" | `lib/products.ts:88` | UNVERIFIED (measurement claim without source) |
| "Warms tile and stone from cold in 15–25 minutes" | `lib/products.ts:87` | UNVERIFIED (performance claim) |
| "most bathrooms reach barefoot comfort in under 20 minutes" | `lib/products.ts:83` | UNVERIFIED (performance claim) |

### WarmFoil Underlaminate
| Fact | Source | Status |
|---|---|---|
| Category: electric | `lib/products.ts:119` | VERIFIED (repo data) |
| Tagline: "Dry-fit foil heating for laminate and engineered wood" | `lib/products.ts:120` | VERIFIED (repo data) |
| Output: 140 W/m² | `lib/products.ts:139` | VERIFIED (repo data) |
| Thickness: 1 mm | `lib/products.ts:140` | VERIFIED (repo data) |
| Construction: earthed aluminium foil element | `lib/products.ts:141-143` | VERIFIED (repo data) |
| Voltage: 230 V AC | `lib/products.ts:144` | VERIFIED (repo data) |
| Floor finishes: laminate, engineered wood (floated) | `lib/products.ts:145-147` | VERIFIED (repo data) |
| Warranty: 10 years | `lib/products.ts:148` | VERIFIED (repo data; not backed by a warranty document) |
| "Compatible with click-lock laminate and engineered wood up to 18mm" | `lib/products.ts:94` | UNVERIFIED (compatibility claim; also in features) |
| "Gentle, even warmth that engineered timber manufacturers approve" | `lib/products.ts:125` | UNVERIFIED (approval claim without approval in repo) |

### AquaBoard Low-Profile
| Fact | Source | Status |
|---|---|---|
| Category: hydronic | `lib/products.ts:161` | VERIFIED (repo data) |
| Tagline: "Retrofit water-based heating at just 18mm height" | `lib/products.ts:162` | VERIFIED (repo data) |
| Build-up height: 18 mm + floor finish | `lib/products.ts:180` | VERIFIED (repo data) |
| Pipe: 12 mm PERT-AL-PERT, 25-year warranty | `lib/products.ts:181-183` | VERIFIED (repo data; warranty claim without document) |
| Flow temperature: 35–55 °C | `lib/products.ts:184` | VERIFIED (repo data) |
| Heat source: heat pump, gas boiler or solar thermal | `lib/products.ts:185-187` | VERIFIED (repo data) |
| Floor finishes: tile, stone, engineered wood, vinyl | `lib/products.ts:188-190` | VERIFIED (repo data) |
| Warranty: 25 years (pipe), 10 years (panels) | `lib/products.ts:191-193` | VERIFIED (repo data; not backed by a warranty document) |
| "lowest running cost per m² of any WowTherm system" | `lib/products.ts:168` | UNVERIFIED (comparative claim; brand mismatch) |
| "Works with heat pumps at low flow temperatures (35°C)" | `lib/products.ts:166` | UNVERIFIED as Heatify spec (consistent with general industry knowledge, but still a product capability claim) |

### SenseWarm Pro
| Fact | Source | Status |
|---|---|---|
| Category: thermostats | `lib/products.ts:204` | VERIFIED (repo data) |
| Tagline: "App-controlled warmth that learns your routine" | `lib/products.ts:205` | VERIFIED (repo data) |
| Display: 3.5" colour touchscreen | `lib/products.ts:223` | VERIFIED (repo data) |
| Sensors: air + floor probe (supplied) | `lib/products.ts:224` | VERIFIED (repo data) |
| Max load: 16 A (3,600 W) | `lib/products.ts:225` | VERIFIED (repo data) |
| Connectivity: 2.4 GHz Wi-Fi | `lib/products.ts:226` | VERIFIED (repo data) |
| Compatibility: "All WowTherm electric systems" | `lib/products.ts:227-229` | UNVERIFIED (brand mismatch + compatibility claim) |
| Warranty: 5 years | `lib/products.ts:230` | VERIFIED (repo data; not backed by a warranty document) |
| "Self-learning schedule cuts run-time up to 25%" | `lib/products.ts:213` | UNVERIFIED (performance claim) |
| "Alexa and Google Home compatible" | `lib/products.ts:215` | UNVERIFIED (integration claim without proof in repo) |
| Dual air + floor sensing protects wooden floors | `lib/products.ts:211` | UNVERIFIED (protection claim) |

### ThermaBase XPS
| Fact | Source | Status |
|---|---|---|
| Category: insulation | `lib/products.ts:243` | VERIFIED (repo data) |
| Tagline: "The single biggest upgrade to running costs" | `lib/products.ts:244` | VERIFIED (repo data; superlative-style) |
| Material: extruded polystyrene, cement-coated both faces | `lib/products.ts:261-263` | VERIFIED (repo data) |
| Thickness: 6 mm, 10 mm or 20 mm | `lib/products.ts:264` | VERIFIED (repo data) |
| Thermal conductivity: 0.032 W/mK | `lib/products.ts:265` | VERIFIED (repo data) |
| Board size: 1200 × 600 mm | `lib/products.ts:266` | VERIFIED (repo data) |
| Compressive strength: 300 kPa | `lib/products.ts:267` | VERIFIED (repo data) |
| Warranty: "Lifetime of the floor" | `lib/products.ts:268` | UNVERIFIED (warranty claim without document) |
| "Halves heat-up times on concrete slabs" | `lib/products.ts:251` | UNVERIFIED (performance claim) |
| "Cuts running costs by up to 50%" | `lib/products.ts:252` | UNVERIFIED (performance claim) |

### AquaFlow Manifold
| Fact | Source | Status |
|---|---|---|
| Category: accessories | `lib/products.ts:287` | VERIFIED (repo data) |
| Tagline: "Precision flow control for every hydronic zone" | `lib/products.ts:288` | VERIFIED (repo data) |
| Material: nickel-plated brass | `lib/products.ts:307` | VERIFIED (repo data) |
| Ports: 2–12 circuits | `lib/products.ts:308` | VERIFIED (repo data) |
| Max pressure: 10 bar (test), 6 bar (working) | `lib/products.ts:309-311` | VERIFIED (repo data) |
| Flow meters: 0–5 L/min per circuit | `lib/products.ts:312` | VERIFIED (repo data) |
| Connections: 1" primary, ¾" eurocone circuits | `lib/products.ts:313-315` | VERIFIED (repo data) |
| Warranty: 10 years | `lib/products.ts:316` | VERIFIED (repo data; not backed by a warranty document) |
| "Accepts SenseWarm actuators for smart zoning" | `lib/products.ts:296` | UNVERIFIED (compatibility claim) |

---

## About / history

| Fact | Source | Status |
|---|---|---|
| Heatify began in Srinagar | `app/about/page.tsx:630` | UNVERIFIED (about-page claim; not corroborated elsewhere in the repo) |
| Founded 2011 | `app/about/page.tsx:627` (milestone year), `app/about/page.tsx:1056` (established 2011) | UNVERIFIED (about-page claim) |
| 2015: "HAMAM, DONE RIGHT" wet-area-certified electric hamam systems for the Kashmiri home | `app/about/page.tsx:646-650` | UNVERIFIED (milestone claim; "wet-area-certified" implies a certification not present in the repo) |
| 2019: extended supply/installation to homes and projects across the region | `app/about/page.tsx:652-656` | UNVERIFIED (milestone claim) |
| 2023: expanded into a major underfloor heating supplier and installer across India | `app/about/page.tsx:658-662` | UNVERIFIED (milestone claim) |
| "TODAY": thousands of floors later | `app/about/page.tsx:664-668` | UNVERIFIED (proof claim; also vague) |
| Story copy: "Heatify began in Srinagar, where harsh winters make the relationship between a home and its heating impossible to ignore." | `app/about/page.tsx:698-703` | UNVERIFIED (narrative claim) |
| Story copy: "That idea became Heatify: technology that works quietly beneath the architecture while the space remains exactly as it was designed." | `app/about/page.tsx:822-826` | UNVERIFIED (brand narrative) |
| Values: "Measure, then promise", "Hide nothing under the floor", "Stay close to the customer", "Design for this country" | `app/about/page.tsx:28-44` | VERIFIED as current copy (not necessarily verified facts) |
| "The Heatify Standard" closing statement: "Warmth should be felt. Engineering should disappear." | `app/about/page.tsx:1155-1160` | VERIFIED as current copy (statement, not fact) |

Note: The About story images and timeline are placeholder and contain no usable real Heatify history in the repo (`components/about/story.tsx`, `components/about/timeline.tsx`).

---

## Services / process claims

| Fact | Source | Status |
|---|---|---|
| Free survey / heat-loss assessment | `app/services/page.tsx:33-40`, `components/services/process.tsx (commented alternate steps)` | UNVERIFIED (service offer; needs confirmation) |
| Survey outputs a per-room wattage requirement | `app/services/page.tsx:37-39` | UNVERIFIED (process claim) |
| Electric installations: most bathrooms done in two days including tiling handover | `app/services/page.tsx:48-51` | UNVERIFIED (process claim) |
| Every circuit is resistance-tested three times and photographed before it disappears | `app/services/page.tsx:50-51` | UNVERIFIED (process claim) |
| Hydronic screeded systems for new construction; 18 mm low-profile boards for renovations | `app/services/page.tsx:54-58` | VERIFIED (consistent with product data) |
| Heat-source sizing and commissioning included; heat-pump packages that run radiant floors at their efficiency sweet spot | `app/services/page.tsx:58-59` | UNVERIFIED (service claim) |
| Room-by-room zoning, schedules programmed on commissioning day, floor-temperature limits that protect wooden finishes | `app/services/page.tsx:62-65` | UNVERIFIED (service claim) |
| ThermaBase insulation layer typically halves heat-up time and cuts running costs by up to 50% | `app/services/page.tsx:69-72`, `components/services/floor-anatomy.tsx:38` | UNVERIFIED (performance claim) |
| Handover pack includes logged test results, photographs of every cable and pipe run, and registered warranty documents | `app/services/page.tsx:76-78` | UNVERIFIED (service claim) |
| Support is the Mumbai engineering team; annual health checks for hydronic installations | `app/services/page.tsx:78-79` | UNVERIFIED (service claim) |
| 10 years on electric systems, 25 on hydronic pipework | `components/services/process.tsx:26` | VERIFIED (consistent with product data) |
| "Our own crews — never subcontractors" | `components/services/process.tsx:15` | UNVERIFIED (operational claim) |
| Three-test discipline: every circuit resistance-tested before, during and after the floor goes down | `components/services/process.tsx:15-16` | UNVERIFIED (process claim) |

---

## Projects and applications (proof claims)

### Featured applications on the Solutions page
Source: `app/solutions/page.tsx:16-82`.

| Fact | Source | Status |
|---|---|---|
| Luxury Residence, Srinagar, Kashmir, residential, AquaBoard Low-Profile, 2024 | `app/solutions/page.tsx:17-23` | UNVERIFIED (proof claim) |
| Cedar House Hotel, Manali, Himachal Pradesh, hospitality, AquaFlow Screed System, 2023 | `app/solutions/page.tsx:25-31` | UNVERIFIED (proof claim) |
| Penthouse Residence, Mumbai, Maharashtra, residential, StickyMat 200W + SenseWarm Pro, 2024 | `app/solutions/page.tsx:33-39` | UNVERIFIED (proof claim) |
| Hillside Chalet, Shimla, Himachal Pradesh, residential, WowTherm ClimaBoard, 2023 | `app/solutions/page.tsx:41-47` | UNVERIFIED (proof claim; brand mismatch in product name) |
| Heritage Haveli Restoration, Jaipur, Rajasthan, residential, AquaBoard XT, 2024 | `app/solutions/page.tsx:49-55` | UNVERIFIED (proof claim; product name AquaBoard XT not present in product data) |
| Tech Park Office Fit-Out, Bengaluru, Karnataka, commercial, AquaFlow ScreedPro, 2023 | `app/solutions/page.tsx:57-63` | UNVERIFIED (proof claim; product name AquaFlow ScreedPro not present in product data) |
| Beachfront Villa, Anjuna, Goa, residential, StickyMat 150W, 2024 | `app/solutions/page.tsx:65-71` | UNVERIFIED (proof claim; product name StickyMat 150W not present in product data) |
| Boutique Wellness Spa, New Delhi, India, hospitality, SenseWarm Zone Control, 2023 | `app/solutions/page.tsx:73-81` | UNVERIFIED (proof claim; product name SenseWarm Zone Control not present in product data) |

### Projects list page
Source: `app/projects/page.tsx:9-67`.

| Fact | Source | Status |
|---|---|---|
| Luxury Residence, Srinagar, Kashmir, residential, AquaBoard Low-Profile, 2024, 4,200 sq ft | `app/projects/page.tsx:10-17` | UNVERIFIED (proof claim) |
| Cedar House Hotel, Manali, Himachal Pradesh, hospitality, AquaFlow Screed System, 2023, 12,000 sq ft | `app/projects/page.tsx:19-26` | UNVERIFIED (proof claim) |
| Penthouse Residence, Mumbai, Maharashtra, residential, StickyMat 200W + SenseWarm Pro, 2024, 3,800 sq ft | `app/projects/page.tsx:28-35` | UNVERIFIED (proof claim) |
| Mountain Spa Resort, Mussoorie, Uttarakhand, wellness, AquaFlow + ThermaBase XPS, 2023, 8,500 sq ft | `app/projects/page.tsx:37-44` | UNVERIFIED (proof claim) |
| Modern Villa, Bengaluru, Karnataka, residential, WarmFoil Underlaminate, 2024, 2,800 sq ft | `app/projects/page.tsx:46-53` | UNVERIFIED (proof claim) |
| Corporate Headquarters, New Delhi, commercial, AquaFlow Screed System, 2023, 25,000 sq ft | `app/projects/page.tsx:55-64` | UNVERIFIED (proof claim) |

Note: the homepage projects strip (`components/home/projects.tsx:15-64`) repeats a similar project set and also includes "WowTherm ClimaBoard" and "AquaBoard XT" product references.

---

## Insights / content

| Fact | Source | Status |
|---|---|---|
| Articles exist in `content/insights/` | `lib/insights.ts:15-16` | VERIFIED (repo content) |
| `underfloor-heating-guide.mdx` — author "WowTherm Engineering Team", body closes with "That's what we do at WowTherm — every project, every time." | `content/insights/underfloor-heating-guide.mdx:5,63` | UNVERIFIED (brand mismatch; article factoids are general education) |
| `thermal-comfort-wellness.mdx` — author "WowTherm Team", section "The WowTherm Approach" | `content/insights/thermal-comfort-wellness.mdx:5,44` | UNVERIFIED (brand mismatch) |
| Fallback insight authors in insights-list use "WowTherm Team" / "WowTherm Engineering Team" | `components/insights/insights-list.tsx:26,38,50,69,79` | UNVERIFIED (brand mismatch) |
| Insights list fallback includes a third article "Smart Thermostats: What Actually Matters" not present as MDX in `content/insights/` | `components/insights/insights-list.tsx:52-66` | UNVERIFIED (fallback-only article; no source file) |

---

## What is NOT in the repo (so it is NOT a Heatify fact yet)

- No pricing or price list.
- No certifications document (IPX7, wet-area certification, EMF, etc.).
- No warranty terms document.
- No survey/report backing the stats.
- No client/partner confirmation (logos, letters, case studies).
- No real team bios or photos (team component is placeholder).
- No real about-images (story images are placeholder paths).
- No privacy/terms pages.
- No "Is underfloor heating right for you?" page.
- No FAQ page.
- No flooring-compatibility page.
- No Heatify-specific regional positioning statement beyond the About page narrative.

---

## How to read this sheet

- **VERIFIED (repo data)** means the item exists in the repo as stated. It does **not** mean it is true in the real world; only that it is the repo's current content.
- **UNVERIFIED (proof claim)** means the repo asserts something about Heatify's real-world performance, clients, or history without a source artifact in the repo.
- **UNVERIFIED (brand mismatch)** means the item currently exists but under the wrong brand name and must be reconciled before use.
- **UNVERIFIED (address/contact)** means the contact detail is not confirmed as a Heatify fact.
- **VERIFIED as current copy** means the text exists in the repo, not that the proposition is proven.
