"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface ScrollerService {
  id: string;
  icon: ReactNode;
  title: string;
  summary: string;
}

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const AUTO_SCROLL_DELAY = 4200;

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICE_META = [
  {
    number: "01",
    label: "Assessment",
    detail: "Planning",
  },
  {
    number: "02",
    label: "Installation",
    detail: "Electric",
  },
  {
    number: "03",
    label: "Installation",
    detail: "Hydronic",
  },
  {
    number: "04",
    label: "Control",
    detail: "Smart",
  },
  {
    number: "05",
    label: "Preparation",
    detail: "Thermal",
  },
  {
    number: "06",
    label: "Support",
    detail: "Aftercare",
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function ServiceScroller({
  services,
  className = "",
}: {
  services: ScrollerService[];
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef =
    useRef<ReturnType<typeof setInterval> | null>(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = services.length;

  /* ------------------------------------------------------------------------ */
  /* Go to service                                                            */
  /* ------------------------------------------------------------------------ */

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;

      if (!track || !total) return;

      const next =
        index < 0
          ? total - 1
          : index >= total
            ? 0
            : index;

      const card =
        track.querySelector<HTMLElement>(
          `[data-service-index="${next}"]`,
        );

      if (!card) return;

      const target =
        card.offsetLeft -
        track.clientWidth / 2 +
        card.offsetWidth / 2;

      track.scrollTo({
        left: Math.max(0, target),
        behavior: "smooth",
      });

      setActive(next);
    },
    [total],
  );

  /* ------------------------------------------------------------------------ */
  /* Autoplay                                                                 */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (paused || total <= 1) return;

    autoplayRef.current = setInterval(() => {
      setActive((current) => {
        const next =
          current + 1 >= total
            ? 0
            : current + 1;

        requestAnimationFrame(() => {
          goTo(next);
        });

        return next;
      });
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [paused, total, goTo]);

  /* ------------------------------------------------------------------------ */
  /* Track active card                                                        */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let timeout: ReturnType<typeof setTimeout> | null = null;

    const updateActive = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        const cards = Array.from(
          track.querySelectorAll<HTMLElement>(
            "[data-service-index]",
          ),
        );

        if (!cards.length) return;

        const center =
          track.scrollLeft +
          track.clientWidth / 2;

        let closest = 0;
        let distance = Infinity;

        cards.forEach((card, index) => {
          const cardCenter =
            card.offsetLeft +
            card.offsetWidth / 2;

          const currentDistance =
            Math.abs(center - cardCenter);

          if (currentDistance < distance) {
            distance = currentDistance;
            closest = index;
          }
        });

        setActive(closest);
      }, 100);
    };

    track.addEventListener(
      "scroll",
      updateActive,
      { passive: true },
    );

    return () => {
      track.removeEventListener(
        "scroll",
        updateActive,
      );

      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /* Empty                                                                    */
  /* ------------------------------------------------------------------------ */

  if (!services.length) {
    return null;
  }

  /* ------------------------------------------------------------------------ */
  /* Render                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      className={`
        relative
        w-full
        overflow-hidden
        bg-[#F4F1EA]
        py-24
        md:py-32
        lg:py-36
        ${className}
      `}
    >
      {/* ==================================================================== */}
      {/* INTRO                                                                 */}
      {/* ==================================================================== */}

      <div
        className="
          w-full
          px-6
          md:px-10
          lg:px-14
        "
      >
        <div
          className="
            grid
            w-full
            gap-12
            lg:grid-cols-[1fr_360px]
            lg:items-end
          "
        >

          {/* -------------------------------------------------------------- */}
          {/* LEFT                                                               */}
          {/* -------------------------------------------------------------- */}

          <div>

            <div
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.28em]
                  text-[#B98520]
                "
              >
                04
              </span>

              <span
                className="
                  h-px
                  w-10
                  bg-[#B98520]/60
                "
              />

              <span
                className="
                  font-sans
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#11100E]/40
                "
              >
                Our services
              </span>
            </div>

            <h2
              className="
                max-w-[820px]
                font-display
                text-[clamp(4rem,8vw,8.5rem)]
                font-normal
                leading-[0.78]
                tracking-[-0.075em]
                text-[#11100E]
              "
            >
              Warmth
              <br />

              <span className="italic text-[#F2B84B]">
                considered.
              </span>
            </h2>

          </div>


          {/* -------------------------------------------------------------- */}
          {/* RIGHT                                                              */}
          {/* -------------------------------------------------------------- */}

          <div className="lg:pb-2">

            <div
              className="
                max-w-[330px]
                border-l
                border-[#11100E]/12
                pl-5
              "
            >
              <p
                className="
                  font-sans
                  text-[12px]
                  leading-[1.8]
                  text-[#11100E]/50
                "
              >
                From the first room survey to the
                final control setting, every part of
                the system is designed around the
                architecture it serves.
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.2em]
                    text-[#11100E]/30
                  "
                >
                  06 SERVICES
                </span>

                <span
                  className="
                    h-px
                    flex-1
                    bg-[#11100E]/10
                  "
                />
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* ==================================================================== */}
      {/* SERVICE RAIL                                                          */}
      {/* ==================================================================== */}

      <div className="mt-20 md:mt-24">

        <div
          ref={trackRef}
          className="
            flex
            w-full
            gap-4
            overflow-x-auto
            px-6
            pb-8
            snap-x
            snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            md:gap-5
            md:px-10
            lg:px-14
          "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >

          {services.map((service, index) => {
            const meta =
              SERVICE_META[
                index % SERVICE_META.length
              ];

            const isActive = active === index;

            return (
              <motion.article
                key={service.id}
                data-service-index={index}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: Math.min(index * 0.06, 0.3),
                  ease: EASE,
                }}
                animate={{
                  y: isActive ? -8 : 0,
                }}
                className="
                  group
                  relative
                  flex
                  min-w-[285px]
                  w-[285px]
                  snap-center
                  flex-col
                  overflow-hidden
                  border
                  border-[#11100E]/10
                  bg-[#F7F4ED]
                  md:min-w-[315px]
                  md:w-[315px]
                  lg:min-w-[330px]
                  lg:w-[330px]
                  xl:min-w-[345px]
                  xl:w-[345px]
                "
              >

                {/* ---------------------------------------------------------- */}
                {/* TOP GOLD LINE                                               */}
                {/* ---------------------------------------------------------- */}

                <motion.div
                  initial={false}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: EASE,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-full
                    origin-left
                    bg-[#F2B84B]
                  "
                />


                {/* ---------------------------------------------------------- */}
                {/* CARD TOP                                                     */}
                {/* ---------------------------------------------------------- */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    px-6
                    pt-6
                    md:px-7
                    md:pt-7
                  "
                >

                  <span
                    className={`
                      font-mono
                      text-[10px]
                      tracking-[0.22em]
                      transition-colors
                      duration-500
                      ${
                        isActive
                          ? "text-[#B98520]"
                          : "text-[#11100E]/30"
                      }
                    `}
                  >
                    {meta.number}
                  </span>

                  <span
                    className="
                      font-sans
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.24em]
                      text-[#11100E]/35
                    "
                  >
                    {meta.label}
                  </span>

                </div>


                {/* ---------------------------------------------------------- */}
                {/* ICON + TITLE                                                 */}
                {/* ---------------------------------------------------------- */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    px-6
                    pb-7
                    pt-12
                    md:px-7
                    md:pb-8
                    md:pt-14
                  "
                >

                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: isActive ? -2 : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: EASE,
                    }}
                    className="
                      mb-9
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#11100E]/10
                      text-[#11100E]
                    "
                  >
                    <span className="scale-[0.68]">
                      {service.icon}
                    </span>
                  </motion.div>


                  {/* Title */}
                  <h3
                    className="
                      max-w-[285px]
                      font-display
                      text-[2.15rem]
                      font-normal
                      leading-[0.91]
                      tracking-[-0.055em]
                      text-[#11100E]
                      md:text-[2.3rem]
                    "
                  >
                    {service.title}
                  </h3>


                  {/* Summary */}
                  <p
                    className="
                      mt-5
                      max-w-[270px]
                      font-sans
                      text-[11px]
                      leading-[1.75]
                      text-[#11100E]/45
                    "
                  >
                    {service.summary}
                  </p>


                  {/* -------------------------------------------------------- */}
                  {/* BOTTOM                                                      */}
                  {/* -------------------------------------------------------- */}

                  <div
                    className="
                      mt-auto
                      pt-12
                    "
                  >

                    <div
                      className="
                        flex
                        items-end
                        justify-between
                        border-t
                        border-[#11100E]/10
                        pt-4
                      "
                    >

                      <div>

                        <span
                          className="
                            block
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-[#11100E]/25
                          "
                        >
                          System
                        </span>

                        <span
                          className="
                            mt-1
                            block
                            font-sans
                            text-[10px]
                            text-[#11100E]/50
                          "
                        >
                          {meta.detail}
                        </span>

                      </div>


                      <motion.div
                        animate={{
                          x: isActive ? 0 : -3,
                          y: isActive ? -3 : 0,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: EASE,
                        }}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#11100E]/10
                          text-[#11100E]/45
                        "
                      >
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.15}
                        />
                      </motion.div>

                    </div>

                  </div>

                </div>


                {/* ---------------------------------------------------------- */}
                {/* ACTIVE SIDE MARKER                                           */}
                {/* ---------------------------------------------------------- */}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scaleY: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: EASE,
                  }}
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-16
                    w-[2px]
                    origin-center
                    -translate-y-1/2
                    bg-[#F2B84B]
                  "
                />

              </motion.article>
            );
          })}

        </div>

      </div>


      {/* ==================================================================== */}
      {/* BOTTOM NAVIGATION                                                     */}
      {/* ==================================================================== */}

      <div
        className="
          mt-2
          flex
          w-full
          items-center
          justify-between
          px-6
          md:px-10
          lg:px-14
        "
      >

        {/* Progress */}
        <div className="flex items-center gap-1.5">

          {services.map((service, index) => (
            <button
              key={service.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`View ${service.title}`}
              className="
                group
                relative
                flex
                h-6
                items-center
              "
            >
              <span
                className={`
                  block
                  h-px
                  transition-all
                  duration-700
                  ${
                    index === active
                      ? "w-10 bg-[#B98520]"
                      : "w-4 bg-[#11100E]/15 group-hover:w-7 group-hover:bg-[#11100E]/30"
                  }
                `}
              />
            </button>
          ))}

        </div>


        {/* Counter + arrows */}
        <div
          className="
            flex
            items-center
            gap-5
          "
        >

          <div className="hidden items-center gap-2 sm:flex">

            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-[#B98520]
              "
            >
              {String(active + 1).padStart(2, "0")}
            </span>

            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-[#11100E]/25
              "
            >
              /
            </span>

            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-[#11100E]/30
              "
            >
              {String(total).padStart(2, "0")}
            </span>

          </div>


          <div className="flex items-center gap-1.5">

            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous service"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#11100E]/10
                text-[#11100E]/45
                transition-all
                duration-500
                hover:border-[#11100E]/25
                hover:bg-[#11100E]
                hover:text-[#F4F1EA]
              "
            >
              <ChevronLeft
                size={13}
                strokeWidth={1.15}
              />
            </button>

            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next service"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#11100E]/10
                text-[#11100E]/45
                transition-all
                duration-500
                hover:border-[#11100E]/25
                hover:bg-[#11100E]
                hover:text-[#F4F1EA]
              "
            >
              <ChevronRight
                size={13}
                strokeWidth={1.15}
              />
            </button>

          </div>

        </div>

      </div>


      {/* ==================================================================== */}
      {/* BOTTOM EDITORIAL LINE                                                */}
      {/* ==================================================================== */}

      <div
        className="
          mt-16
          px-6
          md:px-10
          lg:px-14
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.22em]
              text-[#11100E]/25
            "
          >
            HEATIFY
          </span>

          <span
            className="
              h-px
              flex-1
              bg-[#11100E]/[0.08]
            "
          />

          <span
            className="
              font-sans
              text-[8px]
              uppercase
              tracking-[0.24em]
              text-[#11100E]/25
            "
          >
            Designed beneath the architecture
          </span>
        </div>
      </div>

    </section>
  );
}