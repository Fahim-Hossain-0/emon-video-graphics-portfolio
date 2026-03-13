import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import logo from "../assets/39.jpg";

type Item = {
  title: string;
  image: string;
};

type Category = {
  name: string;
  items: Item[];
};

const categories: Category[] = [
  {
    name: "Motion Graphics",
    items: [
      { title: "Motion 1", image: logo },
      { title: "Motion 2", image: logo },
      { title: "Motion 3", image: logo },
      { title: "Motion 4", image: logo },
    ],
  },
  {
    name: "Mockup Design",
    items: [
      { title: "Product Mockup", image: logo },
      { title: "App Mockup", image: logo },
      { title: "Brand Mockup", image: logo },
      { title: "Packaging Mockup", image: logo },
    ],
  },
  {
    name: "Banner & Cover",
    items: [
      { title: "YouTube Banner", image: logo },
      { title: "Facebook Cover", image: logo },
      { title: "LinkedIn Banner", image: logo },
      { title: "Web Banner", image: logo },
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
            MY <span className="gradient-text">WORK'S</span>
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
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Title */}
                <p className="font-display text-sm font-medium text-foreground">
                  {item.title}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CategorySection;