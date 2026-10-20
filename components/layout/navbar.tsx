

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  /* ---------------------------------------------------------------------- */
  /* Close mobile navigation on route change                                */
  /* (FIX: ab yeh sirf pathname badalne par chalta hai, `open` par nahi.    */
  /*  Pehle wala useEffect open=true hote hi usse false kar deta tha.)      */
  /* ---------------------------------------------------------------------- */

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  /* ---------------------------------------------------------------------- */
  /* Scroll state                                                           */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ---------------------------------------------------------------------- */
  /* Lock page scroll while mobile drawer is open                           */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-[100]">
      {/* ================================================================== */}
      {/* DESKTOP / MOBILE NAV                                               */}
      {/* ================================================================== */}

      <nav
        aria-label="Main navigation"
        className={cn(
          "pointer-events-auto relative mx-auto",
          "flex h-[72px] items-center",
          "border-b border-black/[0.10]",
          "px-4 sm:px-6 md:px-8 lg:px-10",
          "transition-all duration-500",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",

          "bg-[#F4F1EA]/[0.94]",
          "backdrop-blur-xl",

          scrolled
            ? [
                "shadow-[0_12px_40px_rgba(17,16,14,0.08)]",
                "bg-[#F4F1EA]/[0.97]",
              ]
            : ["shadow-[0_4px_25px_rgba(17,16,14,0.025)]"],
        )}
      >
        {/* ================================================================== */}
        {/* LEFT — LOGO                                                        */}
        {/* ================================================================== */}

        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="group relative z-20 flex shrink-0 items-center"
        >
          <Image
            src="/logo1.png"
            alt="WOWTHERM"
            width={180}
            height={52}
            priority
            className={cn(
              "h-auto w-[110px] object-contain",
              "transition-all duration-500",
              "group-hover:scale-[1.015]",
              "sm:w-[120px]",
              "md:w-[130px]",
              "lg:w-[142px]",
            )}
          />
        </Link>

        {/* ================================================================== */}
        {/* CENTER — DESKTOP NAV                                               */}
        {/* ================================================================== */}

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.href, pathname);

              return (
                <li key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex items-center",
                      "py-3",
                      "font-sans text-[9px] font-medium uppercase",
                      "tracking-[0.26em]",
                      "transition-colors duration-300",

                      active
                        ? "text-[#B98520]"
                        : "text-[#11100E]/65 hover:text-[#11100E]",
                    )}
                  >
                    {link.label}

                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-[1px] left-1/2",
                        "-translate-x-1/2",
                        "h-px",
                        "bg-[#F2B84B]",
                        "transition-all duration-500",
                        "ease-[cubic-bezier(0.22,1,0.36,1)]",

                        active ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================================================================== */}
        {/* RIGHT — CTA + MOBILE                                               */}
        {/* ================================================================== */}

        <div className="ml-auto flex items-center">
          {/* Desktop CTA */}

          <Link
            href="/contact"
            className={cn(
              "group hidden lg:flex",
              "h-[42px]",
              "items-center",
              "gap-6",
              "border border-[#11100E]/15",
              "px-5 xl:px-6",
              "transition-all duration-500",
              "hover:border-[#B98520]",
              "hover:bg-[#F2B84B]",
            )}
          >
            <span
              className={cn(
                "font-sans text-[9px] font-medium uppercase",
                "tracking-[0.22em]",
                "text-[#11100E]/80",
                "transition-colors duration-300",
                "group-hover:text-[#11100E]",
              )}
            >
              Start a Project
            </span>

            <span
              className={cn(
                "flex size-5 items-center justify-center",
                "text-[#11100E]/65",
                "transition-all duration-300",
                "group-hover:translate-x-0.5",
                "group-hover:text-[#11100E]",
              )}
            >
              <ArrowUpRight
                className="size-[13px]"
                strokeWidth={1.4}
                aria-hidden
              />
            </span>
          </Link>

          {/* Mobile menu */}

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className={cn(
                  "group flex size-11 items-center justify-center",
                  "border border-[#11100E]/15",
                  "text-[#11100E]/75",
                  "transition-all duration-300",
                  "hover:border-[#B98520]",
                  "hover:text-[#11100E]",
                  "lg:hidden",
                )}
              >
                <Menu
                  className="size-[18px] transition-transform duration-300 group-hover:scale-90"
                  strokeWidth={1.35}
                  aria-hidden
                />
              </button>
            </Dialog.Trigger>

            <AnimatePresence>
              {open && (
                <Dialog.Portal forceMount>
                  {/* OVERLAY */}

                  <Dialog.Overlay asChild forceMount>
                    <motion.div
                      className="fixed inset-0 z-[150] bg-[#11100E]/45 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Dialog.Overlay>

                  {/* DRAWER */}

                  <Dialog.Content
                    asChild
                    forceMount
                    aria-describedby={undefined}
                  >
                    <motion.aside
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        duration: 0.55,
                        ease: EASE,
                      }}
                      className={cn(
                        "fixed inset-y-0 right-0 z-[160]",
                        "flex w-full max-w-[430px] flex-col",
                        "overflow-hidden",
                        "bg-[#F4F1EA]",
                        "text-[#11100E]",
                        "shadow-[-30px_0_80px_-35px_rgba(0,0,0,0.35)]",
                        "pb-safe",
                      )}
                    >
                      {/* DRAWER ATMOSPHERE */}

                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-[0.045]"
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              to right,
                              rgba(17,16,14,0.8) 1px,
                              transparent 1px
                            ),
                            linear-gradient(
                              to bottom,
                              rgba(17,16,14,0.8) 1px,
                              transparent 1px
                            )
                          `,
                          backgroundSize: "72px 72px",
                        }}
                      />

                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full blur-[110px]"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(242,184,75,.14) 0%, transparent 70%)",
                        }}
                      />

                      {/* DRAWER HEADER */}

                      <div className="relative flex h-[78px] shrink-0 items-center justify-between border-b border-[#11100E]/10 px-6 sm:px-8">
                        <div className="flex items-center gap-3">
                          <span className="h-px w-7 bg-[#F2B84B]" />

                          <Dialog.Title className="font-sans text-[9px] font-medium uppercase tracking-[0.27em] text-[#11100E]/45">
                            Navigation
                          </Dialog.Title>
                        </div>

                        <Dialog.Close asChild>
                          <button
                            type="button"
                            aria-label="Close navigation menu"
                            className="group flex size-10 items-center justify-center border border-[#11100E]/10 transition-all duration-300 hover:border-[#B98520]"
                          >
                            <X
                              className="size-[17px] text-[#11100E]/55 transition-all duration-300 group-hover:rotate-90 group-hover:text-[#11100E]"
                              strokeWidth={1.35}
                              aria-hidden
                            />
                          </button>
                        </Dialog.Close>
                      </div>

                      {/* MOBILE CONTENT */}

                      <div className="relative flex flex-1 flex-col px-6 pt-10 sm:px-8">
                        <div className="mb-8 flex items-center justify-between">
                          <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#11100E]/25">
                            WOWTHERM
                          </span>

                          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#B98520]">
                            MENU
                          </span>
                        </div>

                        {/* Links */}

                        <nav aria-label="Mobile navigation">
                          <ul>
                            {navLinks.map((link, index) => {
                              const active = isActive(link.href, pathname);

                              return (
                                <motion.li
                                  key={link.href}
                                  initial={{ opacity: 0, x: 24 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.08 + index * 0.06,
                                    duration: 0.45,
                                    ease: EASE,
                                  }}
                                >
                                  <Link
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={cn(
                                      "group flex items-center justify-between",
                                      "border-b border-[#11100E]/10",
                                      "py-5",
                                      "transition-colors duration-300",

                                      active
                                        ? "text-[#B98520]"
                                        : "text-[#11100E]/65 hover:text-[#11100E]",
                                    )}
                                  >
                                    <div className="flex items-center gap-5">
                                      <span className="font-mono text-[8px] text-[#11100E]/20">
                                        {String(index + 1).padStart(2, "0")}
                                      </span>

                                      <span
                                        className={cn(
                                          "font-display text-[2rem]",
                                          "leading-none",
                                          "tracking-[-0.035em]",
                                          "transition-transform duration-500",
                                          "group-hover:translate-x-1",
                                        )}
                                      >
                                        {link.label}
                                      </span>
                                    </div>

                                    <span
                                      className={cn(
                                        "flex size-8 items-center justify-center",
                                        "border border-[#11100E]/10",
                                        "transition-all duration-300",

                                        active
                                          ? "border-[#F2B84B] bg-[#F2B84B] text-[#11100E]"
                                          : "opacity-0 group-hover:opacity-100",
                                      )}
                                    >
                                      <ArrowUpRight
                                        className="size-3.5"
                                        strokeWidth={1.35}
                                        aria-hidden
                                      />
                                    </span>
                                  </Link>
                                </motion.li>
                              );
                            })}
                          </ul>
                        </nav>

                        {/* BOTTOM CTA */}

                        <div className="relative mt-auto pb-7 pt-10">
                          <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="group flex h-14 items-center justify-between bg-[#11100E] px-5 text-[#F4F1EA] transition-colors duration-500 hover:bg-[#F2B84B] hover:text-[#11100E]"
                          >
                            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em]">
                              Start a Project
                            </span>

                            <span className="flex size-7 items-center justify-center border border-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:border-[#11100E]/20">
                              <ArrowUpRight
                                className="size-3.5"
                                strokeWidth={1.35}
                                aria-hidden
                              />
                            </span>
                          </Link>

                          <div className="mt-5 flex items-center justify-between border-t border-[#11100E]/10 pt-4">
                            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#11100E]/25">
                              Engineered warmth
                            </span>

                            <span className="font-sans text-[10px] text-[#11100E]/45">
                              {siteConfig.phone}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CORNER DETAIL */}

                      <div
                        aria-hidden
                        className="absolute bottom-0 right-0 size-24 border-b border-r border-[#B98520]/25"
                      />
                    </motion.aside>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
