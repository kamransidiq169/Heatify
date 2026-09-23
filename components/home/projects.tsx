

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import { ArrowUpRight } from "lucide-react";

// type Project = {
//   slug: string;
//   title: string;
//   location: string;
//   type: string;
//   solution: string;
//   year: string;
//   image: string;
// };

// const projects: Project[] = [
//   {
//     slug: "luxury-residence-srinagar",
//     title: "Luxury Residence",
//     location: "Srinagar, Kashmir",
//     type: "Residential",
//     solution: "AquaBoard Low-Profile",
//     year: "2024",
//     image:
//       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=85",
//   },
//   {
//     slug: "boutique-hotel-ladakh",
//     title: "Cedar House Hotel",
//     location: "Manali, Himachal Pradesh",
//     type: "Hospitality",
//     solution: "AquaFlow Screed System",
//     year: "2023",
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format&fit=crop&q=85",
//   },
//   {
//     slug: "modern-villa-mumbai",
//     title: "Penthouse Residence",
//     location: "Mumbai, Maharashtra",
//     type: "Residential",
//     solution: "StickyMat 200W + SenseWarm Pro",
//     year: "2024",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=85",
//   },
//   {
//     slug: "hillside-chalet-shimla",
//     title: "Hillside Chalet",
//     location: "Shimla, Himachal Pradesh",
//     type: "Residential",
//     solution: "WowTherm ClimaBoard",
//     year: "2023",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85",
//   },
//   {
//     slug: "heritage-haveli-jaipur",
//     title: "Heritage Haveli Restoration",
//     location: "Jaipur, Rajasthan",
//     type: "Residential",
//     solution: "AquaBoard XT",
//     year: "2024",
//     image:
//       "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=85",
//   },
//   {
//     slug: "corporate-office-bengaluru",
//     title: "Tech Park Office Fit-Out",
//     location: "Bengaluru, Karnataka",
//     type: "Commercial",
//     solution: "AquaFlow ScreedPro",
//     year: "2023",
//     image:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&auto=format&fit=crop&q=85",
//   },
//   {
//     slug: "beachfront-villa-goa",
//     title: "Beachfront Villa",
//     location: "Anjuna, Goa",
//     type: "Residential",
//     solution: "StickyMat 150W",
//     year: "2024",
//     image:
//       "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600&auto=format&fit=crop&q=85",
//   },
//   {
//     slug: "boutique-spa-delhi",
//     title: "Boutique Wellness Spa",
//     location: "New Delhi",
//     type: "Hospitality",
//     solution: "SenseWarm Zone Control",
//     year: "2023",
//     image:
//       "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&auto=format&fit=crop&q=85",
//   },
// ];

// /* =========================================================
//    PROJECT CARD
// ========================================================= */

// function ProjectCard({
//   project,
//   index,
// }: {
//   project: Project;
//   index: number;
// }) {
//   const cardRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const element = cardRef.current;

//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           element.dataset.visible = "true";
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -8% 0px",
//       },
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <article
//       ref={cardRef}
//       data-project-card
//       className="
//         group
//         relative
//         opacity-0
//         translate-y-10
//         transition-[opacity,transform]
//         duration-[900ms]
//         ease-[cubic-bezier(0.22,1,0.36,1)]
//         data-[visible=true]:translate-y-0
//         data-[visible=true]:opacity-100
//       "
//       style={{
//         transitionDelay: `${Math.min(index * 70, 420)}ms`,
//       }}
//     >
//       {/* =================================================
//           IMAGE
//       ================================================= */}

