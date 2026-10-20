import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowDown,
  Compass,
  HeartHandshake,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { Team } from "@/components/about/team";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { SectionHeading } from "@/components/ui/section-heading";
import { FinalCta } from "@/components/home/final-cta";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: "About | Heatify",
  description:
    "Discover the story behind Heatify — engineering radiant warmth beneath architecture, from Srinagar to homes across India.",
};

/* =========================================================
   PRINCIPLES
========================================================= */

const values = [
  {
    Icon: Ruler,
    title: "Measure, then promise",
    text: "Every system begins with understanding the space, its heat requirements and the way it will actually be used.",
  },
  {
    Icon: ShieldCheck,
    title: "Hide nothing under the floor",
    text: "The heating may disappear beneath the surface, but the engineering behind it should remain clear, tested and accountable.",
  },
  {
    Icon: HeartHandshake,
    title: "Stay close to the customer",
    text: "From the first conversation to installation and support, we believe good heating comes with people who remain available.",
  },
  {
    Icon: Compass,
    title: "Design for this country",
    text: "Indian winters, Indian buildings and Indian conditions require solutions designed around the way spaces here are actually built and lived in.",
  },
];

/* =========================================================
   JOURNEY
========================================================= */

const milestones = [
  {
    year: "2011",
    title: "THE FIRST FLOOR",
    description:
      "Founded by heating engineers in Srinagar, chasing a warmth that survives the hardest winter.",
    location: "SRINAGAR · KASHMIR",
  },
  {
    year: "2015",
    title: "HAMAM, DONE RIGHT",
    description:
      "Introduced wet-area-certified electric hamam systems for the Kashmiri home.",
    location: "KASHMIR",
  },
  {
    year: "2019",
    title: "BEYOND THE VALLEY",
    description:
      "Extended supply and installation to homes and projects across the region.",
    location: "INDIA · REGIONAL",
  },
  {
    year: "2023",
    title: "A NEW SCALE",
    description:
      "Expanded into a major underfloor heating supplier and installer across India.",
    location: "INDIA",
  },
  {
    year: "TODAY",
    title: "WARMER, EVERY WINTER",
    description:
      "Thousands of floors later, still building for the coldest day, not the average one.",
    location: "BEYOND BORDERS",
  },
];

/* =========================================================
   ABOUT HERO
========================================================= */

function AboutHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#11100E] text-[#F4F1EA]">
      {/* =====================================================
          ARCHITECTURAL GRID
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(244,241,234,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,241,234,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "88px 88px",
          maskImage:
            "linear-gradient(to right, black 0%, black 42%, transparent 78%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 42%, transparent 78%)",
        }}
      />

      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <Parallax
          amount={2}
          className="absolute inset-0"
        >
          <Image
            src="/about.png"
            alt="Warm architectural interior with radiant floor heating"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </Parallax>

        {/* =================================================
            VERY SUBTLE TEXT READABILITY OVERLAY
            Kept intentionally light so the image stays clear.
        ================================================== */}

        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#11100E]/35
            from-[0%]
            via-[#11100E]/10
            via-[32%]
            to-transparent
            to-[62%]
          "
        />

        {/* Very subtle bottom fade */}
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#11100E]/20
            via-transparent
            to-transparent
          "
        />

        {/* Extremely subtle top protection */}
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#11100E]/10
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container-site relative z-10 flex min-h-[100svh] flex-col">
        {/* ===================================================
            TOP BAR
        ==================================================== */}

        <Reveal delay={0.05}>
          <div className="flex items-center justify-between border-b border-[#F4F1EA]/10 py-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#F2B84B]" />
            </div>

            <div className="hidden items-center gap-6 sm:flex">
              <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-[#F2B84B]">
                01 — 01
              </span>
            </div>
          </div>
        </Reveal>

        {/* ===================================================
            HERO CONTENT
        ==================================================== */}

        <div className="relative flex flex-1 items-center py-16 md:py-20 lg:py-24 lg:py-28">
          <div className="w-full max-w-[1100px]">
            {/* Intro */}

            <Reveal delay={0.12}>
              <div className="mb-8 max-w-[420px]">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#fffff]/60">
                  Warmth, engineered from below.
                </p>
              </div>
            </Reveal>

            {/* Main heading */}

            <Reveal delay={0.18}>
              <h1
                className="
                  font-serif
                  font-light
                  leading-[0.78]
                  tracking-[-0.065em]
                "
                style={{
                  fontSize: 'clamp(3rem,7vw,10.5rem)',
                }}
              >
                <span className="block text-[#F4F1EA]">
                  Warmth
                </span>

                <span className="ml-[8vw] block text-[#F4F1EA]/95">
                  beneath
                </span>

                <span className="ml-[16vw] block italic text-[#F2B84B]">
                  everything.
                </span>
              </h1>
            </Reveal>

            {/* Description */}

            <Reveal delay={0.28}>
              <div className="mt-12 grid max-w-[760px] gap-10 lg:ml-[8vw] lg:grid-cols-[1fr_auto] lg:items-end">
               

                <div className="hidden border-l border-[#F4F1EA]/20 pl-5 lg:block">
                  <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#F4F1EA]/45">
                    Built around
                  </p>

                  <p className="mt-2 font-serif text-xl text-[#F4F1EA]">
                    The floor.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =================================================
              ORIGIN MARKER
          ================================================== */}

          <Reveal
            delay={0.34}
            className="absolute bottom-12 left-0 hidden lg:block"
          >
            <div className="flex items-end gap-5">
              <div>
                <p className="font-sans text-[8px] uppercase tracking-[0.3em] text-#ffffff]/45">
                  Established
                </p>

                <p className="mt-2 font-serif text-4xl font-light tracking-[-0.04em] text-[#F4F1EA]">
                  2011
                </p>
              </div>

              <span className="mb-2 h-px w-12 bg-[#F2B84B]/70" />

              <p className="mb-1 font-sans text-[9px] uppercase tracking-[0.22em] text-[#fffff]/50">
                Srinagar · Kashmir
              </p>
            </div>
          </Reveal>

  
          
        </div>

        {/* ===================================================
            BOTTOM INFORMATION BAR
        ==================================================== */}

        <Reveal delay={0.44}>
          <div className="grid border-t border-[#F4F1EA]/10 py-6 md:grid-cols-3">
            <div className="flex items-center gap-4 border-[#F4F1EA]/10 md:border-r md:pr-8">
              <span className="font-sans text-[9px] tracking-[0.2em] text-[#F2B84B]">
                01
              </span>

              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#F4F1EA]/90">
                  Engineered
                </p>

                <p className="mt-1 font-sans text-[9px] text-[#F4F1EA]/45">
                  For the space
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4 border-[#F4F1EA]/10 md:mt-0 md:border-r md:px-8">
              <span className="font-sans text-[9px] tracking-[0.2em] text-[#F2B84B]">
                02
              </span>

              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#F4F1EA]/90">
                  Installed
                </p>

                <p className="mt-1 font-sans text-[9px] text-[#F4F1EA]/45">
                  Beneath architecture
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4 md:mt-0 md:pl-8">
              <span className="font-sans text-[9px] tracking-[0.2em] text-[#F2B84B]">
                03
              </span>

              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#F4F1EA]/90">
                  Experienced
                </p>

                <p className="mt-1 font-sans text-[9px] text-[#F4F1EA]/45">
                  Since 2011
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          DESKTOP SCROLL
      ====================================================== */}

      <div className="absolute bottom-7 right-7 z-20 hidden flex-col items-center gap-3 md:flex">
        <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-[#F4F1EA]/45 [writing-mode:vertical-rl]">
          Explore
        </span>

        <div className="relative h-14 w-px overflow-hidden bg-[#F4F1EA]/15">
          <span className="absolute left-0 top-0 h-6 w-px animate-[scrollLine_2.4s_ease-in-out_infinite] bg-[#F2B84B]" />
        </div>
      </div>

      {/* =====================================================
          MOBILE SCROLL
      ====================================================== */}

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 md:hidden">
        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#F4F1EA]/50">
          Scroll to explore
        </span>

        <ArrowDown
          className="size-3 text-[#F2B84B]"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <AboutHero />


      {/* =====================================================
          STORY
      ====================================================== */}

{/* =====================================================
    OUR STORY
===================================================== */}

<section
  className="
    relative
    overflow-hidden
    bg-[#F4F1EA]
    py-24
    md:py-32
  "
>
  {/* ===================================================
      ATMOSPHERE
  ==================================================== */}

  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
  >
    {/* Very subtle warm yellow glow */}

    <div
      className="
        absolute
        -left-[10%]
        top-[10%]
        size-[520px]
        rounded-full
        blur-[150px]
      "
      style={{
        background:
          "radial-gradient(circle, rgba(242,184,75,.16) 0%, rgba(242,184,75,.06) 42%, transparent 72%)",
      }}
    />

    <div
      className="
        absolute
        -right-[12%]
        bottom-[0%]
        size-[500px]
        rounded-full
        blur-[160px]
      "
      style={{
        background:
          "radial-gradient(circle, rgba(242,184,75,.10) 0%, transparent 70%)",
      }}
    />

    {/* subtle architectural grid */}

    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(17,16,14,0.55) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(17,16,14,0.55) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "90px 90px",
      }}
    />

    {/* soft vignette */}

    <div
      className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_25%,rgba(17,16,14,.035)_100%)]
      "
    />
  </div>

  <div className="container-site relative z-10">

    {/* =================================================
        SECTION HEADER
    ================================================== */}

    <Reveal>
      <div
        className="
          mb-14
          flex
          items-center
          justify-between
          border-b
          border-black/[0.10]
          pb-5
          md:mb-20
        "
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#B98520]" />

          <span
            className="
              font-sans
              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#11100E]/55
            "
          >
            Our Story
          </span>
        </div>

        <span
          className="
            font-mono
            text-[9px]
            tracking-[0.25em]
            text-[#11100E]/35
          "
        >
          02 — 05
        </span>
      </div>
    </Reveal>

    {/* =================================================
        MAIN CONTENT
    ================================================== */}

    <div
      className="
        grid
        items-center
        gap-12
        lg:grid-cols-[0.9fr_1.1fr]
        lg:gap-20
      "
    >

      {/* =================================================
          TEXT
      ================================================== */}

      <Reveal>
        <div>

          {/* Label */}

          <div className="flex items-center gap-3">
            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-[#B98520]
              "
            >
              01
            </span>

            <span className="h-px w-8 bg-[#B98520]/60" />

            <span
              className="
                font-sans
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[#11100E]/45
              "
            >
              Where it began
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-8
              max-w-[600px]
              font-display
              text-[clamp(3.5rem,6vw,6.5rem)]
              font-normal
              leading-[0.84]
              tracking-[-0.06em]
              text-[#11100E]
            "
          >
            It started
            <br />
            with cold
            <br />
            <span className="italic text-[#F2B84B]">
              floors.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-[450px]
              font-sans
              text-[14px]
              leading-[1.85]
              text-[#11100E]/60
              md:text-[15px]
            "
          >
            Heatify began in Srinagar, where harsh winters make the
            relationship between a home and its heating impossible to ignore.
            We believed warmth should be designed into the space, not added
            around it.
          </p>

          {/* Year */}

          <div className="mt-10 flex items-center gap-5">
            <span
              className="
                font-display
                text-4xl
                font-normal
                tracking-[-0.04em]
                text-[#11100E]
              "
            >
              2011
            </span>

            <span className="h-px w-12 bg-[#B98520]/60" />

            <span
              className="
                font-sans
                text-[8px]
                uppercase
                leading-[1.6]
                tracking-[0.24em]
                text-[#11100E]/40
              "
            >
              Srinagar
              <br />
              Kashmir
            </span>
          </div>
        </div>
      </Reveal>

      {/* =================================================
          IMAGE + COPY
      ================================================== */}

      <Reveal delay={0.12}>
        <div>

          {/* Image */}

          <div
            className="
              relative
              aspect-[16/11]
              overflow-hidden
              bg-[#DDD6C9]
            "
          >
            <Parallax
              amount={6}
              className="absolute inset-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=85&w=1600&auto=format&fit=crop"
                alt="Warm timber and stone interior"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="scale-[1.06] object-cover"
              />
            </Parallax>

            {/* Image overlay */}

            <div
              aria-hidden
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#11100E]/30
                via-transparent
                to-transparent
              "
            />

            {/* Image label */}

            <div
              className="
                absolute
                bottom-5
                left-5
                flex
                items-center
                gap-3
                md:bottom-6
                md:left-6
              "
            >
              <span className="h-px w-7 bg-white/60" />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                "
              >
                Architecture / Warmth
              </span>
            </div>
          </div>

          {/* Story copy */}

          <div
            className="
              mt-8
              grid
              gap-8
              border-t
              border-black/[0.10]
              pt-7
              md:grid-cols-[0.65fr_1.35fr]
              md:gap-12
            "
          >

            {/* Idea */}

            <div>
              <p
                className="
                  font-sans
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-[#11100E]/35
                "
              >
                The idea
              </p>

              <p
                className="
                  mt-3
                  font-display
                  text-xl
                  font-normal
                  leading-[1.15]
                  tracking-[-0.02em]
                  text-[#11100E]/80
                "
              >
                Warmth from
                <br />
                beneath.
              </p>
            </div>

            {/* Copy */}

            <div
              className="
                space-y-4
                font-sans
                text-[13px]
                leading-[1.8]
                text-[#11100E]/55
                md:text-[14px]
              "
            >
              <p>
                Radiant floor heating offered a different way to think about
                comfort — distributing warmth from beneath the surface rather
                than asking a room heater to do all the work.
              </p>

              <p>
                That idea became Heatify: technology that works quietly
                beneath the architecture while the space remains exactly as
                it was designed.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>

    {/* =================================================
        BOTTOM STATEMENT
    ================================================== */}

    <Reveal delay={0.2}>
      <div
        className="
          mt-16
          flex
          items-center
          gap-5
          border-t
          border-black/[0.10]
          pt-6
          md:mt-20
        "
      >
        <span className="h-px w-12 bg-[#B98520]" />

        <p
          className="
            font-display
            text-lg
            font-normal
            italic
            text-[#11100E]/65
            md:text-xl
          "
        >
          Good engineering should disappear into the architecture.
        </p>
      </div>
    </Reveal>

  </div>
</section>


      {/* =====================================================
          PRINCIPLES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F4F1EA] py-24 text-[#171614] md:py-32">
  {/* ===================================================
      ATMOSPHERE
  ==================================================== */}

  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
  >
    {/* Fine architectural grid */}

    <div
      className="absolute inset-0 opacity-[0.028]"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(23,22,20,.65) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(23,22,20,.65) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "110px 110px",
      }}
    />

    {/* Very subtle warmth */}

    <div
      className="absolute -right-[12%] top-[18%] size-[600px] rounded-full blur-[160px]"
      style={{
        background:
          "radial-gradient(circle, rgba(211,166,76,.075) 0%, transparent 68%)",
      }}
    />

    {/* Soft vignette */}

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(23,22,20,.025)_100%)]" />

    {/* Architectural verticals */}

    <div className="absolute left-[7.5%] top-0 hidden h-full w-px bg-[#171614]/[0.07] lg:block" />

    <div className="absolute right-[7.5%] top-0 hidden h-full w-px bg-[#171614]/[0.07] lg:block" />
  </div>

  <div className="container-site relative z-10">

    {/* =================================================
        HEADER
    ================================================== */}

    <Reveal>
      <div className="flex items-end justify-between border-b border-[#171614]/15 pb-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#A4772A]">
            02
          </span>

          <span className="h-px w-10 bg-[#A4772A]/70" />

          <span className="font-sans text-[9px] font-medium uppercase tracking-[0.32em] text-[#171614]/55">
            Our Principles
          </span>
        </div>

        <span className="hidden font-mono text-[8px] tracking-[0.25em] text-[#171614]/30 sm:block">
          HEATIFY / STANDARD
        </span>
      </div>
    </Reveal>

    {/* =================================================
        INTRO
    ================================================== */}

    <div className="mt-14 grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20 md:mt-20">

      {/* Small editorial text */}

      <Reveal>
        <div className="max-w-[220px]">
          <p className="font-serif text-[18px] leading-[1.35] text-[#171614]/75">
            The details matter
            <br />
            when comfort becomes
            part of the architecture.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-7 bg-[#A4772A]/60" />

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#171614]/35">
              Our approach
            </span>
          </div>
        </div>
      </Reveal>

      {/* Main heading */}

      <Reveal delay={0.08}>
        <div>
          <h2
            className="
              max-w-[950px]
              font-display
              text-[clamp(3.4rem,7vw,7.5rem)]
              font-normal
              leading-[0.86]
              tracking-[-0.065em]
              text-[#171614]
            "
          >
            What we
            <br />
            <span className="italic text-[#F2B84B]">
              never compromise.
            </span>
          </h2>

          <div className="mt-9 flex max-w-[680px] items-start gap-5">
            <span className="mt-3 h-px w-12 shrink-0 bg-[#171614]/30" />

            <p className="font-sans text-[13px] leading-[1.85] text-[#171614]/55 md:text-[14px]">
              Every system we design is guided by the same principles:
              considered engineering, honest materials and comfort that
              works quietly within the space.
            </p>
          </div>
        </div>
      </Reveal>
    </div>

    {/* =================================================
        PRINCIPLES
    ================================================== */}

    <div className="mt-20 border-t border-[#171614]/15 md:mt-28">
      {values.map(({ Icon, title, text }, index) => (
        <Reveal
          key={title}
          delay={index * 0.05}
        >
          <div
            className="
              group
              relative
              grid
              border-b border-[#171614]/10
              py-8
              transition-colors
              duration-500
              hover:bg-[#171614]/[0.018]
              md:grid-cols-[80px_1fr_1.35fr_60px]
              md:items-center
              md:gap-12
              md:py-10
              lg:grid-cols-[100px_1fr_1.4fr_70px]
            "
          >

            {/* Number */}

            <div className="mb-5 md:mb-0">
              <span className="font-mono text-[9px] tracking-[0.22em] text-[#A4772A]">
                0{index + 1}
              </span>
            </div>

            {/* Title */}

            <div className="flex items-center gap-5">

              {/* Minimal icon */}

              <div
                className="
                  grid
                  size-9
                  shrink-0
                  place-items-center
                  border
                  border-[#171614]/15
                  transition-all
                  duration-500
                  group-hover:border-[#A4772A]/60
                  group-hover:bg-[#A4772A]/[0.05]
                "
              >
                <Icon
                  className="
                    size-[15px]
                    text-[#171614]/45
                    transition-colors
                    duration-500
                    group-hover:text-[#A4772A]
                  "
                  strokeWidth={1.15}
                  aria-hidden
                />
              </div>

              <h3
                className="
                  font-display
                  text-[clamp(1.55rem,2.5vw,2.35rem)]
                  font-normal
                  leading-none
                  tracking-[-0.035em]
                  text-[#171614]
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                {title}
              </h3>
            </div>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-[560px]
                font-sans
                text-[13px]
                leading-[1.8]
                text-[#171614]/50
                transition-colors
                duration-500
                group-hover:text-[#171614]/65
                md:mt-0
              "
            >
              {text}
            </p>

            {/* Index marker */}

            <div className="mt-6 flex md:mt-0 md:justify-end">
              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.2em]
                  text-[#171614]/20
                  transition-colors
                  duration-500
                  group-hover:text-[#A4772A]
                "
              >
                +
              </span>
            </div>

            {/* Subtle hover line */}

            <span
              aria-hidden
              className="
                absolute
                bottom-[-1px]
                left-0
                h-px
                w-0
                bg-[#A4772A]
                transition-all
                duration-700
                group-hover:w-20
              "
            />
          </div>
        </Reveal>
      ))}
    </div>

    {/* =================================================
        CLOSING STATEMENT
    ================================================== */}

    <Reveal delay={0.2}>
      <div className="mt-16 grid gap-8 border-t border-[#171614]/10 pt-7 md:mt-20 md:grid-cols-[1fr_auto] md:items-end">

        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#A4772A]">
            The Heatify Standard
          </span>

          <p
            className="
              mt-4
              max-w-[650px]
              font-display
              text-[clamp(1.8rem,3vw,3rem)]
              font-normal
              leading-[1.05]
              tracking-[-0.035em]
              text-[#171614]/80
            "
          >
            Warmth should be felt.
            <br />
            <span className="italic text-[#F2B84B]">
              Engineering should disappear.
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-[#A4772A]/60" />

          <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#171614]/35">
            Engineered for India
          </span>
        </div>

      </div>
    </Reveal>
  </div>
</section>

      {/* =====================================================
          TEAM
      ====================================================== */}

      <Team />

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <FinalCta />
    </>
  );
}