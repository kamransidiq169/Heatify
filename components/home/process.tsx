"use client";

import { useEffect, useRef } from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/* ================================================================    HEATIFY — ENGINEERING PROCESS
   Premium Editorial / Architectural / Technical
   ================================================================ */

const PROCESS = [
  {
    number: "01",
    kicker: "DISCOVER",
    title: "Understand the space",
    description:
      "We start with the room, the floor construction and the way the space will actually be used.",
    details: [
      "Room requirements",
      "Existing floor condition",
      "Heating expectations",
    ],
    coordinate: "24° 18' / A01",
    side: "left",
  },
  {
    number: "02",
    kicker: "MAP",
    title: "Read the floor",
    description:
      "We assess the available floor build-up and identify where the heating system can work most effectively.",
    details: [
      "Floor build-up",
      "Insulation requirements",
      "Available installation depth",
    ],
    coordinate: "24° 31' / B02",
    side: "right",
  },
  {
    number: "03",
    kicker: "ENGINEER",
    title: "Design the system",
    description:
      "Heating zones, element placement and control strategy are planned around the actual space.",
    details: [
      "Heating layout",
      "Zone planning",
      "Control strategy",
    ],
    coordinate: "24° 44' / C03",
    side: "left",
  },
  {
    number: "04",
    kicker: "INSTALL",
    title: "Build beneath the surface",
    description:
      "The approved system is installed carefully within the floor build-up, ready for the finished surface.",
    details: [
      "System installation",
      "Element positioning",
      "Connection checks",
    ],
    coordinate: "24° 57' / D04",
    side: "right",
  },
  {
    number: "05",
    kicker: "COMMISSION",
    title: "Tune the warmth",
    description:
      "Before handover, every installed zone is checked and the control system is prepared for everyday use.",
    details: [
      "Circuit testing",
      "Zone calibration",
      "System handover",
    ],
    coordinate: "25° 10' / E05",
    side: "left",
  },
] as const;

const TOTAL = PROCESS.length;

const GOLD = "#F2B84B";
const BACKGROUND = "#11100E";

/* ================================================================
   SCROLL CHOREOGRAPHY
   ================================================================ */

function getStepRange(index: number): [number, number] {
  const start = 0.05 + index * 0.17;
  const end = Math.min(start + 0.27, 0.99);

  return [start, end];
}

/* ================================================================
   AUDIO ENGINE
   ================================================================ */

let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    if (!sharedAudioCtx) {
      const AudioContextClass =
        window.AudioContext ||
        (
          window as unknown as {
            webkitAudioContext?: typeof AudioContext;
          }
        ).webkitAudioContext;

      if (!AudioContextClass) {
        return null;
      }

      sharedAudioCtx = new AudioContextClass();
    }

    return sharedAudioCtx;
  } catch {
    return null;
  }
}

/* ================================================================
   AUDIO UNLOCK
   ================================================================ */

async function unlockAudioContext() {
  const ctx = getAudioContext();

  if (!ctx) {
    return;
  }

  try {
    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    /*
     * Tiny silent buffer.
     * Helps Safari/Chrome unlock the audio graph after
     * a real user gesture.
     */
    const buffer = ctx.createBuffer(
      1,
      1,
      ctx.sampleRate,
    );

    const source =
      ctx.createBufferSource();

    source.buffer = buffer;

    source.connect(ctx.destination);

    source.start(0);

    source.onended = () => {
      try {
        source.disconnect();
      } catch {
        // Ignore cleanup errors.
      }
    };
  } catch {
    // Audio is optional.
  }
}

/* ================================================================
   LETTER CHIME
   ================================================================ */

const CHIME_SCALE = [
  659.25,
  783.99,
  880,
  1046.5,
  1174.66,
  1318.51,
  1567.98,
  1760,
  1975.53,
  2093,
];

