import { motion } from "framer-motion";

const tools = [
  { name: "Premiere Pro", abbr: "Pr", color: "hsl(270, 60%, 50%)" },
  { name: "After Effects", abbr: "Ae", color: "hsl(250, 70%, 55%)" },
  { name: "Photoshop", abbr: "Ps", color: "hsl(200, 80%, 45%)" },
  { name: "Illustrator", abbr: "Ai", color: "hsl(30, 90%, 50%)" },
  { name: "DaVinci", abbr: "Dv", color: "hsl(0, 70%, 45%)" },
];

export default function CreativeToolsBar() {
  return (
    <motion.div
      className="flex gap-4 justify-center flex-wrap relative"
      style={{ zIndex: 10 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.4 }}
    >
      {tools.map((tool, i) => (
        <motion.div
          key={tool.abbr}
          className="flex items-center gap-2 px-4 py-2 rounded-lg neon-border backdrop-blur-sm cursor-default"
          whileHover={{
            scale: 1.1,
            boxShadow: `0 0 20px ${tool.color.replace(")", " / 0.4)")}, 0 0 40px ${tool.color.replace(")", " / 0.2)")}`,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span
            className="text-sm font-display font-bold"
            style={{ color: tool.color }}
          >
            {tool.abbr}
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">{tool.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
