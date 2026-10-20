
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import FinalCta from "@/components/home/final-cta";


const EASE = [0.22, 1, 0.36, 1] as const;

/* ================================================================
   FEATURED APPLICATIONS
   ================================================================ */

const applications = [
  {
    slug: "luxury-residence-srinagar",
    title: "Luxury Residence",
    location: "Srinagar, Kashmir",
    type: "Residential",
    solution: "AquaBoard Low-Profile",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    slug: "cedar-house-manali",
    title: "Cedar House Hotel",
    location: "Manali, Himachal Pradesh",
    type: "Hospitality",
    solution: "AquaFlow Screed System",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    slug: "penthouse-mumbai",
    title: "Penthouse Residence",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    solution: "StickyMat 200W + SenseWarm Pro",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85",
  },
  {
    slug: "hillside-chalet-shimla",
    title: "Hillside Chalet",
    location: "Shimla, Himachal Pradesh",
    type: "Residential",
    solution: "Heatify ClimaBoard",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
  },
  {
    slug: "heritage-haveli-jaipur",
    title: "Heritage Haveli Restoration",
    location: "Jaipur, Rajasthan",
    type: "Residential",
    solution: "AquaBoard XT",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    slug: "tech-park-bengaluru",
    title: "Tech Park Office Fit-Out",
    location: "Bengaluru, Karnataka",
    type: "Commercial",
    solution: "AquaFlow ScreedPro",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    slug: "beachfront-villa-goa",
    title: "Beachfront Villa",
    location: "Anjuna, Goa",
    type: "Residential",
    solution: "StickyMat 150W",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85",
  },
  {
    slug: "wellness-spa-delhi",
    title: "Boutique Wellness Spa",
    location: "New Delhi, India",
    type: "Hospitality",
    solution: "SenseWarm Zone Control",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function SolutionsPage() {
  const { scrollYProgress } = useScroll();

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 0.18],
    [0, 70],
  );

  const heroImageScale = useTransform(
    scrollYProgress,
    [0, 0.18],
    [1.06, 1],
  );

  return (
    <main className="overflow-hidden bg-ivory-100">
      {/* ================================================================
          HERO
      ================================================================ */}

   <section className="relative isolate min-h-[85svh] overflow-hidden bg-[#11100E] text-[#F4F1EA]">
  {/* ---------------------------------------------------------------------- */}
  {/* Hero image                                                              */}
  {/* ---------------------------------------------------------------------- */}

  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 z-0"
  >
    <Image
      src="/sol1.png"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      className="object-cover object-center"
    />

    {/* Dark editorial overlay — keeps the typography readable */}
    <div
      className="absolute inset-0"
      style={{
        background: `
          linear-gradient(
            90deg,
            rgba(17,16,14,0.98) 0%,
            rgba(17,16,14,0.94) 22%,
            rgba(17,16,14,0.78) 42%,
            rgba(17,16,14,0.42) 63%,
            rgba(17,16,14,0.12) 82%,
            rgba(17,16,14,0.02) 100%
          )
        `,
      }}
    />

    {/* Bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#11100E]/70 to-transparent" />

    {/* Subtle architectural grid */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(244,241,234,0.8) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(244,241,234,0.8) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "120px 120px",
      }}
    />

    {/* Warm atmospheric glow */}
    <div
      className="absolute -right-[10%] top-[15%] size-[560px] rounded-full blur-[170px]"
      style={{
        background:
          "radial-gradient(circle, rgba(242,184,75,.10) 0%, transparent 70%)",
      }}
    />
  </div>

  {/* ---------------------------------------------------------------------- */}
  {/* Main content                                                            */}
  {/* ---------------------------------------------------------------------- */}

  <div className="container-site relative z-10 flex min-h-[85svh] flex-1 items-center py-16 md:py-20 lg:py-24 lg:py-28">
    <div className="w-full max-w-[1100px]">

      {/* Eyebrow */}
      <Reveal delay={0.12}>
        <div className="mb-8 max-w-[460px]">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#fffff]/60">
            Spaces, considered from below.
          </p>
        </div>
      </Reveal>

      {/* Main heading */}
      <Reveal delay={0.18}>
        <h1 className="font-serif text-[clamp(3.5rem,7vw,10.5rem)] font-light leading-[0.78] tracking-[-0.065em]">
          <span className="block text-[#F4F1EA]">
            Warmth
          </span>

          <span className="ml-[8vw] block text-[#F4F1EA]/95">
            for
          </span>

          <span className="ml-[16vw] block italic text-[#F2B84B]">
            every space.
          </span>
        </h1>
      </Reveal>

      {/* Supporting content */}
      <Reveal delay={0.28}>
        <div className="mt-12 grid max-w-[780px] gap-10 lg:ml-[8vw] lg:grid-cols-[1fr_auto] lg:items-end">

          {/* Description */}
          <div className="max-w-[500px]">
            <p className="font-sans text-sm leading-7 text-[#fffff]/55 md:text-[15px]">
              From quiet residential interiors to hospitality, wellness and
              commercial spaces, every HEATIFY system is designed around the
              architecture it serves.
            </p>

          
          </div>

         
        </div>
      </Reveal>
    </div>

    {/* -------------------------------------------------------------------- */}
    {/* Bottom metadata                                                       */}
    {/* -------------------------------------------------------------------- */}

    <Reveal
      delay={0.34}
      className="absolute bottom-12 left-0 hidden lg:block"
    >
      <div className="flex items-end gap-5">
        <div>
          <p className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#F4F1EA]/40">
            Applications
          </p>

          <p className="mt-2 font-serif text-4xl font-light tracking-[-0.04em] text-[#F4F1EA]">
            04
          </p>
        </div>

        <span className="mb-2 h-px w-12 bg-[#F2B84B]/70" />

        <p className="mb-1 font-sans text-[9px] uppercase tracking-[0.22em] text-[#fffff]/50">
          Residential · Hospitality · Wellness · Commercial
        </p>
      </div>
    </Reveal>

    {/* -------------------------------------------------------------------- */}
    {/* Right vertical label                                                  */}
    {/* -------------------------------------------------------------------- */}

    <div className="absolute bottom-12 right-0 hidden lg:block">
      <span
        className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#F4F1EA]/35"
        style={{
          writingMode: "vertical-rl",
        }}
      >                HEATIFY / Spaces
      </span>
    </div>
  </div>
</section>


      {/* ================================================================
          INTRO
      ================================================================ */}

   <section className="relative overflow-hidden bg-[#F4F1EA] py-28 md:py-40 lg:py-48">
  {/* ---------------------------------------------------------------------- */}
  {/* Architectural atmosphere                                               */}
  {/* ---------------------------------------------------------------------- */}

  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
  >
    {/* Fine vertical grid */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(17,16,14,0.75) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(17,16,14,0.75) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "120px 120px",
      }}
    />

    {/* Vertical architectural line */}
    <div className="absolute right-[14%] top-0 h-full w-px bg-[#11100E]/[0.06]" />

    {/* Warm glow */}
    <div
      className="absolute -right-[12%] top-[10%] size-[520px] rounded-full blur-[160px]"
      style={{
        background:
          "radial-gradient(circle, rgba(242,184,75,.10) 0%, transparent 70%)",
      }}
    />

    {/* Small lower glow */}
    <div
      className="absolute -left-[12%] bottom-[-20%] size-[420px] rounded-full blur-[150px]"
      style={{
        background:
          "radial-gradient(circle, rgba(185,133,32,.055) 0%, transparent 70%)",
      }}
    />
  </div>

  {/* ---------------------------------------------------------------------- */}
  {/* Content                                                                 */}
  {/* ---------------------------------------------------------------------- */}

  <div className="container-site relative z-10">
    <div className="grid gap-16 lg:grid-cols-[0.32fr_1fr] lg:gap-20">

      {/* ------------------------------------------------------------------ */}
      {/* Left editorial marker                                               */}
      {/* ------------------------------------------------------------------ */}

      <Reveal>
        <div className="relative pt-2 lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#F2B84B]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#B98520]">
              02 / Approach
            </span>
          </div>

          <div className="mt-8 hidden lg:block">
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#11100E]/25">
              HEATIFY
            </span>

            <div className="mt-5 h-16 w-px bg-[#11100E]/10" />

            <p className="mt-5 max-w-[150px] font-sans text-[11px] leading-6 text-[#11100E]/40">
              Every system begins with the architecture, not the equipment.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ------------------------------------------------------------------ */}
      {/* Main statement                                                      */}
      {/* ------------------------------------------------------------------ */}

      <div>
        <Reveal delay={0.08}>
          <p className="max-w-[620px] font-sans text-[11px] uppercase tracking-[0.28em] text-[#11100E]/40">
            A considered approach to radiant warmth
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <h2 className="mt-8 max-w-[1050px] font-display text-[clamp(3.6rem,7vw,7.8rem)] font-normal leading-[0.86] tracking-[-0.065em] text-[#11100E]">
            We don&apos;t start
            <br />
            with a{" "}
            <span className="italic text-[#F2B84B]">
              product.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.20}>
          <div className="mt-4 lg:ml-[9vw]">
            <h3 className="max-w-[900px] font-display text-[clamp(3.2rem,6vw,6.8rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#11100E]/90">
              We start with
              <br />
              <span className="italic text-[#B98520]">
                the space.&apos;
              </span>
            </h3>
          </div>
        </Reveal>

        {/* ---------------------------------------------------------------- */}
        {/* Supporting detail                                                 */}
        {/* ---------------------------------------------------------------- */}

        <Reveal delay={0.28}>
          <div className="mt-16 grid gap-10 border-t border-[#11100E]/10 pt-8 md:grid-cols-[1fr_auto] lg:ml-[9vw] lg:max-w-[820px]">
            <p className="max-w-[500px] font-sans text-sm leading-7 text-[#11100E]/50 md:text-[15px]">
              Every room has its own proportions, materials, insulation and
              way of being used. We consider those details first, then
              engineer the heating system around them.
            </p>

            <div className="hidden md:block">
              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#11100E]/30">
                Principle
              </p>

              <p className="mt-3 font-display text-2xl tracking-[-0.03em] text-[#11100E]">
                Space first.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ---------------------------------------------------------------- */}
        {/* Bottom technical line                                             */}
        {/* ---------------------------------------------------------------- */}

        <Reveal delay={0.34}>
          <div className="mt-16 flex items-center gap-4 lg:ml-[9vw]">
            <span className="h-px w-14 bg-[#F2B84B]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#11100E]/30">
              Architecture → Design → System
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>

      {/* ================================================================
          SOLUTIONS
      ================================================================ */}

     

      {/* ================================================================
          FEATURED APPLICATIONS / LOCATIONS
      ================================================================ */}

     <section
  id="spaces"
  className="relative overflow-hidden bg-[#F4F1EA] py-28 md:py-40 lg:py-48"