function playLetterChime(index: number) {
  const ctx = getAudioContext();

  if (!ctx) {
    return;
  }

  if (ctx.state !== "running") {
    return;
  }

  try {
    const now = ctx.currentTime;

    const frequency =
      CHIME_SCALE[
        index % CHIME_SCALE.length
      ];

    const master =
      ctx.createGain();

    master.gain.setValueAtTime(
      0.045,
      now,
    );

    master.connect(ctx.destination);

    const oscillator =
      ctx.createOscillator();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      frequency * 0.97,
      now,
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      frequency,
      now + 0.035,
    );

    const gain =
      ctx.createGain();

    gain.gain.setValueAtTime(
      0.0001,
      now,
    );

    gain.gain.exponentialRampToValueAtTime(
      0.65,
      now + 0.01,
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + 0.22,
    );

    const filter =
      ctx.createBiquadFilter();

    filter.type = "lowpass";

    filter.frequency.setValueAtTime(
      4500,
      now,
    );

    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    oscillator.start(now);
    oscillator.stop(now + 0.24);

    oscillator.onended = () => {
      try {
        oscillator.disconnect();
        filter.disconnect();
        gain.disconnect();
        master.disconnect();
      } catch {
        // Ignore cleanup errors.
      }
    };
  } catch {
    // Never break scrolling because of audio.
  }
}

/* ================================================================
   CARD POP
   ================================================================ */

function playCardPop() {
  const ctx = getAudioContext();

  if (!ctx) {
    return;
  }

  if (ctx.state !== "running") {
    return;
  }

  try {
    const now = ctx.currentTime;

    const master =
      ctx.createGain();

    master.gain.setValueAtTime(
      0.055,
      now,
    );

    master.connect(ctx.destination);

    /* ---------------------------
       Main body
       --------------------------- */

    const body =
      ctx.createOscillator();

    body.type = "sine";

    body.frequency.setValueAtTime(
      160,
      now,
    );

    body.frequency.exponentialRampToValueAtTime(
      340,
      now + 0.05,
    );

    body.frequency.exponentialRampToValueAtTime(
      220,
      now + 0.11,
    );

    const bodyGain =
      ctx.createGain();

    bodyGain.gain.setValueAtTime(
      0.0001,
      now,
    );

    bodyGain.gain.exponentialRampToValueAtTime(
      0.75,
      now + 0.008,
    );

    bodyGain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + 0.16,
    );

    const bodyFilter =
      ctx.createBiquadFilter();

    bodyFilter.type = "lowpass";

    bodyFilter.frequency.setValueAtTime(
      1400,
      now,
    );

    body.connect(bodyFilter);
    bodyFilter.connect(bodyGain);
    bodyGain.connect(master);

    body.start(now);
    body.stop(now + 0.18);

    /* ---------------------------
       Soft overtone
       --------------------------- */

    const overtone =
      ctx.createOscillator();

    overtone.type = "triangle";

    overtone.frequency.setValueAtTime(
      980,
      now,
    );

    overtone.frequency.exponentialRampToValueAtTime(
      760,
      now + 0.09,
    );

    const overtoneGain =
      ctx.createGain();

    overtoneGain.gain.setValueAtTime(
      0.0001,
      now,
    );

    overtoneGain.gain.exponentialRampToValueAtTime(
      0.1,
      now + 0.008,
    );

    overtoneGain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + 0.1,
    );

    overtone.connect(overtoneGain);
    overtoneGain.connect(master);

    overtone.start(now);
    overtone.stop(now + 0.12);

    body.onended = () => {
      try {
        body.disconnect();
        bodyFilter.disconnect();
        bodyGain.disconnect();
      } catch {
        // Ignore cleanup errors.
      }
    };

    overtone.onended = () => {
      try {
        overtone.disconnect();
        overtoneGain.disconnect();
        master.disconnect();
      } catch {
        // Ignore cleanup errors.
      }
    };
  } catch {
    // Never break scrolling because of audio.
  }
}

/* ================================================================
   HEADING
   ================================================================ */

const HEADING = "OUR PROCESS";
const OUR_LENGTH = 9;

/* ================================================================
   HEADING CHARACTER
   ================================================================ */

