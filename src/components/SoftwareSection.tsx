import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// logos
import davinci from "../assets/logos/DaVinci_Resolve_Studio.png";
import Adobe_XD from "../assets/logos/Adobe_XD_CC_icon.svg.png";
import Adobe_Premiere_Pro from "../assets/logos/Adobe_Premiere_Pro_CC_icon.svg.png";
import Adobe_Photoshop from "../assets/logos/Adobe_Photoshop_CC_icon.svg.png";
import Adobe_InDesign from "../assets/logos/Adobe_InDesign_CC_icon.svg.png";
import Adobe_Illustrator from "../assets/logos/Adobe_Illustrator_CC_icon.svg.png";
import Adobe_After_Effects from "../assets/logos/Adobe_After_Effects_CC_icon.svg.png";

const software = [
  { name: "DaVinci Resolve", logo: davinci },
  { name: "Adobe XD", logo: Adobe_XD },
  { name: "Premiere Pro", logo: Adobe_Premiere_Pro },
  { name: "Photoshop", logo: Adobe_Photoshop },
  { name: "InDesign", logo: Adobe_InDesign },
  { name: "Illustrator", logo: Adobe_Illustrator },
  { name: "After Effects", logo: Adobe_After_Effects },
];

const SoftwareSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

const duplicated = [...software, ...software,...software,...software,...software]; // Duplicate to create a seamless loop   


  return (
    <section className="pt-16 px-4 overflow-hidden">
      <div ref={ref} className="relative">

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex w-max gap-24"
          style={{ animation: "slide-logos 20s linear infinite" }}
        >
          {duplicated.map((sw, i) => (
            <div
              key={`${sw.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={sw.logo}
                alt={sw.name}
                className="h-12 md:h-14 object-contain transition duration-300"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SoftwareSection;
