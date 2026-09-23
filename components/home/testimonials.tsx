


"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Quote,
} from "lucide-react";

import { testimonials } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const GOLD = "#F2B84B";
const CREAM = "#F4F1EA";
const DARK = "#11100E";

/* ================================================================
   HELPERS
   ================================================================ */

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

/* ================================================================
   CLIENT AVATAR
   ================================================================ */

function ClientAvatar({
  name,
}: {
  name: string;
}) {
  return (
    <div
      className="
        relative
        flex
        size-14
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-black/[0.10]
        bg-black/[0.035]
      "
    >
      {/* architectural rings */}

      <div
        className="
          absolute
          inset-1
          rounded-full
          border
          border-[#F2B84B]/35
        "
      />

      <div
        className="
          absolute
          inset-[7px]
          rounded-full
          border
          border-black/[0.06]
        "
      />

      {/* initials */}

      <span
        className="
          relative
          z-10
          font-sans
          text-[11px]
          font-medium
          tracking-[0.12em]
          text-[#11100E]/75
        "
      >
        {initials(name)}
      </span>

      {/* tiny gold point */}

      <span
        className="
          absolute
          bottom-1.5
          right-1.5
          size-1.5
          rounded-full
          bg-[#F2B84B]
        "
      />
    </div>
  );
}

/* ================================================================
   TESTIMONIAL NAV ITEM
   ================================================================ */

function TestimonialNavItem({
  testimonial,
  index,
  active,
  onClick,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className="
        group
        relative
        flex
        w-full
        items-center
        gap-4
        border-b
        border-black/[0.09]
        py-5
        text-left
        outline-none
        transition-all
        duration-500
        first:pt-0
        last:border-b-0
      "
    >
      {/* active vertical line */}

      <span
        className="
          absolute
          -left-5
          top-0
          h-full
          w-px
          overflow-hidden
          bg-transparent
          lg:-left-6
        "
      >
        <motion.span
          initial={false}
          animate={{
            scaleY: active ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: EASE,
          }}
          className="
            absolute
            inset-0
            origin-top
            bg-[#F2B84B]
          "
        />
      </span>

      {/* number */}

      <span
        className={`
          w-7
          shrink-0
          font-mono
          text-[8px]
          tracking-[0.15em]
          transition-colors
          duration-500
          ${
            active
              ? "text-[#B98520]"
              : "text-black/20"
          }
        `}
      >
        0{index + 1}
      </span>

      {/* name */}

      <div className="min-w-0 flex-1">
        <p
          className={`
            truncate
            font-sans
            text-[12px]
            font-medium
            tracking-[-0.01em]
            transition-colors
            duration-500
            ${
              active
                ? "text-[#11100E]"
                : "text-black/45 group-hover:text-black/75"
            }
          `}
        >
          {testimonial.name}
        </p>

        <p
          className="
            mt-1
            truncate
            font-sans
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-black/30
          "
        >
          {testimonial.role}
        </p>
      </div>

      {/* arrow */}

      <motion.span
        animate={{
          x: active ? 0 : -5,
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: EASE,
        }}
        className="
          flex
          size-6
          items-center
          justify-center
          text-[#B98520]
        "
      >
        <ArrowUpRight className="size-3.5" />
      </motion.span>
    </button>
  );
}

/* ================================================================
   MAIN TESTIMONIAL
   ================================================================ */

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const active = testimonials[current];

  /* --------------------------------------------------------------
     Auto advance
     -------------------------------------------------------------- */

  useEffect(() => {
    if (testimonials.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrent((value) =>
        value === testimonials.length - 1
          ? 0
          : value + 1,
      );
    }, 8500);

    return () => window.clearInterval(timer);
  }, [current]);

  if (!active) {
    return null;
  }

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F4F1EA]
        text-[#11100E]
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
        {/* soft central warm glow */}

        <div
          className="
            absolute
            left-[42%]
            top-1/2
            size-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[150px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(242,184,75,.10) 0%, transparent 68%)",
          }}
        />

        {/* architectural grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.055]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(17,16,14,.45) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(17,16,14,.45) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* subtle vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(17,16,14,.055)_100%)]
          "
        />
      </div>

      {/* ==========================================================
          TOP ARCHITECTURAL LINE
         ========================================================== */}

      <div className="absolute left-0 right-0 top-0">
        <div
          className="
            mx-auto
            h-px
            w-[calc(100%-40px)]
            max-w-[1500px]
            bg-black/[0.10]
            sm:w-[calc(100%-64px)]
            lg:w-[calc(100%-96px)]
          "
        />

        <div
          className="
            mx-auto
            flex
            w-[calc(100%-40px)]
            max-w-[1500px]
            items-center
            justify-between
            pt-4
            sm:w-[calc(100%-64px)]
            lg:w-[calc(100%-96px)]
          "
        >
          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.24em]
              text-black/30
            "
          >
            WOWTHERM / CLIENT VOICES
          </span>

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-black/25
            "
          >
            FIELD NOTES / 01
          </span>
        </div>
      </div>

      {/* ==========================================================
          MAIN CONTAINER
         ========================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          pb-24
          pt-28
          sm:px-8
          sm:pb-32
          sm:pt-32
          lg:px-12
          lg:pb-40
          lg:pt-40
        "
      >
        {/* ========================================================
            SECTION INTRO
           ======================================================== */}

        <div
          className="
            mb-16
            flex
            items-end
            justify-between
            gap-8
            lg:mb-20
          "
        >
          <div>
            {/* eyebrow */}

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B98520] sm:w-12" />

              <span
                className="
                  font-sans
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[#B98520]
                "
              >
                TESTIMONIALS
              </span>
            </div>

            {/* heading */}

            <h2
              className="
                mt-5
                max-w-[850px]
                font-display
                text-[13vw]
                font-normal
                leading-[0.8]
                tracking-[-0.065em]
                text-[#11100E]
                sm:text-[11vw]
                lg:text-[8vw]
              "
            >
              Real spaces.
              <br />

          <span className="text-[#F2B84B]">
  Real warmth.
</span>
            </h2>
          </div>

          {/* counter */}

          <div
            className="
              hidden
              shrink-0
              pb-2
              text-right
              sm:block
            "
          >
            <span
              className="
                block
                font-mono
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-black/30
              "
            >
              CLIENT STORIES
            </span>

            <div className="mt-2 flex items-baseline justify-end gap-1">
              <span
                className="
                  font-display
                  text-3xl
                  text-[#B98520]
                "
              >
                {String(current + 1).padStart(2, "0")}
              </span>

              <span
                className="
                  font-mono
                  text-[8px]
                  text-black/25
                "
              >
                /
                {String(testimonials.length).padStart(
                  2,
                  "0",
                )}
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            TESTIMONIAL EXPERIENCE
           ======================================================== */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[minmax(0,1fr)_340px]
            lg:gap-20
          "
        >
          {/* ======================================================
              QUOTE AREA
             ====================================================== */}

          <div
            className="
              relative
              min-h-[430px]
              sm:min-h-[390px]
              lg:min-h-[480px]
            "
          >
            {/* giant quote */}

            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                -left-3
                -top-14
                select-none
                font-display
                text-[190px]
                leading-none
                text-[#B98520]/[0.10]
                sm:-left-5
                sm:-top-20
                sm:text-[250px]
              "
            >
              “
            </div>

            {/* thin horizontal architectural marker */}

            <div
              className="
                absolute
                left-0
                top-0
                hidden
                h-px
                w-[min(40vw,430px)]
                bg-black/[0.10]
                sm:block
              "
            >
              <motion.div
                key={current}
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: EASE,
                }}
                className="
                  h-full
                  origin-left
                  bg-[#B98520]
                "
              />
            </div>

            {/* quote */}

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -24,
                  filter: "blur(6px)",
                }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                }}
                className="
                  relative
                  z-10
                  pt-10
                  sm:pt-14
                "
              >
                <blockquote>
                  <p
                    className="
                      max-w-[1000px]
                      font-display
                      text-[8.7vw]
                      font-normal
                      leading-[0.94]
                      tracking-[-0.045em]
                      text-[#11100E]
                      sm:text-[6.2vw]
                      lg:text-[5vw]
                      xl:text-[4.35rem]
                    "
                  >
                    {active.quote}
                  </p>
                </blockquote>

                {/* =================================================
                    CLIENT IDENTITY
                   ================================================= */}

                <div
                  className="
                    mt-12
                    flex
                    flex-wrap
                    items-center
                    gap-5
                    sm:mt-16
                  "
                >
                  <ClientAvatar name={active.name} />

                  <div>
                    <div className="flex items-center gap-2">
                      <p
                        className="
                          font-sans
                          text-sm
                          font-medium
                          text-[#11100E]
                        "
                      >
                        {active.name}
                      </p>

                      <BadgeCheck
                        className="size-4 text-[#B98520]"
                        strokeWidth={1.5}
                        aria-label="Verified client"
                      />
                    </div>

                    <p
                      className="
                        mt-1
                        font-sans
                        text-[10px]
                        uppercase
                        tracking-[0.13em]
                        text-black/40
                      "
                    >
                      {active.role}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    PROJECT METADATA
                   ================================================= */}

                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-x-10
                    gap-y-4
                    border-t
                    border-black/[0.10]
                    pt-5
                  "
                >
                  {/* project */}

                  <div>
                    <span
                      className="
                        block
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.2em]
                        text-black/30
                      "
                    >
                      PROJECT
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        font-sans
                        text-[10px]
                        text-black/60
                      "
                    >
                      {active.project}
                    </span>
                  </div>

                  {/* status */}

                  <div>
                    <span
                      className="
                        block
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.2em]
                        text-black/30
                      "
                    >
                      STATUS
                    </span>

                    <span
                      className="
                        mt-1
                        flex
                        items-center
                        gap-2
                        font-sans
                        text-[10px]
                        text-black/60
                      "
                    >
                      <span className="size-1.5 rounded-full bg-[#F2B84B]" />

                      COMPLETED
                    </span>
                  </div>

                  {/* field note */}

                  <div
                    className="
                      ml-auto
                      hidden
                      items-center
                      gap-2
                      sm:flex
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.18em]
                        text-black/25
                      "
                    >
                      WOWTHERM / FIELD NOTE
                    </span>

                    <span
                      className="
                        flex
                        size-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/[0.12]
                      "
                    >
                      <ArrowUpRight
                        className="size-3 text-black/45"
                      />
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ======================================================
              CLIENT INDEX
             ====================================================== */}

          <div
            className="
              relative
              lg:border-l
              lg:border-black/[0.10]
              lg:pl-8
            "
          >
            {/* mobile counter */}

            <div
              className="
                mb-8
                flex
                items-center
                justify-between
                lg:hidden
              "
            >
              <span
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-black/30
                "
              >
                CLIENT INDEX
              </span>

              <span
                className="
                  font-mono
                  text-[8px]
                  text-[#B98520]
                "
              >
                {String(current + 1).padStart(2, "0")}
                {" / "}
                {String(testimonials.length).padStart(
                  2,
                  "0",
                )}
              </span>
            </div>

            {/* client list */}

            <div className="lg:pt-1">
              {testimonials.map(
                (testimonial, index) => (
                  <TestimonialNavItem
                    key={`${testimonial.name}-${index}`}
                    testimonial={testimonial}
                    index={index}
                    active={index === current}
                    onClick={() =>
                      setCurrent(index)
                    }
                  />
                ),
              )}
            </div>

            {/* bottom note */}

            <div
              className="
                mt-10
                hidden
                border-t
                border-black/[0.10]
                pt-5
                lg:block
              "
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span
                    className="
                      block
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.2em]
                      text-black/30
                    "
                  >
                    OUR APPROACH
                  </span>

                  <p
                    className="
                      mt-3
                      max-w-[190px]
                      font-sans
                      text-[10px]
                      leading-[1.6]
                      text-black/45
                    "
                  >
                    Every installation is
                    designed around the
                    space, its floor and
                    the people who use it.
                  </p>
                </div>

                <Quote
                  className="size-4 shrink-0 text-[#B98520]/50"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM SIGNATURE
           ======================================================== */}

        <div
          className="
            mt-20
            border-t
            border-black/[0.10]
            pt-5
            sm:mt-28
          "
        >
          <div
            className="
              flex
              flex-col
              justify-between
              gap-4
              sm:flex-row
              sm:items-center
            "
          >
            <p
              className="
                font-sans
                text-[10px]
                text-black/35
              "
            >
              Comfort is invisible.
              The experience is not.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B98520]/50" />

              <span
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-black/30
                "
              >
                ENGINEERED COMFORT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================
          SMALL GOLD ARCHITECTURAL MARK
         ========================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          hidden
          h-40
          w-40
          sm:block
        "
      >
        <div
          className="
            absolute
            bottom-8
            right-8
            size-12
            rounded-full
            border
            border-[#B98520]/20
          "
        />

        <div
          className="
            absolute
            bottom-[55px]
            right-[55px]
            size-2
            rounded-full
            bg-[#F2B84B]/70
          "
        />
      </div>
    </section>
  );
}

export default Testimonials;