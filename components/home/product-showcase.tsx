

"use client";

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
} from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EXPERTISE = [
  {
    number: "01",
    category: "ELECTRIC",
    title: "Electric Heating",
    description:
      "Low-profile electric systems designed for comfortable, responsive warmth beneath the finished floor.",
    items: [
      "Heating Mats",
      "Loose Cable Systems",
      "Renovation Heating",
      "Bathroom Heating",
    ],
    mark: "⌁",
    href: "/products",
  },
  {
    number: "02",
    category: "HYDRONIC",
    title: "Water-Based Heating",
    description:
      "Water-based underfloor systems engineered for efficient, evenly distributed heat across larger spaces.",
    items: [
      "Low-Profile Systems",
      "Screed Systems",
      "Whole-Home Heating",
      "Zone Distribution",
    ],
    mark: "◌",
    href: "/products",
  },
  {
    number: "03",
    category: "CONTROLS",
    title: "Smart Controls",
    description:
      "Precise temperature management that gives every heated zone its own level of control.",
    items: [
      "Smart Thermostats",
      "Room Zoning",
      "Temperature Scheduling",
      "Remote Control",
    ],
    mark: "T",
    href: "/products",
  },
  {
    number: "04",
    category: "DESIGN",
    title: "System Design",
    description:
      "Carefully planned heating layouts that consider floor construction, insulation and room requirements.",
    items: [
      "Heat-Loss Planning",
      "Floor Build-Up",
      "Insulation Strategy",
      "Installation Planning",
    ],
    mark: "＋",
    href: "/solutions",
  },
];