//       <Link
//         href={`/projects#${project.slug}`}
//         className="
//           relative
//           block
//           overflow-hidden
//           rounded-[14px]
//           bg-[#deddd8]
//           focus-visible:outline-none
//           focus-visible:ring-2
//           focus-visible:ring-[#F2B84B]
//           focus-visible:ring-offset-4
//           focus-visible:ring-offset-[#f4f3fa]
//         "
//       >
//         <div
//           className="
//             relative
//             aspect-[1.48/1]
//             overflow-hidden
//             sm:aspect-[1.55/1]
//           "
//         >
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             unoptimized
//             sizes="
//               (max-width: 767px) 92vw,
//               (max-width: 1200px) 46vw,
//               44vw
//             "
//             draggable={false}
//             className="
//               object-cover
//               scale-[1.001]
//               transition-transform
//               duration-[900ms]
//               ease-[cubic-bezier(0.22,1,0.36,1)]
//               group-hover:scale-[1.045]
//             "
//           />

//           {/* Very subtle image overlay */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               bg-black/[0.025]
//               transition-opacity
//               duration-500
//               group-hover:bg-black-0
//             "
//           />

//           {/* Hover circle */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               right-4
//               top-4
//               flex
//               size-9
//               translate-y-2
//               items-center
//               justify-center
//               rounded-full
//               bg-white/90
//               opacity-0
//               shadow-[0_5px_20px_rgba(0,0,0,0.10)]
//               backdrop-blur-md
//               transition-all
//               duration-500
//               ease-[cubic-bezier(0.22,1,0.36,1)]
//               group-hover:translate-y-0
//               group-hover:opacity-100
//             "
//           >
//             <ArrowUpRight
//               className="
//                 size-3.5
//                 text-[#151515]
//               "
//               strokeWidth={1.7}
//             />
//           </div>
//         </div>
//       </Link>

//       {/* =================================================
//           META
//       ================================================= */}

//       <div
//         className="
//           mt-3
//           flex
//           items-center
//           gap-1.5
//           overflow-hidden
//           text-[7px]
//           font-medium
//           uppercase
//           tracking-[0.13em]
//           text-[#151515]/48
//           sm:text-[8px]
//         "
//       >
//         <span>{project.type}</span>

//         <span
//           className="
//             size-[2.5px]
//             shrink-0
//             rounded-full
//             bg-[#151515]/35
//           "
//         />

//         <span>{project.location}</span>

//         <span
//           className="
//             size-[2.5px]
//             shrink-0
//             rounded-full
//             bg-[#151515]/35
//           "
//         />

//         <span>{project.year}</span>
//       </div>

//       {/* =================================================
//           TITLE ROW
//       ================================================= */}

//       <Link
//         href={`/projects#${project.slug}`}
//         className="
//           mt-2
//           flex
//           items-center
//           justify-between
//           gap-4
//           border-b
//           border-[#151515]/12
//           pb-3
//         "
//       >
//         <div className="min-w-0">
//           <h3
//             className="
//               font-display
//               text-[18px]
//               font-normal
//               leading-[1.1]
//               tracking-[-0.025em]
//               text-[#151515]
//               sm:text-[20px]
//               md:text-[22px]
//             "
//           >
//             {project.title}
//           </h3>

//           <p
//             className="
//               mt-1.5
//               truncate
//               font-sans
//               text-[9px]
//               font-normal
//               tracking-[0.01em]
//               text-[#151515]/48
//               sm:text-[10px]
//             "
//           >
//             {project.solution}
//           </p>
//         </div>

