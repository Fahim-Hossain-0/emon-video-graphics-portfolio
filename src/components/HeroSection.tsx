import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleField from "@/components/ParticleField";
import FloatingShapes from "@/components/FloatingShapes";
import LightStreaks from "@/components/LightStreaks";
import HeroTypography from "@/components/HeroTypography";
import CreativeToolsBar from "@/components/CreativeToolsBar";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, hsl(270 80% 60% / 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, hsl(185 80% 50% / 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, hsl(320 80% 55% / 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Layers */}
      <ParticleField />
      <FloatingShapes />
      <LightStreaks />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(240 15% 5% / 0.8) 100%)",
          zIndex: 3,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 gap-8" style={{ zIndex: 10 }}>
        {/* Tool icons bar */}
        <CreativeToolsBar />

        {/* Main Typography */}
        <HeroTypography />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          style={{ zIndex: 10 }}
        >
          {/* <Button variant="neon" size="xl">
            Explore My Work
          </Button> */}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ zIndex: 10 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-neon-purple"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
