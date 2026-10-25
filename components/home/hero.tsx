

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WORD = "HEATIFY";
const PANELS = WORD.length;

/* =====================================================
   BRAND COLORS
===================================================== */

const CREAM = "#F1E9DD";
const INK = "#100E0C";
const YELLOW = "#F2B84B";

interface HeatifyLoaderProps {
  onComplete?: () => void;
}

export function HeatifyLoader({
  onComplete,
}: HeatifyLoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const panelsRef = useRef<HTMLDivElement[]>([]);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const callbackRef = useRef(onComplete);

  useEffect(() => {
    callbackRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    /*
     * --------------------------------------------------
     * PREVIOUS OVERFLOW STATE
     * --------------------------------------------------
     */

    const previousOverflow =
      document.body.style.overflow;

    const root = rootRef.current;
    const counter = counterRef.current;
    const progress = progressRef.current;
    const glow = glowRef.current;

    if (!root || !counter || !progress || !glow) {
      return;
    }

    /*
     * --------------------------------------------------
     * IMPORTANT
     *
     * React callback refs have already populated these.
     *
     * DO NOT clear:
     *
     * panelsRef.current
     * lettersRef.current
     * --------------------------------------------------
     */

    const panels = panelsRef.current.filter(Boolean);
    const letters = lettersRef.current.filter(Boolean);

    if (!panels.length || !letters.length) {
      return;
    }

    /*
     * --------------------------------------------------
     * REDUCED MOTION CHECK
     * --------------------------------------------------
     */

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = reducedMotionQuery.matches;

    if (reducedMotion) {
      /*
       * Show the final state immediately and unlock scroll.
       * --------------------------------------------------
       */

      gsap.set(root, {
        opacity: 1,
        visibility: "visible",
      });

      gsap.set(panels, {
        yPercent: 0,
      });

      gsap.set(letters, {
        yPercent: -2,
        opacity: 1,
      });

      gsap.set(progress, {
        scaleX: 1,
      });

      gsap.set(glow, {
        scaleX: 1,
        opacity: 0.45,
      });

      counter.textContent = "100%";

      document.body.style.overflow = previousOverflow;

      reducedMotionQuery.addEventListener("change", () => {
        window.location.reload();
      });

      return;
    }

    /*
     * --------------------------------------------------
     * LOCK PAGE SCROLL DURING INTRO
     * --------------------------------------------------
     */

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      /*
       * =================================================
       * INITIAL ROOT STATE
       * =================================================
       */

      gsap.set(root, {
        opacity: 1,
        visibility: "visible",
      });

      /*
       * =================================================
       * INITIAL PANEL STATE
       *
       * Panels start below the viewport.
       * =================================================
       */

      gsap.set(panels, {
        yPercent: 110,
        force3D: true,
      });

      /*
       * =================================================
       * INITIAL LETTER STATE
       * =================================================
       */

      gsap.set(letters, {
        yPercent: 120,
        opacity: 0,
        force3D: true,
      });

      /*
       * =================================================
       * INITIAL PROGRESS STATE
       * =================================================
       */

      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(glow, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });

      /*
       * =================================================
       * COUNTER STATE
       * =================================================
       */

      const counterState = {
        value: 0,
      };

      counter.textContent = "000%";

      /*
       * =================================================
       * MASTER TIMELINE
       * =================================================
       */

      const timeline = gsap.timeline({
        defaults: {
          overwrite: "auto",
        },

        onComplete: () => {
          /*
           * =================================================
           * PERMANENT FINAL STATE
           * =================================================
           */

          /*
           * Root remains visible.
           */

          gsap.set(root, {
            opacity: 1,
            visibility: "visible",
          });

          /*
           * Panels remain fully raised.
           */

          gsap.set(panels, {
            yPercent: 0,
          });

          /*
           * Letters remain visible.
           */

          gsap.set(letters, {
            yPercent: -2,
            opacity: 1,
          });

          /*
           * Progress remains full.
           */

          gsap.set(progress, {
            scaleX: 1,
          });

          gsap.set(glow, {
            scaleX: 1,
            opacity: 0.45,
          });

          /*
           * Final counter.
           */

          counter.textContent = "100%";

          /*
           * =================================================
           * UNLOCK PAGE SCROLL
           *
           * NO AUTO SCROLL
           * =================================================
           */

          document.body.style.overflow =
            previousOverflow;

          /*
           * Notify parent if callback exists.
           */

          callbackRef.current?.();
        },
      });

      /*
       * =================================================
       * PHASE 01
       *
       * 000 → 100
       * =================================================
       */

      timeline.to(
        counterState,
        {
          value: 100,

          duration: 1.55,

          ease: "power2.inOut",

          onUpdate: () => {
            const value = Math.round(
              counterState.value,
            );

            counter.textContent = `${value
              .toString()
              .padStart(3, "0")}%`;
          },
        },
        0,
      );

      /*
       * =================================================
       * PHASE 02
       *
       * PROGRESS LINE
       * =================================================
       */

      timeline.to(
        progress,
        {
          scaleX: 1,

          duration: 1.45,

          ease: "power3.inOut",
        },
        0.05,
      );

      /*
       * =================================================
       * PROGRESS GLOW
       * =================================================
       */

      timeline.to(
        glow,
        {
          scaleX: 1,

          opacity: 0.85,

          duration: 1.3,

          ease: "power3.inOut",
        },
        0.1,
      );

      /*
       * =================================================
       * PHASE 03
       *
       * PANELS RISE FROM BOTTOM
       *
       * CENTER → OUTWARD
       * =================================================
       */

      timeline.to(
        panels,
        {
          yPercent: 0,

          duration: 1.05,

          stagger: {
            each: 0.075,
            from: "center",
          },

          ease: "power4.inOut",

          force3D: true,
        },
        1.55,
      );

      /*
       * =================================================
       * PHASE 04
       *
       * LETTERS RISE INSIDE PANELS
       * =================================================
       */

      timeline.to(
        letters,
        {
          yPercent: 0,

          opacity: 1,

          duration: 0.82,

          stagger: {
            each: 0.09,
            from: "center",
          },

          ease: "power4.out",

          force3D: true,
        },
        1.92,
      );

      /*
       * =================================================
       * PHASE 05
       *
       * SMALL LETTER SETTLE
       * =================================================
       */

      timeline.to(
        letters,
        {
          yPercent: -2,

          duration: 0.3,

          stagger: {
            each: 0.025,
          },

          ease: "power2.out",
        },
        2.65,
      );

      /*
       * =================================================
       * PHASE 06
       *
       * HOLD FINAL STATE
       * =================================================
       */

      timeline.to(
        {},
        {
          duration: 0.6,
        },
        2.95,
      );

      /*
       * --------------------------------------------------
       * CLEANUP
       * --------------------------------------------------
       */

      return () => {
        timeline.kill();
      };
    }, root);

    /*
     * =================================================
     * COMPONENT CLEANUP
     * =================================================
     */

    return () => {
      ctx.revert();

      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative
        h-[100svh]
        w-full
        overflow-hidden
      "
      style={{
        backgroundColor: INK,
      }}
      aria-label="Heatify introduction"
    >
      {/* =================================================
          TOP LEFT — COUNTER
      ================================================= */}

      <div
        className="
          absolute
          left-4
          top-4
          z-[30]

          sm:left-6
          sm:top-6
          md:left-10
          md:top-8
        "
      >
        <div className="flex items-center gap-3">
          {/* Yellow indicator */}

          <span
            className="
              h-[5px]
              w-[5px]
              shrink-0
              rounded-full
            "
            style={{
              backgroundColor: YELLOW,

              boxShadow:
                `0 0 14px ${YELLOW}`,
            }}
          />

          {/* Counter */}

          <span
            ref={counterRef}
            className="
              font-mono
              text-[10px]
              font-medium
              tracking-[0.14em]
            "
            style={{
              color: CREAM,
            }}
          >
            000%
          </span>
        </div>
      </div>

      {/* =================================================
          TOP RIGHT — BRAND
      ================================================= */}

      <div
        className="
          absolute
          right-4
          top-4
          z-[30]

          sm:right-6
          sm:top-6
          md:right-10
          md:top-8
        "
      >
        <div className="flex items-center gap-3">
          {/* Yellow line */}

          <span
            className="
              hidden
              h-px
              w-7
              md:block
            "
            style={{
              backgroundColor: YELLOW,
              opacity: 0.8,
            }}
          />

          {/* Brand */}

          <span
            className="
              font-sans
              text-[9px]
              font-medium
              uppercase
              tracking-[0.28em]
            "
            style={{
              color: CREAM,
              opacity: 0.8,
            }}
          >
            Heatify
          </span>
        </div>
      </div>

      {/* =================================================
          PANELS
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          z-[10]
          flex
        "
      >
        {Array.from({
          length: PANELS,
        }).map((_, index) => {
          const letter = WORD[index];

          return (
            <div
              key={`${letter}-${index}`}
              ref={(element) => {
                if (element) {
                  panelsRef.current[index] =
                    element;
                }
              }}
              className="
                relative
                h-full
                min-w-0
                flex-1
                overflow-hidden
              "
              style={{
                backgroundColor: CREAM,

                borderRight:
                  index !== PANELS - 1
                    ? "1px solid rgba(16,14,12,0.14)"
                    : undefined,
              }}
            >
              {/* =========================================
                  OUTER LINE
              ========================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-px
                "
                style={{
                  backgroundColor:
                    "rgba(16,14,12,0.10)",
                }}
              />

              {/* =========================================
                  CENTER LINE
              ========================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-1/2
                  w-px
                "
                style={{
                  backgroundColor:
                    "rgba(16,14,12,0.035)",
                }}
              />

              {/* =========================================
                  LETTER
              ========================================= */}

              <div
                className="
                  absolute
                  inset-0
                  z-[10]
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <span
                  ref={(element) => {
                    if (element) {
                      lettersRef.current[index] =
                        element;
                    }
                  }}
                  className="
                    select-none
                    font-display
                    leading-none
                  "
                  style={{
                    color: INK,

                    fontSize:
                      "clamp(3.5rem, 8.6vw, 10.5rem)",

                    lineHeight: 0.82,

                    fontWeight: 400,

                    letterSpacing:
                      "-0.06em",

                    willChange:
                      "transform, opacity",
                  }}
                >
                  {letter}
                </span>
              </div>

              {/* =========================================
                  PANEL NUMBER
              ========================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-7
                  left-1/2
                  z-[20]
                  -translate-x-1/2
                  font-mono
                  text-[8px]
                  font-medium
                  tracking-[0.14em]
                "
                style={{
                  color: INK,
                  opacity: 0.68,
                }}
              >
                {String(index + 1).padStart(
                  2,
                  "0",
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* =================================================
          BOTTOM INFORMATION
      ================================================= */}

      <div
        className="
          absolute
          bottom-5
          left-4
          right-4
          z-[50]

          sm:bottom-7
          sm:left-6
          sm:right-6
          md:bottom-9
          md:left-10
          md:right-10
        "
      >
        <div
          className="
            mb-3
            flex
            items-end
            justify-between
          "
        >
          {/* System text */}

          <span
            className="
              font-sans
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
            "
            style={{
              color: INK,
              opacity: 0.62,
            }}
          >
            System / Initializing
          </span>

          {/* Counter range */}

          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-[8px]
              font-medium
              tracking-[0.12em]
            "
            style={{
              color: INK,
              opacity: 0.68,
            }}
          >
            <span>000</span>

            <span
              style={{
                color: YELLOW,
                opacity: 1,
              }}
            >
              /
            </span>

            <span>100</span>
          </div>
        </div>

        {/* =================================================
            PROGRESS TRACK
        ================================================= */}

        <div
          className="
            relative
            h-px
            w-full
          "
          style={{
            backgroundColor:
              "rgba(16,14,12,0.18)",
          }}
        >
          {/* Active progress */}

          <div
            ref={progressRef}
            className="
              absolute
              inset-y-0
              left-0
              w-full
            "
            style={{
              backgroundColor: YELLOW,
            }}
          />

          {/* Glow */}

          <div
            ref={glowRef}
            className="
              pointer-events-none
              absolute
              -inset-y-[3px]
              left-0
              w-full
            "
            style={{
              backgroundColor: YELLOW,
              filter: "blur(5px)",
            }}
          />
        </div>
      </div>

      {/* =================================================
          GRAIN
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[40]
          opacity-[0.035]
        "
        style={{
          mixBlendMode: "overlay",

          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
    </section>
  );
}

export default HeatifyLoader;