//         <span
//           className="
//             flex
//             size-7
//             shrink-0
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-[#151515]/12
//             transition-all
//             duration-500
//             group-hover:border-[#F2B84B]
//             group-hover:bg-[#F2B84B]
//           "
//         >
//           <ArrowUpRight
//             className="
//               size-3
//               text-[#151515]/70
//               transition-transform
//               duration-500
//               group-hover:translate-x-[1px]
//               group-hover:-translate-y-[1px]
//             "
//             strokeWidth={1.6}
//           />
//         </span>
//       </Link>
//     </article>
//   );
// }

// /* =========================================================
//    PROJECTS SECTION
// ========================================================= */

// export function Projects() {
//   return (
//     <section
//       id="projects"
//       className="
//         relative
//         overflow-hidden
//         bg-[#f4f3fa]
//         px-5
//         pb-24
//         pt-24
//         sm:px-8
//         sm:pb-28
//         sm:pt-28
//         md:px-10
//         md:pb-36
//         md:pt-36
//         lg:px-14
//         xl:px-20
//       "
//     >
//       {/* =================================================
//           VERY SUBTLE BACKGROUND
//       ================================================= */}

//       <div
//         aria-hidden
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-70
//         "
//         style={{
//           background:
//             "radial-gradient(circle at 72% 12%, rgba(255,255,255,0.75), transparent 32%), radial-gradient(circle at 12% 78%, rgba(229,224,243,0.55), transparent 35%)",
//         }}
//       />

//       {/* =================================================
//           CONTENT
//       ================================================= */}

//       <div
//         className="
//           relative
//           mx-auto
//           w-full
//           max-w-[1440px]
//         "
//       >
//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <header
//           className="
//             mb-14
//             grid
//             grid-cols-1
//             gap-8
//             md:mb-20
//             md:grid-cols-[1fr_280px]
//             md:items-end
//             lg:grid-cols-[1fr_360px]
//           "
//         >
//           {/* LEFT */}

//           <div>
//             {/* Small brand mark */}

//             <div
//               className="
//                 mb-5
//                 flex
//                 items-center
//                 gap-2.5
//               "
//             >
//               <span
//                 className="
//                   block
//                   h-px
//                   w-7
//                   bg-[#151515]/35
//                 "
//               />

//               <span
//                 className="
//                   font-sans
//                   text-[8px]
//                   font-medium
//                   uppercase
//                   tracking-[0.22em]
//                   text-[#151515]/55
//                 "
//               >
//                 Selected Projects
//               </span>
//             </div>

//             {/* Main heading */}

//             <h2
//               className="
//                 max-w-[850px]
//                 font-display
//                 text-[clamp(3.3rem,7.4vw,7.8rem)]
//                 font-normal
//                 leading-[0.88]
//                 tracking-[-0.055em]
//                 text-[#101010]
//               "
//             >
//               Featured
//               <br />
//               <span className="relative inline-block">
//                 Work
//                 <span
//                   aria-hidden
//                   className="
//                     absolute
//                     -right-2
//                     bottom-[2px]
//                     h-[6px]
//                     w-[6px]
//                     rounded-full
//                     bg-[#F2B84B]
//                     sm:-right-3
//                     sm:bottom-2
//                     sm:h-2
//                     sm:w-2
//                   "
//                 />
//               </span>
//             </h2>
//           </div>

//           {/* RIGHT */}

//           <div
//             className="
//               flex
//               flex-col
//               justify-end
//               md:pb-1
//             "
//           >
//             <p
//               className="
//                 max-w-[330px]
//                 font-sans
//                 text-[11px]
//                 leading-[1.7]
//                 tracking-[0.005em]
//                 text-[#151515]/55
//                 md:text-[12px]
//               "
//             >
//               A selection of spaces where heating
//               disappears into the architecture —
//               leaving only comfort behind.
//             </p>

//             <div
//               className="
//                 mt-5
//                 flex
//                 items-center
//                 gap-3
//               "
//             >
//               <span
//                 className="
//                   font-mono
//                   text-[8px]
//                   tracking-[0.14em]
//                   text-[#151515]/40
//                 "
//               >
//                 08
//               </span>

//               <span
//                 className="
//                   h-px
//                   w-12
//                   bg-[#151515]/15
//                 "
//               />

//               <span
//                 className="
//                   font-sans
//                   text-[8px]
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#151515]/40
//                 "
//               >
//                 Projects
//               </span>
//             </div>
//           </div>
//         </header>

//         {/* =================================================
//             PROJECT GRID
//         ================================================= */}

//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-x-6
//             gap-y-14
//             sm:grid-cols-2
//             sm:gap-x-7
//             sm:gap-y-20
//             lg:gap-x-8
//             lg:gap-y-24
//           "
//         >
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={`${project.slug}-${index}`}
//               project={project}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* =================================================
//             BOTTOM CTA
//         ================================================= */}

//         <div
//           className="
//             mt-20
//             flex
//             justify-center
//             border-t
//             border-[#151515]/10
//             pt-10
//             md:mt-28
//             md:pt-12
//           "
//         >
//           <Link
//             href="/projects"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-[#151515]/15
//               bg-white/45
//               px-6
//               py-3
//               font-sans
//               text-[9px]
//               font-medium
//               uppercase
//               tracking-[0.16em]
//               text-[#151515]/75
//               backdrop-blur-sm
//               transition-all
//               duration-500
//               hover:border-[#F2B84B]
//               hover:bg-[#F2B84B]
//               hover:text-[#151515]
//             "
//           >
//             See all projects

//             <ArrowUpRight
//               className="
//                 size-3
//                 transition-transform
//                 duration-500
//                 group-hover:translate-x-0.5
//                 group-hover:-translate-y-0.5
//               "
//               strokeWidth={1.6}
//             />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  location: string;
  type: string;
  solution: string;
  year: string;
  image: string;
};

