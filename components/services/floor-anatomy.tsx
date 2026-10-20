import { Reveal } from "@/components/motion/reveal";

const layers = [
  {
    name: "Subfloor or slab",
    short: "FOUNDATION",
    note: "Primed and levelled first. Every other layer's performance depends on what this one starts flat.",
  },
  {
    name: "ThermaBase insulation",
    short: "INSULATION",
    note: "Stops heat travelling down into the slab instead of up into the room. Typically halves heat-up time.",
  },
  {
    name: "Heating element",
    short: "HEAT SOURCE",
    note: "Electric mat or cable, or hydronic pipe loops — laid to the room-by-room design from your survey.",
  },
  {
    name: "Levelling compound / screed",
    short: "ENCAPSULATION",
    note: "Encapsulates the element and gives tile or stone a true, even bed to sit on.",
  },
  {
    name: "Finish floor",
    short: "SURFACE",
    note: "Tile, stone, engineered wood — commissioned and temperature-limited to suit whatever you've chosen.",
  },
];

export function FloorAnatomy() {
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
          className="absolute left-1/2 top-[20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            background:
              "radial-gradient(circle, rgba(242,184,75,.08) 0%, rgba(242,184,75,.025) 42%, transparent 72%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(17,16,14,.55) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(17,16,14,.55) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "120px 120px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-black/[0.08]" />
      </div>

      <div className="container-site relative z-10 py-24 md:py-32">
        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <Reveal>
          <div className="flex items-center justify-between border-b border-black/[0.10] pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#B98520]" />

              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.3em] text-[#11100E]/50">
                What&apos;s under the tile
              </span>
            </div>

            <span className="hidden font-mono text-[9px] tracking-[0.22em] text-[#11100E]/30 md:block">
              HEATIFY / DETAIL 02
            </span>
          </div>
        </Reveal>

        {/* =====================================================
            HERO INTRO
        ====================================================== */}

        <div className="grid gap-12 pb-20 pt-16 md:pb-28 md:pt-20 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <Reveal>
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#B98520]">
                  02
                </span>

                <span className="h-px w-8 bg-[#B98520]/60" />

                <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-[#11100E]/40">
                  Construction detail
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
                <span className="block">Inside</span>
                <span className="ml-[8vw] block">a warm</span>
                <span className="ml-[16vw] block italic text-[#F2B84B]">
                  floor.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex items-end">
              <div className="max-w-[390px] border-l border-[#11100E]/15 pl-6 lg:mb-2">
                <p className="font-sans text-[14px] leading-[1.9] text-[#11100E]/55 md:text-[15px]">
                  What looks like a simple finished surface is a carefully
                  engineered sequence beneath it.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="font-display text-4xl tracking-[-0.04em]">
                    05
                  </span>

                  <span className="h-px w-10 bg-[#B98520]/60" />

                  <span className="font-sans text-[8px] uppercase leading-[1.7] tracking-[0.25em] text-[#11100E]/35">
                    Layers
                    <br />
                    from slab to surface
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            MAIN TECHNICAL DRAWING
        ====================================================== */}

        <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:gap-24">
          {/* =================================================
              LEFT — EXPLODED FLOOR
          ================================================== */}

          <div>
            <Reveal>
              <div className="relative">
                {/* Drawing frame */}

                <div className="relative overflow-hidden border-y border-black/[0.10] py-10 md:py-14">
                  {/* Technical corner marks */}

                  <span className="absolute left-0 top-0 h-4 w-px bg-[#B98520]" />
                  <span className="absolute left-0 top-0 h-px w-4 bg-[#B98520]" />

                  <span className="absolute right-0 top-0 h-4 w-px bg-[#B98520]" />
                  <span className="absolute right-0 top-0 h-px w-4 bg-[#B98520]" />

                  <span className="absolute bottom-0 left-0 h-4 w-px bg-[#B98520]" />
                  <span className="absolute bottom-0 left-0 h-px w-4 bg-[#B98520]" />

                  <span className="absolute bottom-0 right-0 h-4 w-px bg-[#B98520]" />
                  <span className="absolute bottom-0 right-0 h-px w-4 bg-[#B98520]" />

                  {/* Drawing metadata */}

                  <div className="mb-10 flex items-center justify-between px-1">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/30">
                      Floor section
                    </span>

                    <span className="font-mono text-[8px] tracking-[0.18em] text-[#11100E]/25">
                      SCALE / NTS
                    </span>
                  </div>

                  {/* =================================================
                      FLOOR CUTAWAY
                  ================================================== */}

                  <div className="relative mx-auto max-w-[720px]">
                    {/* Heat direction */}

                    <div className="absolute -left-2 top-1/2 hidden -translate-y-1/2 -translate-x-full items-center gap-3 lg:flex">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#B98520]">
                        Radiant heat
                      </span>

                      <span className="h-px w-10 bg-[#B98520]/60" />

                      <span className="text-sm text-[#B98520]">↑</span>
                    </div>

                    {/* Layers */}

                    <div className="relative">
                      {layers.map((layer, i) => {
                        const isHeat = i === 2;

                        return (
                          <div
                            key={layer.name}
                            className="group relative flex items-center"
                            style={{
                              marginLeft:
                                i === 0
                                  ? "7%"
                                  : i === 1
                                    ? "4%"
                                    : i === 2
                                      ? "0%"
                                      : i === 3
                                        ? "3%"
                                        : "7%",
                            }}
                          >
                            {/* Connection line */}

                            <div
                              aria-hidden
                              className="absolute -left-8 top-1/2 hidden w-8 border-t border-dashed border-black/10 lg:block"
                            />

                            {/* Layer number */}

                            <div
                              className={`
                                absolute
                                -left-14
                                hidden
                                font-mono
                                text-[8px]
                                tracking-[0.12em]
                                lg:block
                                ${
                                  isHeat
                                    ? "text-[#B98520]"
                                    : "text-[#11100E]/25"
                                }
                              `}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </div>

                            {/* Actual layer */}

                            <div
                              className={`
                                relative
                                w-full
                                border
                                transition-all
                                duration-500
                                ${
                                  i === 0
                                    ? "h-[72px] border-black/[0.16] bg-[#C9C0B2]/55"
                                    : i === 1
                                      ? "h-[58px] border-black/[0.10] bg-[#DED8CC]/80"
                                      : i === 2
                                        ? "h-[82px] border-[#B98520]/50 bg-[#F2B84B]/25"
                                        : i === 3
                                          ? "h-[62px] border-black/[0.11] bg-[#E5DFD4]/90"
                                          : "h-[78px] border-black/[0.18] bg-[#D0C7B8]/80"
                                }
                              `}
                            >
                              {/* Material texture */}

                              <div
                                aria-hidden
                                className="absolute inset-0 opacity-[0.25]"
                                style={{
                                  backgroundImage:
                                    i === 2
                                      ? `
                                        repeating-linear-gradient(
                                          90deg,
                                          transparent 0,
                                          transparent 26px,
                                          rgba(185,133,32,.55) 27px,
                                          transparent 28px
                                        )
                                      `
                                      : `
                                        repeating-linear-gradient(
                                          0deg,
                                          transparent 0,
                                          transparent 12px,
                                          rgba(17,16,14,.08) 13px,
                                          transparent 14px
                                        )
                                      `,
                                }}
                              />

                              {/* Heating cable */}

                              {isHeat && (
                                <div
                                  aria-hidden
                                  className="absolute inset-x-[7%] inset-y-4"
                                >
                                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#B98520]/70" />

                                  <div className="absolute left-[5%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-[#B98520]/60" />

                                  <div className="absolute left-[18%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-[#B98520]/60" />

                                  <div className="absolute left-[31%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-[#B98520]/60" />

                                  <div className="absolute left-[44%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-[#B98520]/60" />

                                  <div className="absolute left-[57%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-[#B98520]/60" />

                                  <div className="absolute left-[70%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-[#B98520]/60" />

                                  <div className="absolute left-[83%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border border-[#B98520]/60" />
                                </div>
                              )}

                              {/* Label */}

                              <div className="absolute inset-0 flex items-center justify-between px-5 md:px-7">
                                <div>
                                  <p
                                    className={`
                                      mb-1
                                      font-sans
                                      text-[7px]
                                      uppercase
                                      tracking-[0.25em]
                                      ${
                                        isHeat
                                          ? "text-[#B98520]"
                                          : "text-[#11100E]/35"
                                      }
                                    `}
                                  >
                                    {layer.short}
                                  </p>

                                  <p
                                    className={`
                                      font-display
                                      text-[16px]
                                      tracking-[-0.025em]
                                      md:text-[18px]
                                      ${
                                        isHeat
                                          ? "text-[#11100E]"
                                          : "text-[#11100E]/70"
                                      }
                                    `}
                                  >
                                    {layer.name}
                                  </p>
                                </div>

                                <span className="hidden font-mono text-[8px] tracking-[0.15em] text-[#11100E]/25 sm:block">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                              </div>

                              {/* Hover edge */}

                              <span
                                aria-hidden
                                className={`
                                  absolute
                                  inset-y-0
                                  left-0
                                  w-px
                                  transition-all
                                  duration-500
                                  group-hover:w-[4px]
                                  ${
                                    isHeat
                                      ? "bg-[#F2B84B]"
                                      : "bg-[#B98520]/50"
                                  }
                                `}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Dimension line */}

                    <div className="relative mx-[7%] mt-8 flex items-center justify-between">
                      <span className="h-px flex-1 bg-black/[0.10]" />

                      <span className="mx-4 font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/25">
                        Finished floor build-up
                      </span>

                      <span className="h-px flex-1 bg-black/[0.10]" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT — ANNOTATIONS
          ================================================== */}

          <div>
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="mb-8">
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#B98520]">
                    Technical notes
                  </p>

                  <h3 className="mt-4 max-w-[330px] font-display text-[2.4rem] leading-[0.92] tracking-[-0.045em]">
                    Five layers.
                    <br />
                    One system.
                  </h3>
                </div>
              </Reveal>

              <div className="border-t border-black/[0.10]">
                {layers.map((layer, i) => (
                  <Reveal key={layer.name} delay={i * 0.06}>
                    <div className="group border-b border-black/[0.10] py-6">
                      <div className="flex gap-5">
                        <span
                          className={`
                            mt-1
                            font-mono
                            text-[9px]
                            tracking-[0.12em]
                            ${
                              i === 2
                                ? "text-[#B98520]"
                                : "text-[#11100E]/25"
                            }
                          `}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline justify-between gap-4">
                            <h4 className="font-display text-[19px] tracking-[-0.025em] text-[#11100E] transition-colors duration-300 group-hover:text-[#B98520]">
                              {layer.name}
                            </h4>

                            <span className="hidden font-sans text-[7px] uppercase tracking-[0.2em] text-[#11100E]/25 sm:block">
                              {layer.short}
                            </span>
                          </div>

                          <p className="mt-3 font-sans text-[12px] leading-[1.8] text-[#11100E]/50">
                            {layer.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3}>
                <div className="mt-8 border-l-2 border-[#F2B84B] pl-5">
                  <p className="font-display text-lg italic leading-[1.4] text-[#11100E]/65">
                    The finished floor is only the surface. The comfort is
                    engineered underneath it.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <Reveal delay={0.25}>
          <div className="mt-20 border-t border-black/[0.10] pt-6 md:mt-28">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <span className="size-1.5 rotate-45 bg-[#F2B84B]" />

                <span className="font-sans text-[8px] uppercase tracking-[0.28em] text-[#11100E]/40">
                  Engineered from the ground up
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono text-[8px] tracking-[0.18em] text-[#11100E]/25">
                  HEATIFY
                </span>

                <span className="h-px w-12 bg-[#B98520]/50" />

                <span className="font-mono text-[8px] tracking-[0.18em] text-[#11100E]/25">
                  FLOOR SYSTEM / 02
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}