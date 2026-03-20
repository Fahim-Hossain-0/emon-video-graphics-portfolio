import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Item = {
  video: string;
};

type Category = {
  name: string;
  items: Item[];
};

const categories: Category[] = [
  {
    name: "Social Media Reels",
    items: [
      { video: "https://www.youtube.com/embed/1pzJxAmL06k" },
      { video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
    ],
  },
  {
    name: "2D Motion AB",
    items: [
      { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { video: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    ],
  },
  {
    name: "Music & Lyrics",
    items: [
      { video: "https://www.youtube.com/embed/kJQP7kiw5Fk" },
    ],
  },
  {
    name: "Promotionals",
    items: [
      { video: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
    ],
  },
];

const EditingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [active, setActive] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [loadingVideos, setLoadingVideos] = useState<{ [key: string]: boolean }>({});

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
            <span className="gradient-text">Video's and Motion's</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Explore the different areas of my creative expertise
          </p>
        </motion.div>

        {/* Tabs */}
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

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories[active].items.map((item, i) => {
            const videoId = item.video.split("/embed/")[1];

            return (
              <motion.div
                key={i}
                onClick={() => setSelectedVideo(item.video)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square glass-card flex items-center justify-center p-2 cursor-pointer group"
              >
                <div className="relative w-full h-full">

                  {/* Loader */}
                  {loadingVideos[item.video] !== false && (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-xl">
                      <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    onLoad={() =>
                      setLoadingVideos((prev) => ({ ...prev, [item.video]: false }))
                    }
                    className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                      loadingVideos[item.video] === false ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                      ▶
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/60 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
            >
              ✕
            </button>

            {/* Video */}
            <iframe
              src={`${selectedVideo}?autoplay=1`}
              className="w-full h-[70vh] rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default EditingSection;