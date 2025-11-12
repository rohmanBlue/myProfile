"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiVercel,
  SiNextdotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiNginx,
  SiSupabase,
  SiPostgresql,
  SiPrisma,
  SiRailway,
  SiDigitalocean 
} from "react-icons/si";

const partners = [
  { name: "Vercel", icon: <SiVercel size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} /> },
  { name: "Express", icon: <SiExpress size={24} /> },
  { name: "React", icon: <SiReact size={24} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={24} /> },
  { name: "GitHub", icon: <SiGithub size={24} /> },
  { name: "Nginx", icon: <SiNginx size={24} /> },
  { name: "Supabase", icon: <SiSupabase size={24} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
  { name: "Prisma", icon: <SiPrisma size={24} /> },
  { name: "Railway", icon: <SiRailway size={24} /> },
  { name: "DigitalOcean", icon: <SiDigitalocean size={24} /> } 
  ];

const Partner: React.FC = () => {
  const repeated = [...partners, ...partners];

  return (
    <div className="relative py-20 overflow-hidden px-6 sm:px-10 md:px-24 lg:px-96">
      {/* Blur kiri & kanan */}
      <div className="absolute top-0 left-0 sm:left-10 md:left-24 lg:left-96 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-[#6b63f1] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 right-0 sm:right-10 md:right-24 lg:right-96 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-[#6b63f1] to-transparent pointer-events-none z-20" />

      {/* Judul */}
      <div className="text-xl sm:text-2xl font-medium text-center pb-10 z-10 relative">
        Tools
      </div>

      {/* Animasi Partner */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...repeated, ...repeated].map((item, index) => (
            <Card
              key={index}
              className="min-w-[100px] sm:min-w-[130px] h-20 sm:h-24 flex items-center justify-center border mx-2 sm:mx-3 rounded-2xl
                         bg-[#1e1b4b]/60 backdrop-blur-xl border-[#e2e0ff]/60 text-[#e2e0ff] hover:bg-[#1e1b4b]/80 transition"
            >
              <CardContent className="flex flex-col gap-1 items-center justify-center w-full h-full p-0">
                <div className="text-2xl">{item.icon}</div>
                <span className="text-center font-medium text-xs sm:text-sm text-[#efeeff]/60">
                  {item.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