function HeadingChar({
  char,
  index,
  progress,
}: {
  char: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.018;
  const end = start + 0.16;

  const y = useTransform(
    progress,
    [start, end],
    [80, 0],
  );

  const opacity = useTransform(
    progress,
    [start, end],
    [0.05, 1],
  );

  const scale = useTransform(
    progress,
    [start, end],
    [1.12, 1],
  );

  const blur = useTransform(
    progress,
    [start, end],
    [8, 0],
  );

  const isOrange = index >= OUR_LENGTH;

  return (
    <motion.span
      style={{
        y,
        opacity,
        scale,
        filter: blur,
      }}
      className={
        isOrange
          ? "inline-block text-[#F2B84B]"
          : "inline-block text-white"
      }
    >
      {char === " "
        ? "\u00A0"
        : char}
    </motion.span>
  );
}

/* ================================================================
   EDITORIAL HEADING
   ================================================================ */

function EditorialHeading({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const y = useTransform(
    progress,
    [0, 0.18],
    [45, 0],
  );

  const opacity = useTransform(
    progress,
    [0, 0.08],
    [0.75, 1],
  );

  const scale = useTransform(
    progress,
    [0, 0.2],
    [1.03, 1],
  );

  const chars = HEADING.split("");

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
      }}
      className="
        pointer-events-none
        absolute
        left-0
        top-[10%]
        z-20
        w-full
        px-5
        sm:px-8
        lg:px-12
      "
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#F2B84B] sm:w-12" />

          <span className="font-sans text-[9px] font-medium uppercase tracking-[0.28em] text-[#F2B84B] sm:text-[10px]">
            HOW WE BUILD WARMTH
          </span>
        </div>            <h2
              className="
                mt-5
                flex
                max-w-[1250px]
                flex-wrap
                font-display
                font-normal
                uppercase
                leading-[0.78]
                tracking-[-0.065em]
              "
              style={{
                fontSize: 'clamp(3rem, 12vw, 14vw)',
              }}
            >
          {chars.map(
            (char, index) => (
              <HeadingChar
                key={`${char}-${index}`}
                char={char}
                index={index}
                progress={progress}
              />
            ),
          )}
        </h2>
      </div>
    </motion.div>
  );
}

/* ================================================================
   FLOOR BLUEPRINT
   ================================================================ */