export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const curveRef = useRef<SVGPathElement | null>(null);
  const sideInfoRef = useRef<HTMLDivElement | null>(null);

  const setCardRef = (
    element: HTMLDivElement | null,
    index: number,
  ) => {
    if (element) {
      cardsRef.current[index] = element;
    }
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const cards = cardsRef.current.filter(Boolean);
    const heading = headingRef.current;
    const eyebrow = eyebrowRef.current;
    const curve = curveRef.current;
    const sideInfo = sideInfoRef.current;

    if (cards.length !== EXPERTISE.length) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 768px) and (max-width: 1023px)",
          mobile: "(max-width: 767px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const {
            desktop,
            tablet,
            mobile,
            reduce,
          } = context.conditions as {
            desktop: boolean;
            tablet: boolean;
            mobile: boolean;
            reduce: boolean;
          };

          if (reduce) {
            gsap.set(cards, {
              clearProps: "all",
            });

            gsap.set(heading, {
              opacity: 1,
              y: 0,
            });

            gsap.set(eyebrow, {
              opacity: 1,
              y: 0,
            });

            return;
          }

          /*
           * --------------------------------------------------------
           * INITIAL STATE
           * --------------------------------------------------------
           *
           * All four cards begin from EXACTLY the same visual area.
           * The slight rotation creates the stacked/deck feeling.
           */
          gsap.set(heading, {
            opacity: 0,
            y: 50,
          });

          gsap.set(eyebrow, {
            opacity: 0,
            y: 20,
          });

          gsap.set(sideInfo, {
            opacity: 0,
            y: 20,
          });

          if (curve) {
            const length = curve.getTotalLength();

            gsap.set(curve, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });
          }

          gsap.set(cards, {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: desktop ? 130 : 80,
            scale: desktop ? 0.72 : 0.68,
            rotation: 0,
            rotationY: 0,
            transformPerspective: 1400,
            opacity: 1,
            zIndex: (index) => 20 - index,
          });

          /*
           * Each card gets a tiny independent rotation.
           * This is what makes the initial deck feel physical.
           */
          cards.forEach((card, index) => {
            gsap.set(card, {
              rotation:
                index === 0
                  ? -8
                  : index === 1
                    ? -3
                    : index === 2
                      ? 4
                      : 9,
              x: index * 1.5,
              y: desktop
                ? 150 + index * 3
                : 100 + index * 3,
            });
          });

          /*
           * Responsive final positions.
           *
           * We calculate the x positions in percentages of viewport
           * rather than using fixed pixels.
           */
          const getSpread = () => {
            if (desktop) {
              return [
                "-165%",
                "-55%",
                "55%",
                "165%",
              ];
            }

            if (tablet) {
              return [
                "-145%",
                "-48%",
                "48%",
                "145%",
              ];
            }

            return [
              "-120%",
              "-40%",
              "40%",
              "120%",
            ];
          };

          const spread = getSpread();

          /*
           * --------------------------------------------------------
           * SCROLL TIMELINE
           * --------------------------------------------------------
           *
           * 0.00 - 0.16
           * Heading enters.
           *
           * 0.10 - 0.35
           * Stacked cards rise from below.
           *
           * 0.28 - 0.78
           * Cards fan outward.
           *
           * 0.78 - 1.00
           * Cards settle into the final row.
           *
           * Because this timeline is scrubbed by ScrollTrigger,
           * NONE of it is autoplay.
           */
          const timeline = gsap.timeline({
            defaults: {
              ease: "none",
            },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: desktop
                ? "+=1800"
                : tablet
                  ? "+=1500"
                  : "+=1250",
              pin: true,
              scrub: 1.15,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              pinSpacing: true,
              fastScrollEnd: false,
            },
          });

          timeline
            .to(
              eyebrow,
              {
                opacity: 1,
                y: 0,
                duration: 0.12,
                ease: "power2.out",
              },
              0,
            )
            .to(
              heading,
              {
                opacity: 1,
                y: 0,
                duration: 0.18,
                ease: "power3.out",
              },
              0.04,
            );

          if (curve) {
            timeline.to(
              curve,
              {
                strokeDashoffset: 0,
                duration: 0.38,
                ease: "power2.out",
              },
              0.08,
            );
          }

          timeline.to(
            cards,
            {
              y: desktop ? 0 : 0,
              duration: 0.23,
              stagger: {
                each: 0.025,
                from: "center",
              },
              ease: "power3.out",
            },
            0.12,
          );

          /*
           * Fan phase.
           */
          cards.forEach((card, index) => {
            const finalRotation =
              index === 0
                ? -2.2
                : index === 1
                  ? -0.8
                  : index === 2
                    ? 0.8
                    : 2.2;

            timeline.to(
              card,
              {
                x: spread[index],
                rotation: finalRotation,
                scale: desktop
                  ? 1
                  : mobile
                    ? 0.84
                    : 0.9,
                duration: 0.46,
                ease: "power3.out",
              },
              0.28,
            );
          });

          /*
           * Slight vertical differentiation gives the cards a
           * physical editorial layout instead of a perfectly flat row.
           */
          cards.forEach((card, index) => {
            timeline.to(
              card,
              {
                y:
                  index === 0
                    ? desktop
                      ? 4
                      : 0
                    : index === 1
                      ? 0
                      : index === 2
                        ? 2
                        : 5,
                duration: 0.22,
                ease: "power2.out",
              },
              0.63,
            );
          });

          timeline.to(
            sideInfo,
            {
              opacity: 1,
              y: 0,
              duration: 0.15,
              ease: "power2.out",
            },
            0.72,
          );

          /*
           * Hold the final state.
           *
           * This is important:
           * the cards DO NOT disappear after spreading.
           */
          timeline.to(
            {},
            {
              duration: 0.25,
            },
            0.75,
          );

          /*
           * Make sure ScrollTrigger calculates after fonts/layout.
           */
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });

          return () => {
            timeline.kill();
          };
        },
      );

      return () => {
        mm.revert();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[760px] w-full overflow-hidden bg-[#F2C46D] text-[#171512]"
      aria-label="Area of expertise"
    >
      {/* =========================================================
          ARCHITECTURAL BACKGROUND
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* fine construction grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(23,21,18,.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(23,21,18,.35) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* large white curve — inspired by the reference */}
        <svg
          className="absolute -left-[12%] top-[3%] h-[48%] w-[120%] overflow-visible"
          viewBox="0 0 1600 500"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            ref={curveRef}
            d="
              M -80 430
              C 180 160, 330 230, 560 145
              C 820 48, 1010 90, 1180 -20
              C 1320 -110, 1450 -120, 1680 -70
            "
            stroke="white"
            strokeWidth="42"
            strokeLinecap="round"
          />
        </svg>

        {/* subtle radial light */}
        <div
          className="absolute left-1/2 top-[48%] h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,.45) 0%, rgba(255,255,255,0) 68%)",
          }}
        />
      </div>

      {/* =========================================================
          TOP EDITORIAL HEADER
          ========================================================= */}

      <div className="absolute left-0 top-0 z-30 w-full px-6 pt-7 sm:px-8 lg:px-12 lg:pt-9">
        <div className="flex items-start justify-between">
          <div
            ref={eyebrowRef}
            className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-xs"
          >
            WOWTHERM / SYSTEMS
          </div>

          <div className="hidden text-right font-sans text-[9px] uppercase leading-[1.5] tracking-[0.18em] opacity-60 sm:block">
            <span className="block">ENGINEERED FLOOR</span>
            <span className="block">HEATING TECHNOLOGY</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN STAGE
          ========================================================= */}

      <div
        ref={stageRef}
        className="absolute inset-0"
      >
        {/* Giant editorial title */}

        <div className="pointer-events-none absolute left-0 top-[11%] z-10 w-full px-5 sm:top-[9%] sm:px-8 lg:px-12">
          <h2
            ref={headingRef}
            className="
              font-display
              text-[19vw]
              font-normal
              uppercase
              leading-[0.78]
              tracking-[-0.065em]
              sm:text-[15vw]
              lg:text-[13vw]
            "
          >
            <span className="block">AREA OF</span>

            <span className="ml-[17vw] block sm:ml-[25vw]">
              EXPERTISE
            </span>
          </h2>
        </div>

        {/* =======================================================
            CARD DECK
            ======================================================= */}

        <div className="absolute left-1/2 top-[57%] z-20 h-[390px] w-full -translate-x-1/2 -translate-y-1/2 sm:top-[58%] sm:h-[430px] lg:top-[61%] lg:h-[450px]">
          {EXPERTISE.map((item, index) => (
            <div
              key={item.number}
              ref={(element) =>
                setCardRef(element, index)
              }
              className="
                absolute
                left-1/2
                top-1/2
                h-[350px]
                w-[245px]
                origin-center
                overflow-hidden
                rounded-[12px]
                bg-[#FFFDF8]
                p-5
                shadow-[0_28px_70px_rgba(40,28,10,.16)]
                sm:h-[390px]
                sm:w-[275px]
                sm:p-6
                lg:h-[420px]
                lg:w-[295px]
                lg:p-7
              "
              style={
                {
                  "--card-index": index,
                } as CSSProperties
              }
            >
              {/* top line */}

              <div className="flex items-start justify-between border-b border-black/10 pb-4">
                <div className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] opacity-50">
                  {item.number}
                </div>

                <div className="font-sans text-[9px] font-semibold uppercase tracking-[0.15em] opacity-50">
                  {item.category}
                </div>
              </div>

              {/* card title */}

              <div className="pt-5">
                <h3 className="font-display text-[29px] font-normal leading-[0.95] tracking-[-0.04em] sm:text-[32px] lg:text-[35px]">
                  {item.title}
                </h3>
              </div>

              {/* technical description */}

              <p className="mt-5 font-sans text-[11px] leading-[1.55] text-black/65 sm:text-xs">
                {item.description}
              </p>

              {/* service list */}

              <div className="mt-5 border-t border-black/10">
                {item.items.map((service) => (
                  <div
                    key={service}
                    className="flex items-center justify-between border-b border-dotted border-black/15 py-[9px]"
                  >
                    <span className="font-sans text-[10px] leading-none sm:text-[11px]">
                      {service}
                    </span>

                    <span className="h-[3px] w-[3px] rounded-full bg-[#171512]/50" />
                  </div>
                ))}
              </div>

              {/* technical graphic */}


              {/* bottom category — reference-inspired rotated label */}

              <div className="absolute bottom-7 right-6 origin-bottom-right rotate-180 [writing-mode:vertical-rl]">
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] opacity-40">
                  {item.category}
                </span>
              </div>

              {/* explore link */}

              <Link
                href={item.href}
                className="
                  absolute
                  bottom-6
                  right-5
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/15
                  transition-all
                  duration-300
                  hover:bg-[#171512]
                  hover:text-white
                "
                aria-label={`Explore ${item.title}`}
              >
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* =======================================================
            SIDE INFORMATION
            ======================================================= */}

        <div
          ref={sideInfoRef}
          className="
            absolute
            bottom-[5%]
            left-6
            z-30
            max-w-[220px]
            sm:left-8
            lg:left-12
          "
        >
 <p className="font-sans text-[10px] uppercase leading-[1.5] tracking-[0.14em]">
  From the heating element beneath the floor
  to the control at your fingertips — every
  system begins with the right foundation.
</p>
        </div>

        <div className="absolute bottom-[5%] right-6 z-30 sm:right-8 lg:right-12">
          <Link
            href="/products"
            className="
              group
              flex
              items-center
              gap-3
              font-sans
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
            "
          >
            <span>Explore systems</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight
                size={13}
                strokeWidth={1.7}
              />
            </span>
          </Link>
        </div>

        {/* scroll progress indicator */}

        <div className="absolute bottom-0 left-1/2 z-30 hidden h-px w-[180px] -translate-x-1/2 bg-black/15 md:block">
          <div className="h-full w-1/4 bg-[#171512]" />
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;