const projects: Project[] = [
  {
    slug: "luxury-residence-srinagar",
    title: "Luxury Residence",
    location: "Srinagar, Kashmir",
    type: "Residential",
    solution: "AquaBoard Low-Profile",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=85",
  },
  {
    slug: "boutique-hotel-ladakh",
    title: "Cedar House Hotel",
    location: "Manali, Himachal Pradesh",
    type: "Hospitality",
    solution: "AquaFlow Screed System",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format&fit=crop&q=85",
  },
  {
    slug: "modern-villa-mumbai",
    title: "Penthouse Residence",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    solution: "StickyMat 200W + SenseWarm Pro",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=85",
  },
  {
    slug: "hillside-chalet-shimla",
    title: "Hillside Chalet",
    location: "Shimla, Himachal Pradesh",
    type: "Residential",
    solution: "WowTherm ClimaBoard",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85",
  },
  {
    slug: "heritage-haveli-jaipur",
    title: "Heritage Haveli Restoration",
    location: "Jaipur, Rajasthan",
    type: "Residential",
    solution: "AquaBoard XT",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=85",
  },
  {
    slug: "corporate-office-bengaluru",
    title: "Tech Park Office Fit-Out",
    location: "Bengaluru, Karnataka",
    type: "Commercial",
    solution: "AquaFlow ScreedPro",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&auto=format&fit=crop&q=85",
  },
  {
    slug: "beachfront-villa-goa",
    title: "Beachfront Villa",
    location: "Anjuna, Goa",
    type: "Residential",
    solution: "StickyMat 150W",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600&auto=format&fit=crop&q=85",
  },
  {
    slug: "boutique-spa-delhi",
    title: "Boutique Wellness Spa",
    location: "New Delhi",
    type: "Hospitality",
    solution: "SenseWarm Zone Control",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&auto=format&fit=crop&q=85",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const rect = card.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * CARD POSITION
       *
       * 0 = card center is around bottom of viewport
       * 0.5 = card center is at viewport center
       * 1 = card center is around top of viewport
       */

      const cardCenter =
        rect.top + rect.height / 2;

      const progress =
        1 -
        Math.abs(
          cardCenter -
            viewportHeight * 0.52,
        ) /
          (viewportHeight * 0.62);

      const clamped = Math.max(
        0,
        Math.min(1, progress),
      );

      /*
       * MAIN SCALE
       *
       * Far away:
       *   0.84
       *
       * Near center:
       *   1.00
       */

      const scale =
        0.84 +
        clamped * 0.16;

      /*
       * Opacity follows the scale,
       * but never becomes completely invisible.
       */

      const opacity =
        0.42 +
        clamped * 0.58;

      /*
       * Small vertical movement.
       */

      const translateY =
        (1 - clamped) * 35;

      /*
       * Perspective rotation.
       *
       * Cards slightly lean when
       * they are away from center.
       */

      const distanceFromCenter =
        cardCenter -
        viewportHeight * 0.52;

      const rotate =
        Math.max(
          -2.2,
          Math.min(
            2.2,
            distanceFromCenter /
              220,
          ),
        );

      /*
       * Image scale becomes more
       * alive as the card grows.
       */

      const imageScale =
        1.015 +
        clamped * 0.045;

      /*
       * Subtle blur away from center.
       */

      const blur =
        (1 - clamped) * 1.8;

      card.style.transform = `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
        rotate(${rotate}deg)
      `;

      card.style.opacity =
        String(opacity);

      card.style.setProperty(
        "--project-image-scale",
        String(imageScale),
      );

      card.style.setProperty(
        "--project-blur",
        `${blur}px`,
      );

      card.style.setProperty(
        "--project-progress",
        String(clamped),
      );
    };

    const requestUpdate = () => {
      if (!raf) {
        raf =
          window.requestAnimationFrame(
            update,
          );
      }
    };

    update();

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      requestUpdate,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      if (raf) {
        window.cancelAnimationFrame(
          raf,
        );
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      data-project-card
      className="
        group
        relative
        will-change-transform
      "
      style={{
        opacity: 0.42,
        transform:
          "translate3d(0, 35px, 0) scale(.84)",
      }}
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <Link
        href={`/projects#${project.slug}`}
        className="
          relative
          block
          overflow-hidden
          rounded-[16px]
          bg-[#deddd8]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#F2B84B]
          focus-visible:ring-offset-4
          focus-visible:ring-offset-[#f4f3fa]
        "
      >
        <div
          className="
            relative
            aspect-[1.48/1]
            overflow-hidden
            sm:aspect-[1.55/1]
          "
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            sizes="
              (max-width: 767px) 92vw,
              (max-width: 1200px) 46vw,
              44vw
            "
            draggable={false}
            className="
              object-cover
              will-change-transform
              transition-transform
              duration-300
              ease-out
              group-hover:scale-[1.045]
            "
            style={{
              transform:
                "scale(var(--project-image-scale, 1.02))",
              filter:
                "blur(var(--project-blur, 0px))",
            }}
          />

          {/* subtle image overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/[0.025]
              transition-opacity
              duration-500
              group-hover:opacity-0
            "
          />

          {/* top index */}

          <div
            className="
              pointer-events-none
              absolute
              left-4
              top-4
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-black/10
              px-3
              py-1.5
              backdrop-blur-md
            "
          >
            <span className="size-1.5 rounded-full bg-[#F2B84B]" />

            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[0.18em]
                text-white/85
              "
            >
              {String(index + 1).padStart(
                2,
                "0",
              )}
            </span>
          </div>

          {/* Hover circle */}

          <div
            className="
              pointer-events-none
              absolute
              right-4
              top-4
              flex
              size-10
              translate-y-2
              items-center
              justify-center
              rounded-full
              bg-white/90
              opacity-0
              shadow-[0_5px_20px_rgba(0,0,0,0.10)]
              backdrop-blur-md
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <ArrowUpRight
              className="size-3.5 text-[#151515]"
              strokeWidth={1.7}
            />
          </div>
        </div>
      </Link>

      {/* =================================================
          META
      ================================================= */}

      <div
        className="
          mt-3
          flex
          items-center
          gap-1.5
          overflow-hidden
          text-[7px]
          font-medium
          uppercase
          tracking-[0.13em]
          text-[#151515]/48
          sm:text-[8px]
        "
      >
        <span>{project.type}</span>

        <span
          className="
            size-[2.5px]
            shrink-0
            rounded-full
            bg-[#151515]/35
          "
        />

        <span>{project.location}</span>

        <span
          className="
            size-[2.5px]
            shrink-0
            rounded-full
            bg-[#151515]/35
          "
        />

        <span>{project.year}</span>
      </div>

      {/* =================================================
          TITLE ROW
      ================================================= */}

      <Link
        href={`/projects#${project.slug}`}
        className="
          mt-2
          flex
          items-center
          justify-between
          gap-4
          border-b
          border-[#151515]/12
          pb-3
        "
      >
        <div className="min-w-0">
          <h3
            className="
              font-display
              text-[18px]
              font-normal
              leading-[1.1]
              tracking-[-0.025em]
              text-[#151515]
              sm:text-[20px]
              md:text-[22px]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1.5
              truncate
              font-sans
              text-[9px]
              font-normal
              tracking-[0.01em]
              text-[#151515]/48
              sm:text-[10px]
            "
          >
            {project.solution}
          </p>
        </div>

        <span
          className="
            flex
            size-7
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#151515]/12
            transition-all
            duration-500
            group-hover:border-[#F2B84B]
            group-hover:bg-[#F2B84B]
          "
        >
          <ArrowUpRight
            className="
              size-3
              text-[#151515]/70
              transition-transform
              duration-500
              group-hover:translate-x-[1px]
              group-hover:-translate-y-[1px]
            "
            strokeWidth={1.6}
          />
        </span>
      </Link>
    </article>
  );
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

export function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-x-clip
        bg-[#f4f3fa]
        px-5
        pb-24
        pt-24
        sm:px-8
        sm:pb-28
        sm:pt-28
        md:px-10
        md:pb-36
        md:pt-36
        lg:px-14
        xl:px-20
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
        "
        style={{
          background:
            "radial-gradient(circle at 72% 12%, rgba(255,255,255,0.75), transparent 32%), radial-gradient(circle at 12% 78%, rgba(229,224,243,0.55), transparent 35%)",
        }}
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <header
          className="
            mb-14
            grid
            grid-cols-1
            gap-8
            md:mb-20
            md:grid-cols-[1fr_280px]
            md:items-end
            lg:grid-cols-[1fr_360px]
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                mb-5
                flex
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  block
                  h-px
                  w-7
                  bg-[#151515]/35
                "
              />

              <span
                className="
                  font-sans
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#151515]/55
                "
              >
                Selected Projects
              </span>
            </div>

            <h2
              className="
                max-w-[850px]
                font-display
                text-[clamp(3.3rem,7.4vw,7.8rem)]
                font-normal
                leading-[0.88]
                tracking-[-0.055em]
                text-[#101010]
              "
            >
              Featured
              <br />

              <span className="relative inline-block">
                Work

                <span
                  aria-hidden
                  className="
                    absolute
                    -right-2
                    bottom-[2px]
                    h-[6px]
                    w-[6px]
                    rounded-full
                    bg-[#F2B84B]
                    sm:-right-3
                    sm:bottom-2
                    sm:h-2
                    sm:w-2
                  "
                />
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-col
              justify-end
              md:pb-1
            "
          >
            <p
              className="
                max-w-[330px]
                font-sans
                text-[11px]
                leading-[1.7]
                tracking-[0.005em]
                text-[#151515]/55
                md:text-[12px]
              "
            >
              A selection of spaces where heating
              disappears into the architecture —
              leaving only comfort behind.
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.14em]
                  text-[#151515]/40
                "
              >
                08
              </span>

              <span
                className="
                  h-px
                  w-12
                  bg-[#151515]/15
                "
              />

              <span
                className="
                  font-sans
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-[#151515]/40
                "
              >
                Projects
              </span>
            </div>
          </div>
        </header>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-x-6
            gap-y-20
            sm:grid-cols-2
            sm:gap-x-7
            sm:gap-y-28
            lg:gap-x-8
            lg:gap-y-36
          "
        >
          {projects.map(
            (project, index) => (
              <ProjectCard
                key={`${project.slug}-${index}`}
                project={project}
                index={index}
              />
            ),
          )}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div
          className="
            mt-24
            flex
            justify-center
            border-t
            border-[#151515]/10
            pt-10
            md:mt-36
            md:pt-12
          "
        >
          <Link
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#151515]/15
              bg-white/45
              px-6
              py-3
              font-sans
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#151515]/75
              backdrop-blur-sm
              transition-all
              duration-500
              hover:border-[#F2B84B]
              hover:bg-[#F2B84B]
              hover:text-[#151515]
            "
          >
            See all projects

            <ArrowUpRight
              className="
                size-3
                transition-transform
                duration-500
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
              strokeWidth={1.6}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;