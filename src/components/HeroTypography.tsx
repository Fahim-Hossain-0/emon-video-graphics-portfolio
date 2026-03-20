import { motion } from "framer-motion";
import { useState } from "react";

const line1 = "Crafting Stories.";
const line2 = "Designing Experiences.";

function GlowingLetter({ char, index, delay }: { char: string; index: number; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      className="inline-block cursor-default"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay + index * 0.03 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textShadow: hovered
          ? "0 0 20px hsl(270 80% 60% / 0.9), 0 0 60px hsl(185 80% 50% / 0.5), 0 0 100px hsl(320 80% 55% / 0.3)"
          : "0 0 10px hsl(270 80% 60% / 0.3)",
        color: hovered ? "hsl(185, 80%, 70%)" : undefined,
        transition: "text-shadow 0.3s, color 0.3s",
      }}
      whileHover={{ scale: 1.15, y: -5 }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function HeroTypography() {
  return (
    <div className="text-center relative" style={{ zIndex: 10 }}>
      <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight tracking-tight text-foreground">
        <div className="mb-2">
          {line1.split("").map((char, i) => (
            <GlowingLetter key={i} char={char} index={i} delay={0.3} />
          ))}
        </div>
        <div className="text-glow-cyan">
          {line2.split("").map((char, i) => (
            <GlowingLetter key={i} char={char} index={i} delay={0.9} />
          ))}
        </div>
      </h1>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        Video Editor · Motion Designer · Visual Storyteller
      </motion.p>

      {/* Neon underline */}
      <motion.div
        className="mx-auto mt-4 h-[2px] rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(270 80% 60%), hsl(185 80% 50%), hsl(320 80% 55%), transparent)",
        }}
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
      />
    </div>
  );
}
