import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, ArrowUp } from "lucide-react";

const signaturePathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.5, ease: "easeInOut" as const },
  },
};

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "var(--footer-gradient)" }}
    >
      {/* Floating glow orbs */}
      <motion.div
        className="footer-glow-orb w-[400px] h-[400px] -top-40 -left-20"
        style={{ background: "hsl(260 80% 50%)" }}
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="footer-glow-orb w-[300px] h-[300px] top-10 right-0"
        style={{ background: "hsl(220 70% 50%)" }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="footer-glow-orb w-[200px] h-[200px] bottom-0 left-1/3"
        style={{ background: "hsl(280 60% 45%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* SVG underline swoosh */}
        <div className="relative">
          <motion.h2
            className="signature-text text-6xl md:text-8xl font-bold text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            mrvisualvibes
          </motion.h2>

          {/* Animated signature underline */}
          <motion.svg
            viewBox="0 0 361 50"
            className="w-[100%] mx-auto mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.path
              d="M10 35 Q60 5 120 30 T240 20 T360 30 Q380 35 390 25"
              fill="none"
              stroke="url(#sig-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={signaturePathVariants}
            />
            <defs>
              <linearGradient id="sig-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(45 90% 75%)" />
                <stop offset="50%" stopColor="hsl(260 70% 60%)" />
                <stop offset="100%" stopColor="hsl(280 60% 55%)" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-muted-foreground text-lg tracking-widest uppercase text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          Creating Visual Magic
        </motion.p>

        {/* Divider line */}
        <motion.div
          className="w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(260 70% 60% / 0.4), hsl(220 60% 50% / 0.4), transparent)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Social icons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Instagram, label: "Instagram" },
            { icon: Youtube, label: "YouTube" },
            { icon: Mail, label: "Email" },
          ].map(({ icon: Icon, label }) => (
            <motion.a
              key={label}
              href="#"
              aria-label={label}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-colors relative group"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(260 70% 60% / 0.3), hsl(220 60% 50% / 0.3))",
                }}
              />
              <Icon className="w-5 h-5 relative z-10" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-sm text-muted-foreground">
          <p>© 2026 mrvisualvibes. All rights reserved.</p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
            whileHover={{ y: -3 }}
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
