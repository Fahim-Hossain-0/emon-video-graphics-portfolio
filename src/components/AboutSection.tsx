import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import hero from "../assets/hero.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="pt-20 px-4 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "hsl(var(--gradient-start))" }}
      />

      <div
        ref={ref}
        className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-[4/4] rounded-2xl overflow-hidden gradient-border">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <img src={hero} alt="Profile Photo" className="w-[70%]" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="w-16 h-1 gradient-bg rounded-full mb-6" />

          <p className="text-muted-foreground text-base leading-relaxed mb-4 font-body">
            I'm a passionate graphic designer and video editor with over 5 years
            of experience crafting compelling visuals that captivate audiences.
          </p>

          <p className="text-muted-foreground text-base leading-relaxed mb-6 font-body">
            My mission is to help brands stand out through stunning design and
            cinematic editing that leaves a lasting impression.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { num: "500+", label: "Projects" },
              { num: "120+", label: "Clients" },
              { num: "5+", label: "Years" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card gradient-border p-3 text-center"
              >
                <div className="font-display text-xl font-bold gradient-text">
                  {stat.num}
                </div>
                <div className="text-muted-foreground text-xs font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
