import { Reveal } from "@/components/motion/reveal";

const columns = [
  {
    number: "01",
    name: "Electric",
    descriptor: "Precise warmth, where you need it.",
    rows: [
      {
        label: "Best for",
        value: "Single rooms, renovations, bathrooms & kitchens",
      },
      {
        label: "Heat-up time",
        value: "15–30 minutes to temperature",
      },
      {
        label: "Install disruption",
        value: "Low — no boiler or manifold work",
      },
      {
        label: "Warranty",
        value: "10 years",
      },
    ],
  },
  {
    number: "02",
    name: "Hydronic",
    descriptor: "Whole-home warmth, built into the system.",
    rows: [
      {
        label: "Best for",
        value: "Whole-home, new builds, large open-plan areas",
      },
      {
        label: "Heat-up time",
        value: "1–2 hours, holds heat far longer",
      },
      {
        label: "Install disruption",
        value: "Higher — manifold and heat-source sizing",
      },
      {
        label: "Warranty",
        value: "25 years on pipework",
      },
    ],
  },
];

export function SystemComparison() {
  return (
    <section className="relative overflow-hidden bg-[#F4F1EA] text-[#11100E]">
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute left-[18%] top-[18%] size-[500px] rounded-full blur-[170px]"
          style={{
            background:
              "radial-gradient(circle, rgba(242,184,75,.075) 0%, rgba(242,184,75,.025) 45%, transparent 72%)",
          }}
        />

        <div
          className="absolute right-[8%] bottom-[10%] size-[420px] rounded-full blur-[170px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185,133,32,.055) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(17,16,14,.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(17,16,14,.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      <div className="container-site relative z-10 py-24 md:py-32">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <Reveal>
          <div className="flex items-center justify-between border-b border-black/[0.10] pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#B98520]" />

              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.3em] text-[#11100E]/50">
                Choosing a system
              </span>
            </div>

            <span className="hidden font-mono text-[9px] tracking-[0.22em] text-[#11100E]/30 md:block">
              SYSTEMS / COMPARISON 03
            </span>
          </div>
        </Reveal>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="grid gap-12 pb-20 pt-16 md:pb-28 md:pt-20 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
          <Reveal>
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#B98520]">
                  03
                </span>

                <span className="h-px w-8 bg-[#B98520]/60" />

                <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-[#11100E]/40">
                  Heating systems
                </span>
              </div>

              <h2
                className="
                  max-w-[900px]
                  font-display
                  text-[clamp(4rem,8vw,8.5rem)]
                  font-normal
                  leading-[0.78]
                  tracking-[-0.065em]
                "
              >
                <span className="block">Two ways</span>
                <span className="ml-[8vw] block">to bring</span>
                <span className="ml-[16vw] block italic text-[#F2B84B]">
                  warmth.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex items-end">
              <div className="max-w-[400px] border-l border-[#11100E]/15 pl-6 lg:mb-2">
                <p className="font-sans text-[14px] leading-[1.9] text-[#11100E]/55 md:text-[15px]">
                  Electric and hydronic systems both deliver radiant warmth
                  from below. The difference is how they create, distribute
                  and respond to heat.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="font-display text-4xl tracking-[-0.04em]">
                    02
                  </span>

                  <span className="h-px w-10 bg-[#B98520]/60" />

                  <span className="font-sans text-[8px] uppercase leading-[1.7] tracking-[0.25em] text-[#11100E]/35">
                    Heating
                    <br />
                    architectures
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            SYSTEM SPLIT
        ====================================================== */}

        <div className="relative">
          {/* Central axis */}

          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-black/[0.10] lg:block"
          />

          {/* Central diamond */}

          <div
            aria-hidden
            className="
              absolute
              left-1/2
              top-0
              z-20
              hidden
              size-3
              -translate-x-1/2
              -translate-y-1/2
              rotate-45
              border
              border-[#B98520]
              bg-[#F4F1EA]
              lg:block
            "
          />

          <div className="grid lg:grid-cols-2">
            {columns.map((column, index) => {
              const isElectric = index === 0;

              return (
                <Reveal
                  key={column.name}
                  delay={index * 0.1}
                >
                  <article
                    className={`
                      relative
                      ${
                        isElectric
                          ? "lg:pr-16 xl:pr-24"
                          : "mt-16 lg:mt-0 lg:pl-16 xl:pl-24"
                      }
                    `}
                  >
                    {/* =================================================
                        SYSTEM INTRO
                    ================================================== */}

                    <div className="relative border-t border-black/[0.12] pt-8">
                      {/* Active top line */}

                      <div
                        className={`
                          absolute
                          left-0
                          top-[-1px]
                          h-px
                          transition-all
                          duration-700
                          group-hover:w-32
                          ${
                            isElectric
                              ? "w-24 bg-[#F2B84B]"
                              : "w-16 bg-[#B98520]/70"
                          }
                        `}
                      />

                      <div className="flex items-start justify-between gap-8">
                        <div>
                          <div className="mb-5 flex items-center gap-3">
                            <span className="font-mono text-[9px] tracking-[0.15em] text-[#B98520]">
                              {column.number}
                            </span>

                            <span className="h-px w-7 bg-[#B98520]/50" />

                            <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-[#11100E]/35">
                              {isElectric
                                ? "Electrical system"
                                : "Water-based system"}
                            </span>
                          </div>

                          <h3
                            className="
                              font-display
                              text-[clamp(3.2rem,5vw,5.5rem)]
                              font-normal
                              leading-[0.82]
                              tracking-[-0.055em]
                            "
                          >
                            {column.name}
                            <span className="text-[#F2B84B]">.</span>
                          </h3>

                          <p className="mt-5 max-w-[330px] font-display text-lg italic leading-[1.35] text-[#11100E]/55">
                            {column.descriptor}
                          </p>
                        </div>

                        {/* Technical symbol */}

                        <div
                          className={`
                            relative
                            mt-1
                            hidden
                            size-16
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            sm:flex
                            ${
                              isElectric
                                ? "border border-[#F2B84B]/60"
                                : "border border-[#B98520]/40"
                            }
                          `}
                        >
                          <span
                            className={`
                              absolute
                              inset-2
                              rounded-full
                              border
                              ${
                                isElectric
                                  ? "border-[#F2B84B]/25"
                                  : "border-[#B98520]/20"
                              }
                            `}
                          />

                          <span className="font-mono text-[8px] tracking-[0.12em] text-[#11100E]/35">
                            {column.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        VISUAL SYSTEM MARKER
                    ================================================== */}

                    <div className="relative my-10 h-[110px] overflow-hidden border-y border-black/[0.08]">
                      {/* horizontal construction lines */}

                      <span className="absolute left-0 right-0 top-1/2 h-px bg-black/[0.08]" />

                      <span className="absolute left-0 right-0 top-[28%] h-px bg-black/[0.045]" />

                      <span className="absolute left-0 right-0 top-[72%] h-px bg-black/[0.045]" />

                      {isElectric ? (
                        <>
                          {/* Electric cable pattern */}

                          <div className="absolute inset-x-[7%] top-1/2 h-[42px] -translate-y-1/2">
                            <div className="absolute inset-x-0 top-1/2 h-px bg-[#B98520]/45" />

                            {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                              <span
                                key={item}
                                className="absolute top-1/2 size-5 -translate-y-1/2 rounded-full border border-[#F2B84B]/60"
                                style={{
                                  left: `${item * 16}%`,
                                }}
                              />
                            ))}
                          </div>

                          <span className="absolute right-4 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-[#B98520]">
                            Resistive element
                          </span>
                        </>
                      ) : (
                        <>
                          {/* Hydronic pipe pattern */}

                          <div className="absolute inset-x-[7%] top-1/2 h-[48px] -translate-y-1/2">
                            <div className="absolute inset-0 rounded-full border border-[#B98520]/45" />

                            <div className="absolute inset-x-[15%] inset-y-[7px] rounded-full border border-[#B98520]/35" />

                            <div className="absolute inset-x-[30%] inset-y-[14px] rounded-full border border-[#B98520]/30" />
                          </div>

                          <span className="absolute right-4 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-[#B98520]">
                            Pipe circuit
                          </span>
                        </>
                      )}

                      <span className="absolute bottom-3 left-4 font-mono text-[7px] uppercase tracking-[0.2em] text-[#11100E]/25">
                        Underfloor distribution
                      </span>
                    </div>

                    {/* =================================================
                        SPECIFICATIONS
                    ================================================== */}

                    <div>
                      {column.rows.map((row, rowIndex) => (
                        <div
                          key={row.label}
                          className="
                            group/row
                            grid
                            gap-3
                            border-t
                            border-black/[0.10]
                            py-6
                            sm:grid-cols-[120px_1fr]
                          "
                        >
                          <div className="flex items-start gap-2">
                            <span className="mt-[5px] size-1 rotate-45 bg-[#B98520]/60" />

                            <p className="font-sans text-[8px] uppercase tracking-[0.22em] text-[#11100E]/35">
                              {row.label}
                            </p>
                          </div>

                          <p className="max-w-[400px] font-sans text-[13px] leading-[1.8] text-[#11100E]/60 transition-colors duration-300 group-hover/row:text-[#11100E] md:text-[14px]">
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* =================================================
                        SYSTEM FOOTER
                    ================================================== */}

                    <div className="mt-2 flex items-center justify-between border-t border-black/[0.10] pt-5">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/25">
                        System {column.number}
                      </span>

                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#B98520]/50" />

                        <span className="font-sans text-[8px] uppercase tracking-[0.22em] text-[#B98520]">
                          {isElectric ? "Fast response" : "Long retention"}
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DECISION SECTION
        ====================================================== */}

        <Reveal delay={0.2}>
          <div className="mt-20 border-t border-black/[0.10] pt-8 md:mt-28">
            <div className="grid gap-8 md:grid-cols-[.55fr_1.45fr] md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="size-2 rotate-45 bg-[#F2B84B]" />

                  <span className="font-sans text-[8px] uppercase tracking-[0.28em] text-[#B98520]">
                    Let the space decide
                  </span>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-[720px] font-display text-[clamp(1.5rem,2.5vw,2.3rem)] leading-[1.25] tracking-[-0.025em] text-[#11100E]/70">
                  The right system isn&apos;t about choosing the most powerful
                  option. It&apos;s about matching the heating architecture to
                  the building, the room and the way you live in it.
                </p>

                <div className="hidden text-right md:block">                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/25">
                        Survey
                      </span>

                      <br />

                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/25">
                        &rarr; Design
                      </span>

                      <br />

                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/25">
                        &rarr; Install
                      </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            FOOTER MARKER
        ====================================================== */}

        <Reveal delay={0.25}>
          <div className="mt-16 flex items-center justify-between border-t border-black/[0.10] pt-5 md:mt-20">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#B98520]" />

              <span className="font-sans text-[8px] uppercase tracking-[0.28em] text-[#11100E]/40">
                Choose according to the architecture
              </span>
            </div>

            <span className="hidden font-mono text-[8px] tracking-[0.2em] text-[#11100E]/25 sm:block">
              HEATIFY / SYSTEMS 03
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}