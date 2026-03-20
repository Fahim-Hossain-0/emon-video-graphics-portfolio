import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingShape {
  id: number;
  type: "triangle" | "circle" | "diamond" | "ring";
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const NEON_COLORS = [
  "border-neon-purple",
  "border-neon-cyan",
  "border-neon-magenta",
];

const shapes: FloatingShape[] = [
  { id: 1, type: "triangle", x: 8, y: 15, size: 40, color: NEON_COLORS[0], delay: 0, duration: 7 },
  { id: 2, type: "circle", x: 85, y: 20, size: 30, color: NEON_COLORS[1], delay: 1, duration: 8 },
  { id: 3, type: "diamond", x: 75, y: 70, size: 35, color: NEON_COLORS[2], delay: 0.5, duration: 6 },
  { id: 4, type: "ring", x: 15, y: 75, size: 50, color: NEON_COLORS[1], delay: 2, duration: 9 },
  { id: 5, type: "triangle", x: 90, y: 50, size: 25, color: NEON_COLORS[2], delay: 1.5, duration: 7 },
  { id: 6, type: "circle", x: 50, y: 85, size: 20, color: NEON_COLORS[0], delay: 3, duration: 8 },
  { id: 7, type: "diamond", x: 30, y: 10, size: 28, color: NEON_COLORS[1], delay: 0.8, duration: 10 },
];

function ShapeRenderer({ shape }: { shape: FloatingShape }) {
  const baseClass = `border-2 ${shape.color} opacity-20`;

  switch (shape.type) {
    case "triangle":
      return (
        <div
          className={`${baseClass} w-0 h-0`}
          style={{
            width: 0, height: 0,
            borderLeft: `${shape.size / 2}px solid transparent`,
            borderRight: `${shape.size / 2}px solid transparent`,
            borderBottom: `${shape.size}px solid currentColor`,
          }}
        />
      );
    case "circle":
      return <div className={`${baseClass} rounded-full`} style={{ width: shape.size, height: shape.size }} />;
    case "diamond":
      return <div className={`${baseClass} rotate-45`} style={{ width: shape.size, height: shape.size }} />;
    case "ring":
      return <div className={`${baseClass} rounded-full`} style={{ width: shape.size, height: shape.size }} />;
  }
}

export default function FloatingShapes() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {shapes.map((shape) => {
        const parallaxX = (mousePos.x - 0.5) * 20 * (shape.id % 3 === 0 ? 1 : -1);
        const parallaxY = (mousePos.y - 0.5) * 20 * (shape.id % 2 === 0 ? 1 : -1);

        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              x: parallaxX,
              y: parallaxY,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, shape.type === "diamond" ? 90 : 10, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          >
            <ShapeRenderer shape={shape} />
          </motion.div>
        );
      })}
    </div>
  );
}
