# OPEN_QUESTIONS.md

> Phase 0 exit artifact. These are the decisions and confirmations I need before
> I touch copy. I have not edited anything yet.

---

## 1. Brand identity (blocking)

1. `[FILL: confirmed brand name]` — Is the brand **Heatify**, **WowTherm**, or something else?
2. `[FILL: brand name decision]` — If the answer is Heatify, do you want the WowTherm identity fully removed from `lib/site.ts`, metadata, footer, navbar, product data, and content? Or keep WowTherm as a legacy sub-line / product-family name?
3. `[FILL: logo file and path]` — The navbar references `/logo1.png` with `alt="WOWTHERM"`, but that file is not present in the public asset listing. The only visible logo asset is `public/image.png` (a HEATIFY wordmark). Which file is the real logo, and where should it live?
4. `[FILL: logo alt text]` — If the brand is Heatify, should the logo alt text be "Heatify", "Heatify logo", or descriptive alt?
5. `[FILL: tagline]` — The config tagline is "Comfort, engineered into every surface." and the mobile drawer tagline is "Engineered warmth". Which is correct, or is it a different line?
6. `[FILL: homepage URL]` — Should the canonical URL be `https://heatify.com` (or similar), replacing the current `https://wowtherm.com` stored in config?

---

## 2. Contact details (blocking for contact/about/footer)

7. `[FILL: phone]` — Is `+91 98110 40040` the real Heatify contact phone? It currently appears both as the real phone and as the contact form placeholder.
8. `[FILL: email]` — Is `hello@wowtherm.com` the real email, or should it be a Heatify email?
9. `[FILL: address]` — Is "Design District, Lower Parel, Mumbai 400013" the real Heatify office address?
10. `[FILL: social urls]` — Are the Instagram/Facebook/LinkedIn/YouTube `wowtherm` URLs correct, or should they be Heatify URLs?

---

## 3. Stats (proof claims — confirm or remove)

11. `[FILL: installations number]` — Are 12,500+ installations real and current?
12. `[FILL: sq ft warmed]` — Are 320,000+ sq ft warmed real and current?
13. `[FILL: 40% lower running costs]` — Is "40% lower running costs versus conventional space heating" real, and what is the basis? (Right now it appears in stats, benefits, and comparison copy.)
14. `[FILL: 98% recommend]` — Is the 98% recommend figure real, and is "Post-installation survey, 2025" accurate?
15. `[FILL: stat sourcing]` — If any stat is real, where does it come from (survey, CRM, report)? I need to cite it or mark it as marketing copy only.

---

## 4. Partners and clients (proof claims — confirm or remove)

16. `[FILL: partner list]` — Are Prestige Group, Sobha Realty, DLF Homes, Godrej Properties, Brigade Group, Oberoi Realty, Tata Housing, L&T Realty confirmed Heatify partners/clients?
17. `[FILL: partner presentation]` — Do we have permission to name them on the site, and do we have logos?

---

## 5. Testimonials (proof claims — confirm or remove)

18. `[FILL: testimonial 1]` — Meera Chandran, Homeowner, New Delhi, "Luxury Residence".
19. `[FILL: testimonial 2]` — Kabir Sethi, Principal Architect, Studio Terra, "Commercial Complex, Bengaluru".
20. `[FILL: testimonial 3]` — Anjali Thakur, Owner, Cedar House, "Hospitality, Manali".
21. `[FILL: testimonial 4]` — Rohit Banerjee, Homeowner, Gurugram, "Residential Villa".
22. `[FILL: testimonial 5]` — Farah Wani, Homeowner, Srinagar, "Heritage Renovation".
23. `[FILL: testimonial permission]` — Do we have permission to use these names/quotes publicly? Are they current and accurate?
24. `[FILL: testimonial brand strings]` — The quotes currently contain "WowTherm" references and must be rewritten if the brand is Heatify. Should I rewrite them in-place or do you want new quotes?

---

## 6. Products and warranties (confirm or disclaim)

