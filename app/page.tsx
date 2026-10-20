

import type { Metadata } from "next";

import HeatifyLoader from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { ProductShowcase } from "@/components/home/product-showcase";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title:
    "Premium Heating Technology — Comfort, engineered into every surface",

  description:
    "Heatify designs and installs premium heating systems for modern homes, hospitality spaces and architectural interiors. Invisible warmth, precise control.",
};

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-clip bg-[#11100E]">
      {/* =========================================================
          HEATIFY INTRO
          
          Normal document-flow section.
          It is NOT fixed and does NOT cover the sections below.
      ========================================================= */}

      <HeatifyLoader />

      {/* =========================================================
          HOMEPAGE CONTENT
      ========================================================= */}

      <div className="relative z-10 w-full">

        <ProductShowcase />
        <Projects />

        

        <Process />

        <Testimonials />

        <FinalCta />
      </div>
    </main>
  );
}