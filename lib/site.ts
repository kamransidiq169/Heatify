export const siteConfig = {
  name: "Heatify",
  url: "https://heatify.in",
  tagline: "Comfort, engineered into every surface.",
  description:
    "Heatify designs and installs premium heating systems for modern homes, hospitality spaces and architectural interiors. Invisible warmth, precise control, architectural integrity.",
  email: "" as string,
  phone: "" as string,
  address: "" as string,
  mapQuery: "" as string,
  social: {
    instagram: "" as string,
    facebook: "" as string,
    linkedin: "" as string,
    youtube: "" as string,
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

export const testimonials = [
  {
    name: "Ar. Vikram Singh",
    role: "Principal Architect",
    quote: "Heatify transformed our 4BHK apartment. The floors are warm evenly, and we no longer worry about radiators ruining our design.",
    project: "Residential - 4BHK apartment, Mumbai",
  },
  {
    name: "The Patel Family",
    role: "Homeowners",
    quote: "The underfloor heating in our bathroom is a game-changer. Warm floors every morning, and no more cold tiles. Highly recommended for anyone renovating.",
    project: "Residential - Bathroom renovation, Delhi",
  },
  {
    name: "Ar. Rohan Mehra",
    role: "Interior Designer",
    quote: "As a designer, I appreciate how Heatify systems integrate seamlessly. Clients love the invisible comfort, and the installation was precise and clean.",
    project: "Commercial - Office space, Bangalore",
  },
  {
    name: "Sunita Iyer",
    role: "Entrepreneur",
    quote: "Switching to Heatify was the best decision for our spa. Consistent warmth, low maintenance, and guests constantly ask about the system.",
    project: "Wellness & Spa, Chennai",
  },
] as const;

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
