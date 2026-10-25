


// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowUpRight,
//   BadgeCheck,
//   Quote,
// } from "lucide-react";

// import { testimonials } from "@/lib/site";

// const EASE = [0.22, 1, 0.36, 1] as const;
// const GOLD = "#F2B84B";
// const CREAM = "#F4F1EA";
// const DARK = "#11100E";
// const AUTOPLAY_DELAY = 8500;

// function initials(name: string) {
//   return name
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((part) => part[0]?.toUpperCase())
//     .join("");
// }

// function ClientAvatar({ name }: { name: string }) {
//   return (
//     <div
//       aria-hidden="true"
//       className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black/[0.035] sm:size-14"
//     >
//       <div className="absolute inset-1 rounded-full border border-[#F2B84B]/35" />
//       <div className="absolute inset-[7px] rounded-full border border-black/[0.06]" />

//       <span className="relative z-10 font-sans text-[11px] font-medium tracking-[0.12em] text-[#11100E]/75">
//         {initials(name)}
//       </span>

//       <span className="absolute bottom-1.5 right-1.5 size-1.5 rounded-full bg-[#F2B84B]" />
//     </div>
//   );
// }

// function TestimonialNavItem({
//   testimonial,
//   index,
//   active,
//   onClick,
// }: {
//   testimonial?: (typeof testimonials)[number];
//   index: number;
//   active: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-current={active ? "true" : undefined}
//       aria-label={`Read testimonial from ${testimonial.name}`}
//       className="
//         group relative flex min-h-[64px] w-full items-center gap-3
//         border-b border-black/[0.09] py-4 text-left
//         outline-none transition-colors duration-300
//         focus-visible:ring-2 focus-visible:ring-inset
//         focus-visible:ring-[#B98520]
//         first:pt-0 last:border-b-0
//         sm:min-h-0 sm:gap-4 sm:py-5
//         lg:first:pt-0
//       "
//     >
//       <span className="absolute -left-3 top-0 h-full w-px bg-transparent sm:-left-5 lg:-left-6">
//         <motion.span
//           initial={false}
//           animate={{ scaleY: active ? 1 : 0 }}
//           transition={{ duration: 0.45, ease: EASE }}
//           className="absolute inset-0 origin-top bg-[#F2B84B]"
//         />
//       </span>

//       <span
//         className={`w-7 shrink-0 font-mono text-[9px] tracking-[0.15em] transition-colors duration-300 ${
//           active ? "text-[#B98520]" : "text-black/30"
//         }`}
//       >
//         {String(index + 1).padStart(2, "0")}
//       </span>

//       <div className="min-w-0 flex-1">
//         <p
//           className={`break-words font-sans text-[12px] font-medium leading-snug tracking-[-0.01em] transition-colors duration-300 sm:text-[12px] ${
//             active
//               ? "text-[#11100E]"
//               : "text-black/55 group-hover:text-black/80"
//           }`}
//         >
//           {testimonial.name}
//         </p>

//         <p className="mt-1 break-words font-sans text-[9px] uppercase leading-relaxed tracking-[0.10em] text-black/40 sm:tracking-[0.12em]">
//           {testimonial.role}
//         </p>
//       </div>

//       <motion.span
//         initial={false}
//         animate={{
//           x: active ? 0 : -3,
//           opacity: active ? 1 : 0.45,
//         }}
//         transition={{ duration: 0.3, ease: EASE }}
//         className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
//           active
//             ? "bg-[#F2B84B]/15 text-[#B98520]"
//             : "text-black/30 group-hover:text-black/70"
//         }`}
//       >
//         <ArrowUpRight className="size-4" />
//       </motion.span>
//     </button>
//   );
// }

// export function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const [isInteracting, setIsInteracting] = useState(false);
//   const prefersReducedMotion = useReducedMotion();

//   const count = testimonials.length;
//   const effective = count > 0 ? testimonials : [];
//   const [current, setCurrent] = useState(0);

//   const active = effective[current];

//   useEffect(() => {
//     if (
//       count <= 1 ||
//       isInteracting ||
//       prefersReducedMotion
//     ) {
//       return;
//     }

//     let timer: ReturnType<typeof setTimeout> | undefined;

//     const scheduleNext = () => {
//       if (document.visibilityState !== "visible") {
//         return;
//       }

