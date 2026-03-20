import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const software = [
  { name: "Photoshop", color: "31A8FF" },
  { name: "Illustrator", color: "FF9A00" },
  { name: "Premiere Pro", color: "9999FF" },
  { name: "Adobe", color: "B54B83"},
  { name: "Figma", color: "A259FF" },
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
    <section className="pt-20 px-4 relative overflow-hidden">
      
      <div className="relative">
        

        <div className="flex w-max" style={{ animation: "slide-logos 20s linear infinite" }}>
          {duplicated.map((sw, i) => (
            <div
              key={`${sw.name}-${i}`}
              className="flex-shrink-0 mx-4 glass-card  px-5 py-4 flex flex-col items-center gap-2 min-w-[120px]"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: `#${sw.color}20` }}
              >
                <span
                  className="font-display text-sm font-bold"
                  style={{ color: `#${sw.color}` }}
                >
                  {sw.name.slice(0, 2)}
                </span>
              </div>

              <span className="font-display font-medium text-xs whitespace-nowrap">
                {sw.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
