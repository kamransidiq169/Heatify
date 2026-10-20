"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const GOLD = "#F2B84B";
const CREAM = "#F4F1EA";
const DARK = "#11100E";

export function FinalCta() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[760px]
        overflow-hidden
        bg-[#11100E]
        text-white
      "
    >
      {/* ==========================================================
          ATMOSPHERE
         ========================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        {/* architectural dot grid */}

        <svg
          className="
            absolute
            inset-0
            h-full
            w-full
            opacity-[0.18]
          "
        >
          <defs>
            <pattern
              id="wowtherm-final-grid"
              width="38"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="1"
                cy="1"
                r="0.8"
                fill={CREAM}
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#wowtherm-final-grid)"
          />
        </svg>

        {/* warm floor glow */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 1.8,
            ease: EASE,
          }}
          className="
            absolute
            bottom-[-15%]
            left-1/2
            h-[75%]
            w-[90%]
            -translate-x-1/2
            rounded-full
            blur-[130px]
          "
          style={{
            background:
              "radial-gradient(closest-side, rgba(242,184,75,0.20), transparent 70%)",
          }}
        />

        {/* subtle orange core */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 2,
            delay: 0.2,
            ease: EASE,
          }}
          className="
            absolute
            bottom-[-10%]
            left-1/2
            h-[35%]
            w-[40%]
            -translate-x-1/2
            rounded-full
            blur-[100px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(210,105,35,0.22), transparent 70%)",
          }}
        />

        {/* top fade */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-48
            bg-gradient-to-b
            from-[#11100E]
            to-transparent
          "
        />

        {/* bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-56
            bg-gradient-to-t
            from-[#11100E]
            to-transparent
          "
        />

        {/* center vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,.52)_100%)]
          "
        />
      </div>

      {/* ==========================================================
          ARCHITECTURAL FRAME
         ========================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-x-5
          top-6
          bottom-6
          border
          border-white/[0.07]
          sm:inset-x-8
          sm:top-8
          sm:bottom-8
          lg:inset-x-12
          lg:top-10
          lg:bottom-10
        "
      >
        {/* top-left marker */}

        <span
          className="
            absolute
            -left-px
            -top-px
            size-3
            border-l
            border-t
            border-[#F2B84B]/60
          "
        />

        {/* top-right marker */}

        <span
          className="
            absolute
            -right-px
            -top-px
            size-3
            border-r
            border-t
            border-[#F2B84B]/60
          "
        />

        {/* bottom-left marker */}

        <span
          className="
            absolute
            -bottom-px
            -left-px
            size-3
            border-b
            border-l
            border-[#F2B84B]/60
          "
        />

        {/* bottom-right marker */}

        <span
          className="
            absolute
            -bottom-px
            -right-px
            size-3
            border-b
            border-r
            border-[#F2B84B]/60
          "
        />
      </div>

      {/* ==========================================================
          TOP LABEL
         ========================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-10
        "
      >
        <div
          className="
            mx-auto
            flex
            w-[calc(100%-40px)]
            max-w-[1500px]
            items-center
            justify-between
            pt-7
            sm:w-[calc(100%-64px)]
            lg:w-[calc(100%-96px)]
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#F2B84B] sm:w-12" />

            <span
              className="
                font-sans
                text-[8px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#F2B84B]
              "
            >
              START A CONVERSATION
            </span>
          </div>

          <span
            className="
              hidden
              font-mono
              text-[7px]
              uppercase
              tracking-[0.22em]
              text-white/25
              sm:block
            "
          >
            WOWTHERM / 05
          </span>
        </div>
      </div>

      {/* ==========================================================
          MAIN CONTENT
         ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[600px]
          w-full
          max-w-[1500px]
          flex-col
          justify-center
          px-5
          py-24
          sm:px-8
          sm:py-28
          md:px-10
          lg:px-12
          lg:py-32
        "
      >
        {/* ========================================================
            EYEBROW
           ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="mb-7"
        >
          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            ENGINEERED COMFORT / FINAL NOTE
          </span>
        </motion.div>

        {/* ========================================================
            HEADING
           ======================================================== */}

        <motion.h2
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
            amount: 0.35,
          }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
          className="
            max-w-[1050px]
            font-display
            font-normal
            leading-[0.84]
            tracking-[-0.065em]
            text-white
          "
          style={{
            fontSize: 'clamp(2rem, 10vw, 12vw)',
          }}
        >
          Let&apos;s design
          <br />

          <span className="text-white/25">
            the warmth
          </span>

          <br />

          <span className="text-[#F2B84B]">
            into your space.
          </span>
        </motion.h2>

        {/* ========================================================
            DESCRIPTION + CTA
           ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            delay: 0.18,
            ease: EASE,
          }}
          className="
            mt-8
            grid
            max-w-[1000px]
            gap-6
            lg:grid-cols-[minmax(0,420px)_1fr]
            lg:items-end
          "
        >
          {/* description */}

          <p
            className="
              max-w-[430px]
              font-sans
              text-sm
              leading-[1.75]
              text-white/45
            "
          >
            Tell us about the room, the floor and
            how you want it to feel. We&apos;ll help
            you understand the right heating system
            for the space.
          </p>

          {/* buttons */}

          <div className="flex flex-wrap gap-3">
            {/* primary */}

            <Link
              href="/contact"
              className="
                group
                inline-flex
                h-12
                items-center
                gap-6
                rounded-full
                bg-[#F2B84B]
                px-6
                font-sans
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-[#11100E]
                transition-all
                duration-500
                hover:bg-[#FFD477]
                sm:h-14
                sm:px-7
              "
            >
              <span>
                Start a project
              </span>

              <span
                className="
                  flex
                  size-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#11100E]
                  text-[#F2B84B]
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                <ArrowRight
                  className="size-3"
                />
              </span>
            </Link>

            {/* secondary */}

            <Link
              href="/contact"
              className="
                group
                inline-flex
                h-12
                items-center
                gap-4
                rounded-full
                border
                border-white/[0.14]
                bg-white/[0.025]
                px-6
                font-sans
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/75
                backdrop-blur-sm
                transition-all
                duration-500
                hover:border-[#F2B84B]/50
                hover:bg-white/[0.06]
                hover:text-white
                sm:h-14
                sm:px-7
              "
            >
              <span>
                Talk to an expert
              </span>

              <ArrowUpRight
                className="
                  size-3.5
                  text-white/40
                  transition-all
                  duration-500
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-[#F2B84B]
                "
              />
            </Link>
          </div>
        </motion.div>

        {/* ========================================================
            TECHNICAL FOOTER
           ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: EASE,
          }}
          className="
            mt-14
            border-t
            border-white/[0.08]
            pt-4
            sm:mt-16
            lg:mt-24
          "
        >
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {/* item */}

            <div>
              <span
                className="
                  block
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                SYSTEM
              </span>

              <span
                className="
                  mt-2
                  block
                  font-sans
                  text-[10px]
                  text-white/55
                "
              >
                Underfloor Heating
              </span>
            </div>

            {/* item */}

            <div>
              <span
                className="
                  block
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                CONTROL
              </span>

              <span
                className="
                  mt-2
                  block
                  font-sans
                  text-[10px]
                  text-white/55
                "
              >
                Precision Comfort
              </span>
            </div>

            {/* item */}

            <div>
              <span
                className="
                  block
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                APPROACH
              </span>

              <span
                className="
                  mt-2
                  block
                  font-sans
                  text-[10px]
                  text-white/55
                "
              >
                Designed Around You
              </span>
            </div>

            {/* item */}

            <div className="hidden lg:block lg:text-right">
              <span
                className="
                  block
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                WOWTHERM
              </span>

              <span
                className="
                  mt-2
                  block
                  font-sans
                  text-[10px]
                  text-[#F2B84B]/70
                "
              >
                Engineered Comfort
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ==========================================================
          FLOOR HEATING VISUAL
         ========================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[140px]
          w-[min(1000px,90vw)]
          -translate-x-1/2
          opacity-30
          sm:h-[160px]
          lg:h-[190px]
        "
      >
        {/* horizontal floor lines */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-full
            [mask-image:linear-gradient(to_top,black,transparent)]
          "
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to bottom,
                rgba(242,184,75,.22) 0px,
                rgba(242,184,75,.22) 1px,
                transparent 1px,
                transparent 28px
              )
            `,
          }}
        />

        {/* heating curve */}

        <svg
          viewBox="0 0 1000 190"
          className="
            absolute
            inset-0
            h-full
            w-full
          "
          fill="none"
        >
          <motion.path
            d="
              M 40 150
              C 100 150, 100 70, 170 70
              C 240 70, 240 150, 310 150
              C 380 150, 380 70, 450 70
              C 520 70, 520 150, 590 150
              C 660 150, 660 70, 730 70
              C 800 70, 800 150, 870 150
              C 920 150, 940 110, 960 90
            "
            stroke={GOLD}
            strokeWidth="1.2"
            strokeDasharray="4 8"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            whileInView={{
              pathLength: 1,
              opacity: 0.65,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 2.2,
              delay: 0.5,
              ease: EASE,
            }}
          />
        </svg>
      </div>

      {/* ==========================================================
          CORNER INDEX
         ========================================================== */}

      <div
        aria-hidden
        className="
          absolute
          bottom-10
          left-8
          hidden
          sm:block
          lg:left-12
        "
      >
        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.22em]
            text-white/20
          "
        >
          01 — 01
        </span>
      </div>

      <div
        aria-hidden
        className="
          absolute
          bottom-10
          right-8
          hidden
          sm:block
          lg:right-12
        "
      >
        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.22em]
            text-white/20
          "
        >
          WARMTH / BELOW
        </span>
      </div>
    </section>
  );
}

export default FinalCta;