//       timer = setTimeout(() => {
//         setCurrent((value) => (value + 1) % count);
//       }, AUTOPLAY_DELAY);
//     };

//     const handleVisibilityChange = () => {
//       if (timer) {
//         clearTimeout(timer);
//         timer = undefined;
//       }

//       if (document.visibilityState === "visible") {
//         scheduleNext();
//       }
//     };

//     scheduleNext();
//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       if (timer) clearTimeout(timer);

//       document.removeEventListener(
//         "visibilitychange",
//         handleVisibilityChange,
//       );
//     };
//   }, [current, isInteracting, prefersReducedMotion]);

//   if (!active) return null;

//   const selectTestimonial = (index: number) => {
//     setCurrent(index);
//   };

//   return (
//     <section
//       aria-label="Client testimonials"
//       className="relative isolate overflow-clip bg-[#F4F1EA] text-[#11100E]"
//       onFocusCapture={() => setIsInteracting(true)}
//       onBlurCapture={(event) => {
//         if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
//           setIsInteracting(false);
//         }
//       }}
//       onTouchStart={() => setIsInteracting(true)}
//       onTouchEnd={() => setIsInteracting(false)}
//       onMouseEnter={() => setIsInteracting(true)}
//       onMouseLeave={() => setIsInteracting(false)}
//     >
//       {/* Background atmosphere */}

//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div
//           className="absolute left-[42%] top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] sm:size-[700px] sm:blur-[150px]"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(242,184,75,.10) 0%, transparent 68%)",
//           }}
//         />

//         <div
//           className="absolute inset-0 opacity-[0.045] sm:opacity-[0.055]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(17,16,14,.45) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(17,16,14,.45) 1px, transparent 1px)
//             `,
//             backgroundSize: "90px 90px",
//           }}
//         />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(17,16,14,.045)_100%)]" />
//       </div>

//       {/* Top architectural line */}

//       <div className="absolute left-0 right-0 top-0">
//         <div className="mx-auto h-px w-[calc(100%-32px)] max-w-[1500px] bg-black/10 sm:w-[calc(100%-64px)] lg:w-[calc(100%-96px)]" />

//         <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1500px] items-center justify-between gap-3 pt-3 sm:w-[calc(100%-64px)] sm:pt-4 lg:w-[calc(100%-96px)]">
//           <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-black/40 sm:text-[7px] sm:tracking-[0.24em]">
//             Heatify / CLIENT VOICES
//           </span>

//           <span className="text-right font-mono text-[7px] uppercase tracking-[0.12em] text-black/35 sm:tracking-[0.2em]">
//             FIELD NOTES / 01
//           </span>
//         </div>
//       </div>

//       {/* Main container */}

//       <div className="mx-auto w-full max-w-[1500px] px-4 pb-12 pt-[88px] sm:px-6 sm:pb-24 sm:pt-28 md:px-8 md:pb-28 md:pt-32 lg:px-12 lg:pb-40 lg:pt-40">
//         {/* Section introduction */}

//         <div className="mb-10 flex items-end justify-between gap-4 sm:mb-16 sm:gap-6 lg:mb-20">
//           <div className="min-w-0">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-7 shrink-0 bg-[#B98520] sm:w-12" />

//               <span className="font-sans text-[9px] font-medium uppercase tracking-[0.20em] text-[#B98520] sm:tracking-[0.28em]">
//                 TESTIMONIALS
//               </span>
//             </div>

//             <h2
//               className="mt-5 max-w-[850px] font-display text-[clamp(2.35rem,10vw,13vw)] font-normal uppercase leading-[0.88] tracking-[-0.065em] text-[#11100E] sm:mt-4 sm:leading-[0.8]"
//             >
//               <span className="block">Real spaces.</span>
//               <span className="block text-[#F2B84B]">
//                 Real warmth.
//               </span>
//             </h2>
//           </div>

//           {count > 0 && (
//             <div className="hidden shrink-0 pb-2 text-right sm:block">
//               <span className="block font-mono text-[8px] uppercase tracking-[0.22em] text-black/30">
//                 CLIENT STORIES
//               </span>

//               <div className="mt-2 flex items-baseline justify-end gap-1">
//                 <span className="font-display text-3xl text-[#B98520]">
//                   {String(current + 1).padStart(2, "0")}
//                 </span>

//                 <span className="font-mono text-[8px] text-black/25">
//                   /{String(count).padStart(2, "0")}
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Testimonial layout */}

//         <div className="grid min-w-0 gap-12 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
//           {/* Quote area */}

//           <div className="relative min-w-0 sm:min-h-[350px] lg:min-h-[480px]">
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -left-1 -top-7 select-none font-display text-[112px] leading-none text-[#B98520]/10 sm:-left-5 sm:-top-20 sm:text-[250px]"
//             >
//               “
//             </div>

//             <div className="absolute left-0 top-0 hidden h-px w-[min(40vw,430px)] bg-black/10 sm:block">
//               <motion.div
//                 key={`line-${current}`}
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{
//                   duration: prefersReducedMotion ? 0 : 0.8,
//                   ease: EASE,
//                 }}
//                 className="h-full origin-left bg-[#B98520]"
//               />
//             </div>

//             <AnimatePresence mode="wait" initial={false}>
//               <motion.div
//                 key={current}
//                 initial={
//                   prefersReducedMotion
//                     ? { opacity: 0 }
//                     : { opacity: 0, y: 22, filter: "blur(5px)" }
//                 }
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   filter: "blur(0px)",
//                 }}
//                 exit={
//                   prefersReducedMotion
//                     ? { opacity: 0 }
//                     : { opacity: 0, y: -12, filter: "blur(3px)" }
//                 }
//                 transition={{
//                   duration: prefersReducedMotion ? 0.15 : 0.5,
//                   ease: EASE,
//                 }}
//                 className="relative z-10 pt-7 sm:pt-14"
//               >
//                 <blockquote>
//                   <p className="max-w-[1000px] break-words font-display text-[clamp(1.65rem,5.5vw,8.7vw)] font-normal leading-[1.03] tracking-[-0.045em] text-[#11100E] sm:leading-[0.94] xl:text-[4.35rem]">
//                     {active.quote}
//                   </p>
//                 </blockquote>

//                 {/* Client identity */}                
// <div className="mt-8 flex min-w-0 flex-wrap items-center gap-3 sm:mt-14 sm:gap-4">
//                   {active && <ClientAvatar name={active.name} />}

//                   <div className="min-w-0 flex-1">
//                     <div className="flex flex-wrap items-center gap-2">
//                       <p className="break-words font-sans text-sm font-medium text-[#11100E]">
//                         {active.name}
//                       </p>

//                       <BadgeCheck
//                         className="size-4 shrink-0 text-[#B98520]"
//                         strokeWidth={1.5}
//                         aria-label="Verified client"
//                       />
//                     </div>

//                     <p className="mt-1 break-words font-sans text-[10px] uppercase leading-relaxed tracking-[0.10em] text-black/45 sm:tracking-[0.13em]">
//                       {active.role}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Project metadata */}

//                 <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-black/10 pt-4 sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
//                   <div className="min-w-0">
//                     <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-black/35 sm:tracking-[0.2em]">
//                       PROJECT
//                     </span>

//                     <span className="mt-1 block break-words font-sans text-[10px] leading-relaxed text-black/65">
//                       {active.project}
//                     </span>
//                   </div>

//                   <div className="min-w-0">
//                     <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-black/35 sm:tracking-[0.2em]">
//                       STATUS
//                     </span>

//                     <span className="mt-1 flex items-center gap-2 font-sans text-[10px] text-black/65">
//                       <span className="size-1.5 shrink-0 rounded-full bg-[#F2B84B]" />
//                       COMPLETED
//                     </span>
//                   </div>

//                   <div className="col-span-2 hidden items-center gap-2 sm:flex sm:flex-1 sm:justify-end">
//                     <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/30">
//                       Heatify / FIELD NOTE
//                     </span>

//                     <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-black/10">
//                       <ArrowUpRight className="size-3 text-black/45" />
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Client index */}

//           <div className="relative min-w-0 lg:border-l lg:border-black/10 lg:pl-8">
//             <div className="mb-5 flex items-center justify-between lg:hidden">
//               <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-black/40 sm:text-[8px] sm:tracking-[0.22em]">
//                 CLIENT INDEX
//               </span>

//               <span
//                 aria-live="polite"
//                 aria-atomic="true"
//                 className="font-mono text-[8px] text-[#B98520]"
//               >
//                 {String(current + 1).padStart(2, "0")}
//                 {" / "}
//                 {String(testimonials.length).padStart(2, "0")}
//               </span>
//             </div>

//             <div className="lg:pt-1">
//               {testimonials.map((testimonial, index) => (
//                 <TestimonialNavItem
//                   key={`${testimonial.name}-${index}`}
//                   testimonial={testimonial}
//                   index={index}
//                   active={index === current}
//                   onClick={() => selectTestimonial(index)}
//                 />
//               ))}
//             </div>

//             <div className="mt-10 hidden border-t border-black/10 pt-5 lg:block">
//               <div className="flex items-start justify-between gap-5">
//                 <div>
//                   <span className="block font-mono text-[7px] uppercase tracking-[0.2em] text-black/35">
//                     OUR APPROACH
//                   </span>

//                   <p className="mt-3 max-w-[190px] font-sans text-[10px] leading-[1.6] text-black/50">
//                     Every installation is designed around the space, its
//                     floor and the people who use it.
//                   </p>
//                 </div>

//                 <Quote
//                   className="size-4 shrink-0 text-[#B98520]/50"
//                   strokeWidth={1}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom signature */}

//         <div className="mt-12 border-t border-black/10 pt-4 sm:mt-20">
//           <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
//             <p className="font-sans text-[10px] leading-relaxed text-black/40">
//               Comfort is invisible. The experience is not.
//             </p>

//             <div className="flex items-center gap-3">
//               <span className="h-px w-8 bg-[#B98520]/50" />

//               <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-black/35 sm:tracking-[0.25em]">
//                 ENGINEERED COMFORT
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Architectural signature */}

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-0 right-0 hidden h-40 w-40 sm:block"
//       >
//         <div className="absolute bottom-8 right-8 size-12 rounded-full border border-[#B98520]/20" />
//         <div className="absolute bottom-[55px] right-[55px] size-2 rounded-full bg-[#F2B84B]/70" />
//       </div>
//     </section>
//   );
// }

// export default Testimonials;


"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Quote ,  } from "lucide-react";
import { testimonials } from "@/lib/site";


const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_DELAY = 8500;

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function ClientAvatar({ name }: { name: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black/[0.035] sm:size-14"
    >
      <div className="absolute inset-1 rounded-full border border-[#F2B84B]/35" />
      <div className="absolute inset-[7px] rounded-full border border-black/[0.06]" />

      <span className="relative z-10 font-sans text-[11px] font-medium tracking-[0.12em] text-[#11100E]/75">
        {initials(name)}
      </span>

      <span className="absolute bottom-1.5 right-1.5 size-1.5 rounded-full bg-[#F2B84B]" />
    </div>
  );
}

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
      aria-label={`Read testimonial from ${testimonial.name}`}
      className="
        group relative flex min-h-[64px] w-full items-center gap-3
        border-b border-black/[0.09] py-4 text-left
        outline-none transition-colors duration-300
        focus-visible:ring-2 focus-visible:ring-inset
        focus-visible:ring-[#B98520]
        first:pt-0 last:border-b-0
        sm:min-h-0 sm:gap-4 sm:py-5
        lg:first:pt-0
      "
    >
      <span className="absolute -left-3 top-0 h-full w-px bg-transparent sm:-left-5 lg:-left-6">
        <motion.span
          initial={false}
          animate={{ scaleY: active ? 1 : 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="absolute inset-0 origin-top bg-[#F2B84B]"
        />
      </span>

      <span
        className={`w-7 shrink-0 font-mono text-[9px] tracking-[0.15em] transition-colors duration-300 ${
          active ? "text-[#B98520]" : "text-black/30"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <p
          className={`break-words font-sans text-[12px] font-medium leading-snug tracking-[-0.01em] transition-colors duration-300 sm:text-[12px] ${
            active
              ? "text-[#11100E]"
              : "text-black/55 group-hover:text-black/80"
          }`}
        >
          {testimonial.name}
        </p>

        <p className="mt-1 break-words font-sans text-[9px] uppercase leading-relaxed tracking-[0.10em] text-black/40 sm:tracking-[0.12em]">
          {testimonial.role}
        </p>
      </div>

      <motion.span
        initial={false}
        animate={{
          x: active ? 0 : -3,
          opacity: active ? 1 : 0.45,
        }}
        transition={{ duration: 0.3, ease: EASE }}
        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
          active
            ? "bg-[#F2B84B]/15 text-[#B98520]"
            : "text-black/30 group-hover:text-black/70"
        }`}
      >
        <ArrowUpRight className="size-4" />
      </motion.span>
    </button>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const count = testimonials.length;
  const active = testimonials[current];

  useEffect(() => {
    if (count <= 1 || isInteracting || prefersReducedMotion) {
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;

    const scheduleNext = () => {
      if (document.visibilityState !== "visible") {
        return;
      }

      timer = setTimeout(() => {
        setCurrent((value) => (value + 1) % count);
      }, AUTOPLAY_DELAY);
    };

    const handleVisibilityChange = () => {
      if (timer !== undefined) {
        clearTimeout(timer);
        timer = undefined;
      }

      if (document.visibilityState === "visible") {
        scheduleNext();
      }
    };

    scheduleNext();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (timer !== undefined) {
        clearTimeout(timer);
      }

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, [count, current, isInteracting, prefersReducedMotion]);

  if (!active) return null;

  const selectTestimonial = (index: number) => {
    setCurrent(index);
  };

  return (
    <section
      aria-label="Client testimonials"
      className="relative isolate overflow-clip bg-[#F4F1EA] text-[#11100E]"
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null,
          )
        ) {
          setIsInteracting(false);
        }
      }}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-[42%] top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] sm:size-[700px] sm:blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(242,184,75,.10) 0%, transparent 68%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.045] sm:opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(17,16,14,.45) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(17,16,14,.45) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(17,16,14,.045)_100%)]" />
      </div>

      {/* Top architectural line */}
      <div className="absolute left-0 right-0 top-0">
        <div className="mx-auto h-px w-[calc(100%-32px)] max-w-[1500px] bg-black/10 sm:w-[calc(100%-64px)] lg:w-[calc(100%-96px)]" />

        <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1500px] items-center justify-between gap-3 pt-3 sm:w-[calc(100%-64px)] sm:pt-4 lg:w-[calc(100%-96px)]">
          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-black/40 sm:text-[7px] sm:tracking-[0.24em]">
            Heatify / CLIENT VOICES
          </span>

          <span className="text-right font-mono text-[7px] uppercase tracking-[0.12em] text-black/35 sm:tracking-[0.2em]">
            FIELD NOTES / 01
          </span>
        </div>
      </div>

      {/* Main container */}
      <div className="mx-auto w-full max-w-[1500px] px-4 pb-12 pt-[88px] sm:px-6 sm:pb-24 sm:pt-28 md:px-8 md:pb-28 md:pt-32 lg:px-12 lg:pb-40 lg:pt-40">
        {/* Section introduction */}
        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-16 sm:gap-6 lg:mb-20">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 shrink-0 bg-[#B98520] sm:w-12" />

              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.20em] text-[#B98520] sm:tracking-[0.28em]">
                TESTIMONIALS
              </span>
            </div>

            <h2 className="mt-5 max-w-[850px] font-display text-[clamp(2.35rem,10vw,13vw)] font-normal uppercase leading-[0.88] tracking-[-0.065em] text-[#11100E] sm:mt-4 sm:leading-[0.8]">
              <span className="block">Real spaces.</span>
              <span className="block text-[#F2B84B]">Real warmth.</span>
            </h2>
          </div>

          {count > 0 && (
            <div className="hidden shrink-0 pb-2 text-right sm:block">
              <span className="block font-mono text-[8px] uppercase tracking-[0.22em] text-black/30">
                CLIENT STORIES
              </span>

              <div className="mt-2 flex items-baseline justify-end gap-1">
                <span className="font-display text-3xl text-[#B98520]">
                  {String(current + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-[8px] text-black/25">
                  /{String(count).padStart(2, "0")}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Testimonial layout */}
        <div className="grid min-w-0 gap-12 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
          {/* Quote area */}
          <div className="relative min-w-0 sm:min-h-[350px] lg:min-h-[480px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-1 -top-7 select-none font-display text-[112px] leading-none text-[#B98520]/10 sm:-left-5 sm:-top-20 sm:text-[250px]"
            >
              “
            </div>

            <div className="absolute left-0 top-0 hidden h-px w-[min(40vw,430px)] bg-black/10 sm:block">
              <motion.div
                key={`line-${current}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.8,
                  ease: EASE,
                }}
                className="h-full origin-left bg-[#B98520]"
              />
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 22, filter: "blur(5px)" }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -12, filter: "blur(3px)" }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.15 : 0.5,
                  ease: EASE,
                }}
                className="relative z-10 pt-7 sm:pt-14"
              >
                <blockquote>
                  <p className="max-w-[1000px] break-words font-display text-[clamp(1.65rem,5.5vw,8.7vw)] font-normal leading-[1.03] tracking-[-0.045em] text-[#11100E] sm:leading-[0.94] xl:text-[4.35rem]">
                    {active.quote}
                  </p>
                </blockquote>

                {/* Client identity */}
                <div className="mt-8 flex min-w-0 flex-wrap items-center gap-3 sm:mt-14 sm:gap-4">
                  <ClientAvatar name={active.name} />

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="break-words font-sans text-sm font-medium text-[#11100E]">
                        {active.name}
                      </p>

                      <BadgeCheck
                        className="size-4 shrink-0 text-[#B98520]"
                        strokeWidth={1.5}
                        aria-label="Verified client"
                      />
                    </div>

                    <p className="mt-1 break-words font-sans text-[10px] uppercase leading-relaxed tracking-[0.10em] text-black/45 sm:tracking-[0.13em]">
                      {active.role}
                    </p>
                  </div>
                </div>

                {/* Project metadata */}
                <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-black/10 pt-4 sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
                  <div className="min-w-0">
                    <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-black/35 sm:tracking-[0.2em]">
                      PROJECT
                    </span>

                    <span className="mt-1 block break-words font-sans text-[10px] leading-relaxed text-black/65">
                      {active.project}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-black/35 sm:tracking-[0.2em]">
                      STATUS
                    </span>

                    <span className="mt-1 flex items-center gap-2 font-sans text-[10px] text-black/65">
                      <span className="size-1.5 shrink-0 rounded-full bg-[#F2B84B]" />
                      COMPLETED
                    </span>
                  </div>

                  <div className="col-span-2 hidden items-center gap-2 sm:flex sm:flex-1 sm:justify-end">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/30">
                      Heatify / FIELD NOTE
                    </span>

                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-black/10">
                      <ArrowUpRight className="size-3 text-black/45" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Client index */}
          <div className="relative min-w-0 lg:border-l lg:border-black/10 lg:pl-8">
            <div className="mb-5 flex items-center justify-between lg:hidden">
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-black/40 sm:text-[8px] sm:tracking-[0.22em]">
                CLIENT INDEX
              </span>

              <span
                aria-live="polite"
                aria-atomic="true"
                className="font-mono text-[8px] text-[#B98520]"
              >
                {String(current + 1).padStart(2, "0")}
                {" / "}
                {String(count).padStart(2, "0")}
              </span>
            </div>

            <div className="lg:pt-1">
              {testimonials.map((testimonial, index) => (
                <TestimonialNavItem
                  key={`${testimonial.name}-${index}`}
                  testimonial={testimonial}
                  index={index}
                  active={index === current}
                  onClick={() => selectTestimonial(index)}
                />
              ))}
            </div>

            <div className="mt-10 hidden border-t border-black/10 pt-5 lg:block">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="block font-mono text-[7px] uppercase tracking-[0.2em] text-black/35">
                    OUR APPROACH
                  </span>

                  <p className="mt-3 max-w-[190px] font-sans text-[10px] leading-[1.6] text-black/50">
                    Every installation is designed around the space, its
                    floor and the people who use it.
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

        {/* Bottom signature */}
        <div className="mt-12 border-t border-black/10 pt-4 sm:mt-20">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="font-sans text-[10px] leading-relaxed text-black/40">
              Comfort is invisible. The experience is not.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B98520]/50" />

              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-black/35 sm:tracking-[0.25em]">
                ENGINEERED COMFORT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Architectural signature */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-40 w-40 sm:block"
      >
        <div className="absolute bottom-8 right-8 size-12 rounded-full border border-[#B98520]/20" />
        <div className="absolute bottom-[55px] right-[55px] size-2 rounded-full bg-[#F2B84B]/70" />
      </div>
    </section>
  );
}

export default Testimonials;