>
  {/* ---------------------------------------------------------------------- */}
  {/* Architectural atmosphere                                               */}
  {/* ---------------------------------------------------------------------- */}

  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
  >
    {/* Fine grid */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(17,16,14,0.75) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(17,16,14,0.75) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "120px 120px",
      }}
    />

    {/* Architectural vertical line */}
    <div className="absolute left-[18%] top-0 h-full w-px bg-[#11100E]/[0.055]" />

    <div className="absolute right-[14%] top-0 h-full w-px bg-[#11100E]/[0.04]" />

    {/* Warm glow */}
    <div
      className="absolute -right-[15%] top-[18%] size-[600px] rounded-full blur-[180px]"
      style={{
        background:
          "radial-gradient(circle, rgba(242,184,75,.10) 0%, transparent 70%)",
      }}
    />
  </div>

  <div className="container-site relative z-10">

    {/* ==================================================================== */}
    {/* SECTION INTRO                                                         */}
    {/* ==================================================================== */}

    <div className="grid gap-14 lg:grid-cols-[0.32fr_1fr] lg:gap-20">
      {/* Left marker */}

      <Reveal>
        <div className="pt-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#F2B84B]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#B98520]">
              03 / Spaces
            </span>
          </div>

          <div className="mt-8 hidden lg:block">
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#11100E]/25">
              HEATIFY
            </span>

            <div className="mt-5 h-20 w-px bg-[#11100E]/10" />

            <p className="mt-5 max-w-[160px] font-sans text-[11px] leading-6 text-[#11100E]/40">
              Different spaces. Different demands. One engineered approach to
              warmth.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Main heading */}

      <Reveal delay={0.08}>
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#11100E]/35">
            Where warmth belongs
          </p>

          <h2 className="mt-8 max-w-[1000px] font-display text-[clamp(3.8rem,7vw,8rem)] font-normal leading-[0.84] tracking-[-0.065em] text-[#11100E]">
            Made for
            <br />
            <span className="italic text-[#F2B84B]">
              the way
            </span>
            <br />
            spaces live.
          </h2>
        </div>
      </Reveal>
    </div>

    {/* ==================================================================== */}
    {/* PROJECT INDEX                                                         */}
    {/* ==================================================================== */}

    <div className="mt-24 md:mt-32 lg:mt-40">
      {applications.map((project, index) => (
        <motion.article
          key={project.slug}
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            delay: Math.min(index * 0.04, 0.2),
            ease: EASE,
          }}
          className="group relative border-t border-[#11100E]/10 py-8 md:py-10 lg:py-12"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="block"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[90px_1fr_0.75fr_120px] lg:gap-10">

              {/* ---------------------------------------------------------- */}
              {/* Number                                                      */}
              {/* ---------------------------------------------------------- */}

              <div className="hidden lg:block">
                <span className="font-mono text-[9px] tracking-[0.18em] text-[#11100E]/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Project identity                                            */}
              {/* ---------------------------------------------------------- */}

              <div className="flex items-center gap-6">
                {/* Image */}

                <div className="relative size-[86px] shrink-0 overflow-hidden bg-[#11100E] md:size-[105px]">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="105px"
                    className="object-cover grayscale-[35%] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:grayscale-0"
                  />

                  {/* Image wash */}

                  <div className="absolute inset-0 bg-[#11100E]/10 transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#B98520]">
                    {project.type}
                  </p>

                  <h3 className="mt-2 max-w-[400px] font-display text-[clamp(1.8rem,3vw,3rem)] leading-[0.92] tracking-[-0.045em] text-[#11100E] transition-transform duration-500 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Project information                                          */}
              {/* ---------------------------------------------------------- */}

              <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 lg:gap-4">
                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.24em] text-[#11100E]/25">
                    Location
                  </p>

                  <p className="mt-2 font-sans text-[12px] text-[#11100E]/55 md:text-sm">
                    {project.location}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.24em] text-[#11100E]/25">
                    System
                  </p>

                  <p className="mt-2 font-sans text-[12px] text-[#11100E]/55 md:text-sm">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* Year + arrow                                                */}
              {/* ---------------------------------------------------------- */}

              <div className="flex items-center justify-between lg:justify-end lg:gap-6">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/25">
                  {project.year}
                </span>

                <span
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center",
                    "border border-[#11100E]/10",
                    "transition-all duration-500",
                    "group-hover:border-[#F2B84B]",
                    "group-hover:bg-[#F2B84B]",
                  )}
                >
                  <ArrowUpRight
                    className="size-4 text-[#11100E]/50 transition-all duration-500 group-hover:text-[#11100E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.3}
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}

      {/* Closing border */}
      <div className="border-t border-[#11100E]/10" />
    </div>

    {/* ==================================================================== */}
    {/* CLOSING STATEMENT                                                     */}
    {/* ==================================================================== */}

    <Reveal>
      <div className="mt-14 grid gap-8 border-t border-[#11100E]/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="max-w-[620px] font-sans text-sm leading-7 text-[#11100E]/45 md:text-[15px]">
            From private residences to hospitality and commercial spaces,
            every installation begins with an understanding of how the room
            should feel, perform and endure.
          </p>
        </div>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-4 font-sans text-[9px] font-medium uppercase tracking-[0.24em] text-[#11100E]/65"
        >
          Discuss your space

          <span className="flex size-9 items-center justify-center border border-[#11100E]/15 transition-all duration-400 group-hover:border-[#F2B84B] group-hover:bg-[#F2B84B]">
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.3}
              aria-hidden
            />
          </span>
        </Link>
      </div>
    </Reveal>
  </div>
</section>
      {/* ================================================================
          DESIGN PRINCIPLE
      ================================================================ */}

     <section className="relative overflow-hidden bg-[#F4F1EA] py-28 md:py-40 lg:py-48">
  {/* ---------------------------------------------------------------------- */}
  {/* Architectural atmosphere                                               */}
  {/* ---------------------------------------------------------------------- */}

  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
  >
    {/* Fine grid */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(17,16,14,0.75) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(17,16,14,0.75) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "120px 120px",
      }}
    />

    {/* Main architectural axis */}
    <div className="absolute left-[18%] top-0 h-full w-px bg-[#11100E]/[0.055]" />

    <div className="absolute right-[18%] top-0 h-full w-px bg-[#11100E]/[0.04]" />

    {/* Warm atmosphere */}
    <div
      className="absolute -left-[12%] top-[18%] size-[500px] rounded-full blur-[170px]"
      style={{
        background:
          "radial-gradient(circle, rgba(242,184,75,.10) 0%, transparent 70%)",
      }}
    />

    <div
      className="absolute -right-[15%] bottom-[-10%] size-[520px] rounded-full blur-[180px]"
      style={{
        background:
          "radial-gradient(circle, rgba(185,133,32,.055) 0%, transparent 70%)",
      }}
    />
  </div>

  <div className="container-site relative z-10">

    {/* ==================================================================== */}
    {/* HEADER                                                                */}
    {/* ==================================================================== */}

    <div className="grid gap-14 lg:grid-cols-[0.32fr_1fr] lg:gap-20">

      {/* Section marker */}

      <Reveal>
        <div className="pt-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#F2B84B]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#B98520]">
              04 / Design principle
            </span>
          </div>

          <div className="mt-8 hidden lg:block">
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#11100E]/25">
            THE HEATIFY APPROACH
            </span>

            <div className="mt-5 h-20 w-px bg-[#11100E]/10" />

            <p className="mt-5 max-w-[155px] font-sans text-[11px] leading-6 text-[#11100E]/40">
              Good engineering should become part of the architecture, not
              compete with it.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Main statement */}

      <Reveal delay={0.08}>
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#11100E]/35">
            Designed to disappear
          </p>

          <h2 className="mt-8 max-w-[1050px] font-display text-[clamp(3.7rem,7vw,8rem)] font-normal leading-[0.84] tracking-[-0.065em] text-[#11100E]">
            The best heating
            <br />
            system is the one
            <br />
            you{" "}
            <span className="italic text-[#F2B84B]">
              never see.
            </span>
          </h2>
        </div>
      </Reveal>
    </div>

    {/* ==================================================================== */}
    {/* PRINCIPLES                                                            */}
    {/* ==================================================================== */}

    <div className="mt-24 lg:mt-32 lg:ml-[26%]">
      {[
        {
          number: "01",
          title: "Invisible",
          text: "Technology beneath the architecture. The system works quietly below the finished surface, leaving the room free to be itself.",
        },
        {
          number: "02",
          title: "Considered",
          text: "Every installation begins with the space — its proportions, materials, insulation and the way people move through it.",
        },
        {
          number: "03",
          title: "Comfortable",
          text: "Consistent radiant warmth, carefully distributed to create a more natural feeling of comfort throughout the room.",
        },
      ].map((item, index) => (
        <Reveal
          key={item.number}
          delay={0.1 + index * 0.08}
        >
          <div className="group border-t border-[#11100E]/10 py-8 md:py-10">
            <div className="grid gap-6 md:grid-cols-[80px_0.7fr_1fr] md:items-start md:gap-10">

              {/* Number */}

              <div>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#B98520]">
                  {item.number}
                </span>
              </div>

              {/* Title */}

              <div>
                <h3 className="font-display text-[clamp(2rem,3vw,3.2rem)] leading-[0.9] tracking-[-0.045em] text-[#11100E] transition-transform duration-500 group-hover:translate-x-1">
                  {item.title}
                </h3>
              </div>

              {/* Description */}

              <div className="md:max-w-[430px]">
                <p className="font-sans text-sm leading-7 text-[#11100E]/45 md:text-[15px]">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}

      {/* Final border */}

      <div className="border-t border-[#11100E]/10" />
    </div>

    {/* ==================================================================== */}
    {/* CLOSING DETAIL                                                        */}
    {/* ==================================================================== */}

    <Reveal delay={0.36}>
      <div className="mt-10 flex items-center justify-between lg:ml-[26%]">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-[#F2B84B]" />

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#11100E]/30">
            Engineering → Architecture → Comfort
          </span>
        </div>

        <span className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-[#11100E]/20 md:block">
          04 / 04
        </span>
      </div>
    </Reveal>
  </div>
</section>

      {/* ================================================================
          CTA
      ================================================================ */}

    <FinalCta/>
    </main>
  );
}