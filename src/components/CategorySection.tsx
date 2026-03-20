import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import logo from "../assets/39.jpg";

// brandIdentity
import jc_Dark from "../assets/graphic/brand identity/JC Dark-01.png"
import LOGO4 from "../assets/graphic/brand identity/LOGO4-01.png"
import Red from "../assets/graphic/brand identity/Red-01-01.png"
import SilverFoilLogoMockup from "../assets/graphic/brand identity/Silver-Foil-Logo-Mockup.jpg"
import TriplyWorld from "../assets/graphic/brand identity/Triply World-01.jpg"
import Untitled1 from "../assets/graphic/brand identity/Untitled-1-01-01.jpg"
import Untitled2 from "../assets/graphic/brand identity/Untitled-3-01.jpg"
import Untitled4 from "../assets/graphic/brand identity/Untitled-4-01.jpg"

// social media design
import team from "../assets/graphic/social media design/8.jpg"
import Content from "../assets/graphic/social media design/Content 02.jpg"
import DeadlyDozen from "../assets/graphic/social media design/Deadly Dozen.jpg"
import Demo from "../assets/graphic/social media design/Demo.jpg"
import MarriageAnniversary from "../assets/graphic/social media design/Marriage Anniversary.jpg"
import Untitled5 from "../assets/graphic/social media design/Untitled-1 (2).jpg"
import Untitled6 from "../assets/graphic/social media design/Untitled-2 (1).jpg"
import Untitled7 from "../assets/graphic/social media design/Untitled-23.jpg"

// Banner & Cover
// ---------

// thumbnail design


type Item = {
  image: string;
};

type Category = {
  name: string;
  items: Item[];
};

const categories: Category[] = [
  {
    name: "Brand Identity",
    items: [
      {image:jc_Dark },
      {image: LOGO4 },
      {image: Red },
      {image: SilverFoilLogoMockup },
      {image: TriplyWorld },
      {image: Untitled1 },
      {image: Untitled2 },
      {image: Untitled4 },
    ],
  },
  {
    name: "Social Media",
    items: [
      { image: team },
      { image: Content },
      { image: DeadlyDozen },
      { image: Demo },
      { image: MarriageAnniversary },
      { image: Untitled5 },
      { image: Untitled6 },
      { image: Untitled7 },
    ],
  },
  {
    name: "Banner & Cover",
    items: [
      { image: logo },
      { image: logo },
      { image: logo },
      { image: logo },
    ],
  },
  {
    name: "Thumbnail Design",
    items: [
      { image: logo },
      { image: logo },
      { image: logo },
      { image: logo },
    ],
  },
];

const CategorySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="categories" className="pb-32 pt-28 px-4 relative">
      
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[150px]"
        style={{ background: "hsl(var(--gradient-end))" }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
             <span className="gradient-text">Graphic's Design </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Explore the different areas of my creative expertise
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-display font-medium text-sm transition-all ${
                active === i
                  ? "gradient-bg text-primary-foreground gradient-glow"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories[active].items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square glass-card gradient-border flex items-center justify-center p-6 cursor-pointer group"
            >
              <div className="text-center">

                {/* Image */}
                <div className="mx-auto rounded-xl bg-muted mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Category ${active} Item ${i}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Title */}
                {/* <p className="font-display text-sm font-medium text-foreground">
                  {item.title}
                </p> */}

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CategorySection;