import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

import img39 from "../assets/graphic/thumbnail_design/39.jpg"
import img394 from "../assets/graphic/thumbnail_design/394.jpg"
import img3945 from "../assets/graphic/thumbnail_design/3945.jpg"
import img3946 from "../assets/graphic/thumbnail_design/3946.jpg"
import img3947 from "../assets/graphic/thumbnail_design/3947.jpg"
import img3948 from "../assets/graphic/thumbnail_design/3948.jpg"
import Thumbnail from "../assets/graphic/thumbnail_design/Thumbnail.jpg"
import Untitled001 from "../assets/graphic/thumbnail_design/Untitled-1.jpg"

const thumbnails = [
  { image: img394 },
      { image: img3945 },
      { image: img3948   },
      { image: img3946 },
      { image:  img3947 },
      { image:  Thumbnail },
      { image:  Untitled001 },
      { image:  img39 },
];

const videoEdits = [
  {
    title: "Brand Commercial",
    duration: "6:05",
    videoId: "zosM4A8UhrA",
  },
  {
    title: "Music Video Edit",
    duration: "1:15",
    videoId: "zosM4A8UhrA",
  },
  {
    title: "Product Launch",
    duration: "0:51",
    videoId: "zosM4A8UhrA",
  },
  {
    title: "Social Media Reel",
    duration: "3:24",
    videoId: "zosM4A8UhrA",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="work" className="pb-24 pt-24 px-4 relative">
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-10 blur-[150px]"
        style={{ background: "hsl(var(--gradient-start))" }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Recent Work's</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Thumbnails and video edits that drive engagement
          </p>
        </motion.div>

        {/* THUMBNAILS */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-semibold mb-8 gradient-text">
            Most Popular
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {thumbnails.map((thumb, i) => (
              <motion.div
                // key={thumb.title}
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                onHoverStart={() => setHoveredThumb(i)}
                onHoverEnd={() => setHoveredThumb(null)}
                onClick={() => setSelectedImage(thumb.image)}
                className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
              >
                <img
                  src={thumb.image}
                  // alt={thumb.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                />

                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg font-semibold text-transparent group-hover:text-white transition duration-300">
                    {thumb.category}
                  </p>
                </div> */}

                <motion.div
                  className="absolute inset-0 bg-black/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredThumb === i ? 1 : 0 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* VIDEO HEADER */}
  
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text underline">
            VIDEO'S
          </h2>
        </motion.div> */}

        {/* VIDEO GRID */}
       
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <iframe
            src={selectedVideo}
            className="w-[90%] h-[90%] rounded-xl"
            allow="autoplay; encrypted-media"
            allowFullScreen
            onClick={(e) => e.stopPropagation()}
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;