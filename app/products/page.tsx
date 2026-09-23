

"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import {
  products,
  categories,
  type ProductCategory,
} from "@/lib/products";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import FinalCta from "@/components/home/final-cta";

/* -------------------------------------------------------------------------- */
/* Product helpers                                                            */
/* -------------------------------------------------------------------------- */

type ProductItem = (typeof products)[number];

function getCategoryKey(category: unknown, index = 0): string {
  if (typeof category === "string") {
    return category;
  }

  if (
    category &&
    typeof category === "object" &&
    "slug" in category &&
    typeof category.slug === "string"
  ) {
    return category.slug;
  }

  if (
    category &&
    typeof category === "object" &&
    "id" in category &&
    typeof category.id === "string"
  ) {
    return category.id;
  }

  if (
    category &&
    typeof category === "object" &&
    "name" in category &&
    typeof category.name === "string"
  ) {
    return category.name;
  }

  return `category-${index}`;
}

function getCategoryLabel(category: unknown, index = 0): string {
  if (typeof category === "string") {
    return category;
  }

  if (
    category &&
    typeof category === "object" &&
    "name" in category &&
    typeof category.name === "string"
  ) {
    return category.name;
  }

  if (
    category &&
    typeof category === "object" &&
    "label" in category &&
    typeof category.label === "string"
  ) {
    return category.label;
  }

  if (
    category &&
    typeof category === "object" &&
    "slug" in category &&
    typeof category.slug === "string"
  ) {
    return category.slug;
  }

  return `Category ${index + 1}`;
}

function getProductCategoryKey(product: ProductItem): string {
  return getCategoryKey(product.category);
}

function getProductTagline(product: ProductItem): string {
  if (
    "tagline" in product &&
    typeof product.tagline === "string" &&
    product.tagline.length > 0
  ) {
    return product.tagline;
  }

  return "Engineered radiant heating for considered spaces.";
}

/* -------------------------------------------------------------------------- */
/* Product slide                                                             */
/* -------------------------------------------------------------------------- */

