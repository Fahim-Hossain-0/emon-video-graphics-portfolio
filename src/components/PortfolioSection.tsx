import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import thumbnail1 from "../assets/3945.jpg";
import thumbnail2 from "../assets/3947.jpg";
import thumbnail3 from "../assets/Untitled-1.jpg";
import thumbnail4 from "../assets/Thumbnail 2.jpg";
import thumbnail5 from "../assets/394.jpg";
import thumbnail6 from "../assets/39.jpg";
const thumbnails = [
  { title: "Gaming Thumbnail", category: "YouTube", img: thumbnail1 },
  { title: "Tech Review", category: "YouTube", img: thumbnail2 },
  { title: "Podcast Cover", category: "Podcast", img: thumbnail3 },
  { title: "Vlog Thumbnail", category: "YouTube", img: thumbnail4 },
  { title: "Music Video", category: "Music", img: thumbnail5 },
  { title: "Tutorial Series", category: "Education", img: thumbnail6 },
];

const videoEdits = [
  // { title: "Brand Commercial", duration: "0:30" video:},
  { title: "Music Video Edit", duration: "3:45" },
  { title: "Product Launch", duration: "1:20" },
  { title: "Social Media Reel", duration: "0:15" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <section id="work" className="pb-32 pt-24 px-4 relative">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-10 blur-[150px]" style={{ background: "hsl(var(--gradient-start))" }} />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
             {/* text */}
              <span className="gradient-text">Graphic's Design</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Thumbnails and video edits that drive engagement
          </p>
        </motion.div>

        {/* Thumbnail showcase - Staggered grid */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-semibold mb-8 gradient-text">Most Popular</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {thumbnails.map((thumb, i) => (
             <motion.div
  key={thumb.title}
  initial={{ opacity: 0, y: 30, rotate: -2 }}
  animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
  whileHover={{ scale: 1.05, rotate: 1, zIndex: 10 }}
  onHoverStart={() => setHoveredThumb(i)}
  onHoverEnd={() => setHoveredThumb(null)}
  onClick={() => setSelectedImage(thumb.img)}
  className="relative aspect-video glass-card overflow-hidden rounded-xl cursor-pointer group"
>
  <img
  src={thumb.img}
  alt={thumb.title}
  className=" opacity-[0.80] w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
/>

<div className="absolute inset-0 opacity-20" />

<div className="absolute inset-0 flex items-center justify-center">
  <div className="text-center">
    {/* <p className="font-display text-xl font-semibold text-transparent group-hover:text-[#6e47caaa] transition-colors duration-300">
      {thumb.title}
    </p> */}

    <p className="text-lg font-semibold text-transparent group-hover:text-white mt-1 transition-colors duration-300">
      {thumb.category}
    </p>
  </div>
</div>

               
  <motion.div
    className="absolute inset-0 bg-black/60 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: hoveredThumb === i ? 1 : 0 }}
  >
    {/* <ExternalLink className="w-8 h-8 text-white" /> */}
  </motion.div>
</motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text underline ">
             {/* text */}
              <span className="gradient-text">VIDEO'S</span>
          </h2>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Thumbnails and video edits that drive engagement
          </p> */}
        </motion.div>

        {/* Video editing showcase - Horizontal scroll cards */}
        <div>
          <h3 className="font-display text-2xl font-semibold mt-28 mb-8 gradient-text">Video Editing</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {videoEdits.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video glass-card gradient-border overflow-hidden rounded-xl cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-background" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center gradient-glow"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="font-display font-semibold text-foreground">{video.title}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-background/60 px-2 py-1 rounded-full backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* modal */}
      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      className="max-w-[90%] max-h-[90%] rounded-xl"
    />
  </div>
)}

    </section>
  );
};

export default PortfolioSection;
