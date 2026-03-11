import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const software = [
  { name: "Photoshop", color: "31A8FF" },
  { name: "Illustrator", color: "FF9A00" },
  { name: "Premiere Pro", color: "9999FF" },
  { name: "Adobe", color: "B54B83"},
  { name: "Figma", color: "A259FF" },
];

const SoftwareSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const duplicated = [...software, ...software];

  return (
    <section className="py-28 px-4 relative overflow-hidden">
      

      {/* Infinite sliding logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max" style={{ animation: "slide-logos 20s linear infinite " }}>
          {duplicated.map((sw, i) => (
            <div
              key={`${sw.name}-${i}`}
              className="flex-shrink-0 mx-8 glass-card gradient-border px-10 py-8 flex flex-col items-center gap-4 min-w-[180px]"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: `#${sw.color}20` }}>
                <span className="font-display text-2xl font-bold" style={{ color: `#${sw.color}` }}>
                  {sw.name.slice(0, 2)}
                </span>
              </div>
              <span className="font-display font-medium text-foreground text-sm whitespace-nowrap">{sw.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
