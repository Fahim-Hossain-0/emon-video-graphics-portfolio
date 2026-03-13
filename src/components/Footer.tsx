import { motion } from "framer-motion";
import Upwork from "../assets/icon/Upwork.png"
import whatsapp from "../assets/icon/whatsapp.png"
import pinterest from "../assets/icon/pinterest.png"
import linkedin from "../assets/icon/linkedin.png"
import behance from "../assets/icon/behance.png"
const Footer = () => (
  <footer className="py-16 px-4 border-t border-border relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="gradient-text">Create Together</span>
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
          Ready to elevate your brand? Let's bring your vision to life.
        </p>
        <div className="flex items-center justify-center gap-4 mx-auto mb-8">
          <a
          href="https://www.upwork.com/freelancers/~01715ef7cf234d750f?mp_source=share" target="_blank"
          className="inline-block gradient-bg px-2 py-2 rounded-full font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity gradient-glow"
        >
      
         <img className="w-8" src={Upwork} alt="Upwork" />
        </a>
        <a
          href="https://wa.me/+8801855519222" target="_blank" 
          className="inline-block gradient-bg px-2 py-2 rounded-full font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity gradient-glow"
        >
      
         <img className="w-8" src={whatsapp} alt="whatsapp" />
        </a>
        <a
          href="https://www.behance.net/mrvisualvibes"
          className="inline-block gradient-bg px-2 py-2 rounded-full font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity gradient-glow"
        >
      
         <img className="w-8" src={behance} alt="behance" />
        </a>
        <a
          href="https://www.linkedin.com/in/mrvisualvibes/" target="_blank"
          className="inline-block gradient-bg px-2 py-2 rounded-full font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity gradient-glow"
        >
      
         <img className="w-8" src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://pin.it/3xiPKILh7" target="_blank"
          className="inline-block gradient-bg px-2 py-2 rounded-full font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity gradient-glow"
        >
      
         <img className="w-8" src={pinterest} alt="pinterest" />
        </a>
        </div>
      </motion.div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm font-body">© 2026 Creative Studio. All rights reserved.</p>
        <div className="flex gap-6">
          {["Behance", "Dribbble", "Instagram", "YouTube"].map((social) => (
            <a key={social} href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body">
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
