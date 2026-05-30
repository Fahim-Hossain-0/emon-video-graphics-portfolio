/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrvisualvibes",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01715ef7cf234d750f?mp_source=share",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/mrvisualvibes",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/mrvisualvibes",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mdmustafijurr4",
  },
];

export default function Footer() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#e0e0e0] flex flex-col items-center justify-center px-4 py-16">
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none" />

      {/* Top Left */}
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-1 text-[10px] tracking-[0.3em] uppercase">
        <span className="text-gray-500">CAM_04 [REC]</span>

        <span className="text-red-500 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          SIGNAL_STRONG
        </span>
      </div>

      {/* Top Right */}
      {/* <div className="absolute top-6 right-6 z-10 text-right flex flex-col gap-1 text-[10px] tracking-[0.3em] uppercase">
        <span className="text-gray-500">20:11:29:78</span>
        <span className="text-gray-600">ISO 800</span>

        
      </div> */}

      {/* Diagonal Light */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[1px] h-[1000px] rotate-45 bg-gradient-to-t from-red-500 to-transparent opacity-40" />

        <div className="absolute w-4 h-4 rounded-full bg-white blur-sm shadow-[0_0_30px_white]" />
      </div> */}

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-red-500">
            CHANNEL OPEN
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[75px] playfair leading-tight font-light mb-8"
        >
          What if we <br /> worked together?
        </motion.h1>

        <motion.a
          href="mailto:mdmustafijurr4@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-red-500 tracking-[0.2em] uppercase text-sm mb-12 hover:opacity-70 transition"
        >
          mdmustafijurr4@gmail.com
        </motion.a>

        {/* Contact Button */}
        <div className="relative group">
          <a
            href="#"
            className="border border-slate-600 hover:border-accent-red px-12 py-6 uppercase font-medium text-lg lato transition duration-500"
          >
            Initiate Contact
          </a>

          <div className="absolute -bottom-10 -left-8 text-left">
            <span className="block w-2 h-2 bg-red-500 mb-1" />

            <span className="text-[8px] text-red-500 opacity-70 uppercase tracking-[0.2em]">
              SYSTEM ACTIVE
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-24 text-sm tracking-[0.2em] uppercase">
  {socialLinks.map((item) => (
    <a
      key={item.name}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#ff2a2a] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#ff2a2a] after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      [ {item.name} ]
    </a>
  ))}
</div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mt-32 flex flex-col lg:flex-row justify-center items-center lg:items-end gap-10 px-4">
        
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center gap-1 text-center lg:text-left">
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-600">
            Secure Line Established
          </span>

          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400">
            © 2026 Fahim Hossain
          </span>
        </div>

        {/* Right Card */}
        
      </footer>
    </main>
  );
}