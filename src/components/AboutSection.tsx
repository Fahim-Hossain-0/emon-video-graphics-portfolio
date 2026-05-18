import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "../assets/banner/hero.png"

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about-section scroll-mt-0">
      <div className="profiler-container" ref={ref}>
        {/* Left Col: Identity/Photo */}
        <motion.div 
          className="col-identity"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="profiler-module no-scan">
            <div className="identity-name mono uppercase tracking-widest mb-4">Subject Profile: M. Rahman</div>
            <div className="scanner-frame-profile aspect-[4/5] relative">
              <img 
                src={heroImage}
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
            <div className="p-3 bg-[#0a0a0a] border border-[#222]">
              <span className="id-label mono uppercase text-[10px] text-[#666]">Experience</span>
              <span className="id-val text-white block">5+ Years</span>
            </div>
            <div className="p-3 bg-[#0a0a0a] border border-[#222]">
              <span className="id-label mono uppercase text-[10px] text-[#666]">Location</span>
              <span className="id-val text-white block">Global / Remote</span>
            </div>
            <div className="status-wrapper">
              <div className="status-bg-scroll" />
              <div className="status-header mono">
                <span className="live-dot" />
                AVAILABILITY: HIGH
              </div>
              <div className="status-main">OPERATIONAL</div>
              <div className="status-footer mono">
                <span>SYSTEM_V_OR_1.2</span>
                <span>SECURE</span>
              </div>
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
          <div className="analysis-header">
            <span className="text-accent-red mono uppercase">{" >> "}PSYCH_REPORT_ANALYSIS</span>
            <span className="opacity-40 mono uppercase">TIMESTAMP: {new Date().toLocaleDateString()}</span>
          </div>

          <div className="psych-report">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 serif uppercase">
              About <span className="text-accent-red">Mustafizur</span>
            </h2>
            <p className="lato text-gray-300 leading-relaxed mb-6">
              I'm a passionate <span className="evidence-highlight">graphic designer</span> and <span className="evidence-highlight">video editor</span> with over 5 years
              of experience crafting compelling visuals that captivate audiences. 
            </p>
            <p className="lato text-gray-300 leading-relaxed mb-10">
              My mission is to help brands stand out through stunning design and cinematic editing that leaves a lasting impression. I treat every frame as an <span className="evidence-highlight">evidence of high-end motion</span>.
            </p>
          </div>

          <div className="dossier-history">
            <div className="history-block">
              <h4 className="mono text-[#666] uppercase mb-6 tracking-widest text-xs">Project Metrics</h4>
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
          className="col-capabilities"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profiler-module cap-top no-scan">
            <span className="cat-title">Core Systems</span>
            <div className="chips-grid">
              {["Motion Graphics", "Video Editing", "VFX Layout", "Color Grading", "Visual FX", "Cinematography"].map((skill, i) => (
                <span key={i} className="tech-chip">{skill}</span>
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