25. `[FILL: product line]` — Are these six products current and real for Heatify: StickyMat 200W, WarmFoil Underlaminate, AquaBoard Low-Profile, SenseWarm Pro, ThemaBase XPS, AquaFlow Manifold?
26. `[FILL: product warranty claims]` — Are the 10-year (electric), 25-year (hydronic pipe), 5-year (thermostat), and "lifetime of the floor" (insulation) warranty claims real? Do we have warranty terms to link?
27. `[FILL: IPX7]` — Is the StickyMat IPX7 claim real, and do we have a cert?
28. `[FILL: zero EMF]` — Is the "zero EMF design" claim real and defensible?
29. `[FILL: performance numbers]` — Are the 15–25 minute warm-up, "under 20 minutes to barefoot comfort", "halves heat-up time", "up to 50% running cost reduction", and "up to 25% run-time reduction" claims real? If yes, what is the basis?
30. `[FILL: compatibility claims]` — Are the laminate/engineered wood up to 18 mm, "engineered timber manufacturers approve", Alexa/Google Home, and SenseWarm actuator zoning claims real?
31. `[FILL: product names not in data]` — "AquaBoard XT", "AquaFlow Screed System", "AquaFlow ScreedPro", "StickyMat 150W", "SenseWarm Zone Control", "WowTherm ClimaBoard" appear in project copy but not in `lib/products.ts`. Are these real Heatify product names, legacy names, or typos?
32. `[FILL: product brand strings]` — Product data currently says "WowTherm thermostat", "WowTherm floor", "Any WowTherm system". Should these be rewritten to Heatify product names?

---

## 7. About / history (confirm or rewrite)

33. `[FILL: origin]` — Is "Heatify began in Srinagar" real?
34. `[FILL: founding year]` — Is 2011 the real founding year?
35. `[FILL: milestones]` — Are the 2011 / 2015 / 2019 / 2023 / TODAY milestones real? In particular, is the 2015 "hamam, done right" wet-area-certified claim real, and what certification does it refer to?
36. `[FILL: "across India" positioning]` — Is "major underfloor heating supplier and installer across India" accurate, or should the About page be more specific about where Heatify actually operates?
37. `[FILL: team]` — Do you want a real team section, or should the placeholder team be removed until photos/bios exist?

---

## 8. Services and process (confirm or disclaim)

38. `[FILL: free survey]` — Is the free heat-loss survey a real offer?
39. `[FILL: turnaround claims]` — Are "most bathrooms done in two days", "every circuit resistance-tested three times", and the handover-pack description real?
40. `[FILL: Mumbai engineering team]` — Is there a Mumbai engineering team, and is "annual health checks for hydronic homes" a real service?
41. `[FILL: response time]` — Is "within 24 hours" a real response-time promise for the contact form?

---

## 9. Projects (confirm or remove)

42. `[FILL: project set]` — Are the featured applications and projects list (Srinagar, Manali, Mumbai, Shimla, Jaipur, Bengaluru, Goa, New Delhi, Mussoorie) real Heatify projects?
43. `[FILL: project details]` — Are the locations, years, areas, and solution names accurate?
44. `[FILL: project permission]` — Do we have permission to show these projects (images, names, locations)?

---

## 10. Content scope and tone

45. `[FILL: pages to rewrite]` — Do you want every page rewritten (home, products, services, solutions, projects, insights, about, contact), or only the public-facing ones?
46. `[FILL: placeholder about sections]` — Should the About story images, timeline, and values-CTA placeholder copy be replaced with real content now, or removed until real content exists?
47. `[FILL: insights brand]` — Should the insight articles be rewritten to Heatify authorship, or left as educational content with neutral authorship?
48. `[FILL: regional positioning]` — Do you want an explicit "who underfloor heating is for in India / who it is not for" positioning section? If yes, should it lean into the cold-belt (Kashmir, Himachal, Uttarakhand, north Indian winters, premium bathrooms) framing, or do you want a different angle?
49. `[FILL: pricing]` — Should pricing be omitted entirely, or do you want a "get a quote" framing without numbers?

---

## 11. Legal and technical

50. `[FILL: legal pages]` — Do you want privacy/terms stubs added now (flagged for legal review), or later?
51. `[FILL: contact form handler]` — Should the contact form be wired to a real backend/email service before launch, or is a form endpoint already available?

---

## 12. Assets

52. `[FILL: hero/project images]` — Which images are real and approved for use, and which are placeholders to replace?
53. `[FILL: about images]` — The story section references `public/images/about/story-1..4.jpg`. Do those files exist and are they the real images, or should the section be rebuilt around different images?
