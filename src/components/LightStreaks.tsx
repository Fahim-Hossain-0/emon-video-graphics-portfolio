import { motion } from "framer-motion";

const streaks = [
  { angle: 25, top: "20%", left: "-10%", width: 300, delay: 0, color: "from-neon-purple/0 via-neon-purple/40 to-neon-purple/0" },
  { angle: -15, top: "60%", left: "60%", width: 250, delay: 2, color: "from-neon-cyan/0 via-neon-cyan/30 to-neon-cyan/0" },
  { angle: 35, top: "40%", left: "20%", width: 200, delay: 4, color: "from-neon-magenta/0 via-neon-magenta/30 to-neon-magenta/0" },
];

export default function LightStreaks() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {streaks.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute h-[1px] bg-gradient-to-r ${s.color}`}
          style={{
            top: s.top,
            left: s.left,
            width: s.width,
            rotate: `${s.angle}deg`,
          }}
          animate={{
            x: [0, 600],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: s.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
