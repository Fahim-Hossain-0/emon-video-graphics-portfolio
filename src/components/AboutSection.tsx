import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Activity,
  Terminal,
  Fingerprint,
  Layers,
  Award
} from "lucide-react";
import bannerImg from "../assets/banner/hero.png"

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: <Instagram size={14} />, label: "IG", url: "#" },
    { icon: <Twitter size={14} />, label: "TW", url: "#" },
    { icon: <Linkedin size={14} />, label: "LN", url: "#" },
    { icon: <Mail size={14} />, label: "EM", url: "mailto:hello@mustafizur.com" },
    { icon: <Globe size={14} />, label: "WEB", url: "#" },
  ];

  return (
    <section id="about" className="about-section scroll-mt-0 bg-black">
      <div className="profiler-container" ref={ref}>
        {/* Left Col: Identity/Photo */}
        <motion.div 
          className="col-identity relative overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
            <Fingerprint size={300} />
          </div>
          <div className="profiler-module no-scan relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Fingerprint size={24} className="text-accent-red opacity-50" />
              <div className="identity-name mono uppercase tracking-widest text-xs">Subject Profile: <br />Mustafizur Rahman</div>
            </div>
            <div className="scanner-frame-profile aspect-[4/5] relative">
              <img 
                src={bannerImg}
                alt="Profile" 
                className="photo-img-profile" 
              />
              <div className="scanner-grid-overlay-profile" />
              <div className="face-target-box-profile">
                <div className="ft-corner-profile ft-tl" />
                <div className="ft-corner-profile ft-tr" />
                <div className="ft-corner-profile ft-bl" />
                <div className="ft-corner-profile ft-br" />
              </div>
              <div className="scan-data-profile data-top-profile uppercase">TYPE: CREATIVE_LEAD</div>
              <div className="scan-data-profile data-bot-profile uppercase">STATUS: ACTIVE</div>
              <div className="scan-beam" />
            </div>
          </div>

          <div className="id-data-grid">
            <div className="p-3 bg-[#0a0a0a] border border-[#222] group hover:border-accent-red transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="id-label mono uppercase text-[10px] text-[#666]">Experience</span>
              </div>
              <span className="id-val text-white block">5+ Years</span>
            </div>
            <div className="p-3 bg-[#0a0a0a] border border-[#222] group hover:border-accent-red transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="id-label mono uppercase text-[10px] text-[#666]">Location</span>
              </div>
              <span className="id-val text-white block">Global / Remote</span>
            </div>
            <div className="status-wrapper">
              <div className="status-bg-scroll" />
              <div className="status-header mono flex items-center gap-2">
                <Activity size={10} className="text-accent-red" />
                AVAILABILITY: HIGH
              </div>
              <div className="status-main flex items-center justify-center gap-3">
                OPERATIONAL
              </div>
              <div className="status-footer mono">
                <ShieldCheck size={10} className="text-accent-red/50" />
                <span>SECURE_V1.2</span>
              </div>
            </div>

            <div className="id-socials-grid">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  className="social-access-node"
                  aria-label={link.label}
                >
                  <span className="node-icon">{link.icon}</span>
                  <span className="node-label mono">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center Col: Behavior/Description */}
        <motion.div 
          className="col-behavior"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="analysis-header flex items-center gap-3">
            <Terminal size={14} className="text-accent-red" />
            <span className="text-accent-red mono uppercase">{" >> "}PSYCH_REPORT_ANALYSIS</span>
            <span className="opacity-40 mono uppercase ml-auto">TS: {new Date().toLocaleDateString()}</span>
          </div>

          <div className="psych-report">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 serif uppercase">
              File <span className="text-accent-red">Information</span>
            </h2>
            {/* evidence-highlight */}
            <p className="lato text-gray-300 leading-relaxed mb-6">
              I am <span className="evidence-highlight">Mostafijur Rahman</span> a multi-disciplinary Visual Artist & Editor professionally known as mrvisualvibes. With over 5 years of experience crafting premium visual identities and cinematic stories, <span className="evidence-highlight ">my expertise bridges high-end graphic design, precision video editing, and dynamic motion graphics.</span>
 
            </p>
            <p className="lato text-gray-300 leading-relaxed mb-10">
              My mission is to empower modern brands through minimalist aesthetics and strategic storytelling. From static pixels to fluid motion, I ensure every single frame delivers maximum value and leaves a powerful global impression.

            </p>
          </div>

          <div className="dossier-history">
            <div className="history-block">
              <div className="flex items-center gap-3 mb-6">
                <Award size={14} className="text-accent-red opacity-50" />
                <h4 className="mono text-[#666] uppercase tracking-widest text-xs m-0">Project Metrics</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { num: "500+", label: "Artifacts Delivered" },
                  { num: "120+", label: "Verified Clients" },
                  { num: "98%", label: "Retention Rate" },
                ].map((stat, i) => (
                  <div key={i} className="history-item">
                    <div className="history-header">
                      <span className="history-date text-accent-red font-bold text-2xl">{stat.num}</span>
                    </div>
                    <div className="text-gray-400 text-xs mono uppercase tracking-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col: Capabilities */}
        <motion.div 
          className="col-capabilities relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute top-1/4 right-0 pointer-events-none opacity-[0.03]">
            <Layers size={200} />
          </div>
          <div className="profiler-module cap-top no-scan relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={18} className="text-accent-red" />
              <span className="cat-title !mb-0">Core Systems</span>
            </div>
            <div className="chips-grid">
              {["BRAND IDENTITY", "VISUAL DESIGN", "PRINT & PACKAGING", "VIDEO EDITING", "MOTION GRAPHICS", "COLOR GRADING","SOUND DESIGN","THUMBNAIL STRATEGY","VISUAL EFFECTS (VFX)"].map((skill, i) => (
                <span key={i} className="tech-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="threat-level profiler-module">
            <div className="alert-box">
              <div className="alert-ripple" />
              <svg className="alert-svg h-full w-full" viewBox="0 0 100 100">
                <path className="triangle-bg" d="M50 15L85 85H15L50 15Z" />
                <path className="triangle-line" d="M50 15L85 85H15L50 15Z" />
                <rect className="alert-mark-bar" x="48" y="40" width="4" height="20" rx="2" />
                <circle className="alert-mark-dot" cx="50" cy="68" r="2.5" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-accent-red mono text-[10px] uppercase tracking-widest">Impact Level</div>
              <div className="text-2xl font-bold text-white uppercase tracking-tighter">Critical</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