function ProductSlide({
  product,
  index,
  total,
  number,
  progress,
}: {
  product: ProductItem;
  index: number;
  total: number;
  number: string;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const center = (index + 0.5) / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, center, end],
    index === 0
      ? [1, 1, 0]
      : index === total - 1
        ? [0, 1, 1]
        : [0, 1, 0],
  );

  const imageScale = useTransform(
    progress,
    [start, center, end],
    [1.07, 1, 0.96],
  );

  const imageX = useTransform(
    progress,
    [start, center, end],
    index % 2 === 0 ? ["2%", "0%", "-2%"] : ["-2%", "0%", "2%"],
  );

  const contentY = useTransform(
    progress,
    [start, center, end],
    [35, 0, -30],
  );

  const contentOpacity = useTransform(
    progress,
    [start, center, end],
    [0, 1, 0],
  );

  const blur = useTransform(
    progress,
    [start, center, end],
    ["4px", "0px", "3px"],
  );

  const tagline = getProductTagline(product);

  return (
    <motion.article
      aria-hidden={false}
      style={{ opacity }}
      className="absolute inset-0"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Image                                                               */}
      {/* ------------------------------------------------------------------ */}

      <motion.div
        className="absolute inset-0"
        style={{
          scale: imageScale,
          x: imageX,
          filter: blur,
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={index === 0}
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* ------------------------------------------------------------------ */}
      {/* Cinematic overlays                                                  */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden
        className="absolute inset-0 bg-[#11100E]/10"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#11100E]/90 via-[#11100E]/35 to-transparent"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#11100E]/85 via-transparent to-[#11100E]/20"
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(17,16,14,.35) 0%, transparent 45%, rgba(17,16,14,.08) 100%)",
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Architectural frame                                                */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-6 border border-[#F4F1EA]/15 md:inset-8 lg:inset-10"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-10 top-10 h-12 w-12 border-l border-t border-[#F2B84B]/70 md:left-12 md:top-12 lg:left-16 lg:top-16"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-10 h-12 w-12 border-b border-r border-[#F2B84B]/40 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16"
      />

      {/* ------------------------------------------------------------------ */}
      {/* Content                                                             */}
      {/* ------------------------------------------------------------------ */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="absolute inset-x-0 bottom-0 z-20"
      >
        <div className="mx-auto max-w-[1500px] px-8 pb-12 md:px-12 md:pb-14 lg:px-16 lg:pb-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Main information */}

            <div className="max-w-[900px]">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#F2B84B]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#F4F1EA]/60">
                  WOWTHERM / {number}
                </span>
              </div>

              <h2 className="font-display text-[clamp(4rem,10vw,10rem)] font-normal leading-[0.78] tracking-[-0.07em] text-[#F4F1EA]">
                {product.name}
                <span className="text-[#F2B84B]">.</span>
              </h2>

              <div className="mt-8 flex max-w-[700px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <p className="max-w-[480px] font-sans text-sm leading-7 text-[#F4F1EA]/65 md:text-[15px]">
                  {tagline}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="group inline-flex w-fit items-center gap-4 border-b border-[#F4F1EA]/30 pb-2 font-sans text-[9px] font-medium uppercase tracking-[0.24em] text-[#F4F1EA] transition-colors duration-300 hover:border-[#F2B84B]"
                >
                  Explore product
                  <ArrowUpRight className="size-3.5 text-[#F2B84B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>

            {/* Technical information */}

            <div className="hidden w-[230px] border-l border-[#F4F1EA]/20 pl-7 lg:block">
              <div className="flex items-center justify-between border-b border-[#F4F1EA]/15 py-3">
                <span className="font-sans text-[8px] uppercase tracking-[0.22em] text-[#F4F1EA]/40">
                  System
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#F4F1EA]/70">
                  WOWTHERM
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#F4F1EA]/15 py-3">
                <span className="font-sans text-[8px] uppercase tracking-[0.22em] text-[#F4F1EA]/40">
                  Category
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#F2B84B]">
                  {getProductCategoryKey(product)}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="font-sans text-[8px] uppercase tracking-[0.22em] text-[#F4F1EA]/40">
                  Product
                </span>

                <span className="font-mono text-[8px] tracking-[0.15em] text-[#F4F1EA]/70">
                  {number} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function ProductsPage() {
  const [active, setActive] = useState<ProductCategory | "all">("all");

  const sectionRef = useRef<HTMLElement>(null);

  const categoryOptions = useMemo(() => {
    const seen = new Set<string>();

    return categories
      .map((category, index) => {
        const key = getCategoryKey(category, index);
        const label = getCategoryLabel(category, index);

        return {
          key,
          label,
        };
      })
      .filter((category) => {
        if (seen.has(category.key)) {
          return false;
        }

        seen.add(category.key);
        return true;
      });
  }, []);

  const filtered = useMemo(() => {
    if (active === "all") {
      return products;
    }

    return products.filter(
      (product) => getProductCategoryKey(product) === String(active),
    );
  }, [active]);

  const total = Math.max(filtered.length, 1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1],
  );

  return (
    <main className="bg-[#F4F1EA] text-[#11100E]">
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#11100E] text-[#F4F1EA]">
        <div className="absolute inset-0">
          <Image
            src="/pro1.png"
            alt="WOWTHERM heating systems"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#11100E]/90 via-[#11100E]/55 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#11100E]/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1400px] items-center px-8 py-24 md:px-12 lg:px-16">
          <div className="w-full">
            <Reveal delay={0.1}>
              <p className="mb-8 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#F4F1EA]/60">
                Radiant heating, engineered beneath.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <h1 className="max-w-[1100px] font-serif text-[clamp(4.5rem,11vw,10.5rem)] font-light leading-[0.78] tracking-[-0.065em]">
                <span className="block">Products</span>

                <span className="ml-[7vw] block text-[#F4F1EA]/90">
                  made for
                </span>

                <span className="ml-[14vw] block italic text-[#F2B84B]">
                  warmth.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-12 ml-[7vw] max-w-[560px] border-l border-[#F4F1EA]/25 pl-6">
                <p className="font-sans text-sm leading-7 text-[#F4F1EA]/55 md:text-[15px]">
                  Heating elements, controls and systems designed to work
                  quietly beneath the architecture — precise where it matters,
                  invisible when complete.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-10 left-8 z-20 md:left-12 lg:left-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#F4F1EA]/40">
              Product collection
            </span>

            <span className="h-px w-10 bg-[#F2B84B]/70" />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* COLLECTION INTRO                                                    */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#F4F1EA] py-28 md:py-36 lg:py-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-y-0 left-[8%] w-px bg-[#11100E]/[0.055]" />

          <div className="absolute inset-y-0 right-[8%] w-px bg-[#11100E]/[0.055]" />

          <div className="absolute left-0 right-0 top-[18%] h-px bg-[#11100E]/[0.045]" />

          <div className="absolute -right-[10%] top-[5%] size-[500px] rounded-full bg-[#F2B84B]/[0.045] blur-[150px]" />
        </div>

        <div className="container-site relative">
          <Reveal>
            <div className="flex items-center justify-between border-b border-[#11100E]/[0.10] pb-5">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] tracking-[0.16em] text-[#B98520]">
                  01
                </span>

                <span className="h-px w-10 bg-[#B98520]/70" />

                <span className="font-sans text-[9px] font-medium uppercase tracking-[0.28em] text-[#11100E]/40">
                  The collection
                </span>
              </div>

              <span className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-[#11100E]/25 md:block">
                WT / Catalogue
              </span>
            </div>
          </Reveal>

          <div className="grid gap-16 pt-16 md:pt-20 lg:grid-cols-[0.32fr_1fr] lg:gap-20">
            <Reveal delay={0.08}>
              <div className="lg:pt-5">
                <p className="max-w-[230px] font-sans text-[11px] leading-6 text-[#11100E]/45">
                  Systems designed to sit quietly beneath the architecture,
                  with every component selected for the space above it.
                </p>

                <div className="mt-12 hidden lg:block">
                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#11100E]/25">
                    Engineered beneath
                  </span>

                  <div className="mt-4 h-px w-16 bg-[#F2B84B]" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div>
                <h2 className="max-w-[1000px] font-serif text-[clamp(4rem,8vw,8.5rem)] font-light leading-[0.80] tracking-[-0.065em] text-[#11100E]">
                  Every layer
                  <br />
                  has a{" "}
                  <span className="italic text-[#F2B84B]">
                    purpose.
                  </span>
                </h2>

                <div className="mt-14 flex flex-col gap-8 border-t border-[#11100E]/[0.10] pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-[430px] font-sans text-sm leading-7 text-[#11100E]/45">
                    From the heating element beneath the floor to the controls
                    at your fingertips, the system is considered as one
                    complete piece of architecture.
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/30">
                      Explore
                    </span>

                    <span className="flex size-9 items-center justify-center rounded-full border border-[#11100E]/15">
                      <ArrowUpRight
                        className="size-3.5"
                        strokeWidth={1.2}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
         
        </div>
      </section>

      {/* ================================================================== */}
      {/* PRODUCT SHOWCASE                                                    */}
      {/* ================================================================== */}

      {filtered.length > 0 && (
        <section
          ref={sectionRef}
          className="relative"
          style={{
            height: `${filtered.length * 100}svh`,
          }}
        >
          <div className="sticky top-0 h-[100svh] overflow-hidden bg-[#11100E]">
            {/* ------------------------------------------------------------ */}
            {/* Slides                                                        */}
            {/* ------------------------------------------------------------ */}

            <div className="absolute inset-0">
              {filtered.map((product, index) => (
                <ProductSlide
                  key={`${product.slug}-${index}`}
                  product={product}
                  index={index}
                  total={filtered.length}
                  number={String(index + 1).padStart(2, "0")}
                  progress={scrollYProgress}
                />
              ))}
            </div>

            {/* ------------------------------------------------------------ */}
            {/* Top technical line                                             */}
            {/* ------------------------------------------------------------ */}

            <div className="absolute left-0 right-0 top-0 z-40">
              <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-7 md:px-12 lg:px-16">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[8px] tracking-[0.22em] text-[#F4F1EA]/50">
                    02
                  </span>

                  <span className="h-px w-8 bg-[#F2B84B]" />

                  <span className="font-sans text-[8px] uppercase tracking-[0.28em] text-[#F4F1EA]/45">
                    Product systems
                  </span>
                </div>

                <span className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-[#F4F1EA]/35 md:block">
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* Side vertical label                                           */}
            {/* ------------------------------------------------------------ */}

            <div className="absolute left-7 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
              <span
                className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#F4F1EA]/35"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                Radiant heating / WOWTHERM
              </span>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* Bottom progress                                                */}
            {/* ------------------------------------------------------------ */}

            <div className="absolute bottom-0 left-0 right-0 z-40">
              <div className="h-px bg-[#F4F1EA]/15">
                <motion.div
                  style={{
                    scaleX: progressScale,
                  }}
                  className="h-full origin-left bg-[#F2B84B]"
                />
              </div>

              <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-5 md:px-12 lg:px-16">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#F4F1EA]/35">
                  WOWTHERM
                </span>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[8px] text-[#F4F1EA]/40">
                    01
                  </span>

                  <span className="h-px w-8 bg-[#F4F1EA]/20" />

                  <span className="font-mono text-[8px] text-[#F4F1EA]/40">
                    {String(filtered.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* Scroll cue                                                     */}
            {/* ------------------------------------------------------------ */}

            <motion.div
              animate={{
                y: [0, 6, 0],
                opacity: [0.45, 0.8, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 left-1/2 z-40 hidden -translate-x-1/2 md:block"
            >
              <ArrowDownRight className="size-4 text-[#F2B84B]" />
            </motion.div>
          </div>
        </section>
      )}

      {/* ================================================================== */}
      {/* EMPTY STATE                                                         */}
      {/* ================================================================== */}

      {filtered.length === 0 && (
        <section className="flex min-h-[60svh] items-center justify-center bg-[#F4F1EA] px-8">
          <div className="text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B98520]">
              No systems found
            </p>

            <p className="mt-5 font-display text-4xl tracking-[-0.04em]">
              Nothing in this collection yet.
            </p>

            <button
              type="button"
              onClick={() => setActive("all")}
              className="mt-8 border border-[#11100E] bg-[#11100E] px-6 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#F4F1EA] transition hover:bg-[#F2B84B] hover:text-[#11100E]"
            >
              View all products
            </button>
          </div>
        </section>
      )}

      {/* ================================================================== */}
      {/* CLOSING                                                             */}
      {/* ================================================================== */}

      <FinalCta/>
    </main>
  );
}