function FloorBlueprint({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const circuitProgress =
    useTransform(
      progress,
      [0, 0.8],
      [0, 1],
    );

  const secondaryProgress =
    useTransform(
      progress,
      [0.1, 0.9],
      [0, 1],
    );

  const glowOpacity =
    useTransform(
      progress,
      [0, 0.15, 0.55, 1],
      [0.2, 0.8, 0.45, 0.12],
    );

  const blueprintOpacity =
    useTransform(
      progress,
      [0, 0.08, 0.9, 1],
      [0.25, 0.75, 0.75, 0.35],
    );

  return (
    <motion.div
      style={{
        opacity: blueprintOpacity,
      }}
      className="
        pointer-events-none
        absolute
        left-1/2
        top-[57%]
        z-[3]
        h-[320px]
        w-[min(90vw,760px)]
        -translate-x-1/2
        -translate-y-1/2
        sm:h-[380px]
        lg:top-[54%]
        lg:h-[590px]
      "
    >
      {/* frame */}

      <div className="absolute inset-[7%] border border-white/[0.08]" />

      <div className="absolute inset-[10%] border border-dashed border-white/[0.045]" />

      {/* corners */}

      <div className="absolute left-[7%] top-[7%] h-3 w-3 border-l border-t border-[#F2B84B]/50" />

      <div className="absolute right-[7%] top-[7%] h-3 w-3 border-r border-t border-[#F2B84B]/50" />

      <div className="absolute bottom-[7%] left-[7%] h-3 w-3 border-b border-l border-[#F2B84B]/50" />

      <div className="absolute bottom-[7%] right-[7%] h-3 w-3 border-b border-r border-[#F2B84B]/50" />

      {/* grid */}

      <div
        className="absolute inset-[10%] opacity-[0.065]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "38px 38px",
        }}
      />

      {/* heating circuit */}

      <svg
        viewBox="0 0 700 500"
        className="
          absolute
          inset-[13%]
          h-[74%]
          w-[74%]
          overflow-visible
        "
        fill="none"
      >
        <path
          d="
            M 90 80
            H 610
            V 420
            H 90
            V 145
            H 555
            V 355
            H 145
            V 190
            H 500
            V 310
            H 200
            V 235
            H 445
            V 265
            H 255
          "
          stroke="rgba(255,255,255,.1)"
          strokeWidth="2"
        />

        <motion.path
          d="
            M 90 80
            H 610
            V 420
            H 90
            V 145
            H 555
            V 355
            H 145
            V 190
            H 500
            V 310
            H 200
            V 235
            H 445
            V 265
            H 255
          "
          pathLength={1}
          style={{
            pathLength: circuitProgress,
          }}
          stroke={GOLD}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="
            M 130 110
            H 570
            V 390
            H 130
            V 175
            H 525
            V 325
            H 175
            V 205
            H 475
            V 295
            H 225
            V 245
            H 425
            V 275
            H 275
          "
          pathLength={1}
          style={{
            pathLength:
              secondaryProgress,
          }}
          stroke="rgba(242,184,75,.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* nodes */}

        <circle
          cx="90"
          cy="80"
          r="7"
          stroke="rgba(255,255,255,.3)"
          strokeWidth="1"
        />

        <circle
          cx="610"
          cy="420"
          r="7"
          stroke="rgba(255,255,255,.3)"
          strokeWidth="1"
        />

        <circle
          cx="255"
          cy="265"
          r="5"
          fill={GOLD}
        />

        <circle
          cx="255"
          cy="265"
          r="11"
          stroke="rgba(242,184,75,.2)"
          strokeWidth="1"
        />
      </svg>

      {/* glow */}

      <motion.div
        style={{
          opacity: glowOpacity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[180px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F2B84B]/20
          blur-[75px]
        "
      />

      {/* center module */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#F2B84B]/35 bg-[#11100E]/80 backdrop-blur-md">
          <div className="text-center">
            <span className="block font-sans text-[7px] uppercase tracking-[0.25em] text-white/35">
              FLOOR
            </span>

            <span className="mt-1 block font-display text-[17px] text-[#F2B84B]">
              HEAT
            </span>
          </div>
        </div>
      </div>

      {/* technical labels */}

      <span className="absolute left-[10%] top-[18%] font-mono text-[6px] uppercase tracking-[0.2em] text-white/20">
        CIRCUIT / A01
      </span>

      <span className="absolute right-[10%] bottom-[18%] font-mono text-[6px] uppercase tracking-[0.2em] text-white/20">
        ZONE / 01
      </span>
    </motion.div>
  );
}

/* ================================================================
   PROCESS CARD
   ================================================================ */

function ProcessCard({
  step,
  index,
  progress,
}: {
  step: (typeof PROCESS)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const [start, end] =
    getStepRange(index);

  const enterStart =
    Math.max(0, start - 0.035);

  const opacity =
    useTransform(
      progress,
      [
        enterStart,
        start,
        end - 0.04,
        end,
      ],
      [0, 1, 1, 0.92],
    );

  const y =
    useTransform(
      progress,
      [
        Math.max(0, start - 0.02),
        end,
      ],
      [
        index % 2 === 0
          ? 130
          : 170,
        0,
      ],
    );

  const x =
    useTransform(
      progress,
      [
        Math.max(0, start - 0.02),
        end,
      ],
      [
        step.side === "left"
          ? -70 - index * 8
          : 70 + index * 8,
        0,
      ],
    );

  const scale =
    useTransform(
      progress,
      [
        Math.max(0, start - 0.02),
        start + 0.08,
      ],
      [0.88, 1],
    );

  const rotate =
    useTransform(
      progress,
      [
        Math.max(0, start - 0.02),
        end,
      ],
      [
        step.side === "left"
          ? -6
          : 6,
        step.side === "left"
          ? -1.2
          : 1.2,
      ],
    );

  const numberOpacity =
    useTransform(
      progress,
      [start, start + 0.08],
      [0.04, 1],
    );

  return (
    <motion.article
      style={{
        opacity,
        y,
        x,
        scale,
        rotate,
      }}
      className="
        absolute
        left-1/2
        top-[57%]
        z-30
        w-[min(88vw,340px)]
        -translate-x-1/2
        -translate-y-1/2
        border
        border-white/[0.11]
        bg-[#171512]/95
        p-4
        shadow-[0_30px_100px_rgba(0,0,0,.35)]
        backdrop-blur-xl
        sm:w-[370px]
        sm:p-5
        lg:top-[55%]
        lg:w-[390px]
      "
    >
      {/* top metadata */}

      <div className="flex items-center justify-between border-b border-white/[0.09] pb-4">
        <span className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-[#F2B84B]">
          {step.kicker}
        </span>

        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
          {step.coordinate}
        </span>
      </div>

      {/* number + title */}

      <div className="relative mt-5 overflow-hidden">
        <motion.span
          style={{
            opacity: numberOpacity,
          }}
          className="
            absolute
            -right-1
            -top-5
            font-display
            text-[90px]
            leading-none
            text-white/[0.035]
          "
        >
          {step.number}
        </motion.span>

        <span className="relative font-mono text-[10px] text-white/35">
          / {step.number}
        </span>

        <h3
          className="
            relative
            mt-3
            max-w-[260px]
            font-display
            text-[28px]
            font-normal
            leading-[0.94]
            tracking-[-0.035em]
            text-white
            sm:text-[32px]
            sm:max-w-[290px]
            md:text-[34px]
          "
        >
          {step.title}
        </h3>
      </div>

      {/* description */}

      <p className="mt-5 max-w-[300px] font-sans text-[11px] leading-[1.65] text-white/50 sm:text-xs">
        {step.description}
      </p>

      {/* details */}

      <div className="mt-6 border-t border-white/[0.09]">
        {step.details.map(
          (detail, detailIndex) => (
            <div
              key={detail}
              className="
                flex
                items-center
                justify-between
                border-b
                border-dashed
                border-white/[0.08]
                py-3
              "
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] text-[#F2B84B]/70">
                  0{detailIndex + 1}
                </span>

                <span className="font-sans text-[10px] text-white/60">
                  {detail}
                </span>
              </div>

              <span className="h-1 w-1 rounded-full bg-[#F2B84B]" />
            </div>
          ),
        )}
      </div>

      {/* footer */}

      <div className="mt-5 flex items-end justify-between">
        <div>
          <span className="block font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">             HEATIFY
          </span>

          <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
            ENGINEERED COMFORT
          </span>
        </div>

        <div className="relative h-9 w-20 overflow-hidden border border-white/[0.09]">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  transparent 48%,
                  rgba(242,184,75,.45) 49%,
                  rgba(242,184,75,.45) 51%,
                  transparent 52%
                ),
                linear-gradient(
                  0deg,
                  transparent 48%,
                  rgba(255,255,255,.15) 49%,
                  rgba(255,255,255,.15) 51%,
                  transparent 52%
                )
              `,
              backgroundSize:
                "12px 12px",
            }}
          />

          <div className="absolute bottom-2 left-2 h-px w-14 bg-[#F2B84B]/50" />
        </div>
      </div>
    </motion.article>
  );
}

/* ================================================================
   CHAPTER ITEM
   ================================================================ */

function ChapterItem({
  step,
  index,
  progress,
}: {
  step: (typeof PROCESS)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const [start] =
    getStepRange(index);

  const opacity =
    useTransform(
      progress,
      [
        Math.max(
          0,
          start - 0.06,
        ),
        start,
        start + 0.08,
      ],
      [0.25, 1, 1],
    );

  const width =
    useTransform(
      progress,
      [
        Math.max(
          0,
          start - 0.04,
        ),
        start + 0.08,
      ],
      ["0%", "100%"],
    );

  return (
    <div className="flex flex-1 items-center">
      <div className="relative flex w-full items-center">
        <div className="h-px w-full bg-white/[0.08]" />

        <motion.div
          style={{
            width,
            opacity,
          }}
          className="absolute left-0 top-0 h-px bg-[#F2B84B]"
        />

        <motion.div
          style={{
            opacity,
          }}
          className="
            absolute
            left-0
            top-1/2
            flex
            -translate-y-1/2
            items-center
            justify-center
          "
        >
          <div className="h-2 w-2 rounded-full border border-[#F2B84B] bg-[#11100E]" />
        </motion.div>

        <span className="absolute left-0 top-4 whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
          {step.number} /{" "}
          {step.kicker}
        </span>
      </div>
    </div>
  );
}

/* ================================================================
   CHAPTER RAIL
   ================================================================ */

function ChapterRail({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  return (
    <div className="absolute bottom-7 left-1/2 z-50 hidden w-[min(92vw,700px)] -translate-x-1/2 md:block">
      <div className="flex items-center justify-between">
        {PROCESS.map(
          (step, index) => (
            <ChapterItem
              key={step.number}
              step={step}
              index={index}
              progress={progress}
            />
          ),
        )}
      </div>
    </div>
  );
}

/* ================================================================
   RIGHT PROGRESS INDICATOR
   ================================================================ */

function RightProgress({
  progress,
  opacity,
}: {
  progress: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  const height =
    useTransform(
      progress,
      [0, 1],
      ["0%", "100%"],
    );

  return (
    <motion.div
      style={{
        opacity,
      }}
      className="
        absolute
        right-5
        top-1/2
        z-50
        hidden
        -translate-y-1/2
        lg:block
      "
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20 [writing-mode:vertical-rl]">
          ENGINEERED UNDERFOOT
        </span>

        <div className="relative h-24 w-px bg-white/[0.12]">
          <motion.div
            style={{
              height,
            }}
            className="absolute left-0 top-0 w-full bg-[#F2B84B]"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ================================================================
   MAIN PROCESS
   ================================================================ */

export function Process() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const firedLetters =
    useRef<boolean[]>(
      new Array(
        HEADING.length,
      ).fill(false),
    );

  const firedCards =
    useRef<boolean[]>(
      new Array(TOTAL).fill(false),
    );

  /* ==============================================================
     AUDIO UNLOCK
     ============================================================== */

  useEffect(() => {
    let unlocked = false;

    const unlock = () => {
      if (unlocked) {
        return;
      }

      unlocked = true;

      void unlockAudioContext();

      window.removeEventListener(
        "pointerdown",
        unlock,
      );

      window.removeEventListener(
        "keydown",
        unlock,
      );

      window.removeEventListener(
        "touchstart",
        unlock,
      );

      window.removeEventListener(
        "wheel",
        unlock,
      );
    };

    /*
     * pointerdown:
     * Desktop mouse + mobile touch.
     */
    window.addEventListener(
      "pointerdown",
      unlock,
      { passive: true },
    );

    /*
     * Keyboard navigation.
     */
    window.addEventListener(
      "keydown",
      unlock,
    );

    /*
     * Older mobile Safari support.
     */
    window.addEventListener(
      "touchstart",
      unlock,
      { passive: true },
    );

    /*
     * Scroll interaction.
     */
    window.addEventListener(
      "wheel",
      unlock,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "pointerdown",
        unlock,
      );

      window.removeEventListener(
        "keydown",
        unlock,
      );

      window.removeEventListener(
        "touchstart",
        unlock,
      );

      window.removeEventListener(
        "wheel",
        unlock,
      );
    };
  }, []);

  /* ==============================================================
     SCROLL PROGRESS
     ============================================================== */

  const { scrollYProgress } =
    useScroll({
      target: sectionRef,
      offset: [
        "start start",
        "end end",
      ],
    });

  /* ==============================================================
     BACKGROUND
     ============================================================== */

  const backgroundScale =
    useTransform(
      scrollYProgress,
      [0, 1],
      [1, 1.08],
    );

  const backgroundY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, -25],
    );

  const gridOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.15, 0.8, 1],
      [0.06, 0.09, 0.07, 0.04],
    );

  /* ==============================================================
     CORNER INFORMATION
     ============================================================== */

  const cornerOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.12, 0.8, 1],
      [0.55, 1, 1, 0.35],
    );

  /* ==============================================================
     FINAL STATEMENT
     ============================================================== */

  const finalStatementOpacity =
    useTransform(
      scrollYProgress,
      [0.76, 0.88, 1],
      [0, 1, 1],
    );

  const finalStatementY =
    useTransform(
      scrollYProgress,
      [0.76, 0.88],
      [35, 0],
    );

  /* ==============================================================
     SOUND SYNCHRONIZATION
     ============================================================== */

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      /*
       * Heading sounds
       */
      HEADING.split("").forEach(
        (_, index) => {
          const start =
            index * 0.018;

          const end =
            start + 0.16;

          const mid =
            (start + end) / 2;

          if (
            !firedLetters.current[
              index
            ] &&
            latest >= mid
          ) {
            firedLetters.current[
              index
            ] = true;

            playLetterChime(index);
          }

          /*
           * Allow sound to fire again
           * when scrolling backwards.
           */
          if (
            firedLetters.current[
              index
            ] &&
            latest <
              start - 0.008
          ) {
            firedLetters.current[
              index
            ] = false;
          }
        },
      );

      /*
       * Card sounds
       */
      PROCESS.forEach(
        (_, index) => {
          const [start, end] =
            getStepRange(index);

          const mid =
            start +
            (end - start) *
              0.35;

          if (
            !firedCards.current[
              index
            ] &&
            latest >= mid
          ) {
            firedCards.current[
              index
            ] = true;

            playCardPop();
          }

          /*
           * Allow card sound to fire
           * again when scrolling backwards.
           */
          if (
            firedCards.current[
              index
            ] &&
            latest <
              start - 0.008
          ) {
            firedCards.current[
              index
            ] = false;
          }
        },
      );
    },
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        min-h-[600vh]
        bg-[#11100E]
      "
    >
      {/* ========================================================
          STICKY STAGE
         ======================================================== */}

      <div
        className="
          sticky
          top-0
          h-[100svh]
          min-h-[680px]
          w-full
          overflow-hidden
          bg-[#11100E]
        "
      >
        {/* ======================================================
            BACKGROUND
           ====================================================== */}

        <motion.div
          style={{
            scale:
              backgroundScale,
            y: backgroundY,
          }}
          className="pointer-events-none absolute inset-0"
        >
          {/* grid */}

          <motion.div
            style={{
              opacity: gridOpacity,
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    rgba(255,255,255,.45) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    rgba(255,255,255,.45) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize:
                  "80px 80px",
              }}
            />
          </motion.div>

          {/* atmosphere */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[650px]
              w-[650px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              blur-[150px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(242,184,75,.09) 0%, transparent 68%)",
            }}
          />

          {/* vignette */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.48)_100%)]" />
        </motion.div>

        {/* ======================================================
            TOP BRAND LINE
           ====================================================== */}

        <div className="absolute left-0 top-0 z-[100] w-full px-5 pt-6 sm:px-8 lg:px-12 lg:pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F2B84B]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/45">
                HEATIFY / 05 STAGES
              </span>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
              SYSTEM / 01
            </span>
          </div>
        </div>

        {/* ======================================================
            HEADING
           ====================================================== */}

        <EditorialHeading
          progress={
            scrollYProgress
          }
        />

        {/* ======================================================
            BLUEPRINT
           ====================================================== */}

        <FloorBlueprint
          progress={
            scrollYProgress
          }
        />

        {/* ======================================================
            PROCESS CARDS
           ====================================================== */}

        <div className="absolute inset-0">
          {PROCESS.map(
            (step, index) => (
              <ProcessCard
                key={step.number}
                step={step}
                index={index}
                progress={
                  scrollYProgress
                }
              />
            ),
          )}
        </div>

        {/* ======================================================
            FINAL STATEMENT
           ====================================================== */}

        <motion.div
          style={{
            opacity:
              finalStatementOpacity,
            y: finalStatementY,
          }}
          className="
            pointer-events-none
            absolute
            bottom-[14%]
            left-1/2
            z-40
            w-[92vw]
            -translate-x-1/2
            text-center
          "
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#F2B84B]">
            THE RESULT
          </span>

          <p
            className="
              mx-auto
              mt-3
              max-w-[720px]
              font-display
              text-[22px]
              leading-[1.05]
              tracking-[-0.025em]
              text-white
              sm:text-[28px]
              md:text-[34px]
              lg:text-[42px]
            "
          >
            A heating system designed
            to disappear — leaving
            only the feeling of warmth
            behind.
          </p>
        </motion.div>

        {/* ======================================================
            CHAPTER RAIL
           ====================================================== */}

        <ChapterRail
          progress={
            scrollYProgress
          }
        />

        {/* ======================================================
            LEFT TECHNICAL DATA
           ====================================================== */}

        <motion.div
          style={{
            opacity: cornerOpacity,
          }}
          className="
            absolute
            bottom-7
            left-5
            z-50
            hidden
            lg:block
          "
        >
          <div className="font-mono text-[7px] uppercase leading-[1.8] tracking-[0.16em] text-white/25">
            <span className="block">
              FLOOR / HEATING / SYSTEM
            </span>

            <span className="block">
              DESIGN / INSTALLATION
            </span>

            <span className="block">
              COMMISSION / HANDOVER
            </span>
          </div>
        </motion.div>

        {/* ======================================================
            RIGHT PROGRESS
           ====================================================== */}

        <RightProgress
          progress={
            scrollYProgress
          }
          opacity={
            cornerOpacity
          }
        />

        {/* ======================================================
            MOBILE PROGRESS
           ====================================================== */}

        <div className="absolute bottom-4 left-4 right-4 z-50 md:hidden">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
              PROCESS
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#F2B84B]">
              SCROLL TO EXPLORE
            </span>
          </div>

          <div className="relative h-px w-full bg-white/[0.1]">
            <motion.div
              style={{
                scaleX:
                  scrollYProgress,
              }}
              className="
                absolute
                left-0
                top-0
                h-px
                w-full
                origin-left
                bg-[#F2B84B]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;