import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-1 bg-[#6b63f1] text-[#1e1b4b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-5 py-2 flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-[#1e1b4b]/40 w-full text-[#1e1b4b] rounded-xl backdrop-blur-md border border-[#8881f8] ">
        
        {/* Brand */}
        <div className="font-bold text-lg text-center md:text-left pr-5">
          Rohman<span className="text-[#f9d38e]">.dev</span>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left text-sm font-sans font-medium px-2 md:px-0">
          Copyright©2025 Rohman.dev - Semua info ini dilindungi hukum & hak kepemilikan.
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          {/* Facebook */}
          <a href="#" className="hover:-translate-y-1 transition-all duration-300">
            <svg width="24" height="24" fill="none" stroke="#1e1b4b" strokeOpacity={0.8} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="hover:-translate-y-1 transition-all duration-300">
            <svg width="24" height="24" fill="none" stroke="#1e1b4b" strokeOpacity={0.8} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"/>
              <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="hover:-translate-y-1 transition-all duration-300">
            <svg width="24" height="24" fill="none" stroke="#1e1b4b" strokeOpacity={0.8} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" className="hover:-translate-y-1 transition-all duration-300">
            <svg width="24" height="24" fill="none" stroke="#1e1b4b" strokeOpacity={0.8} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
