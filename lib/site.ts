export const siteConfig = {
  name: "Heatify",
  url: "https://heatify.in",
  tagline: "",
  description:
    "Heatify designs and installs premium heating systems for modern homes, hospitality spaces and architectural interiors. Invisible warmth, precise control, architectural integrity.",
  email: "",
  phone: "",
  address: "",
  mapQuery: "",
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  },
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Technology" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Projects" },
  // { href: "/insights", label: "Insights" },
] as const;

export const stats = [] as const;

export const partners = [] as const;

export const testimonials = [] as const;

export const solutions = [
  {
    slug: "residential",
    title: "Residential",
    subtitle: "Luxury homes & villas",
    description: "Invisible heating systems that transform how families experience their homes. Warm floors, quiet comfort, zero visual impact.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&auto=format&fit=crop&q=80",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    subtitle: "Hotels & resorts",
    description: "Guest comfort that speaks for itself. Premium heating for lobbies, suites, spas and common areas that elevates the guest experience.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&auto=format&fit=crop&q=80",
  },
  {
    slug: "commercial",
    title: "Commercial",
    subtitle: "Offices & retail",
    description: "Energy-efficient heating for commercial spaces that reduces running costs while maintaining comfortable, productive environments.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&auto=format&fit=crop&q=80",
  },
  {
    slug: "wellness",
    title: "Wellness & Spa",
    subtitle: "Thermal experiences",
    description: "Precision temperature control for wellness spaces. Heated floors in treatment rooms, pools, saunas and relaxation areas.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=1400&auto=format&fit=crop&q=80",
  },
] as const;
