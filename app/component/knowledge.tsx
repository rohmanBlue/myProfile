"use client";

import React from "react";
import {
  SiNextdotjs,
  SiVite,
  SiReact,
  SiExpress,
  SiPrisma,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiRailway,
  SiDigitalocean,
  SiHostinger,
  SiTailwindcss,
  SiReact as SiReactIcon,
  SiNginx,
  SiGithub,
  SiOpenai,
  SiGithubactions,
  SiVercel,
  SiJsonwebtokens,
  SiPassport, 
  SiTypescript,
  SiContentful,
  SiStripe, 
  
} from "react-icons/si";
import { CBadge } from "@coreui/react";

const Knowledge: React.FC = () => {
  const sections = [
    {
      title: "Frontend",
      items: [
        { icon: <SiNextdotjs />, label: "Next.js" },
        { icon: <SiVite />, label: "Vite" },
        { icon: <SiReact />, label: "React" }, 
      ],
    },
    {
      title: "Backend",
      items: [ 
        { icon: <SiNodedotjs />, label: "Node.js" },
        { icon: <SiExpress />, label: "Express" },
        { icon: <SiPrisma />, label: "Prisma" },
      ],
    },
    {
      title: "Database & Cloud",
      items: [
        { icon: <SiSupabase />, label: "Supabase" },
        { icon: <SiPostgresql />, label: "PostgreSQL" },
        { icon: <SiRailway />, label: "Railway" },
        { icon: <SiDigitalocean />, label: "DigitalOcean" }, 
        { icon: <SiHostinger />, label: "Hostinger" },
        { icon: <SiVercel />, label: "Vercel" },

      ], 
    },
    {
      title: "UI & Tools",
      items: [
        { icon: <CBadge color="primary">C</CBadge>, label: "Core UI" },
        { icon: <span className="font-bold text-sm">HeroUI</span>, label: "Hero UI" },
        { icon: <span className="font-bold text-sm">Shadcn</span>, label: "Shadcn UI" },
        { icon: <span className="font-bold text-sm">UIColors</span>, label: "UIColors.app" },
        { icon: <span className="font-bold text-sm">Zustand</span>, label: "Zustand Store" },
        { icon: <SiTailwindcss />, label: "TailwindCSS" },
        { icon: <SiReactIcon />, label: "React Icons" },
        { icon: <SiNginx />, label: "Nginx" },
        { icon: <SiGithub />, label: "GitHub" },
        { icon: <SiOpenai />, label: "ChatGPT Pro" },
        { icon: <SiGithubactions />, label: "GitHub Actions" }, 
        { icon: <SiJsonwebtokens />, label: "JWT" },
        { icon: <SiPassport />, label: "Passport" }, 
        { icon: <SiTypescript />, label: "TypeScript" },
         { icon: <span className="font-bold text-sm">HOC </span>, label: "HOC" },
         { icon: <SiNginx />, label: "Nginx" }, 
         { icon: <SiContentful />, label: "Contentful CMS" }, 
         { icon: <SiStripe />, label: "Stripe CMS" }, 
      ],
    },
  ];

  const projects = [
    "Yayasan Mangrove Lestari",
    "Event CMS",
    "My Profile",
    "ZyraHouse : sewa tempat tanpa bosen",
    "Itlo Search engine", 
  ];

  return (
    <section
      id="Project"
      className="w-full bg-[#6b63f1] py-20 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1e1b4b]">
          Project
        </h2>
        <p className="text-[#1e1b4b]/70 text-base mt-3">
          Tools, Frameworks & Technologies I work with
        </p>
      </div>

      {/* Grid utama */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, i) => (
          <div
            key={i}
            className="bg-[#1e1b4b]/40 border border-[#b9b5ff]/30 
                       rounded-3xl p-8 shadow-lg backdrop-blur-md
                       hover:shadow-xl transition-all duration-500"
          >
            <h3 className="text-xl font-semibold mb-8 text-center text-[#e2e0ff]">
              {section.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-3xl">
              {section.items.map((item, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center text-center gap-2 group"
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-2xl
                               border border-[#1e1b4b]/50 bg-[#1e1b4b]/20
                               group-hover:bg-[#1e1b4b]/10 transition-all duration-300"
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-[#e2e0ff]/60 group-hover:text-[#e2e0ff] transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Project Website */}
        <div
          className="bg-[#1e1b4b]/40 border border-[#b9b5ff]/30 rounded-3xl p-8
                     shadow-lg backdrop-blur-md hover:shadow-xl transition-all duration-500"
        >
          <h3 className="text-xl font-semibold mb-8 text-center text-[#e2e0ff]">
            Project Website
          </h3>
          <ul className="space-y-3 text-center text-[#e2e0ff]/60 text-base font-medium">
            {projects.map((p, i) => (
              <li
                key={i}
                className="hover:text-[#e2e0ff] transition-all duration-300"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
