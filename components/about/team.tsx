"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/motion/reveal";

const TEAM = [
  {
    id: "founder",
    number: "01",
    name: "Founder Name",
    role: "Founder & CEO",
    bio: "Building thoughtful heating systems that bring engineering, comfort and architecture together.",
    photo: null as string | null,
  },
  {
    id: "engineering",
    number: "02",
    name: "Team Member",
    role: "Head of Engineering",
    bio: "Developing reliable heating systems with a focus on performance, precision and long-term efficiency.",
    photo: null as string | null,
  },
  {
    id: "design",
    number: "03",
    name: "Team Member",
    role: "Design Director",
    bio: "Creating systems that integrate naturally with the spaces they are designed to warm.",
    photo: null as string | null,
  },
  {
    id: "operations",
    number: "04",
    name: "Team Member",
    role: "Operations Lead",
    bio: "Making sure every project moves from planning to installation with clarity and attention to detail.",
    photo: null as string | null,
  },
];

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

function TeamPortrait({
  member,
}: {
  member: (typeof TEAM)[number];
}) {
  return (
    <div
      className="
        relative
        aspect-[4/5]
        w-full
        overflow-hidden
        bg-[#1C1A17]
      "
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`${member.name} - ${member.role}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="
            object-cover
            transition-transform
            duration-[1200ms]
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:scale-[1.025]
          "
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden
            className="
              absolute
              bottom-[-5%]
              right-[-2%]
              font-display
              text-[18rem]
              leading-none
              tracking-[-0.1em]
              text-[#C5A15A]/[0.06]
            "
          >
            {member.number}
          </span>

          <span
            className="
              relative
              z-10
              font-display
              text-[clamp(7rem,14vw,13rem)]
              leading-none
              tracking-[-0.08em]
              text-[#C5A15A]
            "
          >
            {initials(member.name)}
          </span>
        </div>
      )}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#11100E]/55
          via-transparent
          to-transparent
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-5
          border
          border-white/20
          md:inset-7
        "
      />

      <div
        aria-hidden
        className="
          absolute
          right-7
          top-7
          flex
          items-center
          gap-2
          md:right-10
          md:top-10
        "
      >
        <span className="h-px w-8 bg-white/50" />

        <span className="font-mono text-[8px] tracking-[0.25em] text-white/65">
          HEATIFY
        </span>
      </div>

      <div className="absolute bottom-7 left-7 md:bottom-10 md:left-10">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/60">
          {member.number} / {member.role}
        </span>
      </div>
    </div>
  );
}

export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMember = TEAM[activeIndex];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F4F1EA]
        py-24
        text-[#171614]
        md:py-32
        lg:py-40
      "
    >
      {/* Background */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(23,22,20,.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(23,22,20,.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "120px 120px",
          }}
        />

        <div
          className="
            absolute
            -right-[15%]
            top-[20%]
            size-[600px]
            rounded-full
            blur-[180px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(207,169,91,.055) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-site relative z-10">
        {/* Intro */}

        <Reveal>
          <div
            className="
              grid
              items-end
              gap-8
              border-b
              border-[#171614]/15
              pb-8
              lg:grid-cols-[0.7fr_1.3fr]
              lg:gap-10
            "
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#A4772A]">
                03
              </span>

              <span className="h-px w-10 bg-[#A4772A]/60" />

              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.3em] text-[#171614]/45">
                The People
              </span>
            </div>

            <p
              className="
                max-w-xl
                font-serif
                text-[18px]
                leading-[1.45]
                text-[#171614]/65
                md:text-[21px]
              "
            >
              Behind every system is a team that understands the relationship
              between engineering, architecture and the way people live.
            </p>
          </div>
        </Reveal>

        {/* Main */}

        <div
          className="
            mt-12
            grid
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* Portrait */}

          <Reveal>
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#171614]/35">
                  Heatify / People
                </span>

                <span className="font-mono text-[8px] tracking-[0.25em] text-[#171614]/25">
                  {activeMember.number} - 04
                </span>
              </div>

              <div className="group relative overflow-hidden">
                <TeamPortrait member={activeMember} />
              </div>

              <div className="mt-5 grid gap-5 border-t border-[#171614]/10 pt-5 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-display text-[22px] tracking-[-0.03em] text-[#171614]">
                    {activeMember.name}
                  </p>

                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-[#A4772A]">
                    {activeMember.role}
                  </p>
                </div>

                <p className="max-w-[270px] font-sans text-[11px] leading-[1.7] text-[#171614]/45 sm:text-right">
                  {activeMember.bio}
                </p>
              </div>
            </div>
          </Reveal>

          {/* People */}

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col">
              <div className="mb-12">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#A4772A]">
                  Our team
                </span>

                <h2
                  className="
                    mt-5
                    max-w-[650px]
                    font-display
                    text-[clamp(3rem,6vw,6.5rem)]
                    font-normal
                    leading-[0.84]
                    tracking-[-0.065em]
                    text-[#171614]
                  "
                >
                  People
                  <br />
                  <span className="italic text-[#F2B84B]">
                    behind the work.
                  </span>
                </h2>
              </div>

              <div className="border-t border-[#171614]/15">
                <RevealGroup stagger={0.07}>
                  {TEAM.map((member, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <RevealItem key={member.id}>
                        <button
                          type="button"
                          aria-pressed={isActive}
                          onMouseEnter={() => setActiveIndex(index)}
                          onFocus={() => setActiveIndex(index)}
                          onClick={() => setActiveIndex(index)}
                          className="
                            group
                            relative
                            flex
                            w-full
                            items-center
                            border-b
                            border-[#171614]/10
                            py-7
                            text-left
                            outline-none
                            transition-all
                            duration-500
                            md:py-8
                          "
                        >
                          <span
                            className={`
                              w-12
                              shrink-0
                              font-mono
                              text-[9px]
                              tracking-[0.22em]
                              transition-colors
                              duration-500
                              ${
                                isActive
                                  ? "text-[#A4772A]"
                                  : "text-[#171614]/25"
                              }
                            `}
                          >
                            {member.number}
                          </span>

                          <span
                            className={`
                              min-w-0
                              flex-1
                              truncate
                              font-display
                              text-[clamp(1.65rem,3vw,2.7rem)]
                              font-normal
                              leading-none
                              tracking-[-0.045em]
                              transition-all
                              duration-500
                              ${
                                isActive
                                  ? "translate-x-2 text-[#171614]"
                                  : "text-[#171614]/45"
                              }
                            `}
                          >
                            {member.name}
                          </span>

                          <span
                            className={`
                              hidden
                              w-36
                              shrink-0
                              font-mono
                              text-[8px]
                              uppercase
                              tracking-[0.2em]
                              transition-colors
                              duration-500
                              sm:block
                              ${
                                isActive
                                  ? "text-[#A4772A]"
                                  : "text-[#171614]/25"
                              }
                            `}
                          >
                            {member.role}
                          </span>

                          <span
                            aria-hidden
                            className={`
                              relative
                              ml-5
                              flex
                              size-8
                              shrink-0
                              items-center
                              justify-center
                              transition-all
                              duration-500
                              ${
                                isActive
                                  ? "opacity-100"
                                  : "opacity-25"
                              }
                            `}
                          >
                            <span className="absolute h-px w-5 bg-[#171614]" />

                            <span className="absolute right-[2px] h-px w-2.5 rotate-45 bg-[#171614]" />

                            <span className="absolute right-[2px] h-px w-2.5 -rotate-45 bg-[#171614]" />
                          </span>

                          <span
                            aria-hidden
                            className={`
                              absolute
                              bottom-[-1px]
                              left-0
                              h-px
                              bg-[#A4772A]
                              transition-all
                              duration-700
                              ${isActive ? "w-16" : "w-0"}
                            `}
                          />
                        </button>
                      </RevealItem>
                    );
                  })}
                </RevealGroup>
              </div>

              {/* Bottom */}

              <div className="mt-auto pt-12">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#A4772A]/60" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#171614]/35">
                    Engineering / Design / Craft
                  </span>
                </div>

                <p className="mt-5 max-w-[440px] font-serif text-[16px] italic leading-[1.55] text-[#171614]/50">
                  Different disciplines, one standard - creating warmth that
                  belongs naturally within the architecture.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